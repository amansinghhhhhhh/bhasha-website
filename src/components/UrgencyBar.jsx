export default function UrgencyBar({ seats }) {
  return (
    <div className="urgency-bar-wrap">
      <div className="urgency-bar">
        <div className="urg-track">
          <span>
            <span className="fire">🔥</span>
            <strong>JULY BATCH FILLING FAST</strong>
            <span> — Only </span>
            <strong id="seatsLeft">{seats}</strong>
            <span> seats left for German A1 batch starting 20 July 2026! </span>
            <span className="fire">🔥</span>
            <span className="urg-sep">•</span>
            <span> Use code </span>
            <strong>GERMAN20</strong>
            <span> for extra ₹500 off </span>
            <span className="urg-sep">•</span>
          </span>
          <span>
            <span className="fire">🔥</span>
            <strong>JULY BATCH FILLING FAST</strong>
            <span> — Only </span>
            <strong>{seats}</strong>
            <span> seats left for German A1 batch starting 20 July 2026! </span>
            <span className="fire">🔥</span>
            <span className="urg-sep">•</span>
            <span> Use code </span>
            <strong>GERMAN20</strong>
            <span> for extra ₹500 off </span>
            <span className="urg-sep">•</span>
          </span>
        </div>
      </div>
      <div className="german-stripe-top"></div>
    </div>
  );
}
