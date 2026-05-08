'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  numericTarget: number;
  prefix: string;
  suffix: string;
  desc: string;
}

const stats: Stat[] = [
  { value: '1.5x', numericTarget: 1.5, prefix: '', suffix: 'x', desc: 'Average follower growth across accounts in under 4 months.' },
  { value: '700+', numericTarget: 700, prefix: '', suffix: '+', desc: 'Content pieces produced across statics, reels, and stories.' },
  { value: '7', numericTarget: 7, prefix: '', suffix: '', desc: 'Brands managed across hospitality, automotive, real estate, and F&B.' },
];

function CountUp({ target, suffix, prefix, started }: { target: number; suffix: string; prefix: string; started: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target < 20 ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target);
      setCurrent(val);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCurrent(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  const display = target < 20 ? current.toFixed(1) : current.toString();

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function KavyaNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStarted(true), 300);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div
          className="flex items-center gap-4 mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span className="font-mono text-[0.65rem] text-[#c8855a] uppercase tracking-[0.25em]">Impact</span>
          <div className="flex-1 h-px bg-[#f5f0e8]/10" />
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-[#f5f0e8]">By The Numbers</h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="flex flex-col items-center text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.8s ${i * 0.15}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${i * 0.15}s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div className="font-display text-[clamp(4rem,10vw,7rem)] font-bold text-[#f5f0e8] leading-none tracking-[-0.02em] mb-5">
                <CountUp
                  target={stat.numericTarget}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  started={started}
                />
              </div>
              <p className="font-sans text-[0.82rem] text-[#f5f0e8]/35 font-light leading-relaxed max-w-[220px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
