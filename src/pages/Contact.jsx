import { Send } from 'lucide-react';
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
          <p>Reach out to us through any of the following channels.</p>
          {contactMethods.map(([Icon, label, value, tone]) => (
            <ContactMethod key={label} Icon={Icon} label={label} value={value} tone={tone} />
          ))}
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>Full Name<input type="text" placeholder="Your full name" /></label>
          <label>Email Address<input type="email" placeholder="Your email address" /></label>
          <label>Phone Number<input type="tel" placeholder="Your phone number" /></label>
          <label>Message<textarea placeholder="How can we help you?" rows="5" /></label>
          <button className="gold-cta" type="submit">Send Message <Send size={18} /></button>
        </form>
      </section>
      <section className="wide-photo-cta">
        <LogoMark />
        <h2>We're here to help you and your loved ones build a secure future.</h2>
      </section>
    </>
  );
}

function ContactMethod({ Icon, label, value, tone = 'email' }) {
  return (
    <article className="contact-method">
      <span className={tone}><Icon size={28} /></span>
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </article>
  );
}
