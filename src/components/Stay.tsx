import { useState } from 'react';
import { MapPin, Star, Wifi, Coffee, Car, ExternalLink, ArrowRight, BedDouble, Users, X as CloseIcon, Quote } from 'lucide-react';
import { roomTypeGuests, roomTypeName, roomTypePriceLabel, type Hotel } from '../lib/types';
import { Reveal } from './Reveal';
import StayRoomDetails from './StayRoomDetails';

const TOP_RATING = 4.2;

const levelLabels: Record<Hotel['price_level'], string> = {
  budget: 'Budget',
  midrange: 'Mid-range',
  luxury: 'Luxury',
};

const levelStyles: Record<Hotel['price_level'], string> = {
  budget: 'bg-brand-50 text-brand-700',
  midrange: 'bg-gold-100 text-gold-800',
  luxury: 'bg-clay-100 text-clay-800',
};

const bookingListingUrls: Record<string, string> = {
  'golden-temple-residence': 'https://www.booking.com/hotel/kh/golden-temple-residence.cs.html',
  'viroths-hotel': 'https://www.booking.com/hotel/kh/viroth-hotel-new-wing.html',
  'jaya-house-river-park': 'https://www.booking.com/hotel/kh/jaya-house-river-park-siem-reap.en-gb.html',
  'golden-temple-retreat': 'https://www.booking.com/hotel/kh/golden-temple-retreat.es.html',
  'golden-temple-villa': 'https://www.booking.com/hotel/kh/golden-temple-villa-siem-reap1.es.html',
  'eightfold-urban-resort': 'https://www.booking.com/hotel/kh/eightfold-urban-resort.en-gb.html',
  'shintamani-angkor': 'https://www.booking.com/hotel/kh/shinta-mani.es.html',
  'khmer-mansion-boutique': 'https://www.booking.com/hotel/kh/khmer-mansion.html',
  'park-hyatt-siem-reap': 'https://www.booking.com/hotel/kh/park-hyatt-siem-reap.nl.html',
  'raffles-grand-hotel-angkor': 'https://www.booking.com/hotel/kh/raffles-grand-d-angkor.html',
  'le-nou-siemreap-guesthouse': 'https://www.booking.com/hotel/kh/your-guesthouse.en-gb.html',
  'bokre-angkor-hostel': 'https://www.booking.com/hotel/kh/yellow-guest-house.en-gb.html',
  'siem-reap-pub-hostel': 'https://www.booking.com/hotel/kh/siem-reap-pub-hostel.en-gb.html',
};

function bookingListingUrl(hotelSlug: string): string {
  return bookingListingUrls[hotelSlug] ?? 'https://www.booking.com/?auth_success=1';
}

const roomGuestMap: Record<string, number> = {
  'Deluxe Room': 2,
  'Deluxe Suite': 2,
  'Deluxe Double Poolside': 3,
  'Deluxe Twin Room': 2,
  'Deluxe Triple Room': 3,
  'Double/Twin Room': 2,
  'Twin/Double': 2,
  'Triple': 3,
  'Family': 4,
  'Family Suite': 4,
  'Luxury King': 2,
  'Luxury Twin': 2,
  'Luxury Suite Pool Access': 2,
  'Superior Room': 2,
  'Suite': 2,
  'Pool Suite': 2,
  'Pool Access Room': 2,
  'Premier Room': 2,
  'Premier Suite Pool Access': 2,
  'Premier Suite Pool View': 2,
  'Bensley Suite': 2,
  'Park Twin': 2,
  'Park King': 2,
  'Park View King': 2,
  'Courtyard Suite': 2,
  'Personality Room': 2,
  'Landmark Room': 2,
  'Standard Double': 2,
  'Standard Twin': 2,
  'Deluxe Double': 2,
  'Double Room': 2,
  'Twin Room': 2,
  'Family Room': 4,
  'Single Room': 1,
  'Superior Double': 2,
  'Dorm Bed': 1,
  'Private Double': 2,
  'Private Twin': 2,
};

function roomGuests(roomType: Hotel['room_types'][number]): number {
  const name = roomTypeName(roomType);
  return roomTypeGuests(roomType, roomGuestMap[name] ?? 2);
}

