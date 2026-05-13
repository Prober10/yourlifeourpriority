import { Mail } from 'lucide-react';
import { Hero } from '../components/Hero.jsx';
import { LogoMark } from '../components/LogoMark.jsx';
import { heroImages, privacyItems } from '../data/siteData.js';

export function Privacy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        text="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        variant="privacy"
        image={heroImages.privacy}
        imageLabel="Digital privacy shield with lock"
      />
      <section className="privacy-content">
        <p>At Your Life Our Priority, we are committed to protecting your personal information and being transparent about how we handle your data. This Privacy Policy applies to all information collected through our website and services.</p>
        <div className="privacy-list">
          {privacyItems.map(([title, copy, Icon], index) => (
            <article key={title}>
              <span className="privacy-icon"><Icon size={26} /></span>
              <span className="privacy-number">{index + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="privacy-cta">
        <LogoMark />
        <h2>We respect your privacy and are committed to protecting your personal information.</h2>
        <div>
          <Mail size={30} />
          <strong>Need Help?</strong>
          <p>Contact us anytime for questions about your privacy and data.</p>
        </div>
      </section>
    </>
  );
}
