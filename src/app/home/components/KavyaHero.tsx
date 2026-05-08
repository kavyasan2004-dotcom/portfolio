'use client';

import React from 'react';

export default function KavyaHero() {
  const scrollToFooter = () => {
    const footer = document.getElementById('kavya-footer');
    if (footer) {
      footer?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-[#0a0a0a] flex flex-col p-8 md:p-12 lg:p-16 overflow-hidden">
      {/* Top row */}
      <div className="flex items-start justify-between w-full">
        <span className="font-sans text-[0.65rem] md:text-[0.7rem] text-[#f5f0e8]/70 uppercase tracking-[0.25em]">
          KAVYA SANTHOSH.
        </span>
        <span className="font-sans text-[0.65rem] md:text-[0.7rem] text-[#f5f0e8]/70 uppercase tracking-[0.25em]">
          BRAND STRATEGIST.
        </span>
      </div>

      {/* Center-left headline */}
      <div className="flex-1 flex items-center">
        <h1 className="font-display font-bold leading-[0.9] text-[#f5f0e8] flex flex-col gap-0" style={{ fontSize: 'clamp(4.5rem, 13vw, 11rem)' }}>
          <span>Strategy.</span>
          <span>Story.</span>
          <span>Social.</span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between w-full">
        <span className="font-sans text-[0.65rem] md:text-[0.7rem] text-[#f5f0e8]/40 tracking-wide">
          Social media · Brand strategy · Creative direction.
        </span>
        <button
          onClick={scrollToFooter}
          className="font-sans text-[0.65rem] md:text-[0.7rem] text-[#c8855a] uppercase tracking-[0.25em] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
        >
          LET&apos;S TALK ↓
        </button>
      </div>
    </section>
  );
}
