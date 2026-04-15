---
layout: aesthetihawk
title: "DSA Sheriff Portal — Capstone Redesign"
description: How our team rebuilt the Deputy Sheriffs' Association website from the original dsasd.org into a modern full-stack single-page application.
permalink: /capstone/dsa-redesign
comments: false
---

<style>
  /* ===== Base ===== */
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

  /* ===== Visual mockups (homepage preview, search fix, login fix) ===== */
  .mock {
    background: #0b1a2e; border: 1px solid #1e3352; border-radius: 12px;
    padding: 0; margin: 16px 0; overflow: hidden;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }
  .mock-caption { text-align: center; font-size: 0.74rem; color: #64748b; margin-top: 6px; margin-bottom: 18px; font-style: italic; }

  /* Browser chrome */
  .mock-chrome {
    background: #0d1727; padding: 8px 12px;
    display: flex; align-items: center; gap: 6px;
    border-bottom: 1px solid #1e3352;
  }
  .mock-dot { width: 10px; height: 10px; border-radius: 50%; }
  .mock-dot.r { background: #ef4444; } .mock-dot.y { background: #f59e0b; } .mock-dot.g { background: #34d399; }
  .mock-url { flex: 1; margin-left: 10px; padding: 4px 10px; background: #162a46; border-radius: 6px; font-size: 0.7rem; color: #60a5fa; font-family: monospace; }

  /* Polished homepage mock */
  .mock-hp-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 14px; background: rgba(15,40,71,0.95); border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .mock-hp-logo { display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: #fff; font-weight: 700; }
  .mock-hp-logo::before { content: ''; width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(135deg,#fbbf24,#d97706); display: inline-block; }
  .mock-hp-nav { display: flex; gap: 8px; font-size: 0.66rem; color: #94a3b8; }
  .mock-hp-nav span.active { color: #fbbf24; }
  .mock-hp-right { display: flex; align-items: center; gap: 6px; font-size: 0.66rem; }
  .mock-hp-search { padding: 3px 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #64748b; }
  .mock-hp-btn { padding: 3px 10px; border-radius: 6px; font-weight: 700; }
  .mock-hp-btn.out { color: #fbbf24; border: 1px solid rgba(251,191,36,0.4); }
  .mock-hp-btn.gold { background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; }

  .mock-hp-hero { text-align: center; padding: 18px 14px 14px; background: linear-gradient(170deg, rgba(15,40,71,0.92), rgba(11,26,46,0.96)); }
  .mock-hp-hero h4 { background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 0.98rem !important; margin-bottom: 4px !important; font-weight: 800 !important; }
  .mock-hp-hero p { font-size: 0.7rem; color: #7f8ea3; margin-bottom: 8px; }
  .mock-hp-hero .mini-btns { display: flex; gap: 6px; justify-content: center; }
  .mock-hp-hero .mini-btns span { font-size: 0.64rem; padding: 4px 10px; border-radius: 6px; }
  .mock-hp-stats { display: flex; justify-content: center; gap: 14px; margin-top: 10px; }
  .mock-hp-stats div { font-size: 0.58rem; color: #475569; }
  .mock-hp-stats div b { display: block; font-size: 0.88rem; color: #fbbf24; }

  .mock-hp-menu { padding: 12px 14px; border-top: 1px solid rgba(255,255,255,0.04); }
  .mock-hp-menu-head { font-size: 0.68rem; color: #fff; font-weight: 700; margin-bottom: 6px; }
  .mock-hp-tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
  .mock-hp-tile { background: rgba(22,42,70,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 8px; }
  .mock-hp-tile-icon { font-size: 0.9rem; margin-bottom: 2px; }
  .mock-hp-tile-title { font-size: 0.64rem; color: #fff; font-weight: 700; }
  .mock-hp-tile-desc { font-size: 0.56rem; color: #64748b; }

  .mock-hp-gami { text-align: center; padding: 14px; border-top: 1px solid rgba(255,255,255,0.04); }
  .mock-hp-gami span { display: inline-block; padding: 8px 24px; border-radius: 10px; background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; font-weight: 800; font-size: 0.78rem; box-shadow: 0 4px 14px rgba(245,158,11,0.35); }

  /* Search-bar fix visual */
  .fix-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0; }
  .fix-panel { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; }
  .fix-panel h4 { font-size: 0.8rem !important; margin: 0 0 8px !important; }
  .fix-panel.bad h4 { color: #ef4444 !important; }
  .fix-panel.good h4 { color: #34d399 !important; }
  .fix-panel .box {
    background: #0b1a2e; border: 1px dashed #334155; border-radius: 6px;
    padding: 10px; font-size: 0.72rem; color: #94a3b8;
  }
  .fix-panel .box.visible { border: 1px solid #34d399; }
  .fix-panel .fake-search { padding: 5px 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: #64748b; font-size: 0.7rem; display: inline-block; }
  .fix-panel .hidden-hint { color: #64748b; font-size: 0.68rem; font-style: italic; margin-top: 6px; }
  .fix-panel .fake-error { padding: 6px 10px; background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.3); border-radius: 6px; color: #ef4444; font-size: 0.7rem; }
  .fix-panel .fake-success { padding: 6px 10px; background: rgba(52,211,153,0.12); border: 1px solid rgba(52,211,153,0.3); border-radius: 6px; color: #34d399; font-size: 0.7rem; }

  /* ===== Responsive ===== */
  @media (max-width: 700px) {
    .cg, .ts, .tg, .dep-grid, .fix-row { grid-template-columns: 1fr; }
    .mock-hp-tiles { grid-template-columns: repeat(2, 1fr); }
  }
</style>

<div class="bw">

<h1>DSA Sheriff Portal &mdash; Capstone Redesign</h1>

<p class="sub">We rebuilt <a href="https://dsasd.org" target="_blank">dsasd.org</a> into a fast, polished, single-page portal deputies can actually use day-to-day. Live at: <a href="https://dsasd.opencodingsociety.com" target="_blank">dsasd.opencodingsociety.com</a></p>

<div class="sb">
  <div class="si"><span class="n">3</span><span class="l">Menu Sections</span></div>
  <div class="si"><span class="n">~2</span><span class="l">Scrolls to Bottom</span></div>
  <div class="si"><span class="n">7</span><span class="l">API Endpoints</span></div>
  <div class="si"><span class="n">6</span><span class="l">DB Tables</span></div>
  <div class="si"><span class="n">3</span><span class="l">Game Modes</span></div>
  <div class="si"><span class="n">8</span><span class="l">Bugs Fixed</span></div>
</div>

<div class="divider"></div>

<h2>What Sheriffs Will See</h2>

<p>A deputy landing on the portal now gets a clean, short homepage &mdash; no scroll fatigue, no hunting through menus. Every key resource is one click away.</p>

<div class="mock">
  <div class="mock-chrome">
    <span class="mock-dot r"></span><span class="mock-dot y"></span><span class="mock-dot g"></span>
    <span class="mock-url">dsasd.opencodingsociety.com</span>
  </div>
  <div class="mock-hp-header">
    <div class="mock-hp-logo">DSA San Diego</div>
    <div class="mock-hp-nav">
      <span class="active">Services</span><span>Community</span><span>Support</span><span>Full Info</span><span>Gamification</span>
    </div>
    <div class="mock-hp-right">
      <span class="mock-hp-search">&#128269; Search&hellip;</span>
      <span class="mock-hp-btn out">Log In</span>
      <span class="mock-hp-btn gold">Join</span>
    </div>
  </div>
  <div class="mock-hp-hero">
    <h4>The Strength Behind the Badge</h4>
    <p>Benefits, legal defense, events, and advocacy &mdash; all in one place.</p>
    <div class="mini-btns">
      <span class="mock-hp-btn gold">Explore Services</span>
      <span class="mock-hp-btn out">About the DSA</span>
    </div>
    <div class="mock-hp-stats">
      <div><b>4,229</b>Members</div><div><b>70+</b>Years</div><div><b>12</b>Stations</div><div><b>24/7</b>Support</div>
    </div>
  </div>
  <div class="mock-hp-menu">
    <div class="mock-hp-menu-head">Member Services</div>
    <div class="mock-hp-tiles">
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128179;</div><div class="mock-hp-tile-title">Benefits</div><div class="mock-hp-tile-desc">Health, dental, vision</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128272;</div><div class="mock-hp-tile-title">Legal Defense</div><div class="mock-hp-tile-desc">24/7 fund</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#127891;</div><div class="mock-hp-tile-title">Wellness</div><div class="mock-hp-tile-desc">Peer support</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128196;</div><div class="mock-hp-tile-title">Forms</div><div class="mock-hp-tile-desc">Contracts &amp; docs</div></div>
    </div>
  </div>
  <div class="mock-hp-menu">
    <div class="mock-hp-menu-head">Community &amp; Information</div>
    <div class="mock-hp-tiles">
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128240;</div><div class="mock-hp-tile-title">News</div><div class="mock-hp-tile-desc">Latest updates</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128197;</div><div class="mock-hp-tile-title">Events</div><div class="mock-hp-tile-desc">Calendar &amp; RSVP</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#127963;</div><div class="mock-hp-tile-title">About DSA</div><div class="mock-hp-tile-desc">Mission &amp; history</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128176;</div><div class="mock-hp-tile-title">Store</div><div class="mock-hp-tile-desc">Official merch</div></div>
    </div>
  </div>
  <div class="mock-hp-menu">
    <div class="mock-hp-menu-head">Career &amp; Support</div>
    <div class="mock-hp-tiles">
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#127937;</div><div class="mock-hp-tile-title">Rank Pathway</div><div class="mock-hp-tile-desc">Promotion plan</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#10067;</div><div class="mock-hp-tile-title">FAQ</div><div class="mock-hp-tile-desc">Common questions</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128172;</div><div class="mock-hp-tile-title">AI Assistant</div><div class="mock-hp-tile-desc">Chatbot</div></div>
      <div class="mock-hp-tile"><div class="mock-hp-tile-icon">&#128222;</div><div class="mock-hp-tile-title">Contact</div><div class="mock-hp-tile-desc">Visit / call / email</div></div>
    </div>
  </div>
  <div class="mock-hp-gami">
    <span>&#127918; Gamification &rarr;</span>
  </div>
</div>

<p class="mock-caption">Polished DSA Portal homepage &mdash; sticky header, hero, 3 menus, and the Gamification button at the bottom.</p>

<h3>What you can do on the homepage</h3>
<ul>
  <li><strong>Find any resource in one click</strong> &mdash; 3 menus, 4 tiles each, grouped by purpose</li>
  <li><strong>See Benefits / Legal / Wellness / Forms instantly</strong> &mdash; tiles open an inline detail panel, no page reload</li>
  <li><strong>Jump to News, Events, Store, or About</strong> via the Community menu (anchored into <code>/sheriff/info</code>)</li>
  <li><strong>Log in or sign up</strong> from the header &mdash; full auth that actually works (more on that below)</li>
  <li><strong>Ask the AI assistant</strong> anything DSA-related from a floating chatbot button</li>
  <li><strong>Launch the Net Patrol challenge zone</strong> from the big &#127918; Gamification button at the bottom</li>
</ul>

<div class="divider"></div>

<h2>Homepage: What We Changed from dsasd.org</h2>

<p>The original site buried everything deputies actually need. Our polished homepage makes the most-used actions impossible to miss.</p>

<div class="cg">
  <div class="cc old">
    <h3>dsasd.org (old)</h3>
    <ul>
      <li>WordPress multi-page &mdash; every click reloaded</li>
      <li>Sidebar menus with 8+ mixed links</li>
      <li>No login; member resources buried in text pages</li>
      <li>Static &ldquo;About Us&rdquo; and plain event list</li>
      <li>Store redirected to an external site</li>
      <li>Desktop-first; breaks on small screens</li>
      <li>No search, no chatbot, no interactivity</li>
    </ul>
  </div>
  <div class="cc new">
    <h3>Polished DSA Portal</h3>
    <ul>
      <li>Single-page app &mdash; smooth-scroll, zero reloads</li>
      <li>3 clear menus: Services / Community / Career</li>
      <li>Full JWT login with admin panel</li>
      <li>Inline detail panels + anchored info page</li>
      <li>In-page store grid with prices</li>
      <li>Mobile-first with full-screen overlay menu</li>
      <li>Real-time search, AI chatbot, 3 games</li>
    </ul>
  </div>
</div>

<h3>Problems the new homepage solves</h3>
<ul>
  <li><strong>Too many places to look</strong> &rarr; one short homepage with 3 grouped menus</li>
  <li><strong>Too much scrolling</strong> &rarr; only ~2 scrolls to reach the bottom</li>
  <li><strong>Games cluttering the home view</strong> &rarr; moved to a single <strong>Gamification</strong> button at the bottom linking to <code>/games</code></li>
  <li><strong>Page reloads on every click</strong> &rarr; detail panels expand inline; nav uses smooth-scroll</li>
  <li><strong>No way to return to member-only info</strong> &rarr; sticky header with Log In / Join always visible</li>
  <li><strong>Unclear next step</strong> &rarr; hero has two clear CTAs (Explore Services, About the DSA)</li>
</ul>

<div class="divider"></div>

<h2>Fixes: Hidden Search Bar &amp; Broken Login</h2>

<p>Two headline issues on dsasd.org made the site hard to use. Both are resolved in the polished portal.</p>

<h3>1. The search bar was hidden</h3>

<p>On dsasd.org, the only search was tucked into a WordPress sidebar that didn&rsquo;t render on most pages, and wasn&rsquo;t visible at all on mobile.</p>

<div class="fix-row">
  <div class="fix-panel bad">
    <h4>&#10060; dsasd.org</h4>
    <div class="box">
      <div style="color:#64748b;font-size:0.7rem">Header / hero</div>
      <div class="hidden-hint">(search bar not in header)</div>
      <div style="margin-top:10px;color:#64748b;font-size:0.7rem;opacity:0.4">...somewhere in a collapsed sidebar...</div>
    </div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:8px">Users couldn&rsquo;t find search on mobile; most pages didn&rsquo;t render the sidebar at all.</p>
  </div>
  <div class="fix-panel good">
    <h4>&#10003; Polished Portal</h4>
    <div class="box visible">
      <div style="color:#fff;font-size:0.72rem;margin-bottom:8px">Sticky Header (always visible)</div>
      <span class="fake-search">&#128269; Search&hellip;</span>
      <div style="margin-top:8px;color:#34d399;font-size:0.68rem">&darr; Real-time dropdown on 2+ characters</div>
    </div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:8px">Lives in the sticky header on every screen; matches across every menu and the info page.</p>
  </div>
</div>

<ul>
  <li><strong>Now always visible</strong> in the sticky glassmorphism header</li>
  <li><strong>Real-time results</strong> after 2 characters &mdash; no Enter required</li>
  <li><strong>Indexes every menu</strong>: Services, Community, Career, Gamification, and <code>/sheriff/info</code></li>
  <li><strong>Click a result</strong> to smooth-scroll + auto-open the matching detail panel</li>
</ul>

<h3>2. Login didn&rsquo;t work</h3>

<p>dsasd.org had a login link that led to a broken WordPress form &mdash; no backend, no sessions, no member area. We rebuilt it from scratch with real auth.</p>

<div class="fix-row">
  <div class="fix-panel bad">
    <h4>&#10060; dsasd.org</h4>
    <div class="box">
      <div style="font-size:0.7rem;color:#fff;margin-bottom:6px">Member Login</div>
      <div style="font-size:0.66rem;color:#64748b;margin-bottom:4px">Username: _______</div>
      <div style="font-size:0.66rem;color:#64748b;margin-bottom:6px">Password: _______</div>
      <div class="fake-error">Error: page not found / 500</div>
    </div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:8px">Form submitted into the void. No accounts, no sessions, no protected content.</p>
  </div>
  <div class="fix-panel good">
    <h4>&#10003; Polished Portal</h4>
    <div class="box visible">
      <div style="font-size:0.7rem;color:#fff;margin-bottom:6px">Member Login</div>
      <div style="font-size:0.66rem;color:#64748b;margin-bottom:4px">Username: <span style="color:#fbbf24">deputy01</span></div>
      <div style="font-size:0.66rem;color:#64748b;margin-bottom:6px">Password: <span style="color:#fbbf24">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span></div>
      <div class="fake-success">&#9733; Logged in as Deputy &mdash; session active</div>
    </div>
    <p style="font-size:0.72rem;color:#94a3b8;margin-top:8px">Flask API + JWT cookie. Works across subdomains and survives page reloads.</p>
  </div>
</div>

<ul>
  <li><strong>Signup &amp; Login modal</strong> with tabbed forms &mdash; no new page loads</li>
  <li><strong>JWT auth cookie</strong> (<code>HttpOnly</code>, <code>Secure</code>, <code>SameSite=None</code>) so sessions stick across the frontend and backend subdomains</li>
  <li><strong>Password hashing</strong> with Werkzeug; passwords never stored in plain text</li>
  <li><strong>Role-based access</strong> &mdash; Admin users unlock a member table with edit/delete</li>
  <li><strong>Session persists on refresh</strong> via <code>GET /api/sheriff/id</code> on page load</li>
  <li><strong>Fixed cross-subdomain cookie bug</strong> by setting cookie domain to <code>.opencodingsociety.com</code></li>
</ul>

<div class="divider"></div>

<h2>Team &amp; Work Split</h2>

<div class="tg">
  <div class="tm">
    <h4>Neil</h4>
    <span class="role">Frontend Lead</span>
    <ul>
      <li>Entire single-page portal UI</li>
      <li>Sticky header + real-time search</li>
      <li>3 menu sections with inline detail panels</li>
      <li>Login/signup modal + user dropdown</li>
      <li>Mobile overlay menu + responsive design</li>
      <li>Net Patrol game, Pop Quiz, MTU Lab</li>
      <li>Rank Pathway quiz + DSA info sub-page</li>
    </ul>
  </div>
  <div class="tm">
    <h4>Akhil</h4>
    <span class="role">Scrum / Backend Lead</span>
    <ul>
      <li>Sprint planning &amp; stand-ups</li>
      <li>6-table data model (users, training, certs, etc.)</li>
      <li>7 REST endpoints (auth, CRUD, chat)</li>
      <li>JWT auth + role-based access</li>
      <li>Admin panel API + seed data</li>
      <li>OpenAI chatbot integration</li>
    </ul>
  </div>
  <div class="tm">
    <h4>Moiz</h4>
    <span class="role">Deployer / DevOps</span>
    <ul>
      <li>AWS EC2 provisioning</li>
      <li>Flask app in Docker on port 8325</li>
      <li>NGINX reverse proxy + CORS config</li>
      <li>Certbot / Let&rsquo;s Encrypt SSL</li>
      <li>Cross-subdomain cookie fix</li>
      <li>DNS + GitHub Pages frontend deploy</li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h2>Bugs Fixed</h2>

<table class="fix-tbl">
  <thead><tr><th>Problem</th><th>Fix</th><th>Tech</th></tr></thead>
  <tbody>
    <tr><td>Search bar hidden / missing</td><td>Moved to sticky header with real-time dropdown</td><td>HTML/CSS/JS</td></tr>
    <tr><td>Login had no backend</td><td>Built Flask auth with JWT cookie &amp; session check</td><td>Flask, PyJWT</td></tr>
    <tr><td>JWT cookie not sent cross-subdomain</td><td>Cookie domain <code>.opencodingsociety.com</code>, <code>SameSite=None</code></td><td>Flask headers</td></tr>
    <tr><td>CORS preflight blocked signup</td><td>Added <code>Allow-Origin</code> / <code>Allow-Credentials</code> to NGINX OPTIONS</td><td>NGINX, Flask-CORS</td></tr>
    <tr><td>404 on API calls in prod</td><td>Pointed frontend at <code>sheriff.opencodingsociety.com</code></td><td>JS <code>fetch</code></td></tr>
    <tr><td>Wrong dev port</td><td>Changed <code>8587</code> &rarr; <code>8325</code></td><td>Flask, NGINX</td></tr>
    <tr><td>Mobile menu didn&rsquo;t open</td><td>Rebuilt as full-screen overlay with correct ID</td><td>HTML/JS</td></tr>
    <tr><td>Chatbot API change</td><td>Migrated Claude &rarr; OpenAI (auth headers, body format)</td><td>OpenAI API</td></tr>
  </tbody>
</table>

<div class="divider"></div>

<h2>Tech Stack</h2>

<div class="ts">
  <div class="tc">Python / Flask</div>
  <div class="tc">Jekyll (GitHub Pages)</div>
  <div class="tc">MySQL + SQLAlchemy</div>
  <div class="tc">JWT (PyJWT)</div>
  <div class="tc">OpenAI API</div>
  <div class="tc">NGINX Reverse Proxy</div>
  <div class="tc">AWS EC2 + Docker</div>
  <div class="tc">Flask-CORS + Secure Cookies</div>
  <div class="tc">HTML5 Canvas</div>
</div>

<ul>
  <li><strong>Flask:</strong> REST API server for all 7 endpoints</li>
  <li><strong>Jekyll:</strong> builds the static frontend for GitHub Pages</li>
  <li><strong>MySQL + SQLAlchemy:</strong> 6-table member data model</li>
  <li><strong>JWT / Werkzeug:</strong> secure session tokens &amp; password hashing</li>
  <li><strong>OpenAI API:</strong> GPT-4o-mini powers the FAQ chatbot</li>
  <li><strong>NGINX + Certbot:</strong> HTTPS proxy in front of Flask on port 8325</li>
  <li><strong>AWS EC2 + Docker:</strong> consistent container deployment</li>
</ul>

<div class="divider"></div>

<h2>Deployment</h2>

<pre><code> GitHub Pages (FE)                    AWS EC2 (BE)
 dsasd.opencodingsociety.com          sheriff.opencodingsociety.com
         |                                    |
         | fetch() w/ credentials             | NGINX (80/443)
         v                                    v
         +--- JWT cookie on ----------------->| localhost:8325
              .opencodingsociety.com          | Flask in Docker
                                              | (MySQL + OpenAI)</code></pre>

<div class="dep-grid">
  <div class="dep-card">
    <h4>Frontend</h4>
    <ul>
      <li>Jekyll &rarr; static HTML/CSS/JS</li>
      <li>GitHub Pages auto-deploy</li>
      <li>3 pages: <code>/</code>, <code>/sheriff/info</code>, <code>/games</code></li>
      <li>HTTPS via GitHub built-in SSL</li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>Backend</h4>
    <ul>
      <li>Flask in Docker on port 8325</li>
      <li>MySQL inside the container</li>
      <li>Env vars: <code>OPENAI_API_KEY</code>, <code>SECRET_KEY</code>, DB creds</li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>NGINX</h4>
    <ul>
      <li>Ports 80/443 &rarr; <code>localhost:8325</code></li>
      <li>CORS headers + OPTIONS preflight handling</li>
      <li>Server name: <code>sheriff.opencodingsociety.com</code></li>
    </ul>
  </div>
  <div class="dep-card">
    <h4>Security</h4>
    <ul>
      <li>Let&rsquo;s Encrypt SSL (Certbot)</li>
      <li>JWT cookie: <code>HttpOnly</code> / <code>Secure</code> / <code>SameSite=None</code></li>
      <li>Passwords hashed with Werkzeug</li>
      <li>API keys in env vars, never in code</li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h2>API Endpoints</h2>

<table>
  <thead><tr><th>Endpoint</th><th>Method</th><th>Purpose</th></tr></thead>
  <tbody>
    <tr><td><code>/api/sheriff/authenticate</code></td><td>POST</td><td>Login &mdash; returns JWT cookie</td></tr>
    <tr><td><code>/api/sheriff/authenticate</code></td><td>DELETE</td><td>Logout &mdash; clears cookie</td></tr>
    <tr><td><code>/api/sheriff/id</code></td><td>GET</td><td>Current user profile</td></tr>
    <tr><td><code>/api/sheriff/user</code></td><td>POST</td><td>Signup w/ validation</td></tr>
    <tr><td><code>/api/sheriff/user</code></td><td>GET / PUT / DELETE</td><td>List / update / delete (admin)</td></tr>
    <tr><td><code>/api/sheriff/chat</code></td><td>POST</td><td>AI chatbot request</td></tr>
  </tbody>
</table>

<div class="divider"></div>

<h2>Database (6 Tables)</h2>

<ul>
  <li><strong>sheriff_users</strong> &mdash; profile, rank, station, hashed password, role</li>
  <li><strong>sheriff_training</strong> &mdash; courses, hours, completion date, score</li>
  <li><strong>sheriff_certifications</strong> &mdash; cert, issuing body, issue / expiry dates</li>
  <li><strong>sheriff_commendations</strong> &mdash; awards and recognitions</li>
  <li><strong>sheriff_emergency_contacts</strong> &mdash; contact, relationship, phone, email</li>
  <li><strong>sheriff_assignments</strong> &mdash; station, unit, rank-at-time, dates</li>
</ul>

<p>All tables link to <code>sheriff_users.id</code> via foreign keys.</p>

<div class="divider"></div>

<h2>Summary</h2>

<ul>
  <li><strong>Static WordPress &rarr; full-stack SPA</strong> (Flask API + Jekyll frontend)</li>
  <li><strong>Homepage trimmed to 3 clear menus &amp; ~2 scrolls</strong></li>
  <li><strong>Hidden search &rarr; sticky real-time search</strong> in the header</li>
  <li><strong>Broken login &rarr; full JWT auth</strong> with admin panel &amp; role-based access</li>
  <li><strong>Games moved off the homepage</strong> into a single Gamification button</li>
  <li><strong>AI chatbot, inline detail panels, and mobile overlay menu</strong> added for a modern experience</li>
  <li><strong>8 production bugs fixed</strong> across CORS, cookies, NGINX, and API URLs</li>
</ul>

<p style="text-align:center;color:#475569;font-size:0.8rem;margin-top:40px">Updated April 14, 2026 &mdash; <a href="{{ site.baseurl }}/">Visit the DSA Portal</a></p>

</div>
