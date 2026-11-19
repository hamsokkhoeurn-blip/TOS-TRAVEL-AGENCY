import { useMemo, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Bus, CheckCircle2, Clock3, LoaderCircle } from 'lucide-react';
import { apiFetch } from '../lib/api';

const routes = [
  'Siem Reap → Phnom Penh', 'Siem Reap → Battambang', 'Siem Reap → Poi Pet',
  'Siem Reap → Sihanoukville', 'Phnom Penh → Battambang', 'Phnom Penh → Sihanoukville',
  'Phnom Penh → Poi Pet', 'Battambang → Poi Pet',
];
const fares: Record<string, number> = {
  'Siem Reap → Phnom Penh': 13.85, 'Siem Reap → Battambang': 8.47,
  'Siem Reap → Poi Pet': 8.47, 'Siem Reap → Sihanoukville': 29.43,
  'Phnom Penh → Battambang': 10.39, 'Phnom Penh → Sihanoukville': 14.84,
  'Phnom Penh → Poi Pet': 16.08, 'Battambang → Poi Pet': 8.91,
};
const vehicles = [
  { name: 'Express Minivan', kind: 'Minivan', detail: 'Compact shared transfer · Air conditioning', operator: 'TOS arranged', image: '/images/transport-minivan.jpg', photoCredit: 'Dave Garcia / Pexels', seatCount: 12, columns: 2 },
  { name: 'VIP Minivan', kind: 'Minivan', detail: 'Premium shared transfer · Air conditioning', operator: 'TOS arranged', image: '/images/transport-minivan.jpg', photoCredit: 'Dave Garcia / Pexels', seatCount: 12, columns: 2 },
  { name: 'VIP Seater Bus', kind: 'Bus', detail: 'Reclining seats · Air conditioning', operator: 'TOS arranged', image: '/images/transport-bus.jpg', photoCredit: 'Safi Erneste / Pexels', seatCount: 20, columns: 4 },
  { name: 'Sleeper Bus', kind: 'Bus', detail: 'Sleeper berth · Overnight routes only', operator: 'TOS arranged', image: '/images/transport-bus.jpg', photoCredit: 'Safi Erneste / Pexels', seatCount: 20, columns: 4 },
];
const times = ['08:00 AM', '10:00 AM', '02:00 PM'];
type Stage = 'search' | 'departures' | 'passengers' | 'sent';

