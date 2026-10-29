import { Calendar, Layers } from 'lucide-react';
import { resumeData } from '../data/resume';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding border-t border-dark-border">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="glow-line" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Projects
            </span>
          </div>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle max-w-2xl">
            Hands-on projects showcasing my skills in AI, multi-agent systems, and research.
          </p>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${isVisible ? 'visible' : ''}`}>
            {resumeData.projects.map((project) => (
              <div
                key={project.name}
                className="card group relative overflow-hidden"
              >
                {/* Subtle top accent border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-md bg-accent-muted text-accent">
                    <Layers size={16} />
                  </div>
                  <h3 className="text-text-primary font-semibold text-sm sm:text-base group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-text-muted text-xs mb-3">
                  <Calendar size={12} />
                  {project.date}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.split(', ').map((t) => (
                    <span key={t} className="chip text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
