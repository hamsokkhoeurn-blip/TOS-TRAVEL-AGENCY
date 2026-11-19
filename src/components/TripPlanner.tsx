import { useMemo, useState } from 'react';
import { ArrowRight, BedDouble, Bike, Bus, CalendarDays, Car, Check, MapPin, Sparkles, Users, Wallet } from 'lucide-react';
import type { Hotel, Tour } from '../lib/types';
import { roomTypeName } from '../lib/types';
import { Reveal } from './Reveal';
import { apiFetch } from '../lib/api';

type PlanTemplate = {
  id: string;
  title: string;
  description: string;
  days: number;
  interests: string;
  icon: string;
};

const planTemplates: PlanTemplate[] = [
  { id: 'angkor', title: 'Angkor temples & sunrise', description: 'Plan temple days around Angkor Wat, Angkor Thom, Bayon, and Ta Prohm.', days: 3, interests: 'Angkor temples sunrise', icon: '🏛️' },
  { id: 'culture', title: 'Khmer culture & local life', description: 'Explore local food, villages, crafts, and cultural experiences.', days: 3, interests: 'local culture food village handicraft', icon: '🌺' },
  { id: 'nature', title: 'Nature & countryside', description: 'Find a slower mix of cycling, countryside, water, and village activities.', days: 3, interests: 'nature countryside cycling water village', icon: '🌿' },
  { id: 'family', title: 'Easy family visit', description: 'A flexible, balanced itinerary with comfortable stays and private transport options.', days: 4, interests: 'temples culture family mixed', icon: '👨‍👩‍👧' },
  { id: 'complete', title: 'A bit of everything', description: 'Combine temples, culture, nature, places to stay, and transport choices.', days: 5, interests: 'temples culture nature mixed', icon: '✨' },
];

const transportOptions = [
  { name: 'Tuk-Tuk', detail: 'City rides from $5–7; Angkor circuits from $18 per tuk-tuk; airport transfer from $20 each way.', icon: Car },
  { name: 'Private car', detail: 'Airport pickup or drop-off from $35 per car; Angkor temple transport from $50 per vehicle.', icon: Car },
  { name: 'Bus & minivan', detail: 'Choose intercity route, date, departure, and vehicle. TOS confirms supplier seats and final fare.', icon: Bus },
  { name: 'Bicycle rental', detail: 'City, mountain, road, tandem, and child-seat bikes; listed rates start from $3 per day.', icon: Bike },
  { name: 'Motorcycle & scooter', detail: 'Automatic and semi-automatic models are listed, with rates from $10 per day.', icon: Bike },
];

function rankTours(tours: Tour[], interests: string): Tour[] {
  const terms = interests.toLowerCase().split(/\s+/).filter(Boolean);
  return tours.filter((tour) => tour.category !== 'transfer').map((tour) => {
    const text = `${tour.name} ${tour.tagline} ${tour.description} ${tour.category} ${(tour.highlights ?? []).join(' ')}`.toLowerCase();
    const matches = terms.reduce((score, term) => score + (text.includes(term) ? 2 : 0), 0);
    return { tour, score: matches + (tour.featured ? 1 : 0) };
  }).sort((a, b) => b.score - a.score || a.tour.price - b.tour.price).map(({ tour }) => tour);
}

