import { ArrowRight, CheckCircle2, Compass, HeartHandshake, MapPinned } from 'lucide-react';
import { Reveal } from './Reveal';

const highlights = [
  'Local experts who know the temples beyond the guidebook',
  'Small groups with flexible, human service',
  'One trusted team for tours, stays, and transport',
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-clay-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-lg">
            <img
              src="https://images.pexels.com/photos/19142402/pexels-photo-19142402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Ancient Ta Prohm temple surrounded by trees in Cambodia"
              className="h-[460px] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-3 rounded-2xl bg-gold-500 px-5 py-4 text-brand-950 shadow-lg sm:-right-6">
              <p className="font-display text-3xl font-bold">10+</p>
              <p className="text-xs font-semibold uppercase tracking-wide">Years in Siem Reap</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">About Us</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-brand-950 sm:text-4xl">
            Your local team for a more meaningful Cambodia
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-clay-700">
            System Tos Travel Agency was created to make exploring Siem Reap feel personal, simple, and full of discovery. We connect curious travelers with trusted local guides, comfortable stays, and the right way to move around.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-clay-600">
            From your first sunrise at Angkor Wat to a quiet countryside road, we take care of the details so you can stay present for the journey.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm font-medium text-brand-900">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-clay-600">
            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm"><Compass className="h-4 w-4 text-gold-600" /> Curated journeys</span>
            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm"><HeartHandshake className="h-4 w-4 text-gold-600" /> Personal service</span>
            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm"><MapPinned className="h-4 w-4 text-gold-600" /> Local knowledge</span>
          </div>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-600">
            Meet our team <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
