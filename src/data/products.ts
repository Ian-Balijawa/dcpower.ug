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
  {
    id: "felicity-500ah-51-2v-25kwh-fla48500",
    slug: "felicity-500ah-51-2v-25kwh-fla48500",
    name:
      "Felicity 500Ah 51.2V 25kWh Lithium Solar Battery FLA48500",
    brand: "Felicity Solar",
    category: "Batteries & Energy Storage",
    price: 12900000,
    oldPrice: 16000000,
    sku: "45277",

    stock: {
      status: "in_stock",
    },

    featured: true,

    summary:
      "Felicity Solar FLA48500 25kWh rack-mount LiFePO₄ solar battery with 500Ah capacity, 51.2V nominal voltage, built-in BMS, over 6,000 cycles at 80% DoD and a 7-year warranty.",

    description:
      "The Felicity Solar FLA48500 is a high-capacity 25kWh rack-mount lithium solar battery designed for solar energy storage, backup power and hybrid or off-grid inverter systems. Built with LiFePO₄ battery chemistry and an integrated battery management system, it provides long cycle life, modular rack-mounted installation and protection against overcharge, overdischarge, overcurrent, short circuit and temperature-related conditions.",

    features: [
      "25kWh nominal energy capacity",
      "500Ah rated battery capacity",
      "51.2V nominal voltage",
      "LiFePO₄ (Lithium Iron Phosphate) battery chemistry",
      "Over 6,000 cycles at 80% depth of discharge",
      "10+ year design life",
      "Built-in battery management system (BMS)",
      "Protection against overcharge and overdischarge",
      "Overcurrent and short-circuit protection",
      "Temperature protection",
      "Rack-mountable configuration",
      "RS485 and CAN communication ports",
      "Typically supports 100A–200A maximum charge/discharge current",
      "Compatible with many hybrid and off-grid inverter systems",
      "Designed for solar energy storage and backup power",
      "Modular installation for scalable energy storage systems",
    ],

    specs: [
      ["Battery Type", "Lithium Iron Phosphate (LiFePO₄)"],
      ["Nominal Energy Capacity", "25 kWh"],
      ["Nominal Voltage", "51.2 V"],
      ["Rated Capacity", "500 Ah"],
      ["Cycle Life", ">6,000 cycles @ 80% DoD"],
      ["Design Life", "10 years+"],
      ["Configuration", "Rack-mount"],
      ["Communication Ports", "RS485 / CAN"],
      ["Max Charge/Discharge Current", "Typically 100A–200A (check datasheet)"],
      ["Operating Temperature", "–20 °C to +55 °C"],
      ["Storage Temperature", "–20 °C to +45 °C"],
      [
        "Protection",
        "Built-in BMS for overcharge, overdischarge, overcurrent, short circuit and temperature protection",
      ],
      ["Warranty", "7 years"],
    ],

    applications: [
      "Residential solar energy storage",
      "Solar backup power systems",
      "Hybrid solar systems",
      "Off-grid solar systems",
      "Commercial energy storage",
      "Backup power for businesses",
      "Large-scale battery storage installations",
    ],

    installation: [
      "Designed for rack-mounted installation",
      "Install in a suitable battery rack or enclosure with adequate ventilation and protection",
      "Connect using compatible inverter and battery communication interfaces",
      "Configure the inverter according to the battery manufacturer's specifications",
      "Use RS485 or CAN communication where supported by the compatible inverter",
      "Professional installation is recommended for high-capacity battery systems",
    ],

    warranty: "7 Years Warranty",

    support: "Lifetime After-Sales Support",

    paymentOptions: [
      {
        name: "Kweli Advance",
        description:
          "Apply today. Get approved. Pay deposit. Receive in 2–7 days. Clear balance slowly.",
        amountPerPayment: 9030000,
      },
      {
        name: "Kweli Smart Instalments – 6 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 4 instalments. Clear balance slowly.",
        payments: 6,
        amountPerPayment: 2150000,
      },
      {
        name: "Kweli Smart Instalments – 10 payments",
        description:
          "Apply today. Get approved. Pay consistently. Receive after 7 instalments. Clear balance slowly.",
        payments: 10,
        amountPerPayment: 1290000,
      },
      {
        name: "Kweli Save",
        description:
          "Request today. Save gradually. Complete payment and receive after full payment.",
      },
    ],

    images: [
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/06/Felicity-25kWh-51.2V-Lithium-Solar-Battery-FLA48500.png",
      "https://99016cb2.delivery.rocketcdn.me/wp-content/uploads/2025/06/Felicity-25kWh-51.2V-Lithium-Solar-Battery-FLA48500-1.png",
    ],
  },
  {
    id: "blue-carbon-1600lm-3200m-solar-floodlight",
    slug: "blue-carbon-1600lm-3200m-solar-floodlight",
    name:
      "Blue Carbon 1600-Lumen Outdoor Solar LED Floodlight",
    brand: "Blue Carbon",
    category: "Solar Flood Lights",
    price: 2000000,
    oldPrice: 2500000,
    sku: "SO885LB3K5FY3NAFAMZ",

    stock: {
      status: "in_stock",
    },

    featured: false,

    summary:
      "1600-lumen outdoor solar LED floodlight with a high-performance solar panel, lithium battery, waterproof design and easy wireless installation.",

    description:
      "The Blue Carbon 1600-Lumen Outdoor Solar LED Floodlight is a solar-powered outdoor lighting solution designed to provide reliable illumination for gardens, driveways, patios, residential properties, commercial spaces and outdoor events. It combines a high-performance solar panel with a lithium battery and weather-resistant construction, eliminating the need for conventional electrical wiring during installation.",

    features: [
      "High-brightness LED delivering up to 1,600 lumens",
      "Solar-powered operation using renewable energy",
      "High-performance solar panel",
      "Built-in lithium battery",
      "Weatherproof design for outdoor use",
      "Designed to withstand various weather conditions",
      "Easy installation without conventional wiring",
      "Suitable for residential and commercial applications",
      "Suitable for gardens, driveways and patios",
      "Suitable for outdoor events",
      "Low-maintenance solar-powered lighting solution",
    ],

    specs: [
      ["Light Output", "1,600 lumens"],
      ["Lighting Type", "Outdoor Solar LED Floodlight"],
      ["Power Source", "Solar"],
      ["Battery Type", "Lithium battery"],
      ["Solar Panel", "High-performance solar panel"],
      ["Water Resistance", "Weatherproof design"],
      ["Installation", "Wireless / no conventional wiring required"],
      ["Weight", "1.2 kg"],
      ["SKU", "SO885LB3K5FY3NAFAMZ"],
    ],

    applications: [
      "Gardens",
      "Driveways",
      "Patios",
      "Residential properties",
      "Commercial properties",
      "Outdoor events",
      "Outdoor security lighting",
    ],

    installation: [
      "Install the solar panel where it can receive adequate sunlight",
      "Mount the floodlight securely in the desired outdoor location",
      "No conventional electrical wiring is required",
      "Position the light to provide the desired coverage area",
    ],

    warranty: undefined,

    support: "After-sales support available",

    paymentOptions: [],

    images: [
      "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/2447952/1.jpg?1310",
      "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/2447952/2.jpg?1310",
      "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/2447952/3.jpg?1310"
    ],
  },
  {
    id: "all-top-3000w-integrated-solar-street-light-20-led",
    slug: "all-top-3000w-integrated-solar-street-light-20-led",
    name:
      "ALL TOP 3000W Super Strong Integrated Solar Street Light – 20 LED Bulbs",
    brand: "ALL TOP",
    category: "Solar Street Lights",
    price: 477000,
    oldPrice: 888000,
    sku: "GE779LB4I6KCQNAFAMZ",
    stock: { status: "in_stock" },
    featured: false,
    summary:
      "3000W integrated solar street light with 20 high-lumen LED bulbs, PIR motion sensor, 15-metre wireless remote control and more than 10 hours of lighting.",
    description:
      "The ALL TOP 3000W Super Strong Integrated Solar Street Light is a high-power outdoor lighting solution designed for homes, farms, compounds, commercial spaces and other outdoor areas. It features 20 high-lumen LED bulbs, solar-powered operation, a durable aluminium alloy body, PIR motion sensing and an infrared wireless remote control. The all-in-one design requires no electrical wiring and provides more than 10 hours of lighting at night depending on sunlight and operating conditions.",
    features: [
      "3000W high-power solar street light",
      "20 high-lumen LED bulbs",
      "More than 10 hours of lighting",
      "High-quality solar energy components",
      "Durable aluminium alloy body",
      "PIR motion sensor for efficient lighting control",
      "Super-sensitive infrared wireless remote control",
      "Wireless remote-control range of up to 15 metres",
      "Rain-resistant outdoor design",
      "All-in-one integrated design",
      "No electrical wiring required",
      "Easy installation",
      "Energy-saving solar operation",
    ],
    specs: [
      ["Power", "3000W"],
      ["LED Bulbs", "20 high-lumen LED bulbs"],
      ["Lighting Duration", "More than 10 hours"],
      ["Lighting Type", "Integrated Solar Street Light"],
      ["Power Source", "Solar"],
      ["Motion Sensor", "PIR motion sensor"],
      ["Remote Control", "Infrared wireless remote control"],
      ["Remote Range", "Up to 15 metres"],
      ["Body Material", "Aluminium alloy"],
      ["Outdoor Protection", "Rain-resistant design"],
      ["Installation", "Integrated design; no electrical wiring required"],
      ["Color", "Grey"],
      ["Weight", "8.5 kg"],
      ["Certification", "Eco Friendly"],
      ["SKU", "GE779LB4I6KCQNAFAMZ"],
    ],
    applications: [
      "Homes",
      "Courtyards",
      "Farms",
      "Garages",
      "Stores",
      "Hotels",
      "Parking areas",
      "Compounds",
      "Pathways",
      "Roads",
      "Warehouses",
      "Shops",
      "Commercial spaces",
      "Outdoor security lighting",
    ],
    installation: [
      "Select a suitable outdoor location with sufficient direct sunlight",
      "Ensure the solar panel receives adequate sunlight for optimal charging",
      "Securely mount the solar street light using the supplied mounting bracket",
      "Connect and secure the installation accessories as required",
      "No conventional electrical wiring is required",
      "Use the wireless remote control to configure and operate the light",
    ],
    warranty: "2 Years Warranty",
    support:
      "Warranty support available at Nakasero - Market Street, Kampala, Uganda",
    paymentOptions: [],
    images: [
      "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/4041062/1.jpg?0549",
      "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/4041062/2.jpg?0549",
      "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/4041062/3.jpg?0549",
      "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/4041062/4.jpg?0549",
      "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/4041062/5.jpg?0549",
    ],
  },
  {
    id: "blue-carbon-superbright-flood-bct-wr4-0",
    slug: "blue-carbon-superbright-flood-bct-wr4-0",
    name: "Blue Carbon SuperBright Flood BCT-WR4.0 3000LM",
    brand: "Blue Carbon",
    category: "Solar Flood Lights",
    price: 0,
    oldPrice: null,
    sku: "BCT-WR4.0",
    stock: { status: "in_stock" },
    featured: false,
    summary:
      "Blue Carbon BCT-WR4.0 solar LED flood light with 3,000 lumens, 50W monocrystalline solar panel, 40Ah LiFePO4 battery and IP65 waterproof aluminium-alloy construction.",
    description:
      "The Blue Carbon SuperBright Flood BCT-WR4.0 is a high-output solar LED flood light designed for modern outdoor lighting applications. It features a 3,000-lumen LED light source, 50W monocrystalline solar panel and 3.2V 40Ah LiFePO4 battery. The aluminium-alloy lamp body has an IP65 waterproof rating and is designed to operate across a wide temperature range. Intelligent power control allows the lighting mode and brightness to be adjusted using the remote control.",
    features: [
      "3,000-lumen LED light output",
      "50W monocrystalline solar panel",
      "3.2V 40Ah LiFePO4 battery",
      "IP65 waterproof construction",
      "Durable aluminium-alloy lamp body",
      "Intelligent power control",
      "Remote control for brightness and working-mode adjustment",
      "120° beam angle",
      "210 lm/W lamp luminous efficiency",
      "4000K / 6500K color temperature options",
      "CRI 80 color rendering",
      "Wide operating temperature range of -40°C to 70°C",
      "LED light source",
      "Dimmable lighting",
      "Designed for garden and outdoor applications",
    ],
    specs: [
      ["Model", "BCT-WR4.0"],
      ["Light Output", "3,000 lumens"],
      ["Solar Panel", "5V / 50W Monocrystalline"],
      ["Battery", "3.2V / 40Ah LiFePO4"],
      ["Battery Type", "Lithium / LiFePO4"],
      ["Lighting Time", "6+X / Intelligent power control"],
      ["IP Rating", "IP65 Waterproof"],
      ["Lamp Body Material", "Aluminium alloy"],
      ["Beam Angle", "120°"],
      ["Color Temperature", "4000K / 6500K"],
      ["Luminous Efficiency", "210 lm/W"],
      ["Color Rendering Index", "Ra 80"],
      ["Input Voltage", "DC 5V"],
      ["Working Temperature", "-40°C to 70°C"],
      ["Light Source", "LED"],
      ["Dimmable", "Yes"],
      ["Lifespan", "100,000 hours"],
      ["Product Weight", "7.38 kg"],
      ["Application", "Garden / Outdoor"],
      ["Certification", "EMC, RoHS, CCC, CE"],
      ["Place of Origin", "Shandong, China"],
      ["SKU / Model Number", "BCT-WR4.0"],
    ],
    applications: [
      "Gardens",
      "Residential outdoor spaces",
      "Commercial outdoor areas",
      "Compounds",
      "Pathways",
      "Outdoor security lighting",
      "Other modern outdoor lighting applications",
    ],
    installation: [
      "Install the solar panel in a location with sufficient direct sunlight",
      "Mount the flood light securely in the desired outdoor location",
      "Ensure the solar panel is positioned for effective daytime charging",
      "Configure the desired brightness and lighting mode using the remote control",
      "Check that the light is securely installed before operation",
    ],
    warranty: "10 Years Warranty",
    support: "Lighting and circuitry design support available",
    paymentOptions: [],
    images: [
      "https://www.bctvnergy.com/uploads/29346/blue-carbon-superbright-floodfe10c.jpg",
      "https://www.bctvnergy.com/uploads/29346/blue-carbon-superbright-flood20250326092749b64f1.jpg",
      "https://www.bctvnergy.com/uploads/29346/blue-carbon-superbright-flood202503260927516b32c.jpg",
      "https://www.bctvnergy.com/uploads/29346/blue-carbon-superbright-flood202503260927506808a.jpg",
      "https://www.bctvnergy.com/uploads/29346/blue-carbon-superbright-flood202503260927510f24e.jpg",
      "https://www.bctvnergy.com/uploads/29346/blue-carbon-superbright-flood2025032609275121736.jpg"
    ],
  },
  {
    id: "blue-carbon-bct-wr1-0-solar-flood-light",
    slug: "blue-carbon-bct-wr1-0-solar-flood-light",
    name:
      "Blue Carbon BCT-WR1.0 Solar Garden & Street Flood Light 800LM",
    brand: "Blue Carbon",
    category: "Solar Flood Lights",
    price: 0,
    oldPrice: null,
    sku: "BCT-WR1.0",
    stock: { status: "in_stock" },
    featured: false,
    summary:
      "Blue Carbon BCT-WR1.0 solar flood light with 800 lumens, LiFePO4 battery, 5V solar input, IP65 protection and intelligent power control.",
    description:
      "The Blue Carbon BCT-WR1.0 is an integrated solar LED flood light designed for residential, garden, road, warehouse, landscape and other outdoor lighting applications. It uses solar energy with an LED light source, LiFePO4 battery and aluminium plus PC construction. The IP65-rated design provides protection for outdoor use, while intelligent power control manages lighting operation.",
    features: [
      "800-lumen LED light output",
      "Solar-powered operation",
      "LiFePO4 battery",
      "IP65-rated outdoor design",
      "210 lm/W luminous efficiency",
      "4000K / 6500K color temperature options",
      "Intelligent power control",
      "6+X lighting time with intelligent power control",
      "LED light source",
      "Aluminium + PC construction",
      "Designed for residential and outdoor applications",
      "Suitable for gardens, roads and warehouses",
      "Suitable for landscape and recreational areas",
    ],
    specs: [
      ["Model", "BCT-WR1.0"],
      ["Light Output", "800 lumens"],
      ["Solar Input", "5V"],
      ["Battery", "LiFePO4"],
      ["Power Supply", "Solar energy"],
      ["Light Source", "LED"],
      ["Lighting Time", "6+X / Intelligent Power Control"],
      ["IP Rating", "IP65"],
      ["Color Temperature", "4000K / 6500K"],
      ["Luminous Efficiency", "210 lm/W"],
      ["Input Voltage", "5V"],
      ["Material", "Aluminium + PC"],
      ["Application", "Residential, Garden, Road, Warehouse, Landscape, Sports Stadiums, Theme Parks and Other Outdoor Areas"],
      ["Certification", "CE-EMC, RoHS, MSDS"],
      ["Place of Origin", "Shandong, China"],
      ["SKU / Model Number", "BCT-WR1.0"],
    ],
    applications: [
      "Residential properties",
      "Gardens",
      "Roads",
      "Warehouses",
      "Landscapes",
      "Sports stadiums",
      "Theme parks",
      "Outdoor spaces",
    ],
    installation: [
      "Install the solar unit in a location with sufficient sunlight",
      "Mount the flood light securely in the desired outdoor location",
      "Ensure the solar panel receives adequate sunlight for charging",
      "Position the light to provide the required illumination coverage",
      "Configure the desired lighting operation using the intelligent power control",
    ],
    warranty: undefined,
    support: "Supplier support available",
    paymentOptions: [],
    images: [
      "https://s.alicdn.com/@sc04/kf/H0d854c018614486786a5fd551bea923fT.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc9bc58fb3c224058b46c76d56f332623V.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc35a3f2769324318814f78ca77cb490aS.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H40cda0d7e56e4db6be06d051def9ba324.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf9d5338c0ca04d5296b972a501aba372j.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H041ff527010543b7aec05750e13f7c1fd.jpg?avif=close&webp=close"
    ],
  },
  {
    id: "blue-carbon-bct-ww3-0-100w-solar-flood-light",
    slug: "blue-carbon-bct-ww3-0-100w-solar-flood-light",
    name:
      "Blue Carbon BCT-WW3.0 100W Solar Flood Light with Remote Control",
    brand: "Blue Carbon",
    category: "Solar Flood Lights",
    price: 0,
    oldPrice: null,
    sku: "BCT-WW3.0",
    stock: { status: "in_stock" },
    featured: false,
    summary:
      "Blue Carbon BCT-WW3.0 solar flood light with 1,600 lumens, 36W poly solar panel, 25Ah BYD LiFePO4 battery, CREE LED chips and remote-controlled intelligent power management.",
    description:
      "The Blue Carbon BCT-WW3.0 is an integrated solar LED flood light designed for gardens, streets and outdoor lighting applications. It combines a 36W polycrystalline solar panel with a 3.2V 25Ah BYD LiFePO4 battery and 100 CREE LED chips to deliver up to 1,600 lumens. Its integrated design supports one-click installation, while the intelligent power control system allows brightness and working modes to be adjusted using the supplied remote control. The aluminium-alloy body, PC optical lens and IP65 protection make it suitable for outdoor environments.",
    features: [
      "1,600-lumen LED light output",
      "36W polycrystalline solar panel",
      "3.2V 25Ah BYD LiFePO4 battery",
      "100 USA CREE LED chips",
      "50,000-hour LED lifespan",
      "IP65 outdoor protection",
      "Intelligent power control",
      "Remote control for brightness adjustment",
      "Remote control for working-mode adjustment",
      "Integrated all-in-one design",
      "One-click installation design",
      "Diamond surface reflection technology for enhanced illumination",
      "PC outdoor optical lens with high light transmittance",
      "High-temperature-resistant and aging-resistant optical lens",
      "Widened and thickened adjustable mounting bracket",
      "Gold-plated aviation plug",
      "Integrated packaging for convenient transportation",
    ],
    specs: [
      ["Model", "BCT-WW3.0"],
      ["Power", "100W"],
      ["Light Output", "1,600 lumens"],
      ["Solar Panel", "5V / 36W Polycrystalline"],
      ["Solar Panel Life Span", "25 years"],
      ["Battery", "3.2V / 25Ah BYD LiFePO4"],
      ["Battery Life Span", "8–12 years"],
      ["LED", "100 CREE LED chips"],
      ["LED Life Span", "50,000 hours"],
      ["Lighting Time", "6+X / Intelligent Power Control"],
      ["Charging Time", "6 hours"],
      ["Light Color", "Pure White"],
      ["Light Source", "LED"],
      ["Lamp Body Material", "Aluminium alloy"],
      ["Lens", "PC outdoor optical lens"],
      ["IP Rating", "IP65"],
      ["Operating Voltage", "3–6V"],
      ["Solar Panel Wire", "2.4 metres standard; 2-metre optical extension line"],
      ["Remote Control", "Brightness and working-mode adjustment"],
      ["Certification", "CE, RoHS, CB"],
      ["Warranty", "More than 10 years"],
      ["Package Quantity", "8 pcs per carton"],
      ["Package Size", "533 × 400 × 238 mm"],
      ["Origin", "Rizhao, China"],
      ["HS Code", "94054090"],
      ["SKU / Model", "BCT-WW3.0"],
    ],
    applications: [
      "Gardens",
      "Streets",
      "Outdoor lighting",
      "Residential outdoor spaces",
      "Compounds",
      "Pathways",
      "Commercial outdoor areas",
    ],
    installation: [
      "Position the solar panel where it can receive sufficient direct sunlight",
      "Securely install the integrated light using the supplied mounting bracket",
      "Adjust the bracket angle to achieve the desired lighting direction",
      "Connect and secure the solar panel and light according to the installation instructions",
      "No conventional grid electrical wiring is required",
      "Use the remote control to adjust brightness and working mode",
    ],
    warranty: "More than 10 Years Warranty",
    support: "After-sales service available",
    paymentOptions: [],
    images: [
      "https://image.made-in-china.com/155f0j00qlAuVzbBkwcW/Blue-Carbon-Solar-Flood-Light-100W-200W-300W-LED-Lamp-with-Remote-Control.webp"
    ],
  },
  {
    "id": "felicity-200ah-24v-5kwh-lithium-solar-battery-fla24200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-75kwh-or-15-units-in-uganda",
    "slug": "felicity-200ah-24v-5kwh-lithium-solar-battery-fla24200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-75kwh-or-15-units-in-uganda",
    "name": "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 3490000,
    "oldPrice": 4700000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda",
    "description": "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-100ah-48v-5kwh-lithium-solar-battery-fla48100-built-in-bms-over-6-000-charge-cycles-25-c-80-dod-long-lifespan-fast-charging-in-uganda",
    "slug": "felicity-100ah-48v-5kwh-lithium-solar-battery-fla48100-built-in-bms-over-6-000-charge-cycles-25-c-80-dod-long-lifespan-fast-charging-in-uganda",
    "name": "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 3490000,
    "oldPrice": 4700000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda",
    "description": "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "kweli-energy-1-8kwp-5kwh-4kva-complete-smart-hybrid-solar-power-system-6-8kwh-daily-yield-wifi-app-monitoring-automatic-switchover-in-uganda",
    "slug": "kweli-energy-1-8kwp-5kwh-4kva-complete-smart-hybrid-solar-power-system-6-8kwh-daily-yield-wifi-app-monitoring-automatic-switchover-in-uganda",
    "name": "Kweli Energy 1.8kWp-5kWh-4kVA Complete Smart Hybrid Solar Power System; 6-8kWh Daily Yield, WiFi App Monitoring, Automatic Switchover In Uganda",
    "brand": "Kweli Energy",
    "category": "Complete Solar Systems & Kits",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Kweli Energy 1.8kWp-5kWh-4kVA Complete Smart Hybrid Solar Power System; 6-8kWh Daily Yield, WiFi App Monitoring, Automatic Switchover In Uganda",
    "description": "Kweli Energy 1.8kWp-5kWh-4kVA Complete Smart Hybrid Solar Power System; 6-8kWh Daily Yield, WiFi App Monitoring, Automatic Switchover In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "6-8kWh Daily Yield, WiFi App Monitoring, Automatic Switchover In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Kweli Energy 1.8kWp-5kWh-4kVA Complete Smart Hybrid Solar Power System; 6-8kWh Daily Yield, WiFi App Monitoring, Automatic Switchover In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Homes",
      "Offices",
      "Shops",
      "Small businesses"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "kweli-energy-900wp-2-56kwh-1-5kva-complete-hybrid-solar-power-system-3-5-4-5kwh-daily-yield-automatic-switchover-in-uganda",
    "slug": "kweli-energy-900wp-2-56kwh-1-5kva-complete-hybrid-solar-power-system-3-5-4-5kwh-daily-yield-automatic-switchover-in-uganda",
    "name": "Kweli Energy 900Wp-2.56kWh-1.5kVA Complete Hybrid Solar Power System; 3.5-4.5kWh Daily Yield, Automatic Switchover In Uganda",
    "brand": "Kweli Energy",
    "category": "Complete Solar Systems & Kits",
    "price": 5690000,
    "oldPrice": 6400000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Kweli Energy 900Wp-2.56kWh-1.5kVA Complete Hybrid Solar Power System; 3.5-4.5kWh Daily Yield, Automatic Switchover In Uganda",
    "description": "Kweli Energy 900Wp-2.56kWh-1.5kVA Complete Hybrid Solar Power System; 3.5-4.5kWh Daily Yield, Automatic Switchover In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "3.5-4.5kWh Daily Yield, Automatic Switchover In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Kweli Energy 900Wp-2.56kWh-1.5kVA Complete Hybrid Solar Power System; 3.5-4.5kWh Daily Yield, Automatic Switchover In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Homes",
      "Offices",
      "Shops",
      "Small businesses"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "kweli-energy-600wp-2-56kwh-1kw-complete-hybrid-solar-power-system-2-2-3kwh-daily-pv-yield-long-life-lithium-battery-automatic-switchover-in-uganda",
    "slug": "kweli-energy-600wp-2-56kwh-1kw-complete-hybrid-solar-power-system-2-2-3kwh-daily-pv-yield-long-life-lithium-battery-automatic-switchover-in-uganda",
    "name": "Kweli Energy 600Wp-2.56kWh-1kW Complete Hybrid Solar Power System; 2.2-3kWh Daily PV Yield, Long-Life Lithium Battery, Automatic Switchover In Uganda",
    "brand": "Kweli Energy",
    "category": "Complete Solar Systems & Kits",
    "price": 4490000,
    "oldPrice": 5300000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Kweli Energy 600Wp-2.56kWh-1kW Complete Hybrid Solar Power System; 2.2-3kWh Daily PV Yield, Long-Life Lithium Battery, Automatic Switchover In Uganda",
    "description": "Kweli Energy 600Wp-2.56kWh-1kW Complete Hybrid Solar Power System; 2.2-3kWh Daily PV Yield, Long-Life Lithium Battery, Automatic Switchover In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "2.2-3kWh Daily PV Yield, Long-Life Lithium Battery, Automatic Switchover In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Kweli Energy 600Wp-2.56kWh-1kW Complete Hybrid Solar Power System; 2.2-3kWh Daily PV Yield, Long-Life Lithium Battery, Automatic Switchover In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-5kw-5-12kwh-lithium-all-in-one-backup-power-system-eot05s-charge-by-grid-generator-and-solar-up-to-5500wp-in-uganda",
    "slug": "srne-5kw-5-12kwh-lithium-all-in-one-backup-power-system-eot05s-charge-by-grid-generator-and-solar-up-to-5500wp-in-uganda",
    "name": "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda",
    "brand": "SRNE",
    "category": "Complete Solar Systems & Kits",
    "price": 5490000,
    "oldPrice": 6200000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda",
    "description": "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Charge By Grid, Generator & Solar Up To 5500Wp In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Homes",
      "Offices",
      "Shops",
      "Small businesses"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-50kva-50kw-3-phase-high-voltage-hybrid-solar-inverter-t-rex-50khp3g01-75kwp-pv-input-180-750v-battery-range-dual-mppt-ip65-smart-energy-management-remote-monitoring-via-wi-fi-in-uganda",
    "slug": "felicity-50kva-50kw-3-phase-high-voltage-hybrid-solar-inverter-t-rex-50khp3g01-75kwp-pv-input-180-750v-battery-range-dual-mppt-ip65-smart-energy-management-remote-monitoring-via-wi-fi-in-uganda",
    "name": "Felicity 50kVA/50kW 3-Phase High Voltage Hybrid Solar Inverter T-REX-50KHP3G01; 75kWp PV Input, 180-750V Battery Range, Dual MPPT, IP65, Smart Energy Management, Remote Monitoring Via Wi-Fi In Uganda",
    "brand": "Felicity",
    "category": "Commercial & Industrial Solar",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "sku": "T-REX",
    "summary": "Felicity 50kVA/50kW 3-Phase High Voltage Hybrid Solar Inverter T-REX-50KHP3G01; 75kWp PV Input, 180-750V Battery Range, Dual MPPT, IP65, Smart Energy Management, Remote Monitoring Via Wi-Fi In Uganda",
    "description": "Felicity 50kVA/50kW 3-Phase High Voltage Hybrid Solar Inverter T-REX-50KHP3G01; 75kWp PV Input, 180-750V Battery Range, Dual MPPT, IP65, Smart Energy Management, Remote Monitoring Via Wi-Fi In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "75kWp PV Input, 180-750V Battery Range, Dual MPPT, IP65, Smart Energy Management, Remote Monitoring Via Wi-Fi In Uganda"
    ],
    "specs": [
      [
        "Model",
        "T-REX"
      ],
      [
        "Source title",
        "Felicity 50kVA/50kW 3-Phase High Voltage Hybrid Solar Inverter T-REX-50KHP3G01; 75kWp PV Input, 180-750V Battery Range, Dual MPPT, IP65, Smart Energy Management, Remote Monitoring Via Wi-Fi In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-61-44kwh-high-voltage-lithium-battery-system-lux-y-48100hg01-12-5-12kwh-48v-100ah-modules-90-dod-6000-cycles-built-in-bms-stack-mount-scalable-in-uganda",
    "slug": "felicity-61-44kwh-high-voltage-lithium-battery-system-lux-y-48100hg01-12-5-12kwh-48v-100ah-modules-90-dod-6000-cycles-built-in-bms-stack-mount-scalable-in-uganda",
    "name": "Felicity 61.44kWh High Voltage Lithium Battery System LUX-Y-48100HG01; 12 × 5.12kWh (48V 100Ah) Modules, 90% DoD, 6000+ Cycles, Built-in BMS, Stack-Mount, Scalable In Uganda",
    "brand": "Felicity",
    "category": "Commercial & Industrial Solar",
    "price": 39000000,
    "oldPrice": 45000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "LUX-Y",
    "summary": "Felicity 61.44kWh High Voltage Lithium Battery System LUX-Y-48100HG01; 12 × 5.12kWh (48V 100Ah) Modules, 90% DoD, 6000+ Cycles, Built-in BMS, Stack-Mount, Scalable In Uganda",
    "description": "Felicity 61.44kWh High Voltage Lithium Battery System LUX-Y-48100HG01; 12 × 5.12kWh (48V 100Ah) Modules, 90% DoD, 6000+ Cycles, Built-in BMS, Stack-Mount, Scalable In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "12 × 5.12kWh (48V 100Ah) Modules, 90% DoD, 6000+ Cycles, Built-in BMS, Stack-Mount, Scalable In Uganda"
    ],
    "specs": [
      [
        "Model",
        "LUX-Y"
      ],
      [
        "Source title",
        "Felicity 61.44kWh High Voltage Lithium Battery System LUX-Y-48100HG01; 12 × 5.12kWh (48V 100Ah) Modules, 90% DoD, 6000+ Cycles, Built-in BMS, Stack-Mount, Scalable In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-12kw-48v-3-phase-hybrid-solar-inverter-ivgm12klp3g1-18kw-pv-800v-voc-160-650v-mppt-2-mppt-240a-ip65-wifi-gen-in-uganda",
    "slug": "felicity-12kw-48v-3-phase-hybrid-solar-inverter-ivgm12klp3g1-18kw-pv-800v-voc-160-650v-mppt-2-mppt-240a-ip65-wifi-gen-in-uganda",
    "name": "Felicity 12kW 48V 3-Phase Hybrid Solar Inverter IVGM12KLP3G1; 18kW PV, 800V Voc, 160-650V MPPT, 2 MPPT, 240A, IP65, WiFi, Gen In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Felicity 12kW 48V 3-Phase Hybrid Solar Inverter IVGM12KLP3G1; 18kW PV, 800V Voc, 160-650V MPPT, 2 MPPT, 240A, IP65, WiFi, Gen In Uganda",
    "description": "Felicity 12kW 48V 3-Phase Hybrid Solar Inverter IVGM12KLP3G1; 18kW PV, 800V Voc, 160-650V MPPT, 2 MPPT, 240A, IP65, WiFi, Gen In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "18kW PV, 800V Voc, 160-650V MPPT, 2 MPPT, 240A, IP65, WiFi, Gen In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 12kW 48V 3-Phase Hybrid Solar Inverter IVGM12KLP3G1; 18kW PV, 800V Voc, 160-650V MPPT, 2 MPPT, 240A, IP65, WiFi, Gen In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-12kw-48v-single-phase-hybrid-solar-inverter-ivem12048-ii-15kw-pv-500v-voc-90-450v-mppt-2-pv-inputs-240a-charge-wifi-gen-in-uganda",
    "slug": "felicity-12kw-48v-single-phase-hybrid-solar-inverter-ivem12048-ii-15kw-pv-500v-voc-90-450v-mppt-2-pv-inputs-240a-charge-wifi-gen-in-uganda",
    "name": "Felicity 12kW 48V Single Phase Hybrid Solar Inverter IVEM12048-II; 15kW PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 240A Charge, WiFi, Gen In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Felicity 12kW 48V Single Phase Hybrid Solar Inverter IVEM12048-II; 15kW PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 240A Charge, WiFi, Gen In Uganda",
    "description": "Felicity 12kW 48V Single Phase Hybrid Solar Inverter IVEM12048-II; 15kW PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 240A Charge, WiFi, Gen In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "15kW PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 240A Charge, WiFi, Gen In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 12kW 48V Single Phase Hybrid Solar Inverter IVEM12048-II; 15kW PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 240A Charge, WiFi, Gen In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-750va-0-6kw-12v-pure-sine-wave-inverter-ivps0712-bypass-charging-ac-charging-in-uganda",
    "slug": "felicity-750va-0-6kw-12v-pure-sine-wave-inverter-ivps0712-bypass-charging-ac-charging-in-uganda",
    "name": "Felicity 750VA/0.6kW 12V Pure Sine Wave Inverter IVPS0712; Bypass Charging, AC Charging In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 749000,
    "oldPrice": 869000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 750VA/0.6kW 12V Pure Sine Wave Inverter IVPS0712; Bypass Charging, AC Charging In Uganda",
    "description": "Felicity 750VA/0.6kW 12V Pure Sine Wave Inverter IVPS0712; Bypass Charging, AC Charging In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Bypass Charging, AC Charging In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 750VA/0.6kW 12V Pure Sine Wave Inverter IVPS0712; Bypass Charging, AC Charging In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "genuine-felicity-80a-48v-mppt-solar-charge-controller-sccm8048-ii-145v-80a-up-to-4400wpv-48v-2200wpv-24v-1100wpv-12v-in-uganda",
    "slug": "genuine-felicity-80a-48v-mppt-solar-charge-controller-sccm8048-ii-145v-80a-up-to-4400wpv-48v-2200wpv-24v-1100wpv-12v-in-uganda",
    "name": "Genuine Felicity 80A 48V MPPT Solar Charge Controller SCCM8048-II; 145V/80A, Up To 4400Wpv @ 48V, 2200Wpv @24V, 1100Wpv @12V In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 749000,
    "oldPrice": 949000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Genuine Felicity 80A 48V MPPT Solar Charge Controller SCCM8048-II; 145V/80A, Up To 4400Wpv @ 48V, 2200Wpv @24V, 1100Wpv @12V In Uganda",
    "description": "Genuine Felicity 80A 48V MPPT Solar Charge Controller SCCM8048-II; 145V/80A, Up To 4400Wpv @ 48V, 2200Wpv @24V, 1100Wpv @12V In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "145V/80A, Up To 4400Wpv @ 48V, 2200Wpv @24V, 1100Wpv @12V In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Genuine Felicity 80A 48V MPPT Solar Charge Controller SCCM8048-II; 145V/80A, Up To 4400Wpv @ 48V, 2200Wpv @24V, 1100Wpv @12V In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-60a-mppt-solar-charge-controller-sccm6048-ii-145v-60a-up-to-3300wpv-48v-1650wpv-24v-825wpv-12v-in-uganda",
    "slug": "felicity-60a-mppt-solar-charge-controller-sccm6048-ii-145v-60a-up-to-3300wpv-48v-1650wpv-24v-825wpv-12v-in-uganda",
    "name": "Felicity 60A MPPT Solar Charge Controller SCCM6048-II; 145V/60A, Up To 3300Wpv @ 48V, 1650Wpv @24V, 825Wpv @12V In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 649000,
    "oldPrice": 829000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 60A MPPT Solar Charge Controller SCCM6048-II; 145V/60A, Up To 3300Wpv @ 48V, 1650Wpv @24V, 825Wpv @12V In Uganda",
    "description": "Felicity 60A MPPT Solar Charge Controller SCCM6048-II; 145V/60A, Up To 3300Wpv @ 48V, 1650Wpv @24V, 825Wpv @12V In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "145V/60A, Up To 3300Wpv @ 48V, 1650Wpv @24V, 825Wpv @12V In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 60A MPPT Solar Charge Controller SCCM6048-II; 145V/60A, Up To 3300Wpv @ 48V, 1650Wpv @24V, 825Wpv @12V In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-45a-mppt-solar-charge-controller-sccm4524-ii-95v-45a-up-to-1250wpv-24v-625wpv-12v-in-uganda",
    "slug": "felicity-45a-mppt-solar-charge-controller-sccm4524-ii-95v-45a-up-to-1250wpv-24v-625wpv-12v-in-uganda",
    "name": "Felicity 45A MPPT Solar Charge Controller SCCM4524-II; 95V/45A, Up To 1250Wpv @24V, 625Wpv @12V In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 490000,
    "oldPrice": 569000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 45A MPPT Solar Charge Controller SCCM4524-II; 95V/45A, Up To 1250Wpv @24V, 625Wpv @12V In Uganda",
    "description": "Felicity 45A MPPT Solar Charge Controller SCCM4524-II; 95V/45A, Up To 1250Wpv @24V, 625Wpv @12V In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "95V/45A, Up To 1250Wpv @24V, 625Wpv @12V In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 45A MPPT Solar Charge Controller SCCM4524-II; 95V/45A, Up To 1250Wpv @24V, 625Wpv @12V In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-30a-mppt-solar-charge-controller-sccm3024-ii-95v-30a-up-to-830wpv-24v-420wpv-12v-in-uganda",
    "slug": "felicity-30a-mppt-solar-charge-controller-sccm3024-ii-95v-30a-up-to-830wpv-24v-420wpv-12v-in-uganda",
    "name": "Felicity 30A MPPT Solar Charge Controller SCCM3024-II; 95V/30A, Up To 830Wpv @24V, 420Wpv @12V In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 349000,
    "oldPrice": 350000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 30A MPPT Solar Charge Controller SCCM3024-II; 95V/30A, Up To 830Wpv @24V, 420Wpv @12V In Uganda",
    "description": "Felicity 30A MPPT Solar Charge Controller SCCM3024-II; 95V/30A, Up To 830Wpv @24V, 420Wpv @12V In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "95V/30A, Up To 830Wpv @24V, 420Wpv @12V In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 30A MPPT Solar Charge Controller SCCM3024-II; 95V/30A, Up To 830Wpv @24V, 420Wpv @12V In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-1kva-1kw-12v-hybrid-inverter-ivcm1012-built-in-60a-mppt-solar-charge-controller-900wp-95voc-15-80v-pure-sine-wave-output-in-uganda",
    "slug": "felicity-1kva-1kw-12v-hybrid-inverter-ivcm1012-built-in-60a-mppt-solar-charge-controller-900wp-95voc-15-80v-pure-sine-wave-output-in-uganda",
    "name": "Felicity 1kVA/1kW 12V Hybrid Inverter IVCM1012; Built-in 60A MPPT Solar Charge Controller 900Wp/95Voc/15-80V, Pure Sine Wave Output In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 890000,
    "oldPrice": 1200000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 1kVA/1kW 12V Hybrid Inverter IVCM1012; Built-in 60A MPPT Solar Charge Controller 900Wp/95Voc/15-80V, Pure Sine Wave Output In Uganda",
    "description": "Felicity 1kVA/1kW 12V Hybrid Inverter IVCM1012; Built-in 60A MPPT Solar Charge Controller 900Wp/95Voc/15-80V, Pure Sine Wave Output In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in 60A MPPT Solar Charge Controller 900Wp/95Voc/15-80V, Pure Sine Wave Output In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 1kVA/1kW 12V Hybrid Inverter IVCM1012; Built-in 60A MPPT Solar Charge Controller 900Wp/95Voc/15-80V, Pure Sine Wave Output In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "genuine-felicity-1500va-12v-220vac-pure-sine-wave-inverter-ivps1512-1-2kw-load-50-60hz-18a-max-charge-overload-and-short-circuit-protection-in-uganda",
    "slug": "genuine-felicity-1500va-12v-220vac-pure-sine-wave-inverter-ivps1512-1-2kw-load-50-60hz-18a-max-charge-overload-and-short-circuit-protection-in-uganda",
    "name": "Genuine Felicity 1500VA 12V, 220VAC Pure Sine Wave Inverter IVPS1512; 1.2kW Load, 50/60Hz, 18A Max Charge, Overload & Short Circuit Protection In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 799000,
    "oldPrice": 900000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Genuine Felicity 1500VA 12V, 220VAC Pure Sine Wave Inverter IVPS1512; 1.2kW Load, 50/60Hz, 18A Max Charge, Overload & Short Circuit Protection In Uganda",
    "description": "Genuine Felicity 1500VA 12V, 220VAC Pure Sine Wave Inverter IVPS1512; 1.2kW Load, 50/60Hz, 18A Max Charge, Overload & Short Circuit Protection In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "1.2kW Load, 50/60Hz, 18A Max Charge, Overload & Short Circuit Protection In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Genuine Felicity 1500VA 12V, 220VAC Pure Sine Wave Inverter IVPS1512; 1.2kW Load, 50/60Hz, 18A Max Charge, Overload & Short Circuit Protection In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-100a-48v-mppt-solar-charge-controller-sccm10048-195v-100a-up-to-5-500wpv-48v-2750wpv-24v-1375wpv-12v-in-uganda",
    "slug": "felicity-100a-48v-mppt-solar-charge-controller-sccm10048-195v-100a-up-to-5-500wpv-48v-2750wpv-24v-1375wpv-12v-in-uganda",
    "name": "Felicity 100A 48V MPPT Solar Charge Controller SCCM10048; 195V/100A, Up To 5,500Wpv @ 48V, 2750Wpv @24V, 1375Wpv @12V In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Felicity 100A 48V MPPT Solar Charge Controller SCCM10048; 195V/100A, Up To 5,500Wpv @ 48V, 2750Wpv @24V, 1375Wpv @12V In Uganda",
    "description": "Felicity 100A 48V MPPT Solar Charge Controller SCCM10048; 195V/100A, Up To 5,500Wpv @ 48V, 2750Wpv @24V, 1375Wpv @12V In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "195V/100A, Up To 5,500Wpv @ 48V, 2750Wpv @24V, 1375Wpv @12V In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 100A 48V MPPT Solar Charge Controller SCCM10048; 195V/100A, Up To 5,500Wpv @ 48V, 2750Wpv @24V, 1375Wpv @12V In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-solar-2kw-2kva-24v-hybrid-solar-inverter-ivcm2024-pro-built-in-mppt-solar-charge-controller-230vac-output-90-280vac-input-lcd-display-generator-compatible-in-uganda",
    "slug": "felicity-solar-2kw-2kva-24v-hybrid-solar-inverter-ivcm2024-pro-built-in-mppt-solar-charge-controller-230vac-output-90-280vac-input-lcd-display-generator-compatible-in-uganda",
    "name": "Felicity Solar 2kW/2kVA 24V Hybrid Solar Inverter IVCM2024 PRO; Built-in MPPT Solar Charge Controller, 230Vac Output, 90-280Vac Input, LCD Display, Generator Compatible In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Felicity Solar 2kW/2kVA 24V Hybrid Solar Inverter IVCM2024 PRO; Built-in MPPT Solar Charge Controller, 230Vac Output, 90-280Vac Input, LCD Display, Generator Compatible In Uganda",
    "description": "Felicity Solar 2kW/2kVA 24V Hybrid Solar Inverter IVCM2024 PRO; Built-in MPPT Solar Charge Controller, 230Vac Output, 90-280Vac Input, LCD Display, Generator Compatible In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in MPPT Solar Charge Controller, 230Vac Output, 90-280Vac Input, LCD Display, Generator Compatible In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity Solar 2kW/2kVA 24V Hybrid Solar Inverter IVCM2024 PRO; Built-in MPPT Solar Charge Controller, 230Vac Output, 90-280Vac Input, LCD Display, Generator Compatible In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-6kva-6kw-48v-hybrid-inverter-ivem6048-ii-7-5kwp-500voc-90-450vdc-120a-built-in-mppt-charge-controller-battery-charger-230vac-pure-sine-wave-output-built-in-wifi-in-uganda",
    "slug": "felicity-6kva-6kw-48v-hybrid-inverter-ivem6048-ii-7-5kwp-500voc-90-450vdc-120a-built-in-mppt-charge-controller-battery-charger-230vac-pure-sine-wave-output-built-in-wifi-in-uganda",
    "name": "Felicity 6kVA/6kW 48V Hybrid Inverter IVEM6048-II; 7.5kWp/500Voc/90–450VDC/120A Built-in MPPT Charge Controller, Battery Charger, 230Vac Pure Sine Wave Output, Built-in WiFi In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 1990000,
    "oldPrice": 2490000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 6kVA/6kW 48V Hybrid Inverter IVEM6048-II; 7.5kWp/500Voc/90–450VDC/120A Built-in MPPT Charge Controller, Battery Charger, 230Vac Pure Sine Wave Output, Built-in WiFi In Uganda",
    "description": "Felicity 6kVA/6kW 48V Hybrid Inverter IVEM6048-II; 7.5kWp/500Voc/90–450VDC/120A Built-in MPPT Charge Controller, Battery Charger, 230Vac Pure Sine Wave Output, Built-in WiFi In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "7.5kWp/500Voc/90–450VDC/120A Built-in MPPT Charge Controller, Battery Charger, 230Vac Pure Sine Wave Output, Built-in WiFi In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 6kVA/6kW 48V Hybrid Inverter IVEM6048-II; 7.5kWp/500Voc/90–450VDC/120A Built-in MPPT Charge Controller, Battery Charger, 230Vac Pure Sine Wave Output, Built-in WiFi In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-100ah-48v-5kwh-lithium-solar-battery-fla48100-built-in-bms-over-6-000-charge-cycles-25-c-80-dod-long-lifespan-fast-charging-in-uganda",
    "slug": "felicity-100ah-48v-5kwh-lithium-solar-battery-fla48100-built-in-bms-over-6-000-charge-cycles-25-c-80-dod-long-lifespan-fast-charging-in-uganda",
    "name": "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 3490000,
    "oldPrice": 4700000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda",
    "description": "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 100AH 48V 5kWh Lithium Solar Battery FLA48100; Built-in BMS, Over 6,000 Charge Cycles @25°C, 80% DoD, Long Lifespan, Fast Charging In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-200ah-24v-5kwh-lithium-solar-battery-fla24200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-75kwh-or-15-units-in-uganda",
    "slug": "felicity-200ah-24v-5kwh-lithium-solar-battery-fla24200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-75kwh-or-15-units-in-uganda",
    "name": "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 3490000,
    "oldPrice": 4700000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda",
    "description": "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 200Ah 24V 5kWh Lithium Solar Battery FLA24200; Built-in BMS & WiFi, ≥6,000 Cycles, @25°C, 80% DoD, Parallel Up To 75kWh Or 15 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-t-rex-10kva-10kw-48v-3-phase-hybrid-solar-inverter-t-rex-10klp3g01-built-in-dual-mppt-13000w-solar-charge-controller-200-850v-mppt-range-900v-voc-pure-sine-wave-output-wi-fi-monitoring-ip65-in-uganda",
    "slug": "felicity-t-rex-10kva-10kw-48v-3-phase-hybrid-solar-inverter-t-rex-10klp3g01-built-in-dual-mppt-13000w-solar-charge-controller-200-850v-mppt-range-900v-voc-pure-sine-wave-output-wi-fi-monitoring-ip65-in-uganda",
    "name": "Felicity T-REX 10kVA/10kW 48V 3-Phase Hybrid Solar Inverter T-REX-10KLP3G01; Built-in Dual MPPT 13000W Solar Charge Controller, 200–850V MPPT Range, 900V Voc, Pure Sine Wave Output, Wi-Fi Monitoring, IP65 In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 5900000,
    "oldPrice": 7000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "T-REX",
    "summary": "Felicity T-REX 10kVA/10kW 48V 3-Phase Hybrid Solar Inverter T-REX-10KLP3G01; Built-in Dual MPPT 13000W Solar Charge Controller, 200–850V MPPT Range, 900V Voc, Pure Sine Wave Output, Wi-Fi Monitoring, IP65 In Uganda",
    "description": "Felicity T-REX 10kVA/10kW 48V 3-Phase Hybrid Solar Inverter T-REX-10KLP3G01; Built-in Dual MPPT 13000W Solar Charge Controller, 200–850V MPPT Range, 900V Voc, Pure Sine Wave Output, Wi-Fi Monitoring, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in Dual MPPT 13000W Solar Charge Controller, 200–850V MPPT Range, 900V Voc, Pure Sine Wave Output, Wi-Fi Monitoring, IP65 In Uganda"
    ],
    "specs": [
      [
        "Model",
        "T-REX"
      ],
      [
        "Source title",
        "Felicity T-REX 10kVA/10kW 48V 3-Phase Hybrid Solar Inverter T-REX-10KLP3G01; Built-in Dual MPPT 13000W Solar Charge Controller, 200–850V MPPT Range, 900V Voc, Pure Sine Wave Output, Wi-Fi Monitoring, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-200ah-51-2v-10kwh-lithium-solar-battery-fla48200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-150kwh-or-15-units-in-uganda",
    "slug": "felicity-200ah-51-2v-10kwh-lithium-solar-battery-fla48200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-150kwh-or-15-units-in-uganda",
    "name": "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 6390000,
    "oldPrice": 7000000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda",
    "description": "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-200ah-51-2v-10kwh-lithium-solar-battery-fla48200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-150kwh-or-15-units-in-uganda",
    "slug": "felicity-200ah-51-2v-10kwh-lithium-solar-battery-fla48200-built-in-bms-and-wifi-6-000-cycles-25-c-80-dod-parallel-up-to-150kwh-or-15-units-in-uganda",
    "name": "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 6390000,
    "oldPrice": 7000000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda",
    "description": "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 200Ah 51.2V 10kWh Lithium Solar Battery FLA48200; Built-in BMS & WiFi, ≥6,000 Cycles @25°C, 80% DoD, Parallel Up To 150kWh Or 15 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-8kw-48v-single-phase-hybrid-solar-inverter-ivem8048-ii-10kwp-pv-500v-voc-90-450v-mppt-2-pv-inputs-150a-charge-wifi-gen-in-uganda",
    "slug": "felicity-8kw-48v-single-phase-hybrid-solar-inverter-ivem8048-ii-10kwp-pv-500v-voc-90-450v-mppt-2-pv-inputs-150a-charge-wifi-gen-in-uganda",
    "name": "Felicity 8kW 48V Single Phase Hybrid Solar Inverter IVEM8048-II; 10kWp PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 150A Charge, WiFi, Gen In Uganda",
    "brand": "Felicity",
    "category": "Inverters, Chargers & MPPTs",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Felicity 8kW 48V Single Phase Hybrid Solar Inverter IVEM8048-II; 10kWp PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 150A Charge, WiFi, Gen In Uganda",
    "description": "Felicity 8kW 48V Single Phase Hybrid Solar Inverter IVEM8048-II; 10kWp PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 150A Charge, WiFi, Gen In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "10kWp PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 150A Charge, WiFi, Gen In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 8kW 48V Single Phase Hybrid Solar Inverter IVEM8048-II; 10kWp PV, 500V Voc, 90-450V MPPT, 2 PV Inputs, 150A Charge, WiFi, Gen In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "felicity-15kwh-51-2v-lithium-battery-fla48300tg2-lifepo4-300ah-95-dod-6000-cycles-smart-bms-wifi-bt-15-unit-parallel-in-uganda",
    "slug": "felicity-15kwh-51-2v-lithium-battery-fla48300tg2-lifepo4-300ah-95-dod-6000-cycles-smart-bms-wifi-bt-15-unit-parallel-in-uganda",
    "name": "Felicity 15kWh 51.2V Lithium Battery FLA48300TG2; LiFePO4, 300Ah, 95% DoD, 6000 Cycles, Smart BMS, WiFi/BT, 15-Unit Parallel In Uganda",
    "brand": "Felicity",
    "category": "Batteries & Energy Storage",
    "price": 8490000,
    "oldPrice": 9200000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Felicity 15kWh 51.2V Lithium Battery FLA48300TG2; LiFePO4, 300Ah, 95% DoD, 6000 Cycles, Smart BMS, WiFi/BT, 15-Unit Parallel In Uganda",
    "description": "Felicity 15kWh 51.2V Lithium Battery FLA48300TG2; LiFePO4, 300Ah, 95% DoD, 6000 Cycles, Smart BMS, WiFi/BT, 15-Unit Parallel In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "LiFePO4, 300Ah, 95% DoD, 6000 Cycles, Smart BMS, WiFi/BT, 15-Unit Parallel In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Felicity 15kWh 51.2V Lithium Battery FLA48300TG2; LiFePO4, 300Ah, 95% DoD, 6000 Cycles, Smart BMS, WiFi/BT, 15-Unit Parallel In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-se-g5-1-5-12kwh-51-2v-lifepo4-lithium-solar-battery-rack-mounted-built-in-intelligent-bms-100ah-50a-charge-discharge-ip20-can-rs485-stackable-up-to-64-units-327-68kwh-in-uganda",
    "slug": "deye-se-g5-1-5-12kwh-51-2v-lifepo4-lithium-solar-battery-rack-mounted-built-in-intelligent-bms-100ah-50a-charge-discharge-ip20-can-rs485-stackable-up-to-64-units-327-68kwh-in-uganda",
    "name": "Deye SE-G5.1 5.12kWh 51.2V LiFePO4 Lithium Solar Battery; Rack-Mounted, Built-in Intelligent BMS, 100Ah, 50A Charge/Discharge, IP20, CAN/RS485, Stackable Up To 64 Units (327.68kWh) In Uganda",
    "brand": "Deye",
    "category": "Batteries & Energy Storage",
    "price": 3290000,
    "oldPrice": 4190000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Deye SE-G5.1 5.12kWh 51.2V LiFePO4 Lithium Solar Battery; Rack-Mounted, Built-in Intelligent BMS, 100Ah, 50A Charge/Discharge, IP20, CAN/RS485, Stackable Up To 64 Units (327.68kWh) In Uganda",
    "description": "Deye SE-G5.1 5.12kWh 51.2V LiFePO4 Lithium Solar Battery; Rack-Mounted, Built-in Intelligent BMS, 100Ah, 50A Charge/Discharge, IP20, CAN/RS485, Stackable Up To 64 Units (327.68kWh) In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Rack-Mounted, Built-in Intelligent BMS, 100Ah, 50A Charge/Discharge, IP20, CAN/RS485, Stackable Up To 64 Units (327.68kWh) In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye SE-G5.1 5.12kWh 51.2V LiFePO4 Lithium Solar Battery; Rack-Mounted, Built-in Intelligent BMS, 100Ah, 50A Charge/Discharge, IP20, CAN/RS485, Stackable Up To 64 Units (327.68kWh) In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-3kva-3kw-24v-single-phase-hybrid-inverter-sun-3k-sg04lp1-24-eu-1-mppt-6kwp-4-8kwp-pv-access-input-500vdc-150-425v-mppt-range-140a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "slug": "deye-3kva-3kw-24v-single-phase-hybrid-inverter-sun-3k-sg04lp1-24-eu-1-mppt-6kwp-4-8kwp-pv-access-input-500vdc-150-425v-mppt-range-140a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "name": "Deye 3kVA/3kW 24V Single Phase Hybrid Inverter SUN-3K-SG04LP1-24-EU; 1 MPPT, 6kWp/4.8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 140A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "brand": "Deye",
    "category": "Inverters, Chargers & MPPTs",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Deye 3kVA/3kW 24V Single Phase Hybrid Inverter SUN-3K-SG04LP1-24-EU; 1 MPPT, 6kWp/4.8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 140A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "description": "Deye 3kVA/3kW 24V Single Phase Hybrid Inverter SUN-3K-SG04LP1-24-EU; 1 MPPT, 6kWp/4.8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 140A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "1 MPPT, 6kWp/4.8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 140A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye 3kVA/3kW 24V Single Phase Hybrid Inverter SUN-3K-SG04LP1-24-EU; 1 MPPT, 6kWp/4.8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 140A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-5-12kwh-51-2v-lifepo4-lithium-solar-battery-rw-l5-1-built-in-bms-100ah-100-120a-charge-discharge-ip65-can-rs485-wall-mounted-scalable-up-to-32-units-163-84kwh-in-uganda",
    "slug": "deye-5-12kwh-51-2v-lifepo4-lithium-solar-battery-rw-l5-1-built-in-bms-100ah-100-120a-charge-discharge-ip65-can-rs485-wall-mounted-scalable-up-to-32-units-163-84kwh-in-uganda",
    "name": "Deye 5.12kWh 51.2V LiFePO4 Lithium Solar Battery RW-L5.1; Built-in BMS, 100Ah, 100/120A Charge/Discharge, IP65, CAN/RS485, Wall-Mounted, Scalable Up To 32 Units (163.84kWh) In Uganda",
    "brand": "Deye",
    "category": "Batteries & Energy Storage",
    "price": 4490000,
    "oldPrice": 4900000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Deye 5.12kWh 51.2V LiFePO4 Lithium Solar Battery RW-L5.1; Built-in BMS, 100Ah, 100/120A Charge/Discharge, IP65, CAN/RS485, Wall-Mounted, Scalable Up To 32 Units (163.84kWh) In Uganda",
    "description": "Deye 5.12kWh 51.2V LiFePO4 Lithium Solar Battery RW-L5.1; Built-in BMS, 100Ah, 100/120A Charge/Discharge, IP65, CAN/RS485, Wall-Mounted, Scalable Up To 32 Units (163.84kWh) In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Built-in BMS, 100Ah, 100/120A Charge/Discharge, IP65, CAN/RS485, Wall-Mounted, Scalable Up To 32 Units (163.84kWh) In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye 5.12kWh 51.2V LiFePO4 Lithium Solar Battery RW-L5.1; Built-in BMS, 100Ah, 100/120A Charge/Discharge, IP65, CAN/RS485, Wall-Mounted, Scalable Up To 32 Units (163.84kWh) In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-5kva-5kw-48v-single-phase-hybrid-inverter-sun-5k-sg04lp1-eu-2-mppt-10kwp-8kwp-pv-access-input-500vdc-150-425v-mppt-range-120a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "slug": "deye-5kva-5kw-48v-single-phase-hybrid-inverter-sun-5k-sg04lp1-eu-2-mppt-10kwp-8kwp-pv-access-input-500vdc-150-425v-mppt-range-120a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "name": "Deye 5kVA/5kW 48V Single Phase Hybrid Inverter SUN-5K-SG04LP1-EU; 2 MPPT, 10kWp/8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 120A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "brand": "Deye",
    "category": "Inverters, Chargers & MPPTs",
    "price": 3690000,
    "oldPrice": 4500000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Deye 5kVA/5kW 48V Single Phase Hybrid Inverter SUN-5K-SG04LP1-EU; 2 MPPT, 10kWp/8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 120A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "description": "Deye 5kVA/5kW 48V Single Phase Hybrid Inverter SUN-5K-SG04LP1-EU; 2 MPPT, 10kWp/8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 120A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "2 MPPT, 10kWp/8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 120A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye 5kVA/5kW 48V Single Phase Hybrid Inverter SUN-5K-SG04LP1-EU; 2 MPPT, 10kWp/8kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 120A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-8kva-8kw-48v-single-phase-hybrid-inverter-sun-8k-sg01lp1-eu-2-mppt-16kwp-pv-access-500vdc-150-425v-mppt-range-190a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "slug": "deye-8kva-8kw-48v-single-phase-hybrid-inverter-sun-8k-sg01lp1-eu-2-mppt-16kwp-pv-access-500vdc-150-425v-mppt-range-190a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "name": "Deye 8kVA/8kW 48V Single Phase Hybrid Inverter SUN-8K-SG01LP1-EU; 2 MPPT, 16kWp PV Access, 500Vdc, 150–425V MPPT Range, 190A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "brand": "Deye",
    "category": "Inverters, Chargers & MPPTs",
    "price": 5490000,
    "oldPrice": 6800000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Deye 8kVA/8kW 48V Single Phase Hybrid Inverter SUN-8K-SG01LP1-EU; 2 MPPT, 16kWp PV Access, 500Vdc, 150–425V MPPT Range, 190A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "description": "Deye 8kVA/8kW 48V Single Phase Hybrid Inverter SUN-8K-SG01LP1-EU; 2 MPPT, 16kWp PV Access, 500Vdc, 150–425V MPPT Range, 190A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "2 MPPT, 16kWp PV Access, 500Vdc, 150–425V MPPT Range, 190A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye 8kVA/8kW 48V Single Phase Hybrid Inverter SUN-8K-SG01LP1-EU; 2 MPPT, 16kWp PV Access, 500Vdc, 150–425V MPPT Range, 190A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-12kva-12kw-48v-single-phase-hybrid-inverter-sun-12k-sg01lp1-eu-24-19-2kwp-pv-access-input-500vdc-150-425v-mppt-range-240a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "slug": "deye-12kva-12kw-48v-single-phase-hybrid-inverter-sun-12k-sg01lp1-eu-24-19-2kwp-pv-access-input-500vdc-150-425v-mppt-range-240a-charge-discharge-wifi-4g-monitoring-ip65-in-uganda",
    "name": "Deye 12kVA/12kW 48V Single Phase Hybrid Inverter SUN-12K-SG01LP1-EU; 24/19.2kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 240A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "brand": "Deye",
    "category": "Inverters, Chargers & MPPTs",
    "price": 8290000,
    "oldPrice": 8900000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Deye 12kVA/12kW 48V Single Phase Hybrid Inverter SUN-12K-SG01LP1-EU; 24/19.2kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 240A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda",
    "description": "Deye 12kVA/12kW 48V Single Phase Hybrid Inverter SUN-12K-SG01LP1-EU; 24/19.2kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 240A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "24/19.2kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 240A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye 12kVA/12kW 48V Single Phase Hybrid Inverter SUN-12K-SG01LP1-EU; 24/19.2kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 240A Charge/Discharge, WiFi/4G Monitoring, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "deye-16kva-16kw-48v-single-phase-hybrid-inverter-sun-16k-sg01lp1-eu-am3-p-3-mppt-32kwp-25-6kwp-pv-access-input-500vdc-150-425v-mppt-range-290a-charge-discharge-dual-battery-input-wifi-4g-monitoring-ip65-in-uganda",
    "slug": "deye-16kva-16kw-48v-single-phase-hybrid-inverter-sun-16k-sg01lp1-eu-am3-p-3-mppt-32kwp-25-6kwp-pv-access-input-500vdc-150-425v-mppt-range-290a-charge-discharge-dual-battery-input-wifi-4g-monitoring-ip65-in-uganda",
    "name": "Deye 16kVA/16kW 48V Single Phase Hybrid Inverter SUN-16K-SG01LP1-EU-AM3-P; 3 MPPT, 32kWp/25.6kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 290A Charge/Discharge, Dual Battery Input, WiFi/4G Monitoring, IP65 In Uganda",
    "brand": "Deye",
    "category": "Inverters, Chargers & MPPTs",
    "price": 10490000,
    "oldPrice": 11290000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Deye 16kVA/16kW 48V Single Phase Hybrid Inverter SUN-16K-SG01LP1-EU-AM3-P; 3 MPPT, 32kWp/25.6kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 290A Charge/Discharge, Dual Battery Input, WiFi/4G Monitoring, IP65 In Uganda",
    "description": "Deye 16kVA/16kW 48V Single Phase Hybrid Inverter SUN-16K-SG01LP1-EU-AM3-P; 3 MPPT, 32kWp/25.6kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 290A Charge/Discharge, Dual Battery Input, WiFi/4G Monitoring, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "3 MPPT, 32kWp/25.6kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 290A Charge/Discharge, Dual Battery Input, WiFi/4G Monitoring, IP65 In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Deye 16kVA/16kW 48V Single Phase Hybrid Inverter SUN-16K-SG01LP1-EU-AM3-P; 3 MPPT, 32kWp/25.6kWp PV Access/Input, 500Vdc, 150–425V MPPT Range, 290A Charge/Discharge, Dual Battery Input, WiFi/4G Monitoring, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-16-07kwh-51-2v-lithium-battery-se16b-pro-lifepo4-314ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "slug": "srne-16-07kwh-51-2v-lithium-battery-se16b-pro-lifepo4-314ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "name": "SRNE 16.07kWh 51.2V Lithium Battery SE16B-Pro; LiFePO4, 314Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 8990000,
    "oldPrice": 9800000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "SE16B-Pro",
    "summary": "SRNE 16.07kWh 51.2V Lithium Battery SE16B-Pro; LiFePO4, 314Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "description": "SRNE 16.07kWh 51.2V Lithium Battery SE16B-Pro; LiFePO4, 314Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "16.07 kWh LFP battery",
      "314 Ah capacity",
      "Built-in intelligent BMS",
      "150 A standard charge/discharge",
      "Up to 200 A maximum",
      "CAN/RS485/USB",
      "WiFi/Bluetooth monitoring",
      "Parallel up to 16 units"
    ],
    "specs": [
      [
        "Energy",
        "16.07 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "314 Ah"
      ],
      [
        "Chemistry",
        "LiFePO₄"
      ],
      [
        "DoD",
        "80%"
      ],
      [
        "Cycle life",
        "6,000 cycles"
      ],
      [
        "Standard current",
        "150 A"
      ],
      [
        "Maximum current",
        "200 A"
      ],
      [
        "Parallel",
        "Up to 16 units"
      ],
      [
        "Source title",
        "SRNE 16.07kWh 51.2V Lithium Battery SE16B-Pro; LiFePO4, 314Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-14-33kwh-51-2v-lithium-battery-sr-se15b-lifepo4-280ah-90-dod-6000-cycles-can-rs485-parallel-up-to-16-units-in-uganda",
    "slug": "srne-14-33kwh-51-2v-lithium-battery-sr-se15b-lifepo4-280ah-90-dod-6000-cycles-can-rs485-parallel-up-to-16-units-in-uganda",
    "name": "SRNE 14.33kWh 51.2V Lithium Battery SR-SE15B; LiFePO4, 280Ah, 90% DoD, 6000 Cycles, CAN/RS485, Parallel Up To 16 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 8290000,
    "oldPrice": 8900000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "SR-SE15B",
    "summary": "SRNE 14.33kWh 51.2V Lithium Battery SR-SE15B; LiFePO4, 280Ah, 90% DoD, 6000 Cycles, CAN/RS485, Parallel Up To 16 Units In Uganda",
    "description": "SRNE 14.33kWh 51.2V Lithium Battery SR-SE15B; LiFePO4, 280Ah, 90% DoD, 6000 Cycles, CAN/RS485, Parallel Up To 16 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "14.33 kWh LFP battery",
      "280 Ah capacity",
      "90% DoD",
      "6,000 cycles",
      "Built-in BMS",
      "CAN/RS485",
      "Parallel up to 16 units"
    ],
    "specs": [
      [
        "Energy",
        "14.33 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "280 Ah"
      ],
      [
        "Chemistry",
        "LiFePO₄"
      ],
      [
        "DoD",
        "90%"
      ],
      [
        "Cycle life",
        "6,000 cycles"
      ],
      [
        "Recommended current",
        "100 A"
      ],
      [
        "Maximum charge current",
        "150 A"
      ],
      [
        "Maximum discharge current",
        "200 A"
      ],
      [
        "Parallel",
        "Up to 16 units"
      ],
      [
        "Source title",
        "SRNE 14.33kWh 51.2V Lithium Battery SR-SE15B; LiFePO4, 280Ah, 90% DoD, 6000 Cycles, CAN/RS485, Parallel Up To 16 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-10-49kwh-51-2v-lithium-battery-se10b-lifepo4-205ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "slug": "srne-10-49kwh-51-2v-lithium-battery-se10b-lifepo4-205ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "name": "SRNE 10.49kWh 51.2V Lithium Battery SE10B; LiFePO4, 205Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 6490000,
    "oldPrice": 7200000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "SE10B",
    "summary": "SRNE 10.49kWh 51.2V Lithium Battery SE10B; LiFePO4, 205Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "description": "SRNE 10.49kWh 51.2V Lithium Battery SE10B; LiFePO4, 205Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "10.49 kWh LFP battery",
      "205 Ah capacity",
      "Built-in intelligent BMS",
      "6,000 cycles at 80% DoD",
      "CAN/RS485/USB",
      "WiFi/Bluetooth monitoring",
      "Parallel up to 16 units"
    ],
    "specs": [
      [
        "Energy",
        "10.49 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "205 Ah"
      ],
      [
        "DoD",
        "80%"
      ],
      [
        "Cycle life",
        "6,000 cycles"
      ],
      [
        "Standard charge/discharge",
        "100 A"
      ],
      [
        "Maximum charge/discharge",
        "200 A"
      ],
      [
        "Parallel",
        "Up to 16 units"
      ],
      [
        "Source title",
        "SRNE 10.49kWh 51.2V Lithium Battery SE10B; LiFePO4, 205Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-12kva-12kw-3-phase-hybrid-solar-inverter-asf48120sh3-supports-up-to-18kwp-pv-48v-battery-230-400v-ac-output-dual-mppt-800v-voc-200-650v-mppt-range-260a-hybrid-charging-pure-sine-wave-output-in-uganda",
    "slug": "srne-12kva-12kw-3-phase-hybrid-solar-inverter-asf48120sh3-supports-up-to-18kwp-pv-48v-battery-230-400v-ac-output-dual-mppt-800v-voc-200-650v-mppt-range-260a-hybrid-charging-pure-sine-wave-output-in-uganda",
    "name": "SRNE 12kVA/12kW 3-Phase Hybrid Solar Inverter ASF48120SH3; Supports Up To 18kWp PV, 48V Battery, 230/400V AC Output, Dual MPPT, 800V Voc, 200–650V MPPT Range, 260A Hybrid Charging, Pure Sine Wave Output In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 6490000,
    "oldPrice": 7500000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "SRNE 12kVA/12kW 3-Phase Hybrid Solar Inverter ASF48120SH3; Supports Up To 18kWp PV, 48V Battery, 230/400V AC Output, Dual MPPT, 800V Voc, 200–650V MPPT Range, 260A Hybrid Charging, Pure Sine Wave Output In Uganda",
    "description": "SRNE 12kVA/12kW 3-Phase Hybrid Solar Inverter ASF48120SH3; Supports Up To 18kWp PV, 48V Battery, 230/400V AC Output, Dual MPPT, 800V Voc, 200–650V MPPT Range, 260A Hybrid Charging, Pure Sine Wave Output In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Supports Up To 18kWp PV, 48V Battery, 230/400V AC Output, Dual MPPT, 800V Voc, 200–650V MPPT Range, 260A Hybrid Charging, Pure Sine Wave Output In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "SRNE 12kVA/12kW 3-Phase Hybrid Solar Inverter ASF48120SH3; Supports Up To 18kWp PV, 48V Battery, 230/400V AC Output, Dual MPPT, 800V Voc, 200–650V MPPT Range, 260A Hybrid Charging, Pure Sine Wave Output In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-5-12kwh-51-2v-lithium-battery-se05b-lifepo4-100ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "slug": "srne-5-12kwh-51-2v-lithium-battery-se05b-lifepo4-100ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "name": "SRNE 5.12kWh 51.2V Lithium Battery SE05B; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 3900000,
    "oldPrice": 4500000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "SE05B",
    "summary": "SRNE 5.12kWh 51.2V Lithium Battery SE05B; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "description": "SRNE 5.12kWh 51.2V Lithium Battery SE05B; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LFP battery",
      "100 Ah capacity",
      "Built-in intelligent BMS",
      "6,000 cycles at 80% DoD",
      "CAN/RS485/USB",
      "WiFi/Bluetooth monitoring",
      "Parallel up to 16 units"
    ],
    "specs": [
      [
        "Energy",
        "5.12 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "80%"
      ],
      [
        "Cycle life",
        "6,000 cycles"
      ],
      [
        "Standard current",
        "50 A"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Parallel",
        "Up to 16 units"
      ],
      [
        "Source title",
        "SRNE 5.12kWh 51.2V Lithium Battery SE05B; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-5kw-5-12kwh-lithium-all-in-one-backup-power-system-eot05s-charge-by-grid-generator-and-solar-up-to-5500wp-in-uganda",
    "slug": "srne-5kw-5-12kwh-lithium-all-in-one-backup-power-system-eot05s-charge-by-grid-generator-and-solar-up-to-5500wp-in-uganda",
    "name": "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda",
    "brand": "SRNE",
    "category": "Complete Solar Systems & Kits",
    "price": 5490000,
    "oldPrice": 6200000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda",
    "description": "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "Charge By Grid, Generator & Solar Up To 5500Wp In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "SRNE 5kW/5.12kWh Lithium All-in-One Backup Power System EOT05S; Charge By Grid, Generator & Solar Up To 5500Wp In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Homes",
      "Offices",
      "Shops",
      "Small businesses"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-5-12kwh-51-2v-rack-lithium-battery-eoc05b-ul-lifepo4-100ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "slug": "srne-5-12kwh-51-2v-rack-lithium-battery-eoc05b-ul-lifepo4-100ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-16-units-in-uganda",
    "name": "SRNE 5.12kWh 51.2V Rack Lithium Battery EOC05B-UL; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 3900000,
    "oldPrice": 4500000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "EOC05B-UL",
    "summary": "SRNE 5.12kWh 51.2V Rack Lithium Battery EOC05B-UL; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda",
    "description": "SRNE 5.12kWh 51.2V Rack Lithium Battery EOC05B-UL; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda"
    ],
    "specs": [
      [
        "Model",
        "EOC05B-UL"
      ],
      [
        "Source title",
        "SRNE 5.12kWh 51.2V Rack Lithium Battery EOC05B-UL; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 16 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-6kw-48v-off-grid-solar-storage-inverter-aep4860s135-h-2-mppt-12000w-pv-65-450v-mppt-500v-voc-135a-6-unit-parallel-wifi-option-ip65-in-uganda",
    "slug": "srne-6kw-48v-off-grid-solar-storage-inverter-aep4860s135-h-2-mppt-12000w-pv-65-450v-mppt-500v-voc-135a-6-unit-parallel-wifi-option-ip65-in-uganda",
    "name": "SRNE 6kW 48V Off-Grid Solar Storage Inverter AEP4860S135-H; 2 MPPT, 12000W PV, 65-450V MPPT, 500V Voc, 135A, 6-Unit Parallel, WiFi Option, IP65 In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 2490000,
    "oldPrice": 3000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "AEP4860S135-H",
    "summary": "SRNE 6kW 48V Off-Grid Solar Storage Inverter AEP4860S135-H; 2 MPPT, 12000W PV, 65-450V MPPT, 500V Voc, 135A, 6-Unit Parallel, WiFi Option, IP65 In Uganda",
    "description": "SRNE 6kW 48V Off-Grid Solar Storage Inverter AEP4860S135-H; 2 MPPT, 12000W PV, 65-450V MPPT, 500V Voc, 135A, 6-Unit Parallel, WiFi Option, IP65 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "6 kW off-grid inverter",
      "Dual MPPT",
      "12 kW PV access",
      "135 A charging",
      "48 V battery support",
      "6-unit parallel",
      "Optional WiFi",
      "IP65"
    ],
    "specs": [
      [
        "Rated output",
        "6 kW"
      ],
      [
        "PV access",
        "12 kW"
      ],
      [
        "MPPT range",
        "65–450 V"
      ],
      [
        "Maximum Voc",
        "500 V"
      ],
      [
        "Charging current",
        "135 A"
      ],
      [
        "Parallel",
        "Up to 6 units"
      ],
      [
        "Protection",
        "IP65"
      ],
      [
        "Source title",
        "SRNE 6kW 48V Off-Grid Solar Storage Inverter AEP4860S135-H; 2 MPPT, 12000W PV, 65-450V MPPT, 500V Voc, 135A, 6-Unit Parallel, WiFi Option, IP65 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-2-56kwh-25-6v-lithium-battery-eos02b-24-lifepo4-100ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-4-units-in-uganda",
    "slug": "srne-2-56kwh-25-6v-lithium-battery-eos02b-24-lifepo4-100ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-4-units-in-uganda",
    "name": "SRNE 2.56kWh 25.6V Lithium Battery EOS02B-24; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 2390000,
    "oldPrice": 2900000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "EOS02B-24",
    "summary": "SRNE 2.56kWh 25.6V Lithium Battery EOS02B-24; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda",
    "description": "SRNE 2.56kWh 25.6V Lithium Battery EOS02B-24; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "2.56 kWh LFP battery",
      "100 Ah capacity",
      "Built-in BMS",
      "6,000 cycles at 80% DoD",
      "CAN/RS485/USB",
      "Optional WiFi/Bluetooth",
      "Parallel up to 4 units"
    ],
    "specs": [
      [
        "Energy",
        "2.56 kWh"
      ],
      [
        "Voltage",
        "25.6 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "Chemistry",
        "LiFePO₄"
      ],
      [
        "DoD",
        "80%"
      ],
      [
        "Cycle life",
        "6,000 cycles"
      ],
      [
        "Standard current",
        "50 A"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Parallel",
        "Up to 4 units"
      ],
      [
        "Source title",
        "SRNE 2.56kWh 25.6V Lithium Battery EOS02B-24; LiFePO4, 100Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-6-2kw-48v-hybrid-solar-inverter-hyp4860s100-h-2-mppt-9000w-pv-120-480v-mppt-550v-voc-100a-6-unit-parallel-wifi-gprs-ip20-in-uganda",
    "slug": "srne-6-2kw-48v-hybrid-solar-inverter-hyp4860s100-h-2-mppt-9000w-pv-120-480v-mppt-550v-voc-100a-6-unit-parallel-wifi-gprs-ip20-in-uganda",
    "name": "SRNE 6.2kW 48V Hybrid Solar Inverter HYP4860S100-H; 2 MPPT, 9000W PV, 120-480V MPPT, 550V Voc, 100A, 6-Unit Parallel, WiFi/GPRS, IP20 In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 2390000,
    "oldPrice": 2800000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "HYP4860S100-H",
    "summary": "SRNE 6.2kW 48V Hybrid Solar Inverter HYP4860S100-H; 2 MPPT, 9000W PV, 120-480V MPPT, 550V Voc, 100A, 6-Unit Parallel, WiFi/GPRS, IP20 In Uganda",
    "description": "SRNE 6.2kW 48V Hybrid Solar Inverter HYP4860S100-H; 2 MPPT, 9000W PV, 120-480V MPPT, 550V Voc, 100A, 6-Unit Parallel, WiFi/GPRS, IP20 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "6.2 kW hybrid inverter",
      "Dual MPPT",
      "9 kW PV input",
      "100 A charging",
      "48 V battery system",
      "6-unit parallel support",
      "WiFi/GPRS option",
      "IP20"
    ],
    "specs": [
      [
        "Rated output",
        "6.2 kW"
      ],
      [
        "Peak power",
        "12.4 kVA"
      ],
      [
        "Battery voltage",
        "48 V"
      ],
      [
        "PV input",
        "9,000 W"
      ],
      [
        "MPPT range",
        "120–480 V"
      ],
      [
        "Maximum Voc",
        "550 V"
      ],
      [
        "Charge current",
        "100 A"
      ],
      [
        "Parallel",
        "Up to 6 units"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Source title",
        "SRNE 6.2kW 48V Hybrid Solar Inverter HYP4860S100-H; 2 MPPT, 9000W PV, 120-480V MPPT, 550V Voc, 100A, 6-Unit Parallel, WiFi/GPRS, IP20 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-2-56kwh-12-8v-lithium-battery-eos02b-12-lifepo4-200ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-4-units-in-uganda",
    "slug": "srne-2-56kwh-12-8v-lithium-battery-eos02b-12-lifepo4-200ah-80-dod-6000-cycles-built-in-bms-parallel-up-to-4-units-in-uganda",
    "name": "SRNE 2.56kWh 12.8V Lithium Battery EOS02B-12; LiFePO4, 200Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda",
    "brand": "SRNE",
    "category": "Batteries & Energy Storage",
    "price": 2190000,
    "oldPrice": 2500000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "EOS02B-12",
    "summary": "SRNE 2.56kWh 12.8V Lithium Battery EOS02B-12; LiFePO4, 200Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda",
    "description": "SRNE 2.56kWh 12.8V Lithium Battery EOS02B-12; LiFePO4, 200Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "2.56 kWh LFP battery",
      "200 Ah capacity",
      "Built-in BMS",
      "6,000 cycles at 80% DoD",
      "CAN/RS485/USB",
      "Optional WiFi/Bluetooth",
      "Parallel up to 4 units"
    ],
    "specs": [
      [
        "Energy",
        "2.56 kWh"
      ],
      [
        "Voltage",
        "12.8 V"
      ],
      [
        "Capacity",
        "200 Ah"
      ],
      [
        "Chemistry",
        "LiFePO₄"
      ],
      [
        "DoD",
        "80%"
      ],
      [
        "Cycle life",
        "6,000 cycles"
      ],
      [
        "Standard current",
        "100 A"
      ],
      [
        "Maximum current",
        "120 A"
      ],
      [
        "Parallel",
        "Up to 4 units"
      ],
      [
        "Source title",
        "SRNE 2.56kWh 12.8V Lithium Battery EOS02B-12; LiFePO4, 200Ah, 80% DoD, 6000 Cycles, Built-in BMS, Parallel Up To 4 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-5kw-48v-single-phase-off-grid-inverter-afp4850s100-h-1-mppt-7500w-pv-60-450v-mppt-500v-voc-100a-6-unit-parallel-ip20-in-uganda",
    "slug": "srne-5kw-48v-single-phase-off-grid-inverter-afp4850s100-h-1-mppt-7500w-pv-60-450v-mppt-500v-voc-100a-6-unit-parallel-ip20-in-uganda",
    "name": "SRNE 5kW 48V Single-Phase Off-Grid Inverter AFP4850S100-H; 1 MPPT, 7500W PV, 60-450V MPPT, 500V Voc, 100A, 6-Unit Parallel, IP20 In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 1890000,
    "oldPrice": 2100000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "AFP4850S100-H",
    "summary": "SRNE 5kW 48V Single-Phase Off-Grid Inverter AFP4850S100-H; 1 MPPT, 7500W PV, 60-450V MPPT, 500V Voc, 100A, 6-Unit Parallel, IP20 In Uganda",
    "description": "SRNE 5kW 48V Single-Phase Off-Grid Inverter AFP4850S100-H; 1 MPPT, 7500W PV, 60-450V MPPT, 500V Voc, 100A, 6-Unit Parallel, IP20 In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "1 MPPT, 7500W PV, 60-450V MPPT, 500V Voc, 100A, 6-Unit Parallel, IP20 In Uganda"
    ],
    "specs": [
      [
        "Model",
        "AFP4850S100-H"
      ],
      [
        "Source title",
        "SRNE 5kW 48V Single-Phase Off-Grid Inverter AFP4850S100-H; 1 MPPT, 7500W PV, 60-450V MPPT, 500V Voc, 100A, 6-Unit Parallel, IP20 In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-3-3kw-24v-hybrid-solar-inverter-hf2430s80-h-4kwp-500voc-120-500vdc-80a-mppt-charge-controller-230vac-pure-sine-wave-output-wifi-optional-in-uganda",
    "slug": "srne-3-3kw-24v-hybrid-solar-inverter-hf2430s80-h-4kwp-500voc-120-500vdc-80a-mppt-charge-controller-230vac-pure-sine-wave-output-wifi-optional-in-uganda",
    "name": "SRNE 3.3kW 24V Hybrid Solar Inverter HF2430S80-H; 4kWp/500Voc/120-500VDC/80A MPPT Charge Controller, 230Vac Pure Sine Wave Output, WiFi Optional In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 1690000,
    "oldPrice": 1900000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "HF2430S80-H",
    "summary": "SRNE 3.3kW 24V Hybrid Solar Inverter HF2430S80-H; 4kWp/500Voc/120-500VDC/80A MPPT Charge Controller, 230Vac Pure Sine Wave Output, WiFi Optional In Uganda",
    "description": "SRNE 3.3kW 24V Hybrid Solar Inverter HF2430S80-H; 4kWp/500Voc/120-500VDC/80A MPPT Charge Controller, 230Vac Pure Sine Wave Output, WiFi Optional In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "3.3 kW hybrid inverter",
      "24 V battery system",
      "4 kW PV array support",
      "80 A MPPT/charging",
      "Pure sine-wave output",
      "Optional WiFi/GPRS"
    ],
    "specs": [
      [
        "Rated output",
        "3.3 kW / 3.3 kVA"
      ],
      [
        "Peak",
        "6,000 VA"
      ],
      [
        "Battery",
        "24 V"
      ],
      [
        "Maximum PV",
        "4,000 W"
      ],
      [
        "Maximum Voc",
        "500 V"
      ],
      [
        "MPPT range",
        "120–500 V"
      ],
      [
        "Charging current",
        "80 A"
      ],
      [
        "Output",
        "230 Vac pure sine wave"
      ],
      [
        "Source title",
        "SRNE 3.3kW 24V Hybrid Solar Inverter HF2430S80-H; 4kWp/500Voc/120-500VDC/80A MPPT Charge Controller, 230Vac Pure Sine Wave Output, WiFi Optional In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-3kva-3kw-24v-hybrid-inverter-hf2430s60-100-built-in-60a-mppt-solar-charge-controller-1400wp-100voc-30-95v-pure-sine-wave-output-in-uganda",
    "slug": "srne-3kva-3kw-24v-hybrid-inverter-hf2430s60-100-built-in-60a-mppt-solar-charge-controller-1400wp-100voc-30-95v-pure-sine-wave-output-in-uganda",
    "name": "SRNE 3kVA/3kW 24V Hybrid Inverter HF2430S60-100; Built-in 60A MPPT Solar Charge Controller 1400Wp/100Voc/30-95V, Pure Sine Wave Output In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 1390000,
    "oldPrice": 1690000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "HF2430S60-100",
    "summary": "SRNE 3kVA/3kW 24V Hybrid Inverter HF2430S60-100; Built-in 60A MPPT Solar Charge Controller 1400Wp/100Voc/30-95V, Pure Sine Wave Output In Uganda",
    "description": "SRNE 3kVA/3kW 24V Hybrid Inverter HF2430S60-100; Built-in 60A MPPT Solar Charge Controller 1400Wp/100Voc/30-95V, Pure Sine Wave Output In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "3 kW pure sine-wave hybrid inverter",
      "24 V battery system",
      "Built-in 60 A MPPT",
      "1,400 W PV support",
      "100 V maximum Voc"
    ],
    "specs": [
      [
        "Rated output",
        "3 kVA / 3 kW"
      ],
      [
        "Battery",
        "24 V"
      ],
      [
        "MPPT",
        "60 A"
      ],
      [
        "Maximum PV",
        "1,400 W"
      ],
      [
        "Maximum Voc",
        "100 V"
      ],
      [
        "MPPT range",
        "30–95 V"
      ],
      [
        "Output",
        "230 Vac"
      ],
      [
        "Source title",
        "SRNE 3kVA/3kW 24V Hybrid Inverter HF2430S60-100; Built-in 60A MPPT Solar Charge Controller 1400Wp/100Voc/30-95V, Pure Sine Wave Output In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "srne-1-5kva-1-5kw-12v-hybrid-solar-inverter-hf1215s60-108-built-in-60a-mppt-solar-charge-controller-1000wp-108voc-15-90v-pure-sine-wave-output-in-uganda",
    "slug": "srne-1-5kva-1-5kw-12v-hybrid-solar-inverter-hf1215s60-108-built-in-60a-mppt-solar-charge-controller-1000wp-108voc-15-90v-pure-sine-wave-output-in-uganda",
    "name": "SRNE 1.5kVA/1.5kW 12V Hybrid Solar Inverter HF1215S60-108; Built-in 60A MPPT Solar Charge Controller 1000Wp/108Voc/15–90V, Pure Sine Wave Output In Uganda",
    "brand": "SRNE",
    "category": "Inverters, Chargers & MPPTs",
    "price": 900000,
    "oldPrice": 1200000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "HF1215S60-108",
    "summary": "SRNE 1.5kVA/1.5kW 12V Hybrid Solar Inverter HF1215S60-108; Built-in 60A MPPT Solar Charge Controller 1000Wp/108Voc/15–90V, Pure Sine Wave Output In Uganda",
    "description": "SRNE 1.5kVA/1.5kW 12V Hybrid Solar Inverter HF1215S60-108; Built-in 60A MPPT Solar Charge Controller 1000Wp/108Voc/15–90V, Pure Sine Wave Output In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "1.5 kW hybrid inverter",
      "12 V battery system",
      "Built-in 60 A MPPT",
      "1,000 W PV support",
      "Pure sine-wave output",
      "RS485/CAN/USB"
    ],
    "specs": [
      [
        "Rated output",
        "1.5 kW / 1.5 kVA"
      ],
      [
        "Battery",
        "12 V"
      ],
      [
        "Maximum PV",
        "1,000 W"
      ],
      [
        "Maximum Voc",
        "108 V"
      ],
      [
        "MPPT range",
        "15–90 V"
      ],
      [
        "MPPT current",
        "60 A"
      ],
      [
        "Output",
        "230 Vac"
      ],
      [
        "UPS switch time",
        "10 ms"
      ],
      [
        "Source title",
        "SRNE 1.5kVA/1.5kW 12V Hybrid Solar Inverter HF1215S60-108; Built-in 60A MPPT Solar Charge Controller 1000Wp/108Voc/15–90V, Pure Sine Wave Output In Uganda"
      ]
    ],
    "images": [],
    "warranty": "1 Year",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar power systems",
      "Backup power",
      "Residential and commercial power"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-5-12kwh-51-2v-lithium-solar-battery-dl5-0c-100ah-50a-recommended-100a-max-discharge-6000-cycles-scalable-to-256kwh-in-uganda",
    "slug": "dyness-5-12kwh-51-2v-lithium-solar-battery-dl5-0c-100ah-50a-recommended-100a-max-discharge-6000-cycles-scalable-to-256kwh-in-uganda",
    "name": "Dyness 5.12kWh 51.2V Lithium Solar Battery DL5.0C; 100Ah, 50A Recommended, 100A Max Discharge, 6000+ Cycles, Scalable To 256kWh In Uganda",
    "brand": "Dyness",
    "category": "Batteries & Energy Storage",
    "price": 3490000,
    "oldPrice": 4200000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "DL5.0C",
    "summary": "Dyness 5.12kWh 51.2V Lithium Solar Battery DL5.0C; 100Ah, 50A Recommended, 100A Max Discharge, 6000+ Cycles, Scalable To 256kWh In Uganda",
    "description": "Dyness 5.12kWh 51.2V Lithium Solar Battery DL5.0C; 100Ah, 50A Recommended, 100A Max Discharge, 6000+ Cycles, Scalable To 256kWh In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ battery",
      "100 Ah capacity",
      "50 A recommended current",
      "100 A maximum discharge",
      "6,000+ cycles",
      "Scalable to 256 kWh"
    ],
    "specs": [
      [
        "Energy",
        "5.12 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "Recommended current",
        "50 A"
      ],
      [
        "Maximum discharge",
        "100 A"
      ],
      [
        "Cycle life",
        "6,000+ cycles"
      ],
      [
        "Maximum scalable capacity",
        "256 kWh"
      ],
      [
        "Source title",
        "Dyness 5.12kWh 51.2V Lithium Solar Battery DL5.0C; 100Ah, 50A Recommended, 100A Max Discharge, 6000+ Cycles, Scalable To 256kWh In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-2-56kwh-25-6v-lifepo4-lithium-solar-battery-dl2-5-c-100ah-built-in-bms-50a-recommended-charge-discharge-130a-max-discharge-can-rs485-optional-wifi-ip20-stackable-up-to-16-units-40-96kwh-in-uganda",
    "slug": "dyness-2-56kwh-25-6v-lifepo4-lithium-solar-battery-dl2-5-c-100ah-built-in-bms-50a-recommended-charge-discharge-130a-max-discharge-can-rs485-optional-wifi-ip20-stackable-up-to-16-units-40-96kwh-in-uganda",
    "name": "Dyness 2.56kWh 25.6V LiFePO4 Lithium Solar Battery DL2.5 C; 100Ah, Built-in BMS, 50A Recommended Charge/Discharge, 130A Max Discharge, CAN/RS485, Optional WiFi, IP20, Stackable Up To 16 Units (40.96kWh) In Uganda",
    "brand": "Dyness",
    "category": "Batteries & Energy Storage",
    "price": 1890000,
    "oldPrice": 2290000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "DL2.5 C",
    "summary": "Dyness 2.56kWh 25.6V LiFePO4 Lithium Solar Battery DL2.5 C; 100Ah, Built-in BMS, 50A Recommended Charge/Discharge, 130A Max Discharge, CAN/RS485, Optional WiFi, IP20, Stackable Up To 16 Units (40.96kWh) In Uganda",
    "description": "Dyness 2.56kWh 25.6V LiFePO4 Lithium Solar Battery DL2.5 C; 100Ah, Built-in BMS, 50A Recommended Charge/Discharge, 130A Max Discharge, CAN/RS485, Optional WiFi, IP20, Stackable Up To 16 Units (40.96kWh) In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "2.56 kWh LiFePO₄ battery",
      "100 Ah capacity",
      "Built-in BMS",
      "50 A recommended charge/discharge",
      "130 A maximum discharge",
      "CAN/RS485",
      "Optional WiFi",
      "IP20",
      "Stackable to 16 units"
    ],
    "specs": [
      [
        "Energy",
        "2.56 kWh"
      ],
      [
        "Voltage",
        "25.6 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "Recommended current",
        "50 A"
      ],
      [
        "Maximum discharge",
        "130 A"
      ],
      [
        "Communication",
        "CAN/RS485"
      ],
      [
        "Parallel/stack",
        "Up to 16 units / 40.96 kWh"
      ],
      [
        "IP rating",
        "IP20"
      ],
      [
        "Source title",
        "Dyness 2.56kWh 25.6V LiFePO4 Lithium Solar Battery DL2.5 C; 100Ah, Built-in BMS, 50A Recommended Charge/Discharge, 130A Max Discharge, CAN/RS485, Optional WiFi, IP20, Stackable Up To 16 Units (40.96kWh) In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-kweli-shop",
    "slug": "dyness-kweli-shop",
    "name": "Dyness - Kweli.shop",
    "brand": "Dyness",
    "category": "Solar Panels & Lighting",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Dyness - Kweli.shop",
    "description": "Dyness - Kweli.shop. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Dyness - Kweli.shop"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-stack100-5-12kwh-51-2v-lifepo4-high-voltage-lithium-battery-module-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-scalable-to-921-6kwh-10-year-warranty-in-uganda",
    "slug": "dyness-stack100-5-12kwh-51-2v-lifepo4-high-voltage-lithium-battery-module-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-scalable-to-921-6kwh-10-year-warranty-in-uganda",
    "name": "Dyness STACK100 5.12kWh 51.2V LiFePO4 High-Voltage Lithium Battery Module; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Scalable To 921.6kWh, 10-Year Warranty In Uganda",
    "brand": "Dyness",
    "category": "Commercial & Industrial Solar",
    "price": 3990000,
    "oldPrice": 4500000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "STACK100",
    "summary": "Dyness STACK100 5.12kWh 51.2V LiFePO4 High-Voltage Lithium Battery Module; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Scalable To 921.6kWh, 10-Year Warranty In Uganda",
    "description": "Dyness STACK100 5.12kWh 51.2V LiFePO4 High-Voltage Lithium Battery Module; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Scalable To 921.6kWh, 10-Year Warranty In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ module",
      "51.2 V / 100 Ah",
      "1C charge/discharge",
      "CAN/RS485",
      "Cable-free stackable design",
      "95% DoD",
      "8,000+ cycles",
      "Built-in aerosol fire extinguisher",
      "WiFi + app"
    ],
    "specs": [
      [
        "Nominal energy",
        "5.12 kWh"
      ],
      [
        "Usable energy",
        "4.864 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "95%"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Cycle life",
        "8,000+ cycles"
      ],
      [
        "Communication",
        "CAN / RS485"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Module weight",
        "15.3 kg"
      ],
      [
        "Dimensions",
        "590 × 390 × 133 mm"
      ],
      [
        "Source title",
        "Dyness STACK100 5.12kWh 51.2V LiFePO4 High-Voltage Lithium Battery Module; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Scalable To 921.6kWh, 10-Year Warranty In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-powerbrick-max-16kwh-51-2v-lithium-battery-lifepo4-314ah-95-dod-8000-cycles-built-in-bms-optional-wifi-scalable-up-to-50-units-in-uganda",
    "slug": "dyness-powerbrick-max-16kwh-51-2v-lithium-battery-lifepo4-314ah-95-dod-8000-cycles-built-in-bms-optional-wifi-scalable-up-to-50-units-in-uganda",
    "name": "Dyness PowerBrick Max 16kWh 51.2V Lithium Battery; LiFePO4, 314Ah, 95% DOD, 8000+ Cycles, Built-in BMS, Optional WiFi, Scalable Up To 50 Units In Uganda",
    "brand": "Dyness",
    "category": "Batteries & Energy Storage",
    "price": 8490000,
    "oldPrice": 9000000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Dyness PowerBrick Max 16kWh 51.2V Lithium Battery; LiFePO4, 314Ah, 95% DOD, 8000+ Cycles, Built-in BMS, Optional WiFi, Scalable Up To 50 Units In Uganda",
    "description": "Dyness PowerBrick Max 16kWh 51.2V Lithium Battery; LiFePO4, 314Ah, 95% DOD, 8000+ Cycles, Built-in BMS, Optional WiFi, Scalable Up To 50 Units In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "LiFePO4, 314Ah, 95% DOD, 8000+ Cycles, Built-in BMS, Optional WiFi, Scalable Up To 50 Units In Uganda"
    ],
    "specs": [
      [
        "Source title",
        "Dyness PowerBrick Max 16kWh 51.2V Lithium Battery; LiFePO4, 314Ah, 95% DOD, 8000+ Cycles, Built-in BMS, Optional WiFi, Scalable Up To 50 Units In Uganda"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-stack100-15-36kwh-153-6v-lifepo4-high-voltage-lithium-battery-system-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "slug": "dyness-stack100-15-36kwh-153-6v-lifepo4-high-voltage-lithium-battery-system-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "name": "Dyness STACK100 15.36kWh 153.6V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "brand": "Dyness",
    "category": "Commercial & Industrial Solar",
    "price": 11900000,
    "oldPrice": 13500000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "STACK100",
    "summary": "Dyness STACK100 15.36kWh 153.6V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "description": "Dyness STACK100 15.36kWh 153.6V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ module",
      "51.2 V / 100 Ah",
      "1C charge/discharge",
      "CAN/RS485",
      "Cable-free stackable design",
      "95% DoD",
      "8,000+ cycles",
      "Built-in aerosol fire extinguisher",
      "WiFi + app"
    ],
    "specs": [
      [
        "Nominal energy",
        "5.12 kWh"
      ],
      [
        "Usable energy",
        "4.864 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "95%"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Cycle life",
        "8,000+ cycles"
      ],
      [
        "Communication",
        "CAN / RS485"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Module weight",
        "15.3 kg"
      ],
      [
        "Dimensions",
        "590 × 390 × 133 mm"
      ],
      [
        "Source title",
        "Dyness STACK100 15.36kWh 153.6V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-stack100-61-44kwh-614-4v-lifepo4-high-voltage-lithium-battery-system-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "slug": "dyness-stack100-61-44kwh-614-4v-lifepo4-high-voltage-lithium-battery-system-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "name": "Dyness STACK100 61.44kWh 614.4V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "brand": "Dyness",
    "category": "Commercial & Industrial Solar",
    "price": 46900000,
    "oldPrice": 51000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "STACK100",
    "summary": "Dyness STACK100 61.44kWh 614.4V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "description": "Dyness STACK100 61.44kWh 614.4V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ module",
      "51.2 V / 100 Ah",
      "1C charge/discharge",
      "CAN/RS485",
      "Cable-free stackable design",
      "95% DoD",
      "8,000+ cycles",
      "Built-in aerosol fire extinguisher",
      "WiFi + app"
    ],
    "specs": [
      [
        "Nominal energy",
        "5.12 kWh"
      ],
      [
        "Usable energy",
        "4.864 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "95%"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Cycle life",
        "8,000+ cycles"
      ],
      [
        "Communication",
        "CAN / RS485"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Module weight",
        "15.3 kg"
      ],
      [
        "Dimensions",
        "590 × 390 × 133 mm"
      ],
      [
        "Source title",
        "Dyness STACK100 61.44kWh 614.4V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-stack100-76-8kwh-768v-lifepo4-high-voltage-lithium-battery-system-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "slug": "dyness-stack100-76-8kwh-768v-lifepo4-high-voltage-lithium-battery-system-100ah-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "name": "Dyness STACK100 76.8kWh 768V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "brand": "Dyness",
    "category": "Commercial & Industrial Solar",
    "price": 56900000,
    "oldPrice": 63000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "STACK100",
    "summary": "Dyness STACK100 76.8kWh 768V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "description": "Dyness STACK100 76.8kWh 768V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ module",
      "51.2 V / 100 Ah",
      "1C charge/discharge",
      "CAN/RS485",
      "Cable-free stackable design",
      "95% DoD",
      "8,000+ cycles",
      "Built-in aerosol fire extinguisher",
      "WiFi + app"
    ],
    "specs": [
      [
        "Nominal energy",
        "5.12 kWh"
      ],
      [
        "Usable energy",
        "4.864 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "95%"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Cycle life",
        "8,000+ cycles"
      ],
      [
        "Communication",
        "CAN / RS485"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Module weight",
        "15.3 kg"
      ],
      [
        "Dimensions",
        "590 × 390 × 133 mm"
      ],
      [
        "Source title",
        "Dyness STACK100 76.8kWh 768V LiFePO4 High-Voltage Lithium Battery System; 100Ah, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-stack100-921-6kwh-industrial-lifepo4-high-voltage-lithium-battery-system-100ah-12-clusters-in-parallel-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "slug": "dyness-stack100-921-6kwh-industrial-lifepo4-high-voltage-lithium-battery-system-100ah-12-clusters-in-parallel-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "name": "Dyness STACK100 921.6kWh Industrial LiFePO4 High-Voltage Lithium Battery System; 100Ah, 12 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "brand": "Dyness",
    "category": "Commercial & Industrial Solar",
    "price": 669000000,
    "oldPrice": 750000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "STACK100",
    "summary": "Dyness STACK100 921.6kWh Industrial LiFePO4 High-Voltage Lithium Battery System; 100Ah, 12 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "description": "Dyness STACK100 921.6kWh Industrial LiFePO4 High-Voltage Lithium Battery System; 100Ah, 12 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ module",
      "51.2 V / 100 Ah",
      "1C charge/discharge",
      "CAN/RS485",
      "Cable-free stackable design",
      "95% DoD",
      "8,000+ cycles",
      "Built-in aerosol fire extinguisher",
      "WiFi + app"
    ],
    "specs": [
      [
        "Nominal energy",
        "5.12 kWh"
      ],
      [
        "Usable energy",
        "4.864 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "95%"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Cycle life",
        "8,000+ cycles"
      ],
      [
        "Communication",
        "CAN / RS485"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Module weight",
        "15.3 kg"
      ],
      [
        "Dimensions",
        "590 × 390 × 133 mm"
      ],
      [
        "Source title",
        "Dyness STACK100 921.6kWh Industrial LiFePO4 High-Voltage Lithium Battery System; 100Ah, 12 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "dyness-stack100-230-4kwh-industrial-high-voltage-lifepo4-lithium-battery-system-100ah-3-clusters-in-parallel-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "slug": "dyness-stack100-230-4kwh-industrial-high-voltage-lifepo4-lithium-battery-system-100ah-3-clusters-in-parallel-1c-charge-discharge-can-rs485-cable-free-stackable-design-built-in-aerosol-fire-extinguisher-10-year-warranty-in-uganda",
    "name": "Dyness STACK100 230.4kWh Industrial High-Voltage LiFePO4 Lithium Battery System; 100Ah, 3 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "brand": "Dyness",
    "category": "Commercial & Industrial Solar",
    "price": 169900000,
    "oldPrice": 200000000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "STACK100",
    "summary": "Dyness STACK100 230.4kWh Industrial High-Voltage LiFePO4 Lithium Battery System; 100Ah, 3 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda",
    "description": "Dyness STACK100 230.4kWh Industrial High-Voltage LiFePO4 Lithium Battery System; 100Ah, 3 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [
      "5.12 kWh LiFePO₄ module",
      "51.2 V / 100 Ah",
      "1C charge/discharge",
      "CAN/RS485",
      "Cable-free stackable design",
      "95% DoD",
      "8,000+ cycles",
      "Built-in aerosol fire extinguisher",
      "WiFi + app"
    ],
    "specs": [
      [
        "Nominal energy",
        "5.12 kWh"
      ],
      [
        "Usable energy",
        "4.864 kWh"
      ],
      [
        "Voltage",
        "51.2 V"
      ],
      [
        "Capacity",
        "100 Ah"
      ],
      [
        "DoD",
        "95%"
      ],
      [
        "Maximum current",
        "100 A"
      ],
      [
        "Cycle life",
        "8,000+ cycles"
      ],
      [
        "Communication",
        "CAN / RS485"
      ],
      [
        "Protection",
        "IP20"
      ],
      [
        "Module weight",
        "15.3 kg"
      ],
      [
        "Dimensions",
        "590 × 390 × 133 mm"
      ],
      [
        "Source title",
        "Dyness STACK100 230.4kWh Industrial High-Voltage LiFePO4 Lithium Battery System; 100Ah, 3 Clusters In Parallel, 1C Charge/Discharge, CAN/RS485, Cable-Free Stackable Design, Built-in Aerosol Fire Extinguisher, 10-Year Warranty In Uganda"
      ]
    ],
    "images": [],
    "warranty": "10 Years",
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-blue-carbon-all-in-one-solar-power-street-light-100w-solar-lamp-integrated-led-solar-street-light-8-10m-bluecarbontech-com",
    "slug": "blue-carbon-blue-carbon-all-in-one-solar-power-street-light-100w-solar-lamp-integrated-led-solar-street-light-8-10m-bluecarbontech-com",
    "name": "Blue Carbon - Blue Carbon All In One Solar Power Street Light 100W Solar Lamp Integrated Led Solar Street Light 8-10m - bluecarbontech.com",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon - Blue Carbon All In One Solar Power Street Light 100W Solar Lamp Integrated Led Solar Street Light 8-10m - bluecarbontech.com",
    "description": "Blue Carbon - Blue Carbon All In One Solar Power Street Light 100W Solar Lamp Integrated Led Solar Street Light 8-10m - bluecarbontech.com. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon - Blue Carbon All In One Solar Power Street Light 100W Solar Lamp Integrated Led Solar Street Light 8-10m - bluecarbontech.com"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "24v-municipal-street-light-bct-olm-b-blue-carbon-solar-lights",
    "slug": "24v-municipal-street-light-bct-olm-b-blue-carbon-solar-lights",
    "name": "24V Municipal Street Light (BCT-OLM-B) - Blue Carbon Solar Lights",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "sku": "BCT-OLM-B",
    "summary": "24V Municipal Street Light (BCT-OLM-B) - Blue Carbon Solar Lights",
    "description": "24V Municipal Street Light (BCT-OLM-B) - Blue Carbon Solar Lights. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Model",
        "BCT-OLM-B"
      ],
      [
        "Source title",
        "24V Municipal Street Light (BCT-OLM-B) - Blue Carbon Solar Lights"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-mini-simplify-light-outdoor-5m-20w-solar-street-light-system-low-price-solar-light-solar-led-street-light-made-in-china-com",
    "slug": "blue-carbon-mini-simplify-light-outdoor-5m-20w-solar-street-light-system-low-price-solar-light-solar-led-street-light-made-in-china-com",
    "name": "Blue Carbon Mini Simplify Light Outdoor 5m 20W Solar Street Light System Low Price - Solar Light, Solar LED Street Light | Made-in-China.com",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon Mini Simplify Light Outdoor 5m 20W Solar Street Light System Low Price - Solar Light, Solar LED Street Light | Made-in-China.com",
    "description": "Blue Carbon Mini Simplify Light Outdoor 5m 20W Solar Street Light System Low Price - Solar Light, Solar LED Street Light | Made-in-China.com. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon Mini Simplify Light Outdoor 5m 20W Solar Street Light System Low Price - Solar Light, Solar LED Street Light | Made-in-China.com"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-solar-products-lithium-batteries-solar-panels-street-lights-and-more-blue-carbon-nigeria",
    "slug": "blue-carbon-solar-products-lithium-batteries-solar-panels-street-lights-and-more-blue-carbon-nigeria",
    "name": "Blue Carbon Solar Products – Lithium Batteries, Solar Panels, Street Lights & More | Blue Carbon Nigeria",
    "brand": "Blue Carbon",
    "category": "Solar Panels & Lighting",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon Solar Products – Lithium Batteries, Solar Panels, Street Lights & More | Blue Carbon Nigeria",
    "description": "Blue Carbon Solar Products – Lithium Batteries, Solar Panels, Street Lights & More | Blue Carbon Nigeria. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon Solar Products – Lithium Batteries, Solar Panels, Street Lights & More | Blue Carbon Nigeria"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-wawa-light-3-0-blue-carbon-nigeria",
    "slug": "blue-carbon-wawa-light-3-0-blue-carbon-nigeria",
    "name": "Blue Carbon Wawa Light 3.0 | Blue Carbon Nigeria",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon Wawa Light 3.0 | Blue Carbon Nigeria",
    "description": "Blue Carbon Wawa Light 3.0 | Blue Carbon Nigeria. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon Wawa Light 3.0 | Blue Carbon Nigeria"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-200w-300w-400w-500w-professional-ip66-waterproof-outdoor-garden-floodlight-solar-led-flood-light-solar-sport-light-blue-carbon-made-in-china-com",
    "slug": "blue-carbon-200w-300w-400w-500w-professional-ip66-waterproof-outdoor-garden-floodlight-solar-led-flood-light-solar-sport-light-blue-carbon-made-in-china-com",
    "name": "Blue Carbon 200W 300W 400W 500W Professional IP66 Waterproof Outdoor Garden Floodlight Solar LED Flood Light - Solar Sport Light, Blue Carbon | Made-in-China.com",
    "brand": "Blue Carbon",
    "category": "Solar Flood Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon 200W 300W 400W 500W Professional IP66 Waterproof Outdoor Garden Floodlight Solar LED Flood Light - Solar Sport Light, Blue Carbon | Made-in-China.com",
    "description": "Blue Carbon 200W 300W 400W 500W Professional IP66 Waterproof Outdoor Garden Floodlight Solar LED Flood Light - Solar Sport Light, Blue Carbon | Made-in-China.com. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon 200W 300W 400W 500W Professional IP66 Waterproof Outdoor Garden Floodlight Solar LED Flood Light - Solar Sport Light, Blue Carbon | Made-in-China.com"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "shop-bct-king-2-0b-solar-street-light",
    "slug": "shop-bct-king-2-0b-solar-street-light",
    "name": "Shop BCT-King 2.0B solar street Light",
    "brand": "Unknown",
    "category": "Solar Street Lights",
    "price": 750000,
    "stock": {
      "status": "in_stock"
    },
    "sku": "BCT-King",
    "summary": "Shop BCT-King 2.0B solar street Light",
    "description": "Shop BCT-King 2.0B solar street Light. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Model",
        "BCT-King"
      ],
      [
        "Source title",
        "Shop BCT-King 2.0B solar street Light"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "customized-blue-carbon-street-light-solar-street-light-manufacturers-from-china-blue-carbon-bluecarbontech-com",
    "slug": "customized-blue-carbon-street-light-solar-street-light-manufacturers-from-china-blue-carbon-bluecarbontech-com",
    "name": "Customized Blue Carbon - Street Light Solar Street Light Manufacturers From China | Blue Carbon - bluecarbontech.com",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Customized Blue Carbon - Street Light Solar Street Light Manufacturers From China | Blue Carbon - bluecarbontech.com",
    "description": "Customized Blue Carbon - Street Light Solar Street Light Manufacturers From China | Blue Carbon - bluecarbontech.com. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Customized Blue Carbon - Street Light Solar Street Light Manufacturers From China | Blue Carbon - bluecarbontech.com"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-factory-solar-street-light-50w-power-led-street-light-outdoor-price-for-sale-led-solar-made-in-china-com",
    "slug": "blue-carbon-factory-solar-street-light-50w-power-led-street-light-outdoor-price-for-sale-led-solar-made-in-china-com",
    "name": "Blue Carbon Factory Solar Street Light 50W Power LED Street Light Outdoor Price for Sale - LED, Solar | Made-in-China.com",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon Factory Solar Street Light 50W Power LED Street Light Outdoor Price for Sale - LED, Solar | Made-in-China.com",
    "description": "Blue Carbon Factory Solar Street Light 50W Power LED Street Light Outdoor Price for Sale - LED, Solar | Made-in-China.com. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon Factory Solar Street Light 50W Power LED Street Light Outdoor Price for Sale - LED, Solar | Made-in-China.com"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "blue-carbon-all-in-one-solar-power-street-light-140w-blue-carbon-nigeria",
    "slug": "blue-carbon-all-in-one-solar-power-street-light-140w-blue-carbon-nigeria",
    "name": "Blue Carbon All-In-One Solar Power Street Light 140W | Blue Carbon Nigeria",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Blue Carbon All-In-One Solar Power Street Light 140W | Blue Carbon Nigeria",
    "description": "Blue Carbon All-In-One Solar Power Street Light 140W | Blue Carbon Nigeria. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Blue Carbon All-In-One Solar Power Street Light 140W | Blue Carbon Nigeria"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "china-blue-carbon-factory-direct-outdoor-all-in-one-solar-street-light-led-lamp-smart-remote-control-manufacturers-suppliers-factory",
    "slug": "china-blue-carbon-factory-direct-outdoor-all-in-one-solar-street-light-led-lamp-smart-remote-control-manufacturers-suppliers-factory",
    "name": "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory",
    "description": "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "china-blue-carbon-factory-direct-outdoor-all-in-one-solar-street-light-led-lamp-smart-remote-control-manufacturers-suppliers-factory",
    "slug": "china-blue-carbon-factory-direct-outdoor-all-in-one-solar-street-light-led-lamp-smart-remote-control-manufacturers-suppliers-factory",
    "name": "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory",
    "description": "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "China Blue Carbon Factory Direct Outdoor All in One Solar Street Light LED Lamp Smart Remote Control Manufacturers Suppliers Factory"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "why-blue-carbon-100w-integrated-solar-street-light-is-best-for-highway-projects",
    "slug": "why-blue-carbon-100w-integrated-solar-street-light-is-best-for-highway-projects",
    "name": "Why Blue Carbon 100W Integrated Solar Street Light Is Best for Highway Projects",
    "brand": "Blue Carbon",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Why Blue Carbon 100W Integrated Solar Street Light Is Best for Highway Projects",
    "description": "Why Blue Carbon 100W Integrated Solar Street Light Is Best for Highway Projects. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Why Blue Carbon 100W Integrated Solar Street Light Is Best for Highway Projects"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "50-watt-led-street-light-at-3000-piece-led-street-light-in-hapur-id-14111746848",
    "slug": "50-watt-led-street-light-at-3000-piece-led-street-light-in-hapur-id-14111746848",
    "name": "50 Watt LED Street Light at ₹ 3000/piece | LED Street Light in Hapur | ID: 14111746848",
    "brand": "Unknown",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "50 Watt LED Street Light at ₹ 3000/piece | LED Street Light in Hapur | ID: 14111746848",
    "description": "50 Watt LED Street Light at ₹ 3000/piece | LED Street Light in Hapur | ID: 14111746848. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "50 Watt LED Street Light at ₹ 3000/piece | LED Street Light in Hapur | ID: 14111746848"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "new-design-led-street-light-led-street-lamp-street-light-made-in-china-com",
    "slug": "new-design-led-street-light-led-street-lamp-street-light-made-in-china-com",
    "name": "New Design LED Street Light - LED Street Lamp, Street Light | Made-in-China.com",
    "brand": "Unknown",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "New Design LED Street Light - LED Street Lamp, Street Light | Made-in-China.com",
    "description": "New Design LED Street Light - LED Street Lamp, Street Light | Made-in-China.com. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "New Design LED Street Light - LED Street Lamp, Street Light | Made-in-China.com"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "alltop-2000w-solar-led-street-light-6v-20w-polycrystalline-panel-lifepo4-15ah-battery-160-lm-w-5-7m-mount-with-1-year-warranty-nabellas-stores",
    "slug": "alltop-2000w-solar-led-street-light-6v-20w-polycrystalline-panel-lifepo4-15ah-battery-160-lm-w-5-7m-mount-with-1-year-warranty-nabellas-stores",
    "name": "Alltop 2000W Solar LED Street Light - 6V 20W Polycrystalline Panel, LiFePO4 15AH Battery, 160 lm/W, 5-7m Mount With 1 Year Warranty - Nabellas Stores",
    "brand": "Alltop",
    "category": "Solar Street Lights",
    "price": 255000,
    "oldPrice": 489000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Alltop 2000W Solar LED Street Light - 6V 20W Polycrystalline Panel, LiFePO4 15AH Battery, 160 lm/W, 5-7m Mount With 1 Year Warranty - Nabellas Stores",
    "description": "Alltop 2000W Solar LED Street Light - 6V 20W Polycrystalline Panel, LiFePO4 15AH Battery, 160 lm/W, 5-7m Mount With 1 Year Warranty - Nabellas Stores. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Alltop 2000W Solar LED Street Light - 6V 20W Polycrystalline Panel, LiFePO4 15AH Battery, 160 lm/W, 5-7m Mount With 1 Year Warranty - Nabellas Stores"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "alltop-3000w-solar-led-street-light-all-in-one-outdoor-solar-lamp-with-automatic-dusk-to-dawn-sensor-fairprice-mall",
    "slug": "alltop-3000w-solar-led-street-light-all-in-one-outdoor-solar-lamp-with-automatic-dusk-to-dawn-sensor-fairprice-mall",
    "name": "Alltop 3000W Solar LED Street Light All-in-One Outdoor Solar Lamp with Automatic Dusk-to-Dawn Sensor - Fairprice Mall",
    "brand": "Alltop",
    "category": "Solar Street Lights",
    "price": 355000,
    "oldPrice": 490000,
    "stock": {
      "status": "in_stock"
    },
    "summary": "Alltop 3000W Solar LED Street Light All-in-One Outdoor Solar Lamp with Automatic Dusk-to-Dawn Sensor - Fairprice Mall",
    "description": "Alltop 3000W Solar LED Street Light All-in-One Outdoor Solar Lamp with Automatic Dusk-to-Dawn Sensor - Fairprice Mall. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Alltop 3000W Solar LED Street Light All-in-One Outdoor Solar Lamp with Automatic Dusk-to-Dawn Sensor - Fairprice Mall"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "alltop-200w-solar-led-street-light-outdoor-solar-lamp-15w-polycrystalline-panel-lifepo4-battery-fairprice-mall",
    "slug": "alltop-200w-solar-led-street-light-outdoor-solar-lamp-15w-polycrystalline-panel-lifepo4-battery-fairprice-mall",
    "name": "Alltop 200W Solar LED Street Light – Outdoor Solar Lamp 15W Polycrystalline Panel, LiFePO4 Battery - Fairprice Mall",
    "brand": "Alltop",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Alltop 200W Solar LED Street Light – Outdoor Solar Lamp 15W Polycrystalline Panel, LiFePO4 Battery - Fairprice Mall",
    "description": "Alltop 200W Solar LED Street Light – Outdoor Solar Lamp 15W Polycrystalline Panel, LiFePO4 Battery - Fairprice Mall. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Alltop 200W Solar LED Street Light – Outdoor Solar Lamp 15W Polycrystalline Panel, LiFePO4 Battery - Fairprice Mall"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Solar energy storage",
      "Backup power",
      "Hybrid solar systems"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "alltop-1000w-solar-led-street-light-outdoor-solar-lamp-with-6v-15w-polycrystalline-panel-fairprice-mall",
    "slug": "alltop-1000w-solar-led-street-light-outdoor-solar-lamp-with-6v-15w-polycrystalline-panel-fairprice-mall",
    "name": "Alltop 1000W Solar LED Street Light – Outdoor Solar Lamp with 6V 15W Polycrystalline Panel - Fairprice Mall",
    "brand": "Alltop",
    "category": "Solar Street Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "Alltop 1000W Solar LED Street Light – Outdoor Solar Lamp with 6V 15W Polycrystalline Panel - Fairprice Mall",
    "description": "Alltop 1000W Solar LED Street Light – Outdoor Solar Lamp with 6V 15W Polycrystalline Panel - Fairprice Mall. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "Alltop 1000W Solar LED Street Light – Outdoor Solar Lamp with 6V 15W Polycrystalline Panel - Fairprice Mall"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  },
  {
    "id": "alltop-300w-solar-led-flood-light-with-solar-panel-and-remote-control-dusk-to-dawn-outdoor-security-light-fairprice-mall",
    "slug": "alltop-300w-solar-led-flood-light-with-solar-panel-and-remote-control-dusk-to-dawn-outdoor-security-light-fairprice-mall",
    "name": "ALLTOP 300W Solar LED Flood Light with Solar Panel & Remote Control – Dusk-to-Dawn Outdoor Security Light - Fairprice Mall",
    "brand": "Alltop",
    "category": "Solar Flood Lights",
    "price": 0,
    "stock": {
      "status": "pre_order"
    },
    "summary": "ALLTOP 300W Solar LED Flood Light with Solar Panel & Remote Control – Dusk-to-Dawn Outdoor Security Light - Fairprice Mall",
    "description": "ALLTOP 300W Solar LED Flood Light with Solar Panel & Remote Control – Dusk-to-Dawn Outdoor Security Light - Fairprice Mall. Product information has been structured from the supplied source listing and available source-page evidence. Specifications that were not verifiable have not been fabricated.",
    "features": [],
    "specs": [
      [
        "Source title",
        "ALLTOP 300W Solar LED Flood Light with Solar Panel & Remote Control – Dusk-to-Dawn Outdoor Security Light - Fairprice Mall"
      ]
    ],
    "images": [],
    "support": "Kweli.shop listing states free delivery and lifetime after-sales support where applicable.",
    "installation": [],
    "applications": [
      "Outdoor lighting",
      "Roads and streets",
      "Compounds",
      "Commercial outdoor areas"
    ],
    "paymentOptions": [],
    "featured": false
  }
]
