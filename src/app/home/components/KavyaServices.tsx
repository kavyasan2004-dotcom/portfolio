'use client';

import React, { useEffect, useRef, useState } from 'react';

const services = [
  { name: 'Brand Strategy', desc: 'Positioning brands to mean something before they sell something.' },
  { name: 'Social Media Account Management', desc: 'Showing up consistently so the algorithm has no choice.' },
  { name: 'Meta and Google Ads', desc: 'Paid media that earns its budget.' },
  { name: 'Local SEO', desc: 'Making sure the right people find you first.' },
  { name: 'SEO Optimized Blogs', desc: 'Content that ranks and reads well.' },
  { name: 'AEO Readiness Checks', desc: 'Getting your brand ready for the way people search now.' },
];

function ServiceRow({ name, desc, index }: { name: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

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
    <div
      ref={ref}
      className="group border-b border-[#f5f0e8]/10 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between py-7 md:py-8 gap-3 md:gap-8">
        <h3
          className="font-display text-[clamp(1.4rem,3.5vw,2.2rem)] font-bold text-[#f5f0e8] leading-tight"
          style={{
            transform: hovered ? 'translateX(10px)' : 'translateX(0)',
            color: hovered ? '#c8855a' : '#f5f0e8',
            textShadow: hovered ? '0 0 30px rgba(200,133,90,0.35)' : 'none',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), color 0.35s ease, text-shadow 0.35s ease',
          }}
        >
          {name}
        </h3>
        <p className="font-sans text-[0.85rem] text-[#f5f0e8]/35 italic font-light md:text-right md:max-w-xs flex-shrink-0">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function KavyaServices() {
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
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div
          ref={ref}
          className="flex items-center gap-4 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f0e8]">What I Do</h2>
        </div>

        {/* Rows */}
        <div className="border-t border-[#f5f0e8]/10">
          {services.map((s, i) => (
            <ServiceRow key={s.name} name={s.name} desc={s.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
