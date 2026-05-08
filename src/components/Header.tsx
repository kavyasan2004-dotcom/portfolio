'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

interface HeaderProps {
  onBriefClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBriefClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < lastY || y < 100);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-fixed' : 'bg-transparent'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <AppLogo
            text="Collab"
            size={28}
            className="text-graphite"
          />
        </div>

        {/* Nav Links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {['Work', 'Process', 'Roster'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-sans font-medium text-graphite-light hover:text-graphite transition-colors duration-200 tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={onBriefClick}
          className="btn-vermillion font-sans font-semibold text-sm tracking-wide px-5 py-2.5 rounded-full"
        >
          Brief Us
        </button>
      </div>
    </header>
  );
};

export default Header;