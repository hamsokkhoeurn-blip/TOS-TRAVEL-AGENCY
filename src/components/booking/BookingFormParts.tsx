import type { ReactNode } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export const inputClass =
  'w-full rounded-lg border border-clay-200 bg-white px-3 py-2 text-sm text-clay-900 placeholder:text-clay-400 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-200';

const labelClass = 'mb-1 block text-xs font-semibold text-clay-700';

export function BookingField({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

export type ContactValues = { full_name: string; email: string; phone: string };

export function ContactFields({
  values,
  onChange,
}: {
  values: ContactValues;
  onChange: (key: keyof ContactValues, value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <BookingField label="Full name">
        <input
          type="text"
          required
          placeholder="Your name"
          value={values.full_name}
          onChange={(e) => onChange('full_name', e.target.value)}
          className={inputClass}
        />
      </BookingField>
      <BookingField label="Email">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={inputClass}
        />
      </BookingField>
      <div className="sm:col-span-2">
        <BookingField label="Phone / WhatsApp">
          <input
            type="tel"
            required
            placeholder="+855 ..."
            value={values.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className={inputClass}
          />
        </BookingField>
      </div>
    </div>
  );
}

export function TotalBar({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-brand-900 px-4 py-3">
      <span className="text-sm font-medium text-brand-100">{label}</span>
      <span className="font-display text-xl font-bold text-gold-400">${amount}</span>
    </div>
  );
}

export function SubmitButton({
  submitting,
  label,
  submittingLabel,
}: {
  submitting: boolean;
  label: string;
  submittingLabel: string;
}) {
  return (
    <>
      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 py-3 font-semibold text-brand-950 shadow-md transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitting ? submittingLabel : label}
      </button>
      <p className="text-center text-xs text-clay-400">
        Free cancellation up to 24 hours before your trip. No payment needed today.
      </p>
    </>
  );
}

export function ErrorNotice({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{message}</div>
  );
}

export function SuccessCard({
  title,
  message,
  onReset,
  resetLabel,
}: {
  title: string;
  message: ReactNode;
  onReset: () => void;
  resetLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
      <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
      <h3 className="mt-4 font-display text-xl font-bold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-clay-600">{message}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        {resetLabel}
      </button>
    </div>
  );
}
