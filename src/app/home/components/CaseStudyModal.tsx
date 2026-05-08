'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { CaseStudy } from './CaseStudyCard';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!study) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${study.brand}`}
    >
      <div
        ref={modalRef}
        className="modal-enter paper-card rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        style={{ backgroundColor: 'var(--paper-white)' }}
      >
        {/* Modal header */}
        <div className="sticky top-0 bg-parchment-white border-b border-pencil-light/30 px-8 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
              {study.category}
            </span>
            <span className="text-pencil">·</span>
            <span className="font-sans text-xs font-semibold text-graphite">{study.brand}</span>
            <span className="font-sans text-xs text-pencil">× {study.creator}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-pencil-light/50 text-graphite-light hover:text-graphite hover:border-pencil transition-all text-sm"
            aria-label="Close case study"
          >
            ×
          </button>
        </div>

        {/* Modal content */}
        <div className="p-8">
          {study.imageUrl && (
            <div className="w-full rounded-sm overflow-hidden mb-8" style={{ height: '300px' }}>
              <AppImage
                src={study.imageUrl}
                alt={study.imageAlt || `${study.creator} campaign for ${study.brand}`}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          )}

          <h2 className="font-display font-medium text-graphite text-2xl leading-tight mb-4">
            {study.headline || `${study.brand} × ${study.creator}`}
          </h2>

          {study.kpi && (
            <div className="flex items-end gap-4 my-6 p-6 bg-parchment-dark rounded-sm border-l-4 border-vermillion">
              <div>
                <span className="kpi-number" style={{ fontSize: '3.5rem' }}>{study.kpi}</span>
                <p className="font-display italic text-graphite-light text-lg mt-1">{study.kpiLabel}</p>
              </div>
              {study.subKpi && (
                <p className="font-sans text-sm text-pencil pb-2">{study.subKpi}</p>
              )}
            </div>
          )}

          <div className="prose prose-sm max-w-none">
            <p className="font-sans text-sm text-graphite-light leading-relaxed">
              {study.fullBody || study.excerpt}
            </p>
          </div>

          {study.tags && (
            <div className="flex flex-wrap gap-2 mt-8">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs text-pencil border border-pencil-light/50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-pencil-light/30">
            <a
              href="#brief"
              onClick={onClose}
              className="btn-vermillion font-sans font-semibold text-sm tracking-wide px-6 py-3 rounded-full inline-flex items-center gap-2"
            >
              Brief Us on a similar campaign
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;