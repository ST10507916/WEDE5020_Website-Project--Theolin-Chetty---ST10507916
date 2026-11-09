/* =========================================================================
   Sibusiso Electrical & Plumbing Services
   Script: data.js
   WEDE5020 | Website Project | Part 3 | Theolin Chetty | ST10507916
   -------------------------------------------------------------------------
   Content data used to dynamically render the Services list, the Gallery
   grid, and the Testimonials list with JavaScript (Part 3, section 2.2:
   "Use JavaScript to dynamically load content, such as posts or product
   listings"). Keeping the data separate from the rendering logic in
   script.js means a new service, project, or testimonial can be added by
   editing one array here, without touching any HTML or render code.

   Loaded BEFORE script.js (see the <script> order in each HTML page), so
   these arrays already exist in the global scope when script.js runs.
   ========================================================================= */

/* -------------------------------------------------------------------------
   SERVICES - rendered on services.html with category filter + sort
   (Part 3, section 2.2 "filter and sort content... on the services page")
   ------------------------------------------------------------------------- */
var SERVICES = [
  {
    id: "fault-finding",
    category: "electrical",
    name: "Fault Finding & Repairs",
    description: "Tripping breakers, power outages, and faulty circuits diagnosed and fixed.",
    typicalCost: "R450 - R850 call-out + parts",
  },
  {
    id: "db-upgrade",
    category: "electrical",
    name: "DB Board Upgrades & COC",
    description: "Compliant distribution board upgrades with a Certificate of Compliance.",
    typicalCost: "R2,500 - R6,500 depending on board size",
  },
  {
    id: "lighting",
    category: "electrical",
    name: "Lighting & Plug Points",
    description: "New points, replacements, and LED upgrades for homes and offices.",
    typicalCost: "R350 - R650 per point",
  },
  {
    id: "geyser-electrical",
    category: "electrical",
    name: "Geyser Electrical Connections",
    description: "Safe electrical connection for new or replacement geysers.",
    typicalCost: "R600 - R950",
  },
  {
    id: "rewiring",
    category: "electrical",
    name: "Home Rewiring",
    description: "Full or partial rewiring for older homes and renovations.",
    typicalCost: "Quoted on-site (varies by home size)",
  },
  {
    id: "business-maintenance",
    category: "electrical",
    name: "Small Business Maintenance",
    description: "Scheduled maintenance and call-out cover for shops and offices.",
    typicalCost: "Monthly contract - quoted per site",
  },
  {
    id: "burst-pipe",
    category: "plumbing",
    name: "Burst Pipe Repairs",
    description: "Rapid response to burst and leaking pipes, indoors or outdoors.",
    typicalCost: "R500 - R1,200 depending on access",
  },
  {
    id: "geyser-install",
    category: "plumbing",
    name: "Geyser Installation & Repair",
    description: "Supply, install, and repair geysers of all common sizes.",
    typicalCost: "R3,200 - R7,500 supplied and fitted",
  },
  {
    id: "blocked-drain",
    category: "plumbing",
    name: "Blocked Drain Clearing",
    description: "Kitchen, bathroom, and outdoor drains cleared quickly and cleanly.",
    typicalCost: "R450 - R900",
  },
  {
    id: "tap-toilet",
    category: "plumbing",
    name: "Tap & Toilet Installations",
    description: "Replacements and new installations, fitted properly the first time.",
    typicalCost: "R350 - R750 per fitting",
  },
  {
    id: "leak-detection",
    category: "plumbing",
    name: "Leak Detection",
    description: "Locating hidden leaks before they cause costly damage.",
    typicalCost: "R550 - R1,100 call-out",
  },
  {
    id: "bathroom-renovation",
    category: "plumbing",
    name: "Bathroom & Kitchen Renovations",
    description: "Full plumbing support for bathroom and kitchen renovation projects.",
    typicalCost: "Quoted on-site (project scope varies)",
  },
  {
    id: "emergency-callout",
    category: "emergency",
    name: "Emergency Call-Outs",
    description: "Urgent electrical and plumbing failures, any time, day or night.",
    typicalCost: "R650 call-out fee (after-hours) + repair cost",
  },
];

/* -------------------------------------------------------------------------
   GALLERY - rendered on gallery.html with category filter + text search
   and opened in the lightbox (Part 3, section 2.1)
   ------------------------------------------------------------------------- */
