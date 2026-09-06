import {
  PortfolioItem,
  ServiceItem,
  ProcessStep,
  WhyChooseItem,
  MaterialSwatch,
  TestimonialItem,
  FAQItem
} from '../types';

/**
 * =========================================================================
 * BUSINESS WHATSAPP CONFIGURATION
 * =========================================================================
 * Replace the number below with the actual business WhatsApp phone number.
 * Format for Cameroon: 2376XXXXXXXX (without '+' or spaces).
 * Default placeholder demo number is set below for testing.
 */
export const BUSINESS_WHATSAPP_NUMBER = "237670000000"; // <-- INSERT REAL WHATSAPP NUMBER HERE

export const BUSINESS_INFO = {
  brandName: "SOLUTION CENTER",
  subName: "N&B MODERN FURNITURES",
  location: "Hospital Roundabout, Bamenda, Cameroon",
  tagline: "Custom furniture, carpentry, upholstery, and modern furniture solutions crafted in Bamenda.",
  hoursNotice: "Contact us for current opening hours and workshop consultations.",
  addressCity: "Bamenda, Cameroon",
};

/**
 * Generates a direct WhatsApp click-to-chat URL with a pre-filled URL-encoded message.
 */
export function createWhatsAppUrl(message: string): string {
  const cleanNumber = BUSINESS_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export const TRUST_STATS = [
  {
    title: "Custom Built",
    description: "Furniture made around your needs.",
    icon: "Ruler",
  },
  {
    title: "Made With Care",
    description: "Attention to detail from design to finishing.",
    icon: "Sparkles",
  },
  {
    title: "Local Expertise",
    description: "Serving homes and businesses in Bamenda.",
    icon: "MapPin",
  },
  {
    title: "Built To Last",
    description: "Quality-focused craftsmanship.",
    icon: "ShieldCheck",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    description: "Custom-made sofas, beds, tables, chairs, cabinets, and other bespoke furniture pieces tailored to your exact measurements and aesthetic.",
    iconName: "Armchair",
    badge: "Bespoke"
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description: "Professional woodworking and custom carpentry engineered with high-grade timber for residential homes and commercial spaces.",
    iconName: "Hammer",
    badge: "Structural"
  },
  {
    id: "upholstery",
    title: "Upholstery",
    description: "Furniture upholstery, restoration, premium fabric selection, high-resilience cushioning, and precision tailored finishing.",
    iconName: "Scissors",
    badge: "Crafted"
  },
  {
    id: "modern-home-furniture",
    title: "Modern Home Furniture",
    description: "Contemporary furniture designed to give living spaces, dining areas, and bedrooms a refined, inviting, and comfortable ambience.",
    iconName: "Home",
    badge: "Living"
  },
  {
    id: "custom-cabinets",
    title: "Custom Cabinets & Storage",
    description: "Functional storage solutions, walk-in closets, kitchen cabinetry, and credenzas designed to maximize space with clean modern lines.",
    iconName: "Layers",
    badge: "Storage"
  },
  {
    id: "commercial-furniture",
    title: "Commercial Furniture",
    description: "Tailored furniture solutions for corporate offices, boutique hotels, reception lounges, restaurants, and hospitality spaces.",
    iconName: "Building2",
    badge: "Commercial"
  },
];

/**
 * High-resolution luxury furniture photography curated for this demo.
 * NOTE FOR CLIENT: Replace image URLs below with actual workshop & showroom photos.
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Modern L-Shape Sectional Sofa",
    category: "Sofas",
    subtitle: "Custom upholstery • Living Room",
    description: "Tailored modular sectional crafted with premium neutral bouclé upholstery, deep seating ergonomics, and an internal solid hardwood frame.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    dimensions: "320cm x 210cm x 85cm",
    material: "Textured Bouclé Fabric & Hardwood Base",
    featured: true,
  },
  {
    id: "p2",
    title: "Contemporary Floating Bedroom Set",
    category: "Beds",
    subtitle: "Custom furniture • Bedroom",
    description: "Custom platform king-size bed with integrated floating nightstands, warm walnut veneer, and cushioned fluted velvet headboard.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    dimensions: "King 180cm x 200cm + Integrated Shelving",
    material: "Rich African Hardwood & Fluted Fabric",
    featured: true,
  },
  {
    id: "p3",
    title: "Statement Architectural TV Console",
    category: "Living Room",
    subtitle: "Carpentry • Living Room",
    description: "Handcrafted low-profile media unit featuring acoustic slatted wood doors, concealed cable management, and seamless push-to-open drawers.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    dimensions: "240cm x 45cm x 50cm",
    material: "Solid Teak & Matte Black Accents",
    featured: true,
  },
  {
    id: "p4",
    title: "Artisanal Solid Dining Table",
    category: "Tables",
    subtitle: "Woodwork • Dining",
    description: "Solid hardwood 8-seater dining table showcasing natural timber grain, soft bevelled perimeter edges, and sculptural pedestal legs.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
    dimensions: "220cm x 100cm x 76cm",
    material: "Iroko / Hardwood with Satin Polyurethane Seal",
    featured: true,
  },
  {
    id: "p5",
    title: "Sculptural Modern Accent Chairs",
    category: "Upholstery",
    subtitle: "Upholstery • Seating",
    description: "Pair of custom occasional lounge chairs featuring organic curvature, high-resilience contour foam, and hand-finished bronze metallic legs.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    dimensions: "85cm x 80cm x 78cm",
    material: "Warm Ochre Velvet & Metal Frame",
    featured: true,
  },
  {
    id: "p6",
    title: "Built-In Architectural Storage Unit",
    category: "Cabinets",
    subtitle: "Custom Carpentry • Storage",
    description: "Floor-to-ceiling fitted display and wardrobe system with integrated LED accent channels, fluted glass panels, and bespoke brass pulls.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    dimensions: "Custom site-fitted wall unit",
    material: "Precision Joinery, Veneer & Glass",
    featured: true,
  },
  {
    id: "p7",
    title: "Minimalist Ergonomic Executive Desk",
    category: "Custom Projects",
    subtitle: "Custom Carpentry • Commercial / Office",
    description: "Executive office desk custom-designed with embedded wireless power hub, soft-close leather-lined drawer, and chamfered edges.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    dimensions: "190cm x 85cm x 75cm",
    material: "Sustainably Sourced Hardwood & Brass Trim",
    featured: false,
  },
  {
    id: "p8",
    title: "Curved Cloud Modular Sofa",
    category: "Sofas",
    subtitle: "Custom upholstery • Living Room",
    description: "Organically shaped 3-piece curved sofa engineered for spacious reception parlours and open-plan living rooms.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    dimensions: "300cm x 110cm x 78cm",
    material: "Heavy Linen Blend & Orthopedic Foam",
    featured: false,
  },
  {
    id: "p9",
    title: "Master Suite Fluted Headboard & Bed",
    category: "Beds",
    subtitle: "Custom furniture • Bedroom",
    description: "Full-width wall-panelled upholstered headboard with reading lamps, underbed drawer storage, and solid slatted base.",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1200&q=80",
    dimensions: "200cm x 200cm (Super King)",
    material: "Brushed Suede Fabric & Treated Pine Base",
    featured: false,
  },
  {
    id: "p10",
    title: "Handcrafted Coffee Table Duo",
    category: "Tables",
    subtitle: "Woodwork • Living Room",
    description: "Nesting dual coffee tables combining solid African wood grain with smooth matte stone inlay.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=1200&q=80",
    dimensions: "Diameter 90cm & 60cm",
    material: "Local Hardwood & Natural Finish",
    featured: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description: "Share your idea, room inspiration, measurements, or reference photos through WhatsApp or our consultation form."
  },
  {
    step: "02",
    title: "Discuss & Plan",
    description: "We review timber selection, upholstery fabrics, exact dimensions, finishing coats, and timeline suited to your budget."
  },
  {
    step: "03",
    title: "Craft With Care",
    description: "Our skilled carpenters and upholsterers hand-build your piece in our Bamenda workshop with meticulous precision."
  },
  {
    step: "04",
    title: "Ready For Your Space",
    description: "Your completed furniture is inspected for perfection, securely packaged, and delivered or prepared for collection."
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    title: "Made For Your Space",
    description: "Not mass-produced or flat-packed. Every item is proportioned and styled around your room's exact layout.",
    iconName: "Maximize2",
  },
  {
    title: "Craftsmanship First",
    description: "Every structural joint, stitch line, cushion contour, and surface finish receives rigorous artisan attention.",
    iconName: "Sparkle",
  },
  {
    title: "Modern & Practical",
    description: "Contemporary design blended with durable daily utility, easy-maintenance fabrics, and sturdy load-bearing frames.",
    iconName: "CheckCircle",
  },
  {
    title: "Personal Service",
    description: "Work directly with a responsive local team in Bamenda that understands your preferences and values your input.",
    iconName: "Users",
  },
];

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    name: "Iroko / African Teak",
    category: "wood",
    tone: "Golden to rich amber brown",
    description: "Durable tropical hardwood resistant to moisture and pests, ideal for tables, desks, and cabinetry.",
    colorCode: "#7A4B27",
  },
  {
    name: "Natural White Oak",
    category: "wood",
    tone: "Pale warm biscuit",
    description: "Distinct grain patterns with contemporary Scandinavian and modern minimalist appeal.",
    colorCode: "#B39268",
  },
  {
    name: "Smoked Espresso Hardwood",
    category: "wood",
    tone: "Deep charcoal brown",
    description: "Sophisticated deep stain bringing dramatic warmth to TV consoles and master bedroom sets.",
    colorCode: "#2E2017",
  },
  {
    name: "Textured Bouclé",
    category: "fabric",
    tone: "Ivory & Warm Oatmeal",
    description: "High-tactile curly weave with plush comfort, stain-guarded for modern accent chairs and sofas.",
    colorCode: "#E8E2D5",
  },
  {
    name: "Heavy Linen Blend",
    category: "fabric",
    tone: "Stone / Slate Gray",
    description: "Breathable, resilient, natural weave with timeless understated elegance for living spaces.",
    colorCode: "#9C968B",
  },
  {
    name: "Plush Micro-Velvet",
    category: "fabric",
    tone: "Warm Caramel & Ochre",
    description: "Soft lustrous pile with high rub-test durability, ideal for headboards and luxury sofas.",
    colorCode: "#966336",
  },
  {
    name: "Orthopedic High-Density Foam",
    category: "cushion",
    tone: "Multiple Firmness Grades",
    description: "Multi-layered resilience preventing sagging, balancing cloud-soft comfort with ergonomic lumbar support.",
    colorCode: "#D6CEBF",
  },
  {
    name: "Architectural Hardware",
    category: "hardware",
    tone: "Brushed Brass & Matte Black",
    description: "Heavy solid metal handles, quiet soft-close hinges, and concealed German-spec runners.",
    colorCode: "#B5945B",
  },
];

/**
 * Realistic sample testimonials clearly structured as client demo feedback.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Beautiful finishing and exactly the kind of modern look we wanted for our living room. The sectional sofa fits our space perfectly and the cushioning is extraordinarily comfortable.",
    author: "Client Demonstration Review",
    role: "Residential Homeowner",
    rating: 5,
    projectType: "Custom Modular L-Shape Sofa",
  },
  {
    id: "t2",
    quote: "The TV console and custom floating bedroom set transformed our apartment. Working directly with craftsmen at Hospital Roundabout made communicating measurements effortless.",
    author: "Client Demonstration Review",
    role: "Interior Renovation Client",
    rating: 5,
    projectType: "TV Console & Bed Frame",
  },
  {
    id: "t3",
    quote: "Exceptional woodworking on our 8-seater dining table. You can tell they take pride in the joinery and timber finishing. Having WhatsApp updates throughout the build was very reassuring.",
    author: "Client Demonstration Review",
    role: "Commercial & Home Project",
    rating: 5,
    projectType: "Artisanal Iroko Dining Table",
  },
  {
    id: "t4",
    quote: "High-quality upholstery work. They restored our vintage chairs and built modern barstools that match our kitchen cabinets flawlessly. Truly reliable craftsmanship in Bamenda.",
    author: "Client Demonstration Review",
    role: "Boutique Hospitality Client",
    rating: 5,
    projectType: "Custom Seating & Upholstery",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you make custom furniture?",
    answer: "Yes. Every piece of furniture can be designed and built according to your preferred style, exact room dimensions, materials, and specific functional requirements."
  },
  {
    id: "faq-2",
    question: "Can I send you a reference photo?",
    answer: "Yes, absolutely! Customers frequently send inspiration images, Pinterest pins, or photos of furniture they like directly through WhatsApp. We review your references and advise on dimensions and materials."
  },
  {
    id: "faq-3",
    question: "Do you offer upholstery services?",
    answer: "Yes. We provide complete upholstery services including custom-tailored sofa builds, reupholstery and restoration of existing pieces, fabric sourcing, and high-density foam replacement."
  },
  {
    id: "faq-4",
    question: "How do I request a quote?",
    answer: "You can request a quote easily by clicking the 'Request a Quote' button or filling out our quick quote form on this page. It directly prepares a pre-filled WhatsApp message detailing your project so we can respond promptly."
  },
  {
    id: "faq-5",
    question: "Where are you located in Bamenda?",
    answer: "Our showroom and workshop are centrally located at Hospital Roundabout, Bamenda, Cameroon. You are welcome to visit to inspect our craftsmanship, review fabric swatches, and discuss your furniture plans in person."
  },
  {
    id: "faq-6",
    question: "How long does a custom project take?",
    answer: "Project timelines depend on the type, size, material availability, and complexity of the furniture piece. Most custom pieces are completed within an agreed timeframe discussed during our initial consultation."
  },
];
