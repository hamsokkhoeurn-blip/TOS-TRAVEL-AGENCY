import { useEffect, useState } from 'react';
import { Clock, Users, ArrowRight, Check, X as CloseIcon, MapPin, Car, CalendarDays } from 'lucide-react';
import type { Tour } from '../lib/types';
import { Reveal } from './Reveal';

type TourFilter = string;
type TourFilterCategory = {
  id: string;
  label: string;
  activities: string[];
  slugs: string[];
  subcategories?: string[];
  privateDescription: string | null;
  groupDescription: string | null;
};

const tourCategories: TourFilterCategory[] = [
  {
    id: 'cycling',
    label: 'Cycling & Group Rides',
    activities: ['Angkor Sunrise Cycling', 'Angkor Temple Cycling Tour', 'Siem Reap Countryside Cycling', 'E-Bike Countryside Adventure', 'Mountain Biking Adventure'],
    slugs: [],
    subcategories: ['All Cycling Tours', 'Private Cycling Tours', 'Group Cycling Tours', 'Sunrise Cycling', 'Countryside Cycling', 'Sunset Cycling', 'E-Bike Tours', 'Multi-Day Cycling Adventures'],
    privateDescription: 'Enjoy a personalized cycling experience with a private guide, flexible departure time, and a route tailored to your interests.',
    groupDescription: 'Join scheduled cycling trips with other travelers, following a shared route and departure time.',
  },
  {
    id: 'vehicle',
    label: 'Motorbike & Vehicle Adventures',
    activities: ['Guided Vespa Countryside Tour', 'Vintage Jeep Countryside Tour', 'ATV / Quad Biking Adventure', 'Guided Motorbike Adventure', 'Sunset Countryside Jeep Tour'],
    slugs: [],
    privateDescription: 'Explore Siem Reap by vehicle with a private guide, flexible schedule, and personalized route.',
    groupDescription: 'Join scheduled vehicle adventures with other travelers and enjoy the journey together.',
  },
  {
    id: 'private',
    label: 'Private Tours',
    activities: ['Private Angkor Wat Sunrise Tour', 'Private Temple Discovery Tour', 'Private Countryside Jeep Tour', 'Private Tonle Sap Sunset Cruise', 'Private Food & Cultural Tour', 'Private Custom Full-Day Experience'],
    slugs: [],
    privateDescription: 'Book a vehicle and tour for your own group. Private prices are for the vehicle or group, not per person; vehicle choices and capacities are shown when available.',
    groupDescription: null,
  },
  {
    id: 'group',
    label: 'Shared Tours',
    activities: ['Angkor Wat Sunrise Group Tour', 'Angkor Temple Group Tour', 'Group Cycling Adventure', 'Group Countryside Jeep Tour', 'Tonle Sap Sunset Group Cruise', 'Group Food & Cultural Tour'],
    slugs: [
      'angkor-sunrise-tour',
      'explore-angkor',
      'koh-ker-beng-mealea',
      'kompong-phluk-floating-villages',
      'banteay-srei-backcountry',
      'kulen-waterfall',
      'preah-vihear-koh-ker',
    ],
    privateDescription: null,
    groupDescription: 'Join a scheduled tour with other travelers and pay per person. Itineraries and departures are fixed; group sizes are usually capped at 10, though some tours may take up to 12. Confirm the exact capacity when you book.',
  },
];

function tourCategoryLabel(tour: Tour): string {
  const category = tourCategories.find((item) => item.id === tour.category || item.slugs.includes(tour.slug));
  if (category) {
    return category.label;
  }

  return tour.category === 'transfer' ? 'Transfers' : 'Tours & Activities';
}

