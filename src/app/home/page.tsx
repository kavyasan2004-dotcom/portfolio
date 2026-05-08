'use client';

import React, { useEffect, useState } from 'react';
import KavyaHero from './components/KavyaHero';
import KavyaAbout from './components/KavyaAbout';
import KavyaMarquee from './components/KavyaMarquee';
import KavyaServices from './components/KavyaServices';
import KavyaAccounts from './components/KavyaAccounts';
import KavyaCreativeProduction from './components/KavyaCreativeProduction';
import KavyaNumbers from './components/KavyaNumbers';
import KavyaTimeline from './components/KavyaTimeline';
import KavyaFooter from './components/KavyaFooter';

export default function HomePage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'|| target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
    };
  }, []);

  return (
    <div className="kavya-root bg-[#0a0a0a] min-h-screen">
      {/* Custom cursor */}
      <div
        className="kavya-cursor fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: isHovering ? '8px' : '12px',
          height: isHovering ? '8px' : '12px',
          background: '#f5f0e8',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />

      <KavyaHero />
      <KavyaAbout />
      <KavyaMarquee />
      <KavyaServices />
      <KavyaAccounts />
      <KavyaCreativeProduction />
      <KavyaNumbers />
      <KavyaTimeline />
      <KavyaFooter />
    </div>
  );
}