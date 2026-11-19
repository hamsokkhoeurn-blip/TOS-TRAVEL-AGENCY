import { useEffect, useState } from 'react';
import { BedDouble, Bike, Car, Check, Landmark, Star, type LucideIcon } from 'lucide-react';
import type { Hotel, Tour } from '@/lib/types';
import { Reveal } from './Reveal';
import AccommodationForm from './booking/AccommodationForm';
import TourForm from './booking/TourForm';
import TransportForm from './booking/TransportForm';
import ServiceForm from './booking/ServiceForm';
import type { BicycleRental, PrivateCarService, RentalBike, TukTukService } from './Transportation';

export type BookingCategory = 'accommodation' | 'tours' | 'transportation' | 'other';

type Category = {
  key: BookingCategory;
  title: string;
  subtitle: string;
  image: string;
  icon: LucideIcon;
  panelTitle: string;
  panelText: string;
};

const categories: Category[] = [
  {
    key: 'accommodation',
    title: 'Accommodation',
    subtitle: 'Find your stay',
    image: 'https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: BedDouble,
    panelTitle: 'Book Your Stay With Us',
    panelText:
      "Skip the third-party sites. Tell us where you'd like to stay and we arrange the room and your airport pickup in one go.",
  },
  {
    key: 'tours',
    title: 'Tours',
    subtitle: 'Explore destinations',
    image: 'https://images.pexels.com/photos/15890577/pexels-photo-15890577.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Landmark,
    panelTitle: 'Book Your Holiday',
    panelText:
      'Reserve your seat in under a minute. We confirm every booking within a few hours, and no payment is needed today.',
  },
  {
    key: 'transportation',
    title: 'Transportation',
    subtitle: 'Arrange your transfer',
    image: 'https://images.pexels.com/photos/39075475/pexels-photo-39075475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Car,
    panelTitle: 'Book Your Transfer',
    panelText:
      'Reliable private airport pickups and city-to-city transfers across Cambodia, confirmed within a few hours.',
  },
  {
    key: 'other',
    title: 'Other Services',
    subtitle: 'Explore more services',
    image: 'https://images.pexels.com/photos/18152639/pexels-photo-18152639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Star,
    panelTitle: 'Book Special Experiences',
    panelText:
      'Customize your Cambodia trip with hot air balloon rides and other special experiences. No payment is needed today.',
  },
];

