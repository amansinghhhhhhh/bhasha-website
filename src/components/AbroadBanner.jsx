export default function AbroadBanner() {
  return (
    <section className="abroad-banner">
      <img className="bg" src="/language-courses/bhasha/BEYOND THE CLASSROOM/BEYOND THE CLASSROOM.png" alt="Study abroad - Germany" />
      <div className="abroad-content fade-up">
        <div className="section-label" style={{ color: 'var(--german-gold)' }}>BEYOND THE CLASSROOM</div>
        <h2>B2 Isn't the Finish Line. It's Your Boarding Pass.</h2>
        <p>Once you're job- and university-ready in German, our counsellors take over — application shortlisting, visa documentation,<br/>and interview prep for Germany's universities and employers.</p>
        <a href="#offers" className="btn-primary btn-shimmer">✈️ Explore Study Abroad Package</a>
        <div className="abroad-stats">
          <div>
            <div className="stat-num">20+</div>
            <div className="stat-label">Countries our alumni live in</div>
          </div>
          <div>
            <div className="stat-num">50K+</div>
            <div className="stat-label">Students trained since inception</div>
          </div>
          <div>
            <div className="stat-num">4.9★</div>
            <div className="stat-label">Average learner rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
