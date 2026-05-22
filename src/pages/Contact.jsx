import { Send } from 'lucide-react';
import { useState } from 'react';
import { Hero } from '../components/Hero.jsx';
import { LogoMark } from '../components/LogoMark.jsx';
import { contactMethods, heroImages } from '../data/siteData.js';

export function Contact() {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setFormStatus({ state: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Message could not be sent.');
      }

      form.reset();
      setFormStatus({ state: 'success', message: 'Message sent successfully.' });
    } catch (error) {
      setFormStatus({
        state: 'error',
        message: error.message || 'Message could not be sent. Please try WhatsApp instead.',
      });
    }
  }

  return (
    <>
      <Hero
        title="Contact Us"
        text="We'd love to hear from you. Let's talk about your future."
        variant="contact"
        image={heroImages.contact}
        imageLabel="Hands using a phone to contact insurance support"
      />
      <section className="contact-section">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Reach out directly through phone, WhatsApp, or Instagram.</p>
          <div className="contact-method-grid">
            {contactMethods.map(([Icon, label, value, tone, href]) => (
              <ContactMethod key={label} Icon={Icon} label={label} value={value} tone={tone} href={href} />
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your full name" autoComplete="name" required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="Your email address" autoComplete="email" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="Your phone number" autoComplete="tel" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="How can we help you?" required />
          </label>
          <button className="gold-cta" type="submit" disabled={formStatus.state === 'loading'}>
            {formStatus.state === 'loading' ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </button>
          {formStatus.message ? (
            <p className={`form-status ${formStatus.state}`} role="status" aria-live="polite">
              {formStatus.message}
            </p>
          ) : null}
        </form>
      </section>
      <section className="wide-photo-cta">
        <LogoMark />
        <h2>We're here to help you and your loved ones build a secure future.</h2>
      </section>
    </>
  );
}

function ContactMethod({ Icon, label, value, tone = 'email', href }) {
  return (
    <a className="contact-method" href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined}>
      <span className={tone}><Icon size={28} /></span>
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </a>
  );
}