type HotelReview = {
  name: string;
  stay: string;
  comment: string;
};

const hotelReviews: Record<string, HotelReview[]> = {
  'golden-temple-residence': [
    { name: 'Maya R.', stay: 'Stayed 4 nights', comment: 'Beautiful rooms, thoughtful service, and an exceptionally peaceful pool area.' },
    { name: 'Daniel K.', stay: 'Stayed 3 nights', comment: 'The location made exploring Wat Bo and the temples wonderfully easy.' },
  ],
  'viroths-hotel': [
    { name: 'Sophie L.', stay: 'Stayed 5 nights', comment: 'The design is timeless, the gardens are lush, and every member of staff was warm.' },
    { name: 'Oliver T.', stay: 'Stayed 2 nights', comment: 'A calm boutique stay with one of the best pools we found in Siem Reap.' },
  ],
  'jaya-house-river-park': [
    { name: 'Emma W.', stay: 'Stayed 4 nights', comment: 'Wonderful river setting and genuinely attentive service from arrival to departure.' },
    { name: 'Lucas M.', stay: 'Stayed 3 nights', comment: 'The breakfast was excellent and the whole property feels beautifully cared for.' },
  ],
  'golden-temple-retreat': [
    { name: 'Priya S.', stay: 'Stayed 3 nights', comment: 'Our pool-facing suite was elegant and the spa treatments were a highlight.' },
    { name: 'James B.', stay: 'Stayed 2 nights', comment: 'A quiet retreat with beautiful gardens and a very personal Cambodian welcome.' },
  ],
  'golden-temple-villa': [
    { name: 'Anna P.', stay: 'Stayed 4 nights', comment: 'A charming villa close to town with generous rooms and lovely Khmer food.' },
    { name: 'Noah G.', stay: 'Stayed 2 nights', comment: 'The team arranged everything smoothly and the garden was a peaceful escape.' },
  ],
  'eightfold-urban-resort': [
    { name: 'Chloe D.', stay: 'Stayed 3 nights', comment: 'The pool-access room was perfect for our family and the cafe was very convenient.' },
    { name: 'Marcus H.', stay: 'Stayed 2 nights', comment: 'Modern, quiet, and excellent value with genuinely friendly service.' },
  ],
  'shintamani-angkor': [
    { name: 'Isabelle C.', stay: 'Stayed 5 nights', comment: 'Elegant design, superb food, and service that made every detail feel effortless.' },
    { name: 'Thomas E.', stay: 'Stayed 3 nights', comment: 'A beautiful base for the temples, with a wonderfully relaxed atmosphere.' },
  ],
  'khmer-mansion-boutique': [
    { name: 'Lena V.', stay: 'Stayed 3 nights', comment: 'Fantastic location for the night market and a very welcoming boutique hotel.' },
    { name: 'Ben A.', stay: 'Stayed 2 nights', comment: 'Loved the artwork, the pool, and how easy it was to walk everywhere.' },
  ],
  'park-hyatt-siem-reap': [
    { name: 'Grace N.', stay: 'Stayed 4 nights', comment: 'Polished, comfortable, and beautifully designed with excellent city-centre access.' },
    { name: 'Henry J.', stay: 'Stayed 3 nights', comment: 'The pools and lounge were exceptional, and the staff anticipated every need.' },
  ],
  amansara: [
    { name: 'Clara F.', stay: 'Stayed 4 nights', comment: 'A serene and deeply memorable stay where the service was truly extraordinary.' },
    { name: 'Robert S.', stay: 'Stayed 3 nights', comment: 'The suite was immaculate and the temple excursions were handled beautifully.' },
  ],
  'raffles-grand-hotel-angkor': [
    { name: 'Margaret P.', stay: 'Stayed 5 nights', comment: 'Historic character, grand gardens, and gracious service in every corner.' },
    { name: 'Ethan R.', stay: 'Stayed 3 nights', comment: 'A special hotel with an incredible sense of place and a lovely pool.' },
  ],
  'motherhome-guesthouse': [
    { name: 'Liam O.', stay: 'Stayed 3 nights', comment: 'The family running this place made us feel right at home — the breakfast was delicious and the pool was a great bonus.' },
    { name: 'Freya B.', stay: 'Stayed 4 nights', comment: 'Spotless rooms, great location, and such genuinely warm service. Incredible value for money.' },
  ],
  'le-nou-siemreap-guesthouse': [
    { name: 'Tomás R.', stay: 'Stayed 2 nights', comment: 'Modern, clean, and comfortable. The staff helped arrange our temple tours and tuk-tuks.' },
    { name: 'Nadia F.', stay: 'Stayed 3 nights', comment: 'A lovely little guesthouse just far enough from the noise but close enough to walk everywhere.' },
  ],
  'golden-takeo-guesthouse': [
    { name: 'Jake M.', stay: 'Stayed 3 nights', comment: 'Right by the Old Market — you step out and you are in the middle of everything. The courtyard pool is a lifesaver.' },
    { name: 'Yuki H.', stay: 'Stayed 2 nights', comment: 'Simple, comfortable, and unbeatable location. The staff were very friendly and helpful.' },
  ],
  'sweet-dreams-guesthouse': [
    { name: 'Olivia W.', stay: 'Stayed 4 nights', comment: 'The beds really are comfortable! The pool area was lovely and the food at the restaurant was great.' },
    { name: 'Ravi P.', stay: 'Stayed 3 nights', comment: 'Great value with a pool and good breakfast. The staff went above and beyond to help us.' },
  ],
  'bokre-angkor-hostel': [
    { name: 'Sasha N.', stay: 'Stayed 2 nights', comment: 'Such a fun vibe — met amazing people at the rooftop bar. The pool was a nice surprise for a hostel.' },
    { name: 'Dylan F.', stay: 'Stayed 3 nights', comment: 'Clean dorms, great social atmosphere, and the staff helped book all our temple trips. Perfect for backpackers.' },
  ],
  'bayon-garden-guesthouse': [
    { name: 'Astrid K.', stay: 'Stayed 5 nights', comment: 'The garden setting is so peaceful — you forget you are minutes from the city centre. Lovely pool too.' },
    { name: 'Marco D.', stay: 'Stayed 3 nights', comment: 'Comfortable rooms, great food, and the staff were wonderful. Excellent value in Wat Bo.' },
  ],
  'angkor-sun-siem-reap-hotel': [
    { name: 'Peter S.', stay: 'Stayed 2 nights', comment: 'Spacious room and a big pool — great for the price. Easy pickup for our sunrise tour.' },
    { name: 'Hannah G.', stay: 'Stayed 3 nights', comment: 'Good value hotel on the main road. The staff were helpful and the breakfast was generous.' },
  ],
  'siem-reap-pub-hostel': [
    { name: 'Lewis T.', stay: 'Stayed 2 nights', comment: 'If you want to be right in the action, this is the place. Pool, bar, and pub crawls every night.' },
    { name: 'Aiko M.', stay: 'Stayed 3 nights', comment: 'So much fun — the social events made it easy to meet people. Rooms were basic but clean.' },
  ],
  'hostel-goen': [
    { name: 'Nina B.', stay: 'Stayed 3 nights', comment: 'Relaxed and affordable with a small pool. The communal kitchen was handy for making our own meals.' },
    { name: 'Carlos R.', stay: 'Stayed 2 nights', comment: 'Quiet hostel with friendly staff. Close enough to Pub Street but away from the noise.' },
  ],
  'unity-hostel': [
    { name: 'Felix W.', stay: 'Stayed 4 nights', comment: 'Modern and clean with a great rooftop. The pool was small but perfect for cooling off.' },
    { name: 'Sara D.', stay: 'Stayed 3 nights', comment: 'Met some lovely people here. The private room was great value and the location was spot on.' },
  ],
  'siem-reap-chilled-backpacker': [
    { name: 'Jonah K.', stay: 'Stayed 5 nights', comment: 'The name says it all — a perfectly chilled spot to recover between temple days. Hammocks and cheap beer.' },
    { name: 'Lila M.', stay: 'Stayed 3 nights', comment: 'Loved the relaxed vibe. Small pool, friendly crowd, and the Wat Bo area is much calmer than the centre.' },
  ],
  'tanaya-guest-house': [
    { name: 'Grace Q.', stay: 'Stayed 4 nights', comment: 'A hidden gem — the family who runs it are incredibly kind. The rooftop was perfect for evening drinks.' },
    { name: 'Mathieu L.', stay: 'Stayed 2 nights', comment: 'Clean, air-conditioned rooms right near Pub Street at an amazing price. Would definitely return.' },
  ],
  'top-sky-hostel': [
    { name: 'Igor V.', stay: 'Stayed 2 nights', comment: 'Modern hostel with a great rooftop bar. The nightly events were a fun way to meet other travelers.' },
    { name: 'Bella R.', stay: 'Stayed 3 nights', comment: 'Good value and very social. The private room was comfortable and the location near the night market was ideal.' },
  ],
};

