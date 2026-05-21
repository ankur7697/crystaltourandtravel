const imageBase = "https://images.unsplash.com";

export const packages = [
  {
    slug: "crystal-coast-escapes",
    place: "Beach + Island",
    title: "Clear-water coast breaks with resorts, transfers, and slow days.",
    summary:
      "A relaxed coastal package for travelers who want bright beaches, reliable stays, airport pickup, and enough open time to enjoy the destination.",
    days: "5 to 8 days",
    price: "$749",
    deposit: "$120",
    image:
      `${imageBase}/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=86`,
    gallery: [
      `${imageBase}/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=86`,
    ],
    highlights: [
      "Beachfront and near-beach hotel options",
      "Airport pickup and local transfers",
      "Island day tour or sunset cruise add-ons",
      "Flexible leisure days for couples and families",
    ],
    itinerary: [
      "Arrival, transfer, and resort check-in",
      "Coastal orientation tour with scenic stops",
      "Island activity, snorkeling, or cruise option",
      "Leisure day with optional spa or local food walk",
      "Departure transfer and checkout support",
    ],
  },
  {
    slug: "city-spark-weekends",
    place: "City Weekends",
    title: "Short city breaks with central hotels and walkable experiences.",
    summary:
      "A compact city itinerary for quick celebrations, work breaks, shopping weekends, and first-time visits.",
    days: "2 to 4 days",
    price: "$349",
    deposit: "$60",
    image:
      `${imageBase}/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=86`,
    gallery: [
      `${imageBase}/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=86`,
    ],
    highlights: [
      "Central hotel choices",
      "Airport or station transfer planning",
      "Food, shopping, and landmark route suggestions",
      "Upgrade options for shows, dinners, and private tours",
    ],
    itinerary: [
      "Arrival and central hotel check-in",
      "Landmark route and evening dining suggestion",
      "Half-day guided city experience or shopping block",
      "Checkout and transfer support",
    ],
  },
  {
    slug: "mountain-air-adventures",
    place: "Nature + Adventure",
    title: "Mountain and nature trips with guides, stays, and activity pacing.",
    summary:
      "An outdoors-focused plan with practical logistics for scenic roads, light adventure, local guides, and comfortable overnight stays.",
    days: "4 to 7 days",
    price: "$690",
    deposit: "$110",
    image:
      `${imageBase}/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=86`,
    gallery: [
      `${imageBase}/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=86`,
    ],
    highlights: [
      "Scenic hotels, cabins, or camp-style stays",
      "Guided outdoor activity options",
      "Transport timing planned around terrain",
      "Easy, moderate, and active pace choices",
    ],
    itinerary: [
      "Arrival, route briefing, and stay check-in",
      "Scenic viewpoint drive or guided nature walk",
      "Main adventure day with local guide support",
      "Slow morning, local market, or optional activity",
      "Departure transfer",
    ],
  },
  {
    slug: "heritage-lane-tours",
    place: "Culture + Heritage",
    title: "Culture-rich routes with old towns, food walks, and local stories.",
    summary:
      "A curated heritage route for travelers who prefer museums, neighborhoods, architecture, markets, and meaningful local experiences.",
    days: "5 to 9 days",
    price: "$820",
    deposit: "$130",
    image:
      `${imageBase}/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=86`,
    gallery: [
      `${imageBase}/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1496950866446-3253e1470e8e?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=86`,
    ],
    highlights: [
      "Old town and landmark route planning",
      "Local guide and food walk options",
      "Boutique or centrally located hotel choices",
      "Balanced free time for markets and neighborhoods",
    ],
    itinerary: [
      "Arrival and neighborhood orientation",
      "Guided landmark and old town tour",
      "Museum, market, or food walk experience",
      "Day trip to a nearby heritage location",
      "Checkout and transfer support",
    ],
  },
  {
    slug: "premium-private-journeys",
    place: "Premium Private",
    title: "Polished private journeys with better hotels and tailored movement.",
    summary:
      "A private-travel option for guests who want upgraded stays, direct transfers, curated dining, and fewer compromises.",
    days: "6 to 11 days",
    price: "$1,450",
    deposit: "$240",
    image:
      `${imageBase}/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=86`,
    gallery: [
      `${imageBase}/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=86`,
      `${imageBase}/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=86`,
    ],
    highlights: [
      "Premium hotel and suite options",
      "Private airport and intercity transfers",
      "Curated dining, wellness, and private tour add-ons",
      "Concierge-style itinerary handling",
    ],
    itinerary: [
      "Arrival with private transfer and premium check-in",
      "Signature city, coast, or island experience",
      "Leisure day with spa, dining, or scenic add-on",
      "Private excursion or slow local experience",
      "Departure support and transfer",
    ],
  },
];

export type TravelPackage = (typeof packages)[number];

export function getPackage(slug: string) {
  return packages.find((item) => item.slug === slug);
}
