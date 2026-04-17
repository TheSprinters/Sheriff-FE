---
layout: none
title: FAQ
permalink: /sheriff/faq
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ &mdash; Deputy Sheriffs' Association of San Diego County</title>
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
    .page { max-width: 1000px; margin: 0 auto; padding: 28px 24px 40px; }
    .page h1 { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; }
    .page .lead { color: #7f8ea3; font-size: 1rem; margin-bottom: 32px; }
    .page h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.12); padding-bottom: 8px; margin: 36px 0 16px; }
    .page p { font-size: 0.88rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.7; }

    /* Search */
    .search-container {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.8));
      border: 1px solid #1e3352; border-radius: 16px; padding: 24px; margin-bottom: 32px;
    }
    .search-box {
      position: relative; max-width: 600px; margin: 0 auto;
    }
    .search-input {
      width: 100%; padding: 16px 50px 16px 20px; background: #0d1727; border: 1px solid #1e3352;
      border-radius: 12px; color: #e2e8f0; font-size: 0.95rem; outline: none;
      transition: all 0.2s;
    }
    .search-input::placeholder { color: #64748b; }
    .search-input:focus {
      border-color: #fbbf24; background: rgba(251,191,36,0.05);
      box-shadow: 0 0 0 3px rgba(251,191,36,0.1);
    }
    .search-icon {
      position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
      color: #64748b; font-size: 1.2rem; pointer-events: none;
    }

    /* Category tabs */
    .category-tabs {
      display: flex; gap: 4px; background: rgba(22,42,70,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 6px; margin-bottom: 32px; overflow-x: auto;
    }
    .category-tab {
      padding: 8px 16px; border: none; background: transparent; color: #94a3b8;
      font-size: 0.84rem; font-weight: 600; cursor: pointer; border-radius: 8px;
      transition: all 0.2s; white-space: nowrap;
    }
    .category-tab:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
    .category-tab.active {
      background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1));
      color: #fbbf24; box-shadow: inset 0 0 0 1px rgba(251,191,36,0.25);
    }

    /* FAQ items */
    .faq-container {
      margin-bottom: 40px;
    }
    .faq-item {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px;
      margin-bottom: 16px; overflow: hidden; transition: all 0.2s;
    }
    .faq-item:hover { border-color: rgba(251,191,36,0.3); }
    .faq-item.active {
      border-color: #fbbf24; box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    }
    .faq-question {
      padding: 20px 24px; cursor: pointer; display: flex; justify-content: space-between;
      align-items: center; transition: all 0.2s;
    }
    .faq-question:hover { background: rgba(251,191,36,0.05); }
    .faq-question h3 {
      font-size: 1rem; font-weight: 600; color: #fff; margin: 0; line-height: 1.4;
    }
    .faq-icon {
      width: 32px; height: 32px; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.3);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      color: #fbbf24; font-size: 1rem; transition: all 0.3s; flex-shrink: 0;
    }
    .faq-item.active .faq-icon {
      background: rgba(251,191,36,0.2); transform: rotate(45deg);
    }
    .faq-answer {
      max-height: 0; overflow: hidden; transition: all 0.3s ease;
      border-top: 1px solid transparent;
    }
    .faq-item.active .faq-answer {
      max-height: 500px; border-top-color: rgba(251,191,36,0.2);
    }
    .faq-answer-content {
      padding: 0 24px 20px; color: #cbd5e1; line-height: 1.6; font-size: 0.9rem;
    }
    .faq-answer-content p { margin-bottom: 12px; }
    .faq-answer-content p:last-child { margin-bottom: 0; }
    .faq-answer-content ul {
      margin: 12px 0; padding-left: 20px;
    }
    .faq-answer-content li {
      margin-bottom: 6px; color: #94a3b8;
    }
    .faq-answer-content strong { color: #e2e8f0; }
    .faq-answer-content a { color: #60a5fa; text-decoration: underline; }
    .faq-answer-content a:hover { color: #93c5fd; }

    /* Contact section */
    .contact-section {
      background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
      border: 1px solid rgba(251,191,36,0.25); border-radius: 16px; padding: 20px;
      text-align: center; margin-bottom: 40px;
    }
    .contact-section h2 { color: #fbbf24; margin-bottom: 12px; border: none; padding: 0; font-size: 1.1rem; }
    .contact-buttons {
      display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
    }
    .contact-btn {
      padding: 12px 24px; border-radius: 10px; font-size: 0.9rem; font-weight: 600;
      cursor: pointer; border: none; transition: all 0.2s; text-decoration: none;
      display: inline-flex; align-items: center; gap: 8px;
    }
    .contact-primary {
      background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f;
    }
    .contact-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }
    .contact-secondary {
      background: transparent; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);
    }
    .contact-secondary:hover { background: rgba(96,165,250,0.08); }

    /* No results */
    .no-results {
      text-align: center; padding: 60px 20px; color: #64748b;
    }
    .no-results-icon { font-size: 4rem; margin-bottom: 16px; opacity: 0.5; }
    .no-results-text { font-size: 1.1rem; margin-bottom: 8px; }
    .no-results-sub { font-size: 0.9rem; opacity: 0.8; }

    /* Responsive */
    @media (max-width: 700px) {
      .search-container { padding: 20px; }
      .search-input { padding: 14px 45px 14px 16px; font-size: 0.9rem; }
      .faq-question { padding: 16px 20px; }
      .faq-question h3 { font-size: 0.95rem; }
      .faq-answer-content { padding: 0 20px 16px; font-size: 0.85rem; }
      .contact-buttons { flex-direction: column; align-items: center; }
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

<h1>Frequently Asked Questions</h1>
<p class="lead">Answers to common questions about membership, benefits, and legal defense.</p>

<!-- Search -->
<div class="search-container">
  <div class="search-box">
    <input type="text" class="search-input" id="faqSearch" placeholder="Search for answers..." oninput="searchFAQ()">
    <span class="search-icon">&#128269;</span>
  </div>
</div>

<!-- Category Tabs -->
<div class="category-tabs">
  <button class="category-tab active" onclick="filterCategory('all')">All</button>
  <button class="category-tab" onclick="filterCategory('membership')">Membership</button>
  <button class="category-tab" onclick="filterCategory('benefits')">Benefits</button>
  <button class="category-tab" onclick="filterCategory('legal')">Legal Defense</button>
  <button class="category-tab" onclick="filterCategory('wellness')">Wellness</button>
</div>

<!-- FAQ Items -->
<div class="faq-container" id="faqContainer">
  <!-- FAQ items will be populated by JavaScript -->
</div>

<!-- No Results -->
<div class="no-results" id="noResults" style="display:none">
  <div class="no-results-icon">&#128533;</div>
  <div class="no-results-text">No matching questions found</div>
  <div class="no-results-sub">Try adjusting your search terms or browse by category</div>
</div>

<!-- Contact Section -->
<div class="contact-section">
  <h2>Still Have Questions?</h2>
  <div class="contact-buttons">
    <a href="{{ site.baseurl }}/sheriff/contact" class="contact-btn contact-primary">&#128222; Contact DSA Staff</a>
    <a href="#" class="contact-btn contact-secondary" onclick="openChatbot(); return false;">&#128172; Ask AI Assistant</a>
  </div>
</div>

</div>

<script>
// FAQ data
const faqData = [
  {
    id: 1,
    category: 'membership',
    question: 'How do I join the DSA?',
    answer: `<p>Membership is automatic for sworn personnel and initiated during your hiring process. Dues are deducted from your paycheck and you'll receive a welcome packet with your membership card. Contact DSA HQ at <strong>(858) 486-9009</strong> for membership status questions.</p>`
  },
  {
    id: 2,
    category: 'membership',
    question: 'What are the membership dues?',
    answer: `<p>Dues range from <strong>1.1%&ndash;1.5%</strong> of base salary depending on rank (Regular Deputies 1.5%, down to Captains 1.1%). They are automatically deducted monthly and fund legal defense, contract negotiations, and member services.</p>`
  },
  {
    id: 3,
    category: 'benefits',
    question: 'What health insurance options are available?',
    answer: `<p>The DSA negotiates medical (HMO/PPO), Delta Dental, VSP vision, group life insurance, and short/long-term disability coverage. For plan details or changes, contact <strong>benefits@dsasd.org</strong> or <strong>(858) 486-9009 x benefits</strong>.</p>`
  },
  {
    id: 4,
    category: 'legal',
    question: 'When should I call the Legal Defense Fund?',
    answer: `<p>Call <strong>immediately</strong> for any critical use-of-force incident, administrative investigation, request for a statement, or civil lawsuit related to on-duty actions. Early intervention is crucial. <strong>24/7 Legal Hotline: (858) 486-9009</strong>.</p>`
  },
  {
    id: 5,
    category: 'legal',
    question: 'What does the Legal Defense Fund cover?',
    answer: `<p>The LDF covers IA representation, 24/7 critical-incident attorney response, civil litigation defense, criminal defense for on-duty matters, expert witnesses, and all court costs. Coverage is automatic for members in good standing with no out-of-pocket costs.</p>`
  },
  {
    id: 6,
    category: 'wellness',
    question: 'What mental health resources are available?',
    answer: `<p>The DSA offers 24/7 peer support, CISM debriefings, law-enforcement-experienced therapist referrals, up to 12 free confidential counseling sessions per year, and family support resources. All services are confidential and will not affect your career. <strong>Hotline: (858) 486-9009 x wellness</strong>.</p>`
  }
];

let currentCategory = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderFAQ();
});

function renderFAQ() {
  const container = document.getElementById('faqContainer');
  const noResults = document.getElementById('noResults');
  
  let filteredFAQ = faqData;
  
  // Apply category filter
  if (currentCategory !== 'all') {
    filteredFAQ = filteredFAQ.filter(item => item.category === currentCategory);
  }
  
  // Apply search filter
  if (searchQuery) {
    filteredFAQ = filteredFAQ.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  if (filteredFAQ.length === 0) {
    container.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  
  container.style.display = 'block';
  noResults.style.display = 'none';
  
  let html = '';
  filteredFAQ.forEach(item => {
    html += `
      <div class="faq-item" data-id="${item.id}" data-category="${item.category}">
        <div class="faq-question" onclick="toggleFAQ(${item.id})">
          <h3>${item.question}</h3>
          <div class="faq-icon">+</div>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-content">${item.answer}</div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function toggleFAQ(id) {
  const faqItem = document.querySelector(`.faq-item[data-id="${id}"]`);
  const isActive = faqItem.classList.contains('active');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

function filterCategory(category) {
  currentCategory = category;
  
  // Update active tab
  document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  renderFAQ();
}

function searchFAQ() {
  searchQuery = document.getElementById('faqSearch').value;
  renderFAQ();
}

function openChatbot() {
  // In a real app, this would open the chatbot
  alert('AI Assistant would open here. In the main portal, you can access the chatbot by clicking the chat icon in the bottom right corner.');
}

/* ================================================================
   AUTO-FILL: Personalize FAQ for logged-in member
   ================================================================ */
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(user => {
    const lead = document.querySelector('.page .lead');
    if (lead && user.name) {
      lead.textContent = `Hi ${user.name.split(' ')[0]}! Browse common questions or contact us directly.`;
    }
  })
  .catch(() => {});
</script>

</body>
</html>
