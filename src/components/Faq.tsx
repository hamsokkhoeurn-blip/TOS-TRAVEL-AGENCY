import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'What is the best Siem Reap tour for first time visitors?',
    a: 'An Angkor Wat sunrise tour with Bayon and Ta Prohm is the most popular choice for a first visit — you see the three most iconic temples in one comfortable morning.',
  },
  {
    q: 'Can I visit Angkor Wat and a floating village in one day?',
    a: 'Yes. Some tours combine the Angkor temples with the Kompong Phluk floating village, or you can take the sunrise tour in the morning and the floating village in the afternoon.',
  },
  {
    q: 'What can I see in Siem Reap besides Angkor Wat?',
    a: 'Visit Banteay Srei, Phnom Kulen, Beng Mealea, Koh Ker or the Kompong Phluk floating village — each makes a wonderful second or third day.',
  },
  {
    q: 'Can I visit Koh Ker and Beng Mealea in one day?',
    a: 'Yes. A full day is enough to visit both remote sites from Siem Reap, with time for lunch in the countryside.',
  },
  {
    q: 'What is a good 2 day Siem Reap itinerary?',
    a: 'Spend one day at Angkor (sunrise tour or full-day Explore Angkor), and use the second day for Banteay Srei, Phnom Kulen, Beng Mealea or a floating village.',
  },
  {
    q: 'Are there small group tours in Siem Reap?',
    a: 'Yes — that is our specialty. Siem Reap Shuttle runs small group tours of no more than 10 guests to Angkor and several sites outside the main temple area.',
  },
  {
    q: 'Can I book a private Angkor Wat tour?',
    a: 'Yes. Private tours are available with a private vehicle and guide, and private airport transfers are a fixed $25 per car for 1 to 3 guests.',
  },
  {
    q: 'Which Siem Reap tour should I choose?',
    a: 'Choose an Angkor sunrise tour for the main temples, a countryside tour for sites outside Angkor, or a private tour if you want a fully flexible schedule.',
  },
  {
    q: 'What types of accommodation can I book?',
    a: 'We can help arrange budget guesthouses and hostels, comfortable mid-range hotels, and luxury properties in popular areas such as the Old Market, Wat Bo, Taphul Village, and Svay Dangkum.',
  },
  {
    q: 'Can I book a hotel or guesthouse through you?',
    a: 'Yes. Choose a property in the Where to Stay section, review its room types and guest reviews, then submit a stay request. We will check availability and confirm the details by email.',
  },
  {
    q: 'How much do budget stays in Siem Reap cost?',
    a: 'Our featured budget stays generally start at around $15 per room per night, with many options between $15 and $30 depending on the property, dates, and room type.',
  },
  {
    q: 'Can you arrange airport pickup with my hotel stay?',
    a: 'Yes. Add your airport pickup request or any special requirements in the stay booking form, and we will include the details when confirming your accommodation.',
  },
  {
    q: 'Do I need to pay when I request a tour or hotel stay?',
    a: 'No payment is needed when you submit a request. We confirm availability, pickup details, and the final price by email before you make any payment.',
  },
  {
    q: 'Can I book a tour if I am staying at one of the listed hotels?',
    a: 'Yes. The listed properties are on our pickup routes, so you can include your hotel name when booking a tour and we will confirm the pickup time and location.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-clay-50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Good to Know</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-950 sm:text-4xl">Siem Reap Travel Questions</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={Math.min(i, 3) * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                    isOpen ? 'border-brand-300 shadow-md' : 'border-clay-100'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-brand-900">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-clay-600">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
