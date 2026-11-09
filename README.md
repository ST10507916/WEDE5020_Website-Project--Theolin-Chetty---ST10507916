# Sibusiso Electrical & Plumbing Services - Website Project

**Module:** WEDE5020 | Website Project | Part 1, Part 2 &amp; Part 3
**Chosen organisation:** Sibusiso Electrical & Plumbing Services (Proposal 2)

---

## Student Information

| Field | Detail |
|---|---|
| Student | Theolin Chetty |
| Student Number | ST10507916 |
| Module Code | WEDE5020 |
| Lecturer | Mr. J. Sookha |
| Submission | Part 1 (initial build), Part 2 (CSS styling, responsive design, review) and Part 3 (functionality, SEO, security, forms, deployment) |

---

## Project Overview

Sibusiso Electrical & Plumbing Services is a small, owner-run business
providing electrical and plumbing repairs and installations to homes and
small businesses across Johannesburg, Gauteng. It is a **hypothetical
business created for this assignment**, modelled on real South African
sole-trader electrical/plumbing services (see the *Website Project
Proposal* document, Proposal 2, for the original brief this build is based
on).

Almost all of the business's work currently comes from word-of-mouth
referrals - the organisation has no dedicated website. This project builds
that first website: a central, mobile-friendly online presence that lets
new customers find the business, understand what it offers, and request a
quote or emergency call-out as easily as an existing customer can phone in.

This repository contains the full site: all 7 HTML pages with real
content, shared CSS/JS (including the Part 3 dynamic content, interactive
features and form handling), supporting research/planning documents, and
the SEO/security/deployment configuration added in Part 3.

---

## Website Goals and Objectives

- Build trust and make the business look established and professional online.
- Clearly explain electrical and plumbing services and the areas served.
- Generate quote requests and emergency call-out enquiries through a simple form.
- Place contact options (phone, WhatsApp, email, quote form) in highly visible locations on every page.
- Support mobile users, who may be searching for a tradesperson while away from a desktop computer.
- Use testimonials and a project gallery to reinforce credibility.

---

## Key Features and Functionality

