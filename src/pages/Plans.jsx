import { ArrowRight } from 'lucide-react';
import { CTA } from '../components/CTA.jsx';
import { Hero } from '../components/Hero.jsx';
import { heroImages, plans } from '../data/siteData.js';

export function Plans({ navigate }) {
  return (
    <>
      <Hero
        title="Our Plans"
        text="Comprehensive solutions for every stage of your life. Explore our plans below and find the right coverage for your needs."
        variant="plans"
        image={heroImages.plans}
        imageLabel="Hands protecting a family symbol"
      />
      <section className="plans-list">
        {plans.map(({ title, copy, Icon, tone }) => (
          <article key={title} className="plan-row">
            <span className={`icon-badge ${tone}`}>
              <Icon size={34} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <div className={`plan-photo ${tone}`} aria-hidden="true" />
            <button onClick={() => navigate('contact')}>
              Learn More <ArrowRight size={17} />
            </button>
          </article>
        ))}
      </section>
      <CTA title="Not sure which plan is right for you?" text="We're here to help you choose the best plan for your needs." button="Contact Us" onClick={() => navigate('contact')} />
    </>
  );
}
