export function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <button onClick={() => navigate('privacy')}>Privacy Policy</button>
      <span>© 2024 Your Life Our Priority. All rights reserved.</span>
      <span>Last updated: May 20, 2024</span>
    </footer>
  );
}
