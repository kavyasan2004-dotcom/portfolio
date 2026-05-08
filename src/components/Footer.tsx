'use client';

import React, { useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Footer: React.FC = () => {
  const [rosterOpen, setRosterOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRosterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRosterOpen(false);
    }, 2500);
  };

  return (
    <footer className="bg-graphite text-parchment border-t border-white/5">
      {/* Roster Submit Panel */}
      {rosterOpen && (
        <div className="border-b border-white/10 px-6 lg:px-10 py-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-medium text-parchment">
                Submit Your Roster
              </h3>
              <button
                onClick={() => setRosterOpen(false)}
                className="text-pencil hover:text-parchment transition-colors text-sm"
              >
                Close ×
              </button>
            </div>
            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-display italic text-lg text-pencil-light">
                  Received. We review every submission within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRosterSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-sans font-medium text-pencil uppercase tracking-widest mb-2">
                    Agency / Management Name
                  </label>
                  <input
                    type="text"
                    placeholder="Talent Collective"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-pencil uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jordan Ellis"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-pencil uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jordan@agency.com"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-pencil uppercase tracking-widest mb-2">
                    Roster Size
                  </label>
                  <select className="form-input" required defaultValue="">
                    <option value="" disabled>Select range</option>
                    <option value="1-5">1–5 creators</option>
                    <option value="6-20">6–20 creators</option>
                    <option value="20+">20+ creators</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-pencil uppercase tracking-widest mb-2">
                    Primary Category
                  </label>
                  <select className="form-input" required defaultValue="">
                    <option value="" disabled>Select category</option>
                    <option value="lifestyle">Lifestyle & Fashion</option>
                    <option value="beauty">Beauty & Wellness</option>
                    <option value="food">Food & Beverage</option>
                    <option value="tech">Tech & Gaming</option>
                    <option value="finance">Finance & Business</option>
                    <option value="fitness">Fitness & Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-sans font-medium text-pencil uppercase tracking-widest mb-2">
                    What makes your roster different?
                  </label>
                  <textarea
                    placeholder="Tell us what sets your creators apart..."
                    rows={3}
                    className="form-input resize-none"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="btn-vermillion font-sans font-semibold text-sm tracking-wide px-8 py-3 rounded-full"
                  >
                    Submit Roster →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Main Footer Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Logo + tagline */}
          <div>
            <AppLogo
              text="Collab"
              size={24}
              className="text-parchment mb-1"
            />
            <p className="font-display italic text-pencil text-sm mt-1">
              Brokering the space between brands and culture.
            </p>
          </div>

          {/* Center: Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {['Work', 'Process', 'Roster', 'Brief Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-pencil hover:text-parchment transition-colors font-sans text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Social + Roster CTA */}
          <div className="flex items-center gap-4">
            {['Instagram', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-pencil hover:text-parchment transition-colors font-sans text-sm"
              >
                {s}
              </a>
            ))}
            <button
              onClick={() => setRosterOpen(!rosterOpen)}
              className="border border-pencil/40 text-pencil hover:border-parchment hover:text-parchment transition-all font-sans text-sm font-medium px-4 py-2 rounded-full"
            >
              Submit Your Roster
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-pencil-dark text-xs font-sans">
            © 2026 Collab Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-pencil-dark hover:text-pencil text-xs font-sans transition-colors">
              Privacy
            </a>
            <a href="#" className="text-pencil-dark hover:text-pencil text-xs font-sans transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;