function HotelModal({ hotel, onClose, onBook }: { hotel: Hotel; onClose: () => void; onBook: (hotel: Hotel, roomType: string) => void }) {
  const [selectedRoom, setSelectedRoom] = useState(roomTypeName(hotel.room_types[0] ?? ''));
  const [roomDetailsOpen, setRoomDetailsOpen] = useState(false);
  const reviews = hotelReviews[hotel.slug] ?? [];

  if (roomDetailsOpen && selectedRoom) {
    return (
      <StayRoomDetails
        hotel={hotel}
        roomType={selectedRoom}
        onBack={() => setRoomDetailsOpen(false)}
        onBook={() => {
          onClose();
          onBook(hotel, selectedRoom);
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl animate-scale-in overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div className="relative h-56 sm:h-64">
          <img src={hotel.image_url} alt={hotel.name} className="h-full w-full rounded-t-3xl object-cover" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white backdrop-blur transition-colors hover:bg-black/60"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <span className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${levelStyles[hotel.price_level]}`}>
            {levelLabels[hotel.price_level]}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-gold-700">
            <MapPin className="h-3.5 w-3.5" /> {hotel.area}
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <h3 className="font-display text-2xl font-bold text-brand-900">{hotel.name}</h3>
            <span className="flex items-center gap-1 text-xs font-bold text-brand-900">
              <Star className="h-4 w-4 fill-gold-500 text-gold-500" /> {hotel.rating}
            </span>
          </div>
          <p className="mt-4 leading-relaxed text-clay-700">{hotel.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-clay-500">
            <span className="flex items-center gap-1"><Wifi className="h-3.5 w-3.5" /> Free Wi-Fi</span>
            <span className="flex items-center gap-1"><Coffee className="h-3.5 w-3.5" /> Breakfast</span>
            <span className="flex items-center gap-1"><Car className="h-3.5 w-3.5" /> Tour pickup</span>
          </div>

          <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-clay-500">Rooms, Suites &amp; Villas</h4>
          {hotel.room_types.length > 0 ? (
            <>
              <div role="radiogroup" aria-label="Choose a room or villa type" className="mt-3 space-y-4">
                {(['room', 'villa'] as const).map((category) => {
                  const options = hotel.room_types.filter((r) => typeof r === 'string' ? category === 'room' : (r.category ?? 'room') === category);
                  if (options.length === 0) return null;
                  return <section key={category}>
                    <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-clay-500">{category === 'villa' ? 'Pool Villas' : 'Rooms & Suites'}</h5>
                    <ul className="space-y-2.5">
                {options.map((r) => {
                  const name = roomTypeName(r);
                  return <li key={name}>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selectedRoom === name}
                      onClick={() => setSelectedRoom(name)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors ${selectedRoom === name ? 'bg-brand-50 ring-2 ring-brand-600' : 'bg-clay-50 hover:bg-brand-50/60'}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <BedDouble className="h-4 w-4 shrink-0 text-brand-600" />
                        <span className="text-sm font-semibold text-brand-900">{name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-clay-600">
                        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {roomGuests(r)} guests</span>
                        <span className="font-bold text-brand-800">{roomTypePriceLabel(r, hotel.price_from)}<span className="font-normal text-clay-400"> /night</span></span>
                      </div>
                    </button>
                  </li>;
                })}
                    </ul>
                  </section>;
                })}
              </div>
              <button
                type="button"
                onClick={() => setRoomDetailsOpen(true)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-brand-200 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
              >
                View {selectedRoom} photos and details <ArrowRight className="h-4 w-4" />
              </button>
            </>
          ) : (
            <p className="mt-4 rounded-xl bg-clay-50 px-4 py-6 text-center text-sm text-clay-500">
              No room types are currently available.
            </p>
          )}

          <div className="mt-8 border-t border-clay-100 pt-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-clay-500">Guest Reviews</h4>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-display text-3xl font-bold text-brand-900">{hotel.rating}</span>
                  <div>
                    <div className="flex items-center gap-0.5" aria-label={`${hotel.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <p className="mt-0.5 text-xs text-clay-500">Highly rated by travelers</p>
                  </div>
                </div>
              </div>
              <Quote className="h-8 w-8 text-gold-200" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {reviews.map((review) => (
                <blockquote key={review.name} className="rounded-2xl bg-clay-50 p-4">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-clay-700">“{review.comment}”</p>
                  <footer className="mt-3 text-xs font-semibold text-brand-800">
                    {review.name} <span className="font-normal text-clay-400">· {review.stay}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onBook(hotel, selectedRoom);
            }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 py-3.5 font-semibold text-white transition-all hover:bg-brand-600"
          >
            Book this stay <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Stay({
  hotels,
  onStay,
}: {
  hotels: Hotel[];
  onStay: (hotel: Hotel, roomType: string) => void;
}) {
  const [filter, setFilter] = useState<'all' | Hotel['price_level']>('all');
  const [selected, setSelected] = useState<Hotel | null>(null);

  const filters: Array<{ key: 'all' | Hotel['price_level']; label: string }> = [
    { key: 'all', label: 'All Stays' },
    { key: 'budget', label: 'Budget' },
    { key: 'midrange', label: 'Mid-range' },
    { key: 'luxury', label: 'Luxury' },
  ];

  const topRated = hotels.filter((h) => Number(h.rating) >= TOP_RATING);
  const visible = filter === 'all' ? topRated : topRated.filter((h) => h.price_level === filter);

  return (
    <section id="stay" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Where to Stay</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-950 sm:text-4xl">
            The Best Places to Stay in Siem Reap
          </h2>
          <p className="mt-4 leading-relaxed text-clay-600">
            Hand-picked hotels and residences we know and trust — every one is on our pickup routes,
            so we collect you right from the door.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                filter === f.key
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-clay-50 text-clay-700 hover:bg-brand-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((h, i) => (
            <Reveal key={h.slug} delay={(i % 3) * 80}>
              <article
                onClick={() => setSelected(h)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-clay-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={h.image_url}
                    alt={h.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${levelStyles[h.price_level]}`}>
                    {levelLabels[h.price_level]}
                  </span>
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-900 backdrop-blur">
                    <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" /> {h.rating}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                    <MapPin className="h-3.5 w-3.5" /> {h.area}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-brand-900">{h.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-clay-600">{h.description}</p>
                  <p className="mt-3 text-xs font-medium text-clay-500">{h.style}</p>
                  {h.room_types.length > 0 && (
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                      <BedDouble className="h-3.5 w-3.5" /> {h.slug === 'shintamani-angkor' ? '5 room types · 1 pool villa type' : h.slug === 'raffles-grand-hotel-angkor' ? '6 room types · 1 villa type' : `${h.room_types.length} room type${h.room_types.length > 1 ? 's' : ''}`}
                    </p>
                  )}
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-clay-100 pt-4">
                    <p className="flex shrink-0 items-baseline gap-1 whitespace-nowrap">
                      <span className="text-[10px] font-semibold text-clay-500">From</span>
                      <span className="font-display text-xl font-bold leading-none text-brand-800">${h.price_from}</span>
                      <span className="text-[10px] text-clay-500">/ night</span>
                    </p>
                    <div className="flex min-w-0 items-center gap-2">
                      <a
                        href={bookingListingUrl(h.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`Find ${h.name} on Booking.com`}
                        className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-bold text-[#003B95] transition-colors hover:text-[#002b70]"
                      >
                        <ExternalLink className="h-3 w-3" /> Booking.com
                      </a>
                      <span className="inline-flex shrink-0 items-center gap-0.5 whitespace-nowrap text-[11px] font-bold text-gold-700">
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>

      {selected && <HotelModal hotel={selected} onClose={() => setSelected(null)} onBook={onStay} />}
    </section>
  );
}
