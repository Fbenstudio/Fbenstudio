
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (p: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="relative flex items-center justify-center w-8 h-8 rounded bg-brand-navy border border-brand-copper/30">
                <span className="text-white font-bold text-sm">F</span>
                <span className="text-brand-copper font-bold text-sm -ml-0.5">B</span>
             </div>
             <span className="font-display font-bold text-lg tracking-tighter text-white">
               Fben<span className="text-brand-copper">studio</span>
             </span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs font-medium">
            Elevating the digital landscape through strategic design and high-fidelity prototypes.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-copper mb-8">Navigation</h4>
          <ul className="space-y-4">
            {['home', 'work', 'prototyping', 'about', 'contact'].map(p => (
              <li key={p}>
                <button 
                  onClick={() => onPageChange(p as Page)} 
                  className="text-slate-400 hover:text-white transition-colors capitalize font-semibold text-sm"
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-copper mb-8">Social Connect</h4>
          <ul className="space-y-4">
            {['LinkedIn', 'Dribbble', 'Instagram', 'Twitter'].map(s => (
              <li key={s}>
                <a href="#" className="text-slate-400 hover:text-white transition-colors font-semibold text-sm">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-600 tracking-widest uppercase">
        <p>© 2024 Fbenstudio. All Rights Reserved.</p>
        <p>Built with Gemini AI & Pixel Precision</p>
      </div>
    </footer>
  );
};

export default Footer;