var GALLERY_ITEMS = [
  {
    id: "full-house-rewire",
    category: "electrical",
    location: "Randburg",
    title: "Full House Rewire",
    description: "Complete rewire of a 1970s home, including a new DB board and Certificate of Compliance.",
    thumb: "images/gallery-full-house-rewire-400w.jpg",
    full: "images/gallery-full-house-rewire.jpg",
    alt: "Electrician running new conduit wiring during a full house rewire",
  },
  {
    id: "db-board-upgrade",
    category: "electrical",
    location: "Sandton",
    title: "DB Board Upgrade & COC",
    description: "Upgraded an outdated distribution board to current safety standards.",
    thumb: "images/gallery-db-board-upgrade-400w.jpg",
    full: "images/gallery-db-board-upgrade.jpg",
    alt: "Electrician using a drill on a distribution board during an upgrade",
  },
  {
    id: "burst-geyser-repair",
    category: "plumbing",
    location: "Roodepoort",
    title: "Burst Geyser Pipe - Emergency Repair",
    description: "Same-day emergency repair after a burst geyser pipe flooded a ceiling.",
    thumb: "images/gallery-burst-geyser-repair-400w.jpg",
    full: "images/gallery-burst-geyser-repair.jpg",
    alt: "Plumber tightening a pipe fitting during an emergency geyser repair",
  },
  {
    id: "bathroom-renovation",
    category: "plumbing",
    location: "Johannesburg South",
    title: "Bathroom Plumbing Renovation",
    description: "Full plumbing renovation for a family bathroom remodel.",
    thumb: "images/gallery-bathroom-renovation-400w.jpg",
    full: "images/gallery-bathroom-renovation.jpg",
    alt: "Plumber connecting pipework under a counter during a bathroom renovation",
  },
  {
    id: "commercial-maintenance",
    category: "electrical",
    location: "Johannesburg CBD",
    title: "Commercial Electrical Maintenance",
    description: "Ongoing scheduled maintenance contract for a small retail unit.",
    thumb: "images/gallery-commercial-maintenance-320w.jpg",
    full: "images/gallery-commercial-maintenance.jpg",
    alt: "Technician servicing wiring inside an electrical panel during commercial maintenance",
  },
  {
    id: "outdoor-tap-irrigation",
    category: "plumbing",
    location: "Fourways",
    title: "Outdoor Tap & Irrigation Installation",
    description: "New outdoor taps and irrigation point installation for a garden refit.",
    thumb: "images/gallery-outdoor-tap-irrigation-400w.jpg",
    full: "images/gallery-outdoor-tap-irrigation.jpg",
    alt: "Outdoor PVC pipework installed along an exterior wall for a tap and irrigation project",
  },
];

/* -------------------------------------------------------------------------
   TESTIMONIALS - rendered on testimonials.html
   ------------------------------------------------------------------------- */
var TESTIMONIALS = [
  {
    name: "T. Mokoena",
    location: "Randburg",
    rating: 5,
    quote: "Sibusiso's team arrived within the hour when our geyser burst and had it fixed the same afternoon. Honest pricing and no mess left behind.",
  },
  {
    name: "A. van Wyk",
    location: "Sandton",
    rating: 5,
    quote: "Had our entire DB board upgraded and a COC issued for a house sale. Professional, on time, and the paperwork was sorted quickly.",
  },
  {
    name: "N. Dlamini",
    location: "Johannesburg CBD",
    rating: 5,
    quote: "We use them for ongoing maintenance at our shop. Always reliable and they explain exactly what they're doing before they start.",
  },
  {
    name: "R. Naidoo",
    location: "Roodepoort",
    rating: 4,
    quote: "Quick response for a burst pipe emergency. Pricing was fair and they cleaned up properly afterwards.",
  },
  {
    name: "L. Botha",
    location: "Fourways",
    rating: 5,
    quote: "Rewired our whole house during a renovation. Took the time to explain the new layout and left everything neat and labelled.",
  },
];

/* -------------------------------------------------------------------------
   FAQS - rendered as an accessible accordion on services.html
   ------------------------------------------------------------------------- */
var FAQS = [
  {
    question: "Do you charge for quotes?",
    answer: "Call-out based quotes for standard jobs are free within our core service area. Complex rewiring or renovation quotes may require a short site visit, which we'll always confirm with you beforehand.",
  },
  {
    question: "Do you issue a Certificate of Compliance (COC)?",
    answer: "Yes. Any electrical work that legally requires a COC (new installations, DB board changes, property sales) is issued with one as standard, included in the quoted price.",
  },
  {
    question: "How fast is your emergency call-out response?",
    answer: "Typical response time for marked emergencies (burst pipes, total power loss) is 60 to 90 minutes across our core Johannesburg service area, depending on traffic and time of day.",
  },
  {
    question: "Which suburbs do you cover?",
    answer: "Johannesburg CBD, Randburg, Sandton, Roodepoort, Fourways, Johannesburg South, and Soweto. If you're just outside these areas, enquire anyway - we can often still help.",
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes, all repairs and installations are backed by our workmanship guarantee. If something related to our work isn't right afterwards, we'll come back and fix it at no extra charge.",
  },
];
