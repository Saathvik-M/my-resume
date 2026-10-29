import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resume';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding border-t border-dark-border">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="glow-line" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle max-w-2xl">
            Where I've applied my skills to solve real-world problems.
          </p>

          <div className={`relative stagger-children ${isVisible ? 'visible' : ''}`}>
            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-dark-border to-transparent hidden sm:block" />

            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative sm:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-[9px] top-7 w-[13px] h-[13px] rounded-full border-2 border-accent bg-dark-bg hidden sm:block" />

                  <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-text-primary font-semibold text-base sm:text-lg flex items-center gap-2">
                          <Briefcase size={16} className="text-accent shrink-0" />
                          {exp.role}
                        </h3>
                        <p className="text-accent/80 font-medium text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-text-muted text-xs shrink-0">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-dark-border text-text-muted">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {exp.project && (
                      <p className="text-text-secondary text-sm mb-3">
                        <span className="text-text-muted">Project:</span>{' '}
                        <span className="font-medium text-text-primary">{exp.project}</span>
                      </p>
                    )}

                    {exp.advisor && (
                      <p className="text-text-secondary text-sm mb-3">
                        <span className="text-text-muted">Advisor:</span>{' '}
                        <span className="font-medium text-text-primary">{exp.advisor}</span>
                      </p>
                    )}

                    {exp.tech && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.tech.split(', ').map((t) => (
                          <span key={t} className="chip text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed"
                        >
                          <ChevronRight
                            size={14}
                            className="text-accent shrink-0 mt-1"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
