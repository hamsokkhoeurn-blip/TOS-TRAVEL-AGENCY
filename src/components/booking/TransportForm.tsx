import { useEffect, useState, type FormEvent } from 'react';
import { CalendarDays, Users } from 'lucide-react';
import { todayIso } from '@/lib/dates';
import { apiFetch } from '@/lib/api';
import type { BicycleRental, PrivateCarService, RentalBike, TukTukService } from '../Transportation';
import {
  BookingField,
  ContactFields,
  ErrorNotice,
  inputClass,
  SubmitButton,
  SuccessCard,
  TotalBar,
  type ContactValues,
} from './BookingFormParts';


const PRICE_PER_VEHICLE = 25;
const GUESTS_PER_VEHICLE = 3;
const MAX_PASSENGERS = 12;
const SERVICE_NAME = 'Private airport & city transfer';

type Form = ContactValues & {
  service_date: string;
  passengers: number;
  pickup_location: string;
  dropoff_address: string;
  rental_days: number;
  rider_heights: string;
  flight_number: string;
  arrival_time: string;
  departure_time: string;
};

const emptyForm: Form = {
  service_date: '',
  passengers: 2,
  full_name: '',
  email: '',
  phone: '',
  pickup_location: '',
  dropoff_address: '',
  rental_days: 1,
  rider_heights: '',
  flight_number: '',
  arrival_time: '',
  departure_time: '',
};

