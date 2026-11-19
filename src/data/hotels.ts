// Generated from the Laravel seeders (backend/database/seeders). Used by the offline demo API.
import type { Hotel } from '../lib/types';

export const hotels: Hotel[] = [
  {
    "id": "hotel-golden-temple-residence",
    "slug": "golden-temple-residence",
    "name": "Golden Temple Residence",
    "area": "Wat Bo",
    "description": "The most prestigious cultural residence in Siem Reap, blending timeless Cambodian heritage with contemporary sophistication. Meticulously designed suites, five-star personalized service, and a serene sanctuary minutes from Angkor Wat.",
    "price_level": "luxury",
    "price_from": 150,
    "rating": 4.9,
    "style": "Cultural Residence",
    "image_url": "/hotels/golden-temple-residence/hotel/main.jpeg",
    "room_types": [
      {
        "name": "Deluxe Suite",
        "guests": 2,
        "price": 150
      },
      {
        "name": "Luxury King Suite",
        "guests": 2,
        "price": 200
      },
      {
        "name": "Luxury Twin Suite",
        "guests": 2,
        "price": 200
      },
      {
        "name": "Suite Pool View",
        "guests": 2,
        "price": 250
      },
      {
        "name": "Residence Suite",
        "guests": 2,
        "price": 300
      }
    ],
    "website_url": "https://www.booking.com/Share-LIHzYxI",
    "sort_order": 1
  },
  {
    "id": "hotel-viroths-hotel",
    "slug": "viroths-hotel",
    "name": "Viroth's Hotel",
    "area": "Wat Bo",
    "description": "A 50s-inspired boutique hotel in the vibrant Wat Bo area, surrounded by lush green gardens. Consistently rated among Siem Reap's very best, with elegant design, a large pool, and warm Cambodian hospitality.",
    "price_level": "luxury",
    "price_from": 120,
    "rating": 4.9,
    "style": "50s-Inspired Boutique",
    "image_url": "/hotels/viroths-hotel/hotel/main.jpeg",
    "room_types": [
      {
        "name": "Deluxe Double Room",
        "guests": 3,
        "price": 139
      },
      {
        "name": "Deluxe Double Pool View",
        "guests": 3,
        "price": 159
      },
      {
        "name": "Deluxe Double or Twin Room",
        "guests": 2,
        "price": 139
      },
      {
        "name": "Deluxe Double or Twin Pool View",
        "guests": 2,
        "price": 159
      },
      {
        "name": "Deluxe Triple Room",
        "guests": 3,
        "price": 169
      },
      {
        "name": "Deluxe Triple Pool View",
        "guests": 3,
        "price": 189
      },
      {
        "name": "Deluxe Terrace Room",
        "guests": 3,
        "price": 215
      },
      {
        "name": "Suite Pool View",
        "guests": 3,
        "price": 275
      }
    ],
    "website_url": "https://viroth-hotel.com/",
    "sort_order": 2
  },
  {
    "id": "hotel-jaya-house-river-park",
    "slug": "jaya-house-river-park",
    "name": "Jaya House River Park",
    "area": "River Park",
    "description": "Siem Reap's award-winning boutique hotel on the river, known for its sustainability initiatives and exceptional service. Features a spa, Trorkuon Khmer restaurant, tropical gardens, and organic cuisine.",
    "price_level": "luxury",
    "price_from": 130,
    "rating": 4.9,
    "style": "Award-Winning Boutique",
    "image_url": "/hotels/jaya-house-river-park/hotel/main.jpeg",
    "room_types": [
      "Deluxe Twin",
      "Deluxe King",
      "Junior Suite",
      "Junior Pool Suite"
    ],
    "website_url": "https://www.jayahousehotels.com/rooms",
    "sort_order": 3
  },
  {
    "id": "hotel-golden-temple-retreat",
    "slug": "golden-temple-retreat",
    "name": "Golden Temple Retreat",
    "area": "City Centre",
    "description": "An exclusive escape with 32 elegantly appointed rooms, each facing a pristine pool surrounded by verdant gardens. Enjoy Apsara Dance performances, exquisite Khmer cuisine, and personalized spa treatments.",
    "price_level": "luxury",
    "price_from": 120,
    "rating": 4.8,
    "style": "Poolside Retreat",
    "image_url": "/hotels/golden-temple-retreat/hotel/main.webp",
    "room_types": [
      {
        "name": "Luxury Suite Pool Access",
        "guests": 2,
        "price": 120
      },
      {
        "name": "Premier Suite Pool Access",
        "guests": 2,
        "price": 120
      },
      {
        "name": "Premier Suite Pool View",
        "guests": 2,
        "price": 250
      },
      {
        "name": "Premier Suite Pool View – Twin",
        "guests": 2,
        "price": 120
      }
    ],
    "website_url": "https://goldentempleretreat.com/room/",
    "sort_order": 4
  },
  {
    "id": "hotel-golden-temple-villa",
    "slug": "golden-temple-villa",
    "name": "Golden Temple Villa",
    "area": "Svay Dangkum",
    "description": "A boutique luxury hotel on Sok San Road, near Siem Reap’s night market. Golden Temple Villa offers 22 well-appointed rooms, a serene swimming pool, spa, and restaurant, combining modern Khmer-inspired design with warm hospitality.",
    "price_level": "midrange",
    "price_from": 80,
    "rating": 4.7,
    "style": "Colonial Villa",
    "image_url": "/hotels/golden-temple-villa/hotel/main.jpeg",
    "room_types": [
      {
        "name": "Deluxe Double Garden View",
        "guests": 2,
        "price": 80
      },
      {
        "name": "Luxury Double Room",
        "guests": 2,
        "price": 110
      },
      {
        "name": "Premier Suite City View",
        "guests": 2,
        "price": 120
      },
      {
        "name": "Deluxe Twin City View",
        "guests": 2,
        "price": 99
      }
    ],
    "website_url": "https://thegoldentemplevilla.com/room/",
    "sort_order": 5
  },
  {
    "id": "hotel-eightfold-urban-resort",
    "slug": "eightfold-urban-resort",
    "name": "Eightfold Urban Resort",
    "area": "Sala Kamreuk",
    "description": "A five-star urban resort in Sala Kamreuk, Siem Reap, with contemporary rooms, a tropical pool, garden, restaurant, bar, and spa. Choose from pool-view rooms, pool-access rooms, family suites, triple rooms, and suites with a private pool.",
    "price_level": "midrange",
    "price_from": 68,
    "rating": 4.6,
    "style": "Urban Boutique Resort",
    "image_url": "/hotels/eightfold-urban-resort/hotel/main.webp",
    "room_types": [
      {
        "name": "Deluxe Family Suite",
        "guests": 4,
        "price": 173
      },
      {
        "name": "Deluxe Double or Twin Room with Pool View",
        "guests": 2,
        "price": 68
      },
      {
        "name": "Deluxe Triple Room",
        "guests": 3,
        "price": 126
      },
      {
        "name": "Deluxe Pool Access",
        "guests": 2,
        "price": 126
      },
      {
        "name": "Suite with Private Pool",
        "guests": 2,
        "price": 150
      }
    ],
    "website_url": "https://eightfoldurban.com/",
    "sort_order": 6
  },
  {
    "id": "hotel-shintamani-angkor",
    "slug": "shintamani-angkor",
    "name": "Shinta Mani Angkor",
    "area": "Old Market",
    "description": "A Bill Bensley-designed luxury retreat in Siem Reap’s Royal District, with 105 rooms and suites plus 10 private Bensley Pool Villas. Six pool villas can be combined into two-bedroom villas. Features tropical pools, Kroya restaurant, and Khmer Tonics Spa.",
    "price_level": "luxury",
    "price_from": 240,
    "rating": 4.8,
    "style": "Bensley-Designed Luxury",
    "image_url": "/hotels/shintamani-angkor/hotel/main.jpeg",
    "room_types": [
      {
        "name": "Bayon Room",
        "guests": 2,
        "price": 240,
        "category": "room"
      },
      {
        "name": "Angkor Superior",
        "guests": 2,
        "price": 240,
        "category": "room"
      },
      {
        "name": "Angkor Deluxe",
        "guests": 2,
        "price": 240,
        "category": "room"
      },
      {
        "name": "Bayon Junior Suite",
        "guests": 2,
        "price": 240,
        "category": "room"
      },
      {
        "name": "Bayon Executive Suite",
        "guests": 2,
        "price": 240,
        "category": "room"
      },
      {
        "name": "Bensley Pool Villa",
        "guests": 2,
        "price": 240,
        "category": "villa"
      }
    ],
    "website_url": "https://shintamani.com/angkor/",
    "sort_order": 7
  },
  {
    "id": "hotel-khmer-mansion-boutique",
    "slug": "khmer-mansion-boutique",
    "name": "Khmer Mansion Boutique Hotel",
    "area": "Svay Dangkum",
    "description": "A trendy boutique hotel decorated with Cambodian artwork, a 3-minute walk from Angkor Night Market. 22 rooms, two inviting pools, and a fantastic location on Sok San Road near Pub Street.",
    "price_level": "midrange",
    "price_from": 86,
    "rating": 4.6,
    "style": "Boutique Hotel",
    "image_url": "/hotels/khmer-mansion-boutique/hotel/main.jpeg",
    "room_types": [
      "Apsara Double Poolview",
      "Apsara Twin Poolview",
      "Deluxe Double Room, Poolside",
      "Suite (Mansion Suite)",
      "Family Suite, Connecting Rooms"
    ],
    "website_url": "https://www.khmermansion.com/book-now.php",
    "sort_order": 8
  },
  {
    "id": "hotel-park-hyatt-siem-reap",
    "slug": "park-hyatt-siem-reap",
    "name": "Park Hyatt Siem Reap",
    "area": "City Centre",
    "description": "A reimagined heritage icon in the heart of Siem Reap, with 104 rooms including 13 suites. Khmer artistry meets Art Deco design, with tranquil pools, a full-service spa, and The Living Room lounge.",
    "price_level": "luxury",
    "price_from": 230,
    "rating": 4.8,
    "style": "5-Star Luxury",
    "image_url": "/hotels/park-hyatt-siem-reap/hotel/main.jpeg",
    "room_types": [
      "2 Twin Beds with Garden View",
      "1 King Bed with Garden View",
      "1 King Bed",
      "2 Twin Beds",
      "1 King Bed Deluxe",
      "Park Suite King",
      "Park Executive Suite",
      "Rooftop Garden Suite",
      "Two Bedroom Pool Suite",
      "Presidential Suite"
    ],
    "website_url": "https://www.hyatt.com/park-hyatt/en-US/repph-park-hyatt-siem-reap/rooms",
    "sort_order": 9
  },
  {
    "id": "hotel-amansara",
    "slug": "amansara",
    "name": "Amansara",
    "area": "City Centre",
    "description": "A former royal guesthouse transformed into an Aman ultra-luxury retreat. 24 zen-minimalist suites of 75 sqm with private plunge pools, personal remorks, and a 24-hour on-call doctor. No TVs — pure tranquility.",
    "price_level": "luxury",
    "price_from": 1500,
    "rating": 5,
    "style": "Aman Ultra-Luxury",
    "image_url": "/hotels/amansara/hotel/main.jpeg",
    "room_types": [
      "Suite",
      "Courtyard Suite",
      "Pool Suite",
      "Junior Pool Suite",
      "Two-Bedroom Pool Suite"
    ],
    "website_url": "https://www.aman.com/resorts/amansara",
    "sort_order": 10
  },
  {
    "id": "hotel-raffles-grand-hotel-angkor",
    "slug": "raffles-grand-hotel-angkor",
    "name": "Raffles Grand Hotel d'Angkor",
    "area": "City Centre",
    "description": "A historic Siem Reap landmark blending French-Cambodian heritage with modern comfort. Choose from elegant State and Landmark Rooms, signature suites, or a private two-bedroom Royal Villa, with personal Raffles Butler service.",
    "price_level": "luxury",
    "price_from": 315,
    "rating": 4.9,
    "style": "Historic Grand Hotel",
    "image_url": "/hotels/raffles-grand-hotel-angkor/hotel/main.jpeg",
    "room_types": [
      "State Room Pool View King",
      "Landmark Room Pool View King",
      "Colonial Suite King",
      "Personality Junior Suite King Bed",
      "Raffles Suite King",
      "Landmark Suite King",
      {
        "name": "Two Bedrooms Royal Villa",
        "guests": 2,
        "price": 315,
        "category": "villa"
      }
    ],
    "website_url": "https://www.raffles.com/siem-reap/rooms-and-suites/",
    "sort_order": 11
  },
  {
    "id": "hotel-motherhome-guesthouse",
    "slug": "motherhome-guesthouse",
    "name": "MotherHome Guesthouse",
    "area": "Wat Bo",
    "description": "A budget guesthouse on Wat Bo Street, about a 10-minute walk from the Old Market and Pub Street. Its air-conditioned standard rooms are available with double, twin, or triple beds; guests have free Wi-Fi and bicycle rental.",
    "price_level": "budget",
    "price_from": 23,
    "rating": 4.6,
    "style": "Budget Guesthouse",
    "image_url": "/hotels/motherhome-guesthouse/hotel/main.jpeg",
    "room_types": [
      {
        "name": "Standard Double Room",
        "guests": 2,
        "price": 23
      },
      {
        "name": "Standard Twin Room",
        "guests": 2,
        "price": 23
      },
      {
        "name": "Standard Triple Room",
        "guests": 3,
        "price": 23
      }
    ],
    "website_url": null,
    "sort_order": 12
  },
  {
    "id": "hotel-le-nou-siemreap-guesthouse",
    "slug": "le-nou-siemreap-guesthouse",
    "name": "Le-nou Siemreap Guesthouse",
    "area": "Sala Kamreuk",
    "description": "A guesthouse on Street 63 offering a Double Room for up to two guests and a Double and Single Room for up to three guests, with private bathrooms, free Wi-Fi, and a terrace.",
    "price_level": "budget",
    "price_from": 22,
    "rating": 4.6,
    "style": "Guesthouse",
    "image_url": "/hotels/le-nou-siemreap-guesthouse/hotel/main.jpeg",
    "room_types": [
      {
        "name": "Double Room",
        "guests": 2,
        "price": 22
      },
      {
        "name": "Double and Single Room",
        "guests": 3,
        "price": 22
      }
    ],
    "website_url": "https://le-nou-guesthouse.vercel.app/#rooms",
    "sort_order": 13
  },
  {
    "id": "hotel-golden-takeo-guesthouse",
    "slug": "golden-takeo-guesthouse",
    "name": "Golden TaKeo Guesthouse",
    "area": "Wat Bo Village",
    "description": "A budget guesthouse in quiet Wat Bo Village, a short walk from the Royal Residence and Siem Reap River. Choose from fan-cooled or air-conditioned single, double, and twin rooms. The guesthouse offers free Wi-Fi and a rooftop restaurant.",
    "price_level": "budget",
    "price_from": 5,
    "rating": 4.3,
    "style": "Budget Guesthouse",
    "image_url": "/hotels/golden-takeo-guesthouse/hotel/main.webp",
    "room_types": [
      {
        "name": "Single Room – Fan",
        "guests": 1,
        "price": 5,
        "max_price": 7
      },
      {
        "name": "Double Room – Fan",
        "guests": 2,
        "price": 8
      },
      {
        "name": "Single Room – Air Conditioning",
        "guests": 1,
        "price": 7
      },
      {
        "name": "Double Room – Air Conditioning",
        "guests": 2,
        "price": 11
      },
      {
        "name": "Twin Room – Air Conditioning",
        "guests": 2,
        "price": 17
      }
    ],
    "website_url": "https://www.agoda.com/golden-takeo-guesthouse/hotel/siem-reap-kh.html",
    "sort_order": 14
  },
  {
    "id": "hotel-sweet-dreams-guesthouse",
    "slug": "sweet-dreams-guesthouse",
    "name": "Sweet Dreams Guesthouse",
    "area": "Wat Bo",
    "description": "A family-run guesthouse on Wat Bo Street with an outdoor pool, restaurant, and free Wi-Fi. Choose from air-conditioned double, twin, and triple rooms, a short walk from the Royal Residence and central Siem Reap.",
    "price_level": "budget",
    "price_from": 11,
    "rating": 4.5,
    "style": "Cozy Guesthouse",
    "image_url": "/hotels/sweet-dreams-guesthouse/hotel/main.webp",
    "room_types": [
      {
        "name": "Double Air Conditioning",
        "guests": 2,
        "price": 11
      },
      {
        "name": "Twin Air Conditioning",
        "guests": 2,
        "price": 11
      },
      {
        "name": "Triple Air Conditioning",
        "guests": 3,
        "price": 11
      }
    ],
    "website_url": null,
    "sort_order": 17
  }
];
