export default function Hero({ onOpenPopup }) {
  return (
    <section className="hero">
      <div className="hero-content fade-up visible">
        <div className="hero-badge">
          #1 German Language Institute in Pune
        </div>
        <h1>
          Master <span className="highlight">German</span><br/>
          Get Hired, Study Abroad<br/>
          Live Your Bigger Life
        </h1>
        <p className="hero-sub-sub">Study abroad guidance — from A1 Beginner to C2 Advanced</p>
        <div className="hero-certs">
          <span className="cert-badge">✅ ISO Certified</span>
          <span className="cert-badge">🏆 Goethe Prep</span>
          <span className="cert-badge">📜 TELC Ready</span>
          <span className="cert-badge">✈️ Visa Guidance</span>

        </div>
        <div className="hero-cta-group">
          <a href="#" className="btn-primary btn-shimmer" onClick={(e) => { e.preventDefault(); onOpenPopup(); }}>
            🎯 Book FREE Demo Class
          </a>
          <a href="#offers" className="btn-secondary btn-shimmer">
            💰 View Offers & Pricing
          </a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="num">50K+</span>
            <span className="label">Students Trained</span>
          </div>
          <div className="trust-item">
            <span className="num">380+</span>
            <span className="label">German Reviews</span>
          </div>
          <div className="trust-item">
            <span className="num">20+</span>
            <span className="label">Countries</span>
          </div>
          <div className="trust-item">
            <span className="num">4.9★</span>
            <span className="label">Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
