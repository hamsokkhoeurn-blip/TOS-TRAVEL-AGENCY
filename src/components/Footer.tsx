import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-react';

const navigationLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Tours', href: '#tours' },
  { label: 'Transportation', href: '#transportation' },
  { label: 'Where to Stay', href: '#stay' },
];

const quickLinks = [
  { label: 'Book Now', href: '#booking' },
  { label: 'AI Trip Planner', href: '#planner' },
  { label: 'Traveler Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/18kgwHphWu/', className: 'bg-[#0866ff]' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@tostravelagency?_r=1&_t=ZS-9BTEH7Zvf6X', className: 'bg-black' },
  { label: 'Instagram', href: 'https://www.instagram.com/tostravelagency_99?exln=MWsydHp2b2ZqamliNw==', className: 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' },
];

function SocialIcon({ name }: { name: string }) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (name === 'TikTok') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.87.14V9.39a6.4 6.4 0 0 0-.87-.06 6.35 6.35 0 0 0-6.35 6.34A6.35 6.35 0 0 0 9.57 22a6.35 6.35 0 0 0 6.35-6.35V8.7a8.2 8.2 0 0 0 4.8 1.55V6.8c-.39 0-.77-.04-1.13-.11Z" />
      </svg>
    );
  }

  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        <defs>
          <linearGradient id="instagramGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffdc80" />
            <stop offset="35%" stopColor="#fcaf45" />
            <stop offset="60%" stopColor="#f77737" />
            <stop offset="78%" stopColor="#e1306c" />
            <stop offset="100%" stopColor="#833ab4" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagramGradient)" />
        <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="16.5" cy="7.7" r="1" fill="white" />
      </svg>
    );
  }

  return null;
}

function PaymentLogo({ name }: { name: string }) {
  return (
    <span className="flex h-6 shrink-0 items-center justify-center rounded-sm bg-white px-0.5" aria-label={name}>
      {name === 'ABA Pay' && (
          <svg viewBox="0 0 92 30" role="img" aria-label="ABA Pay" className="h-5 w-10">
          <path fill="#00529b" d="M4 4h22v22H4z" />
          <path fill="#fff" d="m8 20 7-13 7 13h-4l-3-6-3 6H8Z" />
          <text x="30" y="15" fill="#00529b" fontSize="13" fontWeight="700" fontFamily="Arial">ABA</text>
          <text x="30" y="26" fill="#333" fontSize="9" fontWeight="600" fontFamily="Arial">PAY</text>
        </svg>
      )}
      {name === 'Visa' && (
          <svg viewBox="0 0 72 28" role="img" aria-label="Visa" className="h-5 w-8">
          <text x="3" y="22" fill="#1434cb" fontSize="25" fontWeight="900" fontStyle="italic" fontFamily="Arial">VISA</text>
        </svg>
      )}
      {name === 'Mastercard' && (
          <svg viewBox="0 0 80 32" role="img" aria-label="Mastercard" className="h-5 w-10">
          <circle cx="28" cy="13" r="10" fill="#eb001b" />
          <circle cx="40" cy="13" r="10" fill="#f79e1b" fillOpacity=".95" />
          <text x="12" y="30" fill="#111" fontSize="7" fontWeight="700" fontFamily="Arial">mastercard</text>
        </svg>
      )}
      {name === 'UnionPay' && (
          <svg viewBox="0 0 84 32" role="img" aria-label="UnionPay" className="h-5 w-11">
          <path fill="#e21836" d="M3 3h25v18H3z" />
          <path fill="#00447c" d="M23 3h24v18H23z" />
          <path fill="#007b84" d="M42 3h20v18H42z" />
          <text x="5" y="16" fill="white" fontSize="7" fontWeight="700" fontFamily="Arial">银联</text>
          <text x="3" y="30" fill="#222" fontSize="8" fontWeight="700" fontFamily="Arial">UnionPay</text>
        </svg>
      )}
      {name === 'JCB' && (
          <svg viewBox="0 0 56 30" role="img" aria-label="JCB" className="h-5 w-7">
          <path fill="#0b4ea2" d="M2 3h17v21H2z" />
          <path fill="#d71920" d="M19 3h17v21H19z" />
          <path fill="#007940" d="M36 3h17v21H36z" />
          <text x="5" y="19" fill="white" fontSize="14" fontWeight="900" fontStyle="italic" fontFamily="Arial">J</text>
          <text x="21" y="19" fill="white" fontSize="14" fontWeight="900" fontStyle="italic" fontFamily="Arial">C</text>
          <text x="39" y="19" fill="white" fontSize="14" fontWeight="900" fontStyle="italic" fontFamily="Arial">B</text>
        </svg>
      )}
    </span>
  );
}

