import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { pageSlugs } from './data/siteData.js';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { FAQ } from './pages/FAQ.jsx';
import { Home } from './pages/Home.jsx';
import { Plans } from './pages/Plans.jsx';
import { Privacy } from './pages/Privacy.jsx';

export function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLabel = Object.entries(pageSlugs).find(([, slug]) => slug === page)?.[0] ?? 'Home';

  const navigate = (slug) => {
    setPage(slug);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header activeLabel={activeLabel} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <main>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'plans' && <Plans navigate={navigate} />}
        {page === 'faq' && <FAQ navigate={navigate} />}
        {page === 'contact' && <Contact />}
        {page === 'privacy' && <Privacy />}
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
