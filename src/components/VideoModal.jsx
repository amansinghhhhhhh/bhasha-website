import { useEffect, useRef } from 'react';

export default function VideoModal({ videoUrl, poster, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoUrl && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoUrl]);

  if (!videoUrl) return null;

  const handleOverlayClick = () => onClose();
  const handleInnerClick = (e) => e.stopPropagation();

  return (
    <div className="video-modal show" onClick={handleOverlayClick}>
      <div className="video-modal-inner" onClick={handleInnerClick}>
        <button className="video-modal-close" onClick={onClose}>✕</button>
        <video ref={videoRef} controls autoPlay playsInline poster={poster}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
