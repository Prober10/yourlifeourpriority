import { ArrowRight } from 'lucide-react';

export function PlanCard({ title, short, Icon, tone, onClick }) {
  return (
    <article className="plan-card">
      <span className={`icon-badge ${tone}`}>
        <Icon size={32} />
      </span>
      <h3>{title}</h3>
      <p>{short}</p>
      <button className="text-link" onClick={onClick}>
        Learn More <ArrowRight size={16} />
      </button>
    </article>
  );
}
