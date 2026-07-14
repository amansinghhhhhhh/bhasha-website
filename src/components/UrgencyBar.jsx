export default function UrgencyBar({ seats }) {
  return (
    <div className="urgency-bar-wrap">
      <div className="urgency-bar">
        <div className="urg-track">
          <span>
            <span className="fire">🔥</span>
            <strong>JULY BATCH FILLING FAST</strong> — Only <strong id="seatsLeft">{seats}</strong> seats left for German A1 batch starting 20 July 2026!
            <span className="fire">🔥</span>
            <span className="urg-sep">•</span> Use code <strong>GERMAN20</strong> for extra ₹500 off
            <span className="urg-sep">•</span>
          </span>
          <span>
            <span className="fire">🔥</span>
            <strong>JULY BATCH FILLING FAST</strong> — Only <strong>{seats}</strong> seats left for German A1 batch starting 20 July 2026!
            <span className="fire">🔥</span>
            <span className="urg-sep">•</span> Use code <strong>GERMAN20</strong> for extra ₹500 off
            <span className="urg-sep">•</span>
          </span>
        </div>
      </div>
      <div className="german-stripe-top"></div>
    </div>
  );
}