export default function IntercityBusBooking() {
  const [route, setRoute] = useState(routes[0]);
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [stage, setStage] = useState<Stage>('search');
  const [time, setTime] = useState('');
  const [vehicle, setVehicle] = useState<(typeof vehicles)[number] | null>(null);
  const [contact, setContact] = useState({ full_name: '', email: '', phone: '', passenger_names: '', special_requests: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const fare = fares[route];
  const total = useMemo(() => fare ? fare * passengers : null, [fare, passengers]);
  const minDate = new Date().toISOString().slice(0, 10);

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!vehicle) return;
    setBusy(true);
    setError('');
    const [origin, destination] = route.split(' → ');
    const message = [
      'Intercity bus/van booking request. Status: Pending supplier confirmation.',
      `Route: ${route}`, `Departure: ${time}`, `Vehicle: ${vehicle.name}`,
      `Passengers: ${passengers}`, `Passenger names: ${contact.passenger_names || 'Not provided'}`,
      `Special requests: ${contact.special_requests || 'None'}`,
      `Return trip: No`, `Indicative reference fare: ${fare ? `$${fare.toFixed(2)} per person; estimate $${total?.toFixed(2)}` : 'Quote required'}`,
      'Sample time and reference fare are illustrative; no live schedule or seat inventory is connected. Final fare and availability require TOS/supplier confirmation.',
    ].join('\n');
    try {
      const response = await apiFetch('/service-requests', {
        method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: 'transportation', service_name: `${vehicle.name} intercity booking`, service_date: date,
          guests: passengers, full_name: contact.full_name.trim(), email: contact.email.trim(), phone: contact.phone.trim(),
          pickup_location: origin, message, total_price: total ?? 0,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        const firstError = result.errors ? Object.values(result.errors).flat().find((item) => typeof item === 'string') : null;
        throw new Error(typeof firstError === 'string' ? firstError : result.message || 'Could not send your request. Please try again.');
      }
      setReference(result.data?.id ?? '');
      setStage('sent');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to connect. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  const inputClass = 'mt-1 w-full rounded-xl border border-clay-200 bg-white px-4 py-3 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100';
  return (
    <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-clay-100 bg-white shadow-lg">
      <div className="bg-brand-950 px-6 py-7 text-white sm:px-9">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">TOS Travel · Intercity transport</p>
        <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Bus & minivan booking</h3>
        <div className="mt-6 grid grid-cols-3 gap-2 text-xs sm:text-sm">
          {['Route & date', 'Departure & vehicle', 'Passenger details'].map((label, index) => (
            <div key={label} className={`border-t-2 pt-2 ${index <= (stage === 'search' ? 0 : stage === 'departures' ? 1 : 2) ? 'border-gold-400 text-white' : 'border-white/25 text-white/55'}`}>
              <span className="font-semibold">0{index + 1}</span><span className="ml-2">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {stage === 'sent' ? (
        <div className="px-6 py-10 text-center sm:px-10">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h4 className="mt-4 font-display text-2xl font-bold text-brand-950">Request received · Pending</h4>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-clay-600">TOS has received your booking request. We’ll need to confirm the departure, seats, and final fare with the supplier before your ticket is confirmed.</p>
          {reference && <p className="mt-4 text-sm font-semibold text-brand-800">Request reference: {reference}</p>}
          <button type="button" onClick={() => { setStage('search'); setTime(''); setVehicle(null); }} className="mt-6 rounded-xl bg-gold-500 px-5 py-3 font-semibold text-brand-950">Start another search</button>
        </div>
      ) : stage === 'search' ? (
        <div className="p-6 sm:p-9">
          <form className="grid gap-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setStage('departures'); }}>
            <label className="text-sm font-semibold text-brand-900">Route<select className={inputClass} value={route} onChange={(event) => setRoute(event.target.value)}>{routes.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-brand-900">Travel date<input required type="date" min={minDate} className={inputClass} value={date} onChange={(event) => setDate(event.target.value)} /></label>
            <label className="text-sm font-semibold text-brand-900">Passengers<select className={inputClass} value={passengers} onChange={(event) => setPassengers(Number(event.target.value))}>{Array.from({ length: 12 }, (_, index) => index + 1).map((n) => <option key={n} value={n}>{n} passenger{n > 1 ? 's' : ''}</option>)}</select></label>
            <div className="flex items-end"><button type="submit" disabled={!date} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-brand-950 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50">Find departures <ArrowRight className="h-4 w-4" /></button></div>
          </form>
        </div>
      ) : stage === 'departures' ? (
        <div className="p-6 sm:p-9">
          <button type="button" onClick={() => { setStage('search'); setVehicle(null); setTime(''); }} className="mb-5 flex items-center gap-2 text-sm font-semibold text-brand-800"><ArrowLeft className="h-4 w-4" /> Change route or date</button>
          <p className="text-sm font-semibold text-brand-950">{route} <span className="font-normal text-clay-600">· {date} · {passengers} passenger{passengers > 1 ? 's' : ''}</span></p>
          <div className="mt-4 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950"><Clock3 className="mt-0.5 h-5 w-5 shrink-0" /><p><strong>Illustrative departures only:</strong> these sample times are not live schedules. TOS will confirm the actual time and availability with the supplier.</p></div>
          <h4 className="mt-7 font-display text-xl font-bold text-brand-950">Choose a departure time</h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">{times.map((item) => <button key={item} type="button" onClick={() => setTime(item)} className={`rounded-xl border px-4 py-3 font-semibold transition ${time === item ? 'border-gold-500 bg-gold-50 text-brand-950' : 'border-clay-200 text-brand-800 hover:border-brand-300'}`}>{item}</button>)}</div>
          <h4 className="mt-8 font-display text-xl font-bold text-brand-950">Choose bus or van</h4>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{vehicles.map((item) => {
            const selected = vehicle?.name === item.name;
            return (
              <article key={item.name} className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selected ? 'border-brand-400 ring-2 ring-brand-100' : 'border-clay-100 hover:border-brand-200'}`}>
                <div className="h-52 overflow-hidden bg-clay-100"><img src={item.image} alt={`${item.kind} photo`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">{item.kind} transfer</span>
                  <h5 className="mt-2 font-display text-xl font-bold text-brand-900">{item.name}</h5>
                  <p className="mt-2 text-sm leading-relaxed text-clay-600">{item.detail}. Arranged by TOS for your selected route.</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-clay-700"><span className="font-semibold">Options:</span> {route} · {time} · {passengers} passenger{passengers > 1 ? 's' : ''}</p>
                  <p className="mt-2 text-xs text-clay-500">Seat availability pending TOS confirmation · Photo: {item.photoCredit}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-clay-100 pt-4"><span className="text-sm font-semibold text-brand-800">Per passenger</span><span className="text-right text-sm font-semibold text-gold-600">{fare ? `From $${fare.toFixed(2)}` : 'Quote required'}</span></div>
                  <button type="button" disabled={!time} aria-pressed={selected} onClick={() => setVehicle(item)} className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${selected ? 'bg-brand-800 text-white hover:bg-brand-700' : 'bg-gold-500 text-brand-950 hover:bg-gold-400'}`}>{selected ? 'Selected vehicle' : 'Choose this vehicle'} <ArrowRight className="h-4 w-4" /></button>
                </div>
              </article>
            );
          })}</div>
          <p className="mt-4 text-xs leading-relaxed text-clay-500">Reference fares are indicative only and require TOS confirmation. No live seat inventory is available.</p>
          <button type="button" disabled={!vehicle} onClick={() => setStage('passengers')} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-brand-950 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50">Continue to passenger details <ArrowRight className="h-4 w-4" /></button>
        </div>
      ) : (
        <form onSubmit={submitBooking} className="grid gap-5 p-6 sm:grid-cols-2 sm:p-9">
          <div className="sm:col-span-2"><button type="button" onClick={() => setStage('departures')} className="flex items-center gap-2 text-sm font-semibold text-brand-800"><ArrowLeft className="h-4 w-4" /> Back to departures</button><h4 className="mt-4 font-display text-xl font-bold text-brand-950">Passenger contact details</h4></div>
          {([['full_name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['phone', 'Phone number', 'tel']] as const).map(([key, label, type]) => <label key={key} className="text-sm font-semibold text-brand-900">{label}<input required type={type} autoComplete={key === 'full_name' ? 'name' : key} className={inputClass} value={contact[key]} onChange={(event) => setContact({ ...contact, [key]: event.target.value })} /></label>)}
          <label className="text-sm font-semibold text-brand-900">Passenger names (optional)<textarea rows={2} className={inputClass} value={contact.passenger_names} onChange={(event) => setContact({ ...contact, passenger_names: event.target.value })} /></label>
          <label className="text-sm font-semibold text-brand-900 sm:col-span-2">Special requests (optional)<textarea rows={2} className={inputClass} value={contact.special_requests} onChange={(event) => setContact({ ...contact, special_requests: event.target.value })} /></label>
          <div className="rounded-2xl bg-clay-50 p-4 text-sm sm:col-span-2"><strong className="text-brand-950">Trip summary</strong><p className="mt-2 text-clay-700">{route} · {date} · {time} · {vehicle?.name} · {passengers} passenger{passengers > 1 ? 's' : ''}</p><p className="mt-1 font-semibold text-brand-900">{total ? `Reference total: $${total.toFixed(2)}` : 'Fare: TOS quote required'}</p><p className="mt-2 text-xs leading-relaxed text-clay-600">This sends a booking request only. The fare, schedule, and seats are subject to confirmation; your ticket is not confirmed yet.</p></div>
          {error && <p role="alert" className="text-sm text-red-700 sm:col-span-2">{error}</p>}
          <button type="submit" disabled={busy} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-brand-950 transition hover:bg-gold-400 disabled:opacity-60 sm:col-span-2">{busy ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Sending request…</> : 'Send booking request'}</button>
        </form>
      )}
    </div>
  );
}
