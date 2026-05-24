import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { CTA } from '../components/CTA.jsx';
import { Hero } from '../components/Hero.jsx';
import { plans } from '../data/siteData.js';

export function ProductDetail({ product, navigate }) {
  const [open, setOpen] = useState(0);
  const related = plans.filter((plan) => plan.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Hero
        title={product.hero.title}
        gold={product.hero.gold}
        text={product.hero.text}
        variant="product"
        image={product.image}
        imageLabel={`${product.title} product visual`}
      />

      <section className="product-page">
        <button className="back-link" onClick={() => navigate('plans')}>
          <ArrowLeft size={18} />
          Back to Plans
        </button>

        <div className="product-intro">
          <span className={`icon-badge ${product.tone}`}>
            <product.Icon size={34} />
          </span>
          <div>
            <p className="eyebrow">Product overview</p>
            <h2>{product.title}</h2>
            <p>{product.copy}</p>
          </div>
        </div>

        <section className="product-section">
          <div className="section-kicker">
            <p className="eyebrow">Coverage Tiers</p>
            <h2>The Tiers Table</h2>
          </div>
          <div className="tier-grid">
            {product.tiers.map(([title, copy], index) => (
              <article key={title}>
                <span>Tier {index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        {product.features.length > 0 && (
          <section className="product-section">
            <div className="section-kicker">
              <p className="eyebrow">Highlights</p>
              <h2>Key Features</h2>
            </div>
            <div className="feature-grid">
              {product.features.map(([title, copy, Icon]) => (
                <article key={title}>
                  <span className={`feature-icon ${product.tone}`}>
                    <Icon size={24} />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="product-section">
          <div className="section-kicker">
            <p className="eyebrow">Policy Notes</p>
            <h2>Details & Guidelines</h2>
          </div>
          <div className="product-accordions">
            {product.accordions.map(([title, items], index) => (
              <article className={open === index ? 'product-accordion open' : 'product-accordion'} key={title}>
                <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                  <strong>{title}</strong>
                  <ChevronDown size={22} />
                </button>
                {open === index && (
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="related-products">
          <div>
            <p className="eyebrow">Explore More</p>
            <h2>Other Protection Paths</h2>
          </div>
          <div className="related-grid">
            {related.map(({ slug, title, short, Icon, tone }) => (
              <button key={slug} onClick={() => navigate(`product:${slug}`)}>
                <span className={`icon-badge ${tone}`}>
                  <Icon size={26} />
                </span>
                <strong>{title}</strong>
                <small>{short}</small>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
        </section>
      </section>

      <CTA title={`Ready to discuss ${product.title}?`} text="We can help you choose the structure that fits your family, timeline, and budget." button="Contact Us" onClick={() => navigate('contact')} />
    </>
  );
}
