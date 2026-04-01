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

  .cg { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
  .cc { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .cc h3 { margin-top: 0; }
  .cc.old h3 { color: #94a3b8; }
  .cc.new h3 { color: #fbbf24; }
  .cc ul { margin-bottom: 0; }

  .sb { display: flex; gap: 14px; flex-wrap: wrap; margin: 18px 0; }
  .si { flex: 1; min-width: 120px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; text-align: center; }
  .si .n { font-size: 1.7rem; font-weight: 800; color: #fbbf24; }
  .si .l { font-size: 0.68rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }

  .ts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 14px 0; }
  .tc { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); border-radius: 8px; padding: 9px 12px; text-align: center; font-size: 0.8rem; color: #93c5fd; font-weight: 600; }

  .tg { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 14px 0; }
  .tm { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .tm h4 { font-size: 0.95rem; color: #fbbf24; margin: 0 0 2px; }
  .tm .role { font-size: 0.72rem; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
  .tm ul { margin-bottom: 0; }
  .tm li { font-size: 0.82rem; }

  .isg { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0; }
  .isg.solo { grid-template-columns: 1fr; }
  .isc { border-radius: 10px; overflow: hidden; border: 1px solid #1e3352; }
  .isc img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .isc .cap { font-size: 0.72rem; color: #475569; text-align: center; padding: 6px; background: #0f2040; }

  .fix-tbl { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 0.82rem; }
  .fix-tbl th { text-align: left; color: #fbbf24; font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.5px; padding: 8px 10px; border-bottom: 1px solid #1e3352; }
  .fix-tbl td { padding: 8px 10px; color: #cbd5e1; border-bottom: 1px solid rgba(30,51,82,0.5); vertical-align: top; }
  .fix-tbl td:first-child { color: #ef4444; font-weight: 600; }
  .fix-tbl td:nth-child(2) { color: #34d399; }
  .fix-tbl td:nth-child(3) { color: #94a3b8; font-size: 0.78rem; }

  .dep-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 14px 0; }
  .dep-card { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 16px; }
  .dep-card h4 { font-size: 0.82rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px; }
  .dep-card p, .dep-card li { font-size: 0.82rem; color: #94a3b8; }

  @media (max-width: 700px) {
    .cg, .ts, .tg, .isg, .dep-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="bw">

# DSA Sheriff Portal — Capstone Redesign

<p class="sub">Rebuilt <a href="https://dsasd.org" target="_blank">dsasd.org</a> as a full-stack single-page app with authentication, AI chatbot, interactive games, and a modern dark UI. <br>Live at: <a href="https://dsasd.opencodingsociety.com" target="_blank">dsasd.opencodingsociety.com</a></p>

<div class="sb">
  <div class="si"><div class="n">10</div><div class="l">Sections</div></div>
  <div class="si"><div class="n">7</div><div class="l">API Endpoints</div></div>
  <div class="si"><div class="n">6</div><div class="l">DB Tables</div></div>
  <div class="si"><div class="n">3</div><div class="l">Game Modes</div></div>
  <div class="si"><div class="n">3</div><div class="l">Pages</div></div>
  <div class="si"><div class="n">11</div><div class="l">Images</div></div>
</div>

---

## Team & Work Split

<div class="tg">
  <div class="tm">
    <h4>Neil</h4>
    <div class="role">Frontend Lead</div>
    <ul>
      <li>Entire single-page portal UI (HTML/CSS/JS)</li>
      <li>Hero, nav, sticky glassmorphism header</li>
      <li>8 resource tiles with inline detail panels</li>
      <li>News cards, About grid, Store product grid</li>
      <li>FAQ accordion + search/filter system</li>
      <li>Login/signup modal, user dropdown panel</li>
      <li>Real-time search bar with instant results</li>
      <li>Mobile overlay menu + responsive breakpoints</li>
      <li>Net Patrol canvas game, Pop Quiz, MTU Lab</li>
      <li>Rank Pathway Guide (4-step quiz, checklists)</li>
      <li>DSA Info sub-page + Games page</li>
      <li>All 11 custom images and visual assets</li>
    </ul>
  </div>
  <div class="tm">
    <h4>Akhil</h4>
    <div class="role">Scrum Master / Backend Lead</div>
    <ul>
      <li>Sprint planning, stand-ups, task tracking</li>
      <li>6-table data model (users, training, certs, commendations, contacts, assignments)</li>
      <li>7 REST API endpoints (auth, CRUD, chat)</li>
      <li>JWT auth with secure cookie handling</li>
      <li>Role-based access (Admin vs Member)</li>
      <li>Admin panel API (list, update, delete)</li>
      <li>Input validation and error handling</li>
      <li>Seed data (4 default users + related records)</li>
      <li>OpenAI chatbot integration (sheriff_chat API)</li>
      <li>DB config: SQLite (dev) / MySQL (prod)</li>
    </ul>
  </div>
  <div class="tm">
    <h4>Moiz</h4>
    <div class="role">Deployer / DevOps</div>
    <ul>
      <li>AWS EC2 instance provisioning</li>
      <li>Docker containerization of Flask backend</li>
      <li>NGINX reverse proxy (port 80 &rarr; 8325)</li>
      <li>SSL certs via Certbot / Let's Encrypt</li>
      <li>CORS config for cross-subdomain auth</li>
      <li>Cookie domain setup (<code>.opencodingsociety.com</code>)</li>
      <li>Frontend deploy to GitHub Pages</li>
      <li>DNS: two subdomains on <code>opencodingsociety.com</code></li>
      <li>Env vars, DB migrations, prod debugging</li>
      <li>NGINX preflight fix (CORS OPTIONS headers)</li>
    </ul>
  </div>
</div>

---

## What We Changed from dsasd.org

<div class="cg">
  <div class="cc old">
    <h3>Original dsasd.org</h3>
    <ul>
      <li>WordPress + Divi theme (static CMS pages)</li>
      <li>Multi-page &mdash; every click loads a new page</li>
      <li>No member login or authentication</li>
      <li>No interactive features or games</li>
      <li>No API or database backend</li>
      <li>Standard contact form (no staff photos)</li>
      <li>Blue/white color scheme, generic fonts</li>
      <li>Desktop-first layout, basic responsive</li>
      <li>No search (just WordPress default)</li>
      <li>No chatbot or AI features</li>
      <li>No career tools or rank progression</li>
      <li>Static member benefits page (text only)</li>
      <li>No events calendar (just a page with text dates)</li>
      <li>No store (redirects to external link)</li>
      <li>No admin panel for managing members</li>
    </ul>
  </div>
  <div class="cc new">
    <h3>Updated DSA Portal</h3>
    <ul>
      <li>Custom SPA (HTML/CSS/JS + Flask REST API)</li>
      <li>Smooth scroll nav &mdash; zero page reloads</li>
      <li>Full JWT auth: signup, login, logout, sessions</li>
      <li>3 game modes: canvas game, quiz, MTU lab</li>
      <li>7 REST endpoints + MySQL (6 tables)</li>
      <li>Contact cards with staff photos + hours</li>
      <li>Dark navy/gold theme, glassmorphism header</li>
      <li>Mobile-first with full-screen overlay menu</li>
      <li>Real-time search bar with instant dropdown</li>
      <li>AI chatbot (OpenAI GPT-4o-mini)</li>
      <li>Gamified Rank Pathway with personalized plan</li>
      <li>8 resource tiles with expandable detail panels</li>
      <li>Interactive monthly calendar with RSVP buttons</li>
      <li>Built-in product grid (8 items with prices)</li>
      <li>Admin panel: user table, edit, delete</li>
    </ul>
  </div>
</div>

### Specific Feature Changes (dsasd.org &rarr; Our Portal)

- **Navigation:** dsasd.org uses a top menu bar with 8 links that each load a full page &rarr; we use a sticky header with 10 section links that smooth-scroll on one page
- **Member Benefits:** dsasd.org has a single text page listing benefits &rarr; we have 8 clickable tiles that expand inline with full descriptions and contact callouts
- **Events:** dsasd.org has a static text list of upcoming dates &rarr; we built a full calendar grid with clickable days, event detail cards, and RSVP buttons
- **Store:** dsasd.org links out to an external store page &rarr; we have an in-page product grid with 8 items, prices, and store photos
- **About/History:** dsasd.org has a plain "About Us" text page &rarr; we have a 4-card grid (Mission, Stations, Leadership, History) with images
- **Contact:** dsasd.org uses a standard WordPress contact form &rarr; we show 3 staff photos, office hours, and direct contact cards (visit/call/email)
- **Mobile:** dsasd.org uses basic WordPress responsive breakpoints &rarr; we have a purpose-built full-screen overlay menu with grouped links
- **Search:** dsasd.org has no meaningful search &rarr; we have a real-time search bar that matches across all sections, FAQ, and sub-pages
- **Newsletter:** dsasd.org has a newsletter signup form &rarr; we show 3 recent Silver Star newsletter issues with expandable previews
- **Legal/Wellness:** dsasd.org has separate pages with text descriptions &rarr; we have resource tiles with inline detail panels and direct contact CTAs

---

## Bugs Fixed & Problems Solved

<table class="fix-tbl">
  <tr><th>Problem</th><th>Fix</th><th>Tech Used</th></tr>
  <tr>
    <td>404 on all API calls (deployed)</td>
    <td>Frontend was calling <code>flask.opencodingsociety.com</code> instead of <code>sheriff.opencodingsociety.com</code></td>
    <td>JavaScript <code>fetch()</code> config</td>
  </tr>
  <tr>
    <td>CORS preflight blocked signup/login</td>
    <td>NGINX OPTIONS block was missing <code>Allow-Origin</code> and <code>Allow-Credentials</code> headers</td>
    <td>NGINX config, Flask-CORS</td>
  </tr>
  <tr>
    <td>CORS typo in Flask config</td>
    <td><code>sheriff.opencoding.society.com</code> had an extra dot &mdash; fixed to <code>sheriff.opencodingsociety.com</code></td>
    <td>Flask-CORS origins list</td>
  </tr>
  <tr>
    <td>Frontend origin not in CORS whitelist</td>
    <td>Added <code>dsasd.opencodingsociety.com</code> to allowed origins</td>
    <td>Flask-CORS, NGINX</td>
  </tr>
  <tr>
    <td>Wrong port in dev config</td>
    <td>Changed from <code>8587</code> to <code>8325</code></td>
    <td>Flask config, NGINX proxy_pass</td>
  </tr>
  <tr>
    <td>JWT cookie not sent cross-subdomain</td>
    <td>Set cookie domain to <code>.opencodingsociety.com</code>, <code>SameSite=None</code>, <code>Secure=True</code></td>
    <td>PyJWT, Flask response headers</td>
  </tr>
  <tr>
    <td>Mobile menu not opening</td>
    <td>Old toggle targeted wrong element &mdash; rebuilt as full-screen overlay with proper ID</td>
    <td>HTML/CSS/JS</td>
  </tr>
  <tr>
    <td>Chatbot API key swap</td>
    <td>Migrated from Claude API to OpenAI API (different auth headers, request/response format)</td>
    <td>OpenAI API, Flask</td>
  </tr>
</table>

---

## Tech Stack &mdash; What Each Tool Does

<div class="ts">
  <div class="tc">Python / Flask</div>
  <div class="tc">Jekyll (GitHub Pages)</div>
  <div class="tc">MySQL + SQLAlchemy</div>
  <div class="tc">JWT (PyJWT)</div>
  <div class="tc">OpenAI API</div>
  <div class="tc">NGINX Reverse Proxy</div>
  <div class="tc">AWS EC2 + Docker</div>
  <div class="tc">CORS + Secure Cookies</div>
  <div class="tc">HTML5 Canvas</div>
</div>

| Tool | Role in This Project |
|------|---------------------|
| **Flask** | REST API server &mdash; handles all 7 endpoints (auth, CRUD, chat) |
| **Jekyll** | Static site generator &mdash; builds the frontend and deploys to GitHub Pages |
| **MySQL** | Production database &mdash; stores 6 tables of sheriff user data |
| **SQLAlchemy** | ORM &mdash; defines models, relationships, and migrations |
| **PyJWT** | Generates and verifies JWT tokens for login sessions |
| **OpenAI API** | Powers the FAQ chatbot via GPT-4o-mini |
| **NGINX** | Reverse proxy &mdash; routes port 80/443 traffic to Flask on port 8325, handles CORS preflight |
| **Docker** | Containerizes the Flask app for consistent deployment on EC2 |
| **AWS EC2** | Cloud server hosting the backend + database |
| **Certbot** | Provisions free SSL/TLS certificates (HTTPS) via Let's Encrypt |
| **Flask-CORS** | Manages cross-origin headers so the frontend can call the backend |
| **HTML5 Canvas** | Renders the Net Patrol game (player, NPCs, packets, OSI layers) |
| **JavaScript** | All frontend logic: auth, search, calendar, games, pathway quiz, chatbot UI |
| **CSS** | Dark navy/gold theme, glassmorphism, responsive layout, animations |

---

## Deployment &mdash; How We Shipped It

### Architecture

```
 GitHub Pages (FE)                    AWS EC2 (BE)
 dsasd.opencodingsociety.com          sheriff.opencodingsociety.com
         |                                    |
         | JS fetch() with                    | NGINX (port 80/443)
         | credentials: 'include'             |     |
         |                                    |     v
         +--- JWT cookie on ----------------->| localhost:8325
              .opencodingsociety.com          | Flask in Docker
                                              | (MySQL + OpenAI)
```

<div class="dep-grid">
  <div class="dep-card">
    <h4>Frontend (GitHub Pages)</h4>
    <ul>
      <li>Jekyll builds static HTML/CSS/JS</li>
      <li>Pushed to GitHub &rarr; auto-deploys</li>
      <li>Custom domain: <code>dsasd.opencodingsociety.com</code></li>
      <li>HTTPS via GitHub's built-in SSL</li>
      <li>3 pages: portal (<code>/</code>), info (<code>/sheriff/info</code>), games (<code>/games</code>)</li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>Backend (AWS EC2 + Docker)</h4>
    <ul>
      <li>Flask app runs in Docker container</li>
      <li>Listens on <strong>port 8325</strong></li>
      <li>MySQL database inside the container</li>
      <li>Environment vars: <code>OPENAI_API_KEY</code>, <code>SECRET_KEY</code>, DB creds</li>
      <li><code>.env</code> file excluded from git via <code>.gitignore</code></li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>NGINX Reverse Proxy</h4>
    <ul>
      <li>Listens on port 80 and 443 (HTTP + HTTPS)</li>
      <li>Proxies all traffic to <code>localhost:8325</code></li>
      <li>Adds CORS headers (<code>Allow-Origin</code>, <code>Allow-Credentials</code>)</li>
      <li>Handles OPTIONS preflight with 204 response</li>
      <li>Server name: <code>sheriff.opencodingsociety.com</code></li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>SSL &amp; Security</h4>
    <ul>
      <li>Certbot / Let's Encrypt for backend HTTPS</li>
      <li>JWT cookie: <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite=None</code></li>
      <li>Cookie domain: <code>.opencodingsociety.com</code></li>
      <li>Passwords hashed with Werkzeug</li>
      <li>API keys stored in env vars, never in code</li>
    </ul>
  </div>
</div>

### Deployment Steps (What Moiz Did)

1. **Provisioned EC2** &mdash; Ubuntu instance on AWS, opened ports 80/443/8325
2. **Installed Docker** &mdash; built the Flask app image, ran it on port 8325
3. **Configured NGINX** &mdash; created site config proxying to `localhost:8325`, added CORS headers for preflight
4. **SSL with Certbot** &mdash; ran `certbot --nginx` to auto-provision HTTPS for `sheriff.opencodingsociety.com`
5. **DNS setup** &mdash; pointed `sheriff.opencodingsociety.com` to EC2 IP, `dsasd.opencodingsociety.com` to GitHub Pages
6. **Frontend deploy** &mdash; pushed Jekyll site to GitHub, configured custom domain in repo settings
7. **Env vars** &mdash; created `.env` on EC2 with `OPENAI_API_KEY`, `SECRET_KEY`, `MYSQL_PASSWORD`, `IS_PRODUCTION=true`
8. **Tested cross-origin** &mdash; verified `fetch()` calls from frontend reach backend with cookies attached
9. **Fixed CORS bugs** &mdash; corrected origin typos, added missing preflight headers in NGINX, reloaded

---

## All Features

### Header & Navigation
- Sticky frosted-glass header (`backdrop-filter: blur`)
- 10 nav links with vertical separators
- Real-time search bar (2+ chars triggers dropdown)
- Login/Join buttons swap to user chip when authenticated
- Full-screen mobile overlay menu

### Hero Section
- Background image at 12% opacity + radial gold glow
- Stats bar: 4,229 Members / 70+ Years / 12 Stations / 24/7 Support
- 3 CTA buttons: Explore Resources, Learn About DSA, Full DSA Info Page

### Member Resources
- 8 clickable tiles (Benefits, Legal, Wellness, Forms, Events, Store, Newsletters, PAC)
- Each opens an inline detail panel with descriptions and contact info
- Newsletter panel shows 3 recent Silver Star issues

### News, Events, About, Store
- **News:** 3-column cards with color-coded tags (Announcement, Event, Benefit)
- **Events:** Interactive monthly calendar with clickable days, event cards, RSVP
- **About:** 4 image cards (Mission, Stations, Leadership, History)
- **Store:** 8-item product grid with prices + store photos

### Games (Separate Page at `/games`)
- **Net Patrol Mission** &mdash; HTML5 Canvas game with Player, NPC (Router Ron), AI NPC (Hacker H4X)
- **Pop Quiz Review** &mdash; 12-question pool on OSI, TCP/IP, MTU, deployment
- **MTU Explorer Lab** &mdash; interactive payload slider with frame visualization

### FAQ + AI Chatbot
- 9 accordion Q&As with search + 6 category filters
- Floating chatbot (bottom-right) powered by OpenAI GPT-4o-mini
- Sends conversation history (last 10 messages) for context

### Rank Pathway Guide
- 4-step quiz tied to user's logged-in rank
- Auto-detects current rank, shows eligible promotions
- Generates personalized timeline, requirements checklist, and activity plans
- Covers all 10 rank combinations (Deputy&rarr;Corporal through Lieutenant&rarr;Captain)

### DSA Info Page (`/sheriff/info`)
- Full org structure, rank table, all stations/facilities
- History timeline (1955&ndash;present), member benefits, contact bar

### Auth & Admin
- Login/signup modal with tabbed forms
- JWT session persistence via cookie
- Admin panel: full member table with edit/delete

---

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/sheriff/authenticate` | POST | Login &mdash; returns JWT cookie |
| `/api/sheriff/authenticate` | DELETE | Logout &mdash; clears cookie |
| `/api/sheriff/id` | GET | Get current user's profile |
| `/api/sheriff/user` | POST | Signup with validation |
| `/api/sheriff/user` | GET | List all members (admin) |
| `/api/sheriff/user` | PUT | Update profile |
| `/api/sheriff/user` | DELETE | Delete member (admin) |
| `/api/sheriff/chat` | POST | AI chatbot request |

---

## Database (6 Tables)

- **sheriff_users** &mdash; name, uid, sheriff_id, email, password (hashed), rank, station, phone, role, status, years_of_service, specialization
- **sheriff_training** &mdash; course_name, institution, hours, completion_date, score
- **sheriff_certifications** &mdash; cert_name, issuing_body, issue_date, expiry_date, status
- **sheriff_commendations** &mdash; title, description, date_awarded, awarded_by
- **sheriff_emergency_contacts** &mdash; contact_name, relationship, phone, email
- **sheriff_assignments** &mdash; station, unit, rank_at_time, start_date, end_date

All tables link to `sheriff_users.id` via foreign keys.

---

## Summary

- **Static CMS &rarr; full-stack SPA** &mdash; WordPress replaced with Flask API + Jekyll frontend
- **No auth &rarr; complete auth** &mdash; JWT login, signup, sessions, role-based admin
- **Multi-page &rarr; single-page** &mdash; smooth scroll, sticky nav, zero reloads
- **No interactivity &rarr; 3 game modes** &mdash; canvas game, quiz, MTU lab
- **No AI &rarr; AI chatbot** &mdash; OpenAI-powered FAQ assistant
- **Basic UI &rarr; modern dark theme** &mdash; navy/gold, glassmorphism, responsive mobile menu
- **No data &rarr; 6 DB tables** &mdash; full personnel tracking
- **No career tools &rarr; Rank Pathway** &mdash; personalized quiz, timeline, checklists
- **1 page &rarr; 3 pages** &mdash; portal + DSA info + games, minimal clicks
- **8 bugs fixed** &mdash; CORS, API URLs, cookie domain, NGINX preflight, mobile menu, API migration

<p style="text-align:center;color:#475569;font-size:0.8rem;margin-top:40px">Published March 31, 2026 &mdash; <a href="{{ site.baseurl }}/">Visit the DSA Portal</a></p>

</div>
