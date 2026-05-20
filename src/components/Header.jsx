import { Menu, Shield, X } from 'lucide-react';
import { LogoMark } from './LogoMark.jsx';
import { navItems, pageSlugs } from '../data/siteData.js';

export function Header({ activeLabel, menuOpen, setMenuOpen, navigate }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('home')} aria-label="Go to home page">
        <LogoMark />
        <span>
          <strong>Roland Khalil</strong>
          <small>Fulfilling Your Promise</small>
        </span>
      </button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {navItems.map((item) => (
          <button key={item} className={activeLabel === item ? 'active' : ''} onClick={() => navigate(pageSlugs[item])}>
            {item}
          </button>
        ))}
        <button className={activeLabel === 'Privacy Policy' ? 'active' : ''} onClick={() => navigate('privacy')}>
          Privacy
        </button>
      </nav>
      <button className="quote-button" onClick={() => navigate('contact')}>
        <Shield size={18} />
        Get a Quote
      </button>
    </header>
  );
}
