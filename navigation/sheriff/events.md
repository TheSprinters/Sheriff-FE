---
layout: none
title: DSA Events
permalink: /sheriff/events
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Events &mdash; Deputy Sheriffs' Association of San Diego County</title>
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
    .page { max-width: 1000px; margin: 0 auto; padding: 40px 24px 60px; }
    .page h1 { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; }
    .page .lead { color: #7f8ea3; font-size: 1rem; margin-bottom: 32px; }
    .page h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.12); padding-bottom: 8px; margin: 36px 0 16px; }

    /* Calendar */
    .calendar-container {
      background: #162a46; border: 1px solid #1e3352; border-radius: 16px; padding: 24px; margin-bottom: 32px;
    }
    .calendar-header {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
    }
    .calendar-nav { display: flex; gap: 8px; align-items: center; }
    .cal-btn {
      padding: 8px 12px; background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.3);
      border-radius: 8px; color: #fbbf24; cursor: pointer; font-size: 0.85rem; font-weight: 600;
      transition: all 0.2s;
    }
    .cal-btn:hover { background: rgba(251,191,36,0.15); }
    .cal-month { font-size: 1.1rem; font-weight: 700; color: #fbbf24; min-width: 150px; text-align: center; }
    .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 16px; }
    .cal-day-header {
      padding: 8px; text-align: center; font-size: 0.75rem; font-weight: 700;
      color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .cal-day {
      aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
      background: rgba(22,42,70,0.6); border: 1px solid rgba(30,51,82,0.5);
      border-radius: 8px; font-size: 0.85rem; color: #94a3b8; cursor: pointer;
      transition: all 0.2s; position: relative;
    }
    .cal-day:hover { background: rgba(251,191,36,0.08); border-color: rgba(251,191,36,0.3); color: #fbbf24; }
    .cal-day.other-month { color: #475569; opacity: 0.5; }
    .cal-day.today { background: rgba(251,191,36,0.15); border-color: rgba(251,191,36,0.4); color: #fbbf24; font-weight: 700; }
    .cal-day.has-event::after {
      content: ''; position: absolute; bottom: 4px; width: 4px; height: 4px;
      background: #f59e0b; border-radius: 50%;
    }
    .cal-day.selected { background: rgba(251,191,36,0.25); border-color: #fbbf24; color: #fff; font-weight: 700; }

    /* Events list */
    .events-section { margin-bottom: 32px; }
    .event-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 20px;
      margin-bottom: 16px; transition: all 0.2s;
    }
    .event-card:hover { border-color: #fbbf24; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.3); }
    .event-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .event-title { font-size: 1.1rem; font-weight: 700; color: #fbbf24; margin-bottom: 4px; }
    .event-date { font-size: 0.85rem; color: #60a5fa; font-weight: 600; }
    .event-time { font-size: 0.85rem; color: #94a3b8; }
    .event-desc { font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 12px; }
    .event-actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .rsvp-btn {
      padding: 8px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer;
      border: none; transition: all 0.2s;
    }
    .rsvp-yes { background: linear-gradient(135deg,#10b981,#059669); color: white; }
    .rsvp-yes:hover { box-shadow: 0 4px 14px rgba(16,185,129,0.3); }
    .rsvp-no { background: transparent; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); }
    .rsvp-no:hover { background: rgba(239,68,68,0.08); }
    .rsvp-yes.active-rsvp { box-shadow: 0 0 0 2px #10b981; }
    .rsvp-no.active-rsvp  { background: rgba(239,68,68,0.15); box-shadow: 0 0 0 2px #ef4444; }
    .rsvp-count {
      font-size: 0.8rem; color: #64748b; padding: 4px 10px; background: rgba(100,116,139,0.1);
      border-radius: 12px;
    }
    .event-type {
      padding: 4px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .type-meeting   { background: rgba(96,165,250,0.12); color: #60a5fa; }
    .type-social    { background: rgba(251,191,36,0.12); color: #fbbf24; }
    .type-training  { background: rgba(52,211,153,0.12); color: #34d399; }
    .type-fundraiser{ background: rgba(239,68,68,0.12); color: #ef4444; }

    /* Filter tabs */
    .filter-tabs {
      display: flex; gap: 4px; background: rgba(22,42,70,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 6px; margin-bottom: 20px; overflow-x: auto;
    }
    .filter-tab {
      padding: 8px 16px; border: none; background: transparent; color: #94a3b8;
      font-size: 0.84rem; font-weight: 600; cursor: pointer; border-radius: 8px;
      transition: all 0.2s; white-space: nowrap;
    }
    .filter-tab:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
    .filter-tab.active {
      background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1));
      color: #fbbf24; box-shadow: inset 0 0 0 1px rgba(251,191,36,0.25);
    }

    /* Loading spinner */
    .loading-text { text-align: center; color: #64748b; padding: 40px; }

    @media (max-width: 700px) {
      .calendar-grid { gap: 1px; }
      .cal-day { font-size: 0.75rem; }
      .event-header { flex-direction: column; gap: 8px; }
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

<h1>DSA Events Calendar</h1>
<p class="lead" id="leadText">View upcoming events and RSVP.</p>

<!-- Calendar -->
<div class="calendar-container">
  <div class="calendar-header">
    <div class="calendar-nav">
      <button class="cal-btn" onclick="changeMonth(-1)">&lt;</button>
      <div class="cal-month" id="currentMonth">Loading…</div>
      <button class="cal-btn" onclick="changeMonth(1)">&gt;</button>
    </div>
    <button class="cal-btn" onclick="goToToday()">Today</button>
  </div>
  <div class="calendar-grid" id="calendarGrid"></div>
</div>

<!-- Filter Tabs -->
<div class="filter-tabs">
  <button class="filter-tab active" data-filter="all"    onclick="setFilter('all',this)">All Events</button>
  <button class="filter-tab"        data-filter="meeting"   onclick="setFilter('meeting',this)">Meetings</button>
  <button class="filter-tab"        data-filter="social"    onclick="setFilter('social',this)">Social</button>
  <button class="filter-tab"        data-filter="training"  onclick="setFilter('training',this)">Training</button>
  <button class="filter-tab"        data-filter="fundraiser" onclick="setFilter('fundraiser',this)">Fundraisers</button>
</div>

<!-- Events List -->
<div class="events-section" id="eventsList">
  <div class="loading-text">Loading events…</div>
</div>

</div>

<script>
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

let currentDate  = new Date();
let selectedDate = null;
let allEvents    = [];
let activeFilter = 'all';
let currentUser  = null;
// map of eventId -> user's RSVP response ('yes'/'no')
let myRsvps = {};

/* ──────────────────────────────────────────────────────────────
   Date helper — parse ISO "YYYY-MM-DD" as LOCAL date (no UTC shift)
────────────────────────────────────────────────────────────── */
function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function fmtDateLong(iso) {
  return parseLocalDate(iso).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

/* ──────────────────────────────────────────────────────────────
   Bootstrap: load user + events on DOMContentLoaded
────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  // Try to identify the logged-in user (graceful if not logged in)
  try {
    const r = await fetch(`${API}/api/sheriff/id`, { credentials: 'include' });
    if (r.ok) {
      currentUser = await r.json();
      const lead = document.getElementById('leadText');
      if (currentUser.name) {
        lead.textContent = `Welcome, ${currentUser.name.split(' ')[0]}! View events and RSVP.`;
      }
    }
  } catch (_) {}

  await fetchEvents();
  renderCalendar();
  renderEvents();
});

/* ──────────────────────────────────────────────────────────────
   Fetch events from backend
────────────────────────────────────────────────────────────── */
async function fetchEvents() {
  try {
    const r = await fetch(`${API}/api/events`, { credentials: 'include' });
    if (!r.ok) throw new Error('Failed');
    allEvents = await r.json();
  } catch (_) {
    document.getElementById('eventsList').innerHTML =
      '<p style="text-align:center;color:#ef4444;padding:40px">Could not load events. Please try again.</p>';
  }
}

/* ──────────────────────────────────────────────────────────────
   Calendar rendering
────────────────────────────────────────────────────────────── */
function renderCalendar() {
  const year      = currentDate.getFullYear();
  const month     = currentDate.getMonth();
  const firstDay  = new Date(year, month, 1);
  const lastDay   = new Date(year, month + 1, 0);
  const prevLast  = new Date(year, month, 0);

  const startDOW  = firstDay.getDay();
  const endDate   = lastDay.getDate();
  const prevEnd   = prevLast.getDate();

  const monthNames = ["January","February","March","April","May","June",
    "July","August","September","October","November","December"];
  document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

  let html = '';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => {
    html += `<div class="cal-day-header">${d}</div>`;
  });

  // Previous-month padding
  for (let i = startDOW - 1; i >= 0; i--) {
    html += `<div class="cal-day other-month">${prevEnd - i}</div>`;
  }

  const today = new Date();
  for (let day = 1; day <= endDate; day++) {
    const dateStr  = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const hasEvent = allEvents.some(e => e.date === dateStr);
    const isToday  = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    const isSel    = selectedDate === dateStr;

    let cls = 'cal-day';
    if (hasEvent) cls += ' has-event';
    if (isToday)  cls += ' today';
    if (isSel)    cls += ' selected';

    html += `<div class="${cls}" onclick="selectDate('${dateStr}')">${day}</div>`;
  }

  // Next-month padding
  const remaining = 42 - (startDOW + endDate);
  for (let day = 1; day <= remaining; day++) {
    html += `<div class="cal-day other-month">${day}</div>`;
  }

  document.getElementById('calendarGrid').innerHTML = html;
}

function changeMonth(dir) {
  currentDate.setMonth(currentDate.getMonth() + dir);
  renderCalendar();
}

function goToToday() {
  currentDate  = new Date();
  selectedDate = new Date().toISOString().split('T')[0];
  renderCalendar();
  renderEvents();
}

function selectDate(dateStr) {
  selectedDate = (selectedDate === dateStr) ? null : dateStr;
  renderCalendar();
  renderEvents();
}

/* ──────────────────────────────────────────────────────────────
   Filter tabs
────────────────────────────────────────────────────────────── */
function setFilter(type, btn) {
  activeFilter = type;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderEvents();
}

/* ──────────────────────────────────────────────────────────────
   Events list rendering
────────────────────────────────────────────────────────────── */
function renderEvents() {
  const container = document.getElementById('eventsList');
  let filtered    = allEvents.slice();

  if (activeFilter !== 'all') {
    filtered = filtered.filter(e => e.type === activeFilter);
  }
  if (selectedDate) {
    filtered = filtered.filter(e => e.date === selectedDate);
  }

  filtered.sort((a, b) => {
    const da = parseLocalDate(a.date).getTime() + timeToMs(a.time);
    const db = parseLocalDate(b.date).getTime() + timeToMs(b.time);
    return da - db;
  });

  if (!filtered.length) {
    container.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px">No events found for the selected criteria.</p>';
    return;
  }

  container.innerHTML = filtered.map(ev => {
    const myResp    = myRsvps[ev.id] || null;
    const yesActive = myResp === 'yes' ? ' active-rsvp' : '';
    const noActive  = myResp === 'no'  ? ' active-rsvp' : '';
    const rsvpDisabled = !currentUser ? 'title="Log in to RSVP"' : '';

    return `
      <div class="event-card" id="event-${ev.id}">
        <div class="event-header">
          <div>
            <div class="event-title">${escHtml(ev.title)}</div>
            <div class="event-date">${fmtDateLong(ev.date)}</div>
            <div class="event-time">${escHtml(ev.time)} &bull; ${escHtml(ev.location)}</div>
          </div>
          <div class="event-type type-${ev.type}">${ev.type}</div>
        </div>
        ${ev.description ? `<div class="event-desc">${escHtml(ev.description)}</div>` : ''}
        <div class="event-actions">
          <button class="rsvp-btn rsvp-yes${yesActive}" ${rsvpDisabled} onclick="submitRsvp(${ev.id},'yes')">&#10003; Going</button>
          <button class="rsvp-btn rsvp-no${noActive}"   ${rsvpDisabled} onclick="submitRsvp(${ev.id},'no')">&#10007; Not Going</button>
          <div class="rsvp-count">${ev.rsvp.yes} attending &bull; ${ev.rsvp.total} responses</div>
        </div>
      </div>
    `;
  }).join('');
}

function timeToMs(timeStr) {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return ((h || 0) * 60 + (m || 0)) * 60000;
}

function escHtml(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ──────────────────────────────────────────────────────────────
   RSVP submission
────────────────────────────────────────────────────────────── */
async function submitRsvp(eventId, response) {
  if (!currentUser) {
    alert('Please log in to RSVP for events.');
    return;
  }

  // Optimistic toggle: if already this response, treat as a confirmation
  const prev = myRsvps[eventId];
  myRsvps[eventId] = response;

  try {
    const r = await fetch(`${API}/api/events/${eventId}/rsvp`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response })
    });
    if (!r.ok) throw new Error('Failed');
    // Re-fetch to get updated counts
    await fetchEvents();
    renderCalendar();
    renderEvents();
  } catch (_) {
    // Revert optimistic update on failure
    if (prev) myRsvps[eventId] = prev;
    else delete myRsvps[eventId];
    alert('Could not save your RSVP. Please try again.');
  }
}
</script>

</body>
</html>
