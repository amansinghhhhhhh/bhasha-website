import { useState, useEffect, useRef } from 'react';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxY9lYEgSuJfsdzRUrjFJbtuuY2YKwta6CNNcH_7hQhxKbI5BeqUXsmCLZRUpQxHnmm/exec';

export default function PopupForm({ isOpen, onClose, seats }) {
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('e_gs_SheetName', 'language-courses');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData)
      });
    } catch (_) {}
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2500);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div className={`popup-overlay${isOpen ? ' open' : ''}`} ref={overlayRef} onClick={handleOverlayClick}>
      <div className="popup-box">
        <div className="popup-header">
          <div className="popup-german-stripe"></div>
          <button className="popup-close" onClick={onClose}>✕</button>
          <h3>Book Your FREE German Demo</h3>
          <p>45-minute live class with a certified trainer — completely free, no obligation</p>
          <div className="popup-urgency">
            🔴 Batch filling fast — only <strong>{seats}</strong> seats left for July 20 batch!
          </div>
        </div>
        <div className="popup-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#22c55e' }}>Demo Booked! We'll call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="full_name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="your@email.com" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Current German Level</label>
                  <select name="german_level">
                    <option value="">Select level</option>
                    <option>Complete Beginner</option>
                    <option>A1 Beginner</option>
                    <option>A2 Elementary</option>
                    <option>B1 Intermediate</option>
                    <option>B2 Upper-Intermediate</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Goal</label>
                  <select name="goal">
                    <option value="">Select goal</option>
                    <option>Study Abroad in Germany</option>
                    <option>Goethe / TELC Certification</option>
                    <option>Career & Job Opportunities</option>
                    <option>Personal Interest</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-popup-submit">🎯 Book My FREE Demo Now →</button>
            </form>
          )}
          <div className="popup-privacy">🔒 Your data is safe. We'll call you within 5 minutes.</div>
        </div>
      </div>
    </div>
  );
}
