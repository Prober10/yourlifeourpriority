import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CTA } from '../components/CTA.jsx';
import { Hero } from '../components/Hero.jsx';
import { faqs, heroImages } from '../data/siteData.js';

export function FAQ({ navigate }) {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Hero
        title="Frequently Asked"
        gold="Questions"
        text="Find answers to common questions about our plans and services."
        variant="faq"
        image={heroImages.contact}
        imageLabel="Person contacting insurance support"
      />
      <section className="faq-list">
        {faqs.map(([question, answer], index) => (
          <article className={open === index ? 'faq-item open' : 'faq-item'} key={question}>
            <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
              <span>{index + 1}</span>
              <strong>{question}</strong>
              <ChevronDown size={22} />
            </button>
            {open === index && <p>{answer}</p>}
          </article>
        ))}
      </section>
      <CTA title="Still have questions? We're here to help!" button="Contact Us" onClick={() => navigate('contact')} />
    </>
  );
}
