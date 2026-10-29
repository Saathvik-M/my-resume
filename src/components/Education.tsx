import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { resumeData } from '../data/resume';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="section-padding border-t border-dark-border">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="glow-line" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Education
            </span>
          </div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle max-w-2xl">
            My educational journey in computer science and related fields.
          </p>

          <div className={`space-y-4 stagger-children ${isVisible ? 'visible' : ''}`}>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-accent-muted text-accent shrink-0 mt-0.5">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold text-sm sm:text-base">
                        {edu.degree}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-text-muted text-xs">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">
                      {edu.scoreLabel}
                    </p>
                    <p className="text-accent font-bold text-lg">{edu.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {resumeData.certifications.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Training & Certifications
              </h3>
              <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="card">
                    <h4 className="text-text-primary font-medium text-sm mb-1.5">
                      {cert.program}
                    </h4>
                    <p className="text-accent/80 text-sm mb-2">{cert.provider}</p>
                    <p className="text-text-muted text-xs flex items-center gap-1">
                      <Calendar size={11} />
                      {cert.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {resumeData.achievements.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Achievements
              </h3>
              <div className="space-y-4">
                {resumeData.achievements.map((achievement, index) => (
                  <div key={index} className="card flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 shrink-0">
                      🏆
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-text-muted text-xs mt-0.5">
                        {achievement.date}
                      </p>
                      <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
