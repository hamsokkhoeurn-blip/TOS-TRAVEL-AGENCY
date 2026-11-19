import { useEffect, useState, type FormEvent } from 'react';
import { CalendarDays, Users } from 'lucide-react';
import type { Tour } from '@/lib/types';
import { apiFetch } from '@/lib/api';
import { todayIso } from '@/lib/dates';
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


type Props = {
  tours: Tour[];
  selectedTour: Tour | null;
  onChangeTour: (slug: string) => void;
};

type Form = ContactValues & {
  tour_date: string;
  guests: number;
  hotel_name: string;
};

const emptyForm: Form = {
  tour_date: '',
  guests: 2,
  full_name: '',
  email: '',
  phone: '',
  hotel_name: '',
};

export default function TourForm({ tours, selectedTour, onChangeTour }: Props) {
  const [form, setForm] = useState<Form>(emptyForm);
  const [vehicleOptionId, setVehicleOptionId] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const tour = selectedTour ?? tours[0];
  const vehicleOptions = tour?.vehicle_options ?? [];
  const vehicleOption = vehicleOptions.find((option) => option.id === vehicleOptionId) ?? vehicleOptions[0];
  const guestLimit = vehicleOption?.capacity ?? tour?.group_size ?? undefined;
  const total = tour
    ? tour.price_basis === 'group'
      ? vehicleOption?.price ?? tour.price
      : tour.price * form.guests
    : 0;

  useEffect(() => {
    setVehicleOptionId(tour?.vehicle_options?.[0]?.id ?? '');
    setForm((current) => ({ ...current, guests: tour?.group_size ? Math.min(current.guests, tour.group_size) : current.guests }));
  }, [tour?.slug]);

  function setField<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function reset() {
    setForm(emptyForm);
    setStatus('idle');
    setErrorMsg('');
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    if (!tour) {
      setErrorMsg('Please select a tour first.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await apiFetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          tour_id: tour.id,
          tour_date: form.tour_date,
          guests: form.guests,
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          hotel_name: form.hotel_name.trim() || null,
          vehicle_option: vehicleOption?.id ?? null,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const validationErrors = result.errors
          ? Object.values(result.errors).flat().join(' ')
          : '';

        throw new Error(
          validationErrors || result.message || 'We could not save your booking. Please try again.'
        );
      }

      setStatus('done');
    } catch (error) {
      console.error('Booking error:', error);

      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'We could not connect to the booking server. Please try again.'
      );

      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <SuccessCard
        title="Booking received!"
        message={
          <>
            Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We have your request for{' '}
            <strong>{tour?.name}</strong> and will confirm by email at {form.email} shortly.
          </>
        }
        onReset={reset}
        resetLabel="Make another booking"
      />
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <BookingField label="Choose your tour">
        <select
          value={tour?.slug ?? ''}
          onChange={(e) => onChangeTour(e.target.value)}
          className={inputClass}
          required
        >
          {tours.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.name} — ${t.price} / {t.price_basis === 'group' ? (t.vehicle_options?.length ? 'vehicle' : 'group') : 'person'}
            </option>
          ))}
        </select>
      </BookingField>

      {vehicleOptions.length > 0 && (
        <BookingField label="Choose your private vehicle">
          <select
            value={vehicleOption?.id ?? ''}
            onChange={(event) => {
              const option = vehicleOptions.find((item) => item.id === event.target.value);
              setVehicleOptionId(event.target.value);
              if (option) setForm((current) => ({ ...current, guests: Math.min(current.guests, option.capacity) }));
            }}
            className={inputClass}
            required
          >
            {vehicleOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name} · up to {option.capacity} guests · ${option.price} total
              </option>
            ))}
          </select>
        </BookingField>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" /> Tour date
            </span>
          }
        >
          <input
            type="date"
            required
            min={todayIso()}
            value={form.tour_date}
            onChange={(e) => setField('tour_date', e.target.value)}
            className={inputClass}
          />
        </BookingField>

        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {tour?.price_basis === 'group' ? 'Guests in your group' : 'Seats to book'}{guestLimit ? ` (max ${guestLimit})` : ''}
            </span>
          }
        >
          <input
            type="number"
            required
            min={1}
            max={guestLimit}
            value={form.guests}
            onChange={(e) => setField('guests', Number(e.target.value))}
            className={inputClass}
          />
        </BookingField>
      </div>

      <ContactFields
        values={form}
        onChange={(key, value) => setField(key, value)}
      />

      <BookingField
        label={
          <>
            Hotel name <span className="font-normal text-clay-400">(optional)</span>
          </>
        }
      >
        <input
          type="text"
          placeholder="Where we pick you up"
          value={form.hotel_name}
          onChange={(e) => setField('hotel_name', e.target.value)}
          className={inputClass}
        />
      </BookingField>

      {tour && (
        <TotalBar
          label={tour.price_basis === 'group' ? `$${total} fixed price for your ${vehicleOption ? vehicleOption.name : 'private group'}` : `$${tour.price} × ${form.guests} seat${form.guests > 1 ? 's' : ''}`}
          amount={total}
        />
      )}

      {status === 'error' && <ErrorNotice message={errorMsg} />}

      <SubmitButton
        submitting={status === 'submitting'}
        label="Request Booking — Pay Later"
        submittingLabel="Sending booking..."
      />
    </form>
  );
}
