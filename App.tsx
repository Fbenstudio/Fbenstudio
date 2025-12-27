
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Page, Project } from './types';
import { PROJECTS, PROTOTYPES, SKILLS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeView onPageChange={setCurrentPage} onProjectClick={setSelectedProject} />;
      case 'work': return <WorkView onProjectClick={setSelectedProject} />;
      case 'prototyping': return <PrototypingView />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView />;
      default: return <HomeView onPageChange={setCurrentPage} onProjectClick={setSelectedProject} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="pt-24 min-h-[calc(100vh-80px)]">
        <div className="page-transition">
          {renderPage()}
        </div>
      </div>
      <Footer onPageChange={setCurrentPage} />
      <AIAssistant />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

// --- Page Views ---

const HomeView: React.FC<{onPageChange: (p: Page) => void, onProjectClick: (p: Project) => void}> = ({onPageChange, onProjectClick}) => (
  <div className="space-y-32 py-12">
    <section className="px-6 text-center max-w-5xl mx-auto py-20">
      <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 text-white leading-tight">
        Precision <span className="copper-gradient-text">Design</span><br />For Modern Products.
      </h1>
      <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
        Fbenstudio specializes in crafting pixel-perfect interfaces that prioritize user empathy and strategic growth.
      </p>
      <div className="flex justify-center gap-6">
        <button onClick={() => onPageChange('work')} className="px-10 py-4 bg-brand-copper text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">Explore Work</button>
        <button onClick={() => onPageChange('contact')} className="px-10 py-4 glass-card text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">Get in touch</button>
      </div>
    </section>

    <section className="px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">Featured Case Studies</h2>
        <button onClick={() => onPageChange('work')} className="text-brand-copper font-bold text-sm hover:underline">View all work →</button>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {PROJECTS.slice(0, 2).map(p => (
          <div key={p.id} onClick={() => onProjectClick(p)} className="group cursor-pointer">
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden glass-card border-brand-copper/20 mb-6 copper-glow">
              <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">{p.title}</h3>
            <p className="text-slate-400 font-medium">{p.category}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const WorkView: React.FC<{onProjectClick: (p: Project) => void}> = ({onProjectClick}) => (
  <div className="px-6 max-w-7xl mx-auto py-20">
    <div className="mb-20 text-center max-w-3xl mx-auto">
      <h2 className="text-5xl font-display font-extrabold tracking-tight text-white mb-6">Archive of Excellence</h2>
      <p className="text-slate-400 text-lg">A deep dive into strategic design solutions across Fintech, Wellness, and Consumer Tech sectors.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PROJECTS.map(p => (
        <div key={p.id} onClick={() => onProjectClick(p)} className="group cursor-pointer glass-card p-6 rounded-[32px] border-brand-copper/10 hover:border-brand-copper/30 transition-all">
          <div className="aspect-square rounded-2xl overflow-hidden mb-6">
            <img src={p.image} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-copper mb-2 block">{p.category}</span>
          <h3 className="text-xl font-display font-bold text-white mb-3">{p.title}</h3>
          <p className="text-slate-500 text-sm line-clamp-2">{p.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const PrototypingView: React.FC = () => (
  <div className="px-6 max-w-7xl mx-auto py-20">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/5 pb-12">
      <div className="max-w-2xl">
        <h2 className="text-5xl font-display font-extrabold tracking-tight text-white mb-6">The Prototyping <span className="text-brand-copper italic">Lab</span></h2>
        <p className="text-slate-400 text-lg">Where ideas become interactive. I believe design is best communicated through motion and behavior.</p>
      </div>
      <div className="px-6 py-2 bg-brand-copper/10 border border-brand-copper/20 rounded-full text-brand-copper text-xs font-bold tracking-widest uppercase">
        Live Interactions
      </div>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-16">
      {PROTOTYPES.map(p => (
        <div key={p.id} className="space-y-6">
          <div className="aspect-video rounded-[32px] overflow-hidden glass-card border-brand-copper/20 shadow-2xl relative group">
            <div className="absolute inset-0 bg-brand-navy flex items-center justify-center">
              <span className="text-slate-500 font-bold italic">Simulated Interactive Prototype...</span>
            </div>
            {/* Using a background placeholder for now as videos require valid persistent links */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-copper opacity-20 group-hover:opacity-40 transition-all" />
          </div>
          <div>
            <span className="text-brand-copper font-black text-[10px] uppercase tracking-widest">{p.category}</span>
            <h3 className="text-2xl font-display font-bold text-white mt-2">{p.title}</h3>
            <p className="text-slate-400 mt-2">{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutView: React.FC = () => (
  <div className="px-6 max-w-7xl mx-auto py-20">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-brand-copper/20 copper-glow">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-16 left-16">
          <h2 className="text-5xl font-display font-black text-white tracking-tighter">Fbenstudio</h2>
          <p className="text-brand-copper font-bold tracking-[0.2em] uppercase text-xs mt-2">Design Strategist</p>
        </div>
      </div>
      <div className="space-y-12">
        <h2 className="text-6xl font-display font-extrabold tracking-tighter text-white leading-tight">Solving Problems,<br /><span className="text-brand-copper italic">Humanly.</span></h2>
        <p className="text-slate-400 text-xl leading-relaxed">
          I started Fbenstudio to bridge the gap between technical complexity and user joy. With 8+ years of industry experience, I've learned that the best design is often the one that disappears.
        </p>
        <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
          {['Figma Mastery', 'React Engineering', 'User Psychology', 'Design Systems'].map(s => (
            <div key={s} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-copper" />
              <span className="text-slate-200 font-bold">{s}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map(skill => (
            <span key={skill} className="px-5 py-2 glass-card rounded-xl text-xs font-bold text-slate-400 border-brand-copper/5">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ContactView: React.FC = () => (
  <div className="px-6 max-w-5xl mx-auto py-20 text-center">
    <h2 className="text-6xl font-display font-black text-white tracking-tighter mb-8 leading-none">Let's <span className="text-brand-copper">Collaborate.</span></h2>
    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 font-medium">Have a vision? I have the tools to make it tangible. From initial wireframes to high-fidelity motion prototypes.</p>
    
    <div className="glass-card p-12 rounded-[48px] border-brand-copper/20 text-left shadow-2xl">
      <form className="grid md:grid-cols-2 gap-8" onSubmit={e => e.preventDefault()}>
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-copper mb-2">Your Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-copper transition-colors outline-none" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-copper mb-2">Email Address</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-copper transition-colors outline-none" placeholder="john@example.com" />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-copper mb-2">Project Brief</label>
            <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-copper transition-colors outline-none resize-none" placeholder="Tell me about your project..."></textarea>
          </div>
        </div>
        <div className="md:col-span-2">
          <button className="w-full py-5 bg-brand-copper text-white rounded-3xl font-black text-lg tracking-widest uppercase hover:bg-white hover:text-brand-navy transition-all shadow-xl shadow-brand-copper/20">Send Proposal</button>
        </div>
      </form>
    </div>
  </div>
);

export default App;
