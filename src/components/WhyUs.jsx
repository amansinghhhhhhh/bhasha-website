export default function WhyUs() {
  const cards = [
    { svg: <svg viewBox="0 0 24 24"><path d="M12 14a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"/><path d="M12 16c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z"/><path d="M19.07 4.93a10 10 0 00-14.14 0l1.41 1.41a8 8 0 0111.32 0l1.41-1.41z"/><path d="M21.9 7.9a13 13 0 00-19.8 0l1.41 1.41a11 11 0 0116.98 0L21.9 7.9z"/></svg>, title: 'Live Interactive Sessions', desc: 'Real-time speaking practice with certified trainers — online & offline modes available.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, title: 'Max 8 Students/Batch', desc: 'Small batches mean personalized attention, faster progress, and more speaking time.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: 'Goethe & TELC Prep', desc: 'Dedicated mock tests, exam strategies, and certification guidance from A1 to C2.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>, title: 'Recorded Class Backup', desc: 'Miss a session? Every class is recorded and available for 1 year on the platform.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>, title: 'Visa & Passport Guidance', desc: 'We go beyond language — help with student visas, documents, and abroad applications.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>, title: 'Cultural Immersion', desc: 'Learn the culture, not just the language — films, conversations, real-life contexts.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>, title: 'Flexible Scheduling', desc: 'Learn at your own pace. Whether you\'re a student, professional, or enthusiast, there\'s a path for you' },
    { svg: <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>, title: 'ISO-Certified Curriculum', desc: 'CEFR-aligned structured curriculum from A1 to C2 — internationally recognized standard.' },
  ];

  return (
    <section className="why-section">
      <div className="section-label" style={{ color: 'var(--german-gold)' }}>WHY BHASHA WORLD</div>
      <h2 className="section-title">German Learning That Actually Works</h2>
      <p className="section-sub">Not just grammar drills. Real communication, real certification, real career outcomes.</p>
      <div className="why-grid">
        {cards.map((card, i) => (
          <div className="why-card" key={i}>
            <div className="why-icon-wrap">{card.svg}</div>
            <div className="why-title">{card.title}</div>
            <div className="why-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
