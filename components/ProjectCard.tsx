
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 bg-slate-900 border border-white/5">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <span className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Case Study
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest text-brand-400 font-bold px-2 py-0.5 border border-brand-500/20 bg-brand-500/5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-display font-bold group-hover:text-brand-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
