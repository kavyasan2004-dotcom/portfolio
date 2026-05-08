'use client';

import React from 'react';

const ITEMS = [
  '✦ FMCG',
  '✦ Real Estate',
  '✦ Automotive',
  '✦ Hospitality',
  '✦ Health Tech',
  '✦ Media Production',
  '✦ D2C',
];

export default function KavyaMarquee() {
  const text = ITEMS?.join('   ') + '   ';

  return (
    <div className="w-full bg-[#111111] border-y border-[#f5f0e8]/8 py-4 overflow-hidden">
      <div className="kavya-marquee-track flex whitespace-nowrap">
        {/* Duplicate 4x for seamless loop */}
        {[0, 1, 2, 3]?.map((i) => (
          <span
            key={i}
            className="font-mono text-[0.75rem] md:text-[0.8rem] text-[#f5f0e8]/60 uppercase tracking-[0.18em] pr-8 flex-shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
