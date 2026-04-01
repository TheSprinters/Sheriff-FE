---
layout: aesthetihawk
title: "DSA Sheriff Portal — Capstone Redesign"
description: How our team rebuilt the Deputy Sheriffs' Association website from the original dsasd.org into a modern full-stack single-page application.
permalink: /capstone/dsa-redesign
comments: false
---

<style>
  .bw { max-width: 880px; margin: 0 auto; padding: 24px; }
  .bw h1 { font-size: 2rem; font-weight: 800; margin-bottom: 6px; }
  .bw .sub { color: #64748b; font-size: 0.95rem; margin-bottom: 28px; }
  .bw h2 { font-size: 1.25rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.15); padding-bottom: 8px; margin: 32px 0 14px; }
  .bw h3 { font-size: 1.05rem; color: #e2e8f0; margin: 18px 0 8px; }
  .bw ul { padding-left: 20px; margin: 6px 0 14px; }
  .bw li { font-size: 0.86rem; color: #cbd5e1; margin-bottom: 5px; line-height: 1.55; }
  .bw p { font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin-bottom: 10px; }
  .bw strong { color: #e2e8f0; }
  .bw code { background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-size: 0.82rem; color: #93c5fd; }

  /* Comparison grid */
  .cg { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
  .cc { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .cc h3 { margin-top: 0; }
  .cc.old h3 { color: #94a3b8; }
  .cc.new h3 { color: #fbbf24; }
  .cc ul { margin-bottom: 0; }

  /* Stat bar */
  .sb { display: flex; gap: 14px; flex-wrap: wrap; margin: 18px 0; }
  .si { flex: 1; min-width: 120px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; text-align: center; }
  .si .n { font-size: 1.7rem; font-weight: 800; color: #fbbf24; }
  .si .l { font-size: 0.68rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }

  /* Tech stack */
  .ts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 14px 0; }
  .tc { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); border-radius: 8px; padding: 9px 12px; text-align: center; font-size: 0.8rem; color: #93c5fd; font-weight: 600; }

  /* Team grid */
  .tg { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 14px 0; }
  .tm { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .tm h4 { font-size: 0.95rem; color: #fbbf24; margin: 0 0 2px; }
  .tm .role { font-size: 0.72rem; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
  .tm ul { margin-bottom: 0; }
  .tm li { font-size: 0.82rem; }

  /* Image showcase */
  .isg { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0; }
  .isg.solo { grid-template-columns: 1fr; }
  .isc { border-radius: 10px; overflow: hidden; border: 1px solid #1e3352; }
  .isc img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .isc .cap { font-size: 0.72rem; color: #475569; text-align: center; padding: 6px; background: #0f2040; }

  /* Visual list */
  .vl { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 14px 0; }
  .vi { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 12px; text-align: center; }
  .vi .icon { font-size: 1.6rem; margin-bottom: 4px; }
  .vi .vn { font-size: 0.78rem; color: #e2e8f0; font-weight: 600; }
  .vi .vd { font-size: 0.7rem; color: #64748b; }

  @media (max-width: 700px) {
    .cg, .ts, .tg, .isg { grid-template-columns: 1fr; }
    .vl { grid-template-columns: 1fr 1fr; }
  }
</style>

<div class="bw">

# DSA Sheriff Portal — Capstone Redesign

<p class="sub">Rebuilt <a href="https://dsasd.org" target="_blank">dsasd.org</a> as a full-stack single-page app with authentication, AI chatbot, interactive games, and a modern dark UI. <br>Live at: <a href="https://dsasd.opencodingsociety.com/sheriff/" target="_blank">dsasd.opencodingsociety.com/sheriff</a></p>

<div class="sb">
  <div class="si"><div class="n">10</div><div class="l">Page Sections</div></div>
  <div class="si"><div class="n">7</div><div class="l">API Endpoints</div></div>
  <div class="si"><div class="n">6</div><div class="l">DB Tables</div></div>
  <div class="si"><div class="n">3</div><div class="l">Game Modes</div></div>
  <div class="si"><div class="n">2</div><div class="l">Pages</div></div>
  <div class="si"><div class="n">11</div><div class="l">Custom Images</div></div>
</div>

---

## Team & Work Split

<div class="tg">
  <div class="tm">
    <h4>Neil</h4>
    <div class="role">Frontend Lead</div>
    <ul>
      <li>Built the entire single-page portal UI (HTML/CSS/JS)</li>
      <li>Hero section, nav bar, sticky header with glassmorphism</li>
      <li>Member Resources tiles with inline expandable detail panels</li>
      <li>News card grid, About section, Store product grid</li>
      <li>FAQ accordion with search + category filters</li>
      <li>Contact section with staff photos</li>
      <li>Login/signup modal with tabbed forms</li>
      <li>Real-time search bar with dropdown results</li>
      <li>User dropdown panel (name, badge, rank, station)</li>
      <li>Mobile menu overlay + responsive breakpoints</li>
      <li>Section dividers, scroll-to-top, active nav highlighting</li>
      <li>Net Patrol canvas game, Pop Quiz, and MTU Explorer lab</li>
      <li>Rank Pathway Guide: 4-step quiz, personalized results, interactive checklists</li>
      <li>Full DSA Info sub-page (`/sheriff/info`) with org structure, rank table, stations</li>
      <li>Cross-page navigation (hero CTA, about section link, search integration)</li>
      <li>All custom images and visual assets</li>
    </ul>
  </div>
  <div class="tm">
    <h4>Akhil</h4>
    <div class="role">Scrum Master / Backend Lead</div>
    <ul>
      <li>Scrum board, sprint planning, stand-ups, and task tracking</li>
      <li>Sheriff data model: 6 tables (users, training, certifications, commendations, emergency contacts, assignments)</li>
      <li>REST API endpoints: authenticate, id, user CRUD, chat</li>
      <li>JWT authentication with secure cookie handling</li>
      <li>Role-based access control (Admin vs. Member)</li>
      <li>Admin panel API (list all users, update, delete)</li>
      <li>Input validation and error handling</li>
      <li>Seed data: 4 default sheriff users with full related records</li>
      <li>Claude AI chatbot integration (sheriff_chat API)</li>
      <li>Database config: SQLite (dev) / MySQL (prod)</li>
    </ul>
  </div>
  <div class="tm">
    <h4>Moiz</h4>
    <div class="role">Deployer / DevOps</div>
    <ul>
      <li>AWS EC2 instance setup and configuration</li>
      <li>Docker containerization of Flask backend</li>
      <li>NGINX reverse proxy configuration (port 8325)</li>
      <li>SSL/TLS certificates via Certbot (HTTPS)</li>
      <li>CORS configuration for cross-subdomain requests</li>
      <li>Cookie domain setup (<code>.opencodingsociety.com</code>)</li>
      <li>Frontend deployment to GitHub Pages</li>
      <li>DNS configuration: <code>dsasd.opencodingsociety.com</code> + <code>sheriff.opencodingsociety.com</code></li>
      <li>Environment variables (DB credentials, SECRET_KEY, IS_PRODUCTION)</li>
      <li>Database migration scripts (SQLite to MySQL prod)</li>
      <li>Production debugging and 404/CORS error resolution</li>
    </ul>
  </div>
</div>

---

## Original vs. Updated — Side by Side

<div class="cg">
  <div class="cc old">
    <h3>Original dsasd.org</h3>
    <ul>
      <li>WordPress + Divi theme (static CMS)</li>
      <li>Multi-page — every click loads a new page</li>
      <li>No member login or authentication</li>
      <li>No interactive features or games</li>
      <li>No API or database backend</li>
      <li>Standard contact form</li>
      <li>Blue/white color scheme, Open Sans + Poppins fonts</li>
      <li>Desktop-first, basic responsive</li>
      <li>No search functionality beyond WordPress default</li>
      <li>No chatbot or AI features</li>
    </ul>
  </div>
  <div class="cc new">
    <h3>Updated DSA Portal</h3>
    <ul>
      <li>Custom single-page app (HTML/CSS/JS + Flask REST API)</li>
      <li>Smooth scroll nav — zero page reloads</li>
      <li>Full JWT auth with signup, login, logout, sessions</li>
      <li>Canvas game, pop quiz, MTU lab (3 game modes)</li>
      <li>7 REST API endpoints + MySQL database (6 tables)</li>
      <li>Contact cards with staff photos + hours</li>
      <li>Dark navy/gold theme, glassmorphism header</li>
      <li>Mobile-first with full-screen overlay menu</li>
      <li>Real-time search bar with instant dropdown results</li>
      <li>AI chatbot powered by Claude API</li>
    </ul>
  </div>
</div>

---

## Tech Stack

<div class="ts">
  <div class="tc">Python / Flask</div>
  <div class="tc">Jekyll (GitHub Pages)</div>
  <div class="tc">MySQL + SQLAlchemy</div>
  <div class="tc">JWT (PyJWT)</div>
  <div class="tc">Claude AI API</div>
  <div class="tc">NGINX Reverse Proxy</div>
  <div class="tc">AWS EC2 + Docker</div>
  <div class="tc">CORS + Secure Cookies</div>
  <div class="tc">HTML5 Canvas (Game)</div>
</div>

- **Frontend:** `dsasd.opencodingsociety.com` — Jekyll static site deployed on GitHub Pages
- **Backend:** `sheriff.opencodingsociety.com` — Flask API on AWS EC2, Dockerized, behind NGINX with Certbot SSL
- **Database:** MySQL in production (SQLite for local dev), managed via Flask-Migrate
- **Auth:** JWT tokens in `jwt_sheriff` cookie, scoped to `.opencodingsociety.com` domain

---

## All Features & Content

### Header & Navigation
- Sticky frosted-glass header with `backdrop-filter: blur(12px)`
- DSA logo + text branding
- 10 nav links grouped with subtle vertical separators (Resources, News, Events, About, Store, FAQ, Pathway, Contact, Games)
- Real-time search bar — type 2+ characters and a dropdown shows matching sections (Resources, News, Events, FAQ, Store, Games, Pathway, DSA Info, etc.)
- Login / Join buttons swap to user chip when authenticated
- User dropdown panel: name, badge, rank, station, admin toggle, logout
- Full-screen mobile overlay menu with grouped links and auto-close

### Hero Section
- Background image overlay (`store-uniforms.jpg`) at 12% opacity
- Radial gold glow effect
- DSA logo badge, headline, subtitle, three CTA buttons (Explore Resources, Learn About DSA, Full DSA Info Page)
- Stats bar: 4,229 Active Members / 70+ Years / 12 Stations / 24/7 Support

### Member Resources (Dashboard)
- 8 clickable tiles in a 4-column grid:

<div class="vl">
  <div class="vi"><div class="icon">&#128179;</div><div class="vn">Benefits</div><div class="vd">Insurance plans</div></div>
  <div class="vi"><div class="icon">&#128272;</div><div class="vn">Legal Defense</div><div class="vd">24/7 attorneys</div></div>
  <div class="vi"><div class="icon">&#127891;</div><div class="vn">Wellness</div><div class="vd">Peer support</div></div>
  <div class="vi"><div class="icon">&#128196;</div><div class="vn">Forms & Docs</div><div class="vd">MOU, grievance</div></div>
  <div class="vi"><div class="icon">&#128197;</div><div class="vn">Events</div><div class="vd">Calendar link</div></div>
  <div class="vi"><div class="icon">&#128176;</div><div class="vn">DSA Store</div><div class="vd">Merch link</div></div>
  <div class="vi"><div class="icon">&#128240;</div><div class="vn">Newsletters</div><div class="vd">Silver Star</div></div>
  <div class="vi"><div class="icon">&#127937;</div><div class="vn">Political Action</div><div class="vd">PAC updates</div></div>
</div>

- Each tile opens an **inline detail panel** (no page load) with full descriptions, bullet-point lists, and a contact callout box
- Newsletters panel includes 3 clickable issue cards (Mar/Apr 2026, Jan/Feb 2026, Nov/Dec 2025) with expandable peek previews

### News Section
- 3-column card grid with image headers
- Color-coded tags: Announcement (gold), Event (blue), Benefit (green)
- Cards: 2026 Contract Negotiations, Annual Family Picnic, New Dental Plan Options

<div class="isg">
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="Board Portrait"><div class="cap">News: Board portrait used for contract update article</div></div>
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/golf-tournament-photo.png" alt="Golf Tournament"><div class="cap">News: Golf tournament photo used for family picnic article</div></div>
</div>

### Events Section
- Full interactive monthly calendar grid (7-column layout)
- Prev / Today / Next month navigation
- Clickable days with event badges
- Day selection shows event detail cards with title, time, location, and image
- RSVP buttons with confirmed state
- Pre-loaded events: Board meetings, golf tournament, family picnic, memorial ceremony, shop with a deputy, holiday party

<div class="isg solo">
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/golf-tournament-flyer.png" alt="Golf Tournament Flyer"><div class="cap">Events: Golf tournament flyer displayed in calendar detail view</div></div>
</div>

### About Section
- 2x2 grid of cards with images:
  - **Our Mission** — DSA history since 1955, collective bargaining role, 4,229 members
  - **Stations We Cover** — List of 12+ stations + detention facilities
  - **Leadership** — Board of Directors info, shop stewards
  - **History** — Milestones: Legal Defense Fund, landmark contracts, wellness expansion

<div class="isg">
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Logo" style="object-fit:contain;background:#e8ecf0;padding:20px"><div class="cap">About: DSA logo used in Mission card</div></div>
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/memorial-line-of-duty.png" alt="Memorial"><div class="cap">About: Line of Duty Memorial used in History card</div></div>
</div>

### DSA Store
- Hero image (`store-interior.jpg`)
- 4x2 product grid (8 items) with emoji icons, names, descriptions, and prices:
  - Polo Shirt ($35), Baseball Cap ($22), Challenge Coin ($15), Duffel Bag ($45), Travel Mug ($18), Lapel Pin ($12), Workout Tee ($28), Patch Set ($20)
- Two additional images: store relaunch flyer + uniforms display
- Shipping and in-person pickup info

<div class="isg">
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/store-interior.jpg" alt="Store Interior"><div class="cap">Store: Interior hero image</div></div>
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/store-relaunch-flyer.png" alt="Store Relaunch"><div class="cap">Store: Relaunch flyer image</div></div>
</div>

### Gamification — Net Patrol (CB Unit 4)
- **3 tabbed game modes:**
  1. **Net Patrol Mission** — HTML5 canvas game (780x440)
     - Player character (frontend engineer), NPC (Router Ron), AI NPC (Hacker H4X)
     - Arrow keys to move, Space to jump, E to pick up/talk, F to fragment
     - Packets fall through OSI layers; player delivers them through the stack
     - Real-time sidebar: score, level, lives, combo, current layer, controls, learning goal, NPC dialogue, packet analyzer
     - Play / Pause / Stop controls + level selector dropdown
  2. **Pop Quiz Review** — OSI vs TCP/IP comparison chart + multi-question quiz with instant feedback and explanations
  3. **MTU Explorer Lab** — Payload size slider (100-3000B), real-time Ethernet frame visualization, fragment calculation, encapsulation flow diagram, step-by-step request journey (GitHub Pages to AWS EC2)
- Feature cards: Contest Fit, Academic Focus, Real Project Link, Slack Concepts
- "How To Teach It" guide with 4 numbered steps
- Layer guide: 6 stack lessons + College Board requirement match

### FAQ Section
- Searchable input bar
- 6 category filter tags: All, Membership, Benefits, Legal, Events, Store
- 9 accordion Q&A items covering: joining, dues, Weingarten rights, insurance, open enrollment, legal defense, critical incidents, RSVP, merchandise
- Linked to AI chatbot for questions not covered

### Rank Pathway Guide (NEW)
- Gamified career advancement planner tied to the user's logged-in account
- **Locked state:** prompts users to log in before access
- **Step 1 — Goal Rank:** auto-detects current rank from user profile, shows only higher ranks in a dropdown
- **Step 2 — Experience Assessment:** years in current rank (4 options) + primary focus area (Patrol, Investigations, Specialized, Detention, Admin)
- **Step 3 — Skills & Challenges:** leadership self-assessment (4 levels) + biggest promotion challenge (exam, experience, education, interview, networking)
- **Step 4 — Personalized Results:** generated based on all quiz answers:
  - **Pathway summary** with estimated timeline (e.g., "Deputy to Sergeant: 5-8 years")
  - **Personalized notes** based on years served and leadership level
  - **Requirements checklist** for the target rank
  - **Career timeline** with milestone markers (Year 1, Year 3, Test Window, etc.)
  - **Interactive activity checklists** (click to check off) for their primary challenge area
  - **Secondary activity set** for well-rounded development
  - **Focus-specific activities** tailored to their assignment area (e.g., K-9 certifications for specialized unit members)
- Covers all 10 rank combinations (Deputy-to-Corporal through Lieutenant-to-Captain)
- Progress bar showing quiz completion (4 dots)
- Activities tagged as Required, Recommended, or Focus

### Full DSA Info Page (NEW — `/sheriff/info`)
- Dedicated sub-page accessible via hero CTA and About section link
- Comprehensive DSA organizational info:
  - Mission statement and core services
  - Organizational structure (Board, HQ Staff, Shop Stewards, PAC)
  - Full rank structure table (Deputy through Captain with responsibilities)
  - All patrol stations (12), detention facilities (6), and specialized units (9)
  - Member benefits: health/insurance, legal defense, wellness, publications
  - History timeline from 1955 to present
  - Contact cards (address, phone, email)
- Link back to portal + link to official dsasd.org
- Consistent dark navy/gold design matching the main portal

### Contact Section
- 3 staff/board member circular photos with labels
- 3 contact cards:
  - **Visit:** 13881 Danielson St, Poway, CA 92064 (Mon-Fri 8-5)
  - **Call:** (858) 486-9009 (24/7 legal hotline)
  - **Email:** info@dsasd.org / benefits@dsasd.org

<div class="isg">
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/staff-photo-1.png" alt="Staff 1"><div class="cap">Contact: DSA staff photo</div></div>
  <div class="isc"><img src="{{ site.baseurl }}/images/dsa/staff-photo-2.png" alt="Staff 2"><div class="cap">Contact: DSA staff photo</div></div>
</div>

### Admin Panel
- Only visible to users with `role: "Admin"`
- Full-width table: Name, Username, Badge, Rank, Station, Email, Status
- Fetches all registered members via `GET /api/sheriff/user`

### Authentication System
- **Login modal** — tabbed (Log In / Sign Up), dark themed
- **Login form:** username + password
- **Signup form:** full name, username, badge/sheriff ID, email, rank (5 options), station (12 options), phone, password (min 8 chars)
- **Session persistence:** JWT cookie checked on page load via `/api/sheriff/id`
- **Logout:** clears cookie, resets UI to logged-out state
- **User panel:** click username chip to see badge, rank, station, admin toggle, logout

### AI Chatbot
- Floating gold trigger button (bottom-right)
- Chat window: header, scrollable message area, text input + send button
- Bot greeting on open
- Sends messages to `POST /api/sheriff/chat` with conversation history (last 10 messages)
- Typing indicator animation while waiting for Claude response
- Fallback message if API is unreachable

### Footer
- 3-column layout: DSA branding + address, Navigate links, Support links
- Copyright notice

### UI Polish (Latest Updates)
- Gold gradient section dividers between every major section
- Scroll-to-top button (appears after 400px scroll)
- Active nav link highlighting based on scroll position
- Nav link grouping with vertical separators
- Full-screen mobile overlay menu with auto-close on tap
- Click-away handlers to close dropdowns

---

## Visual Assets Used

All 11 custom images in `images/dsa/`:

| Image | Where Used |
|-------|-----------|
| `dsa-logo.png` | Header, hero, about mission card, footer |
| `store-uniforms.jpg` | Hero background overlay |
| `board-portrait.png` | News card, about leadership card, contact photo |
| `golf-tournament-photo.png` | News card |
| `golf-tournament-flyer.png` | Events calendar detail |
| `silver-star-newsletter.jpg` | News card, newsletters detail panel |
| `memorial-line-of-duty.png` | About history card, events calendar |
| `store-interior.jpg` | Store hero image |
| `store-relaunch-flyer.png` | Store additional image |
| `staff-photo-1.png` | Contact section |
| `staff-photo-2.png` | Contact section |

---

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/sheriff/authenticate` | POST | Login — validates credentials, returns JWT cookie |
| `/api/sheriff/authenticate` | DELETE | Logout — clears `jwt_sheriff` cookie |
| `/api/sheriff/id` | GET | Get current authenticated user's full profile |
| `/api/sheriff/user` | POST | Signup — creates new sheriff with validation |
| `/api/sheriff/user` | GET | List all members (admin only) |
| `/api/sheriff/user` | PUT | Update profile (admin: anyone; member: self only) |
| `/api/sheriff/user` | DELETE | Delete member (admin only) |
| `/api/sheriff/chat` | POST | AI chatbot — sends message + history to Claude API |

---

## Database Schema (6 Tables)

- **sheriff_users** — id, name, uid, sheriff_id, email, password (hashed), rank, station, phone, role, status, years_of_service, date_of_hire, date_of_birth, specialization, bio
- **sheriff_training** — course_name, institution, hours, completion_date, score, category
- **sheriff_certifications** — cert_name, issuing_body, issue_date, expiry_date, cert_number, status
- **sheriff_commendations** — title, description, date_awarded, awarded_by, type
- **sheriff_emergency_contacts** — contact_name, relationship, phone, email, is_primary
- **sheriff_assignments** — station, unit, rank_at_time, start_date, end_date, notes

All related tables have foreign keys to `sheriff_users.id`.

---

## Deployment Architecture

```
GitHub Pages (frontend)              AWS EC2 (backend)
dsasd.opencodingsociety.com    -->   sheriff.opencodingsociety.com
    |                                     |
    | HTTPS fetch() with                  | NGINX reverse proxy
    | credentials: 'include'              | (port 80 -> localhost:8325)
    |                                     |
    +--- JWT cookie on ------------------>+ Flask app in Docker
         .opencodingsociety.com           | (MySQL + Claude API)
```

- **CORS:** Backend allows `https://dsasd.opencodingsociety.com`
- **Cookies:** `jwt_sheriff` set on `.opencodingsociety.com`, `SameSite=None`, `Secure=True`, `HttpOnly=True`
- **SSL:** Certbot / Let's Encrypt for both subdomains

---

## Summary

- **Static to full-stack** — WordPress CMS replaced with custom Flask API + Jekyll frontend
- **No auth to complete auth** — JWT login, signup, sessions, role-based admin
- **Multi-page to single-page** — smooth scroll, sticky nav, zero reloads
- **No interactivity to 3 game modes** — canvas game, quiz, MTU lab
- **No AI to AI chatbot** — Claude-powered FAQ assistant
- **Basic to modern UI** — dark navy/gold, glassmorphism, responsive mobile menu
- **No data to 6 DB tables** — full personnel tracking with training, certs, commendations
- **No career tools to gamified Rank Pathway** — personalized quiz, timeline, interactive checklists
- **Single page to multi-page** — dedicated DSA Info sub-page at `/sheriff/info` with full org details
- **11 custom images** across hero, news, about, store, events, and contact
- **2 pages** — main portal + DSA info page, linked with minimal clicks

<p style="text-align:center;color:#475569;font-size:0.8rem;margin-top:40px">Published March 31, 2026 &mdash; <a href="{{ site.baseurl }}/sheriff/">Visit the DSA Portal</a></p>

</div>
