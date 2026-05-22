import { ArrowRight } from 'lucide-react';
import { CTA } from '../components/CTA.jsx';
import { PlansGrid } from '../components/PlansGrid.jsx';
import { features, heroImages } from '../data/siteData.js';

export function Home({ navigate }) {
  return (
    <>
      <section className="home-hero" style={{ '--home-image': `url(${heroImages.home})` }}>
        <div className="home-hero-content">
          <h1>
            Fulfilling
            <span>Your Promise</span>
          </h1>
          <p>Comprehensive insurance plans for you and your loved ones.</p>
          <button className="gold-cta" onClick={() => navigate('plans')}>
            Explore Our Plans <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <FeatureStrip />
      <PlansGrid navigate={navigate} />
      <CTA title="Let's build your secure future together." text="We're here to protect what matters most." button="Get in Touch" onClick={() => navigate('contact')} />
      <div className="trust-row">
        <span>★★★★★</span>
        <p>Thousands of families trust us to protect their future.</p>
        <span>★★★★★</span>
      </div>
    </>
  );
}

function FeatureStrip() {
  return (
    <section className="feature-strip">
      {features.map(([title, copy, Icon]) => (
        <article key={title}>
          <Icon size={28} />
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
