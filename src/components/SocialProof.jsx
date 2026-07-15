import { useRef, useEffect, useState, useCallback } from 'react';

export default function SocialProof({ onOpenVideo }) {
  const gridRef = useRef(null);
  const autoSlideRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const slideProof = useCallback((dir) => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.querySelector('.proof-card');
    if (!card) return;
    const gap = 20;
    const scroll = card.offsetWidth + gap;
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    if (dir > 0 && grid.scrollLeft >= maxScroll - 10) {
      grid.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dir < 0 && grid.scrollLeft <= 10) {
      grid.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      grid.scrollBy({ left: dir * scroll, behavior: 'smooth' });
    }
  }, []);

  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => slideProof(1), 3000);
  }, [slideProof]);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => slideProof(1), 3000);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [slideProof]);

  const handleMouseDown = (e) => {
    const grid = gridRef.current;
    if (!grid) return;
    setIsDown(true);
    grid.classList.add('dragging');
    startX.current = e.pageX - grid.offsetLeft;
    scrollLeft.current = grid.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!gridRef.current) return;
    setIsDown(false);
    gridRef.current.classList.remove('dragging');
  };

  const handleMouseUp = () => {
    if (!gridRef.current) return;
    setIsDown(false);
    gridRef.current.classList.remove('dragging');
    resetAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (!isDown || !gridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    gridRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const handleTouchStart = (e) => {
    const grid = gridRef.current;
    if (!grid) return;
    startX.current = e.touches[0].pageX - grid.offsetLeft;
    scrollLeft.current = grid.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const grid = gridRef.current;
    if (!grid) return;
    const x = e.touches[0].pageX - grid.offsetLeft;
    grid.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const cards = [
    { img: 'https://bhashaworld.com/language-courses/assets/8%20(1)-BnNjNzzM.webp', alt: 'Neha S.', video: 'https://bhashaworld.com/wp-content/uploads/2026/03/09.mp4' },
    { img: 'https://bhashaworld.com/language-courses/assets/9%20(1)-npMkWMBQ.webp', alt: 'Aarav K.', video: 'https://bhashaworld.com/wp-content/uploads/2026/03/08.mp4' },
    { img: 'https://bhashaworld.com/language-courses/assets/10%20(1)-M8tRobxc.webp', alt: 'Sneha P.', video: 'https://bhashaworld.com/wp-content/uploads/2026/03/07.mp4' },
    { img: 'https://bhashaworld.com/language-courses/assets/11-CxPTzZ6B.webp', alt: 'Madhavi D.', video: 'https://bhashaworld.com/wp-content/uploads/2026/03/06.mp4' },
    { img: 'https://bhashaworld.com/language-courses/assets/14-vrCNaCiE.webp', alt: 'Susmita P.', video: 'https://bhashaworld.com/wp-content/uploads/2026/03/10.mp4' },
    { img: 'https://bhashaworld.com/language-courses/assets/6%20(1)-QHnkDvud.webp', alt: 'Anand P.', video: 'https://bhashaworld.com/wp-content/uploads/2026/03/11.mp4' },
  ];

  return (
    <section className="proof-section" id="reviews">
      <div className="section-label">STUDENT SUCCESS STORIES</div>
      <h2 className="section-title">Real Students. Real Results. <span className="star-anim">⭐</span></h2>
      <p className="section-sub">Rated 4.9/5 by 380+ German learners in Pune. Watch their video stories.</p>
      <div className="proof-slider-wrap">
        <button className="slider-btn prev" onClick={() => { resetAutoSlide(); slideProof(-1); }}>‹</button>
        <button className="slider-btn next" onClick={() => { resetAutoSlide(); slideProof(1); }}>›</button>
        <div
          className="proof-grid"
          ref={gridRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={resetAutoSlide}
        >
          {cards.map((card, i) => (
            <div className="proof-card" key={i}>
              <img className="proof-img" src={card.img} alt={card.alt} loading="lazy" />
              <div className="proof-play" onClick={() => onOpenVideo(card.video, card.img)}>▶</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
