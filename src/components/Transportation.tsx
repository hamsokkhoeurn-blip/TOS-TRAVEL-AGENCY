import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Bike, Bus, Car, Check, ShieldCheck, X } from 'lucide-react';
import { Reveal } from './Reveal';
import IntercityBusBooking from './IntercityBusBooking';

type TransportationFilter =
  | 'all'
  | 'tuk-tuk'
  | 'private-car'
  | 'minivan'
  | 'bicycle'
  | 'motorcycle';

type TransportationService = {
  category: Exclude<TransportationFilter, 'all'>;
  label: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  accent: string;
};

export type TukTukService = {
  id: 'city' | 'temples' | 'countryside' | 'airport' | 'evening' | 'group';
  title: string;
  description: string;
  stops: string;
  price: string;
  startingPrice: number | null;
  image: string;
  backupImage: string;
};

export type PrivateCarService = Pick<TukTukService, 'title' | 'description' | 'stops' | 'price' | 'image' | 'backupImage'> & { startingPrice?: number | null };

const tukTukServices: TukTukService[] = [
  {
    id: 'city',
    title: 'City Tuk-Tuk Rides',
    description: 'Short rides around Siem Reap with hotel pickup and drop-off.',
    stops: 'Pub Street · Night markets · Restaurants & cafes · Shopping areas',
    price: '$5–7 per short ride', startingPrice: 5,
    image: 'https://angkornow.com/images/articles/transport.webp',
    backupImage: 'https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/12/18/1766052670695_campuchia_1.jpeg',
  },
  {
    id: 'temples',
    title: 'Angkor Temple Tuk-Tuk',
    description: 'Private transport between the Angkor temples and your hotel.',
    stops: 'Angkor Wat · Angkor Thom · Bayon · Ta Prohm · Small & Grand Circuits',
    price: 'Small Circuit $18–25 · Grand Circuit $25–30 per tuk-tuk', startingPrice: 18,
    image: 'https://res.klook.com/images/fl_lossy.progressive%2Cq_65/c_fill%2Cw_1295%2Ch_863/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/ixn8jrphracrrbwtnwx8/AngkorWatFullDayBigandSmallCircleTour%2CPrivateTuk-Tuk.jpg',
    backupImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2e/d8/01/cambodia-angkor-wat-taxi.jpg?h=1200&s=1&w=1200',
  },
  {
    id: 'countryside',
    title: 'Countryside Tuk-Tuk',
    description: 'Take a slower ride through villages and farmland outside town.',
    stops: 'Local villages · Rice fields · Markets · Rural experiences',
    price: 'Custom quote', startingPrice: null,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/52/b8/3a/a-tuk-tuk-driving-through.jpg?h=900&s=1&w=1200',
    backupImage: 'https://www.feetdotravel.com/uploads/7/1/0/0/71000831/img-7784_orig.jpg',
  },
  {
    id: 'airport',
    title: 'Tuk-Tuk Airport Transfer',
    description: 'Arrange airport pickup, hotel drop-off, or a ride back to the airport.',
    stops: 'Airport pickup · Hotel drop-off · Return transfer · Flight arrival coordination',
    price: '$20–25 per tuk-tuk, each way', startingPrice: 20,
    image: 'https://images.openai.com/static-rsc-4/O2DSsDULvBsu7vb4EV_B7REEtLA5anWgm-HNM2CpRxpwjss-v6LGz9hRjqc4mqbmEHKue3rgPXI8muI9oiGgYWOppOXHUdT3Be-fn0qKbb68I9M_miF7HMXZSLoL5jVM2StTZv5SdZGHjRyfBAel_lXJfq5GsiLGY2S3ZucT2ck?purpose=inline',
    backupImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/15/cc/bb/thank-so-much-for-giving.jpg?h=-1&s=1&w=1200',
  },
  {
    id: 'evening',
    title: 'Sunset & Evening Rides',
    description: 'Book an evening ride for sunset stops, dinner, or nightlife.',
    stops: 'Sunset viewpoints · Evening city rides · Dinner · Nightlife',
    price: '$5–7 per short ride · longer routes quoted', startingPrice: 5,
    image: 'https://images.locationscout.net/2019/06/siem-reap-sunset-cambodia.webp?h=1400&q=80',
    backupImage: 'https://cdn.kiripost.com/static/images/IMG_0585.2e16d0ba.fill-960x540.jpg',
  },
  {
    id: 'group',
    title: 'Group Tuk-Tuk Transportation',
    description: 'Coordinate multiple tuk-tuks for families, friends, and small groups.',
    stops: 'Multiple tuk-tuks · Group pickup · Sightseeing transfers',
    price: 'Custom quote by route and vehicle count', startingPrice: null,
    image: 'https://images.squarespace-cdn.com/content/v1/59cb18392994cadaaf15d00d/1709325052307-5O8KTLU7EAM2FBPWB5TH/english-speaking-tuk-tuk-drivers.jpg',
    backupImage: 'https://static.independent.co.uk/2025/03/06/15/13/GettyImages-1251253586.jpeg?crop=1967%2C1967%2Cx516.6%2Cy0&height=1200&width=1200',
  },
];

