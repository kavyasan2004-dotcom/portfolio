'use client';

import React, { useState } from 'react';

const BriefSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="brief"
      className="bg-graphite py-24 px-6 lg:px-10 relative overflow-hidden"
    >
      {/* Background ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #F5F0E8 39px, #F5F0E8 40px)',
        }}
      />

      {/* Corner marks */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-pencil/20" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-pencil/20" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="animate-on-scroll mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-vermillion" />
            <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
              Start a Partnership
            </span>
            <span className="block w-8 h-px bg-vermillion" />
          </div>
          <h2
            className="font-display font-light text-parchment leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Brief us.
          </h2>
          <p className="font-display italic text-pencil mt-4 text-lg">
            Tell us what you need. We'll tell you who can deliver it.
          </p>
        </div>

        {submitted ? (
          <div className="animate-on-scroll text-center py-16">
            <div className="w-12 h-12 rounded-full border-2 border-vermillion flex items-center justify-center mx-auto mb-6">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10l4 4 8-8" stroke="#C84B31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-medium text-parchment mb-3">
              Brief received.
            </h3>
            <p className="font-sans text-pencil text-sm">
              We review every brief within 24 hours and come back with creator matches.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="animate-on-scroll space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company name */}
              <div>
                <label className="block font-sans text-xs font-medium text-pencil uppercase tracking-widest mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Meridian Skincare"
                  className="form-input"
                  required
                />
              </div>

              {/* Contact name */}
              <div>
                <label className="block font-sans text-xs font-medium text-pencil uppercase tracking-widest mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Alex Rivera"
                  className="form-input"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-xs font-medium text-pencil uppercase tracking-widest mb-3">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="alex@meridian.co"
                  className="form-input"
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block font-sans text-xs font-medium text-pencil uppercase tracking-widest mb-3">
                  Monthly Creator Budget
                </label>
                <select className="form-input" required defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option value="under-25k">Under $25K</option>
                  <option value="25k-100k">$25K – $100K</option>
                  <option value="100k-plus">$100K+</option>
                </select>
              </div>

              {/* Campaign type */}
              <div className="md:col-span-2">
                <label className="block font-sans text-xs font-medium text-pencil uppercase tracking-widest mb-3">
                  Campaign Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Awareness', 'Conversion', 'Content Licensing', 'Long-Term Ambassador'].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                      />
                      <span className="font-sans text-sm text-pencil border border-pencil/30 px-4 py-2 rounded-full hover:border-vermillion hover:text-parchment transition-all group-has-[:checked]:border-vermillion group-has-[:checked]:text-parchment group-has-[:checked]:bg-vermillion/10">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Success definition */}
              <div className="md:col-span-2">
                <label className="block font-sans text-xs font-medium text-pencil uppercase tracking-widest mb-3">
                  What does success look like?
                </label>
                <textarea
                  placeholder="We want to move 2,000 units in 30 days, build awareness in the 25–34 female demographic, and generate content we can license for paid social..."
                  rows={4}
                  className="form-input resize-none"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={loading}
                className="btn-vermillion font-sans font-semibold text-sm tracking-wide px-8 py-4 rounded-full inline-flex items-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-parchment/30 border-t-parchment rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Brief
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
              <p className="font-sans text-xs text-pencil">
                We respond within 24 hours, always.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BriefSection;