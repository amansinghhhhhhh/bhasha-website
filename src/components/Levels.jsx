export default function Levels() {
  const levels = [
    { cls: 'a1', name: 'Beginner', desc: 'Basic greetings, intros, daily phrases' },
    { cls: 'a2', name: 'Elementary', desc: 'Simple conversations, travel German' },
    { cls: 'b1', name: 'Intermediate', desc: 'Work conversations, Goethe B1 prep' },
    { cls: 'b2', name: 'Upper-Intermediate', desc: 'Job-ready, study abroad eligible' },
    { cls: 'c1', name: 'Advanced', desc: 'Professional fluency, university German' },
    { cls: 'c2', name: 'Mastery', desc: 'Native-level mastery, C2 certified' },
  ];

  return (
    <section className="levels-section" id="levels">
      <div className="section-label">GERMAN COURSE STRUCTURE</div>
      <h2 className="section-title">Your A1 → C2 Roadmap 🗺️</h2>
      <p className="section-sub">Every level builds on the last. Most students reach B2 in 12–14 months of consistent learning.</p>
      <div className="levels-track">
        {levels.map((lv, i) => (
          <div className="level-step" key={i}>
            <div className={`level-circle ${lv.cls}`}>{lv.cls.toUpperCase()}</div>
            <div className="level-name">{lv.name}</div>
            <div className="level-desc">{lv.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
