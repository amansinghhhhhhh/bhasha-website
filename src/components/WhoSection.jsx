export default function WhoSection() {
  const cards = [
    { icon: '🎓', title: 'Exam Aspirants', desc: 'Preparing for Goethe-Zertifikat or TELC proficiency exams to study in Germany.' },
    { icon: '💼', title: 'Working Professionals', desc: 'Professionals working with German clients, companies, or planning a career switch abroad.' },
    { icon: '📈', title: 'Career Upskillers', desc: 'Add a high-demand language to your CV and unlock international job opportunities.' },
    { icon: '🌍', title: 'Culture Enthusiasts', desc: 'Anyone fascinated by German culture, films, music, and wanting to communicate authentically.' },
  ];

  return (
    <section className="who-section">
      <div className="section-label">WHO IS THIS FOR</div>
      <h2 className="section-title">German Is for Everyone</h2>
      <p className="section-sub">Whether you're a student, professional, or explorer — our German program has a path for you.</p>
      <div className="who-grid">
        {cards.map((card, i) => (
          <div className="who-card" key={i}>
            <div className="who-icon-wrap">{card.icon}</div>
            <div className="who-title">{card.title}</div>
            <div className="who-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
