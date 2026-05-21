import { Hero } from '../components/Hero.jsx';
import { LogoMark } from '../components/LogoMark.jsx';
import { contactMethods, heroImages } from '../data/siteData.js';

export function Contact() {
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
        <div className="contact-support-card">
          <LogoMark />
          <h2>Questions about your coverage?</h2>
          <p>Choose the channel that works best for you and we will help you find the right protection for your needs.</p>
        </div>
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