export default function TransportForm({ rental, bicycle, tukTuk, privateCar }: { rental: RentalBike | null; bicycle: BicycleRental | null; tukTuk: TukTukService | null; privateCar: PrivateCarService | null }) {
  const hasRental = Boolean(rental || bicycle);
  const isAirportPickup = privateCar?.title === 'Private Airport Pickup';
  const isAirportDropoff = privateCar?.title === 'Private Airport Drop-off';
  const isAirportTransfer = isAirportPickup || isAirportDropoff;
  const [form, setForm] = useState<Form>(() => ({ ...emptyForm, passengers: hasRental ? 1 : 2 }));
  const [identityDocuments, setIdentityDocuments] = useState<File[]>([]);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'done' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const vehicles = Math.max(
    1,
    Math.ceil(form.passengers / GUESTS_PER_VEHICLE)
  );

  const rentalPrice = rental?.price ?? bicycle?.price;
  const total = rentalPrice !== undefined
    ? rentalPrice * form.rental_days * form.passengers
    : privateCar?.startingPrice ?? PRICE_PER_VEHICLE * vehicles;

  useEffect(() => {
    setForm((current) => ({ ...current, passengers: hasRental ? 1 : 2, rental_days: 1, rider_heights: '' }));
    setIdentityDocuments([]);
    setStatus('idle');
    setErrorMsg('');
  }, [rental?.name, bicycle?.name, privateCar?.title]);

  function setField<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function reset() {
    setForm({ ...emptyForm, passengers: hasRental ? 1 : 2 });
    setIdentityDocuments([]);
    setErrorMsg('');
    setStatus('idle');
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    if (hasRental && identityDocuments.length !== form.passengers) {
      setStatus('error');
      setErrorMsg(`Upload one passport or Cambodian ID card for each of the ${form.passengers} riders.`);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const payload = {
        category: 'transportation',
        service_name: rental ? `${rental.name} rental` : bicycle ? `${bicycle.brand} ${bicycle.name} bicycle hire` : tukTuk ? tukTuk.title : privateCar?.title ?? SERVICE_NAME,
        service_date: form.service_date,
        guests: form.passengers,
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
          pickup_location: isAirportPickup ? 'Siem Reap Angkor International Airport' : form.pickup_location.trim(),
        message: rental
          ? `${form.passengers} motorbike${form.passengers > 1 ? 's' : ''} for ${form.rental_days} day${form.rental_days > 1 ? 's' : ''} at ${rental.price}/day; confirm any multi-day discount`
          : bicycle
            ? `${form.passengers} bicycle${form.passengers > 1 ? 's' : ''} for ${form.rental_days} day${form.rental_days > 1 ? 's' : ''}; rider height(s): ${form.rider_heights.trim()}`
            : tukTuk ? `${tukTuk.stops}; quoted fare: ${tukTuk.price}`
              : privateCar ? `${privateCar.stops}; ${form.passengers} passenger${form.passengers > 1 ? 's' : ''}${isAirportPickup ? `; flight number: ${form.flight_number.trim()}; arrival time: ${form.arrival_time}; hotel drop-off: ${form.dropoff_address.trim()}` : ''}${isAirportDropoff ? `; flight number: ${form.flight_number.trim()}; departure time: ${form.departure_time}; hotel pickup: ${form.pickup_location.trim()}; airport drop-off: Siem Reap Angkor International Airport` : ''}; requested service: ${privateCar.title}`
                : `${vehicles} vehicle${vehicles > 1 ? 's' : ''}`,
        total_price: tukTuk?.startingPrice ?? total,
      };
      const requestBody = new FormData();
      Object.entries(payload).forEach(([key, value]) => requestBody.append(key, String(value)));
      if (hasRental) identityDocuments.forEach((document) => requestBody.append('identity_documents[]', document));

      const response = await apiFetch('/service-requests', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: requestBody,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          const firstError = Object.values(result.errors)
            .flat()
            .find((message) => typeof message === 'string');

          throw new Error(
            typeof firstError === 'string'
              ? firstError
              : 'Please check your booking information.'
          );
        }

        throw new Error(
          result.message ||
            'We could not save your request. Please try again.'
        );
      }

      setStatus('done');
    } catch (error) {
      console.error('Transportation booking error:', error);

      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Unable to connect to the server. Please try again.'
      );

      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <SuccessCard
        title={hasRental ? 'Rental request received!' : 'Transfer request received!'}
        message={
          rental ? (
            <>
              Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We’ll confirm availability and the final price for{' '}
              <strong>{form.passengers} {rental.name}</strong> for {form.rental_days} day{form.rental_days > 1 ? 's' : ''}, with delivery to{' '}
              <strong>{form.pickup_location.trim() || 'your hotel'}</strong>, by email at {form.email}.
            </>
          ) : bicycle ? (
            <>
              Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We’ll confirm availability and the final price for{' '}
              <strong>{form.passengers} {bicycle.brand} {bicycle.name}</strong> for {form.rental_days} day{form.rental_days > 1 ? 's' : ''}, and check sizing for riders {form.rider_heights}, by email at {form.email}.
            </>
          ) : privateCar ? (
            <>
              Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We’ll arrange {isAirportDropoff ? 'your hotel pickup and airport drop-off' : 'a pickup from Siem Reap Angkor International Airport'}{' '}
              {isAirportPickup && <>for flight <strong>{form.flight_number}</strong>, arriving at <strong>{form.arrival_time}</strong>, with hotel drop-off at <strong>{form.dropoff_address}</strong>. </>}
              {isAirportDropoff && <>for flight <strong>{form.flight_number}</strong>, departing at <strong>{form.departure_time}</strong>. </>}
              We’ll confirm the final details by email at {form.email}.
            </>
          ) : (
            <>
              Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We will
              confirm your pickup from{' '}
              <strong>{form.pickup_location.trim() || 'your location'}</strong>{' '}
              by email at {form.email} shortly.
            </>
          )
        }
        onReset={reset}
        resetLabel="Make another request"
      />
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {hasRental ? 'Rental start date' : 'Travel date'}
            </span>
          }
        >
          <input
            type="date"
            required
            min={todayIso()}
            value={form.service_date}
            onChange={(e) => setField('service_date', e.target.value)}
            className={inputClass}
          />
        </BookingField>

        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {rental ? `Motorbikes (max ${MAX_PASSENGERS})` : bicycle ? `Bicycles (max ${MAX_PASSENGERS})` : `Passengers (max ${MAX_PASSENGERS})`}
            </span>
          }
        >
          <input
            type="number"
            required
            min={1}
            max={MAX_PASSENGERS}
            value={form.passengers}
            onChange={(e) => setField('passengers', Number(e.target.value))}
            className={inputClass}
          />
        </BookingField>
      </div>

      {isAirportTransfer && (
        <div className="grid gap-4 sm:grid-cols-2">
          <BookingField label="Flight number">
            <input type="text" required placeholder="For example: K6 105" value={form.flight_number} onChange={(event) => setField('flight_number', event.target.value)} className={inputClass} />
          </BookingField>
          <BookingField label={isAirportPickup ? 'Arrival time' : 'Departure time'}>
            <input type="time" required value={isAirportPickup ? form.arrival_time : form.departure_time} onChange={(event) => setField(isAirportPickup ? 'arrival_time' : 'departure_time', event.target.value)} className={inputClass} />
          </BookingField>
        </div>
      )}

      {hasRental && (
        <BookingField label="Rental days (24 hours per day)">
          <input
            type="number"
            required
            min={1}
            max={30}
            value={form.rental_days}
            onChange={(e) => setField('rental_days', Number(e.target.value))}
            className={inputClass}
          />
          {rental && form.rental_days >= 3 && <p className="mt-1.5 text-xs text-brand-700">The rental shop advertises 10% off or more for 3+ days. We’ll confirm the final discount.</p>}
        </BookingField>
      )}

      {bicycle && (
        <BookingField label="Rider height(s) for bike sizing">
          <input type="text" required placeholder="For example: 165 cm, 172 cm" value={form.rider_heights} onChange={(e) => setField('rider_heights', e.target.value)} className={inputClass} />
        </BookingField>
      )}

      {hasRental && (
        <BookingField label="Passport or Cambodian ID card (required)">
          <input
            type="file"
            required
            multiple
            accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
            onChange={(event) => {
              const files = Array.from(event.currentTarget.files ?? []);
              if (files.some((file) => file.size > 10 * 1024 * 1024)) {
                setIdentityDocuments([]);
                event.currentTarget.value = '';
                setStatus('error');
                setErrorMsg('Each ID or passport file must be 10 MB or smaller.');
                return;
              }
              setIdentityDocuments(files);
              setStatus('idle');
              setErrorMsg('');
            }}
            className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-brand-800`}
          />
          <p className="mt-2 text-xs leading-relaxed text-clay-600">
            Upload one document per rider: passport for international visitors or Cambodian ID card for Cambodian residents. JPG, PNG, or PDF, up to 10 MB each.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-clay-500">Documents are attached to your rental request and stored privately; they are not displayed on the public website.</p>
          {identityDocuments.length > 0 && (
            <p className="mt-1 text-xs font-medium text-brand-700">{identityDocuments.length} document{identityDocuments.length === 1 ? '' : 's'} selected for {form.passengers} rider{form.passengers === 1 ? '' : 's'}.</p>
          )}
        </BookingField>
      )}

      <ContactFields
        values={form}
        onChange={(key, value) => setField(key, value)}
      />

      <BookingField label={rental ? 'Hotel / delivery address' : bicycle ? 'Hotel name & room number' : isAirportPickup ? 'Hotel drop-off address' : isAirportDropoff ? 'Hotel pickup address' : 'Pickup / drop-off location'}>
        <input
          type="text"
          required
          placeholder={rental ? 'Enter your hotel name and address' : bicycle ? 'Enter your hotel name and room number' : isAirportPickup ? 'Enter the hotel or address for airport drop-off' : isAirportDropoff ? 'Enter your hotel or pickup address' : 'Tell us your location'}
          value={isAirportPickup ? form.dropoff_address : form.pickup_location}
          onChange={(e) => setField(isAirportPickup ? 'dropoff_address' : 'pickup_location', e.target.value)}
          className={inputClass}
        />
      </BookingField>

      <TotalBar
        label={rental
          ? `$${rental.price} × ${form.rental_days} day${form.rental_days > 1 ? 's' : ''} × ${form.passengers} motorbike${form.passengers > 1 ? 's' : ''} (estimate before discount)`
          : bicycle
            ? `$${bicycle.price} × ${form.rental_days} day${form.rental_days > 1 ? 's' : ''} × ${form.passengers} bicycle${form.passengers > 1 ? 's' : ''}`
            : privateCar
              ? (privateCar.startingPrice ? `${privateCar.price} · subject to confirmation` : `${privateCar.price} · final quote confirmed by TOS`)
              : `$${PRICE_PER_VEHICLE} × ${vehicles} vehicle${vehicles > 1 ? 's' : ''} (up to ${GUESTS_PER_VEHICLE} guests each)`}
        amount={total}
      />

      {status === 'error' && <ErrorNotice message={errorMsg} />}

      <SubmitButton
        submitting={status === 'submitting'}
        label={hasRental ? 'Request Rental — Pay Later' : 'Request Transfer — Pay Later'}
        submittingLabel="Sending request..."
      />
    </form>
  );
}