const imageFallbacks: Record<string, string[]> = {
  'vespa-angkor-grand-circuit': [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ec/17/39/our-angkor-tour-siem.jpg?h=900&s=1&w=1200',
    'https://www.indochinatour.com/assets/images/Cambodia-/angkor-vespa-tour.jpg',
  ],
  'vespa-angkor-wat-sunrise': [
    'https://res.klook.com/images/fl_lossy.progressive%2Cq_65/c_fill%2Cw_1295%2Ch_863/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/hkmbar0tci1udbarlahi/SiemReapAngkorWatSonnenaufgangVespaTour.jpg',
    'https://www.pelago.com/img/products/KH-Cambodia/angkor-adventure-vespa-tour/fbd654d340f8424497612a183a04922a_angkor-adventure-vespa-tour-large.jpg',
  ],
  'vespa-angkor-small-circuit': [
    'https://www.pelago.com/img/products/KH-Cambodia/angkor-adventure-vespa-tour-inclusive-local-snacks-lunch/52caea9d-8f08-4ce1-a405-234f20aa8c03_angkor-adventure-vespa-tour-inclusive-local-snacks-lunch.jpg',
    'https://res.klook.com/image/upload/u_activities%3Atlb6em0dcjxkarfpeeh6%2Ch_1.0%2Car_960%3A460%2Cc_scale%2Ce_blur%3A10000/w_750%2Ch_469%2Cc_fill%2Cq_85/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/tlb6em0dcjxkarfpeeh6.jpg',
  ],
  'elephant-angkor-sunrise-bike': [
    'https://cdn.getyourguide.com/img/tour/644b63dcdc205.jpeg/148.jpg',
    'https://cdn.getyourguide.com/img/tour/644b63dcdc205.jpeg/145.jpg',
  ],
  'elephant-siem-reap-countryside-bike': [
    'https://excursionmania.com/cdn-cgi/image/quality%3D75%2Cformat%3Dwebp%2Cw%3Dauto%2Ch%3Dauto%2Cfit%3Dscale-down%2Ctrim%3Dborder/https%3A/excursionmania.com/supplier/uploads/excursions/excursions/ex-2425/kampong-phluk-floating-village17380572941.jpg',
    'https://www.pelago.com/img/products/KH-Cambodia/floating-village-bike-boat-inclusive-lunch-boat-ticket/b05812e5-e537-4d1f-8130-ea01602da83f_floating-village-bike-boat-inclusive-lunch-boat-ticket.jpg',
  ],
  'elephant-siem-reap-twilight-bike': [
    'https://cdn.getyourguide.com/img/tour/636caa4ae3fd8.jpeg/148.jpg',
    'https://cms.siemreaper.click/uploads/siem_reap_floating_village_bike_tour2_fb3507496a.jpg',
  ],
  'elephant-angkor-temples-bike': [
    'https://www.indochinatour.com/assets/images/Cambodia-/cycling-through-angkor-temples.jpg',
    'https://cdn.getyourguide.com/img/tour/644b63dcdc205.jpeg/145.jpg',
  ],
  'elephant-countryside-bike-boat': [
    'https://www.pelago.com/img/products/KH-Cambodia/floating-village-bike-boat-inclusive-lunch-boat-ticket/b05812e5-e537-4d1f-8130-ea01602da83f_floating-village-bike-boat-inclusive-lunch-boat-ticket.jpg',
    'https://cms.siemreaper.click/uploads/siem_reap_floating_village_bike_tour2_fb3507496a.jpg',
  ],
};

const finalImageFallbacks: Record<string, string> = {
  'elephant-angkor-sunrise-bike': 'https://cdn.getyourguide.com/img/tour/644b63dcdc205.jpeg/146.jpg',
  'elephant-siem-reap-countryside-bike': 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg',
  'elephant-siem-reap-twilight-bike': 'https://images.pexels.com/photos/163407/cyclists-trail-bike-clouds-163407.jpeg',
  'elephant-angkor-temples-bike': 'https://d2d3n9ufwugv3m.cloudfront.net/w1168-h656-cfill/trips/qvcvU-_DSC1115.jpg',
  'elephant-countryside-bike-boat': 'https://www.pelago.com/img/products/KH-Cambodia/floating-village-bike-boat-inclusive-lunch-boat-ticket/6c450e58-5f15-42dd-a4f7-94d5109d0c0b_floating-village-bike-boat-inclusive-lunch-boat-ticket.jpg',
};

function TourPhoto({ tour, className }: { tour: Tour; className: string }) {
  const [source, setSource] = useState(tour.image_url);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  useEffect(() => {
    setSource(tour.image_url);
    setFallbackIndex(0);
  }, [tour.image_url]);

  function useNextImage() {
    const fallbacks = imageFallbacks[tour.slug] ?? [];
    if (fallbackIndex < fallbacks.length) {
      setSource(fallbacks[fallbackIndex]);
      setFallbackIndex((current) => current + 1);
      return;
    }

    const sharedPhoto = finalImageFallbacks[tour.slug] ?? 'https://adventurescambodia.com/wp-content/uploads/2023/12/akim-vespa-adventures-cambodia-countryside.webp';
    if (source !== sharedPhoto) setSource(sharedPhoto);
  }

  return <img src={source} alt={tour.name} className={className} loading="lazy" onError={useNextImage} />;
}

