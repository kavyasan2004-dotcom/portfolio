'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Brief intake',
    body: 'You tell us your campaign objective, budget range, and what success looks like. We ask the questions your last agency forgot to.',
  },
  {
    number: '02',
    title: 'Creator matching',
    body: 'Our team hand-selects from an active roster of 2,400+ vetted creators. No algorithm — a human who knows both your brand and the creator\'s actual audience.',
  },
  {
    number: '03',
    title: 'Rate negotiation',
    body: 'We broker fair rates on both sides. Brands pay market rate for documented reach. Creators get paid what their audience is actually worth.',
  },
  {
    number: '04',
    title: 'Campaign execution',
    body: 'From briefing decks to content approval to live post tracking — we manage the operational layer so your team focuses on strategy.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="bg-parchment py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-vermillion" />
            <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
              How It Works
            </span>
          </div>
          <h2
            className="font-display font-light text-graphite leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Four moves from brief
            <span className="font-display italic text-graphite-light"> to live.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll stagger-${i + 1} border-t-2 border-pencil-light pt-6`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="font-display text-vermillion text-sm font-medium">
                  {step.number}
                </span>
                <div className="flex-1 w-full h-px bg-pencil-light/50 mt-2" />
              </div>
              <h3 className="font-display font-medium text-graphite text-xl mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-graphite-light leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;