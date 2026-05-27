export function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <button onClick={() => navigate('privacy')}>Privacy Policy</button>
      <span>&copy; 2026 askRoland Advisory. All rights reserved.</span>
      <span>Last updated: May 27, 2026</span>
    </footer>
  );
}
