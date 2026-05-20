import { plans } from '../data/siteData.js';
import { SectionDivider } from './SectionDivider.jsx';
import { PlanCard } from './PlanCard.jsx';

export function PlansGrid({ navigate }) {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Our Plans</h2>
        <SectionDivider />
        <p>Solutions for every stage of your life.</p>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} onClick={() => navigate(`product:${plan.slug}`)} />
        ))}
      </div>
    </section>
  );
}