- Responsive, mobile-first layout (CSS Grid + Flexbox, one shared stylesheet).
- Sticky header with a hamburger menu on mobile and a full horizontal menu on desktop (`js/script.js`).
- Homepage hero with a clear call to action ("Request a Free Quote" / click-to-call).
- Services page separating **Electrical**, **Plumbing**, and **Emergency Call-Out** offerings.
- Project **Gallery** with category-tagged project cards (additional page - see *Additional Pages* below).
- **Testimonials** page with star ratings and customer quotes (additional page - see below).
- **Enquiry** page with a validated quote/call-out request form (service type, suburb, preferred date, job description).
- **Contact** page with **two** physical locations (Johannesburg CBD head office + Randburg depot), each with its own embedded map, plus a general contact form.
- Client-side form validation with inline error messages and a success confirmation (no backend yet - see *Part 1 Details*).
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`) throughout, with code comments explaining each section.
- Photography for the hero, About page, team portraits, and all six Gallery cards, plus original SVG icons (logo, service icons) - see *Content Research and Sourcing*.

---

## Timeline and Milestones

*(Adapted from Proposal 2, section 7 "Timeline and Milestones".)*

| Week | Milestone |
|---|---|
| Week 1 | Client requirements, service inventory, sitemap, content plan, wireframes |
| Week 2 | Visual design and development of Home and Services pages |
| Week 3 | Gallery, Testimonials, Contact, quote form, responsive behaviour, content integration |
| Week 4 | Usability testing, accessibility checks, corrections, performance testing, client review, deployment |

---

## Part 1 Details

Part 1 covers:

1. **Content research and sourcing** - organisation research, written page
   copy, and image/icon assets, organised in `../02-Content-Research/`
   (images, documents, text subfolders per page).
2. **Website structure and planning** - sitemap (see below) and the file/
   folder structure required by the brief.
3. **HTML structure and basic content** - all pages built with semantic
   HTML5, integrated content, working navigation, comments, and consistent
   indentation.
4. **Testing and debugging** - pages were run through HTML-Tidy validation
   and visually tested at mobile (375px), tablet (700px), and desktop
   (1280px) widths; the mobile nav toggle and both forms (Enquiry, Contact)
   were interaction-tested (see *Changelog*).

*Part 3 (further functionality, refinement, and deployment) will follow in
a future submission/edit, per the assignment brief.*

### Additional Pages (beyond the required minimum of 5)

The brief requires a **minimum of 5 pages**: Home, About Us, Services,
Enquiry, Contact. This build includes **7 pages** - the 5 required pages,
plus two extra pages proposed directly in Proposal 2, section 4:

- `gallery.html` - before/after style project cards ("before-and-after
  project photographs" in Proposal 2).
- `testimonials.html` - customer reviews ("testimonials... to reinforce
  credibility" in Proposal 2).

Both are linked from the main navigation and the footer on every page.

### Images and Content Sourcing Note

Per the assignment brief, section 3.1, the site uses royalty-free
photography for the hero image, the About page story image, the three
team portraits, and all six Gallery project cards (11 photos in total).
This sandbox's network could not reach stock-photo CDNs directly, so the
photos were supplied by the student and converted/placed into the site
structure. Keep a record of each photo's exact source URL and licence
(e.g. Pexels License) for the Harvard reference list, since that detail
isn't recoverable from the image file itself.

The small circular icons throughout the site (electrical bolt, plumbing
drop, phone, clock, shield, etc.) and the logo remain original, hand-built
SVG graphics in the site's navy/white/safety-yellow theme - original
content is explicitly permitted by the brief, and icons are conventionally
illustrated rather than photographed.

---

## Part 2 Details

No formal lecturer feedback on Part 1 had been released at the time of this
submission, so Part 2 instead consists of a self-directed review of the
Part 1 build against the Part 2 brief, plus the new work the brief
requires. Part 1 already included a linked external stylesheet
(`css/style.css`), a mobile-first base/reset, and two responsive
breakpoints (700px tablet, 960px desktop), so Part 2 extends and hardens
that foundation rather than starting over. See the *Changelog* below for
the full, dated list of what changed and why.

1. **CSS styling for desktop.** Added a `rem`-based, fluid type scale
   (`clamp()` on headings so they scale smoothly between breakpoints
   instead of jumping), hardened the CSS reset (margin reset on headings,
   form-element font inheritance, `prefers-reduced-motion` support), and
   added `:active` pressed-states alongside the existing `:hover` /
   `:focus-visible` states on all buttons, nav links, footer links and
   card links.
2. **Responsive design.** Added a third, large-desktop breakpoint
   (`min-width: 1200px`) that widens the container and trust-highlights
   grid and enlarges the hero photo on big monitors, on top of the
   existing 700px/960px breakpoints. Added `srcset`/`sizes` responsive
   images (two or three resolutions per photo) to the hero photo, the
   About page story photo, and all six Gallery photos, so phones download
   a smaller file than desktop screens. Added a global `:focus-visible`
   outline as an accessibility fallback (WCAG 2.2 SC 2.4.7).
3. **Testing.** Re-tested all seven pages at mobile (375px), tablet
   (768px), desktop (1440px) and large-desktop (1920px) widths using
   Playwright (headless Chromium) after the CSS/HTML changes, to confirm
   nothing regressed. Screenshot evidence below.
4. **GitHub repository.** Repository pushed with descriptive commit
   messages; this README's Changelog and References sections updated for
   Part 2 (see below).

### Screenshot Evidence (Part 2)

Homepage and Gallery page at the three key breakpoints identified for this
site (mobile, tablet, desktop). All screenshots were captured from the
live pages in this repository using Playwright/Chromium.

**Mobile (375px)**

| Home | Gallery |
|---|---|
| ![Homepage on mobile, 375px wide](docs/screenshots/index-mobile.jpg) | ![Gallery page on mobile, 375px wide](docs/screenshots/gallery-mobile.jpg) |

**Tablet (768px)**

| Home | Gallery |
|---|---|
| ![Homepage on tablet, 768px wide](docs/screenshots/index-tablet.jpg) | ![Gallery page on tablet, 768px wide](docs/screenshots/gallery-tablet.jpg) |

**Desktop (1440px)**

| Home | Gallery |
|---|---|
| ![Homepage on desktop, 1440px wide](docs/screenshots/index-desktop.jpg) | ![Gallery page on desktop, 1440px wide](docs/screenshots/gallery-desktop.jpg) |

At mobile widths the trust-highlights grid, service cards and gallery
cards all collapse to a single column and the hamburger menu replaces the
horizontal nav. At tablet width (>=700px) those grids move to two or three
columns and the horizontal nav returns at >=960px. At desktop and large-
desktop widths (>=1200px) the container widens further and the hero photo
grows, per the Part 2 breakpoint described above.

---

## Part 3 Details

### 1. Working Through Part 2 Feedback

Part 2 lecturer feedback praised the CSS implementation but flagged that
the repository "appears to have been uploaded using GitHub's upload
functionality instead of being committed and pushed throughout
development," and asked that before Part 3 the repository show a proper
Git workflow (organised structure, real commit history, changes reflected
through commits and changelog entries).

This has been corrected for Part 3 (see *Git Workflow* below for exactly
how), and every change made in this submission - including the fix itself
- is logged with its own dated line in the *Changelog* below, rather than
uploaded as a single unversioned batch.

### 2. Functionality

**2.1 JS Enhancements (Interactive Elements)**

| Feature | Where | Notes |
|---|---|---|
| FAQ accordion | `services.html` | Custom-built (not `<details>`) for full keyboard + ARIA control: `aria-expanded`/`aria-controls` toggled on click, panel `hidden` attribute toggled, `+` icon rotates via CSS. |
| Interactive map | `contact.html` | Leaflet.js (CDN), replacing the two static OpenStreetMap `<iframe>` embeds from Part 1/2 with one zoomable/pannable map with a clickable marker + popup per location. Scroll-zoom is disabled until the visitor clicks into the map, so an ordinary page-scroll isn't trapped. |
| Scroll-reveal animations | Every page | A single shared `IntersectionObserver` (`observeReveal()` in `script.js`) fades/slides any `.reveal` element into view the first time it scrolls into the viewport; respects `prefers-reduced-motion` (CSS). |
| Image lightbox | `gallery.html` | Custom modal: click a project photo to open it full-size, with Previous/Next/Close buttons and full keyboard support (`Escape`, `ArrowLeft`, `ArrowRight`), and focus returned to the triggering button on close. |
| Advanced DOM manipulation | `services.html`, `gallery.html`, `testimonials.html`, `services.html` FAQ | All four are rendered entirely by JavaScript from data arrays (see 2.2 below) rather than hardcoded in the HTML, using `createElement`/`appendChild`, not `innerHTML` string-building of entire pages. |

**2.2 Dynamic Content**

The Services, Gallery, Testimonials and FAQ sections no longer contain any
hardcoded cards in the HTML. Instead, `js/data.js` holds the content as
plain JS arrays (`SERVICES`, `GALLERY_ITEMS`, `TESTIMONIALS`, `FAQS`), and
`js/script.js` renders each page's cards from that data on load - a
genuine content/presentation split, and the mechanism the brief asks for
under "load content dynamically using JavaScript."

- **Services page** (`services.html`): dynamically rendered service cards
  with a **category filter** (All / Electrical / Plumbing / Emergency) and
  a **sort** control (Default / Name A-Z / Category), both re-rendering
  the list client-side with no page reload.
- **Gallery page** (`gallery.html`): dynamically rendered project cards
  with a **category filter** and a **live text search** (matches title,
  description and location), plus a live results count.

### 3. Search Engine Optimization (SEO)

**3.1 On-Page SEO** - applied to all 7 content pages:

- Unique, keyword-focused `<title>` and `<meta name="description">` per
  page (e.g. Services: "Electrician & Plumber Services in Johannesburg").
- Keyword research was informal but targeted: each title/description
  pairs the service (electrician, plumber, geyser repair, blocked drains)
  with the service area (Johannesburg, Randburg) - the terms a local
  customer is most likely to search.
- Proper header hierarchy already in place from Part 1 (`<h1>` once per
  page, `<h2>`/`<h3>` nested logically) - re-checked, not changed.
- Image `alt` text already descriptive from Part 1/2; `loading="lazy"`
  added to the dynamically-rendered gallery thumbnails.
- Clean, descriptive URLs already in place (`services.html`,
  `enquiry.html`, etc. - no query strings or IDs).
- Internal linking already in place via the global nav/footer and
  contextual "View services" / "Read more testimonials" links.
- `<link rel="canonical">` and Open Graph tags (`og:title`, `og:description`,
  `og:image`, `og:url`) added to every page's `<head>`, for clean search
  snippets and consistent social-media link previews.
- Mobile-friendliness: already responsive from Part 2; re-verified at
  375px/768px/1440px/1920px with the Part 3 features added (see *Testing*
  in Part 7 below).

**3.2 Off-Page SEO** - documented, not executed (this is a student
project for a hypothetical business with no real online presence to
build):

- *Backlinks:* for a real local trade business, the realistic next step
  would be a Google Business Profile listing, a listing on local directory
  sites (e.g. a South African trades directory), and backlinks from
  supplier/partner sites.
- *Social media:* `og:*` meta tags (above) prepare the site for sharing on
  Facebook/WhatsApp (the channels this type of local trade business
  actually gets referrals through); a Facebook Page link would be the
  natural next addition once the business has one.
- *Local SEO:* the two physical Johannesburg addresses (CBD head office,
  Randburg depot) are marked up as plain-text `<address>` on `contact.html`
  and shown on the interactive map, and the service area (Johannesburg,
  Gauteng) is named explicitly in the title/description of every page -
  the on-page foundation a Google Business Profile listing would build on.

**3.3 Additional Requests**

- `robots.txt` (site root) - allows all crawlers and points to the
  sitemap.
- `sitemap.xml` (site root) - lists all 7 content pages with
  `changefreq`/`priority` hints.
- *Page speed:* no JS/CSS frameworks are used (vanilla HTML/CSS/JS keeps
  payload small); all `<script>` tags use `defer`; images already carry
  `srcset`/`sizes` from Part 2; the one new third-party dependency
  (Leaflet, for the interactive map) loads only on `contact.html`, the one
  page that needs it, not site-wide.

### Security

Netlify security response headers (`_headers`, site root, applied to every
page on deploy):

- `X-Frame-Options: SAMEORIGIN` - blocks the site being embedded in an
  `<iframe>` on another domain (clickjacking protection).
- `X-Content-Type-Options: nosniff` - stops browsers guessing a different
  file type than the server declared.
- `Content-Security-Policy` - restricts scripts/styles/images/connections
  to this site plus the specific third-party hosts actually used (the
  Leaflet library and OpenStreetMap map tiles).
- `Referrer-Policy: strict-origin-when-cross-origin` and
  `Permissions-Policy` (camera/microphone/geolocation all denied, since
  the site uses none of them).

Additional measures already in place or added this submission:

- Both forms use HTML5 `required`/`pattern`/`minlength`/`type="email"`
  constraints **and** a matching JavaScript re-check before submission, so
  validation can't be bypassed by disabling JS alone.
- The hidden `bot-field` honeypot input on both forms (invisible to real
  visitors, irresistible to basic form-spam bots) silently discards
  spam submissions server-side (Netlify's standard spam trap pattern).
- All third-party `<script>`/`<link>` tags (Leaflet) use
  `crossorigin="anonymous"` and `referrerpolicy="no-referrer"`.
- No inline event handlers (`onclick="..."` etc.) anywhere in the HTML -
  all interactivity is wired up from `script.js`, which keeps the
  Content-Security-Policy above free of `unsafe-inline` for scripts.

### 4. Form Functionality and Validation

The brief asks for two forms that serve clearly different purposes, and
that distinction is now explicit in both the UI and the code:

| | `enquiry.html` | `contact.html` |
|---|---|---|
| **Purpose** | Request a specific electrical/plumbing quote or call-out | General message, feedback, complaint or media enquiry |
| **Fields** | Name, phone, email, **service type**, suburb, preferred date, job description | Name, email, **message type**, message |
| **Response on success** | A message tailored to the selected service type, with an indicative **typical cost/turnaround** (e.g. "indicative call-out fee from R450... typical turnaround same-day to next business day") | A generic thank-you, **plus** a revealed "open in your email app" link that compiles the entered fields into a ready-to-send `mailto:` message addressed to the business |

Shared mechanics (both forms, `js/script.js` section 9):

- **HTML5 validation:** `required`, `type="email"`, `type="tel"` +
  `pattern`, `minlength` on both free-text message fields.
- **JavaScript validation:** re-checks every required field with
  `checkValidity()` on submit (defence-in-depth, see *Security* above),
  shows/hides each field's specific inline error text, and clears the
  error as soon as the visitor fixes that field.
- **AJAX submission:** on a valid submit, the form is `fetch()`-POSTed to
  Netlify Forms in the background (`submitToNetlify()`) instead of doing a
  full-page reload - the success/error message is shown in place, and
  nothing the visitor typed is lost if something goes wrong.
- Both forms are registered with **Netlify Forms** (`data-netlify="true"`
  + hidden `form-name` input), so real submissions reach a dashboard with
  no separate backend or server to build or pay for.

### 5. GitHub Repository

See *Git Workflow* immediately below for how this submission corrects the
Part 2 feedback, and the *Changelog* further down for the dated, itemised
record of every change made in this submission.

---

## Git Workflow (Part 2 Feedback Fix)

**What went wrong in Part 2:** the repository was built correctly, but
pushed to GitHub using the website's drag-and-drop "Upload files" button,
which uploads everything as a single flat commit with no development
history behind it - which is exactly what the feedback flagged.

**The fix, going forward:** this Part 3 submission (and every one after
it) should be committed locally with Git and pushed from the command line
(or a Git GUI such as GitHub Desktop), in small, descriptive commits as the
work happens - not uploaded as one finished folder at the end.

If Git isn't already initialised for this project locally, start from the
version of the repository already on GitHub so history isn't lost:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

Then replace the website files in that cloned folder with the files from
this submission, and commit the work in logical, descriptive stages
instead of one giant commit - for example:

```bash
git add robots.txt sitemap.xml _headers netlify.toml
git commit -m "Add SEO sitemap/robots.txt and Netlify security headers (Part 3)"

