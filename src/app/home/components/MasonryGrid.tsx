'use client';

import React, { useState } from 'react';
import CaseStudyCard, { CaseStudy } from './CaseStudyCard';
import CaseStudyModal from './CaseStudyModal';

interface MasonryGridProps {
  studies: CaseStudy[];
  id?: string;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ studies, id }) => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <div id={id} className="masonry-grid">
        {studies.map((study, i) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            onClick={setActiveStudy}
            animationDelay={0.04 * (i % 6)}
          />
        ))}
      </div>

      <CaseStudyModal
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
      />
    </>
  );
};

export default MasonryGrid;