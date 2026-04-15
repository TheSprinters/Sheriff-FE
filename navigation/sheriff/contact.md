---
layout: none
title: Contact
permalink: /sheriff/contact
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact &mdash; Deputy Sheriffs' Association of San Diego County</title>
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
    .page p { font-size: 0.88rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.7; }

    /* Contact cards */
    .contact-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px;
    }
    .contact-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 24px;
      transition: all 0.2s; text-align: center;
    }
    .contact-card:hover {
      border-color: #fbbf24; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.3);
    }
    .contact-icon {
      font-size: 2.5rem; color: #fbbf24; margin-bottom: 16px;
    }
    .contact-title {
      font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 8px;
    }
    .contact-info {
      font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin-bottom: 16px;
    }
    .contact-action {
      display: inline-block; padding: 8px 16px; background: rgba(251,191,36,0.08);
      border: 1px solid rgba(251,191,36,0.3); border-radius: 8px; color: #fbbf24;
      font-size: 0.85rem; font-weight: 600; text-decoration: none; transition: all 0.2s;
    }
    .contact-action:hover { background: rgba(251,191,36,0.15); }

    /* Contact form */
    .contact-form {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.8));
      border: 1px solid #1e3352; border-radius: 16px; padding: 32px; margin-bottom: 40px;
    }
    .form-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;
    }
    .form-group {
      display: flex; flex-direction: column;
    }
    .form-group.full { grid-column: 1 / -1; }
    .form-label {
      font-size: 0.85rem; color: #94a3b8; margin-bottom: 6px; font-weight: 600;
    }
    .form-input, .form-select, .form-textarea {
      padding: 10px 14px; background: #0d1727; border: 1px solid #1e3352;
      border-radius: 8px; color: #e2e8f0; font-size: 0.85rem; outline: none;
      transition: all 0.2s;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: #fbbf24; background: rgba(251,191,36,0.05);
    }
    .form-textarea { resize: vertical; min-height: 120px; }
    .submit-btn {
      padding: 12px 32px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 10px;
      font-weight: 700; font-size: 0.9rem; cursor: pointer;
      transition: all 0.2s; letter-spacing: 0.3px;
    }
    .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }

    /* Emergency contacts */
    .emergency-section {
      background: linear-gradient(135deg, rgba(239,68,68,0.08), rgba(220,38,38,0.04));
      border: 1px solid rgba(239,68,68,0.25); border-radius: 16px; padding: 32px;
      margin-bottom: 40px;
    }
    .emergency-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
    }
    .emergency-icon {
      font-size: 2rem; color: #ef4444;
    }
    .emergency-title {
      font-size: 1.3rem; font-weight: 700; color: #ef4444;
    }
    .emergency-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;
    }
    .emergency-card {
      background: rgba(11,26,46,0.6); border: 1px solid rgba(239,68,68,0.2);
      border-radius: 12px; padding: 20px;
    }
    .emergency-card h3 {
      color: #ef4444; font-size: 1rem; margin-bottom: 8px;
    }
    .emergency-card p {
      font-size: 0.9rem; color: #cbd5e1; margin-bottom: 8px;
    }
    .emergency-number {
      font-size: 1.2rem; font-weight: 700; color: #ef4444; margin-bottom: 4px;
    }
    .emergency-note {
      font-size: 0.8rem; color: #64748b; font-style: italic;
    }

    /* Staff directory */
    .staff-section {
      background: #162a46; border: 1px solid #1e3352; border-radius: 16px; padding: 32px; margin-bottom: 40px;
    }
    .staff-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;
    }
    .staff-card {
      background: rgba(22,42,70,0.6); border: 1px solid #1e3352; border-radius: 12px; padding: 20px;
      transition: all 0.2s;
    }
    .staff-card:hover {
      border-color: rgba(251,191,36,0.3); transform: translateY(-2px);
    }
    .staff-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
    }
    .staff-avatar {
      width: 48px; height: 48px; background: linear-gradient(135deg,#f59e0b,#d97706);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; color: #1e3a5f; font-weight: 700;
    }
    .staff-info h3 {
      font-size: 1rem; color: #fbbf24; margin-bottom: 2px;
    }
    .staff-info p {
      font-size: 0.8rem; color: #64748b; margin: 0;
    }
    .staff-contact {
      font-size: 0.85rem; color: #94a3b8; line-height: 1.5;
    }
    .staff-contact strong { color: #cbd5e1; }

    /* Hours section */
    .hours-section {
      background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
      border: 1px solid rgba(251,191,36,0.25); border-radius: 16px; padding: 32px;
      margin-bottom: 40px;
    }
    .hours-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;
    }
    .hours-card {
      text-align: center;
    }
    .hours-title {
      font-size: 1rem; font-weight: 700; color: #fbbf24; margin-bottom: 8px;
    }
    .hours-time {
      font-size: 0.9rem; color: #cbd5e1; margin-bottom: 4px;
    }
    .hours-note {
      font-size: 0.8rem; color: #64748b;
    }

    /* Map section */
    .map-section {
      background: #162a46; border: 1px solid #1e3352; border-radius: 16px; padding: 32px; margin-bottom: 40px;
    }
    .map-container {
      background: #0f2040; border-radius: 12px; height: 400px; display: flex; align-items: center; justify-content: center;
      color: #475569; font-size: 1.1rem; position: relative; overflow: hidden;
    }
    .map-container::before {
      content: ''; position: absolute; top: 50%; left: 50%; width: 100px; height: 100px;
      background: radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%);
      transform: translate(-50%, -50%);
    }
    .map-placeholder {
      text-align: center; z-index: 1;
    }
    .map-icon { font-size: 3rem; margin-bottom: 12px; }

    /* Responsive */
    @media (max-width: 700px) {
      .contact-form { padding: 24px; }
      .emergency-section { padding: 24px; }
      .staff-section { padding: 24px; }
      .hours-section { padding: 24px; }
      .map-section { padding: 24px; }
      .map-container { height: 300px; }
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

<h1>Contact the DSA</h1>
<p class="lead">Get in touch with your Deputy Sheriffs' Association. We're here to help with membership questions, benefits, legal defense, and any other support you need.</p>

<!-- Main Contact Methods -->
<div class="contact-grid">
  <div class="contact-card">
    <div class="contact-icon">&#128205;</div>
    <div class="contact-title">Visit Us</div>
    <div class="contact-info">
      13881 Danielson Street<br>
      Poway, CA 92064<br>
      <strong>Main Office Hours:</strong><br>
      Monday-Friday<br>
      8:00 AM - 5:00 PM
    </div>
    <a href="#" class="contact-action" onclick="getDirections(); return false;">Get Directions</a>
  </div>

  <div class="contact-card">
    <div class="contact-icon">&#128222;</div>
    <div class="contact-title">Call Us</div>
    <div class="contact-info">
      <strong>Main Office:</strong><br>
      (858) 486-9009<br><br>
      <strong>24/7 Legal Hotline:</strong><br>
      (858) 486-9009<br>
      Press 1 for Legal Defense
    </div>
    <a href="tel:+18584869009" class="contact-action">Call Now</a>
  </div>

  <div class="contact-card">
    <div class="contact-icon">&#128231;</div>
    <div class="contact-title">Email Us</div>
    <div class="contact-info">
      <strong>General Inquiries:</strong><br>
      info@dsasd.org<br><br>
      <strong>Benefits Department:</strong><br>
      benefits@dsasd.org<br><br>
      <strong>Legal Defense:</strong><br>
      legal@dsasd.org
    </div>
    <a href="mailto:info@dsasd.org" class="contact-action">Send Email</a>
  </div>
</div>

<!-- Emergency Contacts -->
<div class="emergency-section">
  <div class="emergency-header">
    <div class="emergency-icon">&#9888;</div>
    <div class="emergency-title">Emergency Contacts</div>
  </div>
  <div class="emergency-grid">
    <div class="emergency-card">
      <h3>Critical Incident</h3>
      <p>If you're involved in a critical incident or need immediate legal representation:</p>
      <div class="emergency-number">24/7 Legal Hotline</div>
      <div class="emergency-number">(858) 486-9009</div>
      <p class="emergency-note">Press 1 for Legal Defense - Available 24/7</p>
    </div>
    <div class="emergency-card">
      <h3>Peer Support Crisis</h3>
      <p>For immediate mental health support or crisis intervention:</p>
      <div class="emergency-number">Peer Support Hotline</div>
      <div class="emergency-number">(858) 486-9009</div>
      <p class="emergency-note">Press 2 for Wellness - Available 24/7</p>
    </div>
    <div class="emergency-card">
      <h3>Workplace Emergency</h3>
      <p>For urgent workplace issues or union representation needs:</p>
      <div class="emergency-number">On-Call Representative</div>
      <div class="emergency-number">(858) 486-9009</div>
      <p class="emergency-note">Press 3 for Union Rep - Available 24/7</p>
    </div>
  </div>
</div>

<!-- Contact Form -->
<div class="contact-form">
  <h2 style="color:#fbbf24;margin-bottom:20px;border:none;padding:0">Send Us a Message</h2>
  <p style="color:#94a3b8;margin-bottom:24px">Fill out the form below and we'll get back to you within one business day.</p>
  
  <form id="contactForm" onsubmit="submitContact(event)">
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label">Full Name *</label>
        <input type="text" class="form-input" id="fullName" required placeholder="John Smith">
      </div>
      <div class="form-group">
        <label class="form-label">Email Address *</label>
        <input type="email" class="form-input" id="email" required placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label class="form-label">Phone Number</label>
        <input type="tel" class="form-input" id="phone" placeholder="(xxx) xxx-xxxx">
      </div>
      <div class="form-group">
        <label class="form-label">Badge Number</label>
        <input type="text" class="form-input" id="badge" placeholder="SD-1234">
      </div>
      <div class="form-group">
        <label class="form-label">Department/Station</label>
        <input type="text" class="form-input" id="station" placeholder="Vista Station">
      </div>
      <div class="form-group">
        <label class="form-label">Topic *</label>
        <select class="form-select" id="topic" required>
          <option value="">Select a topic...</option>
          <option value="membership">Membership Questions</option>
          <option value="benefits">Benefits & Insurance</option>
          <option value="legal">Legal Defense</option>
          <option value="wellness">Wellness & Support</option>
          <option value="events">Events & Activities</option>
          <option value="career">Career Development</option>
          <option value="grievance">Grievance/Workplace Issue</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group full">
        <label class="form-label">Message *</label>
        <textarea class="form-textarea" id="message" required placeholder="Please describe your question or concern in detail..."></textarea>
      </div>
    </div>
    <button type="submit" class="submit-btn">Send Message</button>
  </form>
</div>

<!-- Staff Directory -->
<div class="staff-section">
  <h2 style="color:#fbbf24;margin-bottom:24px">Key Staff Contacts</h2>
  <div class="staff-grid">
    <div class="staff-card">
      <div class="staff-header">
        <div class="staff-avatar">EP</div>
        <div class="staff-info">
          <h3>Eric Parra</h3>
          <p>DSA President</p>
        </div>
      </div>
      <div class="staff-contact">
        <strong>Email:</strong> president@dsasd.org<br>
        <strong>Phone:</strong> (858) 486-9009 x 101<br>
        <strong>Responsibilities:</strong> Union leadership, negotiations, member advocacy
      </div>
    </div>
    
    <div class="staff-card">
      <div class="staff-header">
        <div class="staff-avatar">LM</div>
        <div class="staff-info">
          <h3>Lisa Martinez</h3>
          <p>Benefits Director</p>
        </div>
      </div>
      <div class="staff-contact">
        <strong>Email:</strong> benefits@dsasd.org<br>
        <strong>Phone:</strong> (858) 486-9009 x 201<br>
        <strong>Responsibilities:</strong> Health insurance, retirement, member benefits
      </div>
    </div>
    
    <div class="staff-card">
      <div class="staff-header">
        <div class="staff-avatar">JD</div>
        <div class="staff-info">
          <h3>James Davis</h3>
          <p>Legal Defense Coordinator</p>
        </div>
      </div>
      <div class="staff-contact">
        <strong>Email:</strong> legal@dsasd.org<br>
        <strong>Phone:</strong> (858) 486-9009 x 301<br>
        <strong>Responsibilities:</strong> Legal defense fund, case coordination
      </div>
    </div>
    
    <div class="staff-card">
      <div class="staff-header">
        <div class="staff-avatar">SJ</div>
        <div class="staff-info">
          <h3>Sarah Johnson</h3>
          <p>Wellness Program Manager</p>
        </div>
      </div>
      <div class="staff-contact">
        <strong>Email:</strong> wellness@dsasd.org<br>
        <strong>Phone:</strong> (858) 486-9009 x 401<br>
        <strong>Responsibilities:</strong> Peer support, mental health resources, wellness programs
      </div>
    </div>
    
    <div class="staff-card">
      <div class="staff-header">
        <div class="staff-avatar">RB</div>
        <div class="staff-info">
          <h3>Robert Brown</h3>
          <p>Events Coordinator</p>
        </div>
      </div>
      <div class="staff-contact">
        <strong>Email:</strong> events@dsasd.org<br>
        <strong>Phone:</strong> (858) 486-9009 x 501<br>
        <strong>Responsibilities:</strong> Member events, social activities, fundraising
      </div>
    </div>
    
    <div class="staff-card">
      <div class="staff-header">
        <div class="staff-avatar">TW</div>
        <div class="staff-info">
          <h3>Tina Wilson</h3>
          <p>Administrative Director</p>
        </div>
      </div>
      <div class="staff-contact">
        <strong>Email:</strong> admin@dsasd.org<br>
        <strong>Phone:</strong> (858) 486-9009 x 102<br>
        <strong>Responsibilities:</strong> Office operations, member records, communications
      </div>
    </div>
  </div>
</div>

<!-- Office Hours -->
<div class="hours-section">
  <h2 style="color:#fbbf24;margin-bottom:24px">Office Hours & Availability</h2>
  <div class="hours-grid">
    <div class="hours-card">
      <div class="hours-title">Main Office</div>
      <div class="hours-time">Monday - Friday</div>
      <div class="hours-time">8:00 AM - 5:00 PM</div>
      <div class="hours-note">Closed weekends & holidays</div>
    </div>
    
    <div class="hours-card">
      <div class="hours-title">Benefits Department</div>
      <div class="hours-time">Monday - Friday</div>
      <div class="hours-time">9:00 AM - 4:00 PM</div>
      <div class="hours-note">By appointment available</div>
    </div>
    
    <div class="hours-card">
      <div class="hours-title">Legal Defense</div>
      <div class="hours-time">24/7 Availability</div>
      <div class="hours-time">Emergency Hotline</div>
      <div class="hours-note">Always available for critical incidents</div>
    </div>
    
    <div class="hours-card">
      <div class="hours-title">Wellness Support</div>
      <div class="hours-time">24/7 Availability</div>
      <div class="hours-time">Peer Support Hotline</div>
      <div class="hours-note">Confidential support anytime</div>
    </div>
  </div>
</div>

<!-- Map -->
<div class="map-section">
  <h2 style="color:#fbbf24;margin-bottom:24px">Find Us</h2>
  <div class="map-container">
    <div class="map-placeholder">
      <div class="map-icon">&#128205;</div>
      <div>Interactive Map</div>
      <div style="font-size:0.9rem;margin-top:8px">13881 Danielson Street, Poway, CA 92064</div>
    </div>
  </div>
</div>

</div>

<script>
function submitContact(event) {
  event.preventDefault();
  
  const formData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    badge: document.getElementById('badge').value,
    station: document.getElementById('station').value,
    topic: document.getElementById('topic').value,
    message: document.getElementById('message').value
  };
  
  // In a real app, this would send the data to the backend
  console.log('Contact form submission:', formData);
  
  // Show success message
  alert(`Thank you for contacting the DSA, ${formData.fullName}!\n\nYour message regarding "${formData.topic}" has been received. We will respond within one business day.\n\nIf this is an urgent matter, please call our 24/7 hotline at (858) 486-9009.`);
  
  // Reset form
  document.getElementById('contactForm').reset();
}

function getDirections() {
  // In a real app, this would open Google Maps or Apple Maps
  const address = '13881 Danielson Street, Poway, CA 92064';
  
  // Try to detect if user is on mobile
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile device - open in maps app
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
  } else {
    // Desktop - open Google Maps
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
  }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
</script>

</body>
</html>
