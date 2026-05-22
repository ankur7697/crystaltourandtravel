import Image from "next/image";
import Link from "next/link";
import BrandLogo from "./components/BrandLogo";
import FlightSearch from "./components/FlightSearch";
import { packages } from "./data/packages";

const imageBase = "https://images.unsplash.com";

const destinations = [
  {
    name: "Maldives",
    mood: "Clear lagoons, overwater stays, slow mornings",
    image:
      `${imageBase}/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=82`,
  },
  {
    name: "Switzerland",
    mood: "Mountain trains, lakes, scenic towns",
    image:
      `${imageBase}/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=82`,
  },
  {
    name: "Japan",
    mood: "Food lanes, temples, rail routes",
    image:
      `${imageBase}/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=82`,
  },
];

const services = [
  "Mood-based trip planning",
  "Flight and hotel coordination",
  "Visa and document guidance",
  "Private transfers and experiences",
];

const faqs = [
  {
    question: "Is CrystalTourAndTravel a travel consultant?",
    answer:
      "CrystalTourAndTravel works as a travel consultant for trip planning, quote review, and reservation coordination. We help customers review travel options and coordinate bookings after the itinerary, pricing, and supplier terms are confirmed.",
  },
  {
    question: "Are the package prices final?",
    answer:
      "Package prices are starting estimates. Final pricing depends on travel dates, flight availability, hotel category, room type, destination rules, traveler count, and supplier availability.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Yes. Packages can be adjusted for departure city, destination, hotel preference, local transport, sightseeing pace, traveler type, and special occasions.",
  },
  {
    question: "When should I make payment?",
    answer:
      "Payment should be made only after your quote, itinerary, invoice, cancellation terms, and refund conditions are confirmed in writing.",
  },
  {
    question: "Do you help with flights only?",
    answer:
      "We can assist with flight options, hotels, travel packages, local transport, itinerary planning, and reservation coordination based on your trip details.",
  },
  {
    question: "How do I contact the team after submitting an inquiry?",
    answer:
      "You can reach us at info@crystaltourandtravel.com, +1 (579) 900-5844, or +1 888-333-4391 for follow-up on quotes, package details, or travel consultant support.",
  },
];