const privateCarServices: PrivateCarService[] = [
  {
    title: 'Private Airport Pickup',
    description: 'Your driver meets you at Siem Reap Angkor International Airport and takes you directly to your hotel.',
    stops: 'Airport arrival pickup · Flight tracking · Hotel drop-off',
    price: 'From $35 per car',
    startingPrice: 35,
    image: 'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/a3e3fa203afbf2d2.jpeg',
    backupImage: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Private Airport Drop-off',
    description: 'A private ride from your hotel to Siem Reap Angkor International Airport for your departing flight.',
    stops: 'Hotel pickup · Flight details · Airport drop-off',
    price: 'From $35 per car',
    startingPrice: 35,
    image: 'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/a3e3fa203afbf2d2.jpeg',
    backupImage: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'City Transfers',
    description: 'Door-to-door private rides around Siem Reap for dining, shopping, and local visits.',
    stops: 'Hotel pickup · Flexible drop-off · Private vehicle',
    price: 'Request a quote',
    image: 'https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3013112861/origin/4-145.jpg?type=wide',
    backupImage: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Angkor Temple Transportation',
    description: 'Private vehicle and driver for a flexible day visiting the Angkor temple area.',
    stops: 'Hotel pickup · Angkor Wat · Angkor Thom · Ta Prohm · Custom route',
    price: 'From $50 per vehicle',
    image: 'https://www.siemreapshuttle.com/wp-content/uploads/2025/08/private-driver-angkor.jpg',
    backupImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2e/d8/01/cambodia-angkor-wat-taxi.jpg?h=1200&s=1&w=1200',
  },
  {
    title: 'Family & Group Car',
    description: 'Choose a larger SUV or minivan for families and groups travelling together.',
    stops: 'SUVs · Minivans · Group pickup · Luggage space',
    price: 'From $45 per vehicle',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f8/cf/84/toyota-hiace-taxi.jpg?h=1200&s=1&w=1200',
    backupImage: 'https://www.phoadventure.com/uploads/0000/7/2026/04/30/copilot-20260430-133215.png',
  },
  {
    title: 'Intercity Transfers',
    description: 'Private long-distance transfers from Siem Reap to destinations across Cambodia.',
    stops: 'Battambang · Phnom Penh · Kampot · Custom destinations',
    price: 'From $65 per vehicle',
    image: 'https://vietnambudgetcarrental.com/vnt_upload/carrental/12_2023/private-car-phnom-penh-to-ho-chi-minh_1.jpg',
    backupImage: 'https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3013112861/origin/10-145.jpg?type=wide',
  },
  {
    title: 'Private Car with Driver',
    description: 'Keep a private driver for a half-day or full-day itinerary with planned stops.',
    stops: '4-hour hire · 8-hour hire · Additional stops by arrangement',
    price: 'Request a quote',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    backupImage: 'https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3013112861/origin/4-145.jpg?type=wide',
  },
];

function TukTukServiceImage({ service }: { service: Pick<TukTukService, 'title' | 'image' | 'backupImage'> }) {
  const [source, setSource] = useState(service.image);
  const [usingBackup, setUsingBackup] = useState(false);
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="flex h-full items-center justify-center bg-clay-100 text-clay-500"><Car className="h-12 w-12" aria-hidden="true" /></div>;
  return <img src={source} alt={`${service.title} in Siem Reap`} loading="lazy" className="h-full w-full object-cover" onError={() => {
    if (usingBackup) setFailed(true);
    else { setUsingBackup(true); setSource(service.backupImage); }
  }} />;
}

