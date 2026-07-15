import { useState, useEffect, useRef } from 'react';

export default function AnimatedNum({ target, suffix, decimals }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const start = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / duration, 1);
          const v = t * target;
          setVal(decimals ? parseFloat(v.toFixed(decimals)) : Math.floor(v));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span className="num" ref={ref}>{val}{suffix}</span>;
}
