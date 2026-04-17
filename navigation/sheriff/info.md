---
layout: none
title: About the DSA
permalink: /sheriff/info
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About the DSA &mdash; Deputy Sheriffs' Association of San Diego County</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; scroll-padding-top: 72px; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #0b1a2e; color: #e2e8f0; line-height: 1.6; }
    a { color: #60a5fa; text-decoration: none; }

    /* Top bar */
    .topbar {
      position: sticky; top: 0; z-index: 1000;
      background: rgba(15,40,71,0.95); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .topbar-inner {
      max-width: 1000px; margin: 0 auto; height: 58px;
      display: flex; align-items: center; justify-content: space-between; padding: 0 24px;
    }
    .topbar .logo { display: flex; align-items: center; gap: 10px; }
    .topbar .logo img { width: 34px; height: auto; }
    .topbar .logo-text { font-size: 0.88rem; font-weight: 700; color: #fff; }
    .topbar .logo-sub { font-size: 0.58rem; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; }
    .back-btn {
      padding: 7px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;
      background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.3); color: #fbbf24;
      cursor: pointer; transition: all 0.2s;
    }
    .back-btn:hover { background: rgba(251,191,36,0.15); }

    /* Page content */
    .page { max-width: 900px; margin: 0 auto; padding: 40px 24px 60px; }
    .page h1 { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; }
    .page .lead { color: #7f8ea3; font-size: 1rem; margin-bottom: 32px; }
    .page h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.12); padding-bottom: 8px; margin: 36px 0 16px; }
    .page h3 { font-size: 1.05rem; color: #e2e8f0; margin: 20px 0 8px; }
    .page p { font-size: 0.88rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.7; }
    .page ul { padding-left: 20px; margin: 8px 0 16px; }
    .page li { font-size: 0.86rem; color: #cbd5e1; margin-bottom: 6px; line-height: 1.55; }
    .page strong { color: #e2e8f0; }

    /* Cards */
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
    .info-card { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 20px; }
    .info-card h3 { margin-top: 0; color: #fbbf24; }
    .info-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; }

    /* Stat row */
    .stat-row { display: flex; gap: 14px; flex-wrap: wrap; margin: 20px 0; }
    .stat-box { flex: 1; min-width: 130px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 16px; text-align: center; }
    .stat-box .n { font-size: 1.8rem; font-weight: 800; color: #fbbf24; }
    .stat-box .l { font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }

    /* Station list */
    .station-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 14px 0; }
    .station-chip { background: rgba(96,165,250,0.06); border: 1px solid rgba(96,165,250,0.15); border-radius: 8px; padding: 10px 14px; font-size: 0.82rem; color: #93c5fd; text-align: center; }

    /* Contact bar */
    .contact-bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 16px 0; }
    .cb { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 18px; text-align: center; }
    .cb .ic { font-size: 1.4rem; margin-bottom: 6px; }
    .cb h4 { font-size: 0.88rem; color: #fff; margin-bottom: 4px; }
    .cb p { font-size: 0.82rem; color: #7f8ea3; margin: 0; }
    .cb a { color: #fbbf24; }

    /* Rank table */
    .rank-table { width: 100%; border-collapse: collapse; margin: 14px 0; background: #162a46; border-radius: 12px; overflow: hidden; }
    .rank-table th { background: #0f2040; padding: 10px 16px; text-align: left; font-size: 0.72rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px; }
    .rank-table td { padding: 10px 16px; border-bottom: 1px solid #1e3352; font-size: 0.84rem; color: #cbd5e1; }

    /* Divider */
    .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(251,191,36,0.15), transparent); margin: 8px 0; }

    /* Footer */
    .pg-footer { text-align: center; padding: 24px; font-size: 0.75rem; color: #1e3352; border-top: 1px solid #1e3352; margin-top: 40px; }

    /* CTA */
    .cta-row { display: flex; gap: 12px; margin: 20px 0; flex-wrap: wrap; }
    .cta-btn {
      padding: 10px 22px; border-radius: 10px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s;
    }
    .cta-gold { background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; }
    .cta-gold:hover { box-shadow: 0 4px 14px rgba(245,158,11,0.3); }
    .cta-outline { background: transparent; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); }
    .cta-outline:hover { background: rgba(96,165,250,0.08); }

    @media (max-width: 700px) {
      .info-grid, .station-grid { grid-template-columns: 1fr; }
      .contact-bar { grid-template-columns: 1fr; }
      .stat-row { gap: 10px; }
    }
  </style>
</head>
<body>

<div class="topbar">
  <div class="topbar-inner">
    <a href="{{ site.baseurl }}/" class="logo" style="text-decoration:none">
      <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA">
      <div><div class="logo-text">Deputy Sheriffs' Assoc.</div><div class="logo-sub">San Diego County</div></div>
    </a>
    <a href="{{ site.baseurl }}/" class="back-btn">&#8592; Back to Portal</a>
  </div>
</div>

<div class="page">

<h1>About the Deputy Sheriffs' Association</h1>
<p class="lead">The official labor union representing all sworn personnel of the San Diego County Sheriff's Department since 1955. Learn about our mission, structure, services, and how we support over 4,200 deputies and their families.</p>

<div class="stat-row">
  <div class="stat-box"><div class="n">4,229</div><div class="l">Active Members</div></div>
  <div class="stat-box"><div class="n">1955</div><div class="l">Year Founded</div></div>
  <div class="stat-box"><div class="n">12+</div><div class="l">Stations Covered</div></div>
  <div class="stat-box"><div class="n">24/7</div><div class="l">Legal Hotline</div></div>
</div>

<div class="divider"></div>

<h2>Our Mission</h2>
<p>The Deputy Sheriffs' Association of San Diego County (DSA) is the exclusive collective bargaining unit for all sworn deputies. We negotiate Memoranda of Understanding (MOUs) covering wages, benefits, working conditions, overtime, and retirement with the County of San Diego.</p>
<p>Our core mission includes:</p>
<ul>
  <li><strong>Collective Bargaining</strong> &mdash; Negotiate fair wages, benefits, and working conditions for all sworn personnel</li>
  <li><strong>Legal Defense</strong> &mdash; Provide 24/7 legal representation for administrative investigations, critical incidents, and civil litigation</li>
  <li><strong>Member Benefits</strong> &mdash; Comprehensive health, dental, vision, life, and disability insurance at negotiated group rates</li>
  <li><strong>Political Action</strong> &mdash; Advocate for legislation supporting law enforcement and public safety</li>
  <li><strong>Wellness & Peer Support</strong> &mdash; Confidential counseling, CISM debriefings, fitness partnerships, and family support</li>
  <li><strong>Community Engagement</strong> &mdash; Shop with a Deputy, scholarship programs, holiday events, and charity fundraisers</li>
</ul>

<div class="divider"></div>

<h2>Organizational Structure</h2>

<div class="info-grid">
  <div class="info-card">
    <img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="DSA Board">
    <h3>Board of Directors</h3>
    <p>The DSA is governed by an elected Board of Directors that meets monthly at DSA Headquarters in Poway. The Board reviews operations, approves expenditures, sets policy, and oversees all DSA programs and services.</p>
  </div>
  <div class="info-card">
    <img src="{{ site.baseurl }}/images/dsa/staff-photo-1.png" alt="DSA Staff">
    <h3>Headquarters Staff</h3>
    <p>Full-time staff at DSA HQ manage day-to-day operations including member services, benefits administration, communications, and event coordination. Located at 13881 Danielson Street, Poway, CA 92064.</p>
  </div>
  <div class="info-card">
    <h3>Shop Stewards</h3>
    <p>Trained union representatives assigned to each station and facility. Stewards provide frontline contract enforcement, represent members in grievance proceedings, and ensure MOU compliance on a daily basis.</p>
    <ul>
      <li>First point of contact for workplace issues</li>
      <li>Weingarten Rights representation</li>
      <li>Grievance filing assistance</li>
      <li>MOU interpretation and guidance</li>
    </ul>
  </div>
  <div class="info-card">
    <h3>Political Action Committee</h3>
    <p>The DSA PAC researches and endorses candidates for local, state, and federal elections who support law enforcement. Published voter guides, legislative advocacy, and voluntary member contributions fund political activities.</p>
  </div>
</div>

<div class="divider"></div>

<h2>Rank Structure</h2>
<p>The San Diego County Sheriff's Department uses a standard law enforcement rank hierarchy. The DSA represents all sworn personnel at every rank level:</p>

<table class="rank-table">
  <thead><tr><th>Rank</th><th>Role</th><th>Typical Responsibilities</th></tr></thead>
  <tbody>
    <tr><td><strong>Deputy</strong></td><td>Entry-level sworn officer</td><td>Patrol, calls for service, report writing, community policing, court appearances</td></tr>
    <tr><td><strong>Corporal</strong></td><td>Senior deputy / field training</td><td>Field training officer (FTO), shift lead, specialized unit roles, mentoring new deputies</td></tr>
    <tr><td><strong>Sergeant</strong></td><td>First-line supervisor</td><td>Squad supervision, incident command, performance evaluations, scheduling, policy enforcement</td></tr>
    <tr><td><strong>Lieutenant</strong></td><td>Division commander</td><td>Station or unit command, budget oversight, inter-agency coordination, strategic planning</td></tr>
    <tr><td><strong>Captain</strong></td><td>Senior commander</td><td>Station commander, departmental policy, executive leadership, public affairs, major operations</td></tr>
  </tbody>
</table>

<div class="divider"></div>

<h2>Stations & Facilities</h2>
<p>DSA members serve across San Diego County at patrol stations, detention facilities, and specialized units:</p>

<h3>Patrol Stations</h3>
<div class="station-grid">
  <div class="station-chip">San Diego Central</div>
  <div class="station-chip">Vista</div>
  <div class="station-chip">Encinitas</div>
  <div class="station-chip">Fallbrook</div>
  <div class="station-chip">Imperial Beach</div>
  <div class="station-chip">Santee</div>
  <div class="station-chip">San Marcos</div>
  <div class="station-chip">+ 7 more</div>
</div>

<h3>Detention & Specialized</h3>
<div class="station-grid">
  <div class="station-chip">Central Jail</div>
  <div class="station-chip">Vista Detention</div>
  <div class="station-chip">East Mesa</div>
  <div class="station-chip">SWAT</div>
  <div class="station-chip">K-9 Unit</div>
  <div class="station-chip">Investigations</div>
  <div class="station-chip">Search & Rescue</div>
  <div class="station-chip">Crime Lab</div>
</div>

<div class="divider"></div>

<h2>Member Benefits</h2>

<div class="info-grid">
  <div class="info-card">
    <h3>Health & Insurance</h3>
    <ul>
      <li><strong>Medical:</strong> Multiple plans, low copays, broad networks</li>
      <li><strong>Dental/Vision:</strong> Delta Dental PPO + VSP coverage</li>
      <li><strong>Life & Disability:</strong> Group term life + disability</li>
    </ul>
  </div>
  <div class="info-card">
    <h3>Legal Defense Fund</h3>
    <ul>
      <li><strong>IA Investigations:</strong> Full representation at hearings</li>
      <li><strong>Critical Incidents:</strong> 24/7 attorney response</li>
      <li><strong>Civil Litigation:</strong> Defense for on-duty lawsuits</li>
    </ul>
  </div>
  <div class="info-card">
    <h3>Wellness & Support</h3>
    <ul>
      <li><strong>Peer Support:</strong> Confidential counseling</li>
      <li><strong>CISM:</strong> Critical incident debriefings</li>
      <li><strong>Fitness:</strong> Gym discounts countywide</li>
    </ul>
  </div>
  <div class="info-card">
    <h3>Publications</h3>
    <ul>
      <li><strong>Silver Star Newsletter:</strong> Bi-monthly print publication</li>
      <li><strong>Legislative Updates:</strong> Bills affecting LE</li>
      <li><strong>Voter Guides:</strong> Election endorsements</li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h2>History & Milestones</h2>
<ul>
  <li><strong>1955</strong> &mdash; DSA founded as a collective bargaining unit for San Diego County deputies</li>
  <li><strong>1970s</strong> &mdash; Created the Legal Defense Fund for administrative and civil proceedings</li>
  <li><strong>2000s</strong> &mdash; Built DSA Headquarters in Poway; membership surpassed 3,000</li>
  <li><strong>2020s</strong> &mdash; Membership exceeds 4,200; modernized digital services and member portal</li>
</ul>

<div class="divider"></div>

<h2>Contact the DSA</h2>

<div class="contact-bar">
  <div class="cb"><div class="ic">&#128205;</div><h4>Visit Us</h4><p>13881 Danielson Street<br>Poway, CA 92064</p><p style="margin-top:4px;font-size:0.75rem;color:#475569">Mon-Fri 8:00 AM - 5:00 PM</p></div>
  <div class="cb"><div class="ic">&#128222;</div><h4>Call Us</h4><p><a href="tel:+18584869009">(858) 486-9009</a></p><p style="margin-top:4px;font-size:0.75rem;color:#475569">24/7 Legal Hotline</p></div>
  <div class="cb"><div class="ic">&#128231;</div><h4>Email Us</h4><p><a href="mailto:info@dsasd.org">info@dsasd.org</a></p><p style="margin-top:4px"><a href="mailto:benefits@dsasd.org" style="font-size:0.78rem;color:#fbbf24">benefits@dsasd.org</a></p></div>
</div>

<div class="cta-row" style="justify-content:center;margin-top:30px">
  <a href="{{ site.baseurl }}/" class="cta-btn cta-gold">Back to DSA Portal</a>
  <a href="https://dsasd.org" target="_blank" class="cta-btn cta-outline">Visit Official dsasd.org</a>
</div>

</div>

<div class="pg-footer">&copy; 2026 Deputy Sheriffs' Association of San Diego County &mdash; The Strength Behind the Badge</div>

</body>
</html>
