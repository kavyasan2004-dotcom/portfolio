'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Brand {
  name: string;
  industry: string;
  microTag: string;
  placeholder: string;
  image?: string;
  instagramUrl: string;
}

const brands: Brand[] = [
  { name: 'The Fatty Bao', industry: 'F&B', microTag: 'Creative Direction & Ideation', placeholder: 'The Fatty Bao', image: '/assets/images/IMG_9298-1778057131014.PNG', instagramUrl: 'https://www.instagram.com/thefattybaoindia?igsh=MWN2cnB1Z2RhbnR5Ng==' },
  { name: 'Olive Beach Bangalore', industry: 'F&B', microTag: 'Creative Direction & Ideation', placeholder: 'Olive Beach Bangalore', image: '/assets/images/IMG_9295-1778057137798.PNG', instagramUrl: 'https://www.instagram.com/olivebeachblr?igsh=MTc5OTNzb2VkcTY2bw==' },
  { name: 'Olive Bar & Kitchen Goa', industry: 'F&B', microTag: 'Creative Direction & Ideation', placeholder: 'Olive Bar & Kitchen Goa', image: '/assets/images/IMG_9294-1778057155147.PNG', instagramUrl: 'https://www.instagram.com/olivegoa?igsh=Z3Z1aHJraXI0emY=' },
  { name: 'Tribeca Developers', industry: 'Real Estate', microTag: 'Ideation & Execution', placeholder: 'Tribeca Developers', image: '/assets/images/IMG_9300-1778057169844.PNG', instagramUrl: 'https://www.instagram.com/tribecadevelopers?igsh=MWE2cnB0OWFjMWw1dg==' },
  { name: 'Grazie Indiranagar', industry: 'F&B', microTag: 'Creative Direction & Ideation', placeholder: 'Grazie Indiranagar', image: '/assets/images/IMG_9299-1778057187652.PNG', instagramUrl: 'https://www.instagram.com/grazie_indiranagar?igsh=MWVhZXpncTJmMDF6ZA==' },
  { name: 'Mercedes-Benz T&T Motors', industry: 'Automotive', microTag: 'Ideation & Execution', placeholder: 'Mercedes-Benz T&T Motors', image: '/assets/images/IMG_9296-1778057420543.PNG', instagramUrl: 'https://www.instagram.com/mercedesbenz.tandtmotors?igsh=amZoMXVxdHJrdTE2' },
  { name: 'Allied Kia Delhi NCR', industry: 'Automotive', microTag: 'Ideation & Execution', placeholder: 'Allied Kia Delhi NCR', image: '/assets/images/IMG_9297-1778057429722.PNG', instagramUrl: 'https://www.instagram.com/alliedkiadelhincr?igsh=MThvd3V6MmZudWllZQ==' },
];

const CARD_HEIGHT = 320;

function BrandCard({ brand, index, style }: { brand: Brand; index: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // rowBrands start at index 3 (Tribeca, Grazie, Mercedes, Allied Kia)
  const isRowCard = index >= 3;

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
    <a
      href={brand.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as React.RefObject<HTMLAnchorElement>}
      className="relative overflow-hidden rounded-sm block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
        cursor: 'pointer',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background: uploaded image or placeholder */}
      {brand.image ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${brand.image})`,
            backgroundSize: isRowCard ? 'contain' : (index === 0 ? 'cover' : (index === 1 || index === 2 ? '100% 200%' : '100% 300%')),
            backgroundPosition: isRowCard ? 'center' : (index === 0 ? 'center' : 'top center'),
            backgroundRepeat: 'no-repeat',
            backgroundColor: isRowCard ? '#0a0a0a' : 'transparent',
            filter: hovered ? 'brightness(0.7)' : 'brightness(1)',
            transition: 'filter 0.4s ease',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            filter: hovered ? 'brightness(0.7)' : 'brightness(1)',
            transition: 'filter 0.4s ease',
          }}
        >
          <span className="font-mono text-[0.6rem] text-[#f5f0e8]/15 uppercase tracking-[0.2em] text-center px-4">
            [ Image Placeholder: {brand.placeholder} ]
          </span>
        </div>
      )}

      {/* Gradient overlay — subtle for row cards so image stays clean */}
      <div
        className="absolute inset-0"
        style={{
          background: isRowCard
            ? 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 40%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Top-right tags */}
      <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
        <span className="font-mono text-[0.6rem] text-[#f5f0e8]/70 uppercase tracking-[0.15em] bg-black/50 px-2 py-1 backdrop-blur-sm">
          {brand.industry}
        </span>
        <span className="font-mono text-[0.55rem] text-[#c8855a]/80 uppercase tracking-[0.12em] bg-black/50 px-2 py-0.5 backdrop-blur-sm">
          {brand.microTag}
        </span>
      </div>

      {/* Brand name bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3
          className="font-display text-[1.2rem] md:text-[1.4rem] font-bold text-white leading-tight"
          style={{
            transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {brand.name}
        </h3>
      </div>
    </a>
  );
}

export default function KavyaAccounts() {
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

  const heroBrand = brands[0];
  const stackedBrands = brands.slice(1, 3);
  const rowBrands = brands.slice(3, 7);

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
            <span className="font-mono text-[0.65rem] text-[#c8855a] uppercase tracking-[0.25em]">Work</span>
            <div className="flex-1 h-px bg-[#f5f0e8]/10" />
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#f5f0e8]">Accounts</h2>
        </div>

        {/* Top block: hero left + two stacked right */}
        <div className="flex gap-4 mb-4" style={{ height: `${CARD_HEIGHT}px` }}>
          {/* Hero card — left, full height */}
          <div className="flex-1 h-full">
            <BrandCard
              brand={heroBrand}
              index={0}
              style={{ height: '100%' }}
            />
          </div>

          {/* Two stacked cards — right */}
          <div className="flex-1 flex flex-col gap-4 h-full">
            {stackedBrands.map((brand, i) => (
              <div key={brand.name} className="flex-1">
                <BrandCard
                  brand={brand}
                  index={i + 1}
                  style={{ height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: four equal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ height: `${CARD_HEIGHT}px` }}>
          {rowBrands.map((brand, i) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              index={i + 3}
              style={{ height: '100%' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
