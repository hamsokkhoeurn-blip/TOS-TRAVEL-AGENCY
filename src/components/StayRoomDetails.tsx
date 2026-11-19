import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  BedDouble,
  Bus,
  Car,
  ChevronLeft,
  ChevronRight,
  Coffee,
  ExternalLink,
  Home,
  Landmark,
  MapPin,
  Users,
  Wifi,
  X,
} from 'lucide-react';
import { roomTypeGuests, roomTypeName, roomTypePrice, roomTypePriceLabel, type Hotel } from '../lib/types';

type Props = {
  hotel: Hotel;
  roomType: string;
  onBack: () => void;
  onBook: () => void;
};

export default function StayRoomDetails({ hotel, roomType, onBack, onBook }: Props) {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const selectedRoom = hotel.room_types.find((room) => roomTypeName(room) === roomType);
  const guests = selectedRoom ? roomTypeGuests(selectedRoom) : 2;
  const price = selectedRoom ? roomTypePrice(selectedRoom, hotel.price_from) : hotel.price_from;
  const accommodationFolder = selectedRoom && typeof selectedRoom !== 'string' && selectedRoom.category === 'villa' ? 'villas' : 'rooms';
  const roomFolder = `/hotels/${hotel.slug}/${accommodationFolder}/${encodeURIComponent(roomType)}`;
  const shintaManiPhotoCount = accommodationFolder === 'villas' ? 4 : roomType === 'Angkor Deluxe' ? 4 : 3;
  const khmerMansionPhotoCount = roomType === 'Deluxe Double Room, Poolside' ? 4 : 2;
  const motherhomePhotoCount = roomType === 'Standard Double Room' ? 3 : 2;
  const leNouPhotoCount = 6;
  const goldenTakeoPhotoCount = 2;
  const photos = hotel.slug === 'golden-temple-villa'
    ? Array.from({ length: 5 }, (_, index) => {
        const extension = index === 0 && (roomType === 'Deluxe Double Garden View' || roomType === 'Luxury Double Room') ? 'png' : 'jpg';
        return `${roomFolder}/photo-${index + 1}.${extension}`;
      })
    : hotel.slug === 'eightfold-urban-resort'
    ? Array.from({ length: 3 }, (_, index) => `${roomFolder}/photo-${index + 1}.webp`)
    : hotel.slug === 'khmer-mansion-boutique'
      ? Array.from({ length: khmerMansionPhotoCount }, (_, index) => `${roomFolder}/photo-${index + 1}.jpg`)
    : hotel.slug === 'motherhome-guesthouse'
      ? Array.from({ length: motherhomePhotoCount }, (_, index) => `${roomFolder}/photo-${index + 1}.jpg`)
    : hotel.slug === 'le-nou-siemreap-guesthouse'
      ? Array.from({ length: leNouPhotoCount }, (_, index) => `${roomFolder}/photo-${index + 1}.jpg`)
    : hotel.slug === 'golden-takeo-guesthouse'
      ? Array.from({ length: goldenTakeoPhotoCount }, (_, index) => `${roomFolder}/photo-${index + 1}.webp`)
    : hotel.slug === 'sweet-dreams-guesthouse'
      ? [`${roomFolder}/photo-1.webp`]
    : hotel.slug === 'amansara'
    ? [
        `${roomFolder}/official-aman.webp`,
        `${roomFolder}/gallery-2.webp`,
        `${roomFolder}/gallery-3.webp`,
        `${roomFolder}/gallery-4.webp`,
      ]
    : hotel.slug === 'golden-temple-residence'
      ? [
          `${roomFolder}/photo-1.jpg`,
          `${roomFolder}/photo-2.jpg`,
          `${roomFolder}/photo-3.jpg`,
          `${roomFolder}/photo-4.jpg`,
        ]
      : hotel.slug === 'viroths-hotel'
        ? [
            `${roomFolder}/photo-1.jpg`,
            `${roomFolder}/photo-2.jpg`,
            `${roomFolder}/photo-3.jpg`,
            `${roomFolder}/photo-4.jpg`,
          ]
        : hotel.slug === 'golden-temple-retreat'
          ? [
              `${roomFolder}/photo-1.webp`,
              `${roomFolder}/photo-2.jpg`,
              `${roomFolder}/photo-3.jpg`,
              `${roomFolder}/photo-4.jpg`,
            ]
        : hotel.slug === 'jaya-house-river-park'
          ? [
              `${roomFolder}/photo-1.jpeg`,
              `${roomFolder}/photo-2.jpeg`,
              `${roomFolder}/photo-3.jpeg`,
              `${roomFolder}/photo-4.jpeg`,
            ]
      : hotel.slug === 'shintamani-angkor'
        ? Array.from({ length: shintaManiPhotoCount }, (_, index) => `${roomFolder}/photo-${index + 1}.${accommodationFolder === 'villas' && index === 3 ? 'jpeg' : 'jpg'}`)
        : hotel.slug === 'park-hyatt-siem-reap'
          ? Array.from({ length: 3 }, (_, index) => `${roomFolder}/photo-${index + 1}.jpg`)
          : hotel.slug === 'raffles-grand-hotel-angkor'
            ? Array.from({ length: 4 }, (_, index) => `${roomFolder}/photo-${index + 1}.jpg`)
        : [hotel.image_url];
  const mainPhotos = photos.slice(0, 3);
  const thumbnailPhotos = photos.slice(3, 8);
  const hiddenPhotoCount = Math.max(0, photos.length - 8);
  const mapQuery = encodeURIComponent(`${hotel.name}, ${hotel.area}, Siem Reap, Cambodia`);

  useEffect(() => {
    if (activePhoto === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActivePhoto(null);
      if (event.key === 'ArrowLeft') {
        setActivePhoto((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      }
      if (event.key === 'ArrowRight') {
        setActivePhoto((current) => current === null ? null : (current + 1) % photos.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, photos.length]);

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-white" role="dialog" aria-modal="true" aria-label={`${roomType} details`}>
      <header className="sticky top-0 z-20 border-b border-clay-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-clay-50">
            <ArrowLeft className="h-4 w-4" /> Back to room types
          </button>
          <button onClick={onBack} className="rounded-full p-2 text-clay-500 hover:bg-clay-50" aria-label="Close room details">
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-5 sm:px-6">
        <div className="grid h-64 grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-2xl sm:h-[26rem] lg:h-[30rem] lg:grid-cols-3">
          {mainPhotos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              onClick={() => setActivePhoto(index)}
              aria-label={`View photo ${index + 1} full screen`}
              className={`group relative overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500 ${index === 0 ? `col-span-2 ${mainPhotos.length === 1 ? 'row-span-2 lg:col-span-3' : 'row-span-1 lg:col-span-2 lg:row-span-2'}` : index === 1 && mainPhotos.length === 2 ? 'col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
            >
              <img src={photo} alt={`${roomType} at ${hotel.name}${index ? `, photo ${index + 1}` : ''}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">View full screen</span>
            </button>
          ))}
        </div>

        {thumbnailPhotos.length > 0 && (
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {thumbnailPhotos.map((photo, index) => {
              const photoIndex = index + 3;
              const hasMorePhotos = hiddenPhotoCount > 0 && index === thumbnailPhotos.length - 1;

              return (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setActivePhoto(photoIndex)}
                  aria-label={hasMorePhotos ? `View photo ${photoIndex + 1} and ${hiddenPhotoCount} more photos` : `View photo ${photoIndex + 1} full screen`}
                  className="group relative aspect-[16/9] overflow-hidden rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500"
                >
                  <img src={photo} alt={`${roomType} at ${hotel.name}, photo ${photoIndex + 1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  {hasMorePhotos && <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-lg font-bold text-white">+{hiddenPhotoCount} photos</span>}
                </button>
              );
            })}
          </div>
        )}

        <div className="mx-auto max-w-4xl">
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-medium text-teal-700"><MapPin className="h-4 w-4" />{hotel.area}, Siem Reap</p>
              <h1 className="mt-1 font-display text-3xl font-bold text-brand-950 sm:text-4xl">{roomType}</h1>
              <p className="mt-1 text-clay-600">at {hotel.name}</p>
            </div>
            <p className="text-lg font-bold text-brand-900">{roomTypePriceLabel(selectedRoom ?? '', hotel.price_from)}<span className="ml-1 text-sm font-normal text-clay-500">/night</span></p>
          </div>

          <section className="mt-9">
            <h2 className="font-display text-2xl font-bold text-brand-950">About this room</h2>
            <p className="mt-3 leading-relaxed text-clay-700">{hotel.description}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <InfoCard icon={<Home />} value="Hotel" label="Accommodation" />
              <InfoCard icon={<Users />} value={`${guests} guests`} label="Guest capacity" />
              <InfoCard icon={<BedDouble />} value={roomType} label="Room type" />
              <InfoCard icon={<MapPin />} value={hotel.area} label="Neighborhood" />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-brand-950">Facilities &amp; amenities</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Amenity icon={<Wifi />} label="Free Wi-Fi" />
              <Amenity icon={<Coffee />} label="Breakfast" />
              <Amenity icon={<Bus />} label="Tour pickup" />
              <Amenity icon={<MapPin />} label={`Located in ${hotel.area}`} />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-brand-950">Location</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-clay-100">
              <iframe
                title={`Map showing ${hotel.name}`}
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:underline"
            >
              Open larger map <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <div className="mt-7 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-brand-950"><Landmark className="h-4 w-4 text-teal-600" />Nearby attractions</h3>
                <ul className="mt-3 divide-y divide-clay-100 text-sm text-clay-700">
                  {['Angkor Wat', 'Old Market', 'Pub Street', 'Siem Reap River'].map((place) => (
                    <li key={place} className="py-2.5">{place}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-brand-950"><Car className="h-4 w-4 text-teal-600" />Transportation</h3>
                <ul className="mt-3 space-y-3 text-sm text-clay-700">
                  <li className="flex gap-2"><span className="text-teal-600">•</span>Airport pickup can be requested with your stay booking</li>
                  <li className="flex gap-2"><span className="text-teal-600">•</span>Tour pickup from the hotel is available</li>
                  <li className="flex gap-2"><span className="text-teal-600">•</span>Tuk-tuk and private car options are available in Siem Reap</li>
                </ul>
              </div>
            </div>
          </section>

          <button onClick={onBook} className="mt-9 flex w-full items-center justify-center rounded-full bg-brand-700 py-3.5 font-semibold text-white transition-colors hover:bg-brand-600">
            Book {roomType}
          </button>
        </div>
      </main>

      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activePhoto + 1} of ${photos.length}`}
          onClick={(event) => { if (event.target === event.currentTarget) setActivePhoto(null); }}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Close photo viewer"
          >
            <X className="h-6 w-6" />
          </button>
          {photos.length > 1 && (
            <button
              onClick={() => setActivePhoto((activePhoto - 1 + photos.length) % photos.length)}
              className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}
          <figure className="flex max-h-full max-w-full flex-col items-center">
            <img
              src={photos[activePhoto]}
              alt={`${roomType} at ${hotel.name}, photo ${activePhoto + 1}`}
              className="max-h-[82vh] max-w-[88vw] rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-sm text-white/80">{activePhoto + 1} / {photos.length}</figcaption>
          </figure>
          {photos.length > 1 && (
            <button
              onClick={() => setActivePhoto((activePhoto + 1) % photos.length)}
              className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
              aria-label="Next photo"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function InfoCard({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="min-w-0 rounded-2xl bg-slate-50 p-4">
      <span className="text-teal-600">{icon}</span>
      <p className="mt-2 truncate font-semibold text-brand-900">{value}</p>
      <p className="mt-0.5 text-xs text-clay-500">{label}</p>
    </div>
  );
}

function Amenity({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-clay-100 p-4">
      <span className="rounded-xl bg-teal-50 p-2 text-teal-600">{icon}</span>
      <span className="text-sm font-medium text-brand-900">{label}</span>
    </div>
  );
}
