import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL || 'ask.rolandadvisory@gmail.com';
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Roland Khalil <onboarding@resend.dev>';

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405, { Allow: 'POST' });
  }

  if (!process.env.RESEND_API_KEY) {
    return json({ error: 'Email service is not configured.' }, 500);
  }

  try {
    const { name, email, phone, message } = await request.json();
    const cleanName = normalize(name);
    const cleanEmail = normalize(email);
    const cleanPhone = normalize(phone);
    const cleanMessage = normalize(message);

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
      return json({ error: 'Please complete all fields.' }, 400);
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: cleanEmail,
      subject: `New contact request from ${cleanName}`,
      html: buildContactEmail({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
      }),
    });

    if (error) {
      return json({ error: 'Email could not be sent.' }, 500);
    }

    return json({ ok: true });
  } catch {
    return json({ error: 'Email could not be sent.' }, 500);
  }
}

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

function normalize(value) {
  return String(value || '').trim();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };

    return entities[character];
  });
}

function buildContactEmail({ name, email, phone, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  return `
    <!doctype html>
    <html>
      <body style="margin:0; padding:0; background:#f3f6fb; font-family:Arial, Helvetica, sans-serif; color:#071936;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6fb; padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; background:#ffffff; border:1px solid #e7edf4; border-radius:12px; overflow:hidden;">
                <tr>
                  <td style="padding:26px 30px; background:#072b66;">
                    <p style="margin:0 0 6px; color:#f0c456; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Roland Khalil Advisory</p>
                    <h1 style="margin:0; color:#ffffff; font-size:24px; line-height:1.25;">New website contact request</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 30px 10px;">
                    <p style="margin:0 0 22px; color:#5e6b7d; font-size:15px; line-height:1.6;">A visitor submitted the contact form on the website. Their details are below.</p>
                    ${detailRow('Full Name', safeName)}
                    ${detailRow('Email Address', `<a href="mailto:${safeEmail}" style="color:#072b66; text-decoration:none;">${safeEmail}</a>`)}
                    ${detailRow('Phone Number', `<a href="tel:${safePhone.replace(/\s/g, '')}" style="color:#072b66; text-decoration:none;">${safePhone}</a>`)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 30px 30px;">
                    <p style="margin:0 0 8px; color:#071936; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Message</p>
                    <div style="padding:18px 20px; background:#f8fbff; border:1px solid #e7edf4; border-radius:10px; color:#071936; font-size:16px; line-height:1.65;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 30px; background:#f8fbff; border-top:1px solid #e7edf4;">
                    <p style="margin:0; color:#5e6b7d; font-size:13px; line-height:1.5;">You can reply directly to this email to contact ${safeName}.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function detailRow(label, value) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 12px; border:1px solid #e7edf4; border-radius:10px;">
      <tr>
        <td style="padding:14px 16px; width:34%; background:#f8fbff; color:#5e6b7d; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">${label}</td>
        <td style="padding:14px 16px; color:#071936; font-size:15px; font-weight:700;">${value}</td>
      </tr>
    </table>
  `;
}
