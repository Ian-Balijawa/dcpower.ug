export const CATEGORIES = [
  "Solar Panels & Lighting",
  "Solar Lights",
  "Solar Street Lights",
  "Solar Flood Lights",
  "Batteries & Energy Storage",
  "Commercial & Industrial Solar",
  "Complete Solar Systems & Kits",
  "Inverters, Chargers & MPPTs",
  "Monitoring & Communication Accessories",
] as const

export type Category = (typeof CATEGORIES)[number]

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  category: Category
  price: number,
  oldPrice?: number | null
  stock?: {
    status: "in_stock" | "out_of_stock" | "pre_order"
    quantity?: number
  }
  sku?: string
  summary: string
  description: string
  features?: string[]
  specs: [string, string][]
  images: string[]
  warranty?: string
  support?: string
  installation?: string[]
  applications?: string[]
  paymentOptions?: {
    name: string
    description: string
    payments?: number
    amountPerPayment?: number
  }[]

  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "blue-carbon-56w-solar-king-2",
    slug: "blue-carbon-56w-solar-king-2",
    name:
      "Blue Carbon 56W 5,800-Lumen LED Solar Street Light, Solar King Light 2.0",
    brand: "Blue Carbon",
    category: "Solar Street Lights",
    price: 690000,
    oldPrice: 770000,
    sku: "45515",
    stock: {
      status: "in_stock",
    },

    featured: true,

    summary:
      "56W CREE LED solar street light with 5,800 lumens, 120W monocrystalline solar panel, 90Ah LiFePO₄ battery and intelligent dusk-to-dawn lighting.",

    description:
      "The Blue Carbon Solar King Light 2.0 is an integrated solar street light designed for roads, compounds, residential areas, parks and rural pathways. It combines a high-output CREE LED, Grade A+ monocrystalline solar panel and high-cycle LiFePO₄ battery with intelligent dusk-to-dawn power management.",

    features: [
      "56W CREE LEDs delivering 5,800 lumens",
      "120W Grade A+ monocrystalline solar panel",
      "90 ± 5Ah LiFePO₄ battery",
      "Automatic dusk-to-dawn operation",
      "6 + X intelligent all-night lighting mode",
      "At least 12 hours of lighting duration",
      "Remote control for lighting modes and brightness",
      "6-hour and 8-hour timer options",
      "85% and 70% dimming modes",
      "IP65 dust and water resistance",
      "Patented one-piece aluminium-magnesium alloy body",
      "UV-resistant PC optical lens",
      "High-cycle LiFePO₄ battery chemistry",
      "Designed for extreme climate conditions",
      "Pre-assembled modular design for faster installation",
      "Fits standard 60mm spigot poles",
    ],

    specs: [
      ["LED Power", "56 W"],
      ["Light Output", "5,800 lumens"],
      ["LED Type", "CREE LEDs"],
      ["Solar Panel", "5 V / 120 W Grade A+ monocrystalline PV"],
      ["Battery", "3.2 V / 90 ± 5 Ah LiFePO₄"],
      ["Colour Temperature", "3,000 – 6,500 K"],
      ["Lighting Duration", "≥ 12 hours in 6 + X intelligent mode"],
      ["Recommended Mounting Height", "8 – 10 m"],
      ["Optimal Pole Spacing", "35 – 45 m"],
      ["Full-Sun Charging Time", "3 – 4 hours"],
      ["Operating Temperature", "–47 °C to +70 °C"],
      ["Storage Temperature", "0 °C to +55 °C"],
      ["Relative Humidity", "≤ 90% RH"],
      ["Ingress Protection", "IP65"],
      ["Warranty", "12 months"],
      ["Product Life", "Over 10 years"],
      ["Packaged LED Unit Dimensions", "650 × 320 × 325 mm"],
      ["Mounting", "Standard 60 mm spigot pole"],
    ],

    applications: [
      "Roads",
      "Residential roads",
      "Compounds",
      "Parks",
      "Squares",
      "Private gardens",
      "Rural pathways",
    ],

    installation: [
      "Mounts on standard 60 mm spigot poles",
      "Recommended mounting height: 8 – 10 m",
      "Recommended pole spacing: 35 – 45 m",
      "Integrated pre-assembled lamp head and battery module",
    ],
    warranty: "12 Months Warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 115000,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 69000,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],

    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/03/Blue-Carbon-36W-3600-Lumen-LED-Solar-Street-Light-King-Light-2.0-1.png",
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/03/Blue-Carbon-36W-3600-Lumen-LED-Solar-Street-Light-King-Light-2.0.png",
    ],
  },

  {
    id: "blue-carbon-50w-crossbow-2",
    slug: "blue-carbon-50w-crossbow-2",
    name:
      "Blue Carbon 50W 5,400-Lumen LED Solar Street Light, Crossbow Light 2.0",
    brand: "Blue Carbon",
    category: "Solar Street Lights",
    price: 590000,
    oldPrice: 750000,
    sku: "47246",
    stock: {
      status: "in_stock",
    },
    summary: "50W integrated solar street light producing 5,400 lumens with a 105W monocrystalline panel, 70Ah LiFePO₄ battery and remote-controlled intelligent lighting.",
    description: "The Blue Carbon Crossbow Light 2.0 BCT-OLC2.0-B is an integrated LED solar street light designed for outdoor roads, estates, compounds, parks and public spaces. It provides automatic dusk-to-dawn operation without grid electricity.",
    features: [
      "50W LED solar street light",
      "5,400 lumens light output",
      "105W monocrystalline solar panel",
      "3.2V / 70Ah LiFePO₄ battery",
      "Automatic dusk-to-dawn operation",
      "Intelligent power control",
      "Remote control for brightness and working modes",
      "IP65 dust and water resistance",
      "100,000-hour lamp life",
      "Adjustable solar panel angle",
      "Aluminium alloy body",
      "Low-voltage system design",
      "No grid electricity required",
      "Integrated modular design",
    ],
    specs: [
      ["Series", "Crossbow Light 2.0"],
      ["Model", "BCT-OLC2.0-B"],
      ["Product Type", "Integrated LED solar street light"],
      ["Rated LED Power", "50 W"],
      ["Light Output", "5,400 lumens"],
      ["Light Source", "50W LED"],
      ["Colour Temperature", "6,500 K / 4,000 K"],
      ["Lamp Life", "100,000 hours"],
      ["Lighting Control", "Intelligent power control"],
      ["Operation", "Automatic dusk-to-dawn"],
      ["Working Modes", "Adjustable by remote control"],
      ["Solar Panel", "105 W monocrystalline"],
      ["Solar Panel Voltage", "5 V"],
      ["Battery Type", "LiFePO₄ lithium battery"],
      ["Battery Rating", "3.2 V / 70 Ah ±5 Ah"],
      ["Charging Method", "Solar charging"],
      ["Grid Electricity", "Not required"],
      ["Recommended Installation Height", "8 – 9 m"],
      ["Recommended Installation Distance", "30 – 35 m"],
      ["Solar Panel Angle", "Adjustable"],
      ["Housing", "Aluminium alloy body"],
      ["Protection Rating", "IP65"],
      ["System Voltage", "Low-voltage design"],
      ["Warranty", "12 months"],
    ],
    applications: [
      "Outdoor roads",
      "Estates",
      "Residential compounds",
      "Parks",
      "Public spaces",
      "Road and compound lighting",
    ],
    installation: [
      "Straight pole installation",
      "Holding pole installation",
      "Wall-mounted installation",
      "Recommended installation height: 8 – 9 m",
      "Recommended installation distance: 30 – 35 m",
      "Adjustable solar panel angle",
    ],
    warranty: "12 Months Warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 98333,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 59000,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "/images/products/Blue-Carbon-36W-3600-Lumen-LED-Solar-Street-Light-King-Light-2.0-1.webp",
      "/images/products/Blue-Carbon-50W-5400-Lumen-LED-Solar-Street-Light-2-100x100.png",
      "/images/products/Blue-Carbon-50W-5400-Lumen-LED-Solar-Street-Light-3-100x100.png",
    ],
  },
  {
    id: "blue-carbon-wawa-light-6",
    slug: "blue-carbon-wawa-light-6",
    name:
      "Blue Carbon WaWa Light 6.0 Solar Flood Light BCT-WW6.0, 5,600 Lumens",
    brand: "Blue Carbon",
    category: "Solar Flood Lights",
    price: 590000,
    oldPrice: 700000,
    sku: "44809",
    stock: {
      status: "in_stock",
    },
    featured: true,
    summary: "5,600-lumen solar flood light with a 105W monocrystalline solar panel, 80Ah LiFePO₄ battery and remote-controlled intelligent power management.",
    description: "The Blue Carbon WaWa Light 6.0 is a high-output solar flood light designed for outdoor commercial, security and public-space lighting. It uses a 105W monocrystalline solar panel, 80Ah LiFePO₄ battery and intelligent 6 + X power control for extended night operation.",
    features: [
      "5,600 lumens light output",
      "105W monocrystalline solar panel",
      "3.2V / 80Ah LiFePO₄ lithium battery",
      "Automatic solar charging",
      "6 + X intelligent power control",
      "6-hour and 8-hour timing modes",
      "Remote control for on/off and brightness",
      "Remote-controlled working modes",
      "100,000-hour LED lifespan",
      "Imported high-lumen LED beads",
      "Aluminium-magnesium alloy casing",
      "PC outdoor optical lens",
      "No grid wiring required",
      "Multiple installation options",
      "IP-rated outdoor construction",
    ],
    specs: [
      ["Product Name", "WaWa Light 6.0"],
      ["Model", "BCT-WW6.0"],
      ["Product Type", "Solar flood light"],
      ["Brand", "Blue Carbon"],
      ["Light Output", "5,600 lumens"],
      ["Solar Panel", "5 V / 105 W monocrystalline"],
      ["Lighting Mode", "6 + X intelligent power control"],
      ["Remote Control", "Yes"],
      ["Timing Modes", "6-hour and 8-hour"],
      ["LED Lifespan", "100,000 hours"],
      ["Battery Type", "LiFePO₄ lithium battery"],
      ["Battery Rating", "3.2 V / 80 Ah"],
      ["Charging Method", "Solar charging"],
      ["Grid Electricity", "Not required"],
      ["Housing Material", "Aluminium-magnesium alloy"],
      ["Lens Type", "PC outdoor optical lens"],
      ["Outdoor Use", "Yes"],
      ["Working Temperature", "-40 °C to +70 °C"],
      ["Wiring", "No grid wiring required for normal solar operation"],
      ["Warranty", "12 months"],
    ],
    applications: [
      "Streets",
      "Parks",
      "Hotels",
      "Factories",
      "Basketball courts",
      "Commercial spaces",
      "Security lighting",
      "Outdoor public spaces",
    ],
    installation: [
      "Ground installation",
      "Pole installation",
      "Billboard installation",
      "Lamp post installation",
      "Wall installation",
    ],
    warranty: "12 Months Warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 98333,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 59000,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/03/Blue-Carbon-WaWa-Light-6.0-Solar-Flood-Light-BCT-WW6.0.png",
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2026/07/Kweli-Energy-900Wp-2.5kWh-1.5kVA-Complete-Hybrid-Solar-Power-System.png"
    ],
  },

  {
    id: "jinko-725w-tiger-neo-jkm725n-66hl5-bdv",
    slug: "jinko-725w-tiger-neo-jkm725n-66hl5-bdv",
    name: "Jinko 725W Tiger Neo N-Type TOPCon Bifacial Dual Glass Solar Panel JKM725N-66HL5-BDV",
    brand: "Jinko Solar",
    category: "Solar Panels & Lighting",
    // Price was not provided in the supplied product data.
    price: 0,
    stock: {
      status: "in_stock",
    },
    summary:
      "725W N-Type TOPCon bifacial dual-glass solar panel with 23.34% efficiency, 1500V system voltage and high-output performance for commercial and utility-scale solar installations.",
    description:
      "The Jinko JKM725N-66HL5-BDV is a 725W Tiger Neo solar panel built using N-Type TOPCon technology and a bifacial dual-glass construction. It delivers 725W at standard test conditions with 23.34% module efficiency. Its bifacial design allows the rear of the module to generate additional energy from reflected sunlight, while its dual-glass construction and IP68-rated junction box support long-term outdoor operation.",
    features: [
      "725W rated maximum power",
      "23.34% module efficiency",
      "Jinko Tiger Neo series",
      "N-Type TOPCon cell technology",
      "Bifacial power generation",
      "Dual-glass module construction",
      "HOT 3.0 technology",
      "SMBB cell technology",
      "0 to +3% positive power tolerance",
      "1500VDC maximum system voltage",
      "IP68-rated junction box",
      "2.0mm anti-reflective front glass",
      "2.0mm heat-strengthened rear glass",
      "Anodised aluminium frame",
      "5400Pa front and 2400Pa rear static load rating",
    ],

    specs: [
      ["Maximum Power (Pmax)", "725 W"],
      ["Maximum Power Voltage (Vmp)", "41.00 V"],
      ["Maximum Power Current (Imp)", "17.69 A"],
      ["Open-Circuit Voltage (Voc)", "49.20 V"],
      ["Short-Circuit Current (Isc)", "18.74 A"],
      ["Module Efficiency", "23.34%"],
      ["Power Tolerance", "0 to +3%"],
      ["Maximum System Voltage", "1500 VDC"],
      ["Maximum Series Fuse Rating", "35 A"],
      ["Cell Type", "N-Type monocrystalline"],
      ["Number of Cells", "132 (66 × 2)"],
      ["Dimensions", "2384 × 1303 × 33 mm"],
      ["Weight", "37.5 kg"],
      ["Front Glass", "2.0mm anti-reflection coated glass"],
      ["Rear Glass", "2.0mm heat-strengthened glass"],
      ["Frame", "Anodised aluminium alloy"],
      ["Junction Box", "IP68 rated"],
      ["Output Cable", "4.0 mm²"],
      ["Connector Type", "JK03M / JK03M2 / others"],
      ["Operating Temperature", "-40°C to +70°C"],
      ["Protection Class", "Class II"],
      ["IEC Fire Type", "Class C"],
      ["Temperature Coefficient of Pmax", "-0.29%/°C"],
      ["Temperature Coefficient of Voc", "-0.25%/°C"],
      ["Temperature Coefficient of Isc", "+0.045%/°C"],
      ["Product Warranty", "12 years"],
      ["Linear Power Warranty", "30 years"],
      ["First-Year Degradation", "1%"],
      ["Annual Degradation", "0.40%"],
      ["Stated Power Retention After 30 Years", "87.4%"],
      ["Bifacial BNPI Maximum Power", "800 W"],
      ["Bifacial BNPI Vmp", "41.03 V"],
      ["Bifacial BNPI Imp", "19.50 A"],
      ["Bifacial BNPI Voc", "49.12 V"],
      ["Bifacial BNPI Isc", "20.71 A"],
      ["Bifaciality Coefficient - Voc", "98 ±5%"],
      ["Bifaciality Coefficient - Isc", "80 ±5%"],
      ["Bifaciality Coefficient - Pmax", "80 ±5%"],
    ],

    applications: [
      "Commercial and industrial solar systems",
      "Ground-mounted solar plants",
      "Agricultural and productive-use installations",
      "Large hybrid solar and battery systems",
      "Solar carports and canopies",
      "Utility-scale PV installations",
    ],

    warranty: "12-year product warranty; 30-year linear power warranty",
    support: "Lifetime After-Sales Support",

    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2026/09/Jinko-725W-Tiger-Neo-N-Type-TOPCon-Bifacial-Dual-Glass-Solar-Panel-JKM725N-66HL5-BDV.png",
    ],
  },

  {
    id: "jinko-620wp-n-type-jkm620n-66hl4m-v",
    slug: "jinko-620wp-n-type-jkm620n-66hl4m-v",
    name: "Jinko 620Wp N-Type Solar Panel JKM620N-66HL4M-(V), TOPCon, 1500V System",
    brand: "Jinko Solar",
    category: "Solar Panels & Lighting",
    price: 439000,
    oldPrice: 550000,
    sku: "55191",
    stock: {
      status: "in_stock",
    },
    summary: "620Wp N-Type TOPCon monocrystalline solar panel with 22.95% efficiency, 132 half-cut cells and 1000/1500V DC system compatibility.",
    description: "The Jinko 620Wp N-Type Solar Panel JKM620N-66HL4M-(V) uses N-Type TOPCon monocrystalline technology with 132 half-cut cells, HOT 3.0 and SMBB technology. It is designed for residential, commercial, industrial, hybrid, mini-grid and institutional solar installations.",
    features: [
      "620Wp maximum power output",
      "22.95% module efficiency",
      "N-Type TOPCon monocrystalline technology",
      "132 half-cut cells",
      "HOT 3.0 technology",
      "SMBB technology",
      "Anti-PID protection",
      "1000/1500V DC maximum system voltage",
      "IP68-rated junction box",
      "0 to +3% power tolerance",
      "12-year product warranty",
      "30-year linear power warranty",
    ],
    specs: [
      ["Maximum Power (Pmax)", "620 W"],
      ["Maximum Power Voltage (Vmp)", "40.90 V"],
      ["Maximum Power Current (Imp)", "15.16 A"],
      ["Open-Circuit Voltage (Voc)", "48.95 V"],
      ["Short-Circuit Current (Isc)", "16.15 A"],
      ["Module Efficiency", "22.95%"],
      ["Power Tolerance", "0 to +3%"],
      ["Temperature Coefficient of Pmax", "-0.29%/°C"],
      ["Temperature Coefficient of Voc", "-0.25%/°C"],
      ["Temperature Coefficient of Isc", "+0.045%/°C"],
      ["Cell Type", "N-Type monocrystalline"],
      ["Number of Cells", "132 (66 × 2)"],
      ["Dimensions", "2382 × 1134 × 35 mm"],
      ["Weight", "28.2 kg"],
      ["Front Glass", "3.2mm anti-reflection coated, high-transmission, low-iron tempered glass"],
      ["Frame", "Anodised aluminium alloy"],
      ["Junction Box", "IP68 rated"],
      ["Protection Class", "Class II"],
      ["IEC Fire Type", "Class C"],
      ["Output Cable", "4.0 mm²"],
      ["Connector Type", "JK03M / MC4 / Others"],
      ["Operating Temperature", "-40°C to +70°C"],
      ["Maximum System Voltage", "1000/1500V DC (IEC)"],
      ["Maximum Series Fuse Rating", "30 A"],
      ["Product Warranty", "12 years"],
      ["Linear Power Warranty", "30 years"],
      ["First-Year Degradation", "1%"],
      ["Annual Degradation", "0.40%"],
    ],
    applications: [
      "Residential solar power systems",
      "Commercial and industrial solar installations",
      "Captive solar power plants",
      "Solar hybrid systems",
      "Battery energy storage systems",
      "Solar mini-grids",
      "Institutional and NGO solar projects",
      "Large rooftop and ground-mounted solar arrays",
    ],
    warranty: "12-year product warranty; 30-year linear power warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Advance",
        description:
          "Apply today. Get approved. Pay deposit. Receive in 2-7 days. Clear balance slowly.",
        amountPerPayment: 307300,
      },
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 73167,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 43900,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2024/09/Jinko-Solar-540-Watt-24V-Monocrystalline-Solar-Panel-JKM545M-72HL4.png",
    ],
  },
  {
    id: "jinko-585w-n-type-topcon-solar-panel",
    slug: "jinko-585w-n-type-topcon-solar-panel",
    name: "Jinko 585W Monocrystalline Solar Panel, N-Type TOPCon Half-Cell, 1500V System",
    brand: "Jinko Solar",
    category: "Solar Panels & Lighting",
    price: 399000,
    oldPrice: 429000,
    sku: "49520",
    stock: {
      status: "in_stock",
    },
    summary: "585W N-Type TOPCon monocrystalline half-cell solar panel with approximately 22.6% efficiency and 1500V DC system compatibility.",
    description:
      "The 585W N-Type TOPCon Monocrystalline Solar Panel is a high-efficiency photovoltaic module designed for reliable solar energy generation. Its half-cell architecture reduces internal resistance and improves performance under partial shading, while its robust aluminium frame, tempered glass and IP68 junction box support outdoor durability.",
    features: [
      "585W high-output solar generation",
      "N-Type TOPCon monocrystalline technology",
      "Half-cell design",
      "Approximately 22.6% module efficiency",
      "Stable performance in high temperatures and low-light conditions",
      "Suitable for on-grid, off-grid and hybrid systems",
      "1500V DC system compatibility",
      "Strong anodized aluminium frame",
      "Anti-reflective tempered glass",
      "IP68-rated junction box",
      "High wind and snow load resistance",
      "Anti-PID degradation protection",
      "25+ years performance stability",
    ],
    specs: [
      ["Rated Power", "585 W"],
      ["Cell Configuration", "144 half-cell layout (72 × 2)"],
      ["Solar Panel Type", "Monocrystalline N-Type TOPCon"],
      ["System Voltage", "Up to 1500 V DC"],
      ["Open-Circuit Voltage (Voc)", "51.7 – 54.7 V"],
      ["Voltage at Maximum Power (Vmp)", "42.7 – 44.9 V"],
      ["Short-Circuit Current (Isc)", "14.0 – 14.4 A"],
      ["Current at Maximum Power (Imp)", "13.1 – 13.7 A"],
      ["Module Efficiency", "~22.6%"],
      ["Cell Technology", "N-Type monocrystalline silicon / TOPCon half-cell"],
      ["Front Glass", "Tempered anti-reflective glass"],
      ["Frame", "Anodized aluminium alloy"],
      ["Junction Box", "IP68 waterproof rated"],
      ["Cables", "UV-resistant solar cables"],
      ["Approx. Dimensions", "2170 × 1300 × 30–35 mm"],
      ["Approx. Weight", "28–32 kg"],
      ["Installation Type", "Rooftop, ground-mount, solar farms"],
    ],
    applications: [
      "Residential rooftop solar systems",
      "Commercial and industrial solar installations",
      "Off-grid battery charging systems",
      "Hybrid inverter solar systems",
      "Solar farms and mini-grid projects",
      "High-capacity energy generation setups",
    ],
    warranty: "25+ years performance stability",
    support: "Lifetime After-Sales Support",
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2026/06/Jinko-585W-Monocrystalline-Solar-Panel-1.png",
    ],
  },
  {
    id: "jinko-590w-jkm590n-78hl4-bdv",
    slug: "jinko-590w-jkm590n-78hl4-bdv",
    name: "Jinko Solar 590-Watt Monocrystalline Solar Panel JKM590N-78HL4-BDV, 1500VDC",
    brand: "Jinko Solar",
    category: "Solar Panels & Lighting",
    price: 399000,
    oldPrice: 420000,
    sku: "45002",
    stock: {
      status: "in_stock",
    },
    summary: "590W N-Type bifacial dual-glass Jinko Tiger Neo solar panel with 21.11% efficiency, 1500VDC system voltage and 30A maximum series fuse rating.",
    description: "The Jinko Solar JKM590N-78HL4-BDV is a 590-watt N-type bifacial dual-glass solar panel built for high-performance solar installations. It uses N-type monocrystalline technology, SMBB technology, HOT 2.0 technology and anti-PID protection. Its bifacial construction allows additional energy generation from reflected rear-side light when installed under suitable conditions.",
    features: [
      "590W high-output solar panel",
      "N-Type monocrystalline cell technology",
      "Bifacial dual-glass design",
      "21.11% module efficiency",
      "SMBB technology",
      "HOT 2.0 technology",
      "Anti-PID protection",
      "1500VDC maximum system voltage",
      "30A maximum series fuse rating",
      "0 to +3% power tolerance",
      "IP68-rated junction box",
      "12-year product warranty",
      "30-year linear power warranty",
    ],
    specs: [
      ["Series", "Tiger Neo"],
      ["Model", "JKM590N-78HL4-BDV"],
      ["Product Type", "N-Type bifacial dual-glass solar panel"],
      ["Rated Power", "590 W"],
      ["Cell Type", "N-type monocrystalline"],
      ["Cell Layout", "156 cells, 2 × 78"],
      ["Maximum Power at STC", "590 Wp"],
      ["Maximum Power Voltage (Vmp)", "44.91 V"],
      ["Maximum Power Current (Imp)", "13.14 A"],
      ["Open-Circuit Voltage (Voc)", "54.76 V"],
      ["Short-Circuit Current (Isc)", "13.71 A"],
      ["Module Efficiency", "21.11%"],
      ["Maximum Power at NOCT", "444 Wp"],
      ["Vmp at NOCT", "41.89 V"],
      ["Imp at NOCT", "10.59 A"],
      ["Voc at NOCT", "52.02 V"],
      ["Isc at NOCT", "11.07 A"],
      ["Power Tolerance", "0 to +3%"],
      ["Maximum System Voltage", "1500VDC IEC"],
      ["Maximum Series Fuse Rating", "30 A"],
      ["Operating Temperature", "-40°C to +85°C"],
      ["Temperature Coefficient of Pmax", "-0.30%/°C"],
      ["Temperature Coefficient of Voc", "-0.25%/°C"],
      ["Temperature Coefficient of Isc", "0.046%/°C"],
      ["Nominal Operating Cell Temperature", "45 ±2°C"],
      ["Bifacial Factor", "80 ±5%"],
      ["Front Glass", "2.0mm anti-reflection coated glass"],
      ["Back Glass", "2.0mm heat-strengthened glass"],
      ["Frame", "Anodised aluminium alloy"],
      ["Junction Box", "IP68 rated"],
      ["Output Cable", "TUV 1 × 4.0mm²"],
      ["Cable Length", "Positive 400mm, negative 200mm or customised"],
      ["Dimensions", "2465 × 1134 × 35 mm"],
      ["Weight", "34.6 kg"],
      ["Certifications", "IEC61215, IEC61730"],
      ["Management Systems", "ISO9001, ISO14001, ISO45001"],
    ],
    applications: [
      "Homes",
      "Businesses",
      "Schools",
      "Farms",
      "Clinics",
      "Institutions and NGOs",
      "Commercial buildings",
      "Mini-grids",
      "Larger solar projects",
    ],
    warranty: "12-year product warranty; 30-year linear power warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 66500,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 39900,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2024/09/Jinko-Solar-540-Watt-24V-Monocrystalline-Solar-Panel-JKM545M-72HL4.png",
    ],
  },
  {
    id: "blue-carbon-36w-3600-lumen-king-light-2",
    slug: "blue-carbon-36w-3600-lumen-king-light-2",
    name:
      "Blue Carbon 36W 3600-Lumen LED Solar Street Light, King Light 1.0",
    brand: "Blue Carbon",
    category: "Solar Street Lights",
    price: 399000,
    oldPrice: 500000,
    sku: "44804",
    stock: {
      status: "in_stock",
    },
    summary: "36W CREE LED solar street light producing 3,600 lumens with an 80W solar panel, 70Ah LiFePO4 battery, IP65 protection and automatic dusk-to-dawn operation.",
    description: "The Blue Carbon 36W 3600-Lumen LED Solar Street Light combines a high-output CREE LED, 80W solar panel and LiFePO4 battery with intelligent power management. It is designed for all-night outdoor lighting with remote-controlled brightness and timer settings.",
    features: [
      "36W CREE LED",
      "3,600 lumens",
      "80W solar panel",
      "70Ah LiFePO4 battery",
      "Automatic dusk-to-dawn operation",
      "3–4 hour solar charging time",
      "Remote control",
      "Adjustable brightness and timer settings",
      "IP65 waterproof protection",
      "6–8m recommended pole height",
      "25–35m recommended spacing",
      "100,000-hour LED lifespan",
      "Aluminium-magnesium alloy casing",
    ],
    specs: [
      ["LED Power", "36 W"],
      ["Luminous Flux", "3,600 lm"],
      ["Colour Temperature", "3,000–6,500 K"],
      ["Lighting Time", "6 + X hours with intelligent power control"],
      ["Working Time", "≥12 hours"],
      ["Solar Panel", "80 W"],
      ["Battery Type", "LiFePO4"],
      ["Battery Capacity", "3.2 V / 70 Ah ±5 Ah"],
      ["Installation Height", "6–8 m"],
      ["Installation Distance", "25–35 m"],
      ["Material", "Aluminium-magnesium alloy casing"],
      ["Optical Lens", "PC outdoor optical lens"],
      ["Working Temperature", "-47°C to 70°C"],
      ["Storage Temperature", "0–55°C"],
      ["Working Humidity", "≤90% RH"],
      ["Waterproof Rating", "IP65"],
      ["Solar Panel Charging Time", "3–4 hours"],
      ["Control System", "Intelligent power management with remote control"],
      ["Lighting Modes", "Automatic dusk-to-dawn with manual brightness control"],
      ["LED Lifespan", "100,000 hours"],
    ],

    applications: [
      "Roads",
      "Residential areas",
      "Compounds",
      "Parks",
      "Outdoor public spaces",
      "Security lighting",
    ],
    warranty: "12 Months Warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 66500,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 39900,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/03/Blue-Carbon-36W-3600-Lumen-LED-Solar-Street-Light-King-Light-2.0-1.png",
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/03/Blue-Carbon-36W-3600-Lumen-LED-Solar-Street-Light-King-Light-2.0.png",
    ],
  },
  {
    id: "iet-550w-ie-7m144-hc",
    slug: "iet-550w-ie-7m144-hc",
    name: "IET 550-Watt Monocrystalline Solar Panel IE-7M144-HC, 1000/1500VDC",
    brand: "IET",
    category: "Solar Panels & Lighting",
    price: 389000,
    oldPrice: 550000,
    sku: "39030",
    stock: {
      status: "in_stock",
    },
    summary: "550W monocrystalline PERC half-cell solar panel with 21.28% efficiency, 1000/1500VDC system voltage and strong mechanical load ratings.",
    description: "The IET IE-7M144-HC is a 550-watt monocrystalline solar panel using PERC cell technology, half-cell construction and multi-busbar technology. It is designed for homes, businesses, farms, schools, clinics, institutions, NGOs and commercial solar installations.",
    features: [
      "550Wp rated power",
      "Monocrystalline PERC cell technology",
      "Half-cell design",
      "Multi-busbar cell technology",
      "21.28% module efficiency",
      "1000VDC / 1500VDC maximum system voltage",
      "2400Pa wind load",
      "5400Pa snow load",
      "IP68-rated junction box",
      "MC4-compatible connector",
      "20-year product warranty",
      "30-year linear power output warranty",
    ],
    specs: [
      ["Series", "IE-7M144-HC"],
      ["Model", "IE-7M144-HC 550W"],
      ["Product Type", "Monocrystalline solar panel"],
      ["Rated Power", "550 W"],
      ["Cell Type", "Monocrystalline PERC"],
      ["Cell Size", "182 × 91 mm"],
      ["Number of Cells", "144 cells, 6 × 24 layout"],
      ["Maximum Power at STC", "550 W"],
      ["Open-Circuit Voltage (Voc)", "50.0 V"],
      ["Short-Circuit Current (Isc)", "13.94 A"],
      ["Maximum Power Voltage (Vmp)", "41.8 V"],
      ["Maximum Power Current (Imp)", "13.16 A"],
      ["Module Efficiency", "21.28%"],
      ["Maximum Power at NOCT", "411 W"],
      ["Voc at NOCT", "46.1 V"],
      ["Isc at NOCT", "11.28 A"],
      ["Vmp at NOCT", "38.1 V"],
      ["Imp at NOCT", "10.79 A"],
      ["Power Tolerance", "±3%"],
      ["Maximum System Voltage", "1000VDC / 1500VDC"],
      ["Maximum Series Fuse Rating", "25 A"],
      ["Operating Temperature", "-40°C to +85°C"],
      ["NOCT", "43°C ±2°C"],
      ["Temperature Coefficient of Pmax", "-0.35%/°C"],
      ["Temperature Coefficient of Voc", "-0.28%/°C"],
      ["Temperature Coefficient of Isc", "0.046%/°C"],
      ["Front Cover", "3.2mm tempered glass with anti-reflective coating"],
      ["Frame", "Anodised aluminium alloy"],
      ["Junction Box", "IP68 rated, 3 diodes"],
      ["Cable", "4mm²"],
      ["Cable Length", "Portrait 300mm, landscape 1300mm"],
      ["Connector", "MC4 compatible"],
      ["Dimensions", "2279 × 1134 × 30 mm"],
      ["Weight", "28 kg"],
      ["Certifications", "IEC 61215, IEC 61730, IEC 61701, IEC TS 62804, CE, MCS"],
      ["Management Systems", "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018"],
    ],
    applications: [
      "Homes",
      "Businesses",
      "Farms",
      "Schools",
      "Clinics",
      "NGOs",
      "Institutions",
      "Commercial buildings",
      "Solar projects",
    ],

    warranty: "20-year product warranty; 30-year linear power output warranty",
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2026/02/IET-550-Watt-Monocrystalline-Solar-Panel-IE-7M144-HC.png",
    ],
  },
  {
    id: "jinko-490wp-n-type-jkm490n-60hl4-v",
    slug: "jinko-490wp-n-type-jkm490n-60hl4-v",
    name:
      "Jinko 490Wp N-Type Solar Panel JKM490N-60HL4-(V), TOPCon, 1500V System",
    brand: "Jinko Solar",
    category: "Solar Panels & Lighting",
    price: 329000,
    oldPrice: 450000,
    sku: "47584",
    stock: {
      status: "in_stock",
    },
    summary: "490Wp N-Type TOPCon monocrystalline solar panel with 22.67% efficiency, 120 half-cut cells and 1000/1500V DC system compatibility.",
    description: "The Jinko 490Wp N-Type Solar Panel JKM490N-60HL4-(V) is a high-efficiency TOPCon monocrystalline module designed for reliable solar generation. Its 120 half-cut cell design supports power output and reliability across residential, commercial and solar project installations.",
    features: [
      "490Wp maximum power output",
      "22.67% module efficiency",
      "N-Type TOPCon monocrystalline technology",
      "120 half-cut cells",
      "1500V DC maximum system voltage",
      "0 to +3% power tolerance",
      "IP68-rated junction box",
      "12-year product warranty",
      "30-year linear power warranty",
    ],
    specs: [
      ["Maximum Power (Pmax)", "490 W"],
      ["Maximum Power Voltage (Vmp)", "36.43 V"],
      ["Maximum Power Current (Imp)", "13.45 A"],
      ["Open-Circuit Voltage (Voc)", "43.91 V"],
      ["Short-Circuit Current (Isc)", "14.01 A"],
      ["Module Efficiency", "22.67%"],
      ["Power Tolerance", "0 to +3%"],
      ["Cell Type", "N-Type monocrystalline (TOPCon)"],
      ["Number of Cells", "120 (60 × 2)"],
      ["Dimensions", "1906 × 1134 × 30 mm"],
      ["Weight", "22.5 kg"],
      ["Front Glass", "3.2mm anti-reflection tempered glass"],
      ["Frame", "Anodised aluminium alloy"],
      ["Junction Box", "IP68 rated"],
      ["Output Cable", "4 mm²"],
      ["Operating Temperature", "-40°C to +85°C"],
      ["Maximum System Voltage", "1000V / 1500V DC"],
      ["Maximum Series Fuse Rating", "25 A"],
      ["NOCT", "45 ±2°C"],
    ],
    applications: [
      "Residential solar power systems",
      "Commercial solar installations",
      "Industrial solar installations",
      "Hybrid solar systems",
      "Battery charging systems",
      "Solar mini-grids",
      "Rooftop solar arrays",
      "Ground-mounted solar arrays",
    ],
    warranty: "12-year product warranty; 30-year linear power warranty",
    support: "Lifetime After-Sales Support",
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2026/03/Jinko-490Wp-N-Type-Solar-Panel-JKM490N-60HL4-V.png",
    ],
  },

  {
    id: "chloride-200w-12v-sp200ce",
    slug: "chloride-200w-12v-sp200ce",
    name: "Chloride 200W 12V Monocrystalline Solar Panel SP200CE",
    brand: "Chloride Solar",
    category: "Solar Panels & Lighting",
    price: 249000,
    oldPrice: 290000,
    sku: "45303",
    stock: {
      status: "in_stock",
    },
    summary: "200W 12V monocrystalline solar panel suitable for practical solar charging and small-scale solar power applications.",
    description: "The Chloride SP200CE is a 200W 12V monocrystalline solar panel supplied for solar power and charging applications.",
    features: [
      "200W rated solar power",
      "12V solar panel",
      "Monocrystalline construction",
      "Suitable for solar charging applications",
    ],
    specs: [
      ["Rated Power", "200 W"],
      ["System Rating", "12 V"],
      ["Panel Type", "Monocrystalline solar panel"],
      ["Model", "SP200CE"],
    ],
    applications: [
      "Solar charging systems",
      "Small-scale solar power systems",
      "12V solar applications",
      "Off-grid solar installations",
    ],
    support: "Lifetime After-Sales Support",
    paymentOptions: [
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],
    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/06/Chloride-200W-12V-Monochrystalline-Solar-Panel-SP200CE.png",
    ],
  },
]

export const brandsOf = () =>
  [...new Set(PRODUCTS.map((p) => p.brand))].sort()

export const bySlug = (s: string) =>
  PRODUCTS.find((p) => p.slug === s)

export const search = (q: string, list = PRODUCTS) => {
  const t = q.toLowerCase().split(/\s+/).filter(Boolean)

  return t.length
    ? list.filter((p) =>
      t.every((w) =>
        [
          p.name,
          p.brand,
          p.category,
          p.summary,
          p.description,
          p.sku,
          ...(p.features ?? []),
          ...(p.specs ?? []).flat(),
          ...(p.applications ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(w)
      )
    )
    : list
}

export const similar = (p: Product, n = 4) =>
  PRODUCTS
    .filter((x) => x.id !== p.id)
    .map((x) => ({
      x,
      s:
        (x.category === p.category ? 2 : 0) +
        (x.brand === p.brand ? 1 : 0),
    }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((r) => r.x)