git add js/data.js js/script.js css/style.css
git commit -m "Add dynamic content rendering, filters, lightbox, accordion and scroll animations (Part 3)"

git add services.html gallery.html contact.html enquiry.html testimonials.html index.html about.html
git commit -m "Wire pages up to dynamic content, interactive map and Netlify AJAX forms (Part 3)"

git add README.md
git commit -m "Update README with Part 3 details, changelog and git workflow fix"

git push origin main
```

Each commit should describe **what changed and why**, the same way the
Changelog entries below do - a lecturer (or anyone else) should be able to
read the commit history alone and follow how the site was actually built,
without needing this README. Going forward, commit after each meaningful
change (a new feature, a fix, a content update) rather than batching
everything into one commit at submission time - that incremental history
is itself part of what Part 3 is marked on.

---

## Sitemap

![Website sitemap diagram](images/sitemap-diagram.png)

```
Home (index.html)
 ├── About Us (about.html)
 ├── Services (services.html)
 ├── Gallery (gallery.html)            *additional page
 ├── Testimonials (testimonials.html)  *additional page
 ├── Enquiry (enquiry.html)
 └── Contact (contact.html)
```

The global navigation menu (Home · About Us · Services · Gallery ·
Testimonials · Enquiry · Contact) appears identically on every page, so any
page is reachable in a single click from anywhere on the site.

---

## File and Folder Structure

```
03-Website/                 <- website root (this folder)
├── index.html
├── about.html
├── services.html
├── gallery.html            (additional page)
├── testimonials.html       (additional page)
├── enquiry.html
├── contact.html
├── 404.html                (added in Part 3 - Netlify custom 404 page)
├── robots.txt              (added in Part 3)
├── sitemap.xml             (added in Part 3)
├── _headers                (added in Part 3 - Netlify security headers)
├── netlify.toml            (added in Part 3 - Netlify deploy config)
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── data.js             (added in Part 3 - SERVICES/GALLERY_ITEMS/TESTIMONIALS/FAQS data)
│   └── script.js
├── docs/                   (added in Part 2)
│   └── screenshots/        <- mobile/tablet/desktop evidence embedded above
│       ├── index-mobile.jpg, index-tablet.jpg, index-desktop.jpg
│       └── gallery-mobile.jpg, gallery-tablet.jpg, gallery-desktop.jpg
└── images/
    ├── logo.svg (icon only)
    ├── icon-*.svg (electrical, plumbing, emergency, quote, location, phone, clock, shield, cash)
    ├── hero-photo.jpg, about-story-photo.jpg (photography)
    ├── hero-photo-320w.jpg, about-story-photo-320w.jpg (added in Part 2, srcset variants)
    ├── team-sibusiso-nkosi.jpg, team-precious-dlamini.jpg, team-kabelo-mahlangu.jpg (photography)
    ├── gallery-full-house-rewire.jpg, gallery-db-board-upgrade.jpg,
    │   gallery-burst-geyser-repair.jpg, gallery-bathroom-renovation.jpg,
    │   gallery-commercial-maintenance.jpg, gallery-outdoor-tap-irrigation.jpg (photography)
    ├── gallery-*-400w.jpg, gallery-*-800w.jpg (added in Part 2, srcset variants)
    └── sitemap-diagram.png
