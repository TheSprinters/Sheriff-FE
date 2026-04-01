---
layout: aesthetihawk
title: "DSA Sheriff Portal: Site Redesign & Improvements"
description: A concise overview of how we redesigned the Deputy Sheriffs' Association website from the original dsasd.org into a modern, full-stack single-page application.
permalink: /sheriff/blog
comments: false
---

<style>
  .blog-wrap { max-width: 860px; margin: 0 auto; padding: 24px; }
  .blog-wrap h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
  .blog-wrap .subtitle { color: #64748b; font-size: 1rem; margin-bottom: 32px; }
  .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0; }
  .compare-card { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 20px; }
  .compare-card h3 { font-size: 1rem; margin-bottom: 12px; }
  .compare-card.original h3 { color: #94a3b8; }
  .compare-card.updated h3 { color: #fbbf24; }
  .compare-card ul { padding-left: 18px; margin: 0; }
  .compare-card li { font-size: 0.88rem; color: #cbd5e1; margin-bottom: 6px; line-height: 1.5; }
  .improvement-section { margin: 36px 0; }
  .improvement-section h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.15); padding-bottom: 8px; margin-bottom: 16px; }
  .feature-row { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 18px; }
  .feature-icon { width: 44px; height: 44px; background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
  .feature-body h4 { font-size: 0.95rem; color: #e2e8f0; margin-bottom: 4px; }
  .feature-body p { font-size: 0.85rem; color: #94a3b8; line-height: 1.6; }
  .img-showcase { border-radius: 12px; overflow: hidden; margin: 20px 0; border: 1px solid #1e3352; }
  .img-showcase img { width: 100%; display: block; }
  .img-caption { font-size: 0.75rem; color: #475569; text-align: center; padding: 8px; background: #0f2040; }
  .stat-bar { display: flex; gap: 16px; flex-wrap: wrap; margin: 20px 0; }
  .stat-item { flex: 1; min-width: 140px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 16px; text-align: center; }
  .stat-item .num { font-size: 1.8rem; font-weight: 800; color: #fbbf24; }
  .stat-item .label { font-size: 0.72rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
  .tech-stack { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0; }
  .tech-chip { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); border-radius: 8px; padding: 10px 14px; text-align: center; font-size: 0.82rem; color: #93c5fd; font-weight: 600; }
  .timeline { border-left: 2px solid rgba(251,191,36,0.2); padding-left: 20px; margin: 16px 0; }
  .timeline-item { margin-bottom: 16px; }
  .timeline-item::before { content: ''; display: inline-block; width: 10px; height: 10px; background: #fbbf24; border-radius: 50%; margin-left: -25px; margin-right: 10px; }
  .timeline-item h4 { display: inline; font-size: 0.88rem; color: #e2e8f0; }
  .timeline-item p { font-size: 0.82rem; color: #94a3b8; margin-top: 4px; line-height: 1.5; }
  @media (max-width: 700px) {
    .compare-grid, .tech-stack { grid-template-columns: 1fr; }
    .feature-row { flex-direction: column; }
  }
</style>

<div class="blog-wrap">

# DSA Sheriff Portal: Site Redesign

<p class="subtitle">How we rebuilt dsasd.org as a modern full-stack web application with JWT authentication, an AI chatbot, interactive games, and a single-page experience.</p>

---

## At a Glance: Original vs. Updated

<div class="compare-grid">
  <div class="compare-card original">
    <h3>Original dsasd.org</h3>
    <ul>
      <li>WordPress + Divi theme (static CMS)</li>
      <li>Multi-page navigation (each click loads a new page)</li>
      <li>No member login or authentication</li>
      <li>No interactive features</li>
      <li>Standard contact form</li>
      <li>No API backend</li>
      <li>Blue/white color scheme, Open Sans font</li>
      <li>Desktop-first, basic responsive</li>
    </ul>
  </div>
  <div class="compare-card updated">
    <h3>Updated DSA Portal</h3>
    <ul>
      <li>Custom-built single-page app (HTML/CSS/JS + Flask API)</li>
      <li>Smooth scroll navigation (zero page reloads)</li>
      <li>Full JWT authentication with role-based access</li>
      <li>AI-powered FAQ chatbot (Claude API)</li>
      <li>Interactive Net Patrol game, quiz, and MTU lab</li>
      <li>Full REST API backend with MySQL</li>
      <li>Dark navy/gold theme, modern glassmorphism</li>
      <li>Mobile-first with dedicated mobile menu</li>
    </ul>
  </div>
</div>

<div class="stat-bar">
  <div class="stat-item"><div class="num">8</div><div class="label">Sections</div></div>
  <div class="stat-item"><div class="num">6</div><div class="label">API Endpoints</div></div>
  <div class="stat-item"><div class="num">3</div><div class="label">Game Modes</div></div>
  <div class="stat-item"><div class="num">1</div><div class="label">AI Chatbot</div></div>
</div>

---

<div class="improvement-section">

## Navigation & Layout

<div class="feature-row">
  <div class="feature-icon">&#128736;</div>
  <div class="feature-body">
    <h4>Single-Page Smooth Scrolling</h4>
    <p><strong>Before:</strong> Each section (About, Events, Store, Contact) was a separate WordPress page requiring a full page load. <strong>After:</strong> All content lives on one page with smooth scroll navigation. Click any nav link and the page scrolls instantly to that section with no reload.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128241;</div>
  <div class="feature-body">
    <h4>Sticky Header with Active Highlighting</h4>
    <p><strong>Before:</strong> Standard WordPress header that scrolled off-screen. <strong>After:</strong> Sticky frosted-glass header stays visible at all times. The active section highlights in the nav as you scroll, so you always know where you are on the page.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128197;</div>
  <div class="feature-body">
    <h4>Visual Section Dividers</h4>
    <p><strong>Before:</strong> Sections blended together with no clear boundaries. <strong>After:</strong> Subtle gold gradient dividers separate each section, making the page scannable and organized.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128246;</div>
  <div class="feature-body">
    <h4>Mobile-First Menu</h4>
    <p><strong>Before:</strong> Basic Divi hamburger menu with limited styling. <strong>After:</strong> Full-screen mobile overlay menu with large tap targets, grouped link sections, and auto-close on navigation.</p>
  </div>
</div>

</div>

---

<div class="improvement-section">

## Authentication & Admin System

<div class="feature-row">
  <div class="feature-icon">&#128274;</div>
  <div class="feature-body">
    <h4>JWT-Based Member Login</h4>
    <p><strong>Before:</strong> No login system at all &mdash; dsasd.org is purely informational. <strong>After:</strong> Full signup/login with JWT tokens stored in secure HTTP-only cookies. Members authenticate with username and password, and the session persists across pages via the <code>.opencodingsociety.com</code> cookie domain.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128100;</div>
  <div class="feature-body">
    <h4>Role-Based Access (Admin vs. Member)</h4>
    <p><strong>Before:</strong> No user roles. <strong>After:</strong> Admin users can view all registered members in a table, update or delete accounts. Regular members can only view and update their own profile. The admin panel button only appears for admin-role users.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128221;</div>
  <div class="feature-body">
    <h4>Rich User Profiles</h4>
    <p><strong>Before:</strong> No user data. <strong>After:</strong> Each member has: name, username, badge/sheriff ID, email, rank (Deputy through Captain), station assignment, phone, role, status, years of service, date of hire, specialization, and bio. Related tables track training records, certifications, commendations, emergency contacts, and assignment history.</p>
  </div>
</div>

</div>

---

<div class="improvement-section">

## Interactive Features

<div class="feature-row">
  <div class="feature-icon">&#129302;</div>
  <div class="feature-body">
    <h4>AI-Powered FAQ Chatbot</h4>
    <p><strong>Before:</strong> Static FAQ page or none. <strong>After:</strong> A floating chatbot button opens an AI assistant powered by Claude. It answers questions about membership, benefits, legal defense, events, and the store in real time. Chat history is maintained during the session.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#127918;</div>
  <div class="feature-body">
    <h4>Net Patrol Game (College Board Unit 4)</h4>
    <p><strong>Before:</strong> No interactive or educational content. <strong>After:</strong> A full canvas-based game where the player moves packets through OSI layers. Includes a player character, an NPC (Router Ron), and an AI NPC (Hacker H4X). Teaches networking concepts through gameplay.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#9997;</div>
  <div class="feature-body">
    <h4>Pop Quiz & MTU Lab</h4>
    <p><strong>Before:</strong> N/A. <strong>After:</strong> A tabbed quiz tests OSI vs TCP/IP knowledge with instant feedback. The MTU Explorer lab lets users adjust payload sizes with a slider and visualize Ethernet frame encapsulation in real time.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128197;</div>
  <div class="feature-body">
    <h4>Interactive Event Calendar</h4>
    <p><strong>Before:</strong> Basic event list or separate calendar page. <strong>After:</strong> Full monthly calendar grid with clickable days, event badges, RSVP buttons, and month navigation. Events display inline with details and location info.</p>
  </div>
</div>

</div>

---

<div class="improvement-section">

## Content Sections Compared

| Section | Original (dsasd.org) | Updated Portal |
|---------|---------------------|----------------|
| **Resources** | Separate pages for each topic | Expandable inline tile panels (zero page loads) |
| **News** | WordPress blog posts | Card grid with tags (Announcement, Event, Benefit) and images |
| **Events** | Basic list or external link | Interactive calendar with RSVP and event details |
| **About** | Separate About page | Grid cards with images: Mission, Stations, Leadership, History |
| **Store** | Possibly external link | Visual product grid with prices, images, and descriptions |
| **FAQ** | Static page or none | Searchable accordion with category filters + AI chatbot |
| **Contact** | WordPress form | Contact cards with hours, phone, email, and staff photos |
| **Search** | WordPress search | Real-time in-header search with dropdown results |

</div>

---

<div class="improvement-section">

## Tech Stack

<div class="tech-stack">
  <div class="tech-chip">Flask (Python Backend)</div>
  <div class="tech-chip">Jekyll (Static Frontend)</div>
  <div class="tech-chip">MySQL (Production DB)</div>
  <div class="tech-chip">JWT Authentication</div>
  <div class="tech-chip">Claude AI API</div>
  <div class="tech-chip">NGINX Reverse Proxy</div>
  <div class="tech-chip">AWS EC2 + Docker</div>
  <div class="tech-chip">CORS + Secure Cookies</div>
  <div class="tech-chip">Canvas Game Engine</div>
</div>

**Frontend:** `dsasd.opencodingsociety.com` &mdash; Jekyll static site on GitHub Pages

**Backend:** `sheriff.opencodingsociety.com` &mdash; Flask REST API on AWS EC2 via Docker + NGINX

</div>

---

<div class="improvement-section">

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/sheriff/authenticate` | POST | Login (returns JWT cookie) |
| `/api/sheriff/authenticate` | DELETE | Logout (clears cookie) |
| `/api/sheriff/id` | GET | Get current user session |
| `/api/sheriff/user` | POST | Sign up new member |
| `/api/sheriff/user` | GET | List all members (admin only) |
| `/api/sheriff/user` | PUT/DELETE | Update/delete members |
| `/api/sheriff/chat` | POST | AI chatbot conversation |

</div>

---

<div class="improvement-section">

## Design Choices

<div class="feature-row">
  <div class="feature-icon">&#127912;</div>
  <div class="feature-body">
    <h4>Dark Navy + Gold Theme</h4>
    <p>The original site uses a standard blue/white WordPress theme. Our redesign uses a dark navy background (<code>#0b1a2e</code>) with gold accents (<code>#fbbf24</code>) to reflect a professional law enforcement aesthetic. The glassmorphism header with backdrop blur gives a modern, polished feel.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128196;</div>
  <div class="feature-body">
    <h4>Single-Page Architecture</h4>
    <p>Rather than the multi-page WordPress approach, we consolidated everything into one scrollable page. This eliminates load times between sections and keeps users engaged without waiting for page transitions.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-icon">&#128272;</div>
  <div class="feature-body">
    <h4>Cross-Subdomain Auth</h4>
    <p>Since the frontend and backend live on different subdomains, cookies are set on <code>.opencodingsociety.com</code> with <code>SameSite=None</code> and <code>Secure=True</code>, enabling seamless authentication across the full-stack deployment.</p>
  </div>
</div>

</div>

---

<div class="improvement-section">

## Summary of Key Improvements

- **From static to dynamic** &mdash; WordPress CMS replaced with a custom full-stack app
- **From no auth to full auth** &mdash; JWT login, signup, role-based admin access
- **From multi-page to single-page** &mdash; Smooth scrolling, sticky nav, zero reloads
- **From no interactivity to rich interactivity** &mdash; AI chatbot, canvas game, quiz, MTU lab, event calendar
- **From basic to modern design** &mdash; Dark theme, glassmorphism, responsive mobile menu
- **From no API to full REST API** &mdash; 7 endpoints covering auth, CRUD, and AI chat
- **From no data model to comprehensive data** &mdash; 6 database tables tracking member info, training, certs, commendations, contacts, and assignments

</div>

<p style="text-align:center;color:#475569;font-size:0.8rem;margin-top:40px">Published March 31, 2026 &mdash; <a href="{{ site.baseurl }}/sheriff/">Visit the DSA Portal</a></p>

</div>
