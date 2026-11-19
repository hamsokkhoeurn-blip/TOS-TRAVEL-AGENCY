// Generated from the Laravel seeders (backend/database/seeders). Used by the offline demo API.
import type { Tour } from '../lib/types';

export const tours: Tour[] = [
  {
    "id": "tour-angkor-sunrise-tour",
    "tagline": "Share an early Angkor sunrise, then visit Bayon and Ta Prohm with a small group.",
    "description": "Scheduled shared tour with hotel pickup around 4:20 AM. Watch sunrise at Angkor Wat, stop for breakfast at Srah Srong at your own cost, then visit Bayon and Ta Prohm before returning around 12:30 PM. The Angkor temple pass is not included.",
    "group_size": 12,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Usually up to 10 guests; some listings say 12. Confirm the exact capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": "04:20:00",
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Hotel pickup",
        "detail": "Meet the guide and join the shared vehicle for the drive to Angkor Archaeological Park.",
        "time": "4:20 AM"
      },
      {
        "title": "Angkor Wat",
        "detail": "Watch dawn over the reflecting pools, then explore the galleries, courtyards, and central sanctuary.",
        "time": "Sunrise"
      },
      {
        "title": "Breakfast at Srah Srong",
        "detail": "Pause near the reservoir for breakfast at your own cost before continuing to Angkor Thom.",
        "time": "Morning"
      },
      {
        "title": "Bayon Temple",
        "detail": "Walk among the stone towers and carved faces at the center of Angkor Thom.",
        "time": null
      },
      {
        "title": "Ta Prohm and return",
        "detail": "Explore the tree-covered temple before the shared ride returns guests to their hotels.",
        "time": "Around 12:30 PM"
      }
    ],
    "included_items": [
      "Transportation: Shared air-conditioned minivan with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Angkor temple pass",
      "Breakfast at Srah Srong"
    ],
    "highlights": [
      "Hotel pickup and drop-off",
      "Sunrise at Angkor Wat",
      "Breakfast stop at Srah Srong (meal not included)",
      "Bayon and Ta Prohm",
      "Shared transport, English-speaking guide, drinking water, and cold towels",
      "Angkor temple pass not included"
    ],
    "featured": true,
    "sort_order": 1,
    "slug": "angkor-sunrise-tour",
    "name": "Angkor Sunrise Tour",
    "price": 15,
    "duration": "8 hours",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/15890568/pexels-photo-15890568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-explore-angkor",
    "tagline": "Visit Bayon, Ta Prohm, and Angkor Wat on a scheduled full-day shared tour.",
    "description": "Join other travelers for a full day among Angkor’s best-known temples: Bayon, Ta Prohm, and Angkor Wat. Hotel pickup and drop-off, shared transport, an English-speaking guide, drinking water, and cold towels are included. The temple pass and meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Angkor Thom and Bayon",
        "detail": "Enter the ancient walled city and visit Bayon’s carved face towers and nearby royal terraces.",
        "time": "Morning"
      },
      {
        "title": "Ta Prohm",
        "detail": "Explore the jungle temple’s galleries and stonework intertwined with large tree roots.",
        "time": "Late morning"
      },
      {
        "title": "Lunch break",
        "detail": "Take a break at a local restaurant near the temples; lunch is at your own cost.",
        "time": "Midday"
      },
      {
        "title": "Angkor Wat",
        "detail": "Visit the temple galleries, bas-reliefs, and central towers with the guide.",
        "time": "Afternoon"
      },
      {
        "title": "Phnom Bakheng sunset",
        "detail": "Finish at the hilltop temple viewpoint when access and the daily visitor limit allow.",
        "time": "Late afternoon"
      }
    ],
    "included_items": [
      "Transportation: Shared air-conditioned minivan with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Angkor temple pass",
      "Lunch",
      "Gratuities"
    ],
    "highlights": [
      "Bayon Temple",
      "Ta Prohm Temple",
      "Angkor Wat",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Temple pass and meals not included"
    ],
    "featured": true,
    "sort_order": 2,
    "slug": "explore-angkor",
    "name": "Explore Angkor Tour",
    "price": 20,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-koh-ker-beng-mealea",
    "tagline": "Explore Koh Ker and jungle-covered Beng Mealea with a shared group.",
    "description": "Spend a full day traveling with other visitors to Koh Ker and Beng Mealea. Hotel pickup and drop-off, shared transport, an English-speaking guide, drinking water, and cold towels are included; temple passes and meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Drive to Beng Mealea",
        "detail": "Travel out of Siem Reap to the remote temple site, then explore its collapsed galleries and jungle-covered stone blocks.",
        "time": "Morning"
      },
      {
        "title": "Countryside lunch break",
        "detail": "Pause for lunch at your own cost before continuing north.",
        "time": "Midday"
      },
      {
        "title": "Koh Ker temple complex",
        "detail": "Visit the former Khmer capital, including Prasat Thom’s stepped pyramid and selected surrounding shrines.",
        "time": "Afternoon"
      },
      {
        "title": "Return to Siem Reap",
        "detail": "Ride back to town after the temple visits.",
        "time": null
      }
    ],
    "included_items": [
      "Transportation: Shared air-conditioned minivan for the remote temple transfers, with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Koh Ker and Beng Mealea entry tickets",
      "Lunch",
      "Gratuities"
    ],
    "highlights": [
      "Koh Ker temple complex",
      "Beng Mealea jungle temple",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": true,
    "sort_order": 3,
    "slug": "koh-ker-beng-mealea",
    "name": "Koh Ker & Beng Mealea",
    "price": 50,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/15928763/pexels-photo-15928763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-kompong-phluk-floating-villages",
    "tagline": "Travel to Kampong Phluk and cruise Tonle Sap on a scheduled shared tour.",
    "description": "Travel from Siem Reap to Kampong Phluk, explore the stilt-house village, and take a boat on Tonle Sap. The half-day shared tour includes hotel pickup and drop-off, shared transport, the village boat ticket, an English-speaking guide, drinking water, and cold towels. Meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Drive to Kampong Phluk",
        "detail": "Travel from Siem Reap through the countryside to the Tonle Sap lakeside community.",
        "time": null
      },
      {
        "title": "Village and pagoda",
        "detail": "See the local pagoda and learn how daily life changes with the lake’s seasonal water levels.",
        "time": null
      },
      {
        "title": "Stilt-house community",
        "detail": "Explore Kampong Phluk’s elevated homes and community areas with the guide.",
        "time": null
      },
      {
        "title": "Boat ride and flooded forest",
        "detail": "Take the included village boat trip across the water and past the flooded forest. Small add-on boats may cost extra.",
        "time": null
      },
      {
        "title": "Return to Siem Reap",
        "detail": "Drive back to town after the village visit.",
        "time": null
      }
    ],
    "included_items": [
      "Kampong Phluk village boat ticket",
      "Transportation: Shared minivan transfer to Kampong Phluk with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Meals",
      "Optional small boat in the flooded forest",
      "Gratuities"
    ],
    "highlights": [
      "Siem Reap–Kampong Phluk transport",
      "Kampong Phluk village visit",
      "Shared boat ticket included",
      "Hotel pickup and drop-off",
      "English-speaking guide, drinking water, and cold towels",
      "Meals not included"
    ],
    "featured": false,
    "sort_order": 4,
    "slug": "kompong-phluk-floating-villages",
    "name": "Floating Village Tour",
    "price": 24,
    "duration": "Half day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/32978026/pexels-photo-32978026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-banteay-srei-backcountry",
    "tagline": "Visit Banteay Srei and countryside temples on a full-day shared trip.",
    "description": "Join a scheduled full-day group tour to Banteay Srei and nearby countryside temples. Hotel pickup and drop-off, shared transport, an English-speaking guide, drinking water, and cold towels are included. The temple pass and meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Hotel pickup",
        "detail": "Join the shared group for the morning drive beyond Siem Reap.",
        "time": "7:40–8:10 AM"
      },
      {
        "title": "Pre Rup",
        "detail": "Walk through the brick and laterite temple complex and take in the surrounding countryside.",
        "time": "Morning"
      },
      {
        "title": "Banteay Srei",
        "detail": "See the pink sandstone carvings and detailed lintels at this tenth-century temple.",
        "time": "Late morning"
      },
      {
        "title": "Lunch break",
        "detail": "Stop for lunch at your own cost.",
        "time": "Midday"
      },
      {
        "title": "East Mebon, Ta Som, Neak Pean and Preah Khan",
        "detail": "Continue through the eastern temples, including Ta Som’s tree-framed gate and the large complex of Preah Khan, before returning around 4 PM.",
        "time": "Afternoon"
      }
    ],
    "included_items": [
      "Transportation: Shared air-conditioned minivan with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Angkor temple pass",
      "Lunch",
      "Gratuities"
    ],
    "highlights": [
      "Banteay Srei temple",
      "Countryside temples and villages",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Drinking water and cold towels",
      "Temple pass and meals not included"
    ],
    "featured": false,
    "sort_order": 5,
    "slug": "banteay-srei-backcountry",
    "name": "Banteay Srei Backcountry",
    "price": 20,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/4300967/pexels-photo-4300967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-kulen-waterfall",
    "tagline": "See Phnom Kulen’s waterfall and River of 1000 Lingas on a shared day tour.",
    "description": "Travel with a scheduled group to Phnom Kulen to visit the waterfall and River of 1000 Lingas. Hotel pickup and drop-off, shared transport, an English-speaking guide, drinking water, and cold towels are included. Park entry and meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Hotel pickup and mountain drive",
        "detail": "Meet the group and travel to Phnom Kulen National Park.",
        "time": "7:40–8:10 AM"
      },
      {
        "title": "River of 1000 Lingas",
        "detail": "Walk along the riverbed carvings and view the sacred watercourse.",
        "time": "Morning"
      },
      {
        "title": "Wat Preah Ang Thom",
        "detail": "Visit the pagoda and reclining Buddha carved into the sandstone plateau.",
        "time": "Late morning"
      },
      {
        "title": "Kulen waterfall",
        "detail": "Spend time at the waterfall and take a meal break. Park entry and meal arrangements can vary; confirm current inclusions before booking.",
        "time": "Afternoon"
      },
      {
        "title": "Return to Siem Reap",
        "detail": "Ride back to your hotel after the mountain visit.",
        "time": "Around 5 PM"
      }
    ],
    "included_items": [
      "Transportation: Shared minivan transfer to Phnom Kulen with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Phnom Kulen park entry; confirm current ticket and meal inclusions",
      "Gratuities"
    ],
    "highlights": [
      "Phnom Kulen waterfall",
      "River of 1000 Lingas",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Drinking water and cold towels",
      "Park entry and meals not included"
    ],
    "featured": false,
    "sort_order": 6,
    "slug": "kulen-waterfall",
    "name": "Kulen Waterfall Tour",
    "price": 28,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/19143429/pexels-photo-19143429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-preah-vihear-koh-ker",
    "tagline": "Take a full-day shared journey to Preah Vihear and Koh Ker.",
    "description": "Visit Preah Vihear and Koh Ker on a scheduled full-day shared tour. The published group maximum is not specified, so confirm capacity when booking. Hotel pickup and drop-off, shared transport, an English-speaking guide, drinking water, and cold towels are included; temple passes and meals are not included.",
    "group_size": null,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "The operator does not publish a group maximum. Confirm capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [
      {
        "title": "Drive to Preah Vihear",
        "detail": "Travel north from Siem Reap to the Dangrek escarpment; this is a long-distance day trip.",
        "time": "Early morning"
      },
      {
        "title": "Preah Vihear sanctuary",
        "detail": "Explore the mountain sanctuary’s successive temple enclosures and cliff-edge viewpoints with your guide.",
        "time": "Late morning"
      },
      {
        "title": "Lunch break",
        "detail": "Pause for lunch at your own cost during the drive between sites.",
        "time": "Midday"
      },
      {
        "title": "Koh Ker",
        "detail": "Visit the remote former capital and its distinctive stepped pyramid before the return journey.",
        "time": "Afternoon"
      },
      {
        "title": "Return to Siem Reap",
        "detail": "Arrive back after the full-day trip; exact timing depends on road conditions.",
        "time": "Evening"
      }
    ],
    "included_items": [
      "Transportation: Shared minivan for the long-distance route; mountain access vehicle details are confirmed when booking."
    ],
    "excluded_items": [
      "Temple and park entry tickets",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Preah Vihear temple",
      "Koh Ker temple complex",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 7,
    "slug": "preah-vihear-koh-ker",
    "name": "Preah Vihear & Koh Ker",
    "price": 100,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/19142378/pexels-photo-19142378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-airport-transfer",
    "tagline": "Private airport transfer for 1 to 3 guests. One vehicle, one fixed price, no stops for other passengers.",
    "description": "Leave the shared shuttle and taxi line behind. Meet your private electric car at Siem Reap Angkor International Airport and travel directly to your Siem Reap hotel in cool, quiet comfort. Your booking includes one vehicle, one fixed price, a private driver, and no stops for other passengers.",
    "group_size": 3,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Private EV for up to 3 guests.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Scheduled shared departure. Confirm available seats when booking. Temple passes and meals are not included unless stated.",
    "itinerary": [],
    "included_items": [],
    "excluded_items": [],
    "highlights": [
      "Private new electric vehicle",
      "Fixed price per car, 1-3 guests",
      "Direct to your hotel, no stops",
      "Flight tracking for delays",
      "Meet-and-greet at arrivals"
    ],
    "featured": false,
    "sort_order": 8,
    "slug": "airport-transfer",
    "name": "Private EV Airport Transfer",
    "price": 25,
    "duration": "Approx. 45 minutes",
    "category": "transfer",
    "image_url": "https://images.pexels.com/photos/39015366/pexels-photo-39015366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-kulen-mountain-beng-mealea",
    "tagline": "Join a scheduled shared tour to Kulen Mountain and Beng Mealea.",
    "description": "Spend a full day with other travelers visiting Kulen Mountain and Beng Mealea. Shared transport, hotel pickup and drop-off, an English-speaking guide, drinking water, and cold towels are included. Park and temple passes and meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": null,
    "itinerary": [
      {
        "title": "Hotel pickup",
        "detail": "Meet the shared group and depart for Phnom Kulen.",
        "time": "7:40–8:10 AM"
      },
      {
        "title": "Kulen plateau and River of 1000 Lingas",
        "detail": "See the mountain scenery and carved riverbed before visiting the sacred pagoda.",
        "time": "Morning"
      },
      {
        "title": "Reclining Buddha and waterfall",
        "detail": "Visit Wat Preah Ang Thom, then spend time at the waterfall with a lunch break.",
        "time": "Late morning"
      },
      {
        "title": "Beng Mealea",
        "detail": "Explore the overgrown temple galleries and collapsed stonework on the way back toward Siem Reap.",
        "time": "Afternoon"
      },
      {
        "title": "Return to Siem Reap",
        "detail": "Drop-off follows the visit to Beng Mealea.",
        "time": "Around 5–5:30 PM"
      }
    ],
    "included_items": [
      "Transportation: Shared minivan for the mountain and temple route with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Phnom Kulen and Beng Mealea entry tickets",
      "Lunch",
      "Gratuities"
    ],
    "highlights": [
      "Kulen Mountain and Beng Mealea",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Drinking water and cold towels",
      "Passes and meals not included"
    ],
    "featured": false,
    "sort_order": 9,
    "slug": "kulen-mountain-beng-mealea",
    "name": "Kulen Mountain & Beng Mealea",
    "price": 30,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/19143429/pexels-photo-19143429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-kulen-mountain-banteay-srei",
    "tagline": "Join a scheduled shared tour to Kulen Mountain, its waterfall, and Banteay Srei.",
    "description": "Spend a full day with other travelers visiting Kulen Mountain, its waterfall, and Banteay Srei. Shared transport, hotel pickup and drop-off, an English-speaking guide, drinking water, and cold towels are included. Park and temple passes and meals are not included.",
    "group_size": 10,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Up to 10 guests; confirm the departure capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": null,
    "itinerary": [
      {
        "title": "Drive to Phnom Kulen",
        "detail": "Leave Siem Reap for the mountain plateau and its forested landscapes.",
        "time": "Morning"
      },
      {
        "title": "River of 1000 Lingas and reclining Buddha",
        "detail": "Visit the river carvings and Wat Preah Ang Thom on the summit.",
        "time": "Morning"
      },
      {
        "title": "Kulen waterfall and lunch break",
        "detail": "Spend time at the waterfall and pause for lunch; meal and entry inclusions should be confirmed.",
        "time": "Midday"
      },
      {
        "title": "Banteay Srei",
        "detail": "Visit the pink sandstone temple and its finely carved doorways and lintels.",
        "time": "Afternoon"
      },
      {
        "title": "Return to Siem Reap",
        "detail": "Drive back to town after the two destinations.",
        "time": "Late afternoon"
      }
    ],
    "included_items": [
      "Transportation: Shared minivan for the mountain and temple route with hotel pickup and drop-off."
    ],
    "excluded_items": [
      "Phnom Kulen and temple entry tickets",
      "Lunch",
      "Gratuities"
    ],
    "highlights": [
      "Kulen Mountain, its waterfall, and Banteay Srei",
      "Hotel pickup and drop-off",
      "Shared transport and English-speaking guide",
      "Drinking water and cold towels",
      "Passes and meals not included"
    ],
    "featured": false,
    "sort_order": 10,
    "slug": "kulen-mountain-banteay-srei",
    "name": "Kulen Mountain & Banteay Srei",
    "price": 30,
    "duration": "Full day",
    "category": "group",
    "image_url": "https://images.pexels.com/photos/4300967/pexels-photo-4300967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-angkor-sunrise",
    "tagline": "Book a private vehicle and guide for your own group to Angkor Wat, Bayon, and Ta Prohm.",
    "description": "A private tour for your group to Angkor Wat, Bayon, and Ta Prohm. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": 9,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Listed vehicles seat 1–9 guests; confirm larger group requests directly.",
    "vehicle_options": [
      {
        "id": "suv",
        "name": "SUV",
        "capacity": 2,
        "price": 110
      },
      {
        "id": "sienna",
        "name": "Sienna",
        "capacity": 4,
        "price": 115
      },
      {
        "id": "minivan",
        "name": "Minivan",
        "capacity": 6,
        "price": 125
      },
      {
        "id": "van",
        "name": "Van",
        "capacity": 9,
        "price": 130
      }
    ],
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Listed vehicles seat 1–9 guests; confirm larger group requests directly. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Private hotel pickup",
        "detail": "Your vehicle and guide meet your group at the hotel for the early temple drive.",
        "time": "Before sunrise"
      },
      {
        "title": "Angkor Wat",
        "detail": "Watch sunrise near the reflecting pools, then explore the galleries and temple grounds.",
        "time": "Sunrise"
      },
      {
        "title": "Bayon",
        "detail": "Walk among the face towers and bas-reliefs at the heart of Angkor Thom.",
        "time": "Morning"
      },
      {
        "title": "Ta Prohm",
        "detail": "Explore the atmospheric temple where tree roots grow across its stone galleries.",
        "time": "Late morning"
      },
      {
        "title": "Return to your hotel",
        "detail": "Your private vehicle returns your group to Siem Reap.",
        "time": null
      }
    ],
    "included_items": [
      "Transportation: Private vehicle selected at booking: SUV, Sienna, minivan or van; price depends on vehicle size."
    ],
    "excluded_items": [
      "Angkor temple pass",
      "Breakfast",
      "Gratuities"
    ],
    "highlights": [
      "Angkor Wat, Bayon, and Ta Prohm",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 20,
    "slug": "private-angkor-sunrise",
    "name": "Private Angkor Sunrise",
    "price": 110,
    "duration": "7–8 hours",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/15890568/pexels-photo-15890568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-angkor-temple-sunset",
    "tagline": "Book a private vehicle and guide for your own group to Bayon, Ta Prohm, Angkor Wat, and Phnom Bakheng.",
    "description": "A private tour for your group to Bayon, Ta Prohm, Angkor Wat, and Phnom Bakheng. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": 12,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Up to 12 guests; confirm vehicle availability when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Up to 12 guests; confirm vehicle availability when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Bayon and Angkor Thom",
        "detail": "Explore Bayon’s carved towers and the monumental gates and terraces of the ancient city.",
        "time": "Morning"
      },
      {
        "title": "Ta Prohm",
        "detail": "Walk through the tree-covered temple and its stone corridors.",
        "time": "Late morning"
      },
      {
        "title": "Angkor Wat",
        "detail": "Visit the galleries and central sanctuary at Cambodia’s best-known temple.",
        "time": "Afternoon"
      },
      {
        "title": "Phnom Bakheng",
        "detail": "Finish at the sunset viewpoint, subject to daily visitor limits and access conditions.",
        "time": "Sunset"
      },
      {
        "title": "Private hotel drop-off",
        "detail": "Return to your hotel after the temple circuit.",
        "time": null
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; exact vehicle size is confirmed when booking."
    ],
    "excluded_items": [
      "Angkor temple pass",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Bayon, Ta Prohm, Angkor Wat, and Phnom Bakheng",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 21,
    "slug": "private-angkor-temple-sunset",
    "name": "Private Angkor Temple with Sunset",
    "price": 90,
    "duration": "10 hours",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-angkor-sunset",
    "tagline": "Book a private vehicle and guide for your own group to Ta Prohm, Bayon, and Angkor Wat.",
    "description": "A private tour for your group to Ta Prohm, Bayon, and Angkor Wat. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Maximum group size is not specified. Confirm vehicle capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Maximum group size is not specified. Confirm vehicle capacity when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Ta Prohm",
        "detail": "Start at the atmospheric jungle temple and explore its galleries and root-covered stonework.",
        "time": "Afternoon"
      },
      {
        "title": "Bayon",
        "detail": "Visit the face towers and carved scenes at the center of Angkor Thom.",
        "time": "Late afternoon"
      },
      {
        "title": "Angkor Wat",
        "detail": "Explore the temple grounds and galleries before the day ends.",
        "time": "Before closing"
      },
      {
        "title": "Private hotel drop-off",
        "detail": "Your vehicle returns your group to the hotel.",
        "time": "Evening"
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; exact vehicle size is confirmed when booking."
    ],
    "excluded_items": [
      "Angkor temple pass",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Ta Prohm, Bayon, and Angkor Wat",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 22,
    "slug": "private-angkor-sunset",
    "name": "Private Angkor Sunset",
    "price": 90,
    "duration": "7 hours",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/1089302/pexels-photo-1089302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-bakong-floating-village",
    "tagline": "Book a private vehicle and guide for your own group to Bakong, Rolous temples, and Kampong Phluk.",
    "description": "A private tour for your group to Bakong, Rolous temples, and Kampong Phluk. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Maximum group size is not specified. Confirm vehicle capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Maximum group size is not specified. Confirm vehicle capacity when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Rolous group",
        "detail": "Drive to the early Khmer capital area and visit Bakong and nearby Rolous temples.",
        "time": "Morning"
      },
      {
        "title": "Countryside lunch break",
        "detail": "Pause for lunch at your own cost before continuing to the lake community.",
        "time": "Midday"
      },
      {
        "title": "Kampong Phluk",
        "detail": "Visit the stilt-house village and learn about life around Tonle Sap.",
        "time": "Afternoon"
      },
      {
        "title": "Village boat ride",
        "detail": "Add a boat trip through the village and waterways; ticket costs should be confirmed when booking.",
        "time": "Afternoon"
      },
      {
        "title": "Private return to Siem Reap",
        "detail": "Travel back to your hotel in your private vehicle.",
        "time": null
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; confirm whether the village boat ticket is included."
    ],
    "excluded_items": [
      "Temple passes",
      "Village boat ticket unless confirmed",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Bakong, Rolous temples, and Kampong Phluk",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 23,
    "slug": "private-bakong-floating-village",
    "name": "Private Bakong & Floating Village",
    "price": 55,
    "duration": "Full day",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/32978026/pexels-photo-32978026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-banteay-srei-kulen",
    "tagline": "Book a private vehicle and guide for your own group to Banteay Srei and Kulen Mountain.",
    "description": "A private tour for your group to Banteay Srei and Kulen Mountain. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Maximum group size is not specified. Confirm vehicle capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Maximum group size is not specified. Confirm vehicle capacity when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Banteay Srei",
        "detail": "Explore the pink sandstone temple, famed for its detailed carvings and lintels.",
        "time": "Morning"
      },
      {
        "title": "Drive into Phnom Kulen",
        "detail": "Continue into the national park and its forested plateau.",
        "time": "Midday"
      },
      {
        "title": "River of 1000 Lingas",
        "detail": "Walk by the carved riverbed and learn about its historic religious use.",
        "time": "Afternoon"
      },
      {
        "title": "Wat Preah Ang Thom and waterfall",
        "detail": "Visit the reclining Buddha and spend time at the waterfall; entry and meal costs should be confirmed.",
        "time": "Afternoon"
      },
      {
        "title": "Private hotel drop-off",
        "detail": "Return to Siem Reap in your private vehicle.",
        "time": null
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; exact vehicle size is confirmed when booking."
    ],
    "excluded_items": [
      "Temple and park entry tickets",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Banteay Srei and Kulen Mountain",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 24,
    "slug": "private-banteay-srei-kulen",
    "name": "Private Banteay Srei & Kulen",
    "price": 70,
    "duration": "Full day",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/4300967/pexels-photo-4300967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-beng-mealea-floating-village",
    "tagline": "Book a private vehicle and guide for your own group to Beng Mealea and Kampong Phluk.",
    "description": "A private tour for your group to Beng Mealea and Kampong Phluk. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Maximum group size is not specified. Confirm vehicle capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Maximum group size is not specified. Confirm vehicle capacity when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Beng Mealea",
        "detail": "Explore the remote temple’s collapsed galleries and jungle-covered stone blocks.",
        "time": "Morning"
      },
      {
        "title": "Transfer and lunch break",
        "detail": "Drive toward Tonle Sap and pause for lunch at your own cost.",
        "time": "Midday"
      },
      {
        "title": "Kampong Phluk",
        "detail": "Visit the stilt-house community and see how the village adapts to seasonal lake levels.",
        "time": "Afternoon"
      },
      {
        "title": "Tonle Sap boat trip",
        "detail": "A village boat ride can be arranged; its ticket is not included unless confirmed with the operator.",
        "time": "Afternoon"
      },
      {
        "title": "Private hotel drop-off",
        "detail": "Return to your hotel in Siem Reap.",
        "time": null
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; village boat ticket is not included unless confirmed."
    ],
    "excluded_items": [
      "Temple pass",
      "Village boat ticket unless confirmed",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Beng Mealea and Kampong Phluk",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 25,
    "slug": "private-beng-mealea-floating-village",
    "name": "Private Beng Mealea & Floating Village",
    "price": 75,
    "duration": "Full day",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/15928763/pexels-photo-15928763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-kulen-beng-mealea",
    "tagline": "Book a private vehicle and guide for your own group to Kulen Mountain, waterfall, and Beng Mealea.",
    "description": "A private tour for your group to Kulen Mountain, waterfall, and Beng Mealea. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Maximum group size is not specified. Confirm vehicle capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Maximum group size is not specified. Confirm vehicle capacity when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Phnom Kulen",
        "detail": "Drive to the mountain plateau and visit the River of 1000 Lingas and Wat Preah Ang Thom.",
        "time": "Morning"
      },
      {
        "title": "Kulen waterfall",
        "detail": "Spend time at the falls and take a lunch break; park entry and meals should be confirmed.",
        "time": "Midday"
      },
      {
        "title": "Beng Mealea",
        "detail": "Explore the jungle temple’s fallen stone galleries and overgrown courtyards.",
        "time": "Afternoon"
      },
      {
        "title": "Private return to Siem Reap",
        "detail": "Travel back to your hotel after the two sites.",
        "time": "Late afternoon"
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; exact vehicle size is confirmed when booking."
    ],
    "excluded_items": [
      "Park and temple entry tickets",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Kulen Mountain, waterfall, and Beng Mealea",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 26,
    "slug": "private-kulen-beng-mealea",
    "name": "Private Kulen & Beng Mealea",
    "price": 80,
    "duration": "Full day",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/19143429/pexels-photo-19143429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-private-koh-ker-beng-mealea",
    "tagline": "Book a private vehicle and guide for your own group to Koh Ker and Beng Mealea.",
    "description": "A private tour for your group to Koh Ker and Beng Mealea. The listed starting price is for the group/vehicle, not per person. Hotel pickup and drop-off, private transport, an English-speaking guide on guided tours, drinking water, and cold towels are included. Temple passes and meals are not included. Floating-village boat tickets are not included unless purchased through the operator.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "group",
    "capacity_note": "Maximum group size is not specified. Confirm vehicle capacity when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "English-speaking guide on guided tours",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Cold towels"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Maximum group size is not specified. Confirm vehicle capacity when booking. Confirm pickup details and exclusions when booking.",
    "itinerary": [
      {
        "title": "Beng Mealea",
        "detail": "Walk through the remote temple’s collapsed galleries and jungle-covered ruins.",
        "time": "Morning"
      },
      {
        "title": "Countryside lunch break",
        "detail": "Stop for lunch at your own cost on the route north.",
        "time": "Midday"
      },
      {
        "title": "Koh Ker",
        "detail": "Visit Prasat Thom’s stepped pyramid and selected temples from the former Khmer capital.",
        "time": "Afternoon"
      },
      {
        "title": "Private return to Siem Reap",
        "detail": "Ride back to your hotel after the remote temple visits.",
        "time": "Late afternoon"
      }
    ],
    "included_items": [
      "Transportation: Private car or van for your party; exact vehicle size is confirmed when booking."
    ],
    "excluded_items": [
      "Temple entry tickets",
      "Meals",
      "Gratuities"
    ],
    "highlights": [
      "Koh Ker and Beng Mealea",
      "Private vehicle and hotel pickup/drop-off",
      "English-speaking guide on guided tours",
      "Drinking water and cold towels",
      "Temple passes and meals not included"
    ],
    "featured": false,
    "sort_order": 27,
    "slug": "private-koh-ker-beng-mealea",
    "name": "Private Koh Ker & Beng Mealea",
    "price": 115,
    "duration": "Full day",
    "category": "private",
    "image_url": "https://images.pexels.com/photos/15928763/pexels-photo-15928763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    "id": "tour-vespa-angkor-grand-circuit",
    "tagline": "Preah Khan, Neak Pean, Krol Ko, Ta Som, East Mebon, Srah Srang and Ta Ney",
    "description": "The quieter outer temples of Angkor, reached along forest roads and narrow park lanes. Ride pillion behind a local Vespa driver, with a licensed English-speaking guide accompanying your private party. Choose a Vespa or vintage Jeep at the same listed price. Hotel pickup and drop-off in Siem Reap are included.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "person",
    "capacity_note": "Private tour. One guest per Vespa and driver; extra Vespa drivers are added for your party. Confirm group arrangements when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "Licensed English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [
      "Khmer-house lunch"
    ],
    "included_drinks": [
      "Water",
      "Non-alcoholic drinks"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Start between 7 and 9 AM; private tour. Vespa passengers ride pillion behind a local driver; no self-driving. A vintage Jeep is available at the same listed price. Angkor Pass and gratuities are not included.",
    "itinerary": [
      {
        "title": "Hotel pickup and Grand Circuit",
        "detail": "Meet your guide and Vespa driver, then ride into the quieter outer loop of Angkor Archaeological Park.",
        "time": "7–9 AM"
      },
      {
        "title": "Preah Khan and Neak Pean",
        "detail": "Explore the forest-wrapped monastery at Preah Khan, then visit Neak Pean, the small island sanctuary set within a large reservoir.",
        "time": "Morning"
      },
      {
        "title": "Krol Ko, Ta Som and East Mebon",
        "detail": "Continue to smaller, less-crowded temples, including Ta Som’s tree-framed east gate and East Mebon’s stone elephants.",
        "time": "Late morning"
      },
      {
        "title": "Srah Srang and Khmer-house lunch",
        "detail": "Pause by the royal bathing pool for the included sit-down Khmer lunch in a local house.",
        "time": "Lunch"
      },
      {
        "title": "Handicraft village and Ta Ney",
        "detail": "See local craftwork, then visit quiet forest temple Ta Ney before returning to your hotel around 3–4 PM.",
        "time": "Afternoon"
      }
    ],
    "included_items": [
      "Photos taken by your guide",
      "Transportation: Classic Vespa with a dedicated local driver, one per guest; vintage Jeep is an alternative."
    ],
    "excluded_items": [
      "Angkor Pass",
      "Gratuities"
    ],
    "highlights": [
      "Preah Khan, Neak Pean, Krol Ko, Ta Som, East Mebon, Srah Srang and Ta Ney",
      "Private Vespa with local driver or vintage Jeep",
      "Licensed English-speaking guide",
      "Khmer-house lunch included",
      "Hotel pickup and drop-off",
      "Angkor Pass not included"
    ],
    "featured": false,
    "sort_order": 30,
    "slug": "vespa-angkor-grand-circuit",
    "name": "Angkor Grand Circuit by Vespa",
    "price": 95,
    "duration": "About 8 hours",
    "category": "vehicle",
    "image_url": "https://adventurescambodia.com/wp-content/uploads/2024/01/vespa-tour-angkor-face-tower-gate-jungle-path-1024x576.jpg"
  },
  {
    "id": "tour-vespa-angkor-wat-sunrise",
    "tagline": "Angkor Wat at sunrise, South Gate, Bayon, the royal terraces, Death Gate and Ta Prohm",
    "description": "Ride through the quiet pre-dawn lanes, watch sunrise at Angkor Wat, then continue to Bayon and Ta Prohm. Ride pillion behind a local Vespa driver, with a licensed English-speaking guide accompanying your private party. Choose a Vespa or vintage Jeep at the same listed price. Hotel pickup and drop-off in Siem Reap are included.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "person",
    "capacity_note": "Private tour. One guest per Vespa and driver; extra Vespa drivers are added for your party. Confirm group arrangements when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": "04:45:00",
    "bicycle_type": null,
    "tour_guide": "Licensed English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [
      "Breakfast"
    ],
    "included_drinks": [
      "Water",
      "Non-alcoholic drinks"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Fixed 4:45 AM hotel pickup; private tour. Vespa passengers ride pillion behind a local driver; no self-driving. A vintage Jeep is available at the same listed price. Angkor Pass and gratuities are not included.",
    "itinerary": [
      {
        "title": "Hotel pickup",
        "detail": "Your private Vespa driver and guide collect you for the pre-dawn ride to Angkor Wat.",
        "time": "4:45 AM"
      },
      {
        "title": "Sunrise at Angkor Wat",
        "detail": "Enter before the main tour buses and watch sunrise from a quieter spot chosen by your guide.",
        "time": "Around 5:15 AM"
      },
      {
        "title": "Explore Angkor Wat",
        "detail": "Walk the galleries and bas-reliefs and visit the central sanctuary when it is open.",
        "time": "6–7 AM"
      },
      {
        "title": "Angkor Thom and breakfast",
        "detail": "Ride through the South Gate, visit Bayon and the royal terraces, then stop for the included breakfast at a pagoda or Khmer house.",
        "time": "Around 8 AM"
      },
      {
        "title": "Death Gate and Ta Prohm",
        "detail": "Continue through the quieter Death Gate to Ta Prohm, then return to your hotel around noon.",
        "time": "10–noon"
      }
    ],
    "included_items": [
      "Photos taken by your guide",
      "Transportation: Classic Vespa with a dedicated local driver, one per guest; vintage Jeep is an alternative."
    ],
    "excluded_items": [
      "Angkor Pass",
      "Gratuities"
    ],
    "highlights": [
      "Angkor Wat at sunrise, South Gate, Bayon, the royal terraces, Death Gate and Ta Prohm",
      "Private Vespa with local driver or vintage Jeep",
      "Licensed English-speaking guide",
      "Breakfast included",
      "Hotel pickup and drop-off",
      "Angkor Pass not included"
    ],
    "featured": false,
    "sort_order": 31,
    "slug": "vespa-angkor-wat-sunrise",
    "name": "Angkor Wat Sunrise by Vespa",
    "price": 110,
    "duration": "About 7 hours 15 minutes",
    "category": "vehicle",
    "image_url": "https://adventurescambodia.com/wp-content/uploads/2026/04/akim-ly-angkor-wat-naga-sunrise-1024x576.jpg"
  },
  {
    "id": "tour-vespa-angkor-small-circuit",
    "tagline": "Angkor Wat, South Gate, Bayon, Terrace of the Elephants, Death Gate, handicraft village and Ta Prohm",
    "description": "See Angkor Wat, Bayon and Ta Prohm with a private guide and driver, using quieter lanes around the main temple circuit. Ride pillion behind a local Vespa driver, with a licensed English-speaking guide accompanying your private party. Choose a Vespa or vintage Jeep at the same listed price. Hotel pickup and drop-off in Siem Reap are included.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "person",
    "capacity_note": "Private tour. One guest per Vespa and driver; extra Vespa drivers are added for your party. Confirm group arrangements when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "Licensed English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [
      "Khmer-house lunch"
    ],
    "included_drinks": [
      "Water",
      "Non-alcoholic drinks"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Choose a start between 7 and 9 AM; private tour. Vespa passengers ride pillion behind a local driver; no self-driving. A vintage Jeep is available at the same listed price. Angkor Pass and gratuities are not included.",
    "itinerary": [
      {
        "title": "Hotel pickup and Angkor Wat",
        "detail": "Start at your chosen time and explore Angkor Wat with your private guide.",
        "time": "7–9 AM"
      },
      {
        "title": "South Gate and Bayon",
        "detail": "Ride through Angkor Thom’s South Gate to Bayon and its many carved stone faces.",
        "time": "Mid-morning"
      },
      {
        "title": "Royal terraces and Death Gate",
        "detail": "Walk the Terrace of the Elephants, then exit through the quieter Death Gate and stop at a local handicraft village.",
        "time": "Late morning"
      },
      {
        "title": "Khmer-house lunch",
        "detail": "Take a shaded lunch break at a traditional wooden house inside the park.",
        "time": "Around 1 PM"
      },
      {
        "title": "Ta Prohm and return",
        "detail": "Finish at the tree-covered Ta Prohm temple and return to your hotel around 2:30 PM.",
        "time": "Afternoon"
      }
    ],
    "included_items": [
      "Photos taken by your guide",
      "Transportation: Classic Vespa with a dedicated local driver, one per guest; vintage Jeep is an alternative."
    ],
    "excluded_items": [
      "Angkor Pass",
      "Gratuities"
    ],
    "highlights": [
      "Angkor Wat, South Gate, Bayon, Terrace of the Elephants, Death Gate, handicraft village and Ta Prohm",
      "Private Vespa with local driver or vintage Jeep",
      "Licensed English-speaking guide",
      "Khmer-house lunch included",
      "Hotel pickup and drop-off",
      "Angkor Pass not included"
    ],
    "featured": false,
    "sort_order": 32,
    "slug": "vespa-angkor-small-circuit",
    "name": "Angkor Wat Small Circuit by Vespa",
    "price": 95,
    "duration": "About 7 hours",
    "category": "vehicle",
    "image_url": "https://adventurescambodia.com/wp-content/uploads/2023/11/akim-vespa-adventures-cambodiaour-angkor-wat-tour-2-711x533-1.jpeg"
  },
  {
    "id": "tour-vespa-siem-reap-countryside",
    "tagline": "Palm sugar, a working village market, water-hyacinth weaving, local cakes, West Baray and rice-field lanes",
    "description": "A half-day private ride through rice fields, village lanes, local food stops and traditional crafts west of town. Ride pillion behind a local Vespa driver, with a licensed English-speaking guide accompanying your private party. Choose a Vespa or vintage Jeep at the same listed price. Hotel pickup and drop-off in Siem Reap are included.",
    "group_size": null,
    "tour_type": "private",
    "price_basis": "person",
    "capacity_note": "Private tour. One guest per Vespa and driver; extra Vespa drivers are added for your party. Confirm group arrangements when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": null,
    "starting_time": null,
    "bicycle_type": null,
    "tour_guide": "Licensed English-speaking guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Water",
      "Non-alcoholic drinks"
    ],
    "meeting_point": null,
    "available_seats": null,
    "booking_requirements": "Morning start 7–9 AM or afternoon 1–2:30 PM; private tour. Vespa passengers ride pillion behind a local driver; no self-driving. A vintage Jeep is available at the same listed price. Angkor Pass and gratuities are not included.",
    "itinerary": [
      {
        "title": "Ride west from Siem Reap",
        "detail": "Follow village lanes and rice-field tracks with your private driver and guide. Stops can change with the season and what local families are doing that day.",
        "time": "Morning or afternoon"
      },
      {
        "title": "Palm sugar and village market",
        "detail": "See how palm sap is collected and visit a working village market with local produce and food.",
        "time": null
      },
      {
        "title": "Weaving, cakes and countryside life",
        "detail": "Meet local weavers, sample village cakes, and see fishermen and water buffalo around West Baray.",
        "time": null
      },
      {
        "title": "Rice fields and local crafts",
        "detail": "Depending on the day, continue by ox-cart lanes, see rice-noodle making, palm-leaf weaving or rice-wine production, then ride back to town.",
        "time": null
      }
    ],
    "included_items": [
      "Local snacks and tastings",
      "Photos taken by your guide",
      "Transportation: Classic Vespa with a dedicated local driver, one per guest; vintage Jeep is an alternative."
    ],
    "excluded_items": [
      "Gratuities"
    ],
    "highlights": [
      "Palm sugar, a working village market, water-hyacinth weaving, local cakes, West Baray and rice-field lanes",
      "Private Vespa with local driver or vintage Jeep",
      "Licensed English-speaking guide",
      "Local snacks and tastings included",
      "Hotel pickup and drop-off",
      "Angkor Pass not included"
    ],
    "featured": false,
    "sort_order": 33,
    "slug": "vespa-siem-reap-countryside",
    "name": "Siem Reap Countryside by Vespa",
    "price": 89,
    "duration": "4 hours",
    "category": "vehicle",
    "image_url": "https://adventurescambodia.com/wp-content/uploads/2023/12/akim-vespa-adventures-cambodia-countryside.webp"
  },
  {
    "id": "tour-elephant-angkor-sunrise-bike",
    "tagline": "Watch sunrise at Angkor Wat, then cycle quiet park trails to Bayon and Ta Prohm.",
    "description": "A guided full-day Angkor ride on mountain bikes and quiet park trails. Start before dawn for Angkor Wat sunrise, enjoy a picnic breakfast, visit Bayon and Ta Prohm, and stop for a Khmer lunch. E-bike option is available; confirm its price when booking.",
    "group_size": 8,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Scheduled cycling experience; confirm availability and final group size when booking.",
    "vehicle_options": null,
    "distance_km": 20,
    "difficulty_level": "Easy",
    "starting_time": "04:45:00",
    "bicycle_type": "Quality mountain bike",
    "tour_guide": "English-speaking cycling guide",
    "hotel_pickup": true,
    "included_meals": [
      "Picnic breakfast",
      "Khmer lunch"
    ],
    "included_drinks": [
      "Drinking water",
      "Snacks and seasonal fruit"
    ],
    "meeting_point": "Hotel pickup or Elephant Bike Tours shop; confirm for your selected tour.",
    "available_seats": null,
    "booking_requirements": "Easy ride; group size 1–8. Pickup is listed at 4:45 AM; exact pickup details are confirmed after booking. E-bike option is available; ask the operator to confirm the added fare.",
    "itinerary": [
      {
        "title": "Hotel pickup and bike ride to Angkor Wat",
        "detail": "Meet the guide and ride from Siem Reap toward Angkor before dawn.",
        "time": "4:45 AM"
      },
      {
        "title": "Angkor Wat and picnic breakfast",
        "detail": "Watch sunrise at the temple, explore its grounds with the guide, and enjoy the included picnic breakfast.",
        "time": "Sunrise"
      },
      {
        "title": "Angkor Thom and Bayon",
        "detail": "Cycle along quieter park paths, visit the South Gate, then explore Bayon and its carved faces.",
        "time": "Morning"
      },
      {
        "title": "Khmer lunch",
        "detail": "Pause for the included local lunch before continuing the ride through the park.",
        "time": "Midday"
      },
      {
        "title": "Ta Prohm and return",
        "detail": "Visit the tree-covered Ta Prohm temple and finish the cycling route before returning to your hotel.",
        "time": "Afternoon"
      }
    ],
    "included_items": [
      "Quality mountain bike and helmet",
      "English-speaking cycling guide",
      "Transportation: Mountain bike for the route, hotel pickup and drop-off, plus a support vehicle with professional driver."
    ],
    "excluded_items": [
      "Angkor Pass (listed at $37 per person)",
      "Travel insurance",
      "Personal expenses"
    ],
    "highlights": [
      "Angkor Wat sunrise",
      "Bayon and Ta Prohm",
      "Quiet cycling trails in Angkor Park",
      "Picnic breakfast and local Khmer lunch",
      "Mountain bike and helmet included",
      "Angkor Pass not included"
    ],
    "featured": false,
    "sort_order": 40,
    "slug": "elephant-angkor-sunrise-bike",
    "name": "Angkor Sunrise Bike Tour",
    "price": 85,
    "duration": "About 9 hours",
    "image_url": "https://elephantbiketours.com/wp-content/uploads/2025/05/Angkor-Wat-sunrise-view-from-norther-pond.jpg",
    "category": "cycling"
  },
  {
    "id": "tour-elephant-siem-reap-countryside-bike",
    "tagline": "Cycle farm roads and village lanes, meet local families, and see everyday countryside life.",
    "description": "A four-hour guided mountain-bike trip through Siem Reap’s countryside, vegetable farms, rice fields, market and monastery. Meet local people, learn about farming, and taste local snacks along the way. Easy terrain; recommended for ages five and up.",
    "group_size": 15,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Scheduled cycling experience; confirm availability and final group size when booking.",
    "vehicle_options": null,
    "distance_km": 25,
    "difficulty_level": "Easy",
    "starting_time": "07:45:00",
    "bicycle_type": "Quality mountain bike",
    "tour_guide": "English-speaking cycling guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Local tasting snacks"
    ],
    "meeting_point": "Hotel pickup or Elephant Bike Tours shop; confirm for your selected tour.",
    "available_seats": null,
    "booking_requirements": "Easy ride of about 20–25 km; recommended age 5+. Hotel pickup is by local tuk-tuk. Confirm the pickup time and location when booking.",
    "itinerary": [
      {
        "title": "Tuk-tuk pickup and bike fitting",
        "detail": "Ride from your hotel to the bike shop, meet the guide, and get fitted to your mountain bike.",
        "time": "7:45 AM"
      },
      {
        "title": "Vegetable farms and village roads",
        "detail": "Begin cycling through the city edge and countryside, visit local farms, and learn about seasonal produce and farming.",
        "time": "8:00 AM"
      },
      {
        "title": "Local market and village life",
        "detail": "Explore a working market and learn how fresh ingredients are bought and used in Khmer cooking.",
        "time": "9:15 AM"
      },
      {
        "title": "Buddhist monastery",
        "detail": "Visit a local monastery, see its murals and Buddha images, and hear about everyday spiritual life.",
        "time": "10:30 AM"
      },
      {
        "title": "Lotus farm and return",
        "detail": "Stop at a lotus farm, then cycle back to the shop to finish the half-day tour.",
        "time": "11:15 AM–noon"
      }
    ],
    "included_items": [
      "Quality mountain bike and helmet",
      "English-speaking cycling guide",
      "Community donations",
      "Transportation: Tuk-tuk pickup to the bike shop; countryside route and return to the shop are by mountain bike."
    ],
    "excluded_items": [
      "Travel insurance",
      "Personal expenses"
    ],
    "highlights": [
      "Village and rice-field backroads",
      "Vegetable farms and local market",
      "Buddhist monastery and lotus farm",
      "Local snacks and farming activities",
      "Mountain bike, helmet, guide and tuk-tuk pickup included"
    ],
    "featured": false,
    "sort_order": 41,
    "slug": "elephant-siem-reap-countryside-bike",
    "name": "Siem Reap Countryside and Village Bike Tour",
    "price": 35,
    "duration": "4 hours",
    "image_url": "https://elephantbiketours.com/wp-content/uploads/2025/05/Great-ride-on-the-countryside-of-Siem-Reap.jpg",
    "category": "cycling"
  },
  {
    "id": "tour-elephant-siem-reap-twilight-bike",
    "tagline": "Ride countryside lanes at sunset, meet local vendors, and enjoy a drink by the lotus fields.",
    "description": "A four-hour afternoon cycling tour through farms, village roads and rice fields south of Siem Reap. Visit local markets and farms, see a monastery and finish at a lotus farm with a sunset drink. Snacks, water, bike, helmet and guide are included.",
    "group_size": 15,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Scheduled cycling experience; confirm availability and final group size when booking.",
    "vehicle_options": null,
    "distance_km": 25,
    "difficulty_level": "Easy",
    "starting_time": null,
    "bicycle_type": "Quality mountain bike",
    "tour_guide": "English-speaking cycling guide",
    "hotel_pickup": true,
    "included_meals": [],
    "included_drinks": [
      "Drinking water",
      "Sunset drink",
      "Tasting snacks"
    ],
    "meeting_point": "Hotel pickup or Elephant Bike Tours shop; confirm for your selected tour.",
    "available_seats": null,
    "booking_requirements": "Easy ride of about 20–25 km; group size 1–15. The tour runs in the afternoon and includes hotel pickup to the start point; confirm exact departure time when booking.",
    "itinerary": [
      {
        "title": "Pickup and ride south",
        "detail": "Meet the guide and ride from the shop along quiet roads toward the southern countryside.",
        "time": "Afternoon"
      },
      {
        "title": "Markets, farms and local life",
        "detail": "Visit an afternoon market and local farms, and learn about the work and daily routines of village families.",
        "time": null
      },
      {
        "title": "Monastery and village roads",
        "detail": "Cycle through rural lanes and visit a Buddhist monastery to learn about local beliefs and community life.",
        "time": null
      },
      {
        "title": "Lotus farm and local drink",
        "detail": "Finish at a lotus farm overlooking the rice fields, enjoy an included drink and snacks, then return to Siem Reap.",
        "time": "Sunset"
      }
    ],
    "included_items": [
      "Quality mountain bike and helmet",
      "English-speaking cycling guide",
      "Community donations",
      "Transportation: Hotel pickup to the starting point; countryside route and return to the shop are by mountain bike."
    ],
    "excluded_items": [
      "Travel insurance",
      "Personal expenses"
    ],
    "highlights": [
      "Afternoon countryside bike ride",
      "Local market and farm visits",
      "Monastery and village culture",
      "Lotus-farm sunset stop with local drink",
      "Mountain bike, helmet, snacks and water included"
    ],
    "featured": false,
    "sort_order": 42,
    "slug": "elephant-siem-reap-twilight-bike",
    "name": "Siem Reap Twilight Bike Tour",
    "price": 39,
    "duration": "4 hours",
    "image_url": "https://elephantbiketours.com/wp-content/uploads/2025/05/sunset-ride-at-the-countryside.jpg",
    "category": "cycling"
  },
  {
    "id": "tour-elephant-angkor-temples-bike",
    "tagline": "Cycle quiet Angkor trails between Angkor Wat, Bayon and Ta Prohm with a local guide.",
    "description": "A full-day guided ride through Angkor’s major temples and quiet park trails. Visit Angkor Wat, Angkor Thom’s South Gate and Bayon, stop for local Khmer lunch, then continue by bike to Ta Prohm. E-mountain bike pedal assist is available at a separately listed price.",
    "group_size": 12,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Scheduled cycling experience; confirm availability and final group size when booking.",
    "vehicle_options": null,
    "distance_km": 45,
    "difficulty_level": "Easy",
    "starting_time": "07:30:00",
    "bicycle_type": "Quality mountain bike",
    "tour_guide": "English-speaking cycling guide",
    "hotel_pickup": true,
    "included_meals": [
      "Local Khmer lunch"
    ],
    "included_drinks": [
      "Drinking water",
      "Snacks and seasonal fruit"
    ],
    "meeting_point": "Hotel pickup or Elephant Bike Tours shop; confirm for your selected tour.",
    "available_seats": null,
    "booking_requirements": "Easy ride of about 40–45 km; group size 1–12. Daily departure is listed at 7:30 AM. E-mountain bike pedal assist is available for an additional published price; confirm when booking.",
    "itinerary": [
      {
        "title": "Tuk-tuk pickup and bike fitting",
        "detail": "Transfer to the bike shop, meet your cycling guide, and prepare for the day’s ride.",
        "time": "7:30 AM"
      },
      {
        "title": "Ride to Angkor Wat",
        "detail": "Cycle on park backroads to Angkor Wat, then walk through the temple and learn its history and architecture.",
        "time": "Morning"
      },
      {
        "title": "South Gate and Bayon",
        "detail": "Continue to Angkor Thom’s South Gate and Bayon, known for its carved towers and faces.",
        "time": "Late morning"
      },
      {
        "title": "Local Khmer lunch",
        "detail": "Take a lunch break at a local restaurant; the meal is included.",
        "time": "Midday"
      },
      {
        "title": "Ta Prohm and return",
        "detail": "Ride scenic single-track through the park to Ta Prohm, then cycle back toward the hotel.",
        "time": "Afternoon"
      }
    ],
    "included_items": [
      "Quality mountain bike and helmet",
      "English-speaking cycling guide",
      "Transportation: Tuk-tuk pickup to the bike shop; Angkor route is by mountain bike, with no on-route vehicle support listed."
    ],
    "excluded_items": [
      "Angkor Pass (listed at $37 per person)",
      "Travel insurance",
      "Personal expenses"
    ],
    "highlights": [
      "Angkor Wat, Angkor Thom and Bayon",
      "Ta Prohm jungle temple",
      "Over 80% of the route on park backroads and trails",
      "Local Khmer lunch included",
      "E-mountain bike option available",
      "Angkor entrance ticket not included"
    ],
    "featured": false,
    "sort_order": 43,
    "slug": "elephant-angkor-temples-bike",
    "name": "Angkor Temples and History Bike Tour",
    "price": 49,
    "duration": "About 9 hours",
    "image_url": "https://elephantbiketours.com/wp-content/uploads/2025/05/Cycling-on-the-single-trails-in-the-Angkor-park.jpg",
    "category": "cycling"
  },
  {
    "id": "tour-elephant-countryside-bike-boat",
    "tagline": "Cycle village backroads, share lunch with a local family, and take a boat to the floating community.",
    "description": "A full-day bike, boat and countryside experience. Ride village roads and flat trails, visit a local market and monastery, enjoy a hosted lunch with a local family, then travel by boat to the floating community on Tonle Sap. A support vehicle accompanies the boat portion.",
    "group_size": 12,
    "tour_type": "group",
    "price_basis": "person",
    "capacity_note": "Scheduled cycling experience; confirm availability and final group size when booking.",
    "vehicle_options": null,
    "distance_km": null,
    "difficulty_level": "Easy",
    "starting_time": null,
    "bicycle_type": "Quality mountain bike",
    "tour_guide": "English-speaking cycling guide",
    "hotel_pickup": true,
    "included_meals": [
      "Hosted local-family lunch"
    ],
    "included_drinks": [
      "Drinking water",
      "Snacks"
    ],
    "meeting_point": "Hotel pickup or Elephant Bike Tours shop; confirm for your selected tour.",
    "available_seats": null,
    "booking_requirements": "Easy full-day trip; group size 1–12. The operator lists a tuk-tuk pickup, support vehicle for the lake portion, boat and community entry. Confirm pickup time and dietary needs when booking.",
    "itinerary": [
      {
        "title": "Hotel pickup and bike fitting",
        "detail": "Transfer by local tuk-tuk to the bike shop, meet the guide, and get fitted to your bike.",
        "time": "Morning"
      },
      {
        "title": "Village roads and local market",
        "detail": "Cycle through countryside trails and visit a lively market to see the foods and produce used in local homes.",
        "time": "Morning"
      },
      {
        "title": "Monastery and local community",
        "detail": "Visit a Buddhist monastery and learn about local traditions and daily village life.",
        "time": "Late morning"
      },
      {
        "title": "Hosted lunch with a local family",
        "detail": "Enjoy an included Khmer meal prepared by a local family; dietary requests can be shared when booking.",
        "time": "Midday"
      },
      {
        "title": "Boat to the floating community",
        "detail": "Continue by support vehicle to the lake, then take the included boat trip to the floating community on Tonle Sap.",
        "time": "Afternoon"
      }
    ],
    "included_items": [
      "Quality mountain bike and helmet",
      "English-speaking cycling guide",
      "Boat trip and floating-community entry",
      "Community donations",
      "Transportation: Tuk-tuk pickup, mountain bike for village roads, support air-conditioned vehicle for the lake transfer, and boat to the floating community."
    ],
    "excluded_items": [
      "Travel insurance",
      "Personal expenses"
    ],
    "highlights": [
      "Cycling through countryside villages and rice fields",
      "Local market and monastery",
      "Hosted Khmer lunch with a local family",
      "Boat ride to the Tonle Sap floating community",
      "Support vehicle, bike and helmet included"
    ],
    "featured": false,
    "sort_order": 44,
    "slug": "elephant-countryside-bike-boat",
    "name": "Countryside Bike and Floating Village Boat Tour",
    "price": 45,
    "duration": "Full day (about 9 hours)",
    "image_url": "https://www.pelago.com/img/products/KH-Cambodia/floating-village-bike-boat-inclusive-lunch-boat-ticket/6c450e58-5f15-42dd-a4f7-94d5109d0c0b_floating-village-bike-boat-inclusive-lunch-boat-ticket.jpg",
    "category": "cycling"
  }
];
