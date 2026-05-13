import { ArrowRight } from 'lucide-react';
import { LogoMark } from './LogoMark.jsx';

export function CTA({ title, text, button, onClick }) {
  return (
    <section className="cta-panel">
      <LogoMark />
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {button && <button className="gold-cta" onClick={onClick}>{button} <ArrowRight size={18} /></button>}
    </section>
  );
}
