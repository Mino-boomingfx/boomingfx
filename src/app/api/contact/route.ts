import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import defaultData from '@/data/siteContent.json';

export const dynamic = 'force-dynamic';

function getSmtpConfig() {
  try {
    if (defaultData && (defaultData as any).smtpSettings) {
      return (defaultData as any).smtpSettings;
    }
  } catch (err) {
    console.error('Error reading smtpSettings:', err);
  }
  return null;
}

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
    const targetRecipients = [
      primaryEmail,
      'mbarthelemy513@gmail.com',
      'mbarthelemy523@gmail.com'
    ];
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

    // 1. Direct Official SMTP via Nodemailer (Dynamic from Admin Panel or Env)
    const savedSmtp = getSmtpConfig();
    const smtpHost = savedSmtp?.host || process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = Number(savedSmtp?.port || process.env.SMTP_PORT || 465);
    const smtpUser = savedSmtp?.user || process.env.SMTP_USER || primaryEmail;
    const smtpPassword = savedSmtp?.pass || '@Boomingfx55';
    const smtpSecure = savedSmtp?.secure !== undefined ? savedSmtp.secure : smtpPort === 465;

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const info = await transporter.sendMail({
        from: `"BoomingFX Portal" <${smtpUser}>`,
        to: targetRecipients.join(', '),
        replyTo: `"${fullName}" <${email}>`,
        subject: `⚡ New Inquiry from ${fullName} - BoomingFX`,
        text: `⚡ NEW INBOUND LEAD - BOOMINGFX\n\nFull Name: ${fullName}\nEmail: ${email}\nDate: ${dateStr}\n\nInquiry Message:\n${message}\n\n---\nBoomingFX Website Portal (10665 Jasper Ave, Edmonton)`,
        html: emailHtml,
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'high',
        },
      });

      dispatched = true;
      return NextResponse.json({ success: true, method: 'smtp', messageId: info.messageId });
    } catch (smtpErr: any) {
      console.error('SMTP delivery error:', smtpErr);
      return NextResponse.json(
        { success: false, error: smtpErr?.message || 'Failed to dispatch via SMTP' },
        { status: 500 }
      );
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

    return NextResponse.json({ success: true, method: 'smtp' });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}
