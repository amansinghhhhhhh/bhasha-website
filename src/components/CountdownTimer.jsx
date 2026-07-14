import { useState, useEffect } from 'react';

export default function CountdownTimer({ seats }) {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [mins, setMins] = useState('00');
  const [secs, setSecs] = useState('00');

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(23, 59, 59, 0);

    const update = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) return;
      setDays(String(Math.floor(diff / 86400000)).padStart(2, '0'));
      setHours(String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'));
      setMins(String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'));
      setSecs(String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'));
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-section">
      <div className="countdown-inner">
        <div className="countdown-label"><span><span className="clock-icon">⏰</span> SPECIAL JULY OFFER ENDS IN</span> Price goes up after this batch!</div>
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="num">{days}</span>
            <span className="unit-label">Days</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-unit">
            <span className="num">{hours}</span>
            <span className="unit-label">Hours</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-unit">
            <span className="num">{mins}</span>
            <span className="unit-label">Mins</span>
          </div>
          <span className="time-separator">:</span>
          <div className="time-unit">
            <span className="num">{secs}</span>
            <span className="unit-label">Secs</span>
          </div>
        </div>
        <div className="seats-counter">
          🔴 Only <span className="seats-num">{seats}</span> seats remaining out of 8 in July batch
        </div>
        <div className="progress-wrap">
          <div className="progress-bar-bg">
            <div className="progress-bar-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
