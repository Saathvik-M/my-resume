import { User, Target, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resume';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Target,
      label: 'Focus',
      value: 'GenAI & RAG Systems',
    },
    {
      icon: Sparkles,
      label: 'Approach',
      value: 'Research to Production',
    },
    {
      icon: User,
      label: 'Current Role',
      value: 'GenAI Intern',
    },
  ];

  return (
    <section id="about" className="section-padding border-t border-dark-border">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="glow-line" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle max-w-2xl">
            A brief overview of my background, interests, and what drives me.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {highlights.map((item) => (
              <div key={item.label} className="card flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-accent-muted text-accent shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-text-primary font-medium text-sm">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              {resumeData.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['RAG', 'LLMs', 'NLP', 'FastAPI', 'Python', 'PyTorch'].map(
                (tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
