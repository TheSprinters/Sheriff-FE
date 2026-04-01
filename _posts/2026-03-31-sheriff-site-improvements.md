---
layout: aesthetihawk
title: "DSA Sheriff Portal — Capstone Redesign"
description: How our team rebuilt the Deputy Sheriffs' Association website from the original dsasd.org into a modern full-stack single-page application.
permalink: /capstone/dsa-redesign
comments: false
---

<style>
  /* ===== Base: override Tailwind preflight resets ===== */
  .bw { max-width: 880px; margin: 0 auto; padding: 24px; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #cbd5e1; line-height: 1.6; }
  .bw h1 { font-size: 2rem !important; font-weight: 800 !important; color: #e2e8f0 !important; margin: 0 0 6px !important; line-height: 1.3; }
  .bw .sub { color: #64748b; font-size: 0.95rem; margin-bottom: 28px; }
  .bw .sub a { color: #60a5fa; text-decoration: underline; }
  .bw h2 { font-size: 1.25rem !important; font-weight: 700 !important; color: #fbbf24 !important; border-bottom: 1px solid rgba(251,191,36,0.15); padding-bottom: 8px; margin: 32px 0 14px !important; }
  .bw h3 { font-size: 1.05rem !important; font-weight: 700 !important; color: #e2e8f0 !important; margin: 18px 0 8px !important; }
  .bw h4 { font-size: 0.95rem !important; font-weight: 700 !important; color: #fbbf24 !important; margin: 0 0 4px !important; }
  .bw ul { padding-left: 20px !important; margin: 6px 0 14px !important; list-style-type: disc !important; }
  .bw ol { padding-left: 20px !important; margin: 6px 0 14px !important; list-style-type: decimal !important; }
  .bw li { font-size: 0.86rem; color: #cbd5e1; margin-bottom: 5px; line-height: 1.55; display: list-item !important; }
  .bw p { font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin-bottom: 10px; }
  .bw strong, .bw b { color: #e2e8f0; font-weight: 700; }
  .bw em, .bw i { font-style: italic; }
  .bw a { color: #60a5fa; text-decoration: underline; }
  .bw code { background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-size: 0.82rem; color: #93c5fd; font-family: 'Consolas', 'Monaco', monospace; }
  .bw pre { background: #0d1727; border: 1px solid #1e3352; border-radius: 10px; padding: 16px; margin: 14px 0; overflow-x: auto; font-size: 0.8rem; line-height: 1.6; color: #94a3b8; white-space: pre; }
  .bw pre code { background: none; padding: 0; font-size: 0.8rem; color: #94a3b8; }
  .bw .divider { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(251,191,36,0.18), transparent); margin: 28px 0; }
  .bw img { max-width: 100%; height: auto; }

  /* ===== Tables ===== */
  .bw table { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 0.82rem; }
  .bw table th { text-align: left; color: #fbbf24; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 12px; border-bottom: 2px solid #1e3352; background: rgba(22,42,70,0.5); }
  .bw table td { padding: 10px 12px; color: #cbd5e1; border-bottom: 1px solid rgba(30,51,82,0.5); vertical-align: top; line-height: 1.5; }
  .bw table tr:hover td { background: rgba(255,255,255,0.02); }
  .bw table td strong, .bw table td b { color: #60a5fa; }

  /* ===== Bug fix table ===== */
  .fix-tbl td:first-child { color: #ef4444; font-weight: 600; }
  .fix-tbl td:nth-child(2) { color: #34d399; }
  .fix-tbl td:nth-child(3) { color: #94a3b8; font-size: 0.78rem; }

  /* ===== Stat bar ===== */
  .sb { display: flex; gap: 14px; flex-wrap: wrap; margin: 18px 0; }
  .si { flex: 1; min-width: 100px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; text-align: center; }
  .si .n { font-size: 1.7rem; font-weight: 800; color: #fbbf24; display: block; }
  .si .l { font-size: 0.68rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; display: block; margin-top: 2px; }

  /* ===== Comparison grid ===== */
  .cg { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
  .cc { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .cc h3 { margin-top: 0 !important; }
  .cc.old h3 { color: #94a3b8 !important; }
  .cc.new h3 { color: #fbbf24 !important; }
  .cc ul { margin-bottom: 0 !important; }

  /* ===== Tech stack chips ===== */
  .ts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 14px 0; }
  .tc { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); border-radius: 8px; padding: 9px 12px; text-align: center; font-size: 0.8rem; color: #93c5fd; font-weight: 600; }

  /* ===== Team grid ===== */
  .tg { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 14px 0; }
  .tm { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .tm h4 { font-size: 0.95rem !important; color: #fbbf24 !important; margin: 0 0 2px !important; }
  .tm .role { font-size: 0.72rem; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; display: block; }
  .tm ul { margin-bottom: 0 !important; }
  .tm li { font-size: 0.82rem; }

  /* ===== Deployment grid ===== */
  .dep-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 14px 0; }
  .dep-card { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 16px; }
  .dep-card h4 { font-size: 0.82rem !important; color: #fbbf24 !important; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px !important; }
  .dep-card ul { padding-left: 16px !important; margin: 0 !important; }
  .dep-card li { font-size: 0.82rem; color: #94a3b8; margin-bottom: 4px; }

  /* ===== Responsive ===== */
  @media (max-width: 700px) {
    .cg, .ts, .tg, .dep-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="bw">

<h1>DSA Sheriff Portal &mdash; Capstone Redesign</h1>

<p class="sub">Rebuilt <a href="https://dsasd.org" target="_blank">dsasd.org</a> as a full-stack single-page app with authentication, AI chatbot, interactive games, and a modern dark UI.<br>Live at: <a href="https://dsasd.opencodingsociety.com" target="_blank">dsasd.opencodingsociety.com</a></p>

<div class="sb">
  <div class="si"><span class="n">10</span><span class="l">Sections</span></div>
  <div class="si"><span class="n">7</span><span class="l">API Endpoints</span></div>
  <div class="si"><span class="n">6</span><span class="l">DB Tables</span></div>
  <div class="si"><span class="n">3</span><span class="l">Game Modes</span></div>
  <div class="si"><span class="n">3</span><span class="l">Pages</span></div>
  <div class="si"><span class="n">11</span><span class="l">Images</span></div>
</div>

<div class="divider"></div>

<h2>Team &amp; Work Split</h2>

<div class="tg">
  <div class="tm">
    <h4>Neil</h4>
    <span class="role">Frontend Lead</span>
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
    <span class="role">Scrum Master / Backend Lead</span>
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
    <span class="role">Deployer / DevOps</span>
    <ul>
      <li>AWS EC2 instance provisioning</li>
      <li>Docker containerization of Flask backend</li>
      <li>NGINX reverse proxy (port 80 &rarr; 8325)</li>
      <li>SSL certs via Certbot / Let&rsquo;s Encrypt</li>
      <li>CORS config for cross-subdomain auth</li>
      <li>Cookie domain setup (<code>.opencodingsociety.com</code>)</li>
      <li>Frontend deploy to GitHub Pages</li>
      <li>DNS: two subdomains on <code>opencodingsociety.com</code></li>
      <li>Env vars, DB migrations, prod debugging</li>
      <li>NGINX preflight fix (CORS OPTIONS headers)</li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h2>What We Changed from dsasd.org</h2>

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
      <li>No events calendar (just text dates on a page)</li>
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

<h3>Specific Feature Changes (dsasd.org &rarr; Our Portal)</h3>

<ul>
  <li><strong>Navigation:</strong> dsasd.org uses a top menu with 8 links that each load a full page &rarr; we use a sticky header with 10 section links that smooth-scroll on one page</li>
  <li><strong>Member Benefits:</strong> dsasd.org has a single text page listing benefits &rarr; we have 8 clickable tiles that expand inline with full descriptions and contact callouts</li>
  <li><strong>Events:</strong> dsasd.org has a static text list of upcoming dates &rarr; we built a full calendar grid with clickable days, event detail cards, and RSVP buttons</li>
  <li><strong>Store:</strong> dsasd.org links out to an external store page &rarr; we have an in-page product grid with 8 items, prices, and store photos</li>
  <li><strong>About/History:</strong> dsasd.org has a plain &ldquo;About Us&rdquo; text page &rarr; we have a 4-card grid (Mission, Stations, Leadership, History) with images</li>
  <li><strong>Contact:</strong> dsasd.org uses a standard WordPress contact form &rarr; we show 3 staff photos, office hours, and direct contact cards (visit/call/email)</li>
  <li><strong>Mobile:</strong> dsasd.org uses basic WordPress responsive breakpoints &rarr; we have a purpose-built full-screen overlay menu with grouped links</li>
  <li><strong>Search:</strong> dsasd.org has no meaningful search &rarr; we have a real-time search bar that matches across all sections, FAQ, and sub-pages</li>
  <li><strong>Newsletter:</strong> dsasd.org has a newsletter signup form &rarr; we show 3 recent Silver Star newsletter issues with expandable previews</li>
  <li><strong>Legal/Wellness:</strong> dsasd.org has separate pages with text descriptions &rarr; we have resource tiles with inline detail panels and direct contact CTAs</li>
</ul>

<div class="divider"></div>

<h2>Bugs Fixed &amp; Problems Solved</h2>

<table class="fix-tbl">
  <thead>
    <tr><th>Problem</th><th>Fix</th><th>Tech Used</th></tr>
  </thead>
  <tbody>
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
      <td><code>sheriff.opencoding.society.com</code> had an extra dot &mdash; fixed to correct domain</td>
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
  </tbody>
</table>

<div class="divider"></div>

<h2>Tech Stack &mdash; What Each Tool Does</h2>

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

<table>
  <thead>
    <tr><th>Tool</th><th>Role in This Project</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Flask</strong></td><td>REST API server &mdash; handles all 7 endpoints (auth, CRUD, chat)</td></tr>
    <tr><td><strong>Jekyll</strong></td><td>Static site generator &mdash; builds the frontend, deploys to GitHub Pages</td></tr>
    <tr><td><strong>MySQL</strong></td><td>Production database &mdash; stores 6 tables of sheriff user data</td></tr>
    <tr><td><strong>SQLAlchemy</strong></td><td>ORM &mdash; defines models, relationships, and migrations</td></tr>
    <tr><td><strong>PyJWT</strong></td><td>Generates and verifies JWT tokens for login sessions</td></tr>
    <tr><td><strong>OpenAI API</strong></td><td>Powers the FAQ chatbot via GPT-4o-mini</td></tr>
    <tr><td><strong>NGINX</strong></td><td>Reverse proxy &mdash; routes port 80/443 to Flask on 8325, handles CORS preflight</td></tr>
    <tr><td><strong>Docker</strong></td><td>Containerizes the Flask app for consistent deployment on EC2</td></tr>
    <tr><td><strong>AWS EC2</strong></td><td>Cloud server hosting the backend + database</td></tr>
    <tr><td><strong>Certbot</strong></td><td>Provisions free SSL/TLS certificates (HTTPS) via Let&rsquo;s Encrypt</td></tr>
    <tr><td><strong>Flask-CORS</strong></td><td>Manages cross-origin headers so the frontend can call the backend</td></tr>
    <tr><td><strong>HTML5 Canvas</strong></td><td>Renders the Net Patrol game (player, NPCs, packets, OSI layers)</td></tr>
    <tr><td><strong>JavaScript</strong></td><td>All frontend logic: auth, search, calendar, games, pathway quiz, chatbot UI</td></tr>
    <tr><td><strong>CSS</strong></td><td>Dark navy/gold theme, glassmorphism, responsive layout, animations</td></tr>
  </tbody>
</table>

<div class="divider"></div>

<h2>Deployment &mdash; How We Shipped It</h2>

<h3>Architecture</h3>

<pre><code> GitHub Pages (FE)                    AWS EC2 (BE)
 dsasd.opencodingsociety.com          sheriff.opencodingsociety.com
         |                                    |
         | JS fetch() with                    | NGINX (port 80/443)
         | credentials: 'include'             |     |
         |                                    |     v
         +--- JWT cookie on ----------------->| localhost:8325
              .opencodingsociety.com          | Flask in Docker
                                              | (MySQL + OpenAI)</code></pre>

<div class="dep-grid">
  <div class="dep-card">
    <h4>Frontend (GitHub Pages)</h4>
    <ul>
      <li>Jekyll builds static HTML/CSS/JS</li>
      <li>Pushed to GitHub &rarr; auto-deploys</li>
      <li>Custom domain: <code>dsasd.opencodingsociety.com</code></li>
      <li>HTTPS via GitHub&rsquo;s built-in SSL</li>
      <li>3 pages: portal (<code>/</code>), info (<code>/sheriff/info</code>), games (<code>/games</code>)</li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>Backend (AWS EC2 + Docker)</h4>
    <ul>
      <li>Flask app runs in Docker container</li>
      <li>Listens on <strong>port 8325</strong></li>
      <li>MySQL database inside the container</li>
      <li>Env vars: <code>OPENAI_API_KEY</code>, <code>SECRET_KEY</code>, DB creds</li>
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
      <li>Certbot / Let&rsquo;s Encrypt for backend HTTPS</li>
      <li>JWT cookie: <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite=None</code></li>
      <li>Cookie domain: <code>.opencodingsociety.com</code></li>
      <li>Passwords hashed with Werkzeug</li>
      <li>API keys stored in env vars, never in code</li>
    </ul>
  </div>
</div>

<h3>Deployment Steps (What Moiz Did)</h3>

<ol>
  <li><strong>Provisioned EC2</strong> &mdash; Ubuntu instance on AWS, opened ports 80/443/8325</li>
  <li><strong>Installed Docker</strong> &mdash; built the Flask app image, ran it on port 8325</li>
  <li><strong>Configured NGINX</strong> &mdash; created site config proxying to <code>localhost:8325</code>, added CORS headers for preflight</li>
  <li><strong>SSL with Certbot</strong> &mdash; ran <code>certbot --nginx</code> to auto-provision HTTPS for <code>sheriff.opencodingsociety.com</code></li>
  <li><strong>DNS setup</strong> &mdash; pointed <code>sheriff.opencodingsociety.com</code> to EC2 IP, <code>dsasd.opencodingsociety.com</code> to GitHub Pages</li>
  <li><strong>Frontend deploy</strong> &mdash; pushed Jekyll site to GitHub, configured custom domain in repo settings</li>
  <li><strong>Env vars</strong> &mdash; created <code>.env</code> on EC2 with <code>OPENAI_API_KEY</code>, <code>SECRET_KEY</code>, <code>MYSQL_PASSWORD</code>, <code>IS_PRODUCTION=true</code></li>
  <li><strong>Tested cross-origin</strong> &mdash; verified <code>fetch()</code> calls from frontend reach backend with cookies attached</li>
  <li><strong>Fixed CORS bugs</strong> &mdash; corrected origin typos, added missing preflight headers in NGINX, reloaded</li>
</ol>

<div class="divider"></div>

<h2>API Endpoints</h2>

<table>
  <thead>
    <tr><th>Endpoint</th><th>Method</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>/api/sheriff/authenticate</code></td><td>POST</td><td>Login &mdash; returns JWT cookie</td></tr>
    <tr><td><code>/api/sheriff/authenticate</code></td><td>DELETE</td><td>Logout &mdash; clears cookie</td></tr>
    <tr><td><code>/api/sheriff/id</code></td><td>GET</td><td>Get current user&rsquo;s profile</td></tr>
    <tr><td><code>/api/sheriff/user</code></td><td>POST</td><td>Signup with validation</td></tr>
    <tr><td><code>/api/sheriff/user</code></td><td>GET</td><td>List all members (admin)</td></tr>
    <tr><td><code>/api/sheriff/user</code></td><td>PUT</td><td>Update profile</td></tr>
    <tr><td><code>/api/sheriff/user</code></td><td>DELETE</td><td>Delete member (admin)</td></tr>
    <tr><td><code>/api/sheriff/chat</code></td><td>POST</td><td>AI chatbot request</td></tr>
  </tbody>
</table>

<div class="divider"></div>

<h2>Database (6 Tables)</h2>

<ul>
  <li><strong>sheriff_users</strong> &mdash; name, uid, sheriff_id, email, password (hashed), rank, station, phone, role, status, years_of_service, specialization</li>
  <li><strong>sheriff_training</strong> &mdash; course_name, institution, hours, completion_date, score</li>
  <li><strong>sheriff_certifications</strong> &mdash; cert_name, issuing_body, issue_date, expiry_date, status</li>
  <li><strong>sheriff_commendations</strong> &mdash; title, description, date_awarded, awarded_by</li>
  <li><strong>sheriff_emergency_contacts</strong> &mdash; contact_name, relationship, phone, email</li>
  <li><strong>sheriff_assignments</strong> &mdash; station, unit, rank_at_time, start_date, end_date</li>
</ul>

<p>All tables link to <code>sheriff_users.id</code> via foreign keys.</p>

<div class="divider"></div>

<h2>All Features</h2>

<h3>Header &amp; Navigation</h3>
<ul>
  <li>Sticky frosted-glass header (<code>backdrop-filter: blur</code>)</li>
  <li>10 nav links with vertical separators</li>
  <li>Real-time search bar (2+ chars triggers dropdown)</li>
  <li>Login/Join buttons swap to user chip when authenticated</li>
  <li>Full-screen mobile overlay menu</li>
</ul>

<h3>Hero Section</h3>
<ul>
  <li>Background image at 12% opacity + radial gold glow</li>
  <li>Stats bar: 4,229 Members / 70+ Years / 12 Stations / 24/7 Support</li>
  <li>3 CTA buttons: Explore Resources, Learn About DSA, Full DSA Info Page</li>
</ul>

<h3>Member Resources</h3>
<ul>
  <li>8 clickable tiles (Benefits, Legal, Wellness, Forms, Events, Store, Newsletters, PAC)</li>
  <li>Each opens an inline detail panel with descriptions and contact info</li>
  <li>Newsletter panel shows 3 recent Silver Star issues</li>
</ul>

<h3>News, Events, About, Store</h3>
<ul>
  <li><strong>News:</strong> 3-column cards with color-coded tags (Announcement, Event, Benefit)</li>
  <li><strong>Events:</strong> Interactive monthly calendar with clickable days, event cards, RSVP</li>
  <li><strong>About:</strong> 4 image cards (Mission, Stations, Leadership, History)</li>
  <li><strong>Store:</strong> 8-item product grid with prices + store photos</li>
</ul>

<h3>Games (Separate Page at /games)</h3>
<ul>
  <li><strong>Net Patrol Mission</strong> &mdash; HTML5 Canvas game with Player, NPC (Router Ron), AI NPC (Hacker H4X)</li>
  <li><strong>Pop Quiz Review</strong> &mdash; 12-question pool on OSI, TCP/IP, MTU, deployment</li>
  <li><strong>MTU Explorer Lab</strong> &mdash; interactive payload slider with frame visualization</li>
</ul>

<h3>FAQ + AI Chatbot</h3>
<ul>
  <li>9 accordion Q&amp;As with search + 6 category filters</li>
  <li>Floating chatbot (bottom-right) powered by OpenAI GPT-4o-mini</li>
  <li>Sends conversation history (last 10 messages) for context</li>
</ul>

<h3>Rank Pathway Guide</h3>
<ul>
  <li>4-step quiz tied to user&rsquo;s logged-in rank</li>
  <li>Auto-detects current rank, shows eligible promotions</li>
  <li>Generates personalized timeline, requirements checklist, and activity plans</li>
  <li>Covers all 10 rank combinations (Deputy&rarr;Corporal through Lieutenant&rarr;Captain)</li>
</ul>

<h3>DSA Info Page (/sheriff/info)</h3>
<ul>
  <li>Full org structure, rank table, all stations/facilities</li>
  <li>History timeline (1955&ndash;present), member benefits, contact bar</li>
</ul>

<h3>Auth &amp; Admin</h3>
<ul>
  <li>Login/signup modal with tabbed forms</li>
  <li>JWT session persistence via cookie</li>
  <li>Admin panel: full member table with edit/delete</li>
</ul>

<div class="divider"></div>

<h2>Summary</h2>

<ul>
  <li><strong>Static CMS &rarr; full-stack SPA</strong> &mdash; WordPress replaced with Flask API + Jekyll frontend</li>
  <li><strong>No auth &rarr; complete auth</strong> &mdash; JWT login, signup, sessions, role-based admin</li>
  <li><strong>Multi-page &rarr; single-page</strong> &mdash; smooth scroll, sticky nav, zero reloads</li>
  <li><strong>No interactivity &rarr; 3 game modes</strong> &mdash; canvas game, quiz, MTU lab</li>
  <li><strong>No AI &rarr; AI chatbot</strong> &mdash; OpenAI-powered FAQ assistant</li>
  <li><strong>Basic UI &rarr; modern dark theme</strong> &mdash; navy/gold, glassmorphism, responsive mobile menu</li>
  <li><strong>No data &rarr; 6 DB tables</strong> &mdash; full personnel tracking</li>
  <li><strong>No career tools &rarr; Rank Pathway</strong> &mdash; personalized quiz, timeline, checklists</li>
  <li><strong>1 page &rarr; 3 pages</strong> &mdash; portal + DSA info + games, minimal clicks</li>
  <li><strong>8 bugs fixed</strong> &mdash; CORS, API URLs, cookie domain, NGINX preflight, mobile menu, API migration</li>
</ul>

<p style="text-align:center;color:#475569;font-size:0.8rem;margin-top:40px">Published March 31, 2026 &mdash; <a href="{{ site.baseurl }}/">Visit the DSA Portal</a></p>

</div>
