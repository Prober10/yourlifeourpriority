import { CTA } from '../components/CTA.jsx';
import { Hero } from '../components/Hero.jsx';
import { LogoMark } from '../components/LogoMark.jsx';
import { heroImages, Shield, Target, values } from '../data/siteData.js';

export function About({ navigate }) {
  return (
    <>
      <Hero
        title="About Us"
        gold="We are here to protect what matters most to you."
        text="We provide reliable and comprehensive insurance solutions designed to give you peace of mind today and security for tomorrow."
        variant="about"
        image={heroImages.about}
        imageLabel="Family looking toward a secure future"
      />
      <section className="split-section">
        <div>
          <div className="heading-with-icon">
            <LogoMark />
            <h2>Who We Are</h2>
          </div>
          <p>We are a team of experienced insurance professionals passionate about helping individuals and families safeguard their health, income, and future.</p>
          <p>With integrity, transparency, and personalized service, we build trusted relationships that last a lifetime.</p>
        </div>
        <div className="photo-panel advisors" aria-label="Insurance advisor meeting with clients" />
      </section>
      <section className="values-band">
        <h2>Our Core Values</h2>
        <div className="value-grid">
          {values.map(([title, copy, Icon]) => (
            <article key={title}>
              <span><Icon size={28} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mission-band">
        <InfoBlock Icon={Target} title="Our Mission" text="To empower individuals and families with the right protection and financial security through every stage of life." />
        <InfoBlock Icon={Shield} title="Our Vision" text="To be a trusted partner in building a safer, stronger, and more secure tomorrow for everyone." />
      </section>
      <CTA title="Your trust. Our commitment. A better tomorrow, together." button="Get in Touch" onClick={() => navigate('contact')} />
    </>
  );
}

function InfoBlock({ Icon, title, text }) {
  return (
    <article>
      <Icon size={34} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
