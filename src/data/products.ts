// Add or edit products here. Pages, filters, search and recommendations all read from this file.
export const CATEGORIES = [
  "Solar Panels & Lighting",
  "Batteries & Energy Storage",
  "Commercial & Industrial Solar",
  "Complete Solar Systems & Kits",
  "Inverters, Chargers & MPPTs",
  "Monitoring & Communication Accessories"
] as const

export type Category = (typeof CATEGORIES)[number]

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  category: Category
  price: number | null // null = request a quote
  summary: string
  description: string
  specs: [string, string][]
  images: string[]
  featured?: boolean
}

type Shape = "grid" | "box" | "unit"
// Placeholder artwork. Replace `images` with real photo URLs (e.g. '/products/jinko-1.jpg').
const art = (shape: Shape, i: number) => {
  const h = [212, 200, 190, 222][i % 4]
  const body =
    shape === "grid"
      ? Array.from(
          { length: 24 },
          (_, k) =>
            `<rect x="${60 + (k % 6) * 46}" y="${70 + Math.floor(k / 6) * 46}" width="42" height="42" fill="hsl(${h} 70% ${24 + (k % 3) * 3}%)"/>`
        ).join("")
      : shape === "box"
        ? `<rect x="90" y="80" width="220" height="150" rx="10" fill="hsl(${h} 60% 30%)"/><rect x="118" y="106" width="164" height="22" fill="#FFB400"/><rect x="118" y="146" width="120" height="10" fill="#8fb2cc"/>`
        : `<rect x="110" y="60" width="180" height="190" rx="12" fill="hsl(${h} 30% 88%)" stroke="hsl(${h} 60% 30%)" stroke-width="6"/><circle cx="200" cy="130" r="30" fill="#FFB400"/><rect x="150" y="190" width="100" height="10" fill="hsl(${h} 60% 30%)"/>`
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="hsl(${h} 45% 93%)"/><g transform="rotate(${i * 6 - 9} 200 160)">${body}</g></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const P = (p: Omit<Product, "id" | "images"> & { shape: Shape }): Product => {
  const { shape, ...rest } = p
  return { ...rest, id: p.slug, images: [0, 1, 2, 3].map((i) => art(shape, i)) }
}

export const PRODUCTS: Product[] = [
  P({
    slug: "jinko-tiger-neo-550w",
    name: "Tiger Neo 550W Mono Panel",
    brand: "JinkoSolar",
    category: CATEGORIES[0],
    price: 690000,
    featured: true,
    shape: "grid",
    summary: "High-efficiency N-type panel for homes and shops.",
    description:
      "N-type TOPCon cells give strong output in Uganda's heat and better low-light yield in the early morning and evening.",
    specs: [
      ["Power", "550 W"],
      ["Efficiency", "21.3%"],
      ["Cell type", "N-type TOPCon"],
      ["Warranty", "12 yr product / 30 yr output"]
    ]
  }),

  P({
    slug: "ja-solar-450w-mono",
    name: "450W Mono PERC Panel",
    brand: "JA Solar",
    category: CATEGORIES[0],
    price: 560000,
    shape: "grid",
    summary: "Reliable mid-size panel for standard rooftops.",
    description:
      "A proven half-cut cell design that copes well with partial shade and dust. Suited to residential and small commercial rooftops.",
    specs: [
      ["Power", "450 W"],
      ["Efficiency", "20.7%"],
      ["Cell type", "Mono PERC"],
      ["Warranty", "12 yr product"]
    ]
  }),

  P({
    slug: "solar-street-light-60w",
    name: "60W All-in-One Solar Street Light",
    brand: "DC Solar",
    category: CATEGORIES[0],
    price: 480000,
    shape: "unit",
    summary: "Panel, battery and LED in one pole-mounted unit.",
    description:
      "Dusk-to-dawn lighting with motion-sensing dimming. No trenching or grid connection, ideal for roads, compounds and schools.",
    specs: [
      ["Lamp", "60 W LED"],
      ["Run time", "2 to 3 nights"],
      ["Rating", "IP65"],
      ["Control", "Light and motion sensor"]
    ]
  }),

  P({
    slug: "pylontech-us5000",
    name: "US5000 4.8kWh Lithium Battery",
    brand: "Pylontech",
    category: CATEGORIES[1],
    price: 6400000,
    featured: true,
    shape: "box",
    summary: "Stackable rack battery for home and business storage.",
    description:
      "LiFePO4 chemistry with a built-in BMS. Stack modules to grow storage as your load grows. Works with most hybrid inverters.",
    specs: [
      ["Capacity", "4.8 kWh"],
      ["Chemistry", "LiFePO4"],
      ["Cycle life", "6000+ cycles"],
      ["Voltage", "48 V"]
    ]
  }),

  P({
    slug: "felicity-100ah-lifepo4",
    name: "12.8V 100Ah LiFePO4 Battery",
    brand: "Felicity Solar",
    category: CATEGORIES[1],
    price: 1850000,
    shape: "box",
    summary: "Compact lithium battery for small systems.",
    description:
      "A lighter, longer-lasting swap for lead-acid in starter kits, shops and lighting systems.",
    specs: [
      ["Capacity", "1.28 kWh"],
      ["Chemistry", "LiFePO4"],
      ["Cycle life", "4000+ cycles"],
      ["Voltage", "12.8 V"]
    ]
  }),

  P({
    slug: "deye-50kw-hybrid",
    name: "50kW Three-Phase Hybrid Inverter",
    brand: "Deye",
    category: CATEGORIES[2],
    price: 21500000,
    shape: "unit",
    summary: "For factories, hotels, farms and institutions.",
    description:
      "Three-phase hybrid inverter with generator input and parallel support. Cuts diesel use and protects equipment from outages.",
    specs: [
      ["Output", "50 kW"],
      ["Phases", "3"],
      ["MPPT inputs", "4"],
      ["Parallel", "Up to 10 units"]
    ]
  }),

  P({
    slug: "commercial-100kwp-rooftop",
    name: "100kWp Rooftop Solar Package",
    brand: "DC Solar",
    category: CATEGORIES[2],
    price: null,
    shape: "grid",
    summary: "Designed, supplied and installed for your site.",
    description:
      "Site survey, load analysis, engineering, installation and commissioning. Pricing depends on roof type, load profile and storage.",
    specs: [
      ["Size", "100 kWp"],
      ["Includes", "Design, install, monitoring"],
      ["Lead time", "After survey"],
      ["Support", "Annual service plan"]
    ]
  }),

  P({
    slug: "solar-kit-5kw",
    name: "5kW Home Solar System",
    brand: "DC Solar",
    category: CATEGORIES[3],
    price: 14900000,
    featured: true,
    shape: "box",
    summary: "Runs a fullhousehold: fridge, TV, lights, pump.",
    description:
      "Ten 550W panels, a 5kW hybrid inverter, 4.8kWh lithium storage, mounting and cabling. Installation included within Kampala and surrounds.",
    specs: [
      ["Panels", "10 x 550 W"],
      ["Inverter", "5 kW hybrid"],
      ["Storage", "4.8 kWh"],
      ["Install", "Included"]
    ]
  }),

  P({
    slug: "solar-kit-1kw",
    name: "1kW Starter Solar Kit",
    brand: "DC Solar",
    category: CATEGORIES[3],
    price: 3200000,
    shape: "box",
    summary: "Lights, phones, TV and a small fridge.",
    description:
      "A first system for a small home or shop. Expandable later with more panels and batteries.",
    specs: [
      ["Panels", "2 x 450 W"],
      ["Inverter", "1 kW"],
      ["Storage", "1.28 kWh"],
      ["Install", "Optional"]
    ]
  }),

  P({
    slug: "victron-mppt-150-35",
    name: "SmartSolar MPPT 150/35",
    brand: "Victron Energy",
    category: CATEGORIES[4],
    price: 1650000,
    shape: "unit",
    summary: "Charge controller with Bluetooth monitoring.",
    description:
      "Fast MPPT tracking and a free phone app for live yield, battery state and settings.",
    specs: [
      ["Max PV voltage", "150 V"],
      ["Charge current", "35 A"],
      ["Bluetooth", "Built in"],
      ["Battery", "12/24/48 V"]
    ]
  }),

  P({
    slug: "growatt-spf-5000es",
    name: "SPF 5000ES Hybrid Inverter",
    brand: "Growatt",
    category: CATEGORIES[4],
    price: 3900000,
    shape: "unit",
    summary: "Off-grid inverter-charger with built-in MPPT.",
    description:
      "Pure sine wave output, a 5kW rating and dual MPPT. Works with lithium or lead-acid batteries.",
    specs: [
      ["Output", "5 kW"],
      ["Wave", "Pure sine"],
      ["MPPT", "Dual"],
      ["Battery", "48 V"]
    ]
  }),

  P({
    slug: "victron-cerbo-gx",
    name: "Cerbo GX Monitor",
    brand: "Victron Energy",
    category: CATEGORIES[5],
    price: 1950000,
    shape: "unit",
    summary: "See and control your whole system remotely.",
    description:
      "Central hub for inverters, batteries and MPPTs. Check output and alarms from anywhere with the VRM portal.",
    specs: [
      ["Connectivity", "Ethernet, WiFi, USB"],
      ["Portal", "VRM remote"],
      ["Ports", "3 x VE.Direct"],
      ["Power", "8 to 70 V DC"]
    ]
  }),

  P({
    slug: "growatt-shine-wifi-x",
    name: "Shine WiFi-X Datalogger",
    brand: "Growatt",
    category: CATEGORIES[5],
    price: 390000,
    shape: "unit",
    summary: "Plug-in WiFi monitoring for Growatt inverters.",
    description:
      "Send generation data to the Growatt app so you can track savings and spot faults early.",
    specs: [
      ["Link", "2.4 GHz WiFi"],
      ["App", "ShinePhone"],
      ["Fits", "Growatt inverters"],
      ["Install", "Plug and play"]
    ]
  })
]

export const brandsOf = () => [...new Set(PRODUCTS.map((p) => p.brand))].sort()
export const bySlug = (s: string) => PRODUCTS.find((p) => p.slug === s)
export const search = (q: string, list = PRODUCTS) => {
  const t = q.toLowerCase().split(/\s+/).filter(Boolean)
  return t.length
    ? list.filter((p) =>
        t.every((w) => `${p.name} ${p.brand} ${p.category} ${p.summary}`.toLowerCase().includes(w))
      )
    : list
}

export const similar = (p: Product, n = 4) =>
  PRODUCTS.filter((x) => x.id !== p.id)
    .map((x) => ({ x, s: (x.category === p.category ? 2 : 0) + (x.brand === p.brand ? 1 : 0) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((r) => r.x)
