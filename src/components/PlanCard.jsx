import { ArrowRight } from 'lucide-react';

export function PlanCard({ title, short, Icon, tone }) {
  return (
    <article className="plan-card">
      <span className={`icon-badge ${tone}`}>
        <Icon size={32} />
      </span>
      <h3>{title}</h3>
      <p>{short}</p>
      <a href="#plans" onClick={(event) => event.preventDefault()}>
        Learn More <ArrowRight size={16} />
      </a>
    </article>
  );
}