function TourModal({ tour, onClose, onBook }: { tour: Tour; onClose: () => void; onBook: (tour: Tour) => void }) {
  const shared = tour.tour_type === 'group';
  const priceUnit = tour.vehicle_options?.length ? 'vehicle' : 'group';
  const priceLabel = tour.price_basis === 'group' ? `From $${tour.price} / ${priceUnit}` : `$${tour.price} / person`;
  const routeHighlights = tour.highlights.filter((highlight) =>
    !/pickup|drop-off|transport|guide|water|towel|not included|meal|pass|included/i.test(highlight)
  );
  const inclusions = [
    tour.hotel_pickup && !tour.included_items?.some((item) => /^transportation:/i.test(item))
      ? (tour.category === 'cycling' ? 'Hotel pickup to the tour starting point' : 'Hotel pickup and drop-off')
      : null,
    tour.tour_type === 'private' && !tour.included_items?.some((item) => /^transportation:/i.test(item))
      ? (tour.category === 'vehicle' ? 'Private Vespa tour for your party' : 'Private vehicle for your group')
      : shared && tour.category !== 'cycling' && !tour.included_items?.some((item) => /^transportation:/i.test(item)) ? 'Shared transport' : null,
    tour.tour_guide,
    ...(tour.included_drinks ?? []),
    ...(tour.included_meals ?? []),
    ...(tour.included_items ?? []),
  ].filter((item): item is string => Boolean(item));
  const exclusions = tour.excluded_items?.length
    ? tour.excluded_items
    : tour.highlights.filter((highlight) => /not included/i.test(highlight)).map((highlight) => highlight.replace(/\s*(?:are\s+)?not included\.?/i, '').trim());
  const itinerary = tour.itinerary ?? [];
  const tourDetails = [
    { label: 'Duration', value: tour.duration },
    { label: 'Maximum group', value: tour.group_size ? `${tour.group_size} guests` : tour.capacity_note ?? 'Confirm when booking' },
    { label: 'Distance', value: tour.distance_km ? `${tour.distance_km} km` : null },
    { label: 'Difficulty', value: tour.difficulty_level },
    { label: 'Pickup', value: tour.hotel_pickup ? 'Your hotel' : tour.meeting_point ?? 'Confirm when booking' },
    { label: 'Tour type', value: shared ? 'Shared tour' : 'Private tour' },
    { label: 'Starting time', value: tour.starting_time?.slice(0, 5) ?? null },
    { label: 'Guide', value: tour.tour_guide },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-white" role="dialog" aria-modal="true" aria-label={`${tour.name} details`}>
      <header className="sticky top-0 z-20 border-b border-clay-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <button onClick={onClose} className="rounded-full px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-clay-50">← Back to tours</button>
          <button onClick={onClose} className="rounded-full p-2 text-clay-500 hover:bg-clay-50" aria-label="Close tour details"><CloseIcon className="h-5 w-5" /></button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:pt-9">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <section>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-clay-100 shadow-sm lg:aspect-[1.22/1]">
              <TourPhoto tour={tour} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-brand-800">{tourCategoryLabel(tour)}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {tourDetails.slice(0, 4).map((detail) => (
                <div key={detail.label} className="rounded-xl border border-clay-100 bg-white px-3 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-clay-500">{detail.label}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-900">{detail.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap items-center gap-2 text-sm text-brand-700">
              <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold">{shared ? 'Shared tour' : 'Private tour'}</span>
              {tour.starting_time && <span className="rounded-full bg-clay-50 px-3 py-1">Starts {tour.starting_time.slice(0, 5)}</span>}
              {tour.hotel_pickup && <span className="inline-flex items-center gap-1 rounded-full bg-clay-50 px-3 py-1"><MapPin className="h-3.5 w-3.5" /> Hotel pickup</span>}
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-950 sm:text-4xl">{tour.name}</h1>
            <p className="mt-5 text-base leading-8 text-clay-700">{tour.description}</p>

            {routeHighlights.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {routeHighlights.slice(0, 4).map((highlight) => <span key={highlight} className="rounded-full border border-clay-200 px-3 py-1.5 text-xs font-medium text-clay-700">{highlight}</span>)}
              </div>
            )}

            <div className="mt-7 rounded-2xl border border-clay-200 p-5 sm:p-6">
              <p className="text-sm font-semibold text-clay-500">Price</p>
              <p className="mt-1 font-display text-3xl font-bold text-brand-900">{priceLabel}</p>
              {tour.capacity_note && <p className="mt-2 text-sm leading-relaxed text-clay-600">{tour.capacity_note}</p>}
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-clay-50 p-4 text-sm leading-relaxed text-clay-700">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                Choose your date and group size in the booking form. We’ll confirm availability and pickup details.
              </div>
              {tour.vehicle_options?.length ? (
                <div className="mt-4 space-y-2">
                  {tour.vehicle_options.map((vehicle) => <div key={vehicle.id} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-sm"><span className="inline-flex items-center gap-2 text-clay-700"><Car className="h-4 w-4 text-brand-700" />{vehicle.name} · up to {vehicle.capacity} guests</span><strong className="text-brand-900">${vehicle.price}</strong></div>)}
                </div>
              ) : null}
              <button onClick={() => { onClose(); onBook(tour); }} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 py-3.5 font-semibold text-white transition-all hover:bg-brand-600">
                Book this tour <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </div>

        <div className="mt-12 grid gap-8 border-t border-clay-100 pt-9 lg:grid-cols-[1.15fr_0.85fr]">
          <section>
            <h2 className="font-display text-2xl font-bold text-brand-950">Tour itinerary</h2>
            <div className="mt-5 space-y-0">
              {itinerary.map((step, index) => (
                <div key={`${step.title}-${index}`} className="flex gap-4 pb-5 last:pb-0">
                  <div className="flex flex-col items-center"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-100 text-xs font-bold text-gold-800">{index + 1}</span>{index < itinerary.length - 1 && <span className="mt-2 h-full w-px bg-clay-200" />}</div>
                  <div className="pb-2">{step.time && <p className="text-xs font-semibold uppercase tracking-wide text-clay-500">{step.time}</p>}<h3 className="mt-1 font-semibold text-brand-900">{step.title}</h3><p className="mt-1 text-sm leading-relaxed text-clay-600">{step.detail}</p></div>
                </div>
              ))}
              {itinerary.length === 0 && <p className="text-sm leading-relaxed text-clay-600">Detailed stops will be confirmed with the operator when booking.</p>}
            </div>
          </section>

          <aside className="space-y-5">
            <section className="rounded-2xl bg-clay-50 p-5 sm:p-6">
              <h2 className="font-display text-xl font-bold text-brand-950">Price includes</h2>
              {inclusions.length ? <ul className="mt-4 space-y-3">{inclusions.map((item) => <li key={item} className="flex gap-2 text-sm text-clay-700"><Check className="h-4 w-4 shrink-0 text-brand-600" />{item}</li>)}</ul> : <p className="mt-3 text-sm text-clay-600">Confirm included services when booking.</p>}
            </section>
            {exclusions.length > 0 && <section className="rounded-2xl border border-clay-200 p-5 sm:p-6"><h2 className="font-display text-xl font-bold text-brand-950">Price excludes</h2><ul className="mt-4 space-y-3">{exclusions.map((item) => <li key={item} className="flex gap-2 text-sm text-clay-700"><span className="font-bold text-clay-400">×</span>{item}</li>)}</ul></section>}
            {tour.booking_requirements && <p className="rounded-xl border border-gold-200 bg-gold-50 p-4 text-sm leading-relaxed text-clay-700">{tour.booking_requirements}</p>}
          </aside>
        </div>
      </main>
    </div>
  );
}

export default function Tours({ tours, onBook }: { tours: Tour[]; onBook: (tour: Tour) => void }) {
  const [filter, setFilter] = useState<TourFilter>('all');
  const [cyclingFilter, setCyclingFilter] = useState('All Cycling Tours');
  const [selected, setSelected] = useState<Tour | null>(null);
  const selectedCategory = tourCategories.find((category) => category.id === filter);

  const visible = tours.filter((tour) => tour.category !== 'transfer').filter((tour) => {
    const inCategory = filter === 'all'
      || tour.category === filter
      || (filter === 'private' && tour.tour_type === 'private')
      || (filter === 'group' && tour.tour_type === 'group')
      || Boolean(selectedCategory?.slugs.includes(tour.slug));

    if (!inCategory || filter !== 'cycling' || cyclingFilter === 'All Cycling Tours') {
      return inCategory;
    }

    const searchable = `${tour.name} ${tour.tagline} ${tour.description}`.toLowerCase();
    switch (cyclingFilter) {
      case 'Private Cycling Tours':
        return tour.tour_type === 'private';
      case 'Group Cycling Tours':
        return tour.tour_type === 'group';
      case 'Sunrise Cycling':
        return /sunrise|morning/.test(searchable);
      case 'Countryside Cycling':
        return /countryside/.test(searchable);
      case 'Sunset Cycling':
        return /sunset|evening/.test(searchable);
      case 'E-Bike Tours':
        return /e-?bike/.test(`${searchable} ${tour.bicycle_type ?? ''}`.toLowerCase());
      case 'Multi-Day Cycling Adventures':
        return /multi.?day|[2-9]\s*days?/.test(`${searchable} ${tour.duration}`.toLowerCase());
      default:
        return true;
    }
  });

  return (
    <section id="tours" className="bg-clay-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Tours & Activities</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-950 sm:text-4xl">Featured Siem Reap Tours</h2>
          <p className="mt-4 leading-relaxed text-clay-600">Explore temples, countryside, water, food, and local culture. Choose a private experience or join a scheduled group outing.</p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
          <button onClick={() => setFilter('all')} className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${filter === 'all' ? 'bg-brand-700 text-white shadow-md' : 'bg-white text-clay-700 hover:bg-brand-50'}`}>All Tours</button>
          {tourCategories.map((category) => (
            <button key={category.id} onClick={() => { setFilter(category.id); setCyclingFilter('All Cycling Tours'); }} className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${filter === category.id ? 'bg-brand-700 text-white shadow-md' : 'bg-white text-clay-700 hover:bg-brand-50'}`}>{category.label}</button>
          ))}
        </Reveal>

        {(filter === 'private' || filter === 'group') && selectedCategory && (
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-clay-600">
            {filter === 'private' ? selectedCategory.privateDescription : selectedCategory.groupDescription}
          </p>
        )}

        {selectedCategory?.subcategories && (
          <Reveal delay={120} className="mt-5 flex flex-wrap justify-center gap-2">
            {selectedCategory.subcategories.map((subcategory) => (
              <button key={subcategory} onClick={() => setCyclingFilter(subcategory)} className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${cyclingFilter === subcategory ? 'border-brand-700 bg-brand-700 text-white' : 'border-clay-200 bg-white text-clay-700 hover:border-brand-300'}`}>
                {subcategory}
              </button>
            ))}
          </Reveal>
        )}

        <p className="mt-10 text-sm text-clay-500">{visible.length} {visible.length === 1 ? 'tour' : 'tours'} found</p>
        {visible.length === 0 && <div className="mt-4 rounded-2xl border border-clay-200 bg-white px-6 py-12 text-center"><h3 className="font-display text-xl font-bold text-brand-900">{selectedCategory?.label ?? 'No tours'} are coming soon</h3><p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-clay-600">We don’t have a bookable listing in this category yet. Contact us to ask about availability or choose another category.</p></div>}

        <div id="tour-results" className="mt-6 grid scroll-mt-24 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tour, index) => (
            <Reveal key={tour.slug} delay={(index % 3) * 70}>
              <article onClick={() => setSelected(tour)} className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden"><TourPhoto tour={tour} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-800">{tourCategoryLabel(tour)}</span>{tour.featured && <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-brand-950">Popular</span>}</div>
                <div className="flex flex-1 flex-col p-6"><h3 className="font-display text-xl font-bold text-brand-900">{tour.name}</h3><p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-clay-600">{tour.tagline}</p><div className="mt-4 flex items-center gap-4 text-xs text-clay-500"><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {tour.duration}</span><span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {tour.group_size ? `Max ${tour.group_size}` : 'Capacity varies'}</span></div><div className="mt-5 flex items-center justify-between border-t border-clay-100 pt-4"><div><span className="font-display text-2xl font-bold text-brand-800">${tour.price}</span><span className="text-xs text-clay-500"> / {tour.price_basis === 'group' ? (tour.vehicle_options?.length ? 'vehicle' : 'group') : 'person'}</span></div><span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all group-hover:gap-2">Details <ArrowRight className="h-4 w-4" /></span></div></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {selected && <TourModal tour={selected} onClose={() => setSelected(null)} onBook={onBook} />}
    </section>
  );
}
