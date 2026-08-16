import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // 1. Direct Hostinger SMTP via Nodemailer
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD || process.env.SMTP_PASS;
    if (smtpPassword) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.hostinger.com',
          port: 465,
          secure: true, // SSL
          auth: {
            user: recipientEmail,
            pass: smtpPassword,
          },
        });

        await transporter.sendMail({
          from: `"BoomingFX Website" <${recipientEmail}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Inquiry from ${fullName} - BoomingFX`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 25px; color: #1e293b; background: #f8fafc; border-radius: 12px;">
              <h2 style="color: #004185; margin-top: 0;">New Contact Form Message</h2>
              <p style="font-size: 16px;"><strong>Name:</strong> ${fullName}</p>
              <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #004185;">${email}</a></p>
              <p style="font-size: 16px;"><strong>Message:</strong></p>
              <div style="background: #ffffff; padding: 18px; border-left: 4px solid #004185; border-radius: 6px; font-size: 15px; line-height: 1.6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                ${message.replace(/\n/g, '<br/>')}
              </div>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;" />
              <p style="font-size: 12px; color: #64748b;">Sent directly from BoomingFX.org website contact form.</p>
            </div>
          `,
        });

        return NextResponse.json({ success: true, method: 'smtp' });
      } catch (smtpErr) {
        console.error('SMTP delivery error:', smtpErr);
      }
    }

    // 2. Resend API Integration
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
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({ success: true, method: 'resend' });
        }
      } catch (err) {
        console.error('Resend delivery error:', err);
      }
    }

    // 3. FormSubmit fallback dispatch
    try {
      await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
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
          _template: 'table',
        }),
      });
    } catch (err) {
      console.error('FormSubmit error:', err);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}
