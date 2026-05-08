'use client';

import React from 'react';

const stats = [
  { value: '340M+', label: 'Engaged Followers' },
  { value: '$47M', label: 'In Campaign Spend Managed' },
  { value: '6.8×', label: 'Average ROAS' },
  { value: '180+', label: 'Brand Partnerships' },
  { value: '94%', label: 'Client Retention' },
  { value: '12 Days', label: 'Avg. Time to First Post' },
];

const categories = [
  'Beauty & Skincare',
  'Apparel & Fashion',
  'Food & Beverage',
  'Fitness & Wellness',
  'Consumer Tech',
  'Home & Living',
  'Finance & Fintech',
  'Travel & Hospitality',
];

const CredibilityStrip: React.FC = () => {
  return (
    <section className="bg-graphite py-16 overflow-hidden border-y border-white/5">
      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-on-scroll text-center stagger-${Math.min(i + 1, 6)}`}
            >
              <div
                className="font-display font-light text-parchment leading-none mb-1"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                {stat.value}
              </div>
              <p className="font-sans text-xs text-pencil uppercase tracking-widest leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8 mb-8" />

      {/* Marquee of brand categories */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-graphite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-graphite to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...categories, ...categories].map((cat, i) => (
            <div
              key={`${cat}-${i}`}
              className="flex items-center gap-6 shrink-0 px-6"
            >
              <span className="w-1 h-1 rounded-full bg-vermillion flex-shrink-0" />
              <span className="font-display italic text-pencil text-base whitespace-nowrap">
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;