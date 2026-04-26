import {
  ArrowUpRight,
  CalendarCheck,
  FileText,
  LayoutDashboard,
  Mail,
  MonitorSmartphone,
  PanelsTopLeft,
  RefreshCw,
  SearchCheck,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const trustPoints = [
  "Fast delivery",
  "Mobile-first design",
  "Clean animations",
  "SEO-ready structure",
  "Built for real businesses",
];

export const services = [
  {
    title: "Business Websites",
    description:
      "A clear home page, service sections, contact flow, and the details people check before they call.",
    icon: Store,
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for offers, launches, ads, or a single product that needs a clean pitch.",
    icon: PanelsTopLeft,
  },
  {
    title: "Portfolio Websites",
    description:
      "Personal sites for creators, freelancers, and specialists who need their work to look organized.",
    icon: LayoutDashboard,
  },
  {
    title: "Booking / Contact Pages",
    description:
      "Simple pages that make it easy to ask questions, request a quote, or book a time.",
    icon: CalendarCheck,
  },
  {
    title: "Website Redesigns",
    description:
      "Cleaner structure, sharper visuals, better mobile spacing, and copy that feels more current.",
    icon: RefreshCw,
  },
  {
    title: "Responsive Frontend Development",
    description:
      "Polished React and Tailwind builds that work smoothly across phones, tablets, and desktops.",
    icon: MonitorSmartphone,
  },
];

export const work = [
  {
    eyebrow: "Auto repair website",
    title: "A sharper site for a local garage",
    description:
      "A service-first layout for drivers who want answers fast: repairs, diagnostics, booking, and location details.",
    goal:
      "Make the shop feel reliable before someone picks up the phone.",
    features: ["Service menu", "Quote CTA", "Trust badges", "Mobile contact bar"],
    preview: {
      label: "Metroline Auto",
      stat: "24 hr response",
      color: "blue",
      rows: ["Diagnostics", "Brake repair", "Oil service"],
    },
  },
  {
    eyebrow: "Nail salon website",
    title: "A clean booking page with visual calm",
    description:
      "A modern salon page with service details, pricing cues, soft image blocks, and a direct booking path.",
    goal:
      "Help new clients understand the vibe and choose a service without digging.",
    features: ["Service cards", "Booking button", "Care notes", "Instagram link"],
    preview: {
      label: "Studio Polish",
      stat: "Appointments",
      color: "black",
      rows: ["Gel manicure", "Nail art", "Refill set"],
    },
  },
  {
    eyebrow: "Creator portfolio",
    title: "A personal brand site that feels edited",
    description:
      "A focused portfolio for a creator with selected projects, a short bio, and a clean inquiry section.",
    goal:
      "Show range without turning the page into a noisy archive.",
    features: ["Featured work", "About block", "Media kit CTA", "Contact form"],
    preview: {
      label: "Mara James",
      stat: "Selected work",
      color: "blue",
      rows: ["Campaigns", "Writing", "Speaking"],
    },
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    body:
      "We sort out the goal, audience, pages, and the main action your site needs to support.",
  },
  {
    step: "02",
    title: "Design direction",
    body:
      "You get a clear visual direction: type, layout, color, spacing, and the overall feel before the full build.",
  },
  {
    step: "03",
    title: "Build",
    body:
      "The site is built responsive from the start, with clean sections and small details that make it feel finished.",
  },
  {
    step: "04",
    title: "Launch-ready handoff",
    body:
      "Final files are checked, contact links are tested, and the site is ready to publish or connect to hosting.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$100",
    intro: "Best for a simple proof of concept or a clean one-page presence.",
    items: [
      "One-page website demo",
      "Mobile responsive layout",
      "Contact section",
      "Basic SEO structure",
    ],
  },
  {
    name: "Standard",
    price: "$200",
    intro: "A stronger fit for small businesses that need more explanation.",
    featured: true,
    items: [
      "Up to 4 core sections",
      "Services or menu layout",
      "Contact form UI",
      "Light motion and polish",
      "Launch checklist",
    ],
  },
  {
    name: "Pro",
    price: "$350",
    intro: "For brands that want more detail, stronger visuals, and extra care.",
    items: [
      "Long-form landing page",
      "Custom section design",
      "Portfolio or case study area",
      "Refined responsive states",
      "Handoff notes",
    ],
  },
];

export const quickDetails = [
  { label: "Typical range", value: "$100-$350" },
  { label: "Best for", value: "Small brands" },
  { label: "Style", value: "Clean and direct" },
];

export const buttonIcons = {
  arrow: ArrowUpRight,
  mail: Mail,
  file: FileText,
  search: SearchCheck,
  sparkle: Sparkles,
  wrench: Wrench,
};
