'use client';

import React, { useEffect, useRef, useState } from 'react';

const entries = [
  { date: 'Nov 2025', role: 'Experience Marketer', company: 'Ultrahuman' },
  { date: 'Feb 2025', role: 'Account Manager', company: 'Konzept Interaktif' },
  { date: 'Dec 2024', role: 'Brand Strategist', company: 'Superbliz' },
  { date: 'Sep 2023', role: 'Social Media Intern → Strategy Team Head', company: 'IFlims Production House' },
];

function TimelineEntry({ entry, index }: { entry: typeof entries[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-8 md:gap-16 py-8 border-b border-[#f5f0e8]/8 last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.7s ${index * 0.12}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${index * 0.12}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Date */}
      <div className="w-24 md:w-32 flex-shrink-0 pt-1">
        <span className="font-mono text-[0.7rem] text-[#f5f0e8]/30 uppercase tracking-[0.15em]">{entry.date}</span>
      </div>

      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
          style={{ background: '#c8855a' }}
        />
        <div className="w-px flex-1 bg-[#f5f0e8]/10 mt-2" />
      </div>

      {/* Role + company */}
      <div className="flex-1 pb-2">
        <p className="font-display text-[1.1rem] md:text-[1.3rem] font-bold text-[#f5f0e8] leading-snug">
          {entry.role}
        </p>
        <p className="font-sans text-[0.8rem] text-[#c8855a]/70 mt-1 font-light tracking-wide">
          {entry.company}
        </p>
      </div>
    </div>
  );
}

export default function KavyaTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div
          ref={ref}
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.65rem] text-[#c8855a] uppercase tracking-[0.25em]">Experience</span>
            <div className="flex-1 h-px bg-[#f5f0e8]/10" />
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f0e8]">Where I&apos;ve Been</h2>
        </div>

        {/* Entries */}
        <div>
          {entries.map((entry, i) => (
            <TimelineEntry key={entry.date + entry.company} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
