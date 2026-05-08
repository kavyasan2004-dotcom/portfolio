'use client';

import React, { useEffect, useRef, useState } from 'react';

interface EventCard {
  name: string;
  organiser: string;
  placeholder: string;
  image?: string;
}

const events: EventCard[] = [
  { name: 'Forbes India Leadership Awards 2025', organiser: 'Forbes India', placeholder: 'Forbes India Leadership Awards 2025', image: '/assets/images/WhatsApp_Image_2026-05-02_at_1.06.32_PM_1_-1778058013715.jpeg' },
  { name: 'CNBC TV18 Future Female Forward 2025', organiser: 'CNBC TV18', placeholder: 'CNBC TV18 Future Female Forward 2025', image: '/assets/images/WhatsApp_Image_2026-05-02_at_1.27.38_PM_1_-1778058020818.jpeg' },
];

function EventCard({ event, index }: { event: EventCard; index: number }) {
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
      className="relative overflow-hidden rounded-sm cursor-default flex-1"
      style={{
        minHeight: '420px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${index * 0.15}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${index * 0.15}s cubic-bezier(0.16,1,0.3,1)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Placeholder background */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: event.image ? 'none' : 'linear-gradient(135deg, #141414 0%, #222222 100%)',
          backgroundImage: event.image ? `url(${event.image})` : undefined,
          backgroundSize: event.image ? 'cover' : undefined,
          backgroundPosition: event.image ? 'center' : undefined,
          filter: hovered ? 'brightness(0.75)' : 'brightness(1)',
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'filter 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {!event.image && (
          <span className="font-mono text-[0.6rem] text-[#f5f0e8]/12 uppercase tracking-[0.2em] text-center px-6">
            [ Image Placeholder: {event.placeholder} ]
          </span>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Top: organiser + tag */}
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
        <span className="font-sans text-[0.75rem] text-[#f5f0e8]/40 font-light">{event.organiser}</span>
        <span className="font-mono text-[0.55rem] text-[#c8855a]/80 uppercase tracking-[0.15em] bg-black/50 px-2 py-1 backdrop-blur-sm">
          Creative Production
        </span>
      </div>

      {/* Bottom: event name + descriptor */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-white leading-tight mb-3"
          style={{
            transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {event.name}
        </h3>
        <p
          className="font-sans text-[0.8rem] text-[#f5f0e8]/50 italic font-light"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Ideated design assets and coordinated cross-functional execution.
        </p>
      </div>
    </div>
  );
}

export default function KavyaCreativeProduction() {
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
        {/* Heading */}
        <div
          ref={ref}
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[0.65rem] text-[#c8855a] uppercase tracking-[0.25em]">Events</span>
            <div className="flex-1 h-px bg-[#f5f0e8]/10" />
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f0e8]">Creative Production</h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-5">
          {events.map((event, i) => (
            <EventCard key={event.name} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
