import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const reviews = [
  {
    name: 'Gemma',
    source: 'Google',
    text: 'From booking to drop-off everything was seamless. Our guide knew every hidden corner of Angkor and the small group made it feel like traveling with friends.',
  },
  {
    name: 'Josh Webb',
    source: 'Google',
    text: 'The sunrise tour was the highlight of our trip to Cambodia. Prompt pickup, cold water, an incredible guide, and we beat the crowds at every temple.',
  },
  {
    name: 'Jakob S.',
    source: 'Google',
    text: 'Did the Koh Ker and Beng Mealea tour — climbing the jungle pyramid and scrambling over fallen ruins was unreal. Worth every dollar.',
  },
  {
    name: 'Matthew L.',
    source: 'Tripadvisor',
    text: 'Kompong Phluk was magical. Watching stilt houses pass by from the boat, our guide explained village life with real warmth and humor.',
  },
  {
    name: 'Jimonté J.',
    source: 'Tripadvisor',
    text: 'Booked two tours and both were flawless. Small groups, comfortable van, and the best English-speaking guide we met anywhere in Southeast Asia.',
  },
  {
    name: 'Sarah K.',
    source: 'Tripadvisor',
    text: 'The Kulen waterfall tour was the perfect break from temples. Swimming under the falls with a delicious Khmer lunch — unforgettable day.',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-brand-950 py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #62a384 0%, transparent 40%), radial-gradient(circle at 80% 70%, #cd9524 0%, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">What Our Travelers Say</h2>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-brand-100">
            <Stars /> Certified by travelers with 16,698 reviews
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl bg-white/[0.07] p-7 backdrop-blur transition-colors hover:bg-white/[0.12]">
                <Quote className="h-6 w-6 text-gold-400/70" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85">{r.text}</blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-brand-200">{r.source} review</p>
                  </div>
                  <Stars />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
