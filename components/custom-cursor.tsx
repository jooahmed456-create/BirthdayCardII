'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let rafId: number;
    const loop = () => {
      if (dotRef.current) {
        // globals.css applies zoom:0.8 on html at >=1024px.
        // Fixed elements inherit that zoom, so mouse coords must be
        // divided by 0.8 to land the dot exactly on the pointer.
        const cssZoom = window.innerWidth >= 1024 ? 0.8 : 1;
        dotRef.current.style.transform =
          `translate(${pos.current.x / cssZoom}px, ${pos.current.y / cssZoom}px)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute left-[-16px] top-[-16px] w-2.5 h-2.5 bg-primary rounded-full" />
    </div>
  );
};

export default CustomCursor;
