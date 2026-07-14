export default function Trainers() {
  const trainers = [
    { src: '/language-courses/bhasha/trainer/susmita .webp', name: 'Susmita Paranjape', role: 'Senior Executive' },
    { src: '/language-courses/bhasha/trainer/shivani.webp', name: 'Shivani Doshi', role: 'Senior Coordinator' },
    { src: '/language-courses/bhasha/trainer/yojana.webp', name: 'Yojana L.', role: 'Junior Coordinator' },
    { src: '/language-courses/bhasha/trainer/mamata.webp', name: 'Mamata D.', role: 'Junior Coordinator' },
  ];

  return (
    <section className="trainers-section">
      <div className="section-label" style={{ color: 'var(--german-gold)' }}>MEET YOUR TRAINERS</div>
      <h2 className="section-title">Learn from Certified Experts</h2>
      <p className="section-sub">Our trainers combine language expertise with cultural knowledge for an immersive experience.</p>
      <div className="trainers-grid">
        {trainers.map((t, i) => (
          <div className="trainer-card" key={i}>
            <img src={t.src} alt={t.name} />
            <div className="trainer-name">{t.name}</div>
            <div className="trainer-role">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
