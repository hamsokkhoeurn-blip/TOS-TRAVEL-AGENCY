import { MapPin, Search, Star, ShieldCheck, Users } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <img
        src="https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Sunrise over Angkor Wat"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/40 to-brand-950/80" />

      <div className="relative mx-auto max-w-4xl px-4 py-32 text-center">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-300 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            TRIPADVISOR TRAVELERS' CHOICE AWARD
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Unforgettable Siem Reap Tours in Small Shared Groups
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Start your Cambodian adventure today with the safest and most reliable tour company
            in Siem Reap — max 10 guests per group, expert local guides.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#tours"
              className="w-full rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-brand-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-400 sm:w-auto"
            >
              Explore Our Tours
            </a>
            <a
              href="#booking"
              className="w-full rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Book Your Seat
            </a>
          </div>
        </Reveal>
        <Reveal delay={350}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              document.getElementById('stay')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="mx-auto mt-10 grid max-w-5xl gap-2 rounded-2xl bg-white p-2 text-left shadow-2xl sm:grid-cols-[1.25fr_1fr_1fr_0.85fr_auto] sm:rounded-full sm:p-2.5"
          >
            <label className="flex items-center gap-3 rounded-xl px-4 py-2.5 sm:rounded-full sm:border-r sm:border-clay-100">
              <MapPin className="h-5 w-5 shrink-0 text-gold-600" />
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-clay-500">Destination</span>
                <input defaultValue="Siem Reap, Cambodia" className="w-full bg-transparent text-sm font-semibold text-brand-900 outline-none placeholder:text-clay-400" aria-label="Destination" />
              </span>
            </label>
            <label className="rounded-xl px-4 py-2.5 sm:rounded-full sm:border-r sm:border-clay-100">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-clay-500">Check in</span>
              <input type="date" className="mt-1 w-full bg-transparent text-sm font-semibold text-brand-900 outline-none" aria-label="Check in date" />
            </label>
            <label className="rounded-xl px-4 py-2.5 sm:rounded-full sm:border-r sm:border-clay-100">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-clay-500">Check out</span>
              <input type="date" className="mt-1 w-full bg-transparent text-sm font-semibold text-brand-900 outline-none" aria-label="Check out date" />
            </label>
            <label className="rounded-xl px-4 py-2.5 sm:rounded-full sm:border-r sm:border-clay-100">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-clay-500">Guests</span>
              <select defaultValue="2 guests" className="mt-1 w-full bg-transparent text-sm font-semibold text-brand-900 outline-none" aria-label="Guests">
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4+ guests</option>
              </select>
            </label>
            <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600 sm:rounded-full">
              <Search className="h-4 w-4" /> Search
            </button>
          </form>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> 16,698+ reviews
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-400" /> Licensed guides
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold-400" /> Max 10 per group
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
