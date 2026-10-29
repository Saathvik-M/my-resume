import { resumeData } from '../data/resume';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categoryIcons: Record<string, string> = {
  'Languages': '💻',
  'AI & Machine Learning': '🧠',
  'Backend & Databases': '🗄️',
  'Web Technologies': '🌐',
  'Tools & Platforms': '🛠️',
  'Core Concepts': '📐',
};

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding border-t border-dark-border">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="glow-line" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Skills
            </span>
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle max-w-2xl">
            Technologies and concepts I work with to build intelligent systems.
          </p>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
            {resumeData.skills.map((category) => (
              <div key={category.category} className="card group">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg" role="img" aria-label={category.category}>
                    {categoryIcons[category.category] || '📦'}
                  </span>
                  <h3 className="text-text-primary font-semibold text-sm">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="chip group-hover:border-accent/20">
                      {skill}
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
