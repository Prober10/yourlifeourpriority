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
      <div className="hero-visual" role="img" aria-label={imageLabel} style={{ '--hero-image': `url(${image})` }} />
    </section>
  );
}
