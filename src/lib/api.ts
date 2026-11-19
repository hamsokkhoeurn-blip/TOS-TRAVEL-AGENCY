import { hotels } from '../data/hotels';
import { tours } from '../data/tours';

/**
 * API layer.
 *
 * - If VITE_API_URL is set (for example "/api" locally, or "https://api.example.com/api"
 *   after you deploy Laravel), every request goes to the real Laravel backend.
 * - If VITE_API_URL is empty or missing (the default, and what Bolt.new uses), the site
 *   runs in DEMO MODE: tours and hotels come from src/data, and booking forms are saved
 *   in this browser's localStorage only. Nothing is sent to a server.
 */
const configuredUrl = (import.meta.env.VITE_API_URL as string | undefined)?.trim() ?? '';

export const DEMO_MODE = configuredUrl === '';
export const API_URL = configuredUrl || '/api';

export function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  if (!DEMO_MODE) return fetch(`${API_URL}${path}`, init);
  return demoFetch(path, init);
}

/* ------------------------------------------------------------------ */
/* Demo mode                                                          */
/* ------------------------------------------------------------------ */

const KEPT_BUDGET_SLUGS = [
  'motherhome-guesthouse',
  'le-nou-siemreap-guesthouse',
  'golden-takeo-guesthouse',
  'sweet-dreams-guesthouse',
];

type Json = Record<string, unknown>;

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `demo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function readBody(init?: RequestInit): Promise<Json> {
  const body = init?.body;
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as Json;
    } catch {
      return {};
    }
  }
  if (body instanceof FormData) {
    const result: Json = {};
    body.forEach((value, rawKey) => {
      const key = rawKey.replace(/\[\]$/, '');
      const entry = typeof value === 'string' ? value : `[file] ${value.name}`;
      if (rawKey.endsWith('[]')) {
        const list = (result[key] as string[] | undefined) ?? [];
        list.push(entry);
        result[key] = list;
      } else {
        result[key] = entry;
      }
    });
    return result;
  }
  return {};
}

function saveLocally(collection: string, record: Json): string {
  const id = newId();
  try {
    const key = `tos_demo_${collection}`;
    const existing = JSON.parse(localStorage.getItem(key) ?? '[]') as Json[];
    existing.push({ id, status: 'pending', created_at: new Date().toISOString(), ...record });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch {
    /* storage can be blocked in some previews; the form still succeeds */
  }
  return id;
}

function validateContact(body: Json): Record<string, string[]> | null {
  const errors: Record<string, string[]> = {};
  if (!String(body.full_name ?? '').trim()) errors.full_name = ['Please enter your full name.'];
  if (!/^\S+@\S+\.\S+$/.test(String(body.email ?? '').trim())) errors.email = ['Please enter a valid email address.'];
  if (!String(body.phone ?? '').trim()) errors.phone = ['Please enter your phone number.'];
  return Object.keys(errors).length ? errors : null;
}

async function storeSubmission(collection: string, init?: RequestInit, needsContact = true): Promise<Response> {
  const body = await readBody(init);
  const errors = needsContact ? validateContact(body) : null;
  if (errors) return jsonResponse({ success: false, message: 'The given data was invalid.', errors }, 422);
  const id = saveLocally(collection, body);
  return jsonResponse({ success: true, message: 'Saved (demo mode: stored in this browser only).', data: { id } }, 201);
}

function visibleHotels() {
  return hotels
    .filter((hotel) => hotel.price_level !== 'budget' || KEPT_BUDGET_SLUGS.includes(hotel.slug))
    .sort((a, b) => a.sort_order - b.sort_order);
}

function visibleTours() {
  return tours.filter((tour) => tour.category !== 'transfer').sort((a, b) => a.sort_order - b.sort_order);
}

function demoChatReply(body: Json): string {
  const messages = (body.messages as Array<{ role: string; content: string }> | undefined) ?? [];
  const prefs = (body.preferences as { days?: number; guests?: number; stay_budget?: number | null } | undefined) ?? {};
  const days = Number(prefs.days) || 3;
  const guests = Number(prefs.guests) || 2;
  const budget = Number(prefs.stay_budget) || 0;
  const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content.toLowerCase() ?? '';
  const words = lastUser.split(/[^a-z]+/).filter((word) => word.length > 3);

  const scored = visibleTours()
    .map((tour) => {
      const text = `${tour.name} ${tour.tagline} ${tour.category} ${(tour.highlights ?? []).join(' ')}`.toLowerCase();
      const score = words.reduce((sum, word) => sum + (text.includes(word) ? 1 : 0), 0) + (tour.featured ? 0.5 : 0);
      return { tour, score };
    })
    .sort((a, b) => b.score - a.score || a.tour.sort_order - b.tour.sort_order)
    .slice(0, 3)
    .map(({ tour }) => `• ${tour.name} (${tour.duration}), from $${tour.price}${tour.price_basis === 'group' ? ' per group' : ' per person'}`);

  const stays = visibleHotels()
    .filter((hotel) => !budget || hotel.price_from * days <= budget)
    .sort((a, b) => a.price_from - b.price_from)
    .slice(0, 2)
    .map((hotel) => `• ${hotel.name} in ${hotel.area}, from $${hotel.price_from} per night`);

  return [
    `Here are some ideas for ${days} day${days > 1 ? 's' : ''} for ${guests} traveler${guests > 1 ? 's' : ''}:`,
    '',
    'Tours',
    ...scored,
    '',
    'Places to stay',
    ...(stays.length ? stays : ['• Share a different stay budget and I will look again.']),
    '',
    'Prices are indicative starting prices; TOS confirms final fares and availability. (Demo assistant: connect the Laravel API with an OpenAI key for full AI replies.)',
  ].join('\n');
}

async function demoFetch(path: string, init?: RequestInit): Promise<Response> {
  const method = (init?.method ?? 'GET').toUpperCase();
  const [route] = path.split('?');

  if (method === 'GET') {
    if (route === '/tours') return jsonResponse({ success: true, data: visibleTours() });
    if (route === '/hotels') return jsonResponse({ success: true, data: visibleHotels() });
    const tourMatch = route.match(/^\/tours\/([^/]+)$/);
    if (tourMatch) {
      const tour = visibleTours().find((item) => item.slug === tourMatch[1]);
      return tour ? jsonResponse({ success: true, data: tour }) : jsonResponse({ success: false, message: 'Tour not found.' }, 404);
    }
    const hotelMatch = route.match(/^\/hotels\/([^/]+)$/);
    if (hotelMatch) {
      const hotel = visibleHotels().find((item) => item.slug === hotelMatch[1]);
      return hotel ? jsonResponse({ success: true, data: hotel }) : jsonResponse({ success: false, message: 'Hotel not found.' }, 404);
    }
  }

  if (method === 'POST') {
    if (route === '/bookings') return storeSubmission('bookings', init);
    if (route === '/stay-bookings') return storeSubmission('stay_bookings', init);
    if (route === '/service-requests') return storeSubmission('service_requests', init);
    if (route === '/trip-plans') return storeSubmission('trip_plans', init, false);
    if (route === '/trip-planner/chat') {
      return jsonResponse({ success: true, reply: demoChatReply(await readBody(init)) });
    }
  }

  return jsonResponse({ success: false, message: `Demo API has no route for ${method} ${route}.` }, 404);
}
