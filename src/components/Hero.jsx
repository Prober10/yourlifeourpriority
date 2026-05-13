import { Shield } from 'lucide-react';
import { SectionDivider } from './SectionDivider.jsx';

export function Hero({ title, gold, text, variant, image, imageLabel }) {
  return (
    <section className={`hero hero-${variant}`}>
      <div className="hero-copy">
        <h1>
          {title}
          {gold && <span>{gold}</span>}
        </h1>
        <p>{text}</p>
        <SectionDivider />
      </div>
      <div className="hero-visual" role="img" aria-label={imageLabel} style={{ '--hero-image': `url(${image})` }}>
        <div className="visual-card">
          <Shield size={48} />
          <strong>Your Security</strong>
          <small>Our Commitment</small>
        </div>
      </div>
    </section>
  );
}
