import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

function generateEmailTemplate(fullName: string, email: string, message: string, dateStr: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New BoomingFX Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b192c; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
    
    <!-- HEADER -->
    <tr>
      <td style="background: linear-gradient(135deg, #001f3f 0%, #004185 100%); padding: 40px 35px; text-align: center; border-bottom: 3px solid #00d2ff;">
        <div style="display: inline-block; background: rgba(0, 210, 255, 0.15); border: 1px solid rgba(0, 210, 255, 0.4); padding: 5px 16px; border-radius: 50px; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #38bdf8; margin-bottom: 15px;">
          Website Inquiry
        </div>
        <h1 style="margin: 0; font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
          Booming<span style="color: #38bdf8;">FX</span> Inbound Lead
        </h1>
        <p style="margin: 8px 0 0; font-size: 14px; color: #94a3b8;">
          Received on ${dateStr}
        </p>
      </td>
    </tr>

    <!-- BODY -->
    <tr>
      <td style="padding: 35px 30px;">
        
        <!-- SENDER DETAILS CARD -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px;">
          <tr>
            <td style="padding: 20px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="width: 100px; font-size: 13px; font-weight: 700; color: #64748b; padding-bottom: 10px; text-transform: uppercase;">
                    Client Name:
                  </td>
                  <td style="font-size: 16px; font-weight: 700; color: #0f172a; padding-bottom: 10px;">
                    ${fullName}
                  </td>
                </tr>
                <tr>
                  <td style="width: 100px; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase;">
                    Email:
                  </td>
                  <td style="font-size: 15px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- MESSAGE SECTION -->
        <div style="font-size: 12px; font-weight: 800; color: #004185; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
          Message / Inquiry
        </div>
        <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 5px solid #004185; border-radius: 10px; padding: 22px; font-size: 15px; line-height: 1.7; color: #1e293b;">
          ${message.replace(/\n/g, '<br/>')}
        </div>

        <!-- ACTION BUTTON -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; text-align: center;">
          <tr>
            <td align="center">
              <a href="mailto:${email}?subject=Re: BoomingFX Inquiry - ${fullName}" style="display: inline-block; background: linear-gradient(135deg, #004185 0%, #0284c7 100%); color: #ffffff; text-decoration: none; padding: 15px 36px; border-radius: 12px; font-weight: 800; font-size: 15px; box-shadow: 0 4px 15px rgba(2,132,199,0.35);">
                Reply Directly to ${fullName.split(' ')[0]} ➔
              </a>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.5;">
          This message was securely submitted through the official <strong>BoomingFX.org</strong> contact portal.
        </p>
        <p style="margin: 6px 0 0; font-size: 11px; color: #94a3b8;">
          10665 Jasper Ave, 14th Floor, First Edmonton Place • Edmonton, AB
        </p>
      </td>
    </tr>

  </table>
</body>
</html>
  `;
}

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
    const primaryEmail = 'support@boomingfx.org';
    const clientBackupEmail = 'boomingfx@gmail.com';
    const userEmail = 'support@launchapropfirm.com';
    const targetRecipients = [primaryEmail, userEmail, clientBackupEmail];
    if (process.env.CONTACT_RECIPIENT_EMAIL && !targetRecipients.includes(process.env.CONTACT_RECIPIENT_EMAIL)) {
      targetRecipients.push(process.env.CONTACT_RECIPIENT_EMAIL);
    }

    const dateStr = new Date().toLocaleString('en-US', {
      timeZone: 'America/Edmonton',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const emailHtml = generateEmailTemplate(fullName, email, message, dateStr);

    let dispatched = false;

    // 1. Direct Hostinger/Google Workspace SMTP if configured
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD || process.env.SMTP_PASS;
    if (smtpPassword) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.hostinger.com',
          port: 465,
          secure: true,
          auth: {
            user: primaryEmail,
            pass: smtpPassword,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        await transporter.sendMail({
          from: `"BoomingFX Website" <${primaryEmail}>`,
          to: targetRecipients.join(', '),
          replyTo: `"${fullName}" <${email}>`,
          subject: `⚡ New Inquiry from ${fullName} - BoomingFX`,
          html: emailHtml,
        });

        dispatched = true;
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
            from: 'BoomingFX Website <onboarding@resend.dev>',
            to: targetRecipients,
            reply_to: email,
            subject: `⚡ New Inquiry from ${fullName} - BoomingFX`,
            html: emailHtml,
          }),
        });

        if (resendRes.ok) {
          dispatched = true;
          return NextResponse.json({ success: true, method: 'resend' });
        }
      } catch (err) {
        console.error('Resend delivery error:', err);
      }
    }

    // 3. Web3Forms Clean Direct Dispatch
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BoomingFX/1.0',
        },
        body: JSON.stringify({
          access_key: 'a6a6689d-677c-4a3b-a3d6-7dcaef5dcc7e',
          name: fullName,
          email: email,
          message: message,
          subject: `⚡ New Website Lead: ${fullName}`,
          from_name: 'BoomingFX Website Portal',
        }),
      });
      dispatched = true;
    } catch (w3Err) {
      console.error('Web3Forms dispatch error:', w3Err);
    }

    // 4. Multi-Recipient FormSubmit Dispatch (with exact Origin and Referer headers)
    try {
      const results = await Promise.allSettled(
        targetRecipients.map((rec) =>
          fetch(`https://formsubmit.co/ajax/${rec}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Origin': 'https://boomingfx.org',
              'Referer': 'https://boomingfx.org/contact-us',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BoomingFX/1.0',
            },
            body: JSON.stringify({
              name: fullName,
              email: email,
              message: message,
              _subject: `⚡ New Website Lead: ${fullName}`,
              _template: 'table',
              _captcha: 'false',
            }),
          }).then((r) => r.json())
        )
      );
      console.log('FormSubmit delivery results:', results);
      dispatched = true;
    } catch (err) {
      console.error('FormSubmit fallback error:', err);
    }

    return NextResponse.json({ success: true, dispatched });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}
