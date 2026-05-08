'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function KavyaAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);obs.disconnect();}},
      { threshold: 0.15 }
    );
    obs?.observe(el);
    return () => obs?.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div
          className="flex items-center gap-4 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)'
          }}>

          <span className="font-mono text-[0.65rem] text-[#c8855a] uppercase tracking-[0.25em]">About</span>
          <div className="flex-1 h-px bg-[#f5f0e8]/10" />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — professional */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.8s 0.1s cubic-bezier(0.16,1,0.3,1), transform 0.8s 0.1s cubic-bezier(0.16,1,0.3,1)'
            }}>

            <p className="font-sans text-[1.05rem] md:text-[1.15rem] text-[#f5f0e8]/80 leading-relaxed font-normal">Hi! I'm Kavya :)

            </p>
          </div>

          {/* Right — honest */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.8s 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.8s 0.25s cubic-bezier(0.16,1,0.3,1)'
            }}>

            <p className="font-sans text-[0.95rem] md:text-[1rem] text-[#f5f0e8]/45 leading-relaxed italic font-light">
              I ideate, direct, and execute. From mood boarding a shoot to building a content calendar to pitching a campaign, I stay in it end to end. Most of my work lives in the space between the idea and the output, and I like making things look considered every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>);

}