export default function TripPlanner({ tours, hotels }: { tours: Tour[]; hotels: Hotel[] }) {
  const [selectedTemplate, setSelectedTemplate] = useState<PlanTemplate | null>(null);
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [arrivalDate, setArrivalDate] = useState('');
  const [budget, setBudget] = useState('');
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Hi! I can help plan your Siem Reap trip using TOS tours, stays, and transportation. Choose a template or ask me a question.' },
  ]);
  const suggestions = useMemo(() => selectedTemplate ? rankTours(tours, selectedTemplate.interests) : [], [tours, selectedTemplate]);
  const itinerary = suggestions.slice(0, days);
  const budgetTotal = Number(budget);
  const suggestedHotels = useMemo(() => [...hotels]
    .sort((a, b) => {
      if (budgetTotal > 0) {
        const aFits = Number(a.price_from) * days <= budgetTotal;
        const bFits = Number(b.price_from) * days <= budgetTotal;
        if (aFits !== bFits) return aFits ? -1 : 1;
      }
      return Number(a.price_from) - Number(b.price_from);
    }).slice(0, 3), [hotels, budgetTotal, days]);

  async function sendMessage(text: string, daysForRequest = days) {
    const content = text.trim();
    if (!content || sending) return;
    setDraft('');
    setSending(true);
    const history = [...messages, { role: 'user' as const, content }].slice(-12);
    setMessages(history);
    try {
      const response = await apiFetch('/trip-planner/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ messages: history, preferences: {
          days: daysForRequest, guests: travelers, arrival_date: arrivalDate || null,
          stay_budget: budget ? Number(budget) : null,
        } }),
      });
      const result = await response.json();
      if (!response.ok || !result.success || typeof result.reply !== 'string') {
        throw new Error(response.status === 503
          ? 'AI chat is not configured yet. Templates and website recommendations are available; connect an API key to enable AI replies.'
          : 'The trip assistant could not reply just now. Please try again.');
      }
      setMessages((current) => [...current, { role: 'assistant', content: result.reply }]);
    } catch (error) {
      setMessages((current) => [...current, { role: 'assistant', content: error instanceof Error ? error.message : 'The trip assistant could not reply just now.' }]);
    } finally {
      setSending(false);
    }
  }

  function chooseTemplate(template: PlanTemplate) {
    setSelectedTemplate(template);
    setDays(template.days);
  }

  return (
    <section id="planner" className="relative overflow-hidden bg-brand-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, #62a384 0%, transparent 45%), radial-gradient(circle at 85% 80%, #cd9524 0%, transparent 45%)' }} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-xs font-bold tracking-widest text-gold-300"><Sparkles className="h-3.5 w-3.5" /> TRIP PLANNER</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">Build your Siem Reap travel plan</h2>
          <p className="mt-4 leading-relaxed text-brand-100">Choose a ready-made template and adjust the trip details. Plans use tours, hotels, and transportation already listed on this website.</p>
        </Reveal>

        <Reveal delay={100} className="mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-brand-900 px-5 py-4 text-white sm:px-7">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500 text-brand-950"><MapPin className="h-5 w-5" /></span>
            <div><p className="font-semibold">TOS Travel Plan Builder</p><p className="text-xs text-brand-200">Temple tours · places to stay · transport</p></div>
            <span className="ml-auto flex items-center gap-2 text-xs text-brand-200"><i className={`h-2 w-2 rounded-full ${sending ? 'animate-pulse bg-gold-300' : 'bg-emerald-400'}`} />{sending ? 'Planning…' : 'Templates are free · AI chat on request'}</span>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="border-b border-clay-100 bg-clay-50 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <h3 className="font-display text-lg font-bold text-brand-950">1. Pick a trip template</h3>
              <div className="mt-4 grid gap-2">
                {planTemplates.map((template) => {
                  const selected = selectedTemplate?.id === template.id;
                  return <button key={template.id} disabled={sending} onClick={() => chooseTemplate(template)} className={`flex items-start gap-3 rounded-xl border p-3 text-left transition hover:shadow-sm disabled:opacity-50 ${selected ? 'border-brand-600 bg-brand-50' : 'border-clay-200 bg-white hover:border-gold-400'}`}>
                    <span className="text-xl" aria-hidden="true">{template.icon}</span><span className="flex-1"><span className="block text-sm font-semibold text-brand-900">{template.title}</span><span className="mt-1 block text-xs leading-relaxed text-clay-600">{template.description}</span></span>{selected ? <Check className="h-4 w-4 shrink-0 text-brand-700" /> : <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold-600" />}
                  </button>;
                })}
              </div>

              <h3 className="mt-7 font-display text-lg font-bold text-brand-950">2. Set your trip details</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <label className="text-xs font-semibold text-clay-700"><span className="mb-1.5 flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> Arrival date</span><input type="date" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} className="w-full rounded-lg border border-clay-200 bg-white px-2 py-2 text-xs text-brand-900" /></label>
                <label className="text-xs font-semibold text-clay-700"><span className="mb-1.5 flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> Days</span><select value={days} onChange={(event) => setDays(Number(event.target.value))} className="w-full rounded-lg border border-clay-200 bg-white px-2 py-2 text-xs text-brand-900">{[1, 2, 3, 4, 5, 6, 7].map((number) => <option key={number} value={number}>{number} {number === 1 ? 'day' : 'days'}</option>)}</select></label>
                <label className="text-xs font-semibold text-clay-700"><span className="mb-1.5 flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Guests</span><select value={travelers} onChange={(event) => setTravelers(Number(event.target.value))} className="w-full rounded-lg border border-clay-200 bg-white px-2 py-2 text-xs text-brand-900">{Array.from({ length: 10 }, (_, index) => index + 1).map((number) => <option key={number} value={number}>{number} {number === 1 ? 'guest' : 'guests'}</option>)}</select></label>
                <label className="text-xs font-semibold text-clay-700"><span className="mb-1.5 flex items-center gap-1"><Wallet className="h-3.5 w-3.5" /> Stay budget</span><input type="number" min="0" value={budget} onChange={(event) => setBudget(event.target.value)} placeholder="USD total" className="w-full rounded-lg border border-clay-200 bg-white px-2 py-2 text-xs text-brand-900" /></label>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-clay-500">Suggestions are estimates from the listed starting prices. Dates, room rates, transport fares, and availability need confirmation when booking.</p>
            </aside>

            <div className="p-5 sm:p-7">
              {!selectedTemplate ? <div className="flex min-h-64 flex-col items-center justify-center text-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-gold-100 text-gold-800"><MapPin className="h-7 w-7" /></span><h3 className="mt-4 font-display text-xl font-bold text-brand-950">Your trip plan starts here</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-clay-600">Select a template to see suggested tours, accommodation options, and transport available from TOS.</p></div> : <>
                <div className="flex flex-wrap items-center justify-between gap-2"><div><p className="text-xs font-bold uppercase tracking-wider text-gold-700">Your selected template</p><h3 className="mt-1 font-display text-xl font-bold text-brand-950">{selectedTemplate.title}</h3></div><div className="flex items-center gap-3"><span className="text-xs text-clay-500">{arrivalDate || 'Choose dates when booking'} · {travelers} {travelers === 1 ? 'guest' : 'guests'}</span><button type="button" onClick={() => setSelectedTemplate(null)} className="text-xs font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900">Back to templates</button></div></div>

                <section className="mt-6"><h4 className="font-semibold text-brand-900">3. Suggested tours</h4><div className="mt-3 space-y-3">{itinerary.map((tour, index) => <article key={`${index}-${tour.slug}`} className="flex gap-3 rounded-xl bg-clay-50 p-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-100 text-xs font-bold text-gold-800">{index + 1}</span><img src={tour.image_url} alt="" className="h-14 w-16 shrink-0 rounded-lg object-cover" loading="lazy" /><div className="min-w-0 flex-1"><p className="text-xs font-bold text-brand-900">Day {index + 1} · {tour.name}</p><p className="mt-1 line-clamp-2 text-xs text-clay-600">{tour.tagline || tour.description}</p><p className="mt-1 text-[10px] capitalize text-clay-500">{tour.duration} · {tour.category}</p></div><span className="shrink-0 text-xs font-bold text-brand-800">${tour.price}{tour.price_basis === 'person' ? '/person' : '/group'}</span></article>)}</div><a href="#tours" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">Browse all tours <ArrowRight className="h-3 w-3" /></a></section>

                <section className="mt-7"><h4 className="flex items-center gap-2 font-semibold text-brand-900"><BedDouble className="h-4 w-4" /> 4. Places to stay</h4><div className="mt-3 grid gap-2 sm:grid-cols-3">{suggestedHotels.map((hotel) => <a href="#stay" key={hotel.slug} className="rounded-xl border border-clay-100 p-3 transition hover:border-gold-400"><span className="block truncate text-xs font-bold text-brand-900">{hotel.name}</span><span className="mt-1 block text-[11px] capitalize text-clay-600">{hotel.price_level} · from ${hotel.price_from}/night</span><span className="mt-1 block truncate text-[10px] text-clay-500">{roomTypeName(hotel.room_types[0] ?? 'Room')} · {hotel.area}</span></a>)}</div>{budgetTotal > 0 && <p className="mt-2 text-[11px] text-clay-500">Sorted to show stays that best fit your total stay budget first. Rates vary by date.</p>}</section>

                <section className="mt-7"><h4 className="font-semibold text-brand-900">5. Choose transportation</h4><div className="mt-3 grid gap-2 sm:grid-cols-2">{transportOptions.map(({ name, detail, icon: Icon }) => <a href="#transportation" key={name} className="flex gap-2 rounded-xl bg-clay-50 p-3 transition hover:bg-brand-50"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" /><span><span className="block text-xs font-bold text-brand-900">{name}</span><span className="mt-1 block text-[11px] leading-relaxed text-clay-600">{detail}</span></span></a>)}</div></section>

                <div className="mt-6 flex flex-wrap gap-2"><a href="#tours" className="inline-flex items-center gap-1 rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white">Book a tour <ArrowRight className="h-3 w-3" /></a><a href="#stay" className="inline-flex items-center gap-1 rounded-full border border-clay-200 px-4 py-2 text-xs font-semibold text-brand-800">Browse stays <ArrowRight className="h-3 w-3" /></a><a href="#transportation" className="inline-flex items-center gap-1 rounded-full border border-clay-200 px-4 py-2 text-xs font-semibold text-brand-800">Arrange transport <ArrowRight className="h-3 w-3" /></a></div>
              </>}

              <div className="mt-7 rounded-2xl border border-clay-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold-600" /><h4 className="font-semibold text-brand-900">Chat with the trip assistant</h4></div>
                <div className="mt-4 max-h-64 space-y-3 overflow-y-auto" aria-live="polite">
                  {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><p className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-3 py-2.5 text-xs leading-relaxed ${message.role === 'user' ? 'rounded-br-sm bg-brand-700 text-white' : 'rounded-bl-sm bg-clay-50 text-clay-800'}`}>{message.content}</p></div>)}
                  {sending && <p className="text-xs text-clay-500">Putting your trip ideas together…</p>}
                </div>
                <form onSubmit={(event) => { event.preventDefault(); void sendMessage(draft); }} className="mt-4 flex items-center gap-2 rounded-xl border border-clay-200 p-2 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
                  <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about tours, stays, or getting around…" aria-label="Message the trip assistant" className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-brand-950 outline-none placeholder:text-clay-400" />
                  <button type="submit" disabled={!draft.trim() || sending} className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-semibold text-brand-950 disabled:opacity-40">Send</button>
                </form>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
