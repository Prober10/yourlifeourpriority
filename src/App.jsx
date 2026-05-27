import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { pageSlugs, plans } from './data/siteData.js';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { FAQ } from './pages/FAQ.jsx';
import { Home } from './pages/Home.jsx';
import { Plans } from './pages/Plans.jsx';
import { Privacy } from './pages/Privacy.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';

export function App() {
  const [page, setPage] = useState(() => getPageFromPath());
  const [menuOpen, setMenuOpen] = useState(false);
  const productSlug = page.startsWith('product:') ? page.replace('product:', '') : '';
  const product = plans.find((plan) => plan.slug === productSlug);
  const activeLabel = product ? 'Our Plans' : Object.entries(pageSlugs).find(([, slug]) => slug === page)?.[0] ?? 'Home';

  const navigate = (slug) => {
    setPage(slug);
    setMenuOpen(false);
    const path = slug === 'privacy' ? '/privacy-policy' : '/';

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath());
      setMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <Header activeLabel={activeLabel} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <main>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'plans' && <Plans navigate={navigate} />}
        {product && <ProductDetail product={product} navigate={navigate} />}
        {page === 'faq' && <FAQ navigate={navigate} />}
        {page === 'contact' && <Contact />}
        {page === 'privacy' && <Privacy />}
      </main>
      <Footer navigate={navigate} />
    </>
  );
}

function getPageFromPath() {
  return window.location.pathname === '/privacy-policy' ? 'privacy' : 'home';
}