const paymentMethods = ['ABA Pay', 'Visa', 'Mastercard', 'UnionPay', 'JCB'];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white" style={{ backgroundColor: '#000000' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.9fr_0.9fr] lg:gap-12 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1">
                <img
                  src="/TOS_Travel_Agency_Logo.png?v=3"
                  alt="TOS Travel Agency"
                  className="aspect-square h-full w-full rounded-full object-contain"
                />
              </span>
              <span className="flex flex-col items-start font-display leading-tight text-white">
                <span className="text-sm font-bold tracking-wide sm:text-base">TOS</span>
                <span className="text-[10px] font-semibold tracking-[0.12em] sm:text-xs">
                  TRAVEL AGENCY
                </span>
              </span>
            </div>
            <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-white/90">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>Krong Siem Reap, Cambodia</span>
            </p>
            <div className="mt-5 overflow-hidden rounded-sm">
              <iframe
                title="Map of Krong Siem Reap, Cambodia"
                src="https://maps.google.com/maps?q=Krong%20Siem%20Reap%2C%20Cambodia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-44 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/knUvz7R7JEakgb3f9"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-xs font-semibold text-gold-400 hover:text-gold-300"
            >
              Open in Google Maps
            </a>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold leading-tight text-white">
              About TOS Travel Agency
            </h2>
            <p className="mt-5 max-w-xs text-sm italic leading-7 text-white/90">
              For a memorable trip to Siem Reap, we are your best choice. We offer the best Siem
              Reap tours for a unique experience.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-lg font-bold text-white">Navigation</h2>
            <ul className="mt-5 space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-gold-400"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-gold-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer quick links">
            <h2 className="font-display text-lg font-bold text-white">Quick Links</h2>
            <ul className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-gold-400"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-gold-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-9 border-t border-white/15 py-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_1.2fr_1.2fr_1fr] lg:gap-8">
          <div>
            <h2 className="font-display text-lg font-bold text-white">Book Your Holiday</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href="tel:+85598555518" className="flex items-center gap-3 text-white/90 hover:text-gold-400">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 text-black">
                    <Phone className="h-4 w-4" />
                  </span>
                  +855 (0)98 55 55 18
                </a>
              </li>
              <li>
                <a href="https://wa.me/85587762902" className="flex items-center gap-3 text-white/90 hover:text-gold-400">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 text-black">
                    <Phone className="h-4 w-4" />
                  </span>
                  +855 (0)87 762 902
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Email Us</h2>
            <a
              href="mailto:hamsokhoeurn3@gmail.com"
              className="mt-5 flex items-center gap-3 text-sm text-white/90 hover:text-gold-400"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 text-black">
                <Mail className="h-4 w-4" />
              </span>
              <span className="break-all">hamsokhoeurn3@gmail.com</span>
            </a>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Follow Us</h2>
            <div className="mt-5 flex flex-nowrap gap-2">
              {socialLinks.map(({ label, href, className }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center text-white transition-transform hover:scale-105 ${label === 'Instagram' ? 'rounded-lg' : 'rounded-full'} ${className}`}
                >
                  <SocialIcon name={label} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Payment</h2>
            <div className="mt-5 flex flex-nowrap items-center gap-1 overflow-x-auto">
              {paymentMethods.map((method) => <PaymentLogo key={method} name={method} />)}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TOS Travel Agency. All rights reserved.</p>
          <a href="#booking" className="font-semibold text-gold-400 transition-colors hover:text-gold-300">
            Book with us
          </a>
        </div>
      </div>
    </footer>
  );
}
