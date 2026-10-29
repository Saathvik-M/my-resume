import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react';
import { resumeData } from '../data/resume';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const { contact } = resumeData;

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location,
      href: undefined,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: contact.github,
      handle: '@saathvik999',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: contact.linkedin,
      handle: 'Saathvik Varma',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: contact.portfolio,
      handle: 'saathvik999.github.io',
    },
  ];

  return (
    <section id="contact" className="section-padding border-t border-dark-border">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="glow-line" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Contact
            </span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or
            interesting projects.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact details */}
            <div className="space-y-4">
              <h3 className="text-text-primary font-semibold text-sm mb-4">
                Contact Information
              </h3>
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-muted text-accent shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary text-sm hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-text-primary font-semibold text-sm mb-4">
                Find Me Online
              </h3>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 group !p-4"
                >
                  <div className="p-2 rounded-lg bg-accent-muted text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200 shrink-0">
                    <link.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text-primary text-sm font-medium">
                      {link.label}
                    </p>
                    <p className="text-text-muted text-xs truncate">
                      {link.handle}
                    </p>
                  </div>
                  <Send
                    size={14}
                    className="text-text-muted group-hover:text-accent transition-colors shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Email CTA */}
          <div className="mt-10 text-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm
                         bg-accent text-white shadow-lg shadow-accent/20
                         hover:bg-accent-hover hover:shadow-accent/30 transition-all duration-200"
            >
              <Mail size={16} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
