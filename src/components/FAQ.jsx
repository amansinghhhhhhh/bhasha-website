import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "I'm a complete beginner. Can I still join the German course?", a: "Absolutely! Our A1 beginner course is specially designed for learners with zero prior knowledge of German. We start with alphabets, pronunciation, and basic phrases — building confidence step by step." },
    { q: "How long does it take to complete German A1 level?", a: "The A1 level is typically completed in 2.5 to 3 months. Each level takes a similar duration, so A1 to B2 is approximately 10–12 months of consistent learning with us." },
    { q: "Do you prepare students for Goethe and TELC exams?", a: "Yes! Our curriculum is specifically aligned to Goethe-Zertifikat and TELC exam formats. We provide mock tests, past papers, and dedicated exam strategy sessions from B1 level onwards." },
    { q: "Are classes available online or only offline in Pune?", a: "Both! We offer live interactive online classes and offline classroom sessions at our Pune centre (FC Road). The teaching quality and batch size are maintained consistently across both modes." },
    { q: "What does the 1-Year Platform Access offer include?", a: "With our special enrollment offer, you get 1-year access to recorded classes, practice materials, worksheets, and additional learning resources on the Bhasha World platform — completely free." },
    { q: "Do you help with student visa applications for Germany?", a: "Yes. Our Study Abroad package includes guidance for German student visa documentation, university applications, and language certification requirements for visa purposes." },
  ];

  const handleToggle = (index) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-label">FREQUENTLY ASKED QUESTIONS</div>
      <h2 className="section-title">Got Questions? We've Got Answers</h2>
      <p className="section-sub">Everything you need to know about our German course, batches, and certifications.</p>
      <div className="faq-wrap">
        {faqs.map((faq, i) => (
          <div className={`faq-item${activeIndex === i ? ' open' : ''}`} key={i}>
            <div className="faq-q" onClick={() => handleToggle(i)}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="q-text">{faq.q}</span>
              <span className="arrow">+</span>
            </div>
            <div className={`faq-a${activeIndex === i ? ' open' : ''}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
