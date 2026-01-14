import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsProps {
  previewMode?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ previewMode = false }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (previewMode) return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-stone-300"></span>
        Projects
      </h2>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative pl-4 border-l-2 border-stone-100 hover:border-crimson-600 transition-colors duration-300">
            <div 
              className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2 ${!previewMode ? 'cursor-pointer' : ''}`}
              onClick={() => toggleExpand(project.id)}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-900 group-hover:text-crimson-700 transition-colors">
                  {project.title}
                </span>
                {project.link || project.github ? (
                  <a 
                    href={project.link || project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight className="w-3 h-3 text-stone-400 hover:text-stone-900 transition-colors" />
                  </a>
                ) : null}
              </div>
              
              <div className="flex gap-2 items-center">
                {project.technologies.slice(0, 3).map(tech => (
                   <span key={tech} className="text-xs text-stone-400 font-mono bg-stone-50 px-1.5 py-0.5 rounded">{tech}</span>
                ))}
                {!previewMode && (
                  <div className="text-stone-300 ml-2">
                    {expandedId === project.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-sm text-stone-600 leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Write-up Section */}
            {!previewMode && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === project.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 text-sm text-stone-700 leading-7">
                  <h4 className="font-bold text-xs uppercase tracking-wide text-stone-400 mb-2">The Write Up</h4>
                  {project.longDescription}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;