export type RentalBike = {
  name: string;
  transmission: 'Full automatic' | 'Semi automatic';
  price: number;
  image: string;
  backupImage: string;
};

export type BicycleRental = {
  name: string;
  brand: string;
  price: number;
  image: string;
  backupImage: string;
  included: string;
};

const bicycleRentals: BicycleRental[] = [
  { name: 'Mountain Bike', brand: 'GIANT', price: 6, image: 'https://www.angkorcyclingtour.asia/uploads/images/Gallery/Bike-Rental-Type/4.jpg', backupImage: 'https://travellinggizzard.com/content/images/2024/02/siem-reap-bicycle-rental.jpg', included: 'Helmet and keylock' },
  { name: 'Mountain Bike', brand: 'TREK', price: 12, image: 'https://travellinggizzard.com/content/images/2024/02/siem-reap-bicycle-rental.jpg', backupImage: 'https://cdn.getyourguide.com/img/tour/5e9164b3aa94f.jpeg/145.jpg', included: 'Helmet and keylock' },
  { name: 'Road Bike', brand: 'GIANT', price: 30, image: 'https://d1mgeijqpfaspl.cloudfront.net/uploads/bike/media/533657/a964bf4e-64e2-41ec-afa9-b4da82ec59ba.webp', backupImage: 'https://www.cambodiacycling.com/images/cambodia_cycling_bikes.jpg', included: 'Helmet and keylock' },
  { name: 'Tandem Bike', brand: 'ASAMA', price: 10, image: 'https://www.angkorcyclingtour.asia/uploads/images/Gallery/Bike-Rental-Type/5.jpg', backupImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/60/5b/29/asia-private-guide-service.jpg?h=-1&s=1&w=1200', included: 'Helmet and keylock' },
  { name: 'Mountain Bike Tag Along', brand: 'GIANT', price: 12, image: 'https://www.angkorcyclingtour.asia/uploads/images/Gallery/Bike-Rental-Type/1.jpg', backupImage: 'https://cdn.getyourguide.com/img/tour/5e9164b3aa94f.jpeg/145.jpg', included: 'Helmet and keylock' },
  { name: 'Mountain Bike with Child Seat', brand: 'GIANT', price: 9, image: 'https://media.karousell.com/media/photos/products/2023/9/4/decathlon_btwin_rockrider_moun_1693830630_b93dc091.jpg', backupImage: 'https://content.booqablecdn.com/uploads/e675eb185bf4ccd77430db8452072799/photo/photo/767ed4d7-2226-4ee4-a7fd-1181ac232f3b/large_1709037350-566811196461658-0004-9278/upload.jpg', included: 'Helmet, keylock, and child seat' },
  { name: 'Mountain Bike with Child Seat', brand: 'TREK', price: 15, image: 'https://www.bolha.com/image-w920x690/gorska-kolesa/unisex-kolo-trek-slika-56804360.jpg', backupImage: 'https://media.karousell.com/media/photos/products/2023/10/17/medium_size_decathlon_btwin_ro_1697531353_ee8d7600_progressive.jpg', included: 'Helmet, keylock, and child seat' },
  { name: 'Touring Bike', brand: 'Brand not specified', price: 6, image: 'https://saigonbikeshop.com/sites/default/files/inline-images/Touring-bicycels-rental_0.jpg', backupImage: 'https://www.hamal.jp/bike-touring.webp', included: 'Helmet and keylock' },
  { name: 'City Bike', brand: '3 gears, basket & automatic light', price: 3, image: 'https://res.klook.com/image/upload/w_750%2Ch_469%2Cc_fill%2Cq_85/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/g0eyca35rt7qeenxt2g4.jpg', backupImage: 'https://res.klook.com/images/fl_lossy.progressive%2Cq_65/c_fill%2Cw_1295%2Ch_720/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/g0eyca35rt7qeenxt2g4/%E3%82%B7%E3%82%A7%E3%83%A0%E3%83%AA%E3%82%A2%E3%83%83%E3%83%97%E8%87%AA%E8%BB%A2%E8%BB%8A%E3%83%AC%E3%83%B3%E3%82%BF%E3%83%AB.jpg', included: 'Keylock; helmet not listed by the shop' },
];

const rentalBikes: RentalBike[] = [
  {
    name: 'Honda Zoomer X 110cc', transmission: 'Full automatic', price: 10,
    image: 'https://global.honda/content/dam/site/global-jp/news-new/cq_img/2013/2130522-zoomerx_01.jpg',
    backupImage: 'https://xedienbaonam.com/mediacenter/media/images/1550/products/1550/2841/s1000_1000/xe-ga-honda-zoomer-x-110cc-mau-vang-1611734922.png',
  },
  {
    name: 'Honda Scoopy 110cc (2026)', transmission: 'Full automatic', price: 15,
    image: 'https://cdn.riderly.com/storage/media/img/bikes/honda__scoopy_110__f1b7151d.png',
    backupImage: 'https://s3storage.2banh.vn/image/2025/11/honda-scoopy-2026-doi-mau-cuc-chat-voi-giao-dien-moi-qua-dep-khien-ban-cu-lep-ve-115062-1763226791-6918b4a7356bd.jpg',
  },
  {
    name: 'Honda Click 125cc', transmission: 'Full automatic', price: 10,
    image: 'https://cdn.ennxo.com/uploads/products/640/0e381a0939514f0cb904cfb0ef215129.jpg',
    backupImage: 'https://space-cdn.smokybike.com/smokybike.com-prod/listings/136644/conversions/2020_0224_08444900-large.jpg',
  },
  {
    name: 'Honda Click 125cc Gen 5', transmission: 'Full automatic', price: 13,
    image: 'https://used.com.ph/uploads/images/6409e7e4cc4e9.jpg',
    backupImage: 'https://media.karousell.com/media/photos/products/2021/9/19/2021_honda_click_125i_1632054101_a0986a58_progressive.jpg',
  },
  {
    name: 'Honda PCX', transmission: 'Full automatic', price: 15,
    image: 'https://asset.astra-honda.com/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png',
    backupImage: 'https://hondanorteshopp.com.br/assets/pcx160-BogrClqm.jpg',
  },
  {
    name: 'Yamaha PG1 115cc (2026)', transmission: 'Semi automatic', price: 18,
    image: 'https://storagetym.blob.core.windows.net/www2021/images/product-2021/commuter/model-year-2025/pg-1-2025/lineup-360-gray-misty/12.png?sfvrsn=dbf4631f_2',
    backupImage: 'https://cdn.hstatic.net/products/200000079149/pg1-black-002_558e9c3045ab4d4e919ad8264fb15f38_master.jpg',
  },
  {
    name: 'Honda ADV 160cc (2026)', transmission: 'Full automatic', price: 45,
    image: 'https://imotorbike-wp-media.s3.ap-southeast-1.amazonaws.com/2024/11/image-45-1024x683.png',
    backupImage: 'https://img.webike-cdn.net/moto_img/cg/12/11249/85fc27687f4c873d1b4d7020ae.jpg',
  },
  {
    name: 'Honda Dream 125cc', transmission: 'Semi automatic', price: 10,
    image: 'https://cdn.24h.com.vn/upload/3-2025/images/2025-07-27/Huyen-thoai-2025-Honda-Dream-rao-ban-hon-2000-USD-o-Campuchia-dream6-1753617605-917-width740height570.jpg',
    backupImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Honda.Dream.125.cc.2006.Cambodge.jpg',
  },
];

function RentalBikeImage({ bike }: { bike: RentalBike }) {
  const [source, setSource] = useState(bike.image);
  const [usingBackup, setUsingBackup] = useState(false);
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="flex h-full items-center justify-center bg-clay-100 text-clay-500"><Bike className="h-12 w-12" aria-hidden="true" /></div>;
  }
  return (
    <img
      src={source}
      alt={`${bike.name} rental motorcycle`}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      onError={() => {
        if (!usingBackup) {
          setUsingBackup(true);
          setSource(bike.backupImage);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

function BicycleImage({ bicycle }: { bicycle: BicycleRental }) {
  const [source, setSource] = useState(bicycle.image);
  const [usingBackup, setUsingBackup] = useState(false);
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="flex h-full items-center justify-center bg-clay-100 text-clay-500"><Bike className="h-12 w-12" aria-hidden="true" /></div>;
  return <img src={source} alt={`${bicycle.brand} ${bicycle.name} rental bicycle`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" onError={() => {
    if (usingBackup) setFailed(true);
    else { setUsingBackup(true); setSource(bicycle.backupImage); }
  }} />;
}

const filterLabels: Record<TransportationFilter, string> = {
  all: 'All Transportation',
  'tuk-tuk': 'Tuk-Tuk',
  'private-car': 'Private Car',
  minivan: 'Bus & Minivan Transfers',
  bicycle: 'Bicycle Rental',
  motorcycle: 'Motorcycle & Scooter Rental',
};

const services: TransportationService[] = [
  {
    category: 'tuk-tuk',
    label: 'Classic Siem Reap',
    title: 'Tuk-Tuk Rides',
    description: 'The easy, open-air way to move through town, visit nearby temples, and enjoy the evening breeze.',
    details: 'Up to 4 guests',
    icon: Car,
    accent: 'bg-gold-100 text-gold-800',
  },
  {
    category: 'private-car',
    label: 'Comfort & privacy',
    title: 'Private Car',
    description: 'Travel in cool comfort with a dedicated driver for temple days, city trips, and custom stops.',
    details: 'Up to 3 guests',
    icon: Car,
    accent: 'bg-brand-50 text-brand-700',
  },
  {
    category: 'minivan',
    label: 'Room for everyone',
    title: 'Minivan',
    description: 'A practical choice for families and small groups with room for luggage and a flexible itinerary.',
    details: 'Up to 10 guests',
    icon: Bus,
    accent: 'bg-clay-100 text-clay-800',
  },
  {
    category: 'bicycle',
    label: 'Slow travel',
    title: 'Bicycle Rental',
    description: 'Explore quiet lanes, local neighborhoods, and the countryside at your own pace.',
    details: 'Daily rental available',
    icon: Bike,
    accent: 'bg-gold-100 text-gold-800',
  },
  {
    category: 'motorcycle',
    label: 'Go further',
    title: 'Motorcycle & Scooter Rental',
    description: 'A flexible way for confident riders to discover the town and surrounding countryside.',
    details: 'Helmet included',
    icon: Bike,
    accent: 'bg-clay-100 text-clay-800',
  },
];

type Props = {
  onBookRental: (rental: RentalBike) => void;
  onBookBicycle: (bicycle: BicycleRental) => void;
  onBookTukTuk: (service: TukTukService) => void;
  onRequestPrivateCar: (service: PrivateCarService) => void;
};

function AllTransportationCatalog({ onBookRental, onBookBicycle, onBookTukTuk, onRequestPrivateCar }: Props) {
  return (
    <div className="mt-12 space-y-14">
      <div>
        <h3 className="mb-5 font-display text-2xl font-bold text-brand-950">Tuk-Tuk services</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tukTukServices.map((service) => (
          <article key={service.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
            <div className="h-52 overflow-hidden bg-clay-100"><TukTukServiceImage service={service} /></div>
            <div className="flex flex-1 flex-col p-5"><span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Tuk-Tuk service</span><h4 className="mt-2 font-display text-xl font-bold text-brand-900">{service.title}</h4><p className="mt-2 text-sm leading-relaxed text-clay-600">{service.description}</p><p className="mt-3 flex-1 text-sm leading-relaxed text-clay-700"><strong>Options:</strong> {service.stops}</p><div className="mt-4 flex justify-between border-t border-clay-100 pt-4 text-sm"><strong className="text-brand-800">Pickup & drop-off</strong><strong className="text-gold-600">{service.price}</strong></div><button type="button" onClick={() => onBookTukTuk(service)} className="mt-4 w-full rounded-xl bg-gold-500 px-4 py-2.5 font-semibold text-brand-950 hover:bg-gold-400">Request this Tuk-Tuk <ArrowRight className="ml-1 inline h-4 w-4" /></button></div>
          </article>
        ))}</div>
      </div>

      <div>
        <h3 className="mb-5 font-display text-2xl font-bold text-brand-950">Private car services</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{privateCarServices.map((service) => (
          <article key={service.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
            <div className="h-52 overflow-hidden bg-clay-100"><TukTukServiceImage service={service} /></div>
            <div className="flex flex-1 flex-col p-5"><span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Private car service</span><h4 className="mt-2 font-display text-xl font-bold text-brand-900">{service.title}</h4><p className="mt-2 text-sm leading-relaxed text-clay-600">{service.description}</p><p className="mt-3 flex-1 text-sm leading-relaxed text-clay-700"><strong>Options:</strong> {service.stops}</p><div className="mt-4 flex justify-between border-t border-clay-100 pt-4 text-sm"><strong className="text-brand-800">Pickup & drop-off</strong><strong className="text-gold-600">{service.price}</strong></div><button type="button" onClick={() => onRequestPrivateCar(service)} className="mt-4 w-full rounded-xl bg-gold-500 px-4 py-2.5 font-semibold text-brand-950 hover:bg-gold-400">Request this car <ArrowRight className="ml-1 inline h-4 w-4" /></button></div>
          </article>
        ))}</div>
      </div>

      <div>
        <h3 className="font-display text-2xl font-bold text-brand-950">Bus & minivan transfers</h3>
        <p className="mt-1 text-sm text-clay-600">Search routes, dates, reference fares, and vehicle options.</p>
        <IntercityBusBooking />
      </div>

      <div>
        <h3 className="mb-5 font-display text-2xl font-bold text-brand-950">Bicycle rentals</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{bicycleRentals.map((bicycle) => (
          <article key={`${bicycle.brand}-${bicycle.name}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"><div className="h-52 overflow-hidden bg-clay-100"><BicycleImage bicycle={bicycle} /></div><div className="flex flex-1 flex-col p-5"><span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Bicycle rental · {bicycle.brand}</span><h4 className="mt-2 font-display text-xl font-bold text-brand-900">{bicycle.name}</h4><p className="mt-2 flex-1 text-sm text-clay-600">{bicycle.included}</p><div className="mt-4 flex items-center justify-between border-t border-clay-100 pt-4"><strong className="text-brand-800">${bicycle.price} / day</strong><button type="button" onClick={() => onBookBicycle(bicycle)} className="font-semibold text-gold-600">Request <ArrowRight className="ml-1 inline h-4 w-4" /></button></div></div></article>
        ))}</div>
      </div>

      <div>
        <h3 className="mb-5 font-display text-2xl font-bold text-brand-950">Motorcycle & scooter rentals</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{rentalBikes.map((bike) => (
          <article key={bike.name} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"><div className="h-52 overflow-hidden bg-clay-100"><RentalBikeImage bike={bike} /></div><div className="flex flex-1 flex-col p-5"><span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Motorcycle & scooter rental</span><h4 className="mt-2 font-display text-xl font-bold text-brand-900">{bike.name}</h4><p className="mt-2 flex-1 text-sm text-clay-600">{bike.transmission} · Helmet and phone holder included</p><div className="mt-4 flex items-center justify-between border-t border-clay-100 pt-4"><strong className="text-brand-800">${bike.price} / day</strong><button type="button" onClick={() => onBookRental(bike)} className="font-semibold text-gold-600">Request <ArrowRight className="ml-1 inline h-4 w-4" /></button></div></div></article>
        ))}</div>
      </div>
    </div>
  );
}

export default function Transportation({ onBookRental, onBookBicycle, onBookTukTuk, onRequestPrivateCar }: Props) {
  const [filter, setFilter] = useState<TransportationFilter>('all');
  const [detailBike, setDetailBike] = useState<RentalBike | null>(null);
  const [detailBicycle, setDetailBicycle] = useState<BicycleRental | null>(null);
  const categories = Object.keys(filterLabels) as TransportationFilter[];
  const visible = filter === 'all' ? services : services.filter((service) => service.category === filter);

  return (
    <section id="transportation" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Transportation</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-950 sm:text-4xl">
            Every Way to Get Around Siem Reap
          </h2>
          <p className="mt-4 leading-relaxed text-clay-600">
            From a breezy tuk-tuk ride to a private airport pickup, choose the transport that fits your day.
            Every service is arranged with trusted local drivers and clear communication.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all sm:px-5 ${
                filter === category
                  ? 'bg-gold-500 text-brand-950 shadow-md'
                  : 'bg-clay-50 text-clay-700 hover:bg-brand-50'
              }`}
            >
              {filterLabels[category]}
            </button>
          ))}
        </Reveal>

        {filter === 'all' ? (
          <AllTransportationCatalog onBookRental={onBookRental} onBookBicycle={onBookBicycle} onBookTukTuk={onBookTukTuk} onRequestPrivateCar={onRequestPrivateCar} />
        ) : filter === 'motorcycle' ? (
          <>
            <p className="mt-10 text-center text-sm text-clay-600">
              Daily rates are for 24 hours. Rentals of 3 days or more receive 10% off or more. Every rental includes helmets, a phone holder, and free hotel delivery.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rentalBikes.map((bike, index) => (
                <Reveal key={bike.name} delay={(index % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
                    <div className="h-52 overflow-hidden bg-clay-100">
                      <RentalBikeImage bike={bike} />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Motorcycle & scooter rental</span>
                      <h3 className="mt-2 font-display text-xl font-bold text-brand-900">{bike.name}</h3>
                      <p className="mt-2 text-sm text-clay-600">{bike.transmission} · 24-hour rental</p>
                      <div className="mt-5 flex items-end justify-between border-t border-clay-100 pt-4">
                        <p className="font-display text-2xl font-bold text-brand-950">${bike.price}<span className="ml-1 font-sans text-sm font-normal text-clay-600">/ day</span></p>
                        <button type="button" onClick={() => setDetailBike(bike)} className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all group-hover:gap-2">
                          Rental details <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-clay-500">
              Rates and rental terms are from WE Scooter Rental Siem Reap. Confirm availability and current offers with the rental shop.
            </p>
          </>
        ) : filter === 'minivan' ? (
          <>
            <p className="mt-10 text-center text-sm text-clay-600">
              Search intercity routes, select a bus or minivan, and send TOS a booking request for confirmation.
            </p>
            <IntercityBusBooking />
          </>
        ) : filter === 'private-car' ? (
          <>
            <p className="mt-10 text-center text-sm text-clay-600">
              Choose a private car service and send us your trip details. We’ll confirm the vehicle and final fare before your ride.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {privateCarServices.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
                    <div className="h-52 overflow-hidden bg-clay-100">
                      <TukTukServiceImage service={service} />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Private car service</span>
                      <h3 className="mt-2 font-display text-xl font-bold text-brand-900">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-clay-600">{service.description}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-clay-700"><span className="font-semibold">Options:</span> {service.stops}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-clay-100 pt-4">
                        <span className="text-sm font-semibold text-brand-800">Pickup & drop-off available</span>
                        <span className="text-right text-sm font-semibold text-gold-600">{service.price}</span>
                      </div>
                      <button type="button" onClick={() => onRequestPrivateCar(service)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 py-2.5 font-semibold text-brand-950 transition hover:bg-gold-400">
                        Request this car <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        ) : filter === 'tuk-tuk' ? (
          <>
            <p className="mt-10 text-center text-sm text-clay-600">
              Choose a tuk-tuk ride for the city, temples, countryside, airport, evening plans, or group travel. Pickup and drop-off can be arranged for each service.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tukTukServices.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
                    <div className="h-52 overflow-hidden bg-clay-100">
                      <TukTukServiceImage service={service} />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Tuk-Tuk service</span>
                      <h3 className="mt-2 font-display text-xl font-bold text-brand-900">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-clay-600">{service.description}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-clay-700"><span className="font-semibold">Options:</span> {service.stops}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-clay-100 pt-4">
                        <span className="text-sm font-semibold text-brand-800">Pickup & drop-off available</span>
                        <span className="text-right text-sm font-semibold text-gold-600">{service.price}</span>
                      </div>
                      <button type="button" onClick={() => onBookTukTuk(service)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-4 py-2.5 font-semibold text-brand-950 transition hover:bg-gold-400">
                        Book this Tuk-Tuk <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        ) : filter === 'bicycle' ? (
          <>
            <p className="mt-10 text-center text-sm text-clay-600">
              Bicycle rentals are charged by the day. Helmets and keylocks are included on listed models; free town delivery is available except for the City Bike.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bicycleRentals.map((bicycle, index) => (
                <Reveal key={`${bicycle.brand}-${bicycle.name}`} delay={(index % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
                    <div className="h-52 overflow-hidden bg-clay-100"><BicycleImage bicycle={bicycle} /></div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Bicycle rental · {bicycle.brand}</span>
                      <h3 className="mt-2 font-display text-xl font-bold text-brand-900">{bicycle.name}</h3>
                      <p className="mt-2 text-sm text-clay-600">{bicycle.included}</p>
                      <div className="mt-5 flex items-end justify-between border-t border-clay-100 pt-4">
                        <p className="font-display text-2xl font-bold text-brand-950">${bicycle.price}<span className="ml-1 font-sans text-sm font-normal text-clay-600">/ day</span></p>
                        <button type="button" onClick={() => setDetailBicycle(bicycle)} className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all group-hover:gap-2">
                          Rental details <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-clay-500">Prices and terms are from Angkor Cycling Tour. Final availability and the bike size are confirmed after your request.</p>
          </>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.category} delay={(index % 3) * 80}>
                  <article className="group flex h-full flex-col rounded-2xl border border-clay-100 bg-clay-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.accent}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-clay-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-clay-600">
                      {service.label}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-brand-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-clay-600">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-clay-200 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-clay-500">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {service.details}
                    </span>
                    <a href="#contact" className="flex items-center gap-1 text-sm font-semibold text-gold-400 transition-all group-hover:gap-2">
                      Enquire <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
      {detailBike && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-brand-950/70 p-4 backdrop-blur-sm" onClick={() => setDetailBike(null)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="rental-detail-title"
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" aria-label="Close rental details" onClick={() => setDetailBike(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-brand-900 shadow hover:bg-white">
              <X className="h-5 w-5" />
            </button>
            <div className="h-56 bg-clay-100 sm:h-72"><RentalBikeImage bike={detailBike} /></div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Motorcycle & scooter rental</p>
              <h2 id="rental-detail-title" className="mt-2 font-display text-2xl font-bold text-brand-950 sm:text-3xl">{detailBike.name}</h2>
              <p className="mt-2 text-clay-600">{detailBike.transmission} · 24-hour rental</p>
              <p className="mt-4 font-display text-2xl font-bold text-brand-950">${detailBike.price}<span className="ml-1 font-sans text-base font-normal text-clay-600">/ day</span></p>

              <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                <h3 className="font-semibold text-brand-900">Rental details & policies</h3>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-clay-700">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Rental period is 24 hours per day.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />The shop advertises 10% off or more for rentals of 3 days or longer; final discount is confirmed with availability.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Helmet, phone holder, and delivery to your hotel are included.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Each rider must provide a passport or Cambodian ID card with the booking request.</li>
                </ul>
                <p className="mt-4 border-t border-brand-100 pt-3 text-xs leading-relaxed text-clay-600">
                  We’ll confirm availability and any additional rental requirements, deposit, and final price after you send a booking request.
                </p>
              </div>

              <button
                type="button"
                onClick={() => { onBookRental(detailBike); setDetailBike(null); }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-brand-950 shadow transition hover:bg-gold-400"
              >
                Book Now <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>
        </div>
      )}
      {detailBicycle && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-brand-950/70 p-4 backdrop-blur-sm" onClick={() => setDetailBicycle(null)}>
          <section role="dialog" aria-modal="true" aria-labelledby="bicycle-detail-title" className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close bicycle rental details" onClick={() => setDetailBicycle(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-brand-900 shadow hover:bg-white"><X className="h-5 w-5" /></button>
            <div className="h-56 bg-clay-100 sm:h-72"><BicycleImage bicycle={detailBicycle} /></div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Bicycle rental · {detailBicycle.brand}</p>
              <h2 id="bicycle-detail-title" className="mt-2 font-display text-2xl font-bold text-brand-950 sm:text-3xl">{detailBicycle.name}</h2>
              <p className="mt-2 text-clay-600">{detailBicycle.included}</p>
              <p className="mt-4 font-display text-2xl font-bold text-brand-950">${detailBicycle.price}<span className="ml-1 font-sans text-base font-normal text-clay-600">/ day</span></p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                <h3 className="font-semibold text-brand-900">Rental details & policies</h3>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-clay-700">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Minimum charge is one day, from 7:00 AM to 9:00 PM.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />A refundable deposit may be left as a passport, driving license, identity card, or cash.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Free delivery in town, except for City Bikes. Mechanic support is included at no extra charge, except for City Bikes.</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />For a sunrise ride, the bike can be collected the evening before at no extra charge.</li>
                </ul>
              </div>
              <button type="button" onClick={() => { onBookBicycle(detailBicycle); setDetailBicycle(null); }} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-brand-950 shadow transition hover:bg-gold-400">
                Book Now <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
