import type { Metadata } from "next";
import {
  Layers,
  Gift,
  PenLine,
  Lamp,
  Sparkles,
  Package,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import LeadForm from "@/app/components/LeadForm";

export const metadata: Metadata = {
  title: "The Merchant — Industrial Chic Gifts, Stationery & Home",
  description:
    "A supplier of industrial chic wares, general gifts, stationery, and home furnishings. Carrying top brands like Voluspa, Matt & Nat, Rifle Paper Co., Fishs Eddy, and much more.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const collections = [
  {
    Icon: Layers,
    title: "Industrial Chic Wares",
    description:
      "Beautifully utilitarian pieces that blend raw materials with refined design — where form and function meet.",
  },
  {
    Icon: Gift,
    title: "General Gifts",
    description:
      "The perfect find for every occasion, from the perfectly ordinary to the wonderfully extraordinary.",
  },
  {
    Icon: PenLine,
    title: "Stationery",
    description:
      "Cards, notebooks, planners, and paper goods from the world's most beloved stationery brands.",
  },
  {
    Icon: Lamp,
    title: "Home Furnishings",
    description:
      "Thoughtfully designed pieces that bring warmth, personality, and a little magic to any space.",
  },
];

const stats = [
  { value: "50+", label: "Top Brands Carried" },
  { value: "1,000+", label: "Unique Products" },
  { value: "5★", label: "Average Review" },
  { value: "Free", label: "Gift Wrapping" },
];

const brands = [
  "Voluspa",
  "Matt & Nat",
  "Rifle Paper Co.",
  "Fishs Eddy",
  "& Many More",
];

const features = [
  "Every product personally curated by our team",
  "Complimentary gift wrapping on all purchases",
  "Exclusive access to limited-edition collections",
  "Knowledgeable staff to help find the perfect gift",
  "Wholesale and trade accounts available",
];

const valueProps = [
  {
    Icon: Sparkles,
    title: "Expertly Curated",
    description:
      "Handpicked for quality, beauty, and originality — only the best makes it to our shelves.",
  },
  {
    Icon: Package,
    title: "Gift Wrapping",
    description:
      "Complimentary wrapping on every purchase. Every gift deserves a beautiful presentation.",
  },
  {
    Icon: Award,
    title: "Top Brands",
    description:
      "We carry only the brands we'd buy for ourselves — and a few you haven't discovered yet.",
  },
  {
    Icon: Users,
    title: "Personal Service",
    description:
      "Our staff knows the collection intimately and loves helping you find the right thing.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Regular Customer",
    quote:
      "The Merchant is my go-to for every birthday, housewarming, and 'just because' gift. The curation is impeccable — I always find something I've never seen anywhere else.",
  },
  {
    name: "James R.",
    role: "Interior Designer",
    quote:
      "I source home accessories for clients here regularly. The industrial chic range is unlike anything else in the city and the team is always genuinely helpful.",
  },
  {
    name: "Mia T.",
    role: "Stationery Lover",
    quote:
      "The Rifle Paper Co. and Fishs Eddy selections are stunning. I drove an hour to visit and left with three bags full. Worth every minute of the trip.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-300/80 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-none bg-ink flex items-center justify-center shrink-0">
              <span className="text-white font-black text-sm leading-none">
                M
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-ink">
              The Merchant
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm">
            <a
              href="#collections"
              className="rounded-lg bg-jade text-white px-4 py-2 font-semibold hover:bg-jade-3 transition-colors"
            >
              Collections
            </a>
            <a href="#brands" className="rounded-lg bg-jade text-white px-4 py-2 font-semibold hover:bg-jade-3 transition-colors">
              Brands
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-jade px-5 py-2.5 text-sm font-semibold text-white hover:bg-jade-3 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-8 pb-4 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-0 flex justify-center">
            <img
              src="/images/logo-mark.jpg"
              alt="The Merchant — USA Atlanta Trademark"
              className="w-48 md:w-72 mix-blend-multiply"
            />
          </div>

          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed -mt-4">
            A supplier of industrial chic wares, general gifts, stationery, and
            home furnishings — carrying top brands like Voluspa, Matt &amp;
            Nat, Rifle Paper Co., Fishs Eddy, and much more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-8 py-4 text-base font-bold text-white hover:bg-zinc-800 transition-all"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#brands"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-8 py-4 text-base font-semibold text-zinc-600 hover:border-jade/50 hover:text-ink transition-all"
            >
              View Brands
            </a>
          </div>
        </div>
      </section>

      {/* ── Photo Strip ── */}
      <div className="grid grid-cols-3 gap-px bg-stone-300">
        <div className="aspect-square overflow-hidden">
          <img src="/images/store-interior.jpg" alt="The Merchant store interior" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src="/images/paddywax.jpg" alt="Paddywax candles" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square overflow-hidden">
          <img src="/images/bowl-flatlay.jpg" alt="Curated home goods" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="border-y border-stone-300 bg-cream-2/50 py-12 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-black text-jade">
                {stat.value}
              </p>
              <p className="text-sm text-zinc-500 mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Collections ── */}
      <section id="collections" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-jade mb-3">
              What We Carry
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-ink">
              Our Collections
            </h2>
            <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
              Four distinct categories, one carefully curated point of view.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-none border border-stone-300 bg-white p-6 hover:border-jade/40 transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none bg-jade/10 text-jade group-hover:bg-jade/15 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-ink">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Brands ── */}
      <section
        id="brands"
        className="py-20 px-6 border-y border-stone-300 bg-cream-2/40"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-jade mb-3">
            Featured Brands
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">
            The brands you love —
            <br className="hidden sm:block" /> and the ones you&apos;re about to
            discover.
          </h2>
          <p className="text-zinc-500 mb-10 max-w-lg mx-auto">
            We partner with makers and brands that share our obsession with
            quality, design, and originality.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  brand === "& Many More"
                    ? "border-jade/40 bg-jade/10 text-jade"
                    : "border-stone-300 bg-white text-zinc-700 hover:border-jade/40 hover:text-ink"
                }`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-jade mb-3">
              Why The Merchant
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-ink leading-tight mb-6">
              Every piece
              <br />tells a story.
            </h2>
            <p className="text-zinc-500 mb-8 text-lg leading-relaxed">
              We believe great gifts aren&apos;t just bought — they&apos;re
              found. Our team scours the world&apos;s best makers so you can
              walk in, fall in love, and leave with something truly special.
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-jade shrink-0 mt-0.5" />
                  <span className="text-zinc-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden">
            <img
              src="/images/soul-book.jpg"
              alt="Soul cookbook and candles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="py-24 px-6 bg-cream-2/40 border-t border-stone-300"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-jade mb-3">
              Happy Customers
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-ink">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, quote }) => (
              <div
                key={name}
                className="rounded-none border border-stone-300 bg-white p-8 flex flex-col"
              >
                <div className="flex mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-jade text-jade"
                    />
                  ))}
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-ink">{name}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jewelry Photo ── */}
      <div className="h-[420px] overflow-hidden border-t border-stone-300">
        <img src="/images/jewelry.jpg" alt="Jewelry and accessories" className="w-full h-full object-cover object-center" />
      </div>

      {/* ── Contact / Lead Form ── */}
      <section id="contact" className="py-24 px-6 border-t border-stone-300">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-jade mb-3">
              Say Hello
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">
              Get in Touch
            </h2>
            <p className="text-zinc-500">
              Questions about a product, setting up a trade account, or
              something else entirely — we&apos;d love to hear from you.
            </p>
          </div>

          <div className="rounded-none border border-stone-300 bg-white p-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink py-14 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 rounded-none bg-jade flex items-center justify-center">
                  <span className="text-white font-black text-xs leading-none">
                    M
                  </span>
                </div>
                <span className="font-bold text-white">The Merchant</span>
              </div>
              <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
                Industrial chic wares, general gifts, stationery, and home
                furnishings. Carrying the brands you love and the ones
                you&apos;re about to discover.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white mb-4">Collections</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                {[
                  "Industrial Chic Wares",
                  "General Gifts",
                  "Stationery",
                  "Home Furnishings",
                ].map((c) => (
                  <li key={c}>
                    <a
                      href="#collections"
                      className="hover:text-white transition-colors"
                    >
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white mb-4">Contact</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-jade" />
                  <span>hello@themerchant.co</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-jade" />
                  <span>+1 (555) 000-0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-jade" />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 The Merchant. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
