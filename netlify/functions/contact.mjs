import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL || 'robertonaddaf99@hotmail.com';
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
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(cleanPhone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>
      `,
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
