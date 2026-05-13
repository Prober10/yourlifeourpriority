import { HeartHandshake } from 'lucide-react';

export function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span />
      <HeartHandshake size={23} />
      <span />
    </div>
  );
}
