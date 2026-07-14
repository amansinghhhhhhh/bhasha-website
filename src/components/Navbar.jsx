import { useState } from 'react';

export default function Navbar({ onOpenPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(p => !p);

  return (
    <nav>
      <div className="nav-logo">
        <img src="https://bhashaworld.com/language-courses/assets/bhasa_logo-B3_iDOzc.webp" alt="Bhasha World" onError={(e) => e.target.style.display = 'none'} />
      </div>
      <div className={`nav-links-wrap${menuOpen ? ' open' : ''}`} id="navLinks">
        <a href="#levels" onClick={() => setMenuOpen(false)}>Course Levels</a>
        <a href="#offers" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      </div>
      <div className={`nav-cta-group${menuOpen ? ' open' : ''}`} id="navCta">
        <a href="#" className="btn-nav-demo btn-shimmer" onClick={(e) => { e.preventDefault(); onOpenPopup(); }}>Book Free Demo</a>
        <a href="#offers" className="btn-nav-enroll" onClick={() => setMenuOpen(false)}>Enroll Now</a>
      </div>
      <button className={`nav-toggle${menuOpen ? ' open' : ''}`} id="navToggle" onClick={handleToggle} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
