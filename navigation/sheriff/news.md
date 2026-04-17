---
layout: none
title: DSA News
permalink: /sheriff/news
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>News &mdash; Deputy Sheriffs' Association of San Diego County</title>
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

    /* Filter tabs */
    .filter-tabs {
      display: flex; gap: 4px; background: rgba(22,42,70,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 6px; margin-bottom: 32px; overflow-x: auto;
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

    /* Featured article */
    .featured-article {
      background: linear-gradient(135deg, rgba(22,42,70,0.9), rgba(11,26,46,0.9));
      border: 1px solid #1e3352; border-radius: 16px; padding: 32px; margin-bottom: 40px;
      position: relative; overflow: hidden;
    }
    .featured-article::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(251,191,36,0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    .featured-content { position: relative; z-index: 1; }
    .featured-badge {
      display: inline-block; padding: 4px 12px; background: rgba(251,191,36,0.15);
      border: 1px solid rgba(251,191,36,0.3); border-radius: 20px; font-size: 0.72rem;
      font-weight: 700; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;
    }
    .featured-title {
      font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 12px; line-height: 1.3;
    }
    .featured-meta {
      display: flex; gap: 16px; align-items: center; margin-bottom: 16px; font-size: 0.85rem; color: #64748b;
    }
    .featured-desc {
      font-size: 1rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;
    }
    .read-more {
      display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px;
      background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; border-radius: 10px;
      font-weight: 700; font-size: 0.9rem; text-decoration: none; transition: all 0.2s;
    }
    .read-more:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }

    /* News grid */
    .news-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;
      margin-bottom: 40px;
    }
    .news-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; overflow: hidden;
      transition: all 0.2s; cursor: pointer;
    }
    .news-card:hover {
      border-color: #fbbf24; transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .news-image {
      width: 100%; height: 180px; object-fit: cover; background: linear-gradient(135deg, #1e3352, #0f2040);
      display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #1e3352;
    }
    .news-content {
      padding: 20px;
    }
    .news-category {
      display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 0.68rem;
      font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;
    }
    .cat-announcement { background: rgba(251,191,36,0.12); color: #fbbf24; }
    .cat-negotiation { background: rgba(239,68,68,0.12); color: #ef4444; }
    .cat-community { background: rgba(52,211,153,0.12); color: #34d399; }
    .cat-training { background: rgba(96,165,250,0.12); color: #60a5fa; }
    .cat-legal { background: rgba(167,139,250,0.12); color: #a78bfa; }
    
    .news-title {
      font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 8px; line-height: 1.4;
    }
    .news-excerpt {
      font-size: 0.84rem; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;
    }
    .news-meta {
      display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #475569;
    }
    .news-date { font-weight: 600; }
    .news-read-time { opacity: 0.8; }

    /* Newsletter signup */
    .newsletter {
      background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
      border: 1px solid rgba(251,191,36,0.25); border-radius: 16px; padding: 32px;
      text-align: center; margin-bottom: 40px;
    }
    .newsletter h2 { color: #fbbf24; margin-bottom: 12px; border: none; padding: 0; }
    .newsletter p { color: #cbd5e1; margin-bottom: 20px; max-width: 500px; margin-left: auto; margin-right: auto; }
    .newsletter-form {
      display: flex; gap: 12px; max-width: 400px; margin: 0 auto;
    }
    .newsletter-input {
      flex: 1; padding: 12px 16px; background: rgba(11,26,46,0.8); border: 1px solid rgba(251,191,36,0.3);
      border-radius: 10px; color: #e2e8f0; font-size: 0.9rem; outline: none;
    }
    .newsletter-input::placeholder { color: #64748b; }
    .newsletter-input:focus { border-color: #fbbf24; }
    .newsletter-btn {
      padding: 12px 24px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 10px; font-weight: 700; font-size: 0.9rem;
      cursor: pointer; transition: all 0.2s;
    }
    .newsletter-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }

    /* Load more */
    .load-more {
      text-align: center; margin: 40px 0;
    }
    .load-more-btn {
      padding: 12px 32px; background: transparent; color: #fbbf24; border: 1px solid rgba(251,191,36,0.3);
      border-radius: 10px; font-weight: 700; font-size: 0.9rem; cursor: pointer;
      transition: all 0.2s;
    }
    .load-more-btn:hover { background: rgba(251,191,36,0.08); }

    /* Responsive */
    @media (max-width: 700px) {
      .featured-article { padding: 24px; }
      .featured-title { font-size: 1.3rem; }
      .newsletter-form { flex-direction: column; }
      .news-grid { grid-template-columns: 1fr; }
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

<h1>DSA News & Updates</h1>
<p class="lead">Stay informed with the latest announcements, negotiations, community events, and important updates from your Deputy Sheriffs' Association.</p>

<!-- Filter Tabs -->
<div class="filter-tabs">
  <button class="filter-tab active" onclick="filterNews('all')">All News</button>
  <button class="filter-tab" onclick="filterNews('announcement')">Announcements</button>
  <button class="filter-tab" onclick="filterNews('negotiation')">Negotiations</button>
  <button class="filter-tab" onclick="filterNews('community')">Community</button>
  <button class="filter-tab" onclick="filterNews('training')">Training</button>
  <button class="filter-tab" onclick="filterNews('legal')">Legal</button>
</div>

<!-- Featured Article -->
<div class="featured-article" id="featuredArticle">
  <!-- Featured article will be populated by JavaScript -->
</div>

<!-- News Grid -->
<div class="news-grid" id="newsGrid">
  <!-- News articles will be populated by JavaScript -->
</div>

<!-- Load More -->
<div class="load-more">
  <button class="load-more-btn" onclick="loadMoreNews()">Load More Articles</button>
</div>

<!-- Newsletter Signup -->
<div class="newsletter">
  <h2>Stay Connected</h2>
  <p>Get the latest DSA news delivered directly to your inbox. Subscribe to our Silver Star Newsletter.</p>
  <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
    <input type="email" class="newsletter-input" placeholder="Enter your email" required>
    <button type="submit" class="newsletter-btn">Subscribe</button>
  </form>
</div>

</div>

<script>
// Sample news data (in real app, this would come from backend)
const newsData = [
  {
    id: 1,
    title: "Contract Negotiations: Major Progress on Healthcare Benefits",
    category: "negotiation",
    date: "2026-04-10",
    excerpt: "DSA negotiating team reports significant breakthrough in discussions with County representatives regarding enhanced healthcare coverage and reduced premiums for all members.",
    content: "After weeks of intensive negotiations, the DSA bargaining committee has achieved a major breakthrough in healthcare benefit discussions. County representatives have agreed to several key provisions that will significantly improve coverage while reducing member costs...",
    readTime: "5 min read",
    featured: true,
    image: "healthcare"
  },
  {
    id: 2,
    title: "New Legal Defense Fund Guidelines Effective Immediately",
    category: "legal",
    date: "2026-04-08",
    excerpt: "Updated procedures for requesting legal defense assistance and expanded coverage for administrative investigations.",
    content: "The DSA Board has approved updated guidelines for the Legal Defense Fund to streamline response times and expand coverage for members facing administrative investigations...",
    readTime: "3 min read",
    featured: false,
    image: "legal"
  },
  {
    id: 3,
    title: "Annual Spring BBQ & Family Day Registration Open",
    category: "community",
    date: "2026-04-05",
    excerpt: "Join us for our popular spring gathering at Vista Station. Food, games, and activities for the entire family.",
    content: "Mark your calendars for the DSA Spring BBQ & Family Day! This year's event will be held on Saturday, April 22nd at the Vista Station picnic area...",
    readTime: "2 min read",
    featured: false,
    image: "community"
  },
  {
    id: 4,
    title: "Advanced De-escalation Training Certification Available",
    category: "training",
    date: "2026-04-03",
    excerpt: "Free advanced certification course for all members interested in specialized de-escalation techniques.",
    content: "The DSA is offering a comprehensive advanced de-escalation training certification program at no cost to members. This 40-hour course covers verbal techniques, crisis intervention...",
    readTime: "4 min read",
    featured: false,
    image: "training"
  },
  {
    id: 5,
    title: "Scholarship Applications Now Open for 2026",
    category: "announcement",
    date: "2026-04-01",
    excerpt: "DSA scholarship program for members' children now accepting applications for the 2026-2027 academic year.",
    content: "The Deputy Sheriffs' Association Scholarship Committee is pleased to announce that applications are now being accepted for the 2026-2027 academic year. Scholarships are available to children of active DSA members...",
    readTime: "3 min read",
    featured: false,
    image: "scholarship"
  },
  {
    id: 6,
    title: "New Wellness Center Opening at DSA Headquarters",
    category: "announcement",
    date: "2026-03-28",
    excerpt: "State-of-the-art wellness facility now available to all members with fitness equipment, counseling rooms, and relaxation areas.",
    content: "DSA is proud to announce the grand opening of our new Wellness Center at headquarters. This facility represents our commitment to member health and wellbeing...",
    readTime: "4 min read",
    featured: false,
    image: "wellness"
  }
];

let currentFilter = 'all';
let displayedNews = 6;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderNews();
  renderFeatured();
});

function renderNews() {
  const newsGrid = document.getElementById('newsGrid');
  let filteredNews = newsData;
  
  if (currentFilter !== 'all') {
    filteredNews = newsData.filter(article => article.category === currentFilter);
  }
  
  // Sort by date (newest first)
  filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Limit displayed articles
  const articlesToShow = filteredNews.slice(0, displayedNews);
  
  if (articlesToShow.length === 0) {
    newsGrid.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px;grid-column:1/-1">No articles found for this category.</p>';
    return;
  }
  
  let html = '';
  articlesToShow.forEach(article => {
    const categoryClass = `cat-${article.category}`;
    const dateStr = new Date(article.date).toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    });
    
    html += `
      <article class="news-card" onclick="openArticle(${article.id})">
        <div class="news-image">${getArticleIcon(article.category)}</div>
        <div class="news-content">
          <div class="news-category ${categoryClass}">${article.category}</div>
          <h3 class="news-title">${article.title}</h3>
          <p class="news-excerpt">${article.excerpt}</p>
          <div class="news-meta">
            <span class="news-date">${dateStr}</span>
            <span class="news-read-time">${article.readTime}</span>
          </div>
        </div>
      </article>
    `;
  });
  
  newsGrid.innerHTML = html;
  
  // Hide load more if all articles are shown
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (articlesToShow.length >= filteredNews.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'inline-block';
  }
}

function renderFeatured() {
  const featuredArticle = newsData.find(article => article.featured);
  const featuredContainer = document.getElementById('featuredArticle');
  
  if (!featuredArticle) {
    featuredContainer.style.display = 'none';
    return;
  }
  
  const dateStr = new Date(featuredArticle.date).toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  });
  
  featuredContainer.innerHTML = `
    <div class="featured-content">
      <div class="featured-badge">Featured Story</div>
      <h2 class="featured-title">${featuredArticle.title}</h2>
      <div class="featured-meta">
        <span>By DSA Communications</span>
        <span>&bull;</span>
        <span>${dateStr}</span>
        <span>&bull;</span>
        <span>${featuredArticle.readTime}</span>
      </div>
      <p class="featured-desc">${featuredArticle.content}</p>
      <a href="#" class="read-more" onclick="openArticle(${featuredArticle.id}); return false;">
        Read Full Story &rarr;
      </a>
    </div>
  `;
}

function filterNews(category) {
  currentFilter = category;
  displayedNews = 6; // Reset displayed count
  
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  renderNews();
}

function loadMoreNews() {
  displayedNews += 6;
  renderNews();
}

function openArticle(articleId) {
  const article = newsData.find(a => a.id === articleId);
  if (article) {
    // In a real app, this would navigate to the full article page
    alert(`Opening full article: "${article.title}"\n\nIn a real implementation, this would navigate to a dedicated article page with the full content.`);
  }
}

function subscribeNewsletter(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // In a real app, this would send the email to the backend
  alert(`Thank you for subscribing with email: ${email}\n\nYou will now receive the Silver Star Newsletter and important DSA updates.`);
  
  // Reset form
  e.target.reset();
}

function getArticleIcon(category) {
  const icons = {
    announcement: '&#128226;',
    negotiation: '&#128269;',
    community: '&#127963;',
    training: '&#127891;',
    legal: '&#128272;'
  };
  return icons[category] || '&#128240;';
}

/* ================================================================
   AUTO-FILL: Personalize greeting for logged-in user
   ================================================================ */
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(user => {
    const lead = document.querySelector('.page .lead');
    if (lead && user.name) {
      lead.textContent = `Welcome, ${user.name.split(' ')[0]}! Stay informed with the latest announcements, negotiations, and updates from your DSA at ${user.station || 'San Diego County'}.`;
    }
  })
  .catch(() => {});
</script>

</body>
</html>
