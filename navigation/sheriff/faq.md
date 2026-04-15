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
    .page { max-width: 1000px; margin: 0 auto; padding: 40px 24px 60px; }
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
      border: 1px solid rgba(251,191,36,0.25); border-radius: 16px; padding: 32px;
      text-align: center; margin-bottom: 40px;
    }
    .contact-section h2 { color: #fbbf24; margin-bottom: 16px; border: none; padding: 0; }
    .contact-section p { color: #cbd5e1; margin-bottom: 24px; max-width: 600px; margin-left: auto; margin-right: auto; }
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

    /* Popular questions */
    .popular-questions {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 24px;
      margin-bottom: 32px;
    }
    .popular-questions h3 { color: #fbbf24; margin-bottom: 16px; font-size: 1.1rem; }
    .popular-list {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;
    }
    .popular-item {
      padding: 12px 16px; background: rgba(22,42,70,0.6); border: 1px solid #1e3352;
      border-radius: 8px; color: #94a3b8; font-size: 0.85rem; cursor: pointer;
      transition: all 0.2s;
    }
    .popular-item:hover {
      border-color: #fbbf24; color: #fbbf24; background: rgba(251,191,36,0.05);
    }

    /* Responsive */
    @media (max-width: 700px) {
      .search-container { padding: 20px; }
      .search-input { padding: 14px 45px 14px 16px; font-size: 0.9rem; }
      .faq-question { padding: 16px 20px; }
      .faq-question h3 { font-size: 0.95rem; }
      .faq-answer-content { padding: 0 20px 16px; font-size: 0.85rem; }
      .popular-list { grid-template-columns: 1fr; }
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
<p class="lead">Find answers to common questions about membership, benefits, legal defense, events, and more. Can't find what you're looking for? Contact us directly.</p>

<!-- Search -->
<div class="search-container">
  <div class="search-box">
    <input type="text" class="search-input" id="faqSearch" placeholder="Search for answers..." oninput="searchFAQ()">
    <span class="search-icon">&#128269;</span>
  </div>
</div>

<!-- Popular Questions -->
<div class="popular-questions">
  <h3>Popular Questions</h3>
  <div class="popular-list" id="popularList">
    <!-- Popular questions will be populated by JavaScript -->
  </div>
</div>

<!-- Category Tabs -->
<div class="category-tabs">
  <button class="category-tab active" onclick="filterCategory('all')">All Categories</button>
  <button class="category-tab" onclick="filterCategory('membership')">Membership</button>
  <button class="category-tab" onclick="filterCategory('benefits')">Benefits</button>
  <button class="category-tab" onclick="filterCategory('legal')">Legal Defense</button>
  <button class="category-tab" onclick="filterCategory('wellness')">Wellness</button>
  <button class="category-tab" onclick="filterCategory('career')">Career</button>
  <button class="category-tab" onclick="filterCategory('events')">Events</button>
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
  <p>Can't find the answer you're looking for? Our team is here to help you with any questions about your DSA membership and benefits.</p>
  <div class="contact-buttons">
    <a href="{{ site.baseurl }}/sheriff/contact" class="contact-btn contact-primary">
      &#128222; Contact DSA Staff
    </a>
    <a href="#" class="contact-btn contact-secondary" onclick="openChatbot(); return false;">
      &#128172; Ask AI Assistant
    </a>
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
    answer: `<p>Joining the DSA is straightforward and automatic for most sworn personnel:</p>
    <ul>
      <li>If you're a new deputy, membership is typically initiated during your hiring process</li>
      <li>Dues are automatically deducted from your paycheck</li>
      <li>You'll receive a welcome packet with your membership card and benefits information</li>
      <li>For questions about your membership status, contact DSA Headquarters at (858) 486-9009</li>
    </ul>
    <p><strong>Note:</strong> Membership is mandatory for all sworn deputies in San Diego County as part of our collective bargaining agreement.</p>`
  },
  {
    id: 2,
    category: 'membership',
    question: 'What are the membership dues?',
    answer: `<p>DSA membership dues are structured as follows:</p>
    <ul>
      <li><strong>Regular Deputies:</strong> 1.5% of base salary</li>
      <li><strong>Corporals:</strong> 1.4% of base salary</li>
      <li><strong>Sergeants:</strong> 1.3% of base salary</li>
      <li><strong>Lieutenants:</strong> 1.2% of base salary</li>
      <li><strong>Captains:</strong> 1.1% of base salary</li>
    </ul>
    <p>Dues are automatically deducted from your monthly paycheck and fund all DSA operations, including legal defense, contract negotiations, and member services.</p>`
  },
  {
    id: 3,
    category: 'benefits',
    question: 'What health insurance options are available?',
    answer: `<p>The DSA negotiates comprehensive health insurance options for members:</p>
    <ul>
      <li><strong>Medical Plans:</strong> Multiple HMO and PPO options with low copays</li>
      <li><strong>Dental:</strong> Delta Dental PPO with preventive care covered at 100%</li>
      <li><strong>Vision:</strong> VSP coverage for exams, frames, lenses, and contacts</li>
      <li><strong>Life Insurance:</strong> Group term life insurance at no cost to members</li>
      <li><strong>Disability:</strong> Short-term and long-term disability coverage</li>
    </ul>
    <p>For specific plan details or to make changes, contact the benefits team at benefits@dsasd.org or (858) 486-9009 x benefits.</p>`
  },
  {
    id: 4,
    category: 'legal',
    question: 'When should I call the Legal Defense Fund?',
    answer: `<p>Contact the Legal Defense Fund <strong>immediately</strong> in any of these situations:</p>
    <ul>
      <li>Critical incident involving use of force or vehicle pursuit</li>
      <li>Notification of administrative investigation</li>
      <li>Request for voluntary statement or interview</li>
      <li>Service of civil lawsuit related to on-duty actions</li>
      <li>Any situation where you believe legal representation may be needed</li>
    </ul>
    <p><strong>24/7 Legal Hotline:</strong> (858) 486-9009</p>
    <p>Don't wait - early legal intervention is crucial for protecting your rights and career.</p>`
  },
  {
    id: 5,
    category: 'legal',
    question: 'What does the Legal Defense Fund cover?',
    answer: `<p>The LDF provides comprehensive legal coverage for:</p>
    <ul>
      <li><strong>Administrative Investigations:</strong> Full representation during IA interviews and Skelly hearings</li>
      <li><strong>Critical Incidents:</strong> 24/7 attorney response for officer-involved incidents</li>
      <li><strong>Civil Litigation:</strong> Defense against lawsuits arising from on-duty actions</li>
      <li><strong>Criminal Defense:</strong> Representation for criminal charges related to official duties</li>
      <li><strong>Expert Witnesses:</strong> Coverage for qualified expert testimony</li>
      <li><strong>Court Costs:</strong> All filing fees and court expenses</li>
    </ul>
    <p>Coverage is automatic for all members in good standing with no deductibles or out-of-pocket costs.</p>`
  },
  {
    id: 6,
    category: 'wellness',
    question: 'What mental health resources are available?',
    answer: `<p>The DSA provides comprehensive mental health support:</p>
    <ul>
      <li><strong>Peer Support Team:</strong> Trained deputy counselors available 24/7</li>
      <li><strong>CISM Team:</strong> Critical Incident Stress Management debriefings</li>
      <li><strong>Therapy Referrals:</strong> Licensed therapists experienced with law enforcement</li>
      <li><strong>Confidential Counseling:</strong> Up to 12 free sessions per year</li>
      <li><strong>Family Support:</strong> Resources for spouses and family members</li>
      <li><strong>Substance Abuse Programs:</strong> Confidential treatment and support</li>
    </ul>
    <p><strong>Confidential Hotline:</strong> (858) 486-9009 x wellness</p>
    <p>All services are completely confidential and will not affect your career or standing.</p>`
  },
  {
    id: 7,
    category: 'career',
    question: 'How can I advance in my career?',
    answer: `<p>The DSA supports career advancement through:</p>
    <ul>
      <li><strong>Rank Pathway Program:</strong> Personalized promotion planning and timelines</li>
      <li><strong>Training Opportunities:</strong> Free access to leadership and specialized training</li>
      <li><strong>Mentorship Network:</strong> Connect with senior deputies for guidance</li>
      <li><strong>Education Benefits:</strong> Tuition assistance for advanced degrees</li>
      <li><strong>Promotional Preparation:</strong> Study guides and interview coaching</li>
      <li><strong>Career Counseling:</strong> One-on-one guidance with career development specialists</li>
    </ul>
    <p>Visit our <a href="{{ site.baseurl }}/sheriff/pathway">Rank Pathway</a> page for personalized career planning.</p>`
  },
  {
    id: 8,
    category: 'events',
    question: 'What types of events does the DSA host?',
    answer: `<p>The DSA organizes various events throughout the year:</p>
    <ul>
      <li><strong>Monthly Meetings:</strong> General membership meetings with updates and discussions</li>
      <li><strong>Social Events:</strong> BBQs, family days, holiday parties, and networking gatherings</li>
      <li><strong>Training Events:</strong> Professional development and specialized training</li>
      <li><strong>Fundraisers:</strong> Scholarship galas and charity events</li>
      <li><strong>Community Events:</strong> Shop with a Deputy and community outreach programs</li>
      <li><strong>Retirement Events:</strong> Recognition ceremonies for retiring members</li>
    </ul>
    <p>Check our <a href="{{ site.baseurl }}/sheriff/events">Events Calendar</a> for upcoming gatherings and RSVP information.</p>`
  },
  {
    id: 9,
    category: 'benefits',
    question: 'How do I enroll or change my benefits?',
    answer: `<p>Benefits enrollment and changes:</p>
    <ul>
      <li><strong>New Members:</strong> Automatic enrollment during hiring process</li>
      <li><strong>Open Enrollment:</strong> Annual opportunity to make changes (typically in November)</li>
      <li><strong>Life Events:</strong> Changes allowed within 30 days of marriage, birth, adoption, etc.</li>
      <li><strong>Qualifying Events:</strong> Changes allowed for divorce, death, loss of other coverage</li>
    </ul>
    <p><strong>To make changes:</strong></p>
    <ul>
      <li>Contact Benefits Department: benefits@dsasd.org</li>
      <li>Call: (858) 486-9009 x benefits</li>
      <li>Visit DSA Headquarters in Poway</li>
    </ul>`
  },
  {
    id: 10,
    category: 'membership',
    question: 'What is the role of a Shop Steward?',
    answer: `<p>Shop Stewards are vital union representatives who:</p>
    <ul>
      <li><strong>Represent Members:</strong> First point of contact for workplace issues and concerns</li>
      <li><strong>Enforce Contract:</strong> Ensure MOU compliance at the station level</li>
      <li><strong>Weingarten Rights:</strong> Provide representation during investigatory interviews</li>
      <li><strong>Grievance Support:</strong> Assist with filing and pursuing grievances</li>
      <li><strong>Contract Education:</strong> Help members understand their rights and benefits</li>
      <li><strong>Communication:</strong> Relay important information between members and leadership</li>
    </ul>
    <p>Each station has designated Shop Stewards. Contact your station's steward or DSA HQ for assistance.</p>`
  },
  {
    id: 11,
    category: 'wellness',
    question: 'What fitness benefits are available?',
    answer: `<p>The DSA offers comprehensive fitness benefits:</p>
    <ul>
      <li><strong>Gym Discounts:</strong> Reduced rates at participating fitness centers countywide</li>
      <li><strong>DSA Wellness Center:</strong> Free access to our headquarters fitness facility</li>
      <li><strong>Equipment Reimbursement:</strong> Annual allowance for home fitness equipment</li>
      <li><strong>Personal Training:</strong> Discounted rates with certified trainers</li>
      <li><strong>Fitness Classes:</strong> Free group fitness classes at various locations</li>
      <li><strong>Health Screenings:</strong> Annual physical fitness assessments</li>
    </ul>
    <p>Contact the wellness team at wellness@dsasd.org for a full list of participating facilities and programs.</p>`
  },
  {
    id: 12,
    category: 'career',
    question: 'What educational assistance is available?',
    answer: `<p>The DSA supports continuing education through:</p>
    <ul>
      <li><strong>Tuition Reimbursement:</strong> Up to $5,000 annually for job-related courses</li>
      <li><strong>Scholarship Programs:</strong> For members' children pursuing higher education</li>
      <li><strong>Partnerships:</strong> Reduced tuition at local colleges and universities</li>
      <li><strong>Online Learning:</strong> Free access to professional development courses</li>
      <li><strong>Study Leave:</strong> Paid time off for exam preparation</li>
      <li><strong>Book Reimbursement:</strong> Coverage for required textbooks and materials</li>
    </ul>
    <p>Applications and guidelines are available on the member portal or by contacting education@dsasd.org.</p>`
  }
];

let currentCategory = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderFAQ();
  renderPopularQuestions();
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

function renderPopularQuestions() {
  const popularList = document.getElementById('popularList');
  const popularQuestions = faqData.slice(0, 6); // First 6 questions as popular
  
  let html = '';
  popularQuestions.forEach(item => {
    html += `
      <div class="popular-item" onclick="scrollToFAQ(${item.id})">
        ${item.question}
      </div>
    `;
  });
  
  popularList.innerHTML = html;
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

function scrollToFAQ(id) {
  const faqItem = document.querySelector(`.faq-item[data-id="${id}"]`);
  if (faqItem) {
    faqItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => toggleFAQ(id), 500);
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
</script>

</body>
</html>
