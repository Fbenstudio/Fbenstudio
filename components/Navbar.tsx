
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'Prototyping', id: 'prototyping' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button onClick={() => onPageChange('home')} className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-brand-navy border border-brand-copper/30 group-hover:border-brand-copper transition-all">
             <span className="text-white font-bold text-xl font-display">F</span>
             <span className="text-brand-copper font-bold text-xl font-display -ml-0.5">B</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-white">
            Fben<span className="text-brand-copper">studio</span>
          </span>
        </button>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onPageChange(link.id)}
              className={`relative text-sm font-bold tracking-wide uppercase transition-colors hover:text-brand-copper ${
                currentPage === link.id ? 'text-brand-copper' : 'text-slate-400'
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-copper rounded-full shadow-[0_0_8px_rgba(196,142,108,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onPageChange('contact')}
          className="px-6 py-2.5 bg-brand-copper text-white rounded-full text-xs font-black tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all shadow-lg shadow-brand-copper/10"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
