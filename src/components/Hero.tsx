import { ArrowDown, Github, Linkedin, Globe, MapPin } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Hero() {
  const { name, title, summary, contact } = resumeData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center pt-20 pb-16">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-accent-muted border border-accent/20 text-sm text-accent animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-slide-up">
          {name.split(' ').map((word, i) => (
            <span key={i}>
              {i === 0 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                <span className="text-text-primary"> {word}</span>
              )}
            </span>
          ))}
        </h1>

        {/* Title */}
        <p
          className="text-lg sm:text-xl text-text-secondary font-medium mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          {title}
        </p>

        {/* Summary */}
        <p
          className="max-w-2xl mx-auto text-text-secondary/80 text-sm sm:text-base leading-relaxed mb-8 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          {summary}
        </p>

        {/* Location */}
        <div
          className="flex items-center justify-center gap-1.5 text-text-muted text-sm mb-8 animate-slide-up"
          style={{ animationDelay: '0.25s' }}
        >
          <MapPin size={14} />
          <span>{contact.location}</span>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
                       bg-accent text-white shadow-lg shadow-accent/20
                       hover:bg-accent-hover hover:shadow-accent/30 transition-all duration-200"
          >
            View My Experience
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
                       bg-white/[0.04] text-text-primary border border-dark-border
                       hover:bg-white/[0.08] hover:border-dark-border-hover transition-all duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-xl text-text-muted hover:text-text-primary hover:bg-white/[0.04]
                       border border-transparent hover:border-dark-border transition-all duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-xl text-text-muted hover:text-text-primary hover:bg-white/[0.04]
                       border border-transparent hover:border-dark-border transition-all duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio website"
            className="p-2.5 rounded-xl text-text-muted hover:text-text-primary hover:bg-white/[0.04]
                       border border-transparent hover:border-dark-border transition-all duration-200"
          >
            <Globe size={20} />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown size={20} className="text-text-muted" />
          </a>
        </div>
      </div>
    </section>
  );
}