const mobileNavItems = [
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "/about-us" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "#destinations" },
      { label: "About Us", href: "/about-us" },
      { label: "Packages", href: "#packages" },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Flight Search", href: "#flights" },
      { label: "Hotel Search", href: "#flights" },
      { label: "Custom Trips", href: "#contact" },
      { label: "Visa Guidance", href: "#services" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#172554]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/92 text-white backdrop-blur">
        <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <a aria-label="CrystalTourAndTravel home" href="#">
            <BrandLogo inverted />
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold text-white/70 lg:flex">
            <a className="text-[#bef264]" href="#">
              Home
            </a>
            <a href="#destinations">Destinations</a>
            <Link href="/about-us">About Us</Link>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="shrink-0 rounded-full bg-[#bef264] px-4 py-3 text-sm font-black text-[#07111f] hover:bg-white sm:px-5"
            href="#flights"
          >
            Plan My Trip
          </a>
        </nav>
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 text-xs font-bold text-white/72 sm:px-8 sm:text-sm lg:hidden">
          {mobileNavItems.map((item) => (
            <a
              className="shrink-0 rounded-full border border-white/12 bg-white/8 px-3 py-2 sm:px-4"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#07111f] px-4 py-12 text-white sm:px-8 lg:min-h-[820px]">
        <Image
          src={`${imageBase}/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=86`}
          alt="CrystalTourAndTravel scenic road trip"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#07111f]/62" />
        <div className="mx-auto grid max-w-7xl gap-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-20">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#bef264] backdrop-blur sm:text-sm">
              Mood-based holidays + travel consultant
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Travel consulting built around your travel style.
            </h1>
            <p className="mt-8 max-w-2xl text-base font-medium leading-7 text-white/78 sm:text-xl sm:leading-9">
              Choose a mood, budget, and pace. We help shape the route,
              compare flights and stays, arrange local transfers, and coordinate
              the booking steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-sm font-black text-white">
              {["Coast", "City", "Nature", "Culture"].map((item) => (
                <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 backdrop-blur" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#c75b3a] px-7 py-4 text-center font-black text-white hover:bg-[#a94a31]"
                href="#packages"
              >
                View Packages
              </a>
              <a
                className="rounded-full border border-white/40 px-7 py-4 text-center font-black text-white hover:border-[#bef264] hover:text-[#bef264]"
                href="#contact"
              >
                Talk to Consultant
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl gap-5 border-t border-white/16 pt-6 text-sm font-bold text-white/70 sm:grid-cols-3">
              <p>
                <span className="block text-3xl font-black text-[#bef264]">
                  USA
                </span>
                departures supported
              </p>
              <p>
                <span className="block text-3xl font-black text-[#bef264]">
                  24h
                </span>
                consultant follow-up
              </p>
              <p>
                <span className="block text-3xl font-black text-[#bef264]">
                  Global
                </span>
                route options
              </p>
            </div>
          </div>

          <div className="border-l border-white/20 pl-6 lg:mb-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bef264]">
              Route snapshot
            </p>
            <div className="mt-5 space-y-5 text-white">
              {["Mood brief", "Route draft", "Supplier check", "Booking support"].map(
                (item, index) => (
                  <div className="flex gap-4" key={item}>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#07111f]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-black">{item}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/66">
                        {index === 0
                          ? "Tell us coast, city, nature, culture, or a custom mix."
                          : index === 1
                            ? "We map timing, stays, transfers, and experience windows."
                            : index === 2
                              ? "Flights, hotels, and availability are checked before payment."
                              : "You get written next steps before final confirmation."}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <FlightSearch />

      <section id="destinations" className="bg-[#f7f2ea] px-4 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where clients ask us to send them"
            title="Featured places grouped by feeling, not only by location."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {destinations.map((destination) => (
              <a
                className="group relative block min-h-[420px] overflow-hidden rounded-[2rem] bg-[#07111f] text-white shadow-xl shadow-[#172554]/10"
                href="#packages"
                key={destination.name}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#07111f]/35" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-6 sm:gap-5 sm:p-7">
                  <div>
                    <h3 className="text-3xl font-black text-white">
                      {destination.name}
                    </h3>
                    <p className="mt-2 leading-7 text-white/78">
                      {destination.mood}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#bef264] text-xl font-black text-[#07111f]">
                    -&gt;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="bg-white px-4 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <SectionHeading
              eyebrow="Packages from the USA to the world"
              title="Start from the USA, then travel anywhere with a plan built around you."
            />
            <p className="text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
              Every package can be adjusted for departure city, destination,
              hotel category, flights, local transport, food preference,
              sightseeing pace, and special occasions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {packages.map((item) => (
              <article
                className="grid overflow-hidden rounded-[1.5rem] border border-[#172554]/10 bg-[#f7f2ea] shadow-sm sm:grid-cols-[220px_1fr]"
                key={item.title}
              >
                <div className="relative min-h-[240px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 220px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#c75b3a]">
                    {item.place}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-[#172554]">
                    {item.title}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-[#475569]">
                    <span className="rounded-full bg-white px-4 py-2">
                      {item.days}
                    </span>
                    <span className="rounded-full bg-white px-4 py-2">
                      Hotels + local transport
                    </span>
                    <span className="rounded-full bg-white px-4 py-2">
                      Customizable
                    </span>
                  </div>
                  <div className="mt-7 flex items-center justify-between gap-5 border-t border-[#172554]/10 pt-5">
                    <div>
                      <p className="text-sm font-bold text-[#64748b]">From</p>
                      <p className="text-3xl font-black text-[#172554]">
                        {item.price}
                      </p>
                    </div>
                    <Link
                      className="rounded-full bg-[#172554] px-5 py-3 text-sm font-black text-white hover:bg-[#1e3a8a]"
                      href={`/packages/${item.slug}`}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#07111f] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-[#bef264]">
              What CrystalTourAndTravel handles
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              One planning desk for the moving parts of your trip.
            </h2>
            <div className="mt-10 grid gap-0 divide-y divide-white/12 border-y border-white/12">
              {services.map((service) => (
                <div
                  className="flex items-center justify-between gap-5 py-6"
                  key={service}
                >
                  <h3 className="text-xl font-black">{service}</h3>
                  <span className="h-3 w-3 shrink-0 rounded-full bg-[#c75b3a]" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] sm:min-h-[500px]">
            <Image
              src={`${imageBase}/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=84`}
              alt="Bridge and city travel view"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f7f2ea] px-4 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Questions before you book"
              title="Clear answers for travel planning, payment, and package changes."
            />
            <p className="mt-6 max-w-xl text-base leading-8 text-[#475569]">
              These answers cover the common questions customers ask before
              requesting a quote or starting a package booking.
            </p>
            <a
              className="mt-8 inline-block rounded-full bg-[#172554] px-6 py-4 font-black text-white hover:bg-[#1e3a8a]"
              href="#contact"
            >
              Ask a Question
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                className="group rounded-[1.25rem] border border-[#172554]/10 bg-white p-5 shadow-sm open:bg-[#f8eee8] sm:p-6"
                key={faq.question}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-[#172554]">
                  <span>{faq.question}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#c75b3a] text-xl text-white transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-[#475569]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#07111f] px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111827] text-white shadow-2xl shadow-black/20">
          <div className="grid gap-8 border-b border-white/10 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-[#fbbf24]">
                Get your itinerary
              </p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                Tell us the destination, dates, and budget. We will shape the
                route.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Share your travel idea and we will respond with practical next
                steps for flights, hotels, local transport, and sightseeing.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#bef264] p-5 text-[#07111f] sm:p-6 lg:self-end">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#172554]">
                Quick contact
              </p>
              <a
                className="mt-4 block break-words text-2xl font-black text-[#172554] hover:text-[#c75b3a]"
                href="mailto:info@crystaltourandtravel.com"
              >
                info@crystaltourandtravel.com
              </a>
              <div className="mt-4 grid gap-2 text-base font-black text-[#172554]">
                <a className="hover:text-[#c75b3a]" href="tel:+15799005844">
                  +1 (579) 900-5844
                </a>
                <a className="hover:text-[#c75b3a]" href="tel:+18883334391">
                  +1 888-333-4391
                </a>
              </div>
              <div className="mt-5 border-t border-[#0f172a]/10 pt-5 text-sm font-bold leading-6 text-[#475569]">
                <p className="font-black text-[#0f172a]">
                  CrystalTourAndTravel LLC
                </p>
                <p>210 Harbor View Suite 405</p>
                <p>San Francisco, CA 94105</p>
              </div>
              <a
                className="mt-5 inline-block rounded-full bg-[#172554] px-5 py-3 font-black text-white hover:bg-[#1e3a8a]"
                href="#flights"
              >
                Search Flights & Hotels
              </a>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:p-10">
            <div>
              <BrandLogo inverted />
              <p className="mt-4 max-w-sm leading-7 text-white/68">
                Personalized tour planning for families, groups, and business
                travelers who want clear guidance before they book.
              </p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-black uppercase tracking-[0.14em] text-[#fbbf24]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-white/70">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a className="hover:text-white" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 text-sm text-white/56 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>Copyright 2026 CrystalTourAndTravel. All rights reserved.</p>
            <p>Built for reliable holiday planning from inquiry to return.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-[#c75b3a]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#172554] sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