```

A companion folder outside the website root, `02-Content-Research/`,
holds the source research: `images/` (organised per page), `documents/`
(sitemap source files), and `text/` (page-by-page content notes with
sources), as required by section 3 of the brief. The `01-Proposal-Document/`
folder holds the Website Project Proposal Word document (section 7.1).

---

## Changelog

| Date | Change |
|---|---|
| 2026-09-01 | Initial Part 1 build: project folder structure, content research, sitemap diagram, all 7 HTML pages, shared CSS/JS, README, and Website Project Proposal document created. |
| 2026-09-01 | Removed em dashes across all files. Replaced the hero image, About page story image, three team portraits, and all six Gallery project images with real photography (11 photos total), supplied by the student; icons and logo remain original SVG graphics. |
| 2026-10-05 | **Part 2 - Typography scale:** added `rem`-based CSS custom properties (`--fs-sm` through `--fs-2xl`) using `clamp()` for fluid headings, replaced the hardcoded `font-size` values on `.section-heading h2`, `.hero-copy h1` and the card heading group with the new scale variables, and set an explicit `html { font-size: 100%; }` base so all `rem` values resolve predictably. Added `letter-spacing` to headings. |
| 2026-10-05 | **Part 2 - CSS reset hardened:** extended the reset to zero out default margins on `h1-h4`/`p`/`figure`/`blockquote`/`dl`, made form elements (`input`, `button`, `textarea`, `select`) inherit font styling instead of using browser defaults, added an `ol` rule alongside the existing `ul` reset, and added a `prefers-reduced-motion` media query so `scroll-behavior: smooth` and CSS transitions are disabled for visitors who have that OS setting on. |
| 2026-10-05 | **Part 2 - Interactive states:** added `:active` "pressed" states (distinct from `:hover`/`:focus-visible`) to `.btn` and all three button variants, `.main-nav a`, `.footer-grid a`, and `.card-link`, plus a global `:focus-visible` outline as a fallback so every focusable element has a visible keyboard-focus indicator (WCAG 2.2 SC 2.4.7). |
| 2026-10-05 | **Part 2 - Large-desktop breakpoint:** added a third responsive breakpoint (`min-width: 1200px`) widening `--container-width` to 1320px, the trust-highlights grid gap, the hero photo height, and section padding, on top of the existing 700px (tablet) and 960px (desktop) breakpoints from Part 1. |
| 2026-10-05 | **Part 2 - Responsive images:** generated 320w/400w/800w resized JPEG variants (ImageMagick) for the hero photo, the About page story photo, and all six Gallery photos, and added `srcset`/`sizes` attributes to each `<img>` so phones request a smaller file than desktop screens, per the brief's `srcset`/`sizes` requirement. |
| 2026-10-05 | **Part 2 - Testing and screenshot evidence:** re-tested all 7 pages at mobile (375px), tablet (768px), desktop (1440px) and large-desktop (1920px) widths using Playwright/headless Chromium after the above changes; added Home and Gallery page screenshots at mobile/tablet/desktop widths to the `docs/screenshots/` folder and embedded them in this README under *Part 2 Details*. |
| 2026-10-05 | **Part 2 - Documentation:** updated this README (Part 2 Details section, this changelog, and the reference list below) to cover the Part 2 submission. No formal Part 1 lecturer feedback had been released at submission time, so no specific corrections from a rubric are logged here; this pass was a self-directed review against the Part 2 brief instead. |
| 2026-11-09 | **Part 3 - Git workflow fix (Part 2 feedback):** corrected the issue raised in Part 2 feedback that the repository "appears to have been uploaded using GitHub's upload functionality instead of being committed and pushed throughout development." Added a *Git Workflow* section to this README with the exact commit sequence to follow from this submission onward, and committed this submission's own files in the staged, descriptive commits that section describes rather than as one uploaded batch. |
| 2026-11-09 | **Part 3 - Dynamic content data layer:** added `js/data.js`, holding all Services, Gallery, Testimonials and FAQ content as plain JS arrays, separating content from presentation for the first time. |
| 2026-11-09 | **Part 3 - Services page:** replaced the two static Electrical/Plumbing card grids with a single list rendered from `js/data.js` at load time, plus a category filter (All/Electrical/Plumbing/Emergency) and a sort control (Default/Name A-Z/Category) that re-render client-side with no page reload. Added a dynamically-rendered FAQ accordion (custom-built, full ARIA `aria-expanded`/`aria-controls` + `hidden`-panel support, not the native `<details>` element) below the services list. |
| 2026-11-09 | **Part 3 - Gallery page:** replaced the 6 static gallery-card articles with a dynamic grid rendered from `js/data.js`, added a category filter and a live text search (matches title, description and location) with a results count, and added a keyboard-accessible lightbox modal (Escape/ArrowLeft/ArrowRight, focus returned to the triggering thumbnail on close) so photos open full-size without leaving the page. |
| 2026-11-09 | **Part 3 - Testimonials page:** replaced the 5 static testimonial cards with a dynamic list rendered from `js/data.js`. |
| 2026-11-09 | **Part 3 - Scroll-reveal animations:** added a single shared `IntersectionObserver` (`observeReveal()` in `script.js`), applied to the homepage trust-highlight/service-teaser/testimonial-teaser cards and to every dynamically-rendered card on Services/Gallery/Testimonials, so content fades/slides into view on first scroll into the viewport; respects `prefers-reduced-motion`. |
| 2026-11-09 | **Part 3 - Interactive map:** replaced the two static OpenStreetMap `<iframe>` embeds on `contact.html` with one interactive Leaflet.js map (CDN) showing both locations as clickable markers with popups; scroll-zoom is disabled until the visitor clicks into the map so page-scrolling isn't trapped. Kept a `<noscript>` fallback to the plain-text addresses. |
| 2026-11-09 | **Part 3 - Form rework (Netlify Forms + AJAX + differentiated purpose):** rebuilt both forms to register with Netlify Forms (`data-netlify`, hidden `form-name`, honeypot spam-trap field) and submit via `fetch()` AJAX instead of a full-page reload (`js/script.js` section 9). `enquiry.html` now returns a service-type-specific success message with an indicative cost/turnaround; `contact.html` now also compiles the entered fields into a ready-to-send `mailto:` link, so the same message can be sent directly from the visitor's own email client as well as captured by Netlify. Added `minlength` validation to both free-text fields and a new Message Type field to the contact form. |
| 2026-11-09 | **Part 3 - SEO:** rewrote `<title>`/`<meta name="description">` on all 7 pages around locally-targeted keywords (service + "Johannesburg"), added `<link rel="canonical">` and Open Graph tags to every page, and added `robots.txt` and `sitemap.xml` at the site root. |
| 2026-11-09 | **Part 3 - Security:** added `_headers` (Netlify security response headers: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) and `netlify.toml` (deploy config + custom 404 page), kept HTML5 + JS validation on both forms as defence-in-depth, and added `crossorigin`/`referrerpolicy` attributes to the one third-party script/stylesheet the site loads (Leaflet). |
| 2026-11-09 | **Part 3 - Documentation:** updated this README (Part 3 Details section, Git Workflow section, this changelog, and the reference list below) to cover the Part 3 submission. |

---

## References (Harvard Style)

*(Reused from the original WEDE5020 Part 1 "Target Organisation Proposals"
document - Theolin Chetty, ST10507916, 29 August 2026 - since these same
web standards govern the HTML/CSS/JS build in this repository.)*

MDN Web Docs (2025) *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 29 August 2026).

Nielsen Norman Group (2024) *10 usability heuristics for user interface design*. Available at: https://www.nngroup.com/articles/ten-usability-heuristics/ (Accessed: 29 August 2026).

WHATWG (2026) *HTML Living Standard*. Available at: https://html.spec.whatwg.org/ (Accessed: 29 August 2026).

World Wide Web Consortium (W3C) (2024) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 24 August 2026).

World Wide Web Consortium (W3C) (2024) *Understanding WCAG 2.2*. Available at: https://www.w3.org/WAI/WCAG22/Understanding/ (Accessed: 26 August 2026).

World Wide Web Consortium (W3C) (2024) *ARIA Authoring Practices Guide*. Available at: https://www.w3.org/WAI/ARIA/apg/ (Accessed: 25 August 2026).

Google for Developers (2025) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 23 August 2026).

Mozilla Developer Network (MDN) Web Docs (2025) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 24 August 2026).

OpenStreetMap Contributors (2026) *OpenStreetMap embeddable map*. Available at: https://www.openstreetmap.org/export/embed.html (Accessed: 1 September 2026). - *used for the two location maps on contact.html.*

MDN Web Docs (2025) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 5 October 2026). - *used for the `srcset`/`sizes` implementation added in Part 2.*

MDN Web Docs (2025) *Using CSS custom properties (variables)*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties (Accessed: 5 October 2026). - *used for the Part 2 typography scale.*

MDN Web Docs (2025) *CSS clamp() function*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp (Accessed: 5 October 2026). - *used for the fluid heading sizes added in Part 2.*

MDN Web Docs (2025) *:focus-visible pseudo-class*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible (Accessed: 5 October 2026). - *used for the global keyboard-focus outline added in Part 2.*

World Wide Web Consortium (W3C) (2023) *prefers-reduced-motion media feature*. Available at: https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion (Accessed: 5 October 2026). - *used for the reduced-motion support added in Part 2.*

MDN Web Docs (2025) *IntersectionObserver API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 9 November 2026). - *used for the scroll-reveal animations added in Part 3.*

Leaflet (2025) *Leaflet - an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 9 November 2026). - *used for the interactive map on contact.html, added in Part 3.*

OpenStreetMap Contributors (2026) *Tile usage policy*. Available at: https://operations.osmfoundation.org/policies/tiles/ (Accessed: 9 November 2026). - *map tile source for the Part 3 Leaflet map.*

Netlify (2025) *Form handling*. Available at: https://docs.netlify.com/forms/setup/ (Accessed: 9 November 2026). - *used for the Netlify Forms + AJAX submission implementation added in Part 3.*

MDN Web Docs (2025) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 9 November 2026). - *used for the AJAX form submission added in Part 3.*

MDN Web Docs (2025) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation (Accessed: 9 November 2026). - *used for the HTML5 + JavaScript form validation added in Part 3.*

MDN Web Docs (2025) *ARIA: accordion pattern*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Patterns/accordion (Accessed: 9 November 2026). - *used for the FAQ accordion added in Part 3.*

Google for Developers (2025) *robots.txt introduction and guide*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 9 November 2026). - *used for robots.txt, added in Part 3.*

Sitemaps.org (2025) *Sitemap XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 9 November 2026). - *used for sitemap.xml, added in Part 3.*

OWASP (2025) *HTTP Security Response Headers Cheat Sheet*. Available at: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html (Accessed: 9 November 2026). - *used for the _headers security configuration added in Part 3.*

Netlify (2025) *File-based configuration (netlify.toml) and custom headers*. Available at: https://docs.netlify.com/configure-builds/file-based-configuration/ (Accessed: 9 November 2026). - *used for netlify.toml and _headers, added in Part 3.*

Git (2025) *Git Basics - Recording Changes to the Repository*. Available at: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository (Accessed: 9 November 2026). - *used for the Part 3 Git workflow fix following Part 2 feedback.*
