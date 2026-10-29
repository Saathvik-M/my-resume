import { Github, Linkedin, Globe, Heart } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Footer() {
  const { contact } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-text-muted text-sm">
            <span>© {currentYear} {resumeData.name}.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart size={12} className="text-red-400 hidden sm:inline" />
            <span className="hidden sm:inline">and React.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200"
            >
              <Github size={16} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
