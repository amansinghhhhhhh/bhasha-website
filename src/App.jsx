import { useState, useEffect, useCallback } from 'react';
import UrgencyBar from './components/UrgencyBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CountdownTimer from './components/CountdownTimer.jsx';
import OffersSection from './components/OffersSection.jsx';
import WhyUs from './components/WhyUs.jsx';
import Levels from './components/Levels.jsx';
import AbroadBanner from './components/AbroadBanner.jsx';
import WhoSection from './components/WhoSection.jsx';
import SocialProof from './components/SocialProof.jsx';
import VideoModal from './components/VideoModal.jsx';
import Trainers from './components/Trainers.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import PopupForm from './components/PopupForm.jsx';

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [seats, setSeats] = useState(3);

  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  const openVideo = useCallback((url, poster) => setVideoData({ url, poster }), []);
  const closeVideo = useCallback(() => {
    setVideoData(null);
    document.body.style.overflow = '';
  }, []);

  // Seat decrement (fake urgency)
  useEffect(() => {
    let timer;
    function decrementSeats() {
      setSeats(prev => {
        if (prev > 2) {
          const chance = Math.random();
          if (chance > 0.7) return prev - 1;
        }
        return prev;
      });
      timer = setTimeout(decrementSeats, 45000 + Math.random() * 60000);
    }
    timer = setTimeout(decrementSeats, 45000 + Math.random() * 60000);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const index = Array.from(e.target.parentElement?.children || []).indexOf(e.target);
          e.target.style.transitionDelay = (index * 0.08) + 's';
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-open popup after 8s
  useEffect(() => {
    const timer = setTimeout(() => setPopupOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <UrgencyBar seats={seats} />
      <Navbar onOpenPopup={openPopup} />
      <Hero onOpenPopup={openPopup} />
      <CountdownTimer seats={seats} />
      <OffersSection onOpenPopup={openPopup} />
      <WhyUs />
      <Levels />
      <AbroadBanner />
      <WhoSection />
      <SocialProof onOpenVideo={openVideo} />
      <VideoModal videoUrl={videoData?.url} poster={videoData?.poster} onClose={closeVideo} />
      <Trainers />
      <FAQ />
      <FinalCTA onOpenPopup={openPopup} />
      <Footer />
      <WhatsAppFloat />
      <PopupForm isOpen={popupOpen} onClose={closePopup} seats={seats} />
    </>
  );
}
