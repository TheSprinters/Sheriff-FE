---
layout: aesthetihawk
title: "DSA Portal — Homepage Cleanup"
description: A follow-up pass on the DSA Sheriff Portal homepage focused on clarity, brevity, and clean navigation.
permalink: /capstone/dsa-homepage-cleanup
comments: false
---

<style>
  .bw { max-width: 880px; margin: 0 auto; padding: 24px; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #cbd5e1; line-height: 1.6; }
  .bw h1 { font-size: 2rem !important; font-weight: 800 !important; color: #e2e8f0 !important; margin: 0 0 6px !important; line-height: 1.3; }
  .bw .sub { color: #64748b; font-size: 0.95rem; margin-bottom: 28px; }
  .bw .sub a { color: #60a5fa; text-decoration: underline; }
  .bw h2 { font-size: 1.25rem !important; font-weight: 700 !important; color: #fbbf24 !important; border-bottom: 1px solid rgba(251,191,36,0.15); padding-bottom: 8px; margin: 32px 0 14px !important; }
  .bw h3 { font-size: 1.05rem !important; font-weight: 700 !important; color: #e2e8f0 !important; margin: 18px 0 8px !important; }
  .bw ul { padding-left: 20px !important; margin: 6px 0 14px !important; list-style-type: disc !important; }
  .bw li { font-size: 0.86rem; color: #cbd5e1; margin-bottom: 5px; line-height: 1.55; display: list-item !important; }
  .bw p { font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin-bottom: 10px; }
  .bw strong, .bw b { color: #e2e8f0; font-weight: 700; }
  .bw a { color: #60a5fa; text-decoration: underline; }
  .bw code { background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-size: 0.82rem; color: #93c5fd; font-family: 'Consolas', 'Monaco', monospace; }
  .bw .divider { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(251,191,36,0.18), transparent); margin: 28px 0; }

  .sb { display: flex; gap: 14px; flex-wrap: wrap; margin: 18px 0; }
  .si { flex: 1; min-width: 110px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; text-align: center; }
  .si .n { font-size: 1.7rem; font-weight: 800; color: #fbbf24; display: block; }
  .si .l { font-size: 0.68rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; display: block; margin-top: 2px; }

  .cg { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
  .cc { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px; }
  .cc h3 { margin-top: 0 !important; }
  .cc.old h3 { color: #94a3b8 !important; }
  .cc.new h3 { color: #fbbf24 !important; }
  .cc ul { margin-bottom: 0 !important; }

  @media (max-width: 700px) { .cg { grid-template-columns: 1fr; } }
</style>

<div class="bw">

<h1>DSA Portal &mdash; Homepage Cleanup</h1>

<p class="sub">A follow-up pass on the <a href="/capstone/dsa-redesign">DSA Sheriff Portal redesign</a>. The original site (<a href="https://dsasd.org" target="_blank">dsasd.org</a>) was long and cluttered; our first build replaced it, but the homepage still had every section inlined. This pass cut it down to a short, 2-scroll home with clear menus.</p>

<div class="sb">
  <div class="si"><span class="n">2129 &rarr; 702</span><span class="l">Lines on Homepage</span></div>
  <div class="si"><span class="n">10 &rarr; 3</span><span class="l">Menu Sections</span></div>
  <div class="si"><span class="n">~2</span><span class="l">Scrolls to Bottom</span></div>
  <div class="si"><span class="n">1</span><span class="l">Gamification Button</span></div>
</div>

<div class="divider"></div>

<h2>What Changed</h2>

<ul>
  <li><strong>Compact hero:</strong> shorter header block, smaller logo, tighter tagline, 2 CTAs (was 3), slim stats bar</li>
  <li><strong>Three clear menu sections</strong> replacing 10 inlined sections:
    <ul>
      <li><strong>Member Services</strong> &mdash; Benefits, Legal, Wellness, Forms (still open inline detail panels)</li>
      <li><strong>Community &amp; Info</strong> &mdash; News, Events, About, Store (link to <code>/sheriff/info</code>)</li>
      <li><strong>Career &amp; Support</strong> &mdash; Rank Pathway, FAQ, AI Assistant, Contact</li>
    </ul>
  </li>
  <li><strong>Games removed from homepage</strong> &mdash; replaced with a single big <strong>&#127918; Gamification</strong> button at the bottom linking to <code>/games</code></li>
  <li><strong>Cleaner nav:</strong> header links collapsed to Services / Community / Support / Full Info / Gamification (was 10 links)</li>
  <li><strong>Homepage trimmed from 2,129 to 702 lines</strong> by moving long content (calendar, store grid, pathway quiz, FAQ accordion, news cards, contact block) off the homepage</li>
  <li><strong>Kept on homepage:</strong> sticky header with search, login/signup modal, user dropdown, admin panel toggle, AI chatbot, 4 Member Services detail panels, footer</li>
</ul>

<div class="divider"></div>

<h2>Before &amp; After</h2>

<div class="cg">
  <div class="cc old">
    <h3>Before this pass</h3>
    <ul>
      <li>10 full sections inlined on the homepage</li>
      <li>Hero, Resources (8 tiles), News, Events calendar, About grid, Store grid, Games block, FAQ accordion, Pathway 4-step quiz, Contact, Admin</li>
      <li>10 nav links in the header (Resources, News, Events, About, Store, FAQ, Pathway, Contact, Games &hellip;)</li>
      <li>Games block took up a full section on the homepage</li>
      <li>~6+ scrolls to reach the footer</li>
      <li>2,129 lines in <code>navigation/sheriff/index.md</code></li>
    </ul>
  </div>
  <div class="cc new">
    <h3>After this pass</h3>
    <ul>
      <li>Short hero + 3 grouped menu sections</li>
      <li>Menu 1: Member Services (inline detail panels)</li>
      <li>Menu 2: Community &amp; Info (links to <code>/sheriff/info</code>)</li>
      <li>Menu 3: Career &amp; Support (pathway, FAQ, chatbot, contact)</li>
      <li>Big <strong>Gamification</strong> button at the bottom</li>
      <li>~2 scrolls to reach the footer</li>
      <li>702 lines in <code>navigation/sheriff/index.md</code></li>
    </ul>
  </div>
</div>

<div class="divider"></div>

<h2>Where the Old Content Lives Now</h2>

<ul>
  <li><strong>News, Events, About, Store</strong> &rarr; <code>/sheriff/info</code> with anchor links from the Community tiles</li>
  <li><strong>Rank Pathway quiz, FAQ accordion, Contact</strong> &rarr; <code>/sheriff/info</code> with anchor links from the Career &amp; Support tiles</li>
  <li><strong>Games (Net Patrol, Pop Quiz, MTU Lab)</strong> &rarr; <code>/games</code> via the bottom Gamification button</li>
  <li><strong>Member Services details</strong> &rarr; still inline on the homepage via expandable detail panels</li>
</ul>

<div class="divider"></div>

<h2>What Stayed Working</h2>

<ul>
  <li><strong>Auth:</strong> login/signup modal, JWT cookie session, user chip in the header</li>
  <li><strong>Admin panel:</strong> toggled from the user dropdown, loads the member table</li>
  <li><strong>AI Chatbot:</strong> floating button, OpenAI-backed, 10-message history window</li>
  <li><strong>Search:</strong> header search now maps to the new menu sections + <code>/sheriff/info</code></li>
  <li><strong>Detail panels:</strong> Benefits, Legal Defense, Wellness, Forms still expand inline with one click</li>
  <li><strong>Responsive:</strong> tiles collapse to 2 columns on tablet, mobile overlay menu at &lt;700px</li>
</ul>

<p style="text-align:center;color:#475569;font-size:0.8rem;margin-top:40px">Published April 14, 2026 &mdash; <a href="{{ site.baseurl }}/">Visit the DSA Portal</a></p>

</div>
