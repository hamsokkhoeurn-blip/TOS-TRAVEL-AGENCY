import { MapPin, BadgeDollarSign, Route, Headphones, UserCheck, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    icon: Route,
    title: 'Best Siem Reap Itineraries',
    text: 'We connect you and like-minded tourists with the local top guides.',
  },
  {
    icon: MapPin,
    title: 'Beautiful Destinations',
    text: 'The result is a great experience full of fun and memories.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Price',
    text: 'Siem Reap tours for Angkor Wat and other popular destinations in the area.',
  },
  {
    icon: Sparkles,
    title: 'Curated Small Groups',
    text: 'Signature tours in Siem Reap: small groups and curated itineraries are the keys.',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    text: 'Get ready for fun, excitement and satisfaction. We take care of your stress!',
  },
  {
    icon: UserCheck,
    title: 'Best Travel Guides',
    text: 'Our Siem Reap tour experts are ready to take you on an exciting adventure trip.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-950 sm:text-4xl">
            We Are Your Professional Vacation Planners
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-clay-100 bg-clay-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-brand-50 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white shadow-md transition-transform group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-clay-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
