'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

export interface CaseStudy {
  id: number;
  type: 'kpi' | 'narrative' | 'image-kpi' | 'full-story';
  brand: string;
  creator: string;
  category: string;
  kpi?: string;
  kpiLabel?: string;
  subKpi?: string;
  headline?: string;
  excerpt?: string;
  fullBody?: string;
  imageUrl?: string;
  imageAlt?: string;
  accentColor?: string;
  bgDark?: boolean;
  tags?: string[];
}

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: (study: CaseStudy) => void;
  animationDelay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick, animationDelay = 0 }) => {
  const handleClick = () => onClick(study);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(study);
    }
  };

  if (study.type === 'kpi') {
    return (
      <div
        className={`masonry-item animate-on-scroll case-card paper-card rounded-sm p-8 cursor-pointer`}
        style={{ animationDelay: `${animationDelay}s` }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View case study: ${study.brand} with ${study.creator}`}
      >
        {/* Category tag */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
            {study.category}
          </span>
          <span className="font-sans text-xs text-pencil">→</span>
        </div>

        {/* KPI */}
        <div className="mb-4">
          <span className="kpi-number" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)' }}>
            {study.kpi}
          </span>
        </div>
        <p className="font-display italic text-graphite-light text-lg leading-tight mb-6">
          {study.kpiLabel}
        </p>
        {study.subKpi && (
          <p className="font-sans text-sm text-pencil">{study.subKpi}</p>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-pencil-light/40 flex items-center justify-between">
          <div>
            <p className="font-sans text-xs font-semibold text-graphite">{study.brand}</p>
            <p className="font-sans text-xs text-pencil">× {study.creator}</p>
          </div>
          <span className="font-sans text-xs text-vermillion font-medium">Read more</span>
        </div>
      </div>
    );
  }

  if (study.type === 'image-kpi') {
    return (
      <div
        className={`masonry-item animate-on-scroll case-card paper-card-dark rounded-sm overflow-hidden cursor-pointer`}
        style={{ animationDelay: `${animationDelay}s`, backgroundColor: 'var(--graphite)' }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View case study: ${study.brand} with ${study.creator}`}
      >
        {study.imageUrl && (
          <div className="w-full overflow-hidden" style={{ height: '220px' }}>
            <AppImage
              src={study.imageUrl}
              alt={study.imageAlt || `${study.creator} campaign for ${study.brand}`}
              className="w-full h-full object-cover opacity-80"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
            {study.category}
          </span>
          {study.kpi && (
            <div className="mt-3">
              <span className="kpi-number text-vermillion-light" style={{ fontSize: '3rem' }}>
                {study.kpi}
              </span>
              <p className="font-display italic text-pencil-light text-base mt-1">
                {study.kpiLabel}
              </p>
            </div>
          )}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <p className="font-sans text-xs font-semibold text-parchment">{study.brand}</p>
              <p className="font-sans text-xs text-pencil">× {study.creator}</p>
            </div>
            <span className="font-sans text-xs text-vermillion-light font-medium">Read more</span>
          </div>
        </div>
      </div>
    );
  }

  if (study.type === 'narrative') {
    return (
      <div
        className={`masonry-item animate-on-scroll case-card paper-card rounded-sm p-8 cursor-pointer`}
        style={{ animationDelay: `${animationDelay}s` }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View case study: ${study.brand} with ${study.creator}`}
      >
        <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
          {study.category}
        </span>
        <h3 className="font-display font-medium text-graphite text-xl leading-snug mt-3 mb-4">
          {study.headline}
        </h3>
        <p className="font-sans text-sm text-graphite-light leading-relaxed">
          {study.excerpt}
        </p>

        {study.kpi && (
          <div className="mt-6 p-4 bg-parchment-dark rounded-sm border-l-2 border-vermillion">
            <span className="kpi-number text-3xl">{study.kpi}</span>
            <p className="font-sans text-xs text-graphite-light mt-1">{study.kpiLabel}</p>
          </div>
        )}

        {study.tags && (
          <div className="flex flex-wrap gap-2 mt-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs text-pencil border border-pencil-light/50 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-pencil-light/40 flex items-center justify-between">
          <div>
            <p className="font-sans text-xs font-semibold text-graphite">{study.brand}</p>
            <p className="font-sans text-xs text-pencil">× {study.creator}</p>
          </div>
          <span className="font-sans text-xs text-vermillion font-medium">Read more</span>
        </div>
      </div>
    );
  }

  // full-story
  return (
    <div
      className={`masonry-item animate-on-scroll case-card paper-card rounded-sm overflow-hidden cursor-pointer`}
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View case study: ${study.brand} with ${study.creator}`}
    >
      {study.imageUrl && (
        <div className="w-full overflow-hidden" style={{ height: '260px' }}>
          <AppImage
            src={study.imageUrl}
            alt={study.imageAlt || `${study.creator} campaign shoot for ${study.brand}`}
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-8">
        <span className="font-sans text-xs font-medium text-pencil uppercase tracking-widest">
          {study.category}
        </span>
        <h3 className="font-display font-medium text-graphite text-xl leading-snug mt-3 mb-3">
          {study.headline}
        </h3>
        <p className="font-sans text-sm text-graphite-light leading-relaxed line-clamp-3">
          {study.excerpt}
        </p>
        <div className="mt-6 pt-4 border-t border-pencil-light/40 flex items-center justify-between">
          <div>
            <p className="font-sans text-xs font-semibold text-graphite">{study.brand}</p>
            <p className="font-sans text-xs text-pencil">× {study.creator}</p>
          </div>
          <span className="font-sans text-xs text-vermillion font-medium">Read more</span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;