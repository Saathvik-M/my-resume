import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16" aria-label="Main navigation">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
          onClick={handleNavClick}
        >
          S<span className="text-accent">.</span>Varma
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.03]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="resume.pdf"
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       bg-accent/10 text-accent border border-accent/20
                       hover:bg-accent/20 hover:border-accent/40 transition-all duration-200"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-dark-bg/95 backdrop-blur-xl transition-all duration-300 ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center pt-8 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="w-full max-w-xs text-center px-4 py-3 text-base text-text-secondary hover:text-text-primary
                         hover:bg-white/[0.03] rounded-xl transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="resume.pdf"
            onClick={handleNavClick}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg
                       bg-accent/10 text-accent border border-accent/20
                       hover:bg-accent/20 transition-all duration-200"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
