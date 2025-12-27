
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl max-h-[90vh] glass-card rounded-[40px] overflow-hidden flex flex-col border border-white/10 animate-fade-in shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/20 hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="overflow-y-auto">
          <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
          
          <div className="p-8 md:p-16 space-y-12">
            <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">{project.title}</h2>
                <p className="text-xl text-slate-300 leading-relaxed">{project.description}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Role</h4>
                  <p className="text-slate-200">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Duration</h4>
                  <p className="text-slate-200">{project.duration}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-brand-400">The Challenge</h3>
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex gap-4 text-slate-300">
                      <span className="text-brand-500 font-bold">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-green-400">The Solution</h3>
                <ul className="space-y-4">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="flex gap-4 text-slate-300">
                      <span className="text-green-500 font-bold">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
