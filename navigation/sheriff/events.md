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
    .page h3 { font-size: 1.05rem; color: #e2e8f0; margin: 20px 0 8px; }
    .page p { font-size: 0.88rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.7; }

    /* Calendar */
    .calendar-container {
      background: #162a46; border: 1px solid #1e3352; border-radius: 16px; padding: 24px; margin-bottom: 32px;
    }
    .calendar-header {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
    }
    .calendar-nav {
      display: flex; gap: 8px; align-items: center;
    }
    .cal-btn {
      padding: 8px 12px; background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.3);
      border-radius: 8px; color: #fbbf24; cursor: pointer; font-size: 0.85rem; font-weight: 600;
      transition: all 0.2s;
    }
    .cal-btn:hover { background: rgba(251,191,36,0.15); }
    .cal-month {
      font-size: 1.1rem; font-weight: 700; color: #fbbf24; min-width: 150px; text-align: center;
    }
    .calendar-grid {
      display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 16px;
    }
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
    .event-header {
      display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;
    }
    .event-title { font-size: 1.1rem; font-weight: 700; color: #fbbf24; margin-bottom: 4px; }
    .event-date { font-size: 0.85rem; color: #60a5fa; font-weight: 600; }
    .event-time { font-size: 0.85rem; color: #94a3b8; }
    .event-location { font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px; }
    .event-desc { font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 12px; }
    .event-actions {
      display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
    }
    .rsvp-btn {
      padding: 8px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer;
      border: none; transition: all 0.2s;
    }
    .rsvp-yes { background: linear-gradient(135deg,#10b981,#059669); color: white; }
    .rsvp-yes:hover { box-shadow: 0 4px 14px rgba(16,185,129,0.3); }
    .rsvp-no { background: transparent; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); }
    .rsvp-no:hover { background: rgba(239,68,68,0.08); }
    .rsvp-count {
      font-size: 0.8rem; color: #64748b; padding: 4px 10px; background: rgba(100,116,139,0.1);
      border-radius: 12px;
    }
    .event-type {
      padding: 4px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .type-meeting { background: rgba(96,165,250,0.12); color: #60a5fa; }
    .type-social { background: rgba(251,191,36,0.12); color: #fbbf24; }
    .type-training { background: rgba(52,211,153,0.12); color: #34d399; }
    .type-fundraiser { background: rgba(239,68,68,0.12); color: #ef4444; }

    /* Create event form */
    .create-event {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.8));
      border: 1px solid #1e3352; border-radius: 16px; padding: 24px; margin-bottom: 32px;
    }
    .form-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
    }
    .form-group { margin-bottom: 16px; }
    .form-group.full { grid-column: 1 / -1; }
    .form-label {
      display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px; font-weight: 600;
    }
    .form-input, .form-select, .form-textarea {
      width: 100%; padding: 10px 14px; background: #0d1727; border: 1px solid #1e3352;
      border-radius: 8px; color: #e2e8f0; font-size: 0.85rem; outline: none;
      transition: all 0.2s;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: #fbbf24; background: rgba(251,191,36,0.05);
    }
    .form-textarea { resize: vertical; min-height: 80px; }
    .submit-btn {
      padding: 12px 24px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 10px;
      font-weight: 700; font-size: 0.9rem; cursor: pointer;
      transition: all 0.2s; letter-spacing: 0.3px;
    }
    .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }

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

    /* Responsive */
    @media (max-width: 700px) {
      .form-grid { grid-template-columns: 1fr; }
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
<p class="lead">Stay connected with your fellow deputies. View upcoming events, RSVP to attend, and create new gatherings for our community.</p>

<!-- Calendar -->
<div class="calendar-container">
  <div class="calendar-header">
    <div class="calendar-nav">
      <button class="cal-btn" onclick="changeMonth(-1)">&lt;</button>
      <div class="cal-month" id="currentMonth">January 2026</div>
      <button class="cal-btn" onclick="changeMonth(1)">&gt;</button>
    </div>
    <button class="cal-btn" onclick="goToToday()">Today</button>
  </div>
  <div class="calendar-grid" id="calendarGrid">
    <!-- Calendar will be generated by JavaScript -->
  </div>
</div>

<!-- Create Event Section -->
<div class="create-event" id="createEvent">
  <h2 style="color:#fbbf24;margin-bottom:20px">Create New Event</h2>
  <form id="eventForm" onsubmit="createEvent(event)">
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label">Event Title *</label>
        <input type="text" class="form-input" id="eventTitle" required placeholder="Monthly Meeting, BBQ, etc.">
      </div>
      <div class="form-group">
        <label class="form-label">Event Type *</label>
        <select class="form-select" id="eventType" required>
          <option value="">Select type...</option>
          <option value="meeting">Meeting</option>
          <option value="social">Social Event</option>
          <option value="training">Training</option>
          <option value="fundraiser">Fundraiser</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Date *</label>
        <input type="date" class="form-input" id="eventDate" required>
      </div>
      <div class="form-group">
        <label class="form-label">Time *</label>
        <input type="time" class="form-input" id="eventTime" required>
      </div>
      <div class="form-group full">
        <label class="form-label">Location *</label>
        <input type="text" class="form-input" id="eventLocation" required placeholder="DSA Headquarters, Station, etc.">
      </div>
      <div class="form-group full">
        <label class="form-label">Description</label>
        <textarea class="form-textarea" id="eventDescription" placeholder="Event details, agenda items, what to bring, etc."></textarea>
      </div>
    </div>
    <button type="submit" class="submit-btn">Create Event</button>
  </form>
</div>

<!-- Filter Tabs -->
<div class="filter-tabs">
  <button class="filter-tab active" onclick="filterEvents('all')">All Events</button>
  <button class="filter-tab" onclick="filterEvents('meeting')">Meetings</button>
  <button class="filter-tab" onclick="filterEvents('social')">Social</button>
  <button class="filter-tab" onclick="filterEvents('training')">Training</button>
  <button class="filter-tab" onclick="filterEvents('fundraiser">Fundraisers</button>
</div>

<!-- Events List -->
<div class="events-section" id="eventsList">
  <!-- Events will be populated by JavaScript -->
</div>

</div>

<script>
// Calendar state
let currentDate = new Date();
let selectedDate = null;
let events = [];

// Sample events data (in real app, this would come from backend)
const sampleEvents = [
  {
    id: 1,
    title: "Monthly General Meeting",
    type: "meeting",
    date: "2026-04-15",
    time: "18:00",
    location: "DSA Headquarters, Poway",
    description: "Regular monthly meeting to discuss union business, upcoming negotiations, and member concerns. Dinner will be provided.",
    rsvp: { yes: 45, no: 8, total: 53 }
  },
  {
    id: 2,
    title: "Spring BBQ & Family Day",
    type: "social",
    date: "2026-04-22",
    time: "12:00",
    location: "Vista Station Picnic Area",
    description: "Bring your family for a spring BBQ. Games, activities for kids, and great food. Members and their families welcome.",
    rsvp: { yes: 120, no: 15, total: 135 }
  },
  {
    id: 3,
    title: "Legal Defense Workshop",
    type: "training",
    date: "2026-04-28",
    time: "14:00",
    location: "Central Jail Training Room",
    description: "Essential training on your rights during administrative investigations, critical incident procedures, and legal defense best practices.",
    rsvp: { yes: 28, no: 5, total: 33 }
  },
  {
    id: 4,
    title: "Scholarship Fundraiser Gala",
    type: "fundraiser",
    date: "2026-05-06",
    time: "19:00",
    location: "Sheraton Mission Valley",
    description: "Annual fundraising gala to support scholarships for deputies' children. Dinner, auction, and guest speakers.",
    rsvp: { yes: 85, no: 12, total: 97 }
  }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  events = sampleEvents;
  renderCalendar();
  renderEvents();
  
  // Set today's date as default for event creation
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('eventDate').value = today;
});

// Calendar functions
function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  
  const startDate = firstDay.getDay();
  const endDate = lastDay.getDate();
  const prevEndDate = prevLastDay.getDate();
  
  // Update month display
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;
  
  // Generate calendar grid
  let html = '';
  
  // Day headers
  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayHeaders.forEach(day => {
    html += `<div class="cal-day-header">${day}</div>`;
  });
  
  // Previous month days
  for (let i = startDate - 1; i >= 0; i--) {
    html += `<div class="cal-day other-month">${prevEndDate - i}</div>`;
  }
  
  // Current month days
  const today = new Date();
  for (let day = 1; day <= endDate; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const hasEvent = events.some(e => e.date === dateStr);
    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    const isSelected = selectedDate === dateStr;
    
    let classes = 'cal-day';
    if (hasEvent) classes += ' has-event';
    if (isToday) classes += ' today';
    if (isSelected) classes += ' selected';
    
    html += `<div class="${classes}" onclick="selectDate('${dateStr}')">${day}</div>`;
  }
  
  // Next month days
  const remainingDays = 42 - (startDate + endDate);
  for (let day = 1; day <= remainingDays; day++) {
    html += `<div class="cal-day other-month">${day}</div>`;
  }
  
  document.getElementById('calendarGrid').innerHTML = html;
}

function changeMonth(direction) {
  currentDate.setMonth(currentDate.getMonth() + direction);
  renderCalendar();
}

function goToToday() {
  currentDate = new Date();
  selectedDate = new Date().toISOString().split('T')[0];
  renderCalendar();
  renderEvents();
}

function selectDate(dateStr) {
  selectedDate = dateStr;
  renderCalendar();
  renderEvents();
}

// Events functions
function renderEvents(filter = 'all') {
  const eventsList = document.getElementById('eventsList');
  let filteredEvents = events;
  
  if (filter !== 'all') {
    filteredEvents = events.filter(e => e.type === filter);
  }
  
  // If a date is selected, show only that date's events
  if (selectedDate) {
    filteredEvents = filteredEvents.filter(e => e.date === selectedDate);
  }
  
  // Sort by date
  filteredEvents.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
  
  if (filteredEvents.length === 0) {
    eventsList.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px">No events found for the selected criteria.</p>';
    return;
  }
  
  let html = '';
  filteredEvents.forEach(event => {
    const typeClass = `type-${event.type}`;
    const eventDate = new Date(event.date);
    const dateStr = eventDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    html += `
      <div class="event-card">
        <div class="event-header">
          <div>
            <div class="event-title">${event.title}</div>
            <div class="event-date">${dateStr}</div>
            <div class="event-time">${event.time} &bull; ${event.location}</div>
          </div>
          <div class="event-type ${typeClass}">${event.type}</div>
        </div>
        <div class="event-desc">${event.description}</div>
        <div class="event-actions">
          <button class="rsvp-btn rsvp-yes" onclick="rsvpEvent(${event.id}, 'yes')">RSVP Yes</button>
          <button class="rsvp-btn rsvp-no" onclick="rsvpEvent(${event.id}, 'no')">RSVP No</button>
          <div class="rsvp-count">${event.rsvp.yes} attending &bull; ${event.rsvp.total} responses</div>
        </div>
      </div>
    `;
  });
  
  eventsList.innerHTML = html;
}

function filterEvents(type) {
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  renderEvents(type);
}

function rsvpEvent(eventId, response) {
  const event = events.find(e => e.id === eventId);
  if (event) {
    if (response === 'yes' && !event.rsvp.userResponded) {
      event.rsvp.yes++;
      event.rsvp.total++;
      event.rsvp.userResponded = true;
    } else if (response === 'no' && !event.rsvp.userResponded) {
      event.rsvp.no++;
      event.rsvp.total++;
      event.rsvp.userResponded = true;
    }
    
    renderEvents();
    
    // Show confirmation
    const action = response === 'yes' ? 'attending' : 'not attending';
    alert(`You have been marked as ${action} for "${event.title}".`);
  }
}

function createEvent(e) {
  e.preventDefault();
  
  const newEvent = {
    id: events.length + 1,
    title: document.getElementById('eventTitle').value,
    type: document.getElementById('eventType').value,
    date: document.getElementById('eventDate').value,
    time: document.getElementById('eventTime').value,
    location: document.getElementById('eventLocation').value,
    description: document.getElementById('eventDescription').value,
    rsvp: { yes: 0, no: 0, total: 0 }
  };
  
  events.push(newEvent);
  
  // Reset form
  document.getElementById('eventForm').reset();
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('eventDate').value = today;
  
  // Refresh display
  renderCalendar();
  renderEvents();
  
  alert(`Event "${newEvent.title}" has been created successfully!`);
  
  // Scroll to events list
  document.getElementById('eventsList').scrollIntoView({ behavior: 'smooth' });
}

/* ================================================================
   AUTO-FILL event form with logged-in user's station as default location
   ================================================================ */
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(user => {
    // Pre-fill the event location with user's station
    const locInput = document.getElementById('eventLocation');
    if (user.station && !locInput.value) locInput.value = user.station;

    // Show a welcome note on the page
    const lead = document.querySelector('.page .lead');
    if (lead && user.name) {
      lead.textContent = `Welcome, ${user.name.split(' ')[0]}! View upcoming events, RSVP to attend, and create new gatherings for our community.`;
    }
  })
  .catch(() => {});
</script>

</body>
</html>
