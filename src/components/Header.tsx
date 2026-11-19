import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useScrolled } from './Reveal';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Where to Stay', href: '#stay' },
  { label: 'Tours & Activities', href: '#tours' },
  { label: 'Transportation', href: '#transportation' },
  { label: 'Trip Planner', href: '#planner' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string, afterScroll?: () => void) {
  if (!href.startsWith('#')) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  afterScroll?.();
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('#top');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const onScroll = () => {
      const probe = window.innerHeight * 0.35;
      let current = '#top';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probe) {
          current = `#${section.id}`;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return active;
}

export default function Header() {
  const scrolled = useScrolled(40);
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      window.scrollTo(0, 0);
    }
  }, []);
  const active = useActiveSection(links.map((l) => l.href));
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`hidden md:flex items-center justify-end gap-6 px-8 text-xs transition-all duration-300 ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-9 opacity-100'
        } bg-brand-950 text-brand-100`}
      >
        <a href="https://wa.me/85587762902" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone className="h-3 w-3" /> +855 (0)87 762 902
        </a>
        <a href="mailto:hamsokhoeurn3@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Mail className="h-3 w-3" /> hamsokhoeurn3@gmail.com
        </a>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <a
            href="#top"
            onClick={(event) => scrollToSection(event, '#top')}
            className="flex items-center gap-3 py-1.5 pr-2"
          >
            <img
              src="/TOS_Travel_Agency_Logo.png?v=3"
              alt="TOS Travel Agency"
              className="aspect-square h-14 w-14 shrink-0 rounded-full object-contain mix-blend-multiply"
            />
            <span
              className={`flex flex-col items-start font-display leading-tight ${
                scrolled ? 'text-brand-950' : 'text-white'
              }`}
            >
              <span className="text-sm font-bold tracking-wide sm:text-base">TOS</span>
              <span className="text-[10px] font-semibold tracking-[0.12em] sm:text-xs">
                TRAVEL AGENCY
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(event) => scrollToSection(event, l.href)}
                  className={`relative py-1.5 text-sm font-medium transition-colors hover:text-gold-400 ${
                    isActive
                      ? 'font-semibold text-gold-500'
                      : scrolled
                        ? 'text-clay-800'
                        : 'text-white/90'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-all duration-300 ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#booking"
              onClick={(event) => scrollToSection(event, '#booking')}
              className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-brand-950 shadow-sm transition-all hover:bg-gold-400 hover:shadow-md"
            >
              Book Now
            </a>
          </nav>

          <button
            className={`lg:hidden rounded-full p-2 transition-colors ${scrolled ? 'text-clay-900' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="animate-fade-in border-t border-clay-100 bg-white px-4 py-4 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(event) => scrollToSection(event, l.href, () => setOpen(false))}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-brand-50 ${
                  active === l.href ? 'bg-brand-50 font-semibold text-brand-800' : 'text-clay-800'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(event) => scrollToSection(event, '#booking', () => setOpen(false))}
              className="mt-2 block rounded-full bg-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-brand-950"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
