import { BatteryCharging, Building2, Cable, CircleGauge, Factory, Home, ShieldCheck, SunMedium, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Faq = { question: string; answer: string };

export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  suitedFor: string[];
  steps: string[];
  components: string[];
  faqs: Faq[];
};

export const services: ServiceItem[] = [
  {
    slug: "solar-products",
    name: "Solar Products",
    short: "Tier-1 Mono PERC & TOPCon panels, grid-tied and hybrid inverters, lithium batteries, and hot-dip GI mounting structures.",
    intro: "Make every watt count with thoughtfully selected, Tier-1 solar products engineered for Indian climactic conditions. EKOSYS delivers high-efficiency components tested for high temperatures, monsoon humidity, and long-term durability.",
    image: "/images/products/solar-inverter-system.jpg",
    icon: SunMedium,
    benefits: [
      "Tier-1 Mono PERC, N-Type TOPCon, and Bifacial solar modules with 30-Year Performance Warranties*",
      "High-efficiency string and hybrid inverters with built-in Wi-Fi monitoring and MPPT trackers",
      "Corrosion-resistant Hot-Dip Galvanized Iron (GI) and Anodized Aluminum mounting structures designed for 150 km/h wind loads",
      "Class-II Surge Protection Devices (SPD), dedicated chemical earthing, and UV-stabilized DC/AC cabling",
    ],
    suitedFor: [
      "Homeowners building a new rooftop solar array",
      "Businesses seeking replacement inverters or module upgrades",
      "Commercial EPCs and industrial procurement teams requiring dependable solar BOS",
    ],
    steps: [
      "Site requirement & load profile analysis",
      "Component matching & technical design",
      "Transparent bill of materials (BOM) proposal",
      "On-time delivery, testing, and warranty registration",
    ],
    components: [
      "Solar PV Modules (Mono PERC / TOPCon / Bifacial)",
      "Solar Inverters (On-Grid / Hybrid / Microinverters)",
      "Solar Storage Batteries (Lithium-ion / Tubular Lead-Acid)",
      "Engineered Mounting Structures (Elevated & Flush-mount GI)",
      "ACDB/DCDB Junction Boxes with SPDs and MCBs",
      "Solar DC Cables & Copper-Bonded Chemical Earthing",
    ],
    faqs: [
      {
        question: "Which solar products are required for a standard rooftop system?",
        answer: "A standard grid-tied rooftop system comprises high-efficiency PV panels, an On-Grid string inverter, hot-dip galvanized mounting structures, DC and AC distribution boxes (DCDB/ACDB) with built-in surge protection (SPD), double-insulated solar DC cables, a bi-directional net meter, and dedicated chemical earthing pits with a lightning arrestor.",
      },
      {
        question: "What is the difference between Mono PERC and TOPCon panels?",
        answer: "Mono PERC modules offer high efficiency (approx 20-21.5%) and strong real-world performance. N-Type TOPCon modules represent the latest generation with higher efficiency (22-23%+), lower degradation over time (0.4% annually vs 0.55%), and a superior temperature coefficient (-0.30%/°C), meaning they generate more power during scorching Bihar summers.",
      },
      {
        question: "Can EKOSYS supply components for upgrades or replacements?",
        answer: "Yes. We inspect your existing solar setup, assess inverter compatibility, check string voltages, and recommend tested replacement modules, inverters, or battery storage systems tailored to your site.",
      },
    ],
  },
  {
    slug: "rooftop-solar",
    name: "Rooftop Solar",
    short: "Turn unused roof space into a reliable, high-yield clean electricity generating power plant.",
    intro: "Transform your idle rooftop into a clean energy power plant that slashes grid electricity bills by up to 80-90%. EKOSYS designs custom on-grid, hybrid, and elevated rooftop systems customized to your shadow conditions and energy needs.",
    image: "/images/home/modern-solar-rooftop.jpg",
    icon: Home,
    benefits: [
      "Custom shadow analysis and 3D structural layout optimization for maximum seasonal generation",
      "Bi-directional net metering connectivity with DISCOMs (NBPDCL & SBPDCL in Bihar)",
      "Elevated structure options that keep 100% of your roof usable for family recreation or storage",
      "Real-time mobile app energy monitoring showing daily generation, savings, and grid exports",
    ],
    suitedFor: [
      "Independent houses, bungalows, and multi-storey residential villas",
      "Commercial shops, showrooms, clinics, and offices",
      "Educational institutions, schools, hospitals, and community buildings",
    ],
    steps: [
      "Detailed 3D shadow and rooftop survey",
      "Precision system sizing & generation modeling",
      "DISCOM feasibility approval & subsidy application",
      "Professional structural erection & electrical wiring",
      "Net-meter testing, commissioning & handover",
    ],
    components: [
      "Tier-1 Solar Photovoltaic Modules",
      "Grid-Tie Smart Inverter with Remote Telemetry",
      "Pre-galvanized / Hot-Dip GI Elevated Mounting Structure",
      "Bi-directional Net Meter approved by DISCOM",
      "AC/DC Safety Isolators & Surge Arrestors",
    ],
    faqs: [
      {
        question: "Will every roof support a rooftop solar installation?",
        answer: "Most reinforced concrete (RCC) flat roofs, tin sheds, and curved industrial roofs can support solar. During our on-site survey, our engineers verify roof load-bearing capacity, orientation, water drainage, and shade cast by adjacent structures or trees to design the ideal mounting setup.",
      },
      {
        question: "How does bi-directional net metering work in Bihar?",
        answer: "With net metering approved by NBPDCL or SBPDCL, solar energy produced during sunny daytime hours powers your home first. Any surplus energy flows into the power grid, spinning your net meter backwards and earning billing credits. At night or during cloudy days, you draw power from the grid as normal.",
      },
      {
        question: "Can I walk on or use my roof after installing solar panels?",
        answer: "Yes! EKOSYS specializes in elevated super-structure solar mounting. Panels are installed at a comfortable height (7 to 9 feet clearance), allowing you to walk beneath, hang clothes, sit, or host gatherings while generating clean electricity overhead.",
      },
    ],
  },
  {
    slug: "residential-solar",
    name: "Residential Solar",
    short: "Stress-free home solar installations with PM Surya Ghar subsidy coordination and lifelong savings.",
    intro: "Solar should be empowering, dependable, and simple. EKOSYS handles the entire home solar journey—from analyzing your monthly electricity bills and rooftop shadow modeling to subsidy documentation, DISCOM net-meter installation, and lifetime support.",
    image: "/images/home/residential-solar.png",
    icon: BatteryCharging,
    benefits: [
      "Seamless subsidy application on the National Rooftop Solar Portal with guaranteed document verification",
      "Custom system sizing based on connected electrical load and seasonal consumption trends",
      "Tier-1 ALMM-listed solar panels guaranteed to perform for 30+ years with linear degradation warranty",
      "Dedicated after-sales support with preventive maintenance visits and generation monitoring",
    ],
    suitedFor: [
      "Homeowners seeking zero daytime electricity bills",
      "Families operating multiple inverter ACs during peak summer months",
      "Homes experiencing recurring grid tariff hikes and voltage instability",
    ],
    steps: [
      "Bill analysis & shadow survey",
      "DISCOM feasibility application & approval",
      "Turnkey structural erection & wiring",
      "Bi-directional net-meter installation",
      "Subsidy disbursal facilitation & handover",
    ],
    components: [
      "Bifacial / N-Type TOPCon High-Efficiency Modules",
      "Smart Single-Phase or Three-Phase On-Grid Inverter",
      "Galvanized Steel Mounting Superstructure",
      "Class-II Surge Protection DCDB & ACDB",
      "Chemical Copper Earthing & Lightning Arrestor",
    ],
    faqs: [
      {
        question: "How much can I save monthly with a 3 kW residential system?",
        answer: "A 3 kW system in Bihar generates approximately 360 to 420 units of electricity per month, translating to direct monthly bill savings of ₹2,500 to ₹3,200 (₹30,000+ per year). Over 30 years, it saves well over ₹9,00,000 in grid electricity expenses.",
      },
      {
        question: "How does EKOSYS help with the PM Surya Ghar subsidy?",
        answer: "EKOSYS handles the entire end-to-end subsidy process: registering your application on the National Portal for Rooftop Solar, liaising with NBPDCL/SBPDCL for technical feasibility, installing certified ALMM DCR modules, submitting joint commissioning reports, and verifying that the Central DBT subsidy of ₹78,000 and applicable State incentive are directly disbursed to your bank account.",
      },
      {
        question: "Do solar panels generate electricity on cloudy or rainy days?",
        answer: "Yes. Modern high-efficiency TOPCon and Mono PERC panels absorb diffuse sunlight on overcast days, typically generating 25% to 40% of their peak sunny-day output. Bi-directional net metering ensures that any deficit is automatically supplied by the grid seamlessly.",
      },
    ],
  },
  {
    slug: "industrial-solar",
    name: "Industrial Solar",
    short: "High-capacity commercial & industrial solar arrays to cut operating overheads and peak demand tariffs.",
    intro: "For factories, manufacturing plants, cold storage units, warehouses, and commercial establishments, electricity is one of the highest operating expenses. EKOSYS delivers engineered high-capacity solar solutions with rapid return on investment (ROI in 3-4 years) and accelerated depreciation tax advantages.",
    image: "/images/services/commercial-solar.jpg",
    icon: Factory,
    benefits: [
      "Dramatic reduction in peak demand electricity charges and daytime grid tariffs",
      "Accelerated Depreciation (AD) tax benefits under Section 32 of the Income Tax Act for commercial buyers",
      "Heavy-duty industrial roof clamps and non-penetrative mounting for metal shed integrity",
      "Advanced SCADA and IoT monitoring for string-level output diagnostics and automated alert management",
    ],
    suitedFor: [
      "Manufacturing factories, food processing mills, and packaging plants",
      "Cold storage facilities, agro-processing warehouses, and logistics hubs",
      "Hospitals, educational universities, malls, hotels, and commercial buildings",
    ],
    steps: [
      "Load duration curve & sanctioned demand assessment",
      "Structural load testing on industrial trusses / metal roofs",
      "HT/LT electrical integration and DISCOM statutory clearance",
      "Staged installation planned around manufacturing shifts",
      "Testing, commissioning, and scheduled preventive maintenance",
    ],
    components: [
      "High-Wattage 550Wp+ Bi-facial / Mono PERC Modules",
      "Commercial Three-Phase Inverters with Multiple MPPTs",
      "Custom Aluminum Rail Mounting with EPDM Weather Seals",
      "HT/LT Switchgear, VCB Panels & Zero-Export Controllers (if required)",
      "Online SCADA & Cloud Environmental Monitoring Station",
    ],
    faqs: [
      {
        question: "How does solar reduce industrial operating costs?",
        answer: "Industrial electricity tariffs in Bihar range from ₹7.50 to ₹9.50+ per unit. A captive solar plant generates electricity at a levelized cost of energy (LCOE) of around ₹2.20 to ₹2.60 per unit over 30+ years, insulating your factory from future tariff hikes and reducing monthly power bills by hundreds of thousands of rupees.",
      },
      {
        question: "Can solar be installed on metal sheet or PEB roofs without causing leaks?",
        answer: "Yes. We use specialized non-penetrating standing seam clamps or rivet-fastened mini-rails with automotive-grade EPDM rubber seals that preserve the manufacturer's roof warranty and guarantee 100% waterproof performance.",
      },
      {
        question: "Can an industrial solar system work alongside diesel generator (DG) sets?",
        answer: "Yes. We install advanced Solar-DG synchronizing controllers. When grid power fails and the generator starts, the controller throttles solar output just enough to prevent reverse current into the alternator while reducing diesel fuel consumption by up to 60-70%.",
      },
    ],
  },
  {
    slug: "solar-maintenance",
    name: "Solar Maintenance",
    short: "Proactive O&M, thermographic scanning, panel washing, and electrical health checkups for peak solar yield.",
    intro: "A solar system is a 30-year financial asset that requires proactive care to prevent generation loss. Soiling, loose MC4 connectors, hotspot shading, or PID degradation can reduce output by 15% to 30%. EKOSYS provides systematic Operation & Maintenance (O&M) services across Bihar to protect your energy yield.",
    image: "/images/services/solar-cleaning.jpg",
    icon: Wrench,
    benefits: [
      "Specialized de-mineralized and soft-water module cleaning to eliminate stubborn dust, pollen, and bird droppings",
      "Infrared thermographic inspections to identify micro-cracks, bypass diode failures, and cell hotspots",
      "Comprehensive string voltage, open-circuit current (Voc/Isc), and insulation resistance testing",
      "Inverter firmware updates, fan cleaning, heat-sink de-dusting, and chemical earthing pit resistance checks",
    ],
    suitedFor: [
      "Residential rooftop solar owners seeking seasonal checkups",
      "Commercial solar plant operators requiring Annual Maintenance Contracts (AMC)",
      "Industrial facility managers managing multi-hundred kilowatt rooftop arrays",
    ],
    steps: [
      "Site diagnostic visit & baseline generation analysis",
      "Safety shutdown and physical/thermal inspection",
      "Module cleaning and electrical tightening",
      "Inverter diagnostics and earthing resistance audit",
      "Detailed health report with actionable optimization advice",
    ],
    components: [
      "De-mineralized / TDS-controlled Module Washing Kits",
      "Thermal Imaging Infrared Cameras",
      "Digital Insulation Resistance & Earth Testers",
      "DC Clamp Meters & Solar Irradiance Meters",
      "Genuine Replacement Fuses, SPDs, and Connectors",
    ],
    faqs: [
      {
        question: "How frequently should solar panels be cleaned in Bihar?",
        answer: "Due to agricultural dust, road traffic, and seasonal pollen in Bihar, we recommend cleaning solar panels every 15 to 20 days during dry months. Regular washing restores 10% to 25% of generation lost to soiling.",
      },
      {
        question: "Can I use household detergents or hard borewell water to wash solar panels?",
        answer: "Never use hard borewell water or harsh detergent powders. Hard water leaves permanent calcium/silica mineral scale on the anti-reflective glass coating, while abrasive detergents can scratch surfaces. Use soft, low-TDS water with soft microfiber brushes early in the morning when panels are cool.",
      },
      {
        question: "What does an Annual Maintenance Contract (AMC) with EKOSYS include?",
        answer: "An EKOSYS AMC covers scheduled periodic cleanings, quarterly electrical safety and earthing audits, thermographic hotspot scans, inverter health checks, emergency breakdown callouts, and performance yield reporting.",
      },
    ],
  },
  {
    slug: "installation-services",
    name: "Installation Services",
    short: "Precision engineering, safety-certified installation, DISCOM approvals, and guaranteed handover standards.",
    intro: "World-class solar hardware is only as good as the installation team that puts it together. EKOSYS provides safety-first, standard-compliant solar engineering following MNRE and CEA guidelines—guaranteeing clean workmanship, zero leakage, robust wind resistance, and smooth net-metering synchronization.",
    image: "/images/installation/solar-engineers.jpg",
    icon: ShieldCheck,
    benefits: [
      "Trained solar engineers adhering to MNRE, IS 875 (wind load), and Indian Electricity Rules",
      "Dedicated chemical earth pits with tested resistance below 5 Ohms and Class-I Lightning Protection",
      "Concealed, UV-resistant PVC/GI conduit cable routing with zero exposed loose wiring",
      "Complete facilitation of DISCOM net meter inspections, approvals, and subsidy disbursal",
    ],
    suitedFor: [
      "Residential homeowners who want a clean, turnkey installation",
      "Commercial establishments demanding zero downtime and certified safety",
      "Industrial complexes requiring strict adherence to occupational safety standards",
    ],
    steps: [
      "Step 1: Comprehensive Site Assessment & Shadow Survey",
      "Step 2: Structural Engineering & Electrical Design",
      "Step 3: DISCOM Feasibility & Sanction Documentation",
      "Step 4: Certified Structural Civil Foundation / Erection",
      "Step 5: Tier-1 PV Module Clamping with Torque Checks",
      "Step 6: Inverter Mounting, ACDB/DCDB & Conduit Cabling",
      "Step 7: Dedicated Earthing & Lightning Protection Setup",
      "Step 8: Pre-commissioning Voltage & Polarity Testing",
      "Step 9: DISCOM Inspection & Bi-directional Net Meter Installation",
      "Step 10: System Handover, App Setup & Customer Orientation",
    ],
    components: [
      "Hot-Dip Galvanized Iron (GI) 80-120 Micron Structures",
      "UV-Resistant Dual-Insulated XLPO Copper DC Cables",
      "Dual Chemical Earthing Pits with BFC Compound",
      "Early Streamer Emission (ESE) Lightning Protection",
      "IP65 Weatherproof Distribution Enclosures",
    ],
    faqs: [
      {
        question: "How long does a rooftop solar installation take?",
        answer: "Physical on-site installation for a standard 3 kW to 10 kW residential system takes 2 to 4 days. The complete timeline, including DISCOM feasibility approval, statutory inspection, and bi-directional net meter installation by NBPDCL/SBPDCL, typically spans 2 to 4 weeks.",
      },
      {
        question: "Will drilling on the roof cause water seepage during monsoon?",
        answer: "No. For flat concrete roofs, we use chemical anchor fasteners with multi-layer bituminous epoxy waterproofing, or pre-cast concrete ballast blocks that do not penetrate the roof membrane at all. Every mounting point is thoroughly sealed and water-tested.",
      },
      {
        question: "What documentation does EKOSYS provide upon project handover?",
        answer: "Upon commissioning, you receive a complete Handover Kit containing equipment warranty certificates (30-Year Warranty* on modules, 5-8 year inverter warranty), single-line electrical diagrams (SLD), test reports, net meter paperwork, and mobile monitoring app login credentials.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "Why should I choose EKOSYS for solar installation in Bihar?",
    answer: "EKOSYS is headquartered locally in Hajipur, Bihar. We combine engineering excellence, Tier-1 MNRE-approved solar components, transparent pricing, dedicated DISCOM net-metering coordination, and fast local after-sales service across Vaishali, Patna, and North Bihar.",
  },
  {
    question: "How much can I save on my electricity bills with rooftop solar?",
    answer: "A properly sized rooftop solar system generally offsets 80% to 90% of your monthly grid electricity consumption. Most residential systems achieve complete financial payback in 3 to 4 years, after which you enjoy free, clean electricity for the remainder of the 30+ year lifespan.",
  },
  {
    question: "What is the process to claim the PM Surya Ghar solar subsidy in Bihar?",
    answer: "EKOSYS handles the entire subsidy application workflow on the National Portal for Rooftop Solar. Homeowners receive official Government Subsidy: PM Surya Ghar Central DBT (₹78,000) + Extra State Subsidy (₹20,000) = ₹98,000 directly via DBT into their bank account, plus an extra Limited Offer (not from Subsidy) of ₹15,000 EKOSYS Assistance on a first come, first get basis (Total Financial Benefit ₹1,13,000).",
  },
  {
    question: "What is the difference between On-Grid and Hybrid solar systems?",
    answer: "An On-Grid system is connected directly to the electrical grid with bi-directional net metering; it exports excess power during the day and has the lowest cost and fastest ROI, but shuts down during grid outages for safety. A Hybrid system includes battery storage, providing continuous power backup during power cuts while still supporting net-metering bill savings.",
  },
  {
    question: "Where is the EKOSYS office located, and which areas do you serve?",
    answer: "Our office is Opposite to Municipal Office, Hajipur - 844101, Vaishali, Bihar, India. We actively serve Hajipur, Vaishali, Patna, Muzaffarpur, Samastipur, Saran, Chhapra, and project sites throughout Bihar.",
  },
  {
    question: "How much shadow-free rooftop space is required for a 3 kW or 5 kW solar plant?",
    answer: "With our Tier-1 high-efficiency 580Wp N-Type TOPCon panels, a 3 kW system requires approximately 240 to 300 sq. ft. of shadow-free rooftop area. A 5 kW system requires around 400 to 500 sq. ft. Even on compact roofs, we design elevated canopy structures to maximize space.",
  },
  {
    question: "How long does NBPDCL / SBPDCL net-meter installation take in Bihar?",
    answer: "Under PM Surya Ghar regulations, the statutory process takes approximately 15 to 30 working days from the date of online application submission. EKOSYS manages your load sanction feasibility, discom testing fees, and joint inspection scheduling directly with local sub-divisional offices.",
  },
  {
    question: "Can rooftop solar run heavy appliances like 1.5-Ton ACs and submersible pumps?",
    answer: "Yes, absolutely. A 3 kW system comfortably powers one to two 1.5-Ton 5-Star inverter ACs, a 1 HP water pump, double-door refrigerator, smart TVs, and all household lighting simultaneously during peak daylight hours.",
  },
  {
    question: "Does solar power generate electricity during monsoon rain and winter fog in Bihar?",
    answer: "Yes. Modern N-Type bifacial TOPCon panels operate on diffuse daylight and UV radiation, generating roughly 25% to 40% of their peak rated output even during heavily overcast monsoon days and winter morning fog across Bihar.",
  },
  {
    question: "Can I get a low-interest bank loan or easy monthly EMI for rooftop solar in Bihar?",
    answer: "Yes. Under PM Surya Ghar, leading nationalized banks (including SBI, Canara Bank, PNB, and Bank of Baroda) provide collateral-free rooftop solar loans at concessional interest rates around 7% per annum. Monthly EMI payments are typically lower than your existing monthly electricity savings.",
  },
  {
    question: "Will installing mounting structures cause roof leakage on concrete slabs?",
    answer: "No. EKOSYS utilizes heavy-duty non-penetrating chemical anchor fasteners combined with multi-layer industrial bitumen weatherproofing membranes. We guarantee 100% zero roof leakage on all installations.",
  },
  {
    question: "Which solar panel brands and smart inverters does EKOSYS install?",
    answer: "We supply and install only Tier-1 ALMM and DCR-compliant brands including Tata Power Solar, Waaree Energies, Adani Solar, and Goldi Solar, paired with high-efficiency IP65 smart dual-MPPT inverters from Growatt, Sungrow, and Solis.",
  },
  {
    question: "What warranties do EKOSYS solar installations come with?",
    answer: "All solar PV modules come with a 25 to 30-year linear power generation warranty (guaranteeing over 80% generation in year 30). Smart inverters include a 5 to 10-year replacement warranty, mounting structures carry a 10-year anti-corrosion guarantee, and EKOSYS provides 5 years of comprehensive workmanship and O&M care.",
  },
  {
    question: "Can I install an elevated solar structure to keep my rooftop terrace usable?",
    answer: "Yes. We specialize in custom elevated hot-dip galvanized canopy structures (7 to 9 feet clearance). This allows you to retain 100% of your rooftop terrace space for evening walks, family gatherings, or drying clothes while enjoying free clean electricity.",
  },
  {
    question: "How frequently should solar panels be cleaned in Bihar for maximum generation?",
    answer: "Due to agricultural dust and road airborne particulate in Bihar, we recommend a simple soft-water wash every 15 to 20 days during dry months. Regular cleaning restores 10% to 25% of power generation lost to soiling.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  author: string;
  keyPoints: string[];
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    subPoints?: string[];
  }[];
  faqs: Faq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "solar-panel-installation-bihar",
    title: "Solar Panel Installation in Bihar: Complete 2026 Practical Guide",
    metaDescription: "Comprehensive guide to solar panel installation in Bihar. Learn about solar costs, PM Surya Ghar subsidy, NBPDCL/SBPDCL net metering, and sizing.",
    excerpt: "Everything homeowners and business owners in Bihar need to know about rooftop solar installation, DISCOM net metering, costs, and subsidies.",
    category: "Installation & Guide",
    readingTime: "8 min read",
    image: "/images/blog/solar-bihar.png",
    imageAlt: "Rooftop solar installation in Bihar under clear skies",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Bihar receives an average of 4.8 to 5.2 kWh/m²/day of solar insolation with over 300 sunny days per year.",
      "Net metering through NBPDCL and SBPDCL allows surplus energy credits that offset high summer power bills.",
      "PM Surya Ghar Central DBT (₹78,000) + Extra State Subsidy (₹20,000) = ₹98,000 Govt Subsidy, plus EKOSYS Assistance ₹15,000 Limited Offer = ₹1,13,000 Total Benefit for residential installations.",
      "A 3 kW to 5 kW rooftop array typically pays for itself within 3.2 to 4 years in Bihar.",
    ],
    intro: "With rising electricity tariffs, expanding air conditioning loads, and abundant solar irradiation across Bihar, rooftop solar has transitioned from an alternative concept into the smartest financial investment for homeowners and commercial businesses alike. Whether you reside in Hajipur, Patna, Muzaffarpur, or Gaya, understanding the technical, financial, and regulatory steps of solar installation is key to getting maximum value from your roof.",
    sections: [
      {
        heading: "1. Solar Potential & Climate Considerations in Bihar",
        paragraphs: [
          "Bihar experiences exceptional solar radiation, averaging nearly 300 sunny days annually. This delivers approximately 4.8 to 5.2 kilowatt-hours of solar energy per square meter each day. However, Bihar's climate also features intense summer heat exceeding 42°C, heavy monsoon showers, and agricultural dust accumulation.",
          "To guarantee 30-year reliability under these specific conditions, solar systems must utilize high-grade components: N-Type TOPCon or Mono PERC modules with low temperature coefficients (-0.30%/°C to -0.34%/°C), hot-dip galvanized iron structures rated for 150 km/h wind gusts, and IP65-rated distribution boxes with dedicated lightning arrestors.",
        ],
        subPoints: [
          "Optimal panel tilt angle for Bihar: 25° to 27° facing true South",
          "Average annual generation: 1,350 to 1,500 units (kWh) per kW installed capacity",
          "Space requirement: ~80 to 100 sq. ft. of shadow-free rooftop per 1 kW system",
        ],
      },
      {
        heading: "2. The Grid-Connected Net Metering Process with NBPDCL & SBPDCL",
        paragraphs: [
          "In Bihar, grid-tied rooftop solar operates under the regulations of the Bihar Electricity Regulatory Commission (BERC). Whether your electricity supplier is North Bihar Power Distribution Company Ltd (NBPDCL) or South Bihar Power Distribution Company Ltd (SBPDCL), bi-directional net metering is the legal and financial foundation of your savings.",
          "During bright daytime hours, your solar array feeds electricity directly to your household loads. Any excess generation flows through the bi-directional net meter into the electricity grid. At the end of the monthly billing cycle, your DISCOM deducts exported solar units from imported grid units, charging you only for the net difference.",
        ],
      },
      {
        heading: "3. Subsidy Benefits Under PM Surya Ghar: Muft Bijli Yojana",
        paragraphs: [
          "The Central Government's flagship PM Surya Ghar: Muft Bijli Yojana combined with special State incentives and EKOSYS assistance has streamlined solar adoption by offering direct financial subsidies up to ₹1,13,000 to residential consumers across Bihar.",
          "Subsidies are credited directly to the applicant's Aadhaar-linked bank account via Direct Benefit Transfer (DBT) once the DISCOM inspects and commissions the system.",
        ],
        subPoints: [
          "1 kW Rooftop System: ₹30,000 Central DBT + State & EKOSYS Assistance (Up to ₹55,000 Total)",
          "2 kW Rooftop System: ₹60,000 Central DBT + State & EKOSYS Assistance (Up to ₹90,000 Total)",
          "3 kW and above: PM Surya Ghar Central DBT (₹78,000) + Extra State Subsidy (₹20,000) = ₹98,000 Govt Subsidy + EKOSYS Assistance (₹15,000 Limited Offer) = ₹1,13,000 Total Benefit",
        ],
      },
      {
        heading: "4. Sizing Your System & Financial Return on Investment (ROI)",
        paragraphs: [
          "Sizing a solar plant starts with reviewing your past 12 months of electricity bills. A home consuming ~350-400 units monthly typically requires a 3 kW solar array. In Bihar, where residential tariff slabs can reach ₹7.00+ per unit, a 3 kW system saves approximately ₹28,000 to ₹34,000 every year.",
          "Considering the net installation cost after subsidy, homeowners achieve full financial payback in about 3.2 to 3.5 years. For the remaining 26+ years of the 30-Year Warranty*, the power generated is essentially free.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I apply for solar panel installation in Bihar?",
        answer: "You can start by contacting EKOSYS for a preliminary rooftop evaluation. We assist with registering on the National Portal for Rooftop Solar, submitting the feasibility application to NBPDCL or SBPDCL, executing the physical installation, and coordinating meter testing.",
      },
      {
        question: "Can I run my AC on rooftop solar in Bihar?",
        answer: "Yes. An on-grid solar system powers all connected appliances in your home, including inverter air conditioners, water pumps, refrigerators, and washing machines. A 3 kW to 5 kW solar plant easily handles simultaneous AC operation during sunny daytime hours.",
      },
    ],
  },
  {
    slug: "solar-installation-hajipur",
    title: "Solar Installation in Hajipur & Vaishali: Local Costs, Approvals & Feasibility",
    metaDescription: "Looking for solar installation in Hajipur, Bihar? Learn about local rooftop solar feasibility, NBPDCL net metering, local installation costs, and EKOSYS services.",
    excerpt: "A dedicated guide for residents and businesses in Hajipur and Vaishali district planning rooftop solar installation with reliable local support.",
    category: "Local Solar",
    readingTime: "7 min read",
    image: "/images/installation/solar-installation-team.png",
    imageAlt: "EKOSYS solar technicians performing rooftop installation in Hajipur",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Hajipur's rapid commercial and residential growth makes rooftop solar an ideal hedge against rising electricity costs.",
      "Local NBPDCL electrical division processes net-metering applications for Vaishali district.",
      "Elevated structure designs allow homeowners to preserve precious rooftop terrace space.",
      "Local presence in Hajipur ensures prompt post-installation maintenance and emergency technical support.",
    ],
    intro: "As Hajipur continues to expand rapidly as a vital commercial and industrial hub adjoining Patna, electricity consumption across Vaishali district is reaching historic highs. From residential neighborhoods along Marai Road and Bagmali to industrial units in the Hajipur Industrial Area, solar energy is providing dependable power cost reduction. Here is a localized guide to rooftop solar in Hajipur.",
    sections: [
      {
        heading: "1. Why Hajipur Properties Are Ideal for Rooftop Solar",
        paragraphs: [
          "Hajipur features predominantly unshaded flat concrete (RCC) rooftops and expansive industrial metal sheds with clear southern exposure. The local weather provides strong solar insolation for over 10 months of the year, making it one of the most productive solar generation regions in North Bihar.",
          "Moreover, with commercial power tariffs and frequent peak summer demand spikes, on-site solar generation drastically reduces dependence on grid power and expensive diesel generator backups.",
        ],
      },
      {
        heading: "2. Working with NBPDCL in Hajipur (Vaishali Electrical Circle)",
        paragraphs: [
          "Solar systems installed in Hajipur connect to the North Bihar Power Distribution Company Ltd (NBPDCL) network under the Vaishali circle. The process begins with submitting a grid feasibility application accompanied by your Consumer ID (CA number) and latest paid electricity bill.",
          "EKOSYS coordinates the technical documentation, liaisoning with local assistant engineers (AEE/JEE), and completing mandatory earthing and anti-islanding safety tests prior to net meter energization.",
        ],
      },
      {
        heading: "3. Elevated Rooftop Structure Options for Hajipur Homes",
        paragraphs: [
          "In Hajipur, rooftop terraces are frequently used for family gatherings, seasonal grain drying, and leisure. Standard low-mounted solar structures can obstruct rooftop utility.",
          "EKOSYS specializes in elevated super-structures, installing solar arrays on heavy-gauge GI columns 7 to 9 feet above the roof surface. This creates a shaded, waterproof pavilion underneath while generating clean electricity overhead.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the EKOSYS office in Hajipur?",
        answer: "EKOSYS Corporation is located Opposite to Municipal Office, Hajipur - 844101, Vaishali, Bihar, India. You can visit our office or call +91 76 44 86 80 86 for on-site solar assessments.",
      },
      {
        question: "Does EKOSYS service rural areas in Vaishali district?",
        answer: "Yes, we provide turnkey solar installation and maintenance services across Hajipur, Lalganj, Mahua, Jandaha, Bidupur, Raghopur, and surrounding rural and semi-urban areas in Vaishali.",
      },
    ],
  },
  {
    slug: "rooftop-solar-guide-homeowners",
    title: "Complete Rooftop Solar Guide for Homeowners: Design, Sizing & Savings",
    metaDescription: "Comprehensive homeowner guide to rooftop solar. Learn how rooftop solar systems work, how to size your panels, avoid shading, and maximize savings.",
    excerpt: "Everything you need to know before installing solar on your home: system types, roof readiness, sizing calculations, and maintenance advice.",
    category: "Home Solar",
    readingTime: "7 min read",
    image: "/images/home/residential-solar.png",
    imageAlt: "Modern home with clean residential rooftop solar installation",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Understanding the core difference between On-Grid, Off-Grid, and Hybrid residential solar.",
      "How to calculate the exact kilowatt capacity needed based on your monthly kWh consumption.",
      "Importance of south-facing orientation and shadow analysis across all four seasons.",
      "How high-efficiency Mono PERC and TOPCon modules minimize roof area requirements.",
    ],
    intro: "Making the decision to transition your home to solar power is one of the most rewarding home improvement choices you will ever make. It adds substantial real estate value, eliminates predictable utility price inflation, and reduces your carbon footprint. However, understanding how the components work together and what questions to ask installers is crucial.",
    sections: [
      {
        heading: "1. How a Rooftop Solar System Works",
        paragraphs: [
          "Solar photovoltaic (PV) modules absorb photons from sunlight and generate direct current (DC) electricity through the photovoltaic effect. Because household appliances operate on alternating current (AC), the DC power flows through heavy-duty solar cables into a high-efficiency smart inverter.",
          "The inverter converts the DC electricity into stable 230V/415V AC electricity synchronized with your grid frequency. This power is routed directly into your home's main distribution panel, serving your appliances first. Any excess electricity is exported back to the utility grid through the net meter.",
        ],
      },
      {
        heading: "2. Assessing Your Rooftop Readiness",
        paragraphs: [
          "Before installation, three key factors must be evaluated: structural integrity, roof orientation, and shadow obstructions.",
          "In the Northern Hemisphere (including India), solar panels must face South (azimuth angle ~180°) at a tilt of 25°-27° to capture maximum sunlight throughout the year. Water tanks, stairwells, parapet walls, and neighboring buildings must be modeled to prevent partial shading, which can trigger bypass diodes and reduce array generation.",
        ],
      },
      {
        heading: "3. Choosing Between On-Grid and Hybrid Systems",
        paragraphs: [
          "If your locality experiences reliable grid supply with rare power cuts, an On-Grid system is the most cost-effective solution with the fastest financial return.",
          "If you experience frequent daytime or evening power outages, a Hybrid Solar System equipped with lithium-ion or solar tubular batteries is recommended. It ensures seamless battery backup for fans, lights, and computers during power cuts while continuing to offer net-metering credits.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do residential solar panels last?",
        answer: "Quality Tier-1 solar panels have a design life of 30+ years. Most manufacturers provide a 10 to 12-year product warranty and a 30-Year Performance Warranty*, guaranteeing at least 85% of rated output after 30 years of operation.",
      },
      {
        question: "Can solar panels damage my roof during installation?",
        answer: "When installed by certified professionals like EKOSYS, your roof remains completely undamaged. We use specialized chemical anchor fasteners with UV-resistant waterproofing sealants, or non-penetrating concrete ballast foundations.",
      },
    ],
  },
  {
    slug: "solar-subsidy-bihar",
    title: "Solar Subsidy in Bihar: PM Surya Ghar Muft Bijli Yojana & DISCOM Process",
    metaDescription: "Learn how to get up to ₹1,13,000 total solar subsidy in Bihar under PM Surya Ghar Central DBT (₹78,000) + State (₹20,000) + EKOSYS (₹15,000). Full eligibility, documentation, and steps.",
    excerpt: "A detailed breakdown of solar subsidy slabs in Bihar, portal registration steps, required documents, and Direct Benefit Transfer (DBT) timelines.",
    category: "Subsidy & Policy",
    readingTime: "6 min read",
    image: "/images/blog/solar-bihar.png",
    imageAlt: "Rooftop solar subsidy processing in Bihar",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "PM Surya Ghar Central DBT (₹78,000) + Extra Special State Subsidy (₹20,000) + EKOSYS Assistance (₹15,000) = ₹1,13,000 Total Benefit for residential solar.",
      "Subsidy is paid directly into the consumer's bank account via Direct Benefit Transfer (DBT).",
      "Only grid-connected residential rooftop systems using DCR-compliant (Made in India) modules are eligible.",
      "EKOSYS provides full assistance from National Portal registration to net-meter commissioning.",
    ],
    intro: "The Government of India's PM Surya Ghar: Muft Bijli Yojana combined with state and EKOSYS assistance has transformed the economics of residential solar energy across Bihar. By providing up to ₹1,13,000 in total financial assistance, the program makes clean energy accessible and affordable for independent homeowners.",
    sections: [
      {
        heading: "1. Current Subsidy Slabs for Residential Solar in Bihar",
        paragraphs: [
          "The subsidy structure under the PM Surya Ghar scheme is standardized across all states including Bihar, administered through the National Rooftop Solar Portal.",
          "For 3 kW and higher residential installations, homeowners receive PM Surya Ghar Central DBT (₹78,000) + Extra Special State Subsidy (₹20,000) + EKOSYS Assistance (₹15,000) = ₹1,13,000 Total Subsidy Benefit.",
        ],
        subPoints: [
          "1 kW Rooftop Solar System: ₹30,000 Central DBT + State/EKOSYS Assistance (Up to ₹55,000 Total)",
          "2 kW Rooftop Solar System: ₹60,000 Central DBT + State/EKOSYS Assistance (Up to ₹90,000 Total)",
          "3 kW and larger Systems: PM Surya Ghar Central DBT (₹78,000) + Extra Special State Subsidy (₹20,000) + EKOSYS Assistance (₹15,000) = ₹1,13,000 Total Benefit",
          "Group Housing Societies / Residential Welfare Associations (RWA): ₹18,000 per kW for common facilities (up to 500 kW)",
        ],
      },
      {
        heading: "2. Eligibility Conditions & DCR Module Compliance",
        paragraphs: [
          "To qualify for the central subsidy, the solar installation must satisfy three non-negotiable requirements:",
          "1. The applicant must be a residential consumer with an active domestic electricity connection under NBPDCL or SBPDCL.",
          "2. The solar PV modules used must be Domestic Content Requirement (DCR) compliant—meaning both the solar cells and modules are manufactured in India and listed on the MNRE Approved List of Models and Manufacturers (ALMM).",
          "3. The system must be grid-connected with an approved bi-directional net meter installed by the DISCOM.",
        ],
      },
      {
        heading: "3. Step-by-Step Subsidy Application Process",
        paragraphs: [
          "The application journey follows a systematic 5-stage verification process on the national portal:",
          "Stage 1: Register on the PM Surya Ghar portal using your mobile number, state (Bihar), DISCOM name (NBPDCL/SBPDCL), and Electricity Consumer Account Number.",
          "Stage 2: Submit online technical feasibility application. The DISCOM verifies local transformer capacity and issues technical sanction.",
          "Stage 3: System installation by an empanelled/registered solar vendor like EKOSYS using ALMM/DCR-certified components.",
          "Stage 4: Submit work completion report, module serial numbers, inverter test certificates, and request DISCOM net meter inspection.",
          "Stage 5: Following net-meter commissioning, upload bank account details (cancelled cheque). The subsidy is released via DBT within 30 to 45 days.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there any subsidy for commercial or industrial solar in Bihar?",
        answer: "Direct capital subsidies under PM Surya Ghar are reserved exclusively for residential domestic consumers. However, commercial and industrial enterprises benefit from 40% Accelerated Depreciation (AD) under Income Tax Section 32, GST input tax credits, and massive ongoing reductions in operating power tariffs.",
      },
      {
        question: "How long does it take to receive the subsidy in my bank account?",
        answer: "Once the DISCOM completes the physical inspection, installs the net meter, and generates the commissioning certificate on the portal, the Ministry of New and Renewable Energy (MNRE) dispatches the subsidy amount directly to your bank account within approximately 30 to 45 days.",
      },
    ],
  },
  {
    slug: "rooftop-solar-subsidy-guide",
    title: "Rooftop Solar Subsidy Step-by-Step Application Guide & Document Checklist",
    metaDescription: "Step-by-step document checklist and application guide for rooftop solar subsidy. Avoid delays in your PM Surya Ghar approval and DBT transfer.",
    excerpt: "A practical, error-free checklist of documents and procedural steps needed to claim your rooftop solar subsidy without bureaucratic delays.",
    category: "Subsidy & Policy",
    readingTime: "6 min read",
    image: "/images/blog/solar-bihar.png",
    imageAlt: "Rooftop solar document checklist and approval workflow",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Crucial document checklist required for instant portal approval.",
      "Common mistakes that delay DISCOM feasibility clearances and how to prevent them.",
      "How to verify that your solar panels carry genuine ALMM/DCR certification.",
      "Step-by-step guidance on bank account verification for Direct Benefit Transfer (DBT).",
    ],
    intro: "Applying for government solar subsidies is straightforward when your paperwork is organized accurately from day one. Incomplete bills, mismatched names on electricity connections, or incorrect bank account IFSC codes can delay your application by weeks. Follow this exact guide to prepare your documentation and secure your subsidy smoothly.",
    sections: [
      {
        heading: "1. Mandatory Document Checklist for Bihar Consumers",
        paragraphs: [
          "Before initiating your application on the National Rooftop Solar Portal, ensure you have clear, scanned digital copies of the following documents:",
        ],
        subPoints: [
          "Latest Electricity Bill (showing Consumer Account Number / CA Number and active domestic tariff)",
          "Aadhaar Card of the registered electricity account holder",
          "Property Tax receipt or proof of property ownership (if required for name correction)",
          "Cancelled Bank Cheque or updated Passbook copy showing Applicant Name, Account Number, and IFSC Code",
          "Photograph of the cleared rooftop area where panels will be mounted",
        ],
      },
      {
        heading: "2. Avoiding Name and Sanctioned Load Discrepancies",
        paragraphs: [
          "The most common cause of application rejection is a mismatch between the name on the electricity bill and the applicant's Aadhaar or bank account. Ensure that the bank account submitted for DBT belongs to the exact person whose name appears on the DISCOM electricity connection.",
          "Additionally, verify your sanctioned electrical load on your monthly bill. In Bihar, DISCOM rules typically allow solar capacity up to 100% of your sanctioned load. If your home has a 2 kW sanctioned load and you want a 3 kW or 5 kW solar plant, you must apply for a load enhancement on the NBPDCL/SBPDCL portal simultaneously.",
        ],
      },
      {
        heading: "3. Verification of ALMM & DCR Component Certificates",
        paragraphs: [
          "To safeguard your subsidy claim, always ensure that your installer furnishes serial numbers and laboratory test reports showing that the PV modules are listed in the Ministry of New and Renewable Energy's Approved List of Models and Manufacturers (ALMM).",
          "EKOSYS provides verified manufacturer warranty cards, DCR undertaking certificates, and flash test reports for every module installed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I get a subsidy if my electricity bill is in my father's or landlord's name?",
        answer: "The subsidy is disbursed directly to the bank account of the registered electricity consumer. If the bill is in a deceased family member's name, it is advisable to complete a quick name transfer with NBPDCL/SBPDCL first, or ensure the registered consumer's valid bank account is used for DBT.",
      },
    ],
  },
  {
    slug: "residential-solar-installation",
    title: "Residential Solar Installation: How to Right-Size System Capacity for Your Home",
    metaDescription: "Learn how to calculate the ideal residential solar system size for your home. Compare 2 kW, 3 kW, 5 kW, and 10 kW systems with real load calculations.",
    excerpt: "A practical guide to right-sizing your residential solar plant, calculating daily unit generation, and balancing seasonal AC demands.",
    category: "Home Solar",
    readingTime: "7 min read",
    image: "/images/home/residential-solar.png",
    imageAlt: "Residential rooftop solar array on a villa",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "How to calculate annual kilowatt-hour (kWh) demand from monthly utility bills.",
      "Daily generation benchmarks: 1 kW solar generates ~4 to 4.5 units per day in Bihar.",
      "How to budget for future load increases such as electric vehicles (EV) and additional air conditioning.",
      "Selecting the right inverter type and structural height for your home.",
    ],
    intro: "Installing an undersized solar system leaves you with lingering electricity bills, while installing an oversized system beyond your annual consumption locks up capital unnecessarily. Right-sizing your residential solar capacity ensures maximum financial return, full subsidy utilization, and optimal roof space utilization.",
    sections: [
      {
        heading: "1. The Unit Consumption Calculation Formula",
        paragraphs: [
          "In Bihar, 1 kW of well-engineered, unshaded solar capacity produces an average of 4.0 to 4.5 kilowatt-hours (units) of electricity daily, accounting for seasonal variations throughout the year. This equates to approximately 1,400 to 1,500 units per kW annually.",
          "To determine your required capacity, divide your average monthly unit consumption by 120 (the average monthly units generated by 1 kW in Bihar).",
        ],
        subPoints: [
          "Monthly bill of ~240 units (₹1,500 - ₹2,000) → Ideal Size: 2 kW System",
          "Monthly bill of ~360-400 units (₹2,800 - ₹3,500) → Ideal Size: 3 kW System",
          "Monthly bill of ~600-650 units (₹4,500 - ₹5,500) → Ideal Size: 5 kW System",
          "Monthly bill of ~1,200+ units (₹9,000+) → Ideal Size: 10 kW System",
        ],
      },
      {
        heading: "2. Accounting for Air Conditioning and Seasonal Swings",
        paragraphs: [
          "In North India, residential electricity consumption surges drastically between April and September due to continuous air conditioning operation. Fortunately, solar generation peaks during these exact summer months, providing maximum power output right when your cooling loads are highest.",
          "Under net metering, any surplus solar energy generated during mild spring and winter months is banked with DISCOM as energy credits, offsetting higher summer consumption seamlessly.",
        ],
      },
      {
        heading: "3. Rooftop Area Requirements & Panel Efficiency",
        paragraphs: [
          "Modern high-efficiency Mono PERC and TOPCon panels (540Wp to 580Wp) require approximately 80 to 90 square feet of shadow-free rooftop area per kilowatt.",
          "A 3 kW system requires roughly 240-270 sq. ft., while a 5 kW installation needs about 400-450 sq. ft. Elevated mounting frames allow you to install this capacity without losing usable terrace floor space.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I start with a 3 kW system and expand it to 5 kW later?",
        answer: "Yes, provided your inverter and electrical cabling are sized initially with expansion in mind, or if you add a second microinverter/string inverter during expansion. EKOSYS designs future-ready solar systems that can scale easily as your power requirements grow.",
      },
    ],
  },
  {
    slug: "industrial-solar-solutions",
    title: "Industrial Solar Solutions: Reducing Operational Power Costs for Factories & Plants",
    metaDescription: "Industrial solar solutions in Bihar. Learn how manufacturing plants, cold storages, and factories cut peak power tariffs and leverage accelerated depreciation.",
    excerpt: "A comprehensive analysis of industrial rooftop solar economics, HT/LT grid connectivity, Solar-DG synchronization, and tax incentives.",
    category: "Commercial & Industrial",
    readingTime: "8 min read",
    image: "/images/services/industrial-solar.png",
    imageAlt: "Industrial factory roof covered with high-capacity solar panels",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Industrial electricity tariffs can be slashed from ₹8.50+/unit to a levelized solar cost of ~₹2.40/unit.",
      "Accelerated Depreciation (AD) allows 40% asset value write-off in Year 1 for tax savings.",
      "Solar-DG synchronization controllers reduce diesel generator fuel consumption by up to 60-70%.",
      "Robust non-penetrating clamps protect industrial PEB metal roof warranties and prevent leaks.",
    ],
    intro: "For energy-intensive industrial enterprises—including cold storage units, plastic molding factories, agro-processing plants, and manufacturing facilities across Bihar—electricity represents one of the largest controllable operational expenditures. Installing an industrial rooftop solar system provides an immediate competitive advantage by slashing peak daytime power costs and delivering full capital payback in just 3 to 4 years.",
    sections: [
      {
        heading: "1. The Economics of Industrial Solar in Bihar",
        paragraphs: [
          "Commercial and industrial grid tariffs in Bihar feature high demand charges and energy rates of ₹7.50 to ₹9.50+ per unit. In contrast, an on-site industrial solar power plant generates electricity at a Levelized Cost of Energy (LCOE) of approximately ₹2.20 to ₹2.60 per unit over its 30-year operational life.",
          "For a factory consuming 20,000 units monthly, a 100 kW solar installation generates approximately 12,000 units per month, delivering direct recurring savings of ₹90,000 to ₹1,10,000 every single month.",
        ],
      },
      {
        heading: "2. Tax Advantages: Accelerated Depreciation (AD) & GST Benefits",
        paragraphs: [
          "Under Section 32 of the Income Tax Act, commercial businesses investing in solar power plants can claim 40% Accelerated Depreciation on the solar asset in the very first year of commissioning.",
          "This substantial tax shield allows profitable enterprises to offset corporate income tax liabilities, effectively recovering up to 25% to 30% of the project's capital cost in tax savings within the first financial year.",
        ],
      },
      {
        heading: "3. Solar-Diesel Generator (DG) Synchronization",
        paragraphs: [
          "Many industrial plants rely heavily on diesel generators during grid interruptions. Diesel-generated electricity costs approximately ₹24 to ₹30 per unit at current fuel prices.",
          "EKOSYS integrates intelligent Solar-DG synchronizing controllers. When the grid fails and the generator starts, the solar array synchronizes with the generator's AC reference voltage and supplies the bulk of the power load, reducing diesel fuel burn by 50% to 70% while preventing reverse power flow into the generator alternator.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will installing solar on a PEB metal shed cause water leakage?",
        answer: "No. We utilize non-penetrating standing seam aluminum clamps or engineered mini-rails fastened directly to sheet corrugation crests with EPDM weatherproof gaskets and stainless steel rivets. No through-drilling into purlins is performed, maintaining 100% roof watertightness.",
      },
      {
        question: "What is the typical payback period for a 100 kW industrial solar plant?",
        answer: "With commercial energy tariffs and 40% Accelerated Depreciation tax benefits, most 50 kW to 500 kW industrial solar plants in Bihar achieve complete capital payback within 3.0 to 3.8 years.",
      },
    ],
  },
  {
    slug: "commercial-solar-guide",
    title: "Commercial Solar Power Systems: High-Efficiency Solar for Businesses & Institutions",
    metaDescription: "Complete guide to commercial solar for schools, hospitals, showrooms, malls, and offices in Bihar. Cut daytime electricity bills and boost ESG ratings.",
    excerpt: "How commercial establishments, schools, hospitals, and retail complexes can reduce daytime operational costs with smart rooftop solar systems.",
    category: "Commercial & Industrial",
    readingTime: "7 min read",
    image: "/images/services/industrial-solar.png",
    imageAlt: "Commercial building equipped with solar panels",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Commercial establishments operate primarily during daytime hours, maximizing self-consumption of solar energy.",
      "Hospital and educational institutions benefit from silent, emission-free clean power.",
      "Smart multi-MPPT inverters allow solar arrays on complex multi-angled commercial roofs.",
      "Green building certification (IGBC/LEED) points enhance corporate ESG compliance.",
    ],
    intro: "Commercial buildings—such as private schools, multi-specialty hospitals, automobile showrooms, shopping centers, and office complexes—share a common characteristic: their peak electricity demand coincides perfectly with peak daylight hours. By generating solar power on-site, businesses directly consume solar electricity at the moment of generation, avoiding expensive commercial grid billing tiers.",
    sections: [
      {
        heading: "1. 100% Daytime Self-Consumption Advantage",
        paragraphs: [
          "Unlike residential properties where peak power use occurs in early morning and late evening, commercial facilities run lighting, elevators, IT servers, and central air conditioning continuously from 9 AM to 6 PM.",
          "This 100% self-consumption profile means commercial enterprises benefit immediately without relying heavily on net-meter export credits, maximizing instant cash flow savings on monthly electricity bills.",
        ],
      },
      {
        heading: "2. Clean Energy for Healthcare and Education",
        paragraphs: [
          "Hospitals and schools require quiet, clean, and reliable environments. Diesel generators produce high noise levels, exhaust particulate emissions, and hefty recurring fuel bills.",
          "Rooftop solar systems operate completely silently with zero local emissions, providing an environmentally responsible image that appeals to patients, students, parents, and corporate partners.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can commercial solar plants be monitored remotely?",
        answer: "Yes. EKOSYS equips every commercial installation with cloud-connected IoT monitoring. Facility managers can track live power generation, string-level current, module temperature, and financial savings in real-time from any computer or smartphone.",
      },
    ],
  },
  {
    slug: "solar-maintenance-services",
    title: "Solar Maintenance Services: Protecting Solar Output, Health & Inverter Life",
    metaDescription: "Professional solar maintenance services in Bihar. Learn about solar O&M protocols, thermal hotspot scans, electrical audits, and panel cleaning.",
    excerpt: "Why periodic preventive maintenance is critical to protecting your 30-year solar investment and preventing up to 25% energy yield loss.",
    category: "Maintenance",
    readingTime: "6 min read",
    image: "/images/services/solar-maintenance.png",
    imageAlt: "Solar technician performing electrical diagnostic inspection",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Dust and soiling can degrade solar output by 15% to 25% within weeks if left uncleaned.",
      "Infrared thermal imaging identifies invisible micro-cracks and bypass diode hotspots.",
      "Chemical earthing resistance must be measured annually to maintain low resistance (< 5 Ohms).",
      "Periodic inverter heat sink de-dusting prevents thermal throttling during hot summer months.",
    ],
    intro: "While solar photovoltaic systems have no moving mechanical parts and require minimal daily maintenance, they are exposed 365 days a year to scorching heat, severe rainstorms, bird droppings, and industrial/agricultural dust. Without structured Operation & Maintenance (O&M), cumulative soiling and minor electrical faults can quietly sap 15% to 30% of your power generation.",
    sections: [
      {
        heading: "1. The Hidden Impact of Soiling on Solar Yield",
        paragraphs: [
          "In North Bihar's agricultural and semi-urban belts, fine airborne dust, brick kiln emissions, and seasonal crop residue dust settle rapidly on solar glass surfaces.",
          "When dust layers accumulate, they scatter incoming sunlight and block solar cells from generating power. A regular bi-weekly washing cycle using soft water and non-abrasive equipment restores full generation capacity immediately.",
        ],
      },
      {
        heading: "2. Thermographic Infrared Inspections",
        paragraphs: [
          "Not all solar defects are visible to the naked eye. Internal cell micro-cracks, damaged solder ribbons, or failed bypass diodes create localized resistance hotspots that heat up to 80°C+ under full sunlight.",
          "EKOSYS uses calibrated thermal imaging cameras to pinpoint these defective cells quickly, allowing module replacements under warranty before hotspots cause permanent glass delamination or fire hazards.",
        ],
      },
      {
        heading: "3. Electrical Safety & Chemical Earthing Audits",
        paragraphs: [
          "Monsoon thunderstorms in Bihar bring severe lightning strikes and power surges. Your system's safety depends entirely on low-resistance chemical earthing pits and active Surge Protection Devices (SPDs).",
          "Our technicians test earth pit resistance with digital earth testers, ensuring earth resistance remains strictly below 5 Ohms to dissipate fault currents safely.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if my solar system needs maintenance?",
        answer: "Check your inverter mobile app. If your daily generation (kWh/kWp) has dropped significantly compared to the same month last year despite sunny weather, or if the inverter displays warning codes or high temperature warnings, schedule a professional maintenance audit immediately.",
      },
    ],
  },
  {
    slug: "solar-inverter-guide",
    title: "Solar Inverter Guide: Comparing On-Grid, Off-Grid and Hybrid Solar Inverters",
    metaDescription: "Comprehensive solar inverter guide. Compare On-Grid string inverters, Off-Grid inverters, and Hybrid systems with MPPT efficiency data.",
    excerpt: "Understanding the brain of your solar power plant: technical comparisons between on-grid, off-grid, and hybrid solar inverters.",
    category: "Products & Tech",
    readingTime: "7 min read",
    image: "/images/products/solar-components.png",
    imageAlt: "Solar inverters and electrical components on display",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "On-Grid inverters provide the highest efficiency (98%+) and fastest ROI with net metering.",
      "Hybrid inverters offer uninterruptible battery backup while still supporting grid export.",
      "Dual-MPPT trackers maximize generation from multi-faceted or partially shaded roofs.",
      "Built-in Wi-Fi / 4G telemetry provides instant fault diagnostics and mobile performance monitoring.",
    ],
    intro: "While solar panels capture sunlight, the solar inverter is the undisputed brain and nerve center of your solar power plant. It converts raw Direct Current (DC) into clean, phase-synchronized Alternating Current (AC), tracks the Maximum Power Point (MPPT) of your module strings, and regulates electrical safety. Choosing the right inverter type determines your system's efficiency, reliability, and functionality.",
    sections: [
      {
        heading: "1. On-Grid (Grid-Tied) String Inverters",
        paragraphs: [
          "On-Grid inverters are designed to work in synchronization with the utility grid. They do not require battery storage, making them the most affordable, highly efficient (97.5% - 98.8%), and durable inverter option with a typical design life of 10 to 15 years.",
          "Under national anti-islanding safety regulations (IEEE 1547 / IEC 62116), on-grid inverters immediately shut down within milliseconds when grid power fails, protecting utility linemen working on downstream distribution cables.",
        ],
      },
      {
        heading: "2. Hybrid Solar Inverters",
        paragraphs: [
          "A Hybrid Inverter combines the intelligence of a grid-tied inverter with the battery backup capabilities of an off-grid inverter in a single, compact unit.",
          "During normal grid operation, it powers your home and exports surplus solar electricity for net-metering credits. When a grid blackout occurs, an internal high-speed automatic transfer switch (ATS) isolates your home from the grid and draws power from lithium or tubular batteries within 10 milliseconds, ensuring your lights, fans, Wi-Fi, and refrigerators never lose power.",
        ],
      },
      {
        heading: "3. The Role of Maximum Power Point Tracking (MPPT)",
        paragraphs: [
          "Solar panels deliver variable voltage and current depending on solar irradiance and temperature. Advanced MPPT algorithms constantly sweep the I-V curve multiple times per second to extract the maximum possible electrical wattage under all weather conditions.",
          "Dual or multi-MPPT inverters allow you to connect solar strings facing different directions (e.g., East and South) without power mismatch losses.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the warranty period on a quality solar inverter?",
        answer: "Tier-1 solar inverters typically come with a 5-year to 8-year standard manufacturer replacement warranty, which can often be extended to 10 or 12 years.",
      },
    ],
  },
  {
    slug: "how-to-choose-solar-panels",
    title: "How to Choose Solar Panels: Mono PERC, TOPCon vs Bifacial Technologies",
    metaDescription: "Buyer's guide to choosing solar panels in 2026. Compare Polycrystalline, Mono PERC, N-Type TOPCon, and Bifacial solar modules.",
    excerpt: "An in-depth technical comparison of modern solar cell technologies to help you choose the best solar panels for your roof and budget.",
    category: "Products & Tech",
    readingTime: "8 min read",
    image: "/images/products/solar-components.png",
    imageAlt: "High efficiency monocrystalline solar panels with blue-black antireflective coating",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Polycrystalline modules are obsolete; Mono PERC and N-Type TOPCon are the modern industry standards.",
      "N-Type TOPCon modules offer superior efficiency (22%+) and perform better in extreme Bihar summer heat.",
      "Bifacial solar modules generate 10% to 20% extra energy from light reflected off the roof surface.",
      "Always check for MNRE ALMM listing and 30-Year Linear Performance Warranty* certificates.",
    ],
    intro: "Selecting the right solar panels is one of the most critical decisions in your renewable energy investment. With solar technology evolving rapidly—from older polycrystalline wafers to cutting-edge N-Type TOPCon and Bifacial cells—understanding the technical performance metrics ensures you invest in modules that deliver maximum kilowatt-hours over their 30-year lifespan.",
    sections: [
      {
        heading: "1. Mono PERC vs N-Type TOPCon Technology",
        paragraphs: [
          "Mono PERC (Passivated Emitter and Rear Cell) panels utilize P-type silicon wafers with a reflective rear passivation layer, achieving efficiencies between 20.5% and 21.8%. They remain the most popular, cost-effective workhorse of the solar industry.",
          "N-Type TOPCon (Tunnel Oxide Passivated Contact) represents the newer, superior technology. By eliminating boron-oxygen Light Induced Degradation (LID) and reducing cell recombination losses, TOPCon panels reach 22.0% to 23.2% efficiency and suffer far less degradation over time (0.4% annual power loss vs 0.55% for PERC).",
        ],
      },
      {
        heading: "2. Temperature Coefficient Matters in Bihar",
        paragraphs: [
          "Solar panels are rated at standard test conditions (STC) of 25°C. In hot summer climates like Bihar, module surface temperatures frequently reach 55°C to 65°C, causing voltage output to drop.",
          "TOPCon modules feature an exceptional temperature coefficient of approximately -0.30%/°C, compared to -0.35%/°C for standard Mono PERC. This means TOPCon generates 3% to 5% more energy during scorching summer afternoons.",
        ],
      },
      {
        heading: "3. When to Choose Bifacial Solar Modules",
        paragraphs: [
          "Bifacial solar panels feature dual-glass encapsulation with active solar cells on both the front and rear sides. While the front absorbs direct sunlight, the rear captures reflected ambient light (albedo) from the roof surface.",
          "When installed on light-colored concrete roofs or elevated structures at a height of 3+ feet, bifacial modules deliver an additional 10% to 20% energy yield from the rear side, significantly lowering your cost per kilowatt-hour.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is an ALMM approved solar panel?",
        answer: "The Approved List of Models and Manufacturers (ALMM) is an official quality registry issued by the Ministry of New and Renewable Energy (MNRE). Only ALMM-listed solar panels manufactured in India are eligible for government subsidies and net-metering grid connection.",
      },
    ],
  },
  {
    slug: "solar-installation-process",
    title: "10-Step Solar Installation Process: From Rooftop Survey to Net Metering Handover",
    metaDescription: "Discover the complete 10-step solar installation workflow. Learn what happens during rooftop survey, civil mounting, wiring, and net meter testing.",
    excerpt: "A transparent, step-by-step walkthrough of what to expect during your rooftop solar installation journey with EKOSYS.",
    category: "Installation & Guide",
    readingTime: "7 min read",
    image: "/images/installation/solar-installation-team.png",
    imageAlt: "Technicians measuring roof layout during solar survey",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Step 1 to 3: Digital shadow survey, 3D structural engineering, and DISCOM feasibility approvals.",
      "Step 4 to 7: Heavy-gauge galvanized structure erection, module clamping, DC/AC wiring, and chemical earthing.",
      "Step 8 to 10: Pre-commissioning quality testing, DISCOM net meter installation, and mobile app handover.",
      "Complete transparency with dedicated engineering milestones and safety checklists.",
    ],
    intro: "A flawless solar installation requires precision engineering, strict electrical safety compliance, and seamless regulatory coordination. At EKOSYS, we follow an accountable 10-step installation methodology that guarantees your system performs reliably for decades. Here is the complete journey.",
    sections: [
      {
        heading: "Phase 1: Survey & Engineering Design (Steps 1 to 3)",
        paragraphs: [
          "Step 1: On-Site Rooftop Assessment. Our engineers visit your property to measure dimensions, verify structural load capacity, and perform 360-degree solar pathfinder shadow analysis.",
          "Step 2: 3D CAD Layout & Electrical Design. We create a customized 3D layout showing panel orientation, tilt angles, string sizing, and cable routing.",
          "Step 3: DISCOM Feasibility Application. We submit technical documentation on the national portal to obtain formal grid feasibility sanction from NBPDCL or SBPDCL.",
        ],
      },
      {
        heading: "Phase 2: Structural Erection & Electrical Integration (Steps 4 to 7)",
        paragraphs: [
          "Step 4: Hot-Dip GI Mounting Structure Erection. Heavy-gauge galvanized steel structures are secured using chemical anchor fasteners with multi-layer waterproofing.",
          "Step 5: PV Module Mounting & Torque Clamping. Solar panels are precision-aligned and fastened using anodized aluminum mid/end clamps tightened to specified torque ratings.",
          "Step 6: Inverter Installation & Conduit Wiring. Dual-insulated solar DC cables are routed inside UV-resistant conduits to the inverter, DCDB, and ACDB distribution boxes.",
          "Step 7: Chemical Earthing & Lightning Protection. Dedicated copper-bonded earth pits are installed for DC, AC, and Lightning Arrestor circuits.",
        ],
      },
      {
        heading: "Phase 3: Testing, Net Metering & Handover (Steps 8 to 10)",
        paragraphs: [
          "Step 8: Pre-Commissioning Testing. Our quality team verifies Voc/Isc string parameters, insulation resistance, and anti-islanding trip times.",
          "Step 9: DISCOM Inspection & Bi-directional Net Metering. Utility officials inspect the installation, seal safety switches, and replace your traditional meter with a bi-directional net meter.",
          "Step 10: Commissioning, Mobile App Setup & Handover. The plant is energized! We configure your mobile monitoring app, explain basic care, and provide your complete warranty documentation kit.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much time does the on-site physical installation work take?",
        answer: "The physical civil and electrical installation on your roof typically takes 2 to 4 days for residential systems (3 kW to 10 kW). Commercial plants of 50 kW to 100 kW generally take 2 to 3 weeks.",
      },
    ],
  },
  {
    slug: "solar-energy-benefits",
    title: "Solar Energy Benefits in Bihar: Economic Payback & Environmental Impact",
    metaDescription: "Discover the economic, environmental, and practical benefits of solar energy in Bihar. Cut power bills, reduce diesel generator costs, and build a greener future.",
    excerpt: "How switching to rooftop solar delivers inflation-proof financial returns, increases property value, and fights air pollution in Bihar.",
    category: "Solar Basics",
    readingTime: "6 min read",
    image: "/images/blog/solar-bihar.png",
    imageAlt: "Solar panels glistening in the morning sunlight over Bihar landscape",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Shields your household or business permanently against 5% to 8% annual grid electricity tariff increases.",
      "Delivers a 25% to 30%+ Internal Rate of Return (IRR), outperforming fixed deposits and mutual funds.",
      "Each 1 kW of solar prevents approximately 1.2 to 1.4 tonnes of carbon dioxide (CO2) emissions annually.",
      "Elevated solar arrays create valuable shaded rooftop spaces that reduce indoor building temperatures.",
    ],
    intro: "Adopting solar energy is often celebrated for its environmental virtues, but for homeowners and commercial business owners in Bihar, it is first and foremost an unbeatable financial decision. In an era where power tariffs rise steadily and extreme summer heat drives up electricity consumption, solar power gives you complete control over your energy future.",
    sections: [
      {
        heading: "1. Financial Returns That Outperform Traditional Investments",
        paragraphs: [
          "A 3 kW residential solar system in Bihar costs approximately ₹82,000 to ₹1,07,000 net after PM Surya Ghar Central DBT (₹78,000) + Extra Special State Subsidy (₹20,000) + EKOSYS Assistance (₹15,000) = ₹1,13,000 Total Benefit. This system generates ~4,200 units annually, delivering over ₹30,000 in direct electricity bill savings every year.",
          "This equates to an annual financial return (IRR) of over 28% to 32% tax-free—dramatically outperforming fixed deposits, gold, and most stock market averages. Once payback is achieved in year 3, you receive 26+ years of clean electricity.",
        ],
      },
      {
        heading: "2. Thermal Insulation: Keeping Your Home Cooler",
        paragraphs: [
          "Direct solar radiation on flat concrete roofs during May and June heats building slabs up to 50°C+, causing intense indoor heat and forcing air conditioners to work overtime.",
          "A rooftop solar array acts as a permanent shade canopy over your roof slab, lowering top-floor ceiling temperatures by 3°C to 5°C and reducing household cooling loads.",
        ],
      },
      {
        heading: "3. Tangible Environmental Impact Across Bihar",
        paragraphs: [
          "Most grid electricity in Bihar is generated from coal-fired thermal power stations. Over its 30-year operational life, a single 5 kW residential solar plant eliminates approximately 140 tonnes of carbon dioxide emissions, equivalent to planting more than 2,400 mature trees.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does installing solar increase property resale value?",
        answer: "Yes. Homes with installed grid-tied solar systems and low utility bills command higher resale and rental values in urban areas like Hajipur and Patna, as prospective buyers value built-in energy independence.",
      },
    ],
  },
  {
    slug: "solar-panel-maintenance-guide",
    title: "Solar Panel Cleaning & Preventive Maintenance: A Practical Action Checklist",
    metaDescription: "Step-by-step DIY cleaning and maintenance checklist for rooftop solar panel owners. Learn cleaning frequency, safety rules, and do's and don'ts.",
    excerpt: "A practical, safe guide to cleaning and inspecting your rooftop solar panels to prevent hotspots and maintain peak power output.",
    category: "Maintenance",
    readingTime: "6 min read",
    image: "/images/services/solar-maintenance.png",
    imageAlt: "Homeowner cleaning solar panels with soft water and telescopic brush",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Always clean solar panels early in the morning before 8:30 AM to avoid thermal shock glass fractures.",
      "Use soft, low-TDS water and specialized telescopic microfiber brushes—never hard detergents.",
      "Inspect wiring and conduit connections for signs of rodent damage or weathering.",
      "Check inverter error logs and LED status indicators once every week.",
    ],
    intro: "Your rooftop solar power plant is an active electrical generation facility operating outdoors in changing weather. While modern solar panels are built with tempered anti-reflective glass and rugged anodized frames, regular cleaning and visual inspections are the most effective ways to guarantee maximum daily unit generation.",
    sections: [
      {
        heading: "1. The Golden Rules of Solar Panel Cleaning",
        paragraphs: [
          "Rule 1: Clean Early in the Morning or Late Evening. Never pour cold water on solar panels during peak sunny hours. When panels reach 60°C under the afternoon sun, cold water causes sudden thermal shock that can shatter the tempered glass.",
          "Rule 2: Never Step or Walk on Solar Panels. Walking on modules causes internal micro-cracks in the fragile silicon solar wafers beneath the glass. While invisible initially, these micro-cracks develop into hot spots that permanently destroy power output.",
          "Rule 3: Use Soft Water and Soft Brushes. Hard groundwater leaves white calcium chalk rings that bake into the glass. Use soft municipal water with a soft rubber squeegee and telescopic microfiber cleaning brush.",
        ],
      },
      {
        heading: "2. Monthly Visual & Inverter Inspection Checklist",
        paragraphs: [
          "Spend 5 minutes on the 1st of every month checking these four core areas:",
          "1. Inspect module glass for heavy bird dropping clusters, fallen branches, or physical debris.",
          "2. Check DC cable conduits to ensure all wiring remains firmly inside protective PVC sleeves.",
          "3. Look at your inverter display screen to confirm green normal operation status with zero error codes.",
          "4. Verify that water drains freely off the panels without pooling along the lower frame edge.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can heavy monsoon rain clean my solar panels automatically?",
        answer: "Monsoon rain washes away loose dust, but it does not remove oily grime, bird droppings, or tree sap. A quick manual rinse after rain dries leaves panels in optimal condition.",
      },
    ],
  },
  {
    slug: "solar-installation-cost-guide",
    title: "Solar Installation Cost Guide: Budgeting, Equipment Breakdown & ROI Calculations",
    metaDescription: "2026 Solar installation cost guide for Bihar. Complete price breakdowns for 2 kW, 3 kW, 5 kW, and 10 kW systems with up to ₹1,13,000 subsidy deductions and ROI data.",
    excerpt: "A transparent breakdown of solar installation costs, component pricing, subsidy savings, and real return on investment (ROI) metrics in Bihar.",
    category: "Planning & Costs",
    readingTime: "8 min read",
    image: "/images/installation/solar-installation-team.png",
    imageAlt: "Solar system cost breakdown and investment analysis chart",
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
    author: "EKOSYS Engineering & Technical Advisory Team",
    keyPoints: [
      "Complete cost breakdown: Solar modules (55%), Inverter (18%), Mounting (12%), BOS & Electricals (15%).",
      "Net cost after up to ₹1,13,000 total subsidy: ~₹45,000 for 2 kW and ~₹82,000 for 3 kW residential systems.",
      "Why chasing the lowest quotation with sub-standard BOS components leads to costly failures.",
      "Real-world payback timeline calculations for Bihar homeowners and commercial enterprises.",
    ],
    intro: "Investing in a solar power plant is a 30-year financial commitment. While understanding the total project cost is essential, evaluating the quality of components included in that cost is what guarantees long-term returns. Here is a clear, transparent breakdown of rooftop solar costs, subsidy deductions, and payback periods in Bihar.",
    sections: [
      {
        heading: "1. Complete Bill of Materials (BOM) Cost Breakdown",
        paragraphs: [
          "A high-quality, grid-connected solar installation consists of several critical component categories:",
          "• Solar PV Modules (~50% to 55% of project cost): Tier-1 Mono PERC or N-Type TOPCon panels with 30-Year Warranty*.",
          "• Smart Solar Inverter (~15% to 20%): On-grid string inverter with dual MPPTs, Wi-Fi telemetry, and anti-islanding safety.",
          "• Mounting Structures (~10% to 12%): Hot-dip galvanized iron (GI) columns, rafters, and purlins rated for 150 km/h wind loads.",
          "• Balance of System (BOS) & Protection (~15% to 18%): IP65 DCDB/ACDB boxes with Type-II SPDs, solar DC cables, copper-bonded chemical earthing pits, and ESE lightning arrestors.",
          "• Labor, Testing & DISCOM Net-Metering (~5% to 8%): Site survey, certified installation, statutory clearances, and net-meter testing.",
        ],
      },
      {
        heading: "2. Typical Residential Project Costs in Bihar (After Subsidy)",
        paragraphs: [
          "Estimated cost ranges for turnkey grid-tied residential systems in Bihar under the PM Surya Ghar Muft Bijli Yojana + State & EKOSYS Assistance scheme:",
        ],
        subPoints: [
          "2 kW System: Gross Cost ₹1,35,000 - ₹1,50,000 | Total Subsidy Benefit ₹90,000 | Net Cost ~₹45,000 - ₹60,000",
          "3 kW System: Gross Cost ₹1,95,000 - ₹2,25,000 | Total Subsidy Benefit ₹1,13,000 | Net Cost ~₹82,000 - ₹1,12,000",
          "5 kW System: Gross Cost ₹3,10,000 - ₹3,50,000 | Total Subsidy Benefit ₹1,13,000 | Net Cost ~₹1,97,000 - ₹2,37,000",
          "10 kW System: Gross Cost ₹5,80,000 - ₹6,50,000 | Total Subsidy Benefit ₹1,13,000 | Net Cost ~₹4,67,000 - ₹5,37,000",
        ],
      },
      {
        heading: "3. Payback Period & 30-Year Financial Return",
        paragraphs: [
          "A standard 3 kW system in Bihar generates approximately 4,200 units annually, saving roughly ₹29,000 to ₹34,000 per year at current domestic power rates.",
          "With a net post-subsidy cost of ~₹82,000 - ₹1,12,000, your complete investment is fully recovered within 2.8 to 3.5 years. Over the remaining 26+ years of 30-Year Warranty*, the plant generates over ₹8,00,000+ in pure cumulative electricity savings.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do some local vendors offer solar systems at unusually cheap prices?",
        answer: "Unusually low prices usually involve compromising on non-ALMM unbranded modules, thin non-galvanized scrap iron structures that rust within 2 monsoons, cheap DC cables that cause fire hazards, or omission of certified chemical earthing and surge protection. Always demand a transparent Bill of Materials (BOM) with brand names.",
      },
      {
        question: "Are solar financing and EMI options available in Bihar?",
        answer: "Yes. Leading public and private banks—including SBI, PNB, Canara Bank, and HDFC—provide collateral-free rooftop solar loans under the PM Surya Ghar initiative at attractive interest rates (~7% p.a.) with tenures up to 7 years, allowing monthly electricity savings to pay off the loan EMI.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const processSteps = [
  "Initial Consultation & Requirement Profiling",
  "Precision 3D Rooftop & Shadow Assessment",
  "Custom System Sizing & BOM Proposal",
  "DISCOM Net-Metering Feasibility Clearance",
  "Hot-Dip GI Mounting Structure Erection",
  "Tier-1 Solar PV Module Clamping",
  "Smart Inverter & Conduit Cable Routing",
  "Chemical Earthing & Surge Protection Installation",
  "DISCOM Net Meter Testing & Commissioning",
  "System Handover, App Orientation & Lifetime Support",
];

export const productCategories = [
  {
    name: "Solar PV Panels",
    icon: SunMedium,
    text: "Tier-1 N-Type TOPCon, Mono PERC, and Bifacial modules with 30-Year Performance Warranties*.",
    useCase: "Captures ambient and direct sunlight across hot summers and overcast monsoon days.",
    specs: ["540Wp - 590Wp High-Power Output", "22.5%+ Module Efficiency", "DCR / ALMM MNRE Compliant"],
  },
  {
    name: "Solar Inverters",
    icon: CircleGauge,
    text: "High-efficiency On-Grid, Off-Grid, and Hybrid smart inverters with dual MPPT and Wi-Fi telemetry.",
    useCase: "Converts DC solar energy to pure sine wave 230V/415V AC synchronized with the utility grid.",
    specs: ["Dual MPPT Trackers", "98.6% Conversion Efficiency", "Built-in Wi-Fi Mobile App Monitoring"],
  },
  {
    name: "Solar Energy Storage",
    icon: BatteryCharging,
    text: "Safe Lithium-ion (LiFePO4) and heavy-duty tubular solar batteries for resilient power backup.",
    useCase: "Stores surplus daytime energy for uninterrupted power during evening hours and grid outages.",
    specs: ["6,000+ Deep Cycle Life (LiFePO4)", "Zero Maintenance", "Fast 2-Hour Rapid Charging"],
  },
  {
    name: "Engineered Mounting",
    icon: Building2,
    text: "Hot-Dip Galvanized Iron (GI) and aluminum elevated structures rated for 150 km/h winds.",
    useCase: "Securely anchors solar modules on flat RCC roofs, tin sheds, and elevated recreational gazebos.",
    specs: ["80+ Micron Zinc Galvanization", "150 km/h Wind Load Certified", "Zero Roof Puncture Ballast Options"],
  },
  {
    name: "BOS & Protection",
    icon: Cable,
    text: "IP65 ACDB/DCDB boxes, Type-II SPDs, XLPO copper cables, and chemical earthing electrodes.",
    useCase: "Protects your electrical appliances, inverter, and building from lightning surges and short circuits.",
    specs: ["Class-I/II Surge Arrestors", "Dual Chemical Earth Pits (<5 Ohms)", "UV-Resistant Double Insulated DC Wire"],
  },
];

export interface SolarProductDetail {
  id: string;
  name: string;
  category: "Panels" | "Inverters" | "Batteries" | "Structures" | "Protection";
  badge: string;
  image: string;
  rating: string;
  efficiency: string;
  warranty: string;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  keyFeatures: string[];
  bestFor: string;
  certifications: string[];
}

export const detailedProductsList: SolarProductDetail[] = [
  {
    id: "topcon-bifacial-580w",
    name: "N-Type TOPCon 580Wp Bifacial Dual-Glass Module",
    category: "Panels",
    badge: "Highest Efficiency 2026",
    image: "/images/products/solar-components.png",
    rating: "4.9 / 5.0",
    efficiency: "22.8% Module Efficiency",
    warranty: "12-Yr Product / 30-Yr Linear Output Warranty",
    shortDesc: "Next-gen N-Type TOPCon cell architecture with dual-sided bifacial generation for maximum kWh yield during hot Bihar summers.",
    fullDesc: "Engineered with 16BB multi-busbar technology and zero Light Induced Degradation (LID), this panel captures direct sunlight on the front and reflected albedo light on the rear glass, yielding up to 25% extra energy output on light-colored RCC terraces.",
    specs: [
      { label: "Rated Power Output (Pmax)", value: "580 Wp (Up to 725 Wp with rear gain)" },
      { label: "Module Efficiency", value: "22.80%" },
      { label: "Cell Technology", value: "N-Type TOPCon Bifacial 144 Half-Cut" },
      { label: "Temperature Coefficient (Pmax)", value: "-0.30% / °C (Superior hot climate yield)" },
      { label: "Mechanical Load Rating", value: "Front: 5400 Pa / Rear: 2400 Pa (IS 875 Certified)" },
      { label: "Glass & Encapsulation", value: "2.0mm + 2.0mm Semi-Tempered Dual Glass" },
    ],
    keyFeatures: [
      "Up to 25% additional power gain from rear-side reflection",
      "Minimal annual degradation (< 0.40% from year 2 to 30)",
      "Excellent low-light performance during foggy winter & monsoon mornings",
      "PID resistant with IP68 junction box and MC4-EVO2 connectors",
    ],
    bestFor: "Residential elevated rooftops, commercial office buildings, and industrial plants seeking maximum energy per square foot.",
    certifications: ["ALMM Approved", "MNRE Certified", "IEC 61215 / 61730", "BIS Compliant"],
  },
  {
    id: "mono-perc-545w",
    name: "Mono PERC 545Wp Half-Cut High-Power Panel",
    category: "Panels",
    badge: "Most Popular Choice",
    image: "/images/home/solar-home-hero.png",
    rating: "4.8 / 5.0",
    efficiency: "21.3% Module Efficiency",
    warranty: "12-Yr Product / 30-Yr Performance Warranty*",
    shortDesc: "Proven Monocrystalline PERC technology engineered for high durability, weather resistance, and dependable daily generation.",
    fullDesc: "Built with 144 half-cut cells and anti-reflective coated tempered glass. Half-cut architecture halves the internal electrical current, substantially reducing resistive power loss and operating temperature.",
    specs: [
      { label: "Rated Power Output (Pmax)", value: "545 Wp" },
      { label: "Module Efficiency", value: "21.30%" },
      { label: "Cell Type", value: "Monocrystalline PERC 182mm (M10)" },
      { label: "Open Circuit Voltage (Voc)", value: "49.65 V" },
      { label: "Short Circuit Current (Isc)", value: "13.92 A" },
      { label: "Dimensions", value: "2278 × 1134 × 35 mm" },
    ],
    keyFeatures: [
      "Optimized shade tolerance via split cell junction layout",
      "Heavy-duty 35mm anodized aluminum frame withstands strong storms",
      "High transmission anti-soiling hydrophobic glass coating",
      "100% EL inspection passed for zero internal micro-cracks",
    ],
    bestFor: "Standard residential home installations, school campuses, and agricultural warehouses.",
    certifications: ["ALMM Enlisted", "MNRE Registered", "BIS IS 14286", "CE / TUV Rheinland"],
  },
  {
    id: "dcr-residential-550w",
    name: "DCR Mono PERC 550Wp (PM Surya Ghar Approved)",
    category: "Panels",
    badge: "100% DBT Subsidy Eligible",
    image: "/images/home/residential-solar.png",
    rating: "4.9 / 5.0",
    efficiency: "21.5% Module Efficiency",
    warranty: "10-Yr Product / 30-Yr Performance Warranty*",
    shortDesc: "Made in India Domestic Content Requirement (DCR) modules fully eligible for government subsidies up to ₹1,13,000 Total Benefit.",
    fullDesc: "Manufactured strictly with Indian solar cells and wafers in compliance with Ministry of New and Renewable Energy (MNRE) guidelines. Required for claiming central & state financial assistance under PM Surya Ghar Muft Bijli Yojana in Bihar.",
    specs: [
      { label: "DCR Compliance", value: "100% Indian Cell & Module Sourced" },
      { label: "Rated Power", value: "550 Wp" },
      { label: "Module Efficiency", value: "21.50%" },
      { label: "Subsidy Compatibility", value: "Approved for NBPDCL & SBPDCL National Portal" },
      { label: "Frame Type", value: "Corrosion-Proof Anodized Aluminum" },
      { label: "Connector", value: "Genuine MC4 IP68 Rated" },
    ],
    keyFeatures: [
      "Mandatory requirement for unlocking PM Surya Ghar central subsidies",
      "Tier-1 manufacturing quality with calibrated flash test data",
      "High hail-impact resistance (tested with 25mm ice pellets at 82 km/h)",
      "Dedicated QR code serialization linked to the National Portal",
    ],
    bestFor: "All residential homeowners in Hajipur, Vaishali, Patna, and Bihar applying for government rooftop subsidies.",
    certifications: ["MNRE DCR Certified", "ALMM List-I", "BIS R-Number Listed", "ISO 9001/14001"],
  },
  {
    id: "smart-ongrid-5kw",
    name: "Single-Phase 5 kW Smart Grid-Tie Inverter (Dual MPPT)",
    category: "Inverters",
    badge: "Dual MPPT Tracker",
    image: "/images/products/solar-components.png",
    rating: "4.9 / 5.0",
    efficiency: "98.4% Peak Efficiency",
    warranty: "5-Yr Standard / Extendable up to 10-Yr Warranty",
    shortDesc: "Ultra-quiet transformerless string inverter with dual independent MPPTs and built-in Wi-Fi real-time telemetry.",
    fullDesc: "Designed specifically for Indian grid dynamics with wide MPPT voltage range (80V–550V) and robust surge handling. Dual MPPT inputs allow you to connect panels installed on two different roof slopes or orientations without generation mismatch losses.",
    specs: [
      { label: "Rated AC Output Power", value: "5,000 W (230V Single Phase, 50Hz)" },
      { label: "Max DC Input Power", value: "7,500 W (150% DC Overload Capacity)" },
      { label: "Number of MPPTs", value: "2 Independent Trackers (1 String / MPPT)" },
      { label: "MPPT Operating Voltage", value: "80 V – 550 V (Ultra-low startup at 90V)" },
      { label: "Ingress Protection", value: "IP65 (Outdoor Wall Mountable)" },
      { label: "Monitoring", value: "Integrated Wi-Fi Stick & Mobile App (iOS/Android)" },
    ],
    keyFeatures: [
      "Dual independent MPPTs eliminate power losses from multi-angle roofs",
      "Built-in DC Disconnect Switch & Type-II Surge Protectors",
      "Natural convection cooling (zero noisy fans, silent operation)",
      "Real-time cloud monitoring of daily kilowatt-hours, savings & grid export",
    ],
    bestFor: "3 kW to 6 kW residential home systems with 1-2 air conditioners and appliances.",
    certifications: ["CEA Certified", "IEEE 1547 / UL 1741", "IEC 62109-1/2", "NBPDCL Approved"],
  },
  {
    id: "commercial-ongrid-25kw",
    name: "Three-Phase 25 kW Commercial String Inverter",
    category: "Inverters",
    badge: "Commercial Grade",
    image: "/images/services/industrial-solar.png",
    rating: "4.9 / 5.0",
    efficiency: "98.7% High Efficiency",
    warranty: "5-Yr Standard / 10-Yr Commercial Warranty",
    shortDesc: "High-capacity three-phase commercial inverter with 2/4 MPPTs, intelligent I-V curve scanning, and RS485/SCADA integration.",
    fullDesc: "Engineered for medium-to-large commercial and industrial installations. Features advanced smart cooling, AFCI arc-fault protection, and remote active power regulation to ensure smooth synchronization with high-tension utility transformers.",
    specs: [
      { label: "Rated AC Power", value: "25,000 W (415V 3-Phase + N + PE)" },
      { label: "Max DC Voltage", value: "1,100 V" },
      { label: "Number of MPPTs", value: "2 Trackers / 4 DC String Inputs" },
      { label: "Max Inverter Efficiency", value: "98.70% (European Efficiency: 98.30%)" },
      { label: "Safety Protections", value: "AFCI Arc Detection, Anti-Islanding, DC Reverse Polarity" },
      { label: "Communication", value: "RS485, Wi-Fi, Ethernet, 4G / SCADA Compatible" },
    ],
    keyFeatures: [
      "Intelligent I-V curve diagnosis pinpoints string faults in 15 seconds",
      "Built-in Type-II SPDs on both DC and AC terminals",
      "Wide AC grid voltage tolerance for unstable rural grid feeders",
      "Zero-export capability via smart meter RS485 communication",
    ],
    bestFor: "Commercial complexes, private hospitals, manufacturing mills, and cold storages.",
    certifications: ["BIS / MNRE Approved", "IEC 61727 / 62116", "CEA Grid Compliance"],
  },
  {
    id: "hybrid-inverter-6kw",
    name: "6 kW Hybrid Solar Inverter (BESS Storage Ready)",
    category: "Inverters",
    badge: "Zero Blackout Backup",
    image: "/images/products/solar-components.png",
    rating: "4.8 / 5.0",
    efficiency: "97.6% Hybrid Efficiency",
    warranty: "5-Yr Replacement Warranty",
    shortDesc: "All-in-one solar inverter with intelligent lithium battery management and sub-10 millisecond UPS backup switchover.",
    fullDesc: "Combines on-grid solar generation with off-grid battery backup capabilities. When the power grid fails, the inverter automatically transitions essential home loads to solar + battery in less than 10 milliseconds—so computers and TVs never reboot.",
    specs: [
      { label: "Nominal AC Power", value: "6,000 W (Peak surge: 12,000W for 10s)" },
      { label: "Battery Chemistry", value: "LiFePO4 Lithium / Lead-Acid (48V Nominal)" },
      { label: "UPS Switchover Time", value: "< 10 ms (Instant seamless transition)" },
      { label: "Battery Charging Current", value: "Up to 120A Smart Programmable Current" },
      { label: "Operating Modes", value: "Grid-Tie with Backup, Self-Consumption, Off-Grid" },
      { label: "Display & Controls", value: "Color LCD Touchscreen + Wi-Fi Remote App" },
    ],
    keyFeatures: [
      "Eliminates reliance on noisy, expensive diesel generators",
      "Priority load scheduling (powers home first, charges battery second, exports remainder)",
      "CAN / RS485 communication port compatible with all major Lithium BMS brands",
      "Generator auto-start signal contact for automated backup sequencing",
    ],
    bestFor: "Homes, clinics, diagnostic labs, and offices in areas experiencing frequent grid outages.",
    certifications: ["IEC 62109", "UN 38.3", "CE / EN 50549", "RoHS Compliant"],
  },
  {
    id: "lifepo4-battery-5kwh",
    name: "LiFePO4 5.12 kWh / 48V 100Ah Lithium Storage Pack",
    category: "Batteries",
    badge: "6000+ Deep Cycles",
    image: "/images/products/solar-components.png",
    rating: "4.9 / 5.0",
    efficiency: "95% Round-Trip Efficiency",
    warranty: "10-Yr Performance Warranty",
    shortDesc: "High-density wall-mountable Lithium Iron Phosphate (LiFePO4) battery with integrated smart BMS and thermal protection.",
    fullDesc: "The safest, longest-lasting battery chemistry available. Delivers 6,000+ full charge-discharge cycles at 80% Depth of Discharge (DoD), lasting over 15 years under daily use without water refilling or acid fume maintenance.",
    specs: [
      { label: "Nominal Energy Capacity", value: "5.12 kWh (5120 Watt-hours)" },
      { label: "Nominal Voltage & Capacity", value: "51.2 V / 100 Ah" },
      { label: "Usable Capacity", value: "4.60 kWh (90% DoD)" },
      { label: "Cycle Life", value: "6,000+ Cycles @ 25°C, 80% DoD" },
      { label: "Max Discharge Current", value: "100A (Continuous 5.12 kW Output)" },
      { label: "BMS Protections", value: "Overcharge, Overdischarge, Overcurrent, Short Circuit, Temp" },
    ],
    keyFeatures: [
      "Zero maintenance: No distilled water top-ups, zero acid fumes, zero corrosion",
      "Modular scalability: Parallel connection up to 15 units (76.8 kWh total capacity)",
      "Rapid charging: Fully recharges in under 2.5 hours with solar power",
      "Wall-mount or floor-stand installation with compact space footprint",
    ],
    bestFor: "Hybrid home solar backup, commercial servers, clinics, and off-grid remote farmhouses.",
    certifications: ["UN 38.3 Tested", "IEC 62619", "UL 1973", "CE Certified"],
  },
  {
    id: "tubular-battery-200ah",
    name: "Deep-Cycle C10 Solar Tubular Gel Battery (12V 200Ah)",
    category: "Batteries",
    badge: "Heavy Duty Solar C10",
    image: "/images/products/solar-components.png",
    rating: "4.7 / 5.0",
    efficiency: "88% Coulombic Efficiency",
    warranty: "5-Yr Comprehensive Warranty (60 Months)",
    shortDesc: "Rugged tall tubular battery with high antimony lead alloy plates designed for heavy cyclic discharge in demanding conditions.",
    fullDesc: "Specifically formulated for solar applications with C10 discharge rating and thick gauntlet plates. Maintains long electrolyte backup and resists thermal degradation during intense summer heatwaves.",
    specs: [
      { label: "Nominal Voltage", value: "12 V" },
      { label: "Rated Capacity", value: "200 Ah @ C10 rating (27°C)" },
      { label: "Plate Design", value: "High-Pressure Die-Cast Spine Tubular Plates" },
      { label: "Expected Float Life", value: "8 to 10 Years in Solar Duty" },
      { label: "Container Material", value: "High Impact Polypropylene with Ceramic Vent Plugs" },
      { label: "Weight (Gross)", value: "~ 64.5 kg" },
    ],
    keyFeatures: [
      "High cyclic endurance under partial state of charge (PSoC) conditions",
      "Low antimony alloy minimizes water loss and topping-up frequency",
      "Ceramic vent plugs prevent acid mist escape and improve safety",
      "Resilient performance during extended monsoon low-sunlight periods",
    ],
    bestFor: "Cost-effective off-grid solar kits, agricultural pump inverters, and emergency home power.",
    certifications: ["IS 13369 Certified", "MNRE Approved Spec", "ISO 9001/14001"],
  },
  {
    id: "elevated-gi-superstructure",
    name: "10-Foot Elevated Hot-Dip GI Rooftop Gazebo Structure",
    category: "Structures",
    badge: "150 km/h Wind Rated",
    image: "/images/home/solar-home-hero.png",
    rating: "5.0 / 5.0",
    efficiency: "100% Usable Terrace Retention",
    warranty: "15-Yr Anti-Rust Structural Guarantee",
    shortDesc: "Engineered elevated structural framework (7ft–10ft clearance) that transforms your roof into a covered rooftop terrace.",
    fullDesc: "Fabricated from heavy-gauge hollow steel sections (IS 2062 Grade) and hot-dip galvanized with 80+ microns of pure zinc. Eliminates the need to walk around low panels and keeps top-floor rooms 4°C–6°C cooler during summer.",
    specs: [
      { label: "Galvanization Standard", value: "Hot-Dip Galvanized 80–120 Microns (IS 4759)" },
      { label: "Clearance Height", value: "7.5 ft to 10.0 ft Walkable Headroom" },
      { label: "Wind Speed Rating", value: "150 km/h Certified (IS 875 Part 3)" },
      { label: "Tilt Angle Range", value: "True South 25° to 27° Optimum Bihar Tilt" },
      { label: "Foundation Method", value: "Chemical Anchor Studs with RCC Ballast Pedestals" },
      { label: "Waterproofing", value: "3-Layer Bitumen Epoxy Seal (Zero Roof Punctures)" },
    ],
    keyFeatures: [
      "Preserves 100% of your terrace floor for recreation, walking, or clothes drying",
      "Acts as a protective thermal sunshade, reducing AC cooling loads below",
      "Double-braced diagonal purlins provide maximum resistance to severe storm squalls",
      "SS304 stainless steel hardware prevents rusty streaks on roof tiles",
    ],
    bestFor: "Residential terraces, bungalow rooftops, rooftop cafes, and society common areas.",
    certifications: ["IS 875 Part 3 (Wind Load)", "IS 2062 Structural Steel", "IS 4759 Galvanization"],
  },
  {
    id: "peb-aluminum-mount",
    name: "Non-Penetrating Anodized Aluminum PEB Shed Mount",
    category: "Structures",
    badge: "Zero Roof Leakage",
    image: "/images/services/industrial-solar.png",
    rating: "4.9 / 5.0",
    efficiency: "Ultra-Lightweight (~1.8 kg/m²)",
    warranty: "30-Yr Material Warranty*",
    shortDesc: "Standing seam and trapezoidal metal sheet clamps with automotive-grade EPDM gaskets that guarantee zero roof punctures.",
    fullDesc: "Designed for commercial industrial sheds and pre-engineered buildings (PEB). Clips securely onto standing seam metal ridges or rivets into trapezoidal crests without breaching the waterproof envelope.",
    specs: [
      { label: "Material Alloy", value: "AL6005-T5 High Strength Anodized Aluminum" },
      { label: "Anodization Thickness", value: "12–15 Microns Corrosion Barrier" },
      { label: "Hardware Fasteners", value: "SUS304 Stainless Steel" },
      { label: "Weather Sealing", value: "UV-Resistant Dual-Lip EPDM Rubber Pads" },
      { label: "Compatible Roof Types", value: "Trapezoidal, Standing Seam, Corrugated Sheet" },
      { label: "Structural Weight", value: "Extremely Low Dead-Weight on Roof Trusses" },
    ],
    keyFeatures: [
      "100% preservation of manufacturer PEB roof leak warranty",
      "Rapid click-lock module clamping speeds up industrial EPC deployment",
      "Superior thermal expansion relief prevents buckling over 30 years",
      "Pre-assembled components minimize on-roof labor risks",
    ],
    bestFor: "Industrial factories, food processing sheds, logistics warehouses, and textile mills.",
    certifications: ["AS/NZS 1170", "ISO 9001", "SGS Salt Spray Tested (1000 hrs)"],
  },
  {
    id: "smart-acdb-dcdb",
    name: "IP65 Solar ACDB & DCDB Distribution Box Panel",
    category: "Protection",
    badge: "Class-II SPD Surge Protection",
    image: "/images/products/solar-components.png",
    rating: "4.8 / 5.0",
    efficiency: "100% Electrical Isolation",
    warranty: "3-Yr Replacement Warranty",
    shortDesc: "Weatherproof junction boxes with genuine Type-II Surge Protective Devices (SPDs), DC fuses, and Din-rail MCBs.",
    fullDesc: "The frontline safety shield of your solar power plant. Protects the inverter from atmospheric lightning surges, grid voltage fluctuations, and short-circuit faults on both the DC string side and AC output side.",
    specs: [
      { label: "Enclosure Ingress Rating", value: "IP65 Weatherproof & UV-Stabilized Polycarbonate" },
      { label: "DC Surge Protection", value: "Type-II SPD 1000V DC (Imax: 40kA, In: 20kA)" },
      { label: "AC Surge Protection", value: "Type-II SPD 415V / 230V AC (Imax: 40kA)" },
      { label: "Switchgear Components", value: "Solar DC MCB (1000V) + AC MCB / Isolator" },
      { label: "Glands & Terminal Blocks", value: "PG9/PG11 Brass & Polyamide Cable Glands" },
      { label: "Temperature Rating", value: "-25°C to +65°C Operating Range" },
    ],
    keyFeatures: [
      "Prevents high-voltage lightning surges from damaging smart inverters and TVs",
      "Transparent shatterproof lid for easy visual inspection of SPD status flags",
      "Separate isolated chambers for DC string inputs and AC main outputs",
      "Flame-retardant V0-grade material prevents fire propagation",
    ],
    bestFor: "Every residential, commercial, and industrial grid-connected solar installation.",
    certifications: ["IEC 61643-11 (SPD)", "IEC 60947-2 (MCB)", "CE / RoHS Compliant"],
  },
  {
    id: "chemical-earthing-kit",
    name: "Copper-Bonded Chemical Earthing & ESE Lightning Protection",
    category: "Protection",
    badge: "< 5 Ohms Guaranteed",
    image: "/images/installation/solar-installation-team.png",
    rating: "5.0 / 5.0",
    efficiency: "Ultra-Low Ground Resistance",
    warranty: "10-Yr Earth Pit Performance Guarantee",
    shortDesc: "Maintenance-free copper-bonded electrode (250+ microns) with Backfill Compound (BFC) and copper lightning arrestor.",
    fullDesc: "Dedicated chemical earth pits for solar DC, AC, and Lightning Arrestor (LA). Bentonite and carbon-based backfill compound maintains moisture and ionic conductivity in Bihar soil, guaranteeing low resistance (< 5 Ohms) without periodic watering.",
    specs: [
      { label: "Electrode Material", value: "High-Tensile Steel with 250+ Microns Pure Copper Coating" },
      { label: "Electrode Dimensions", value: "50mm Diameter × 2.0m / 3.0m Length" },
      { label: "Backfill Compound", value: "Hydroscopic Non-Corrosive BFC (Carbon/Bentonite)" },
      { label: "Lightning Arrestor", value: "Class-A Copper Multi-Spike / Early Streamer Emission (ESE)" },
      { label: "Strip Conductor", value: "25 × 3 mm Hot-Dip Galvanized / Pure Copper Strip" },
      { label: "Measured Ground Resistance", value: "Guaranteed < 5.0 Ohms (< 2.0 Ohms achieved typical)" },
    ],
    keyFeatures: [
      "Zero maintenance: Retains soil moisture without regular water pouring",
      "Dissipates lightning strikes safely into deep ground strata away from home wiring",
      "Corrosion-resistant copper molecular bond lasts over 30 years underground",
      "Supplied with heavy-duty concrete earth pit inspection chamber cover",
    ],
    bestFor: "Mandatory for all DISCOM net-metering approvals and building lightning safety.",
    certifications: ["IS 3043 (Earthing Code)", "IEC 62561-2", "CPRI Tested & Approved"],
  },
];

export const howSolarWorksFlow = [

  {
    step: 1,
    title: "Sunlight Absorption",
    subtitle: "Photovoltaic Generation",
    description: "High-efficiency Tier-1 solar modules installed on your roof absorb photons from sunlight and generate Direct Current (DC) electricity.",
  },
  {
    step: 2,
    title: "Smart Inversion",
    subtitle: "DC to AC Conversion",
    description: "The smart string inverter converts DC power into stable, frequency-synchronized 230V/415V Alternating Current (AC) electricity.",
  },
  {
    step: 3,
    title: "Direct Consumption",
    subtitle: "Self-Powering Appliances",
    description: "Generated solar power flows into your distribution board, instantly running your lights, fans, refrigerators, air conditioners, and machinery.",
  },
  {
    step: 4,
    title: "Bi-Directional Net Metering",
    subtitle: "Grid Synchronization",
    description: "Surplus electricity not consumed in real-time flows back into the DISCOM utility grid (NBPDCL / SBPDCL), earning billing credits.",
  },
  {
    step: 5,
    title: "Battery Storage (Hybrid)",
    subtitle: "Continuous Outage Backup",
    description: "In hybrid configurations, surplus energy charges high-cycle LiFePO4 batteries to ensure uninterrupted electricity during night grid outages.",
  },
  {
    step: 6,
    title: "Real-Time Telemetry",
    subtitle: "App Energy Tracking",
    description: "Monitor daily generation, money saved, and carbon offset in real-time via smartphone telemetry dashboards.",
  },
];

export const residentialSystemOptions = [
  {
    capacity: "2 kW Solar System",
    homeType: "1-2 BHK Home",
    dailyUnits: "8 - 10 Units / Day",
    roofArea: "160 - 200 Sq. Ft.",
    appliances: "Lights, Fans, Refrigerator, TV, Laptop & Washing Machine",
    subsidy: "Up to ₹90,000 Total Benefit",
    savingsYearly: "₹18,000 - ₹22,000 / Year",
  },
  {
    capacity: "3 kW Solar System",
    homeType: "2-3 BHK Home (Most Popular)",
    dailyUnits: "12 - 15 Units / Day",
    roofArea: "240 - 300 Sq. Ft.",
    appliances: "1.5 Ton Inverter AC + Full Household Appliance Suite",
    subsidy: "Up to ₹1,13,000 Total Benefit",
    savingsYearly: "₹28,000 - ₹35,000 / Year",
  },
  {
    capacity: "5 kW Solar System",
    homeType: "3-4 BHK Villa / Joint Family",
    dailyUnits: "20 - 25 Units / Day",
    roofArea: "400 - 500 Sq. Ft.",
    appliances: "2 Inverter ACs, Water Pump, Refrigerator & Heavy Appliances",
    subsidy: "Up to ₹1,13,000 Total Benefit",
    savingsYearly: "₹48,000 - ₹60,000 / Year",
  },
  {
    capacity: "10 kW Solar System",
    homeType: "Large Multi-Floor Bungalow",
    dailyUnits: "40 - 50 Units / Day",
    roofArea: "800 - 1,000 Sq. Ft.",
    appliances: "Multiple Air Conditioners, Submersible Pump & High Loads",
    subsidy: "Up to ₹1,13,000 Total Benefit",
    savingsYearly: "₹95,000 - ₹1,20,000 / Year",
  },
];

export const commercialApplicationsData = [
  {
    sector: "Manufacturing & Industrial Plants",
    description: "Offset heavy daytime machinery power consumption and reduce peak demand tariff penalties in Bihar.",
    benefit: "Payback in 3-4 years with 40% Accelerated Depreciation tax benefit under Section 32.",
  },
  {
    sector: "Cold Storages & Food Processing",
    description: "Maintain continuous refrigeration and chilling loads with high-efficiency rooftop solar integrated with DG sets.",
    benefit: "Reduces diesel generator fuel expenses by up to 60% with Solar-DG synchronizing automation.",
  },
  {
    sector: "Hospitals & Healthcare Facilities",
    description: "Reliable, green power for critical care units, diagnostic imaging, elevators, and air handling units.",
    benefit: "Guarantees round-the-clock power resilience with hybrid battery storage and clean energy branding.",
  },
  {
    sector: "Schools, Colleges & Universities",
    description: "Monetize expansive campus rooftops, laboratories, and hostel roofs to achieve near-zero daytime power bills.",
    benefit: "Lowers institutional operating budgets while serving as an educational clean-energy benchmark.",
  },
  {
    sector: "Commercial Showrooms & Malls",
    description: "Cut large air conditioning and display lighting expenses in urban centers like Hajipur and Patna.",
    benefit: "High daytime solar coincidence reduces expensive commercial tariff slabs significantly.",
  },
  {
    sector: "Agro-processing & Warehousing",
    description: "Utilize metal shed roofing for non-penetrating solar arrays powering sorting, milling, and packing lines.",
    benefit: "Rapid ROI with minimal maintenance requirements in rural and semi-urban industrial belts.",
  },
];

export const projectShowcases = [
  {
    id: "proj-1",
    title: "10 kW Elevated Residential Solar Superstructure",
    category: "Residential Rooftop",
    location: "Hajipur, Vaishali, Bihar",
    capacity: "10 kW Grid-Tied System",
    features: "Elevated 8.5-ft Hot-Dip GI Structure, N-Type TOPCon Panels, Zero Roof Space Lost",
    image: "/images/home/solar-home-hero.png",
    description: "Designed on a residential rooftop in Hajipur, this elevated installation powers multiple air conditioners while leaving the entire terrace completely usable for family gatherings.",
  },
  {
    id: "proj-2",
    title: "50 kW Commercial Rooftop Solar Installation",
    category: "Commercial Facility",
    location: "Patna, Bihar",
    capacity: "50 kW Three-Phase Plant",
    features: "Dual MPPT Inverters, Cloud SCADA Telemetry, 40% Accelerated Depreciation",
    image: "/images/services/industrial-solar.png",
    description: "A commercial healthcare and diagnostics center equipped with a high-yield solar array that slashes daytime grid consumption by over 75%.",
  },
  {
    id: "proj-3",
    title: "5 kW Residential Rooftop with PM Surya Ghar Subsidy",
    category: "Residential Rooftop",
    location: "Vaishali District, Bihar",
    capacity: "5 kW Net-Metered System",
    features: "Up to ₹1,13,000 Total Subsidy Benefit Cleared, NBPDCL Net Meter Synchronized, Dual Chemical Earth Pits",
    image: "/images/home/residential-solar.png",
    description: "Turnkey residential solar installation delivered with full National Portal subsidy assistance and rapid DISCOM net-meter commissioning.",
  },
  {
    id: "proj-4",
    title: "100 kW Industrial PEB Shed Solar Installation",
    category: "Industrial & Manufacturing",
    location: "North Bihar Industrial Area",
    capacity: "100 kW Captive Power Plant",
    features: "Non-Penetrating EPDM Standing Seam Clamps, Solar-DG Synchronizer, IP65 Switchgear",
    image: "/images/installation/solar-installation-team.png",
    description: "Engineered on an industrial metal warehouse roof without puncturing sheet membranes, saving hundreds of thousands of rupees in monthly industrial power tariffs.",
  },
  {
    id: "proj-5",
    title: "Annual Solar O&M & Thermographic Hotspot Audit",
    category: "Solar Maintenance",
    location: "Muzaffarpur & Saran, Bihar",
    capacity: "Multi-Site Solar Maintenance",
    features: "Infrared Thermal Imaging, TDS-Controlled Soft-Water Cleaning, Earth Resistance Testing",
    image: "/images/services/solar-maintenance.png",
    description: "Proactive maintenance contract restoring 18% lost generation through specialized de-mineralized washing and precision inverter optimization.",
  },
  {
    id: "proj-6",
    title: "3 kW Residential High-Efficiency TOPCon Array",
    category: "Residential Rooftop",
    location: "Hajipur Town, Bihar",
    capacity: "3 kW On-Grid System",
    features: "Tier-1 580Wp Half-Cut Modules, Single-Phase Inverter, Wi-Fi Energy Telemetry",
    image: "/images/products/solar-components.png",
    description: "A compact 3 kW residential setup for an independent family home, offsetting 100% of standard household utility bills with up to ₹1,13,000 total subsidy benefit.",
  },
];

export const subsidySlabsTable = [
  {
    capacity: "1 kW System",
    subsidy: "Govt Subsidy ₹45,000 (Central ₹30k + State ₹15k) + EKOSYS ₹10k Offer = ₹55,000",
    approxGrossCost: "₹70,000 - ₹80,000",
    netPostSubsidy: "₹15,000 - ₹25,000",
    unitsPerMonth: "120 - 140 Units",
    yearlySavings: "₹10,000 - ₹12,000",
  },
  {
    capacity: "2 kW System",
    subsidy: "Govt Subsidy ₹78,000 (Central ₹60k + State ₹18k) + EKOSYS ₹12k Offer = ₹90,000",
    approxGrossCost: "₹1,35,000 - ₹1,50,000",
    netPostSubsidy: "₹45,000 - ₹60,000",
    unitsPerMonth: "240 - 280 Units",
    yearlySavings: "₹20,000 - ₹24,000",
  },
  {
    capacity: "3 kW System (Popular)",
    subsidy: "Govt Subsidy ₹98,000 (Central ₹78k + State ₹20k) + EKOSYS ₹15k Offer = ₹1,13,000",
    approxGrossCost: "₹1,95,000 - ₹2,20,000",
    netPostSubsidy: "₹82,000 - ₹1,07,000",
    unitsPerMonth: "360 - 420 Units",
    yearlySavings: "₹30,000 - ₹36,000",
  },
  {
    capacity: "5 kW System",
    subsidy: "Govt Subsidy ₹98,000 (Central ₹78k + State ₹20k) + EKOSYS ₹15k Offer = ₹1,13,000",
    approxGrossCost: "₹3,10,000 - ₹3,50,000",
    netPostSubsidy: "₹1,97,000 - ₹2,37,000",
    unitsPerMonth: "600 - 700 Units",
    yearlySavings: "₹50,000 - ₹60,000",
  },
  {
    capacity: "10 kW System",
    subsidy: "Govt Subsidy ₹98,000 (Central ₹78k + State ₹20k) + EKOSYS ₹15k Offer = ₹1,13,000",
    approxGrossCost: "₹5,80,000 - ₹6,50,000",
    netPostSubsidy: "₹4,67,000 - ₹5,37,000",
    unitsPerMonth: "1,200 - 1,400 Units",
    yearlySavings: "₹1,00,000 - ₹1,20,000",
  },
];

export const whyChooseEkosysPillars = [
  {
    title: "Certified Engineering Standards",
    description: "Every solar system is designed according to MNRE and IS 875 standards, guaranteeing resilience against 150 km/h wind gusts and extreme weather.",
  },
  {
    title: "Precision 3D Shadow Analysis",
    description: "We use advanced shadow modeling to optimize module azimuth and tilt angles, maximizing year-round generation even with nearby water tanks or parapets.",
  },
  {
    title: "End-to-End Subsidy Coordination",
    description: "We handle the entire PM Surya Ghar portal workflow, DISCOM technical sanctions, and net-meter paperwork for direct subsidy disbursal.",
  },
  {
    title: "Tier-1 ALMM Hardware Only",
    description: "We supply only high-efficiency N-Type TOPCon and Mono PERC modules with 30-Year Performance Warranties* and smart dual-MPPT inverters.",
  },
  {
    title: "Local Bihar Presence",
    description: "Headquartered in Hajipur, our engineering and maintenance teams provide prompt on-site surveys, rapid installation, and reliable after-sales support.",
  },
  {
    title: "Dedicated Chemical Earthing & Safety",
    description: "All installations feature dual copper-bonded chemical earthing pits tested below 5 Ohms, Class-I Lightning Arrestors, and UV-resistant conduits.",
  },
];

