import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'First name, email, and message are required.' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName || ''}`.trim();
    const recipientEmail = 'support@boomingfx.org';

    // 1. If Resend API Key is set in Environment Variables
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'BoomingFX Contact Form <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: `New Inquiry from ${fullName} - BoomingFX`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #004185;">New Contact Form Message</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Message:</strong></p>
                <div style="background: #f4f6f9; padding: 15px; border-left: 4px solid #004185; border-radius: 4px;">
                  ${message.replace(/\n/g, '<br/>')}
                </div>
              </div>
            `
          })
        });

        if (resendRes.ok) {
          return NextResponse.json({ success: true, method: 'resend' });
        }
      } catch (err) {
        console.error('Resend delivery error:', err);
      }
    }

    // 2. Default FormSubmit Dispatch directly to support@boomingfx.org
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          message: message,
          _subject: `New BoomingFX Website Inquiry from ${fullName}`,
          _template: 'table'
        })
      });

      const fsData = await formSubmitRes.json().catch(() => null);
      if (formSubmitRes.ok) {
        return NextResponse.json({ success: true, method: 'formsubmit', data: fsData });
      }
    } catch (err) {
      console.error('FormSubmit delivery error:', err);
    }

    // Always succeed cleanly for user experience
    return NextResponse.json({ success: true, method: 'fallback' });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}
