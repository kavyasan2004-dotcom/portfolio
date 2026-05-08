'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function KavyaFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);obs.disconnect();}},
      { threshold: 0.1 }
    );
    obs?.observe(el);
    return () => obs?.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      id="kavya-footer"
      className="relative w-full bg-[#0a0a0a] overflow-hidden">

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          opacity: 1
        }} />


      {/* Top border */}
      <div className="w-full h-px bg-[#f5f0e8]/8" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 md:py-36 flex flex-col items-center text-center">
        {/* Headline */}
        <h2
          className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold text-[#f5f0e8] leading-[1.05] max-w-3xl mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)'
          }}>

          Good work starts with a good conversation.
        </h2>

        {/* Contact links */}
        <div
          className="flex flex-col items-center gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s 0.2s cubic-bezier(0.16,1,0.3,1), transform 0.8s 0.2s cubic-bezier(0.16,1,0.3,1)'
          }}>

          <a
            href="mailto:kavyasan2004@gmail.com"
            className="font-sans text-[1rem] md:text-[1.1rem] text-[#f5f0e8]/60 hover:text-[#c8855a] transition-colors duration-300 tracking-wide">

            aboutkavya.santhosh@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kavyadashsanthosh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.9rem] text-[#f5f0e8]/35 hover:text-[#c8855a] transition-colors duration-300 tracking-wide border-b border-[#f5f0e8]/15 hover:border-[#c8855a]/50 pb-0.5">LinkedIn 


          </a>
        </div>

      </div>
    </footer>);

}