import { useState, type FormEvent } from 'react';
import { CalendarDays, Users } from 'lucide-react';
import { todayIso } from '@/lib/dates';
import { apiFetch } from '@/lib/api';
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


const MAX_GUESTS = 10;

const experiences = [
  { name: 'Hot Air Balloon Sunrise Ride', price: 110 },
];

type Form = ContactValues & {
  service_name: string;
  service_date: string;
  guests: number;
  message: string;
};

const emptyForm: Form = {
  service_name: experiences[0].name,
  service_date: '',
  guests: 2,
  full_name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ServiceForm() {
  const [form, setForm] = useState<Form>(emptyForm);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'done' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const experience =
    experiences.find((x) => x.name === form.service_name) ?? experiences[0];

  const total = experience.price * form.guests;

  function setField<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function reset() {
    setForm(emptyForm);
    setErrorMsg('');
    setStatus('idle');
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await apiFetch('/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          category: 'other_service',
          service_name: experience.name,
          service_date: form.service_date,
          guests: form.guests,
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim() || null,
          total_price: total,
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
          result.message ||
            'We could not save your request. Please try again.'
        );
      }

      setStatus('done');
    } catch (error) {
      console.error('Other service booking error:', error);

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
            Thank you, {form.full_name.split(' ')[0] || 'traveler'}. We have
            your request for <strong>{experience.name}</strong> and will
            confirm by email at {form.email} shortly.
          </>
        }
        onReset={reset}
        resetLabel="Make another request"
      />
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <BookingField label="Choose an experience">
        <select
          value={form.service_name}
          onChange={(e) => setField('service_name', e.target.value)}
          className={inputClass}
        >
          {experiences.map((x) => (
            <option key={x.name} value={x.name}>
              {x.name} — ${x.price} / person
            </option>
          ))}
        </select>
      </BookingField>

      <div className="grid gap-4 sm:grid-cols-2">
        <BookingField
          label={
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              Preferred date
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
              Guests (max {MAX_GUESTS})
            </span>
          }
        >
          <input
            type="number"
            required
            min={1}
            max={MAX_GUESTS}
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
            Special requests{' '}
            <span className="font-normal text-clay-400">(optional)</span>
          </>
        }
      >
        <textarea
          rows={3}
          placeholder="Anything we should know..."
          value={form.message}
          onChange={(e) => setField('message', e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </BookingField>

      <TotalBar
        label={`$${experience.price} × ${form.guests} guest${form.guests > 1 ? 's' : ''}`}
        amount={total}
      />

      {status === 'error' && <ErrorNotice message={errorMsg} />}

      <SubmitButton
        submitting={status === 'submitting'}
        label="Request Service — Pay Later"
        submittingLabel="Sending request..."
      />
    </form>
  );
}
