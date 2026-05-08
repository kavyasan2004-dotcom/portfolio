'use client';

import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Trigger underline draw on mount after short delay
    const timer = setTimeout(() => {
      if (underlineRef.current) {
        underlineRef.current.classList.add('drawn');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-parchment flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-16 px-6">
      {/* Subtle ruled lines background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #3D3A38 39px, #3D3A38 40px)',
          backgroundSize: '100% 40px',
        }}
      />

      {/* Corner marks — editorial detail */}
      <div className="absolute top-20 left-8 w-6 h-6 border-t border-l border-pencil opacity-40" />
      <div className="absolute top-20 right-8 w-6 h-6 border-t border-r border-pencil opacity-40" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-pencil opacity-40" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-pencil opacity-40" />

      {/* Pre-headline label */}
      <div className="animate-on-scroll mb-8 flex items-center gap-3">
        <span className="block w-8 h-px bg-vermillion" />
        <span className="font-sans text-xs font-medium text-graphite-light uppercase tracking-widest">
          Creator–Brand Partnerships
        </span>
        <span className="block w-8 h-px bg-vermillion" />
      </div>

      {/* Main headline */}
      <div className="text-center max-w-5xl mx-auto">
        <h1
          ref={headlineRef}
          className="animate-on-scroll font-display font-light text-graphite leading-[0.88] tracking-display"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          We make creators{' '}
          <span
            ref={underlineRef}
            className="underline-draw font-display italic"
            style={{ color: 'var(--graphite)' }}
          >
            unavoidable.
          </span>
        </h1>

        {/* Roster reach line */}
        <p
          className="animate-on-scroll stagger-2 font-display italic text-graphite-light mt-8 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          Currently partnering{' '}
          <span className="not-italic font-medium text-graphite">340M+</span>{' '}
          engaged followers with brands that deserve them.
        </p>

        {/* CTA row */}
        <div className="animate-on-scroll stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#brief"
            className="btn-vermillion font-sans font-semibold text-sm tracking-wide px-8 py-4 rounded-full inline-flex items-center gap-2"
          >
            Brief Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#work"
            className="font-sans text-sm font-medium text-graphite-light hover:text-graphite transition-colors underline underline-offset-4 decoration-pencil"
          >
            See our work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-xs uppercase tracking-widest text-graphite-light">Scroll</span>
        <div className="w-px h-8 bg-pencil animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;