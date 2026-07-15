import { useState, useEffect, useRef } from 'react';

function AnimatedNum({ target, suffix, decimals }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const start = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / duration, 1);
          const v = t * target;
          setVal(decimals ? parseFloat(v.toFixed(decimals)) : Math.floor(v));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span className="num" ref={ref}>{val}{suffix}</span>;
}

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
            <AnimatedNum target={50} suffix="K+" />
            <span className="label">Students Trained</span>
          </div>
          <div className="trust-item">
            <AnimatedNum target={380} suffix="+" />
            <span className="label">German Reviews</span>
          </div>
          <div className="trust-item">
            <AnimatedNum target={20} suffix="+" />
            <span className="label">Countries</span>
          </div>
          <div className="trust-item">
            <AnimatedNum target={4.9} suffix="★" decimals={1} />
            <span className="label">Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
