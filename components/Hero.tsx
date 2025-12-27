
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-300 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-[1.1]">
          Designing digital <br />
          <span className="gradient-text">experiences</span> that matter.
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Alex River is a Senior UI/UX Designer specializing in building accessible, 
          user-centric products for high-growth startups and established brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#work" 
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group"
          >
            View Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M5 12h14"/></svg>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-2xl font-bold transition-all flex items-center justify-center"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          {/* Placeholder for brand logos */}
          <div className="flex items-center justify-center text-xl font-bold">TECHNO</div>
          <div className="flex items-center justify-center text-xl font-bold">VOID</div>
          <div className="flex items-center justify-center text-xl font-bold">LUMOS</div>
          <div className="flex items-center justify-center text-xl font-bold">SOLARIS</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