function BookingPanelImage({ source, backup }: { source: string; backup?: string }) {
  const [image, setImage] = useState(source);
  const [triedBackup, setTriedBackup] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setImage(source);
    setTriedBackup(false);
    setFailed(false);
  }, [source, backup]);

  if (failed) {
    return <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-800 to-brand-950 text-white/75"><Bike className="h-16 w-16" aria-hidden="true" /></div>;
  }

  return (
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => {
        if (backup && !triedBackup) {
          setTriedBackup(true);
          setImage(backup);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

type Props = {
  tours: Tour[];
  hotels: Hotel[];
  category: BookingCategory;
  onCategoryChange: (category: BookingCategory) => void;
  selectedTour: Tour | null;
  onChangeTour: (slug: string) => void;
  selectedHotel: Hotel | null;
  selectedRoomType: string;
  onChangeHotel: (hotel: Hotel | null) => void;
  selectedRental: RentalBike | null;
  selectedBicycle: BicycleRental | null;
  selectedTukTuk: TukTukService | null;
  selectedPrivateCar: PrivateCarService | null;
};

export default function Booking({
  tours,
  hotels,
  category,
  onCategoryChange,
  selectedTour,
  onChangeTour,
  selectedHotel,
  selectedRoomType,
  onChangeHotel,
  selectedRental,
  selectedBicycle,
  selectedTukTuk,
  selectedPrivateCar,
}: Props) {
  const active = categories.find((c) => c.key === category) ?? categories[0];
  const panelTitle = category === 'transportation' && selectedTukTuk
    ? `Request ${selectedTukTuk.title}`
    : category === 'transportation' && selectedPrivateCar
      ? `Request ${selectedPrivateCar.title}`
    : category === 'transportation' && selectedRental
    ? 'Request a Motor Rental'
    : category === 'transportation' && selectedBicycle
      ? 'Request a Bicycle Rental'
      : active.panelTitle;
  const panelText = category === 'transportation' && selectedTukTuk
    ? `Request a ${selectedTukTuk.title.toLowerCase()} from ${selectedTukTuk.price}. We’ll confirm availability and the final fare with you.`
    : category === 'transportation' && selectedPrivateCar
      ? `${selectedPrivateCar.description} ${selectedPrivateCar.price}. We’ll confirm your pickup and final fare.`
    : category === 'transportation' && selectedRental
    ? `Request ${selectedRental.name} for $${selectedRental.price} per 24-hour day. We’ll confirm availability and the final rental terms with you.`
    : category === 'transportation' && selectedBicycle
      ? `Request ${selectedBicycle.brand} ${selectedBicycle.name} for $${selectedBicycle.price} per day. We’ll confirm availability and bike sizing with you.`
      : active.panelText;
  const panelImage = category === 'transportation' && selectedTukTuk
    ? selectedTukTuk.image
    : category === 'transportation' && selectedPrivateCar
      ? selectedPrivateCar.image
    : category === 'transportation' && selectedRental
    ? selectedRental.image
    : category === 'transportation' && selectedBicycle
      ? selectedBicycle.image
      : active.image;
  const panelImageBackup = category === 'transportation' && selectedTukTuk
    ? selectedTukTuk.backupImage
    : category === 'transportation' && selectedPrivateCar
      ? selectedPrivateCar.backupImage
    : category === 'transportation' && selectedRental
    ? selectedRental.backupImage
    : category === 'transportation' && selectedBicycle
      ? selectedBicycle.backupImage
      : undefined;

  return (
    <section id="booking" className="bg-clay-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Booking</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-brand-950 sm:text-3xl">Book Now</h2>
          <p className="mt-2 text-sm leading-relaxed text-clay-600">
            Choose a service and start planning your trip in Cambodia.
          </p>
        </Reveal>

        <div role="tablist" className="mt-6 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {categories.map((c) => {
            const isActive = c.key === category;
            const Icon = c.icon;
            return (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(c.key)}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  isActive ? 'border-gold-500 shadow-lg' : 'border-clay-100'
                }`}
              >
                <div className="relative h-14 overflow-hidden sm:h-16">
                  <img
                    src={c.image}
                    alt=""
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      isActive ? 'scale-100' : 'grayscale group-hover:grayscale-0'
                    }`}
                  />
                  {isActive && (
                  <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-brand-950 shadow-md">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 p-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-brand-700" />
                  <span>
                    <span className="block text-xs font-bold text-brand-900 sm:text-sm">{c.title}</span>
                    <span className="block text-[11px] text-clay-500">{c.subtitle}</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-lg lg:grid lg:grid-cols-5">
          <div className="relative h-28 overflow-hidden lg:col-span-2 lg:h-full lg:min-h-[430px]">
            <BookingPanelImage source={panelImage} backup={panelImageBackup} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6">
              <h3 className="font-display text-lg font-bold text-white">{panelTitle}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/85">{panelText}</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 lg:col-span-3">
            {category === 'accommodation' && (
              <AccommodationForm hotels={hotels} selectedHotel={selectedHotel} selectedRoomType={selectedRoomType} onChangeHotel={onChangeHotel} />
            )}
            {category === 'tours' && (
              <TourForm tours={tours} selectedTour={selectedTour} onChangeTour={onChangeTour} />
            )}
            {category === 'transportation' && <TransportForm rental={selectedRental} bicycle={selectedBicycle} tukTuk={selectedTukTuk} privateCar={selectedPrivateCar} />}
            {category === 'other' && <ServiceForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
