import { useEffect, useState, type FormEvent } from 'react';
import { BedDouble, CalendarDays, Moon, Users } from 'lucide-react';
import { roomTypeName, roomTypePrice, roomTypePriceLabel, type Hotel } from '@/lib/types';
import { apiFetch } from '@/lib/api';
import { isoPlus } from '@/lib/dates';
import {
  ContactFields,
  ErrorNotice,
  inputClass,
  BookingField,
  SubmitButton,
  SuccessCard,
  TotalBar,
  type ContactValues,
} from './BookingFormParts';

type Props = {
  hotels: Hotel[];
  selectedHotel: Hotel | null;
  selectedRoomType: string;
  onChangeHotel: (hotel: Hotel | null) => void;
};

type Form = ContactValues & {
  room_type: string;
  check_in: string;
  check_out: string;
  guests: number;
  rooms: number;
  message: string;
};


const emptyForm: Form = {
  room_type: '',
  check_in: '',
  check_out: '',
  guests: 2,
  rooms: 1,
  full_name: '',
  email: '',
  phone: '',
  message: '',
};

export default function AccommodationForm({
  hotels,
  selectedHotel,
  selectedRoomType,
  onChangeHotel,
}: Props) {
  const [form, setForm] = useState<Form>(emptyForm);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'done' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedRoomType) {
      setForm((current) => ({ ...current, room_type: selectedRoomType }));
    }
  }, [selectedRoomType]);

  const nights =
    form.check_in && form.check_out
      ? Math.max(
          0,
          Math.round(
            (new Date(form.check_out).getTime() -
              new Date(form.check_in).getTime()) /
              86400000
          )
        )
      : 0;

  const selectedRoom = selectedHotel?.room_types.find((room) => roomTypeName(room) === form.room_type);
  const nightlyPrice = selectedHotel
    ? selectedRoom ? roomTypePrice(selectedRoom, selectedHotel.price_from) : selectedHotel.price_from
    : 0;
  const estimate = selectedHotel
    ? nightlyPrice * nights * form.rooms
    : 0;

  function setField<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function chooseHotel(id: string) {
    onChangeHotel(hotels.find((h) => h.id === id) ?? null);
    setField('room_type', '');
  }

  function reset() {
    setForm(emptyForm);
    onChangeHotel(null);
    setErrorMsg('');
    setStatus('idle');
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    if (!selectedHotel || nights <= 0) {
      setErrorMsg('Please choose a stay and valid dates.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await apiFetch('/stay-bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          hotel_id: selectedHotel.id,
          room_type: form.room_type || null,
          check_in: form.check_in,
          check_out: form.check_out,
          guests: form.guests,
          rooms: form.rooms,
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim() || null,
        }),
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
          result.message || 'We could not save your request. Please try again.'
        );
      }

      setStatus('done');
    } catch (error) {
      console.error('Accommodation booking error:', error);

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
        title="Request received!"
        message={
          <>
            Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We will
            check availability at <strong>{selectedHotel?.name}</strong> for{' '}
            {nights} night{nights === 1 ? '' : 's'} and confirm by email at{' '}
            {form.email} shortly.
          </>
        }
        onReset={reset}
        resetLabel="Make another request"
      />
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <BookingField label="Choose your stay">
          <select
            required
            value={selectedHotel?.id ?? ''}
            onChange={(e) => chooseHotel(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Select a hotel or guesthouse
            </option>
            {hotels.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name} — ${h.price_from} / night
              </option>
            ))}
          </select>
        </BookingField>

        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" />
              Room type
            </span>
          }
        >
          <select
            value={form.room_type}
            onChange={(e) => setField('room_type', e.target.value)}
            disabled={!selectedHotel}
            className={inputClass}
          >
            <option value="">Any room type</option>
            {selectedHotel?.room_types.map((r) => (
              <option key={roomTypeName(r)} value={roomTypeName(r)}>
                {roomTypeName(r)} — {roomTypePriceLabel(r, selectedHotel.price_from)} / night
              </option>
            ))}
          </select>
        </BookingField>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              Check-in
            </span>
          }
        >
          <input
            type="date"
            required
            min={isoPlus(0)}
            value={form.check_in}
            onChange={(e) => setField('check_in', e.target.value)}
            className={inputClass}
          />
        </BookingField>

        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              Check-out
            </span>
          }
        >
          <input
            type="date"
            required
            min={form.check_in || isoPlus(1)}
            value={form.check_out}
            onChange={(e) => setField('check_out', e.target.value)}
            className={inputClass}
          />
        </BookingField>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              Guests
            </span>
          }
        >
          <input
            type="number"
            required
            min={1}
            max={20}
            value={form.guests}
            onChange={(e) => setField('guests', Number(e.target.value))}
            className={inputClass}
          />
        </BookingField>

        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <Moon className="h-3.5 w-3.5" />
              Rooms
            </span>
          }
        >
          <input
            type="number"
            required
            min={1}
            max={10}
            value={form.rooms}
            onChange={(e) => setField('rooms', Number(e.target.value))}
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
            Anything else?{' '}
            <span className="font-normal text-clay-400">(optional)</span>
          </>
        }
      >
        <textarea
          rows={2}
          placeholder="Airport pickup, special requests..."
          value={form.message}
          onChange={(e) => setField('message', e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </BookingField>

      {selectedHotel && nights > 0 && (
        <TotalBar
          label={`$${nightlyPrice} × ${nights} night${nights === 1 ? '' : 's'} × ${form.rooms} room${form.rooms > 1 ? 's' : ''}`}
          amount={estimate}
        />
      )}

      {status === 'error' && <ErrorNotice message={errorMsg} />}

      <SubmitButton
        submitting={status === 'submitting'}
        label="Request This Stay — Pay Later"
        submittingLabel="Sending request..."
      />
    </form>
  );
}
