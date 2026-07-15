export default function Navbar({ onOpenPopup }) {
  return (
    <nav>
      <div className="nav-logo">
        <img src="https://bhashaworld.com/language-courses/assets/bhasa_logo-B3_iDOzc.webp" alt="Bhasha World" onError={(e) => e.target.style.display = 'none'} />
      </div>
      <div className="nav-links-wrap">
        <a href="#levels">Course Levels</a>
        <a href="#offers">Pricing</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="nav-cta-group">
        <a href="#" className="btn-nav-demo btn-shimmer" onClick={(e) => { e.preventDefault(); onOpenPopup(); }}>Book Free Demo</a>
        <a href="#offers" className="btn-nav-enroll">Enroll Now</a>
      </div>
    </nav>
  );
}
