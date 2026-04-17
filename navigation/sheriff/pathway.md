---
layout: none
title: Rank Pathway
permalink: /sheriff/pathway
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rank Pathway &mdash; Deputy Sheriffs' Association of San Diego County</title>
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
    .page { max-width: 1000px; margin: 0 auto; padding: 24px 24px 40px; }
    .page h1 { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; }
    .page .lead { color: #7f8ea3; font-size: 1rem; margin-bottom: 32px; }
    .page h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; border-bottom: 1px solid rgba(251,191,36,0.12); padding-bottom: 8px; margin: 36px 0 16px; }
    .page h3 { font-size: 1.05rem; color: #e2e8f0; margin: 20px 0 8px; }
    .page p { font-size: 0.88rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.7; }
    .page ul { padding-left: 20px; margin: 8px 0 16px; }
    .page li { font-size: 0.86rem; color: #cbd5e1; margin-bottom: 6px; line-height: 1.55; }

    /* Pathway visual */
    .pathway-container {
      background: linear-gradient(135deg, rgba(22,42,70,0.9), rgba(11,26,46,0.9));
      border: 1px solid #1e3352; border-radius: 16px; padding: 24px; margin-bottom: 24px;
      position: relative; overflow: hidden;
    }
    .pathway-container::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(251,191,36,0.03) 0%, transparent 70%);
      pointer-events: none;
    }

    /* Rank timeline */
    .rank-timeline {
      display: flex; justify-content: space-between; align-items: flex-start; margin: 20px 0;
      position: relative; padding: 0 20px;
    }
    .rank-timeline::before {
      content: ''; position: absolute; top: 40px; left: 60px; right: 60px;
      height: 4px; background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706);
      border-radius: 2px; z-index: 1;
    }
    .rank-node {
      display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2;
      width: 120px; text-align: center;
    }
    .rank-icon {
      width: 80px; height: 80px; background: linear-gradient(135deg,#f59e0b,#d97706);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 2rem; color: #1e3a5f; font-weight: 800; margin-bottom: 12px;
      box-shadow: 0 4px 16px rgba(245,158,11,0.3); transition: all 0.3s;
    }
    .rank-node:hover .rank-icon {
      transform: scale(1.1); box-shadow: 0 6px 20px rgba(245,158,11,0.4);
    }
    .rank-name {
      font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 4px;
    }
    .rank-years {
      font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;
    }

    /* Rank details */
    .rank-details {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 24px;
    }
    .rank-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 24px;
      transition: all 0.2s; position: relative; overflow: hidden;
    }
    .rank-card:hover {
      border-color: #fbbf24; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.3);
    }
    .rank-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, #fbbf24, #f59e0b);
    }
    .rank-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
    }
    .rank-badge {
      width: 48px; height: 48px; background: linear-gradient(135deg,#f59e0b,#d97706);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; color: #1e3a5f; font-weight: 800;
    }
    .rank-info h3 { margin: 0; color: #fbbf24; }
    .rank-info p { margin: 0; color: #64748b; font-size: 0.8rem; }
    .requirements {
      margin-bottom: 16px;
    }
    .requirements h4 { color: #e2e8f0; font-size: 0.9rem; margin-bottom: 8px; }
    .requirements ul { margin: 0; }
    .requirements li { font-size: 0.84rem; color: #94a3b8; }
    .next-steps {
      background: rgba(251,191,36,0.05); border: 1px solid rgba(251,191,36,0.2);
      border-radius: 8px; padding: 12px;
    }
    .next-steps h4 { color: #fbbf24; font-size: 0.85rem; margin-bottom: 6px; }
    .next-steps p { font-size: 0.82rem; color: #cbd5e1; margin: 0; }

    /* Personal assessment */
    .assessment {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.8));
      border: 1px solid #1e3352; border-radius: 16px; padding: 24px; margin-bottom: 24px;
    }
    .assessment h2 { color: #fbbf24; margin-bottom: 20px; border: none; padding: 0; }
    .form-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;
    }
    .form-group {
      display: flex; flex-direction: column;
    }
    .form-label {
      font-size: 0.85rem; color: #94a3b8; margin-bottom: 6px; font-weight: 600;
    }
    .form-input, .form-select {
      padding: 10px 14px; background: #0d1727; border: 1px solid #1e3352;
      border-radius: 8px; color: #e2e8f0; font-size: 0.85rem; outline: none;
      transition: all 0.2s;
    }
    .form-input:focus, .form-select:focus {
      border-color: #fbbf24; background: rgba(251,191,36,0.05);
    }
    .calculate-btn {
      padding: 12px 32px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 10px;
      font-weight: 700; font-size: 0.9rem; cursor: pointer;
      transition: all 0.2s; letter-spacing: 0.3px;
    }
    .calculate-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }

    /* Results */
    .results {
      display: none; background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 24px; margin-top: 20px;
    }
    .results.show { display: block; }
    .result-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
    }
    .result-icon {
      width: 48px; height: 48px; background: linear-gradient(135deg,#10b981,#059669);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; color: white;
    }
    .result-title { font-size: 1.1rem; font-weight: 700; color: #10b981; }
    .result-content {
      font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;
    }
    .result-timeline {
      background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2);
      border-radius: 8px; padding: 16px; margin-top: 16px;
    }
    .timeline-item {
      display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start;
    }
    .timeline-item:last-child { margin-bottom: 0; }
    .timeline-year {
      font-size: 0.85rem; font-weight: 700; color: #10b981; min-width: 60px;
    }
    .timeline-text {
      font-size: 0.84rem; color: #94a3b8; flex: 1;
    }

    /* Resources */
    .resources {
      background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
      border: 1px solid rgba(251,191,36,0.25); border-radius: 16px; padding: 32px;
    }
    .resources h2 { color: #fbbf24; margin-bottom: 20px; border: none; padding: 0; }
    .resource-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;
    }
    .resource-card {
      background: rgba(11,26,46,0.6); border: 1px solid rgba(251,191,36,0.2);
      border-radius: 12px; padding: 20px; transition: all 0.2s;
    }
    .resource-card:hover {
      border-color: #fbbf24; transform: translateY(-2px);
    }
    .resource-icon {
      font-size: 2rem; color: #fbbf24; margin-bottom: 12px;
    }
    .resource-title {
      font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px;
    }
    .resource-desc {
      font-size: 0.84rem; color: #94a3b8; line-height: 1.5; margin-bottom: 12px;
    }
    .resource-link {
      display: inline-flex; align-items: center; gap: 6px; color: #fbbf24; font-size: 0.85rem;
      font-weight: 600; text-decoration: none;
    }
    .resource-link:hover { color: #f59e0b; }

    /* Responsive */
    @media (max-width: 900px) {
      .rank-timeline { flex-direction: column; align-items: center; gap: 30px; }
      .rank-timeline::before { display: none; }
      .rank-node { width: auto; }
    }
    @media (max-width: 700px) {
      .pathway-container { padding: 24px; }
      .rank-details { grid-template-columns: 1fr; }
      .form-grid { grid-template-columns: 1fr; }
      .resource-grid { grid-template-columns: 1fr; }
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

<h1>Your Career Pathway</h1>
<p class="lead">Plan your advancement through the SDSO ranks.</p>

<!-- Pathway Visual -->
<div class="pathway-container">
  <div class="rank-timeline">
    <div class="rank-node">
      <div class="rank-icon">D</div>
      <div class="rank-name">Deputy</div>
      <div class="rank-years">Entry Level</div>
    </div>
    <div class="rank-node">
      <div class="rank-icon">C</div>
      <div class="rank-name">Corporal</div>
      <div class="rank-years">2-4 Years</div>
    </div>
    <div class="rank-node">
      <div class="rank-icon">S</div>
      <div class="rank-name">Sergeant</div>
      <div class="rank-years">4-8 Years</div>
    </div>
    <div class="rank-node">
      <div class="rank-icon">L</div>
      <div class="rank-name">Lieutenant</div>
      <div class="rank-years">8-12 Years</div>
    </div>
    <div class="rank-node">
      <div class="rank-icon">C</div>
      <div class="rank-name">Captain</div>
      <div class="rank-years">12+ Years</div>
    </div>
  </div>
</div>

<!-- Rank Details -->
<div class="rank-details">
  <div class="rank-card">
    <div class="rank-header">
      <div class="rank-badge">D</div>
      <div class="rank-info">
        <h3>Deputy Sheriff</h3>
        <p>Entry-level sworn officer</p>
      </div>
    </div>
    <div class="requirements">
      <h4>Requirements</h4>
      <ul>
        <li>21+, U.S. citizen, HS diploma/GED</li>
        <li>Pass background check &amp; complete Academy</li>
      </ul>
    </div>
    <div class="next-steps">
      <h4>Next: Corporal</h4>
      <p>2-4 yrs service, FTO cert, strong evals.</p>
    </div>
  </div>

  <div class="rank-card">
    <div class="rank-header">
      <div class="rank-badge">C</div>
      <div class="rank-info">
        <h3>Corporal</h3>
        <p>Senior deputy / Field training</p>
      </div>
    </div>
    <div class="requirements">
      <h4>Requirements</h4>
      <ul>
        <li>2-4 yrs as Deputy, FTO certification</li>
        <li>Pass promotional exam, leadership record</li>
      </ul>
    </div>
    <div class="next-steps">
      <h4>Next: Sergeant</h4>
      <p>Supervisory training, mentor junior deputies, 2-4 more yrs.</p>
    </div>
  </div>

  <div class="rank-card">
    <div class="rank-header">
      <div class="rank-badge">S</div>
      <div class="rank-info">
        <h3>Sergeant</h3>
        <p>First-line supervisor</p>
      </div>
    </div>
    <div class="requirements">
      <h4>Requirements</h4>
      <ul>
        <li>4-8 yrs service, supervisory leadership course</li>
        <li>Written assessment &amp; interview, command presence</li>
      </ul>
    </div>
    <div class="next-steps">
      <h4>Next: Lieutenant</h4>
      <p>4+ yrs as Sergeant, advanced leadership &amp; strategic planning.</p>
    </div>
  </div>

  <div class="rank-card">
    <div class="rank-header">
      <div class="rank-badge">L</div>
      <div class="rank-info">
        <h3>Lieutenant</h3>
        <p>Division commander</p>
      </div>
    </div>
    <div class="requirements">
      <h4>Requirements</h4>
      <ul>
        <li>8-12 yrs service, 4+ yrs as Sergeant</li>
        <li>Advanced leadership cert, budget &amp; inter-agency experience</li>
      </ul>
    </div>
    <div class="next-steps">
      <h4>Next: Captain</h4>
      <p>Executive leadership training, policy expertise, strategic vision.</p>
    </div>
  </div>

  <div class="rank-card">
    <div class="rank-header">
      <div class="rank-badge">C</div>
      <div class="rank-info">
        <h3>Captain</h3>
        <p>Senior commander</p>
      </div>
    </div>
    <div class="requirements">
      <h4>Requirements</h4>
      <ul>
        <li>12+ yrs service, 4+ yrs as Lieutenant</li>
        <li>Executive leadership, policy dev, major ops command</li>
      </ul>
    </div>
    <div class="next-steps">
      <h4>Career Growth</h4>
      <p>Specialized command roles, advanced education, executive positions.</p>
    </div>
  </div>
</div>

<!-- Personal Assessment -->
<div class="assessment">
  <h2 style="margin-bottom:12px">Personal Career Assessment</h2>
  <button class="calculate-btn" id="toggleAssessment" onclick="document.getElementById('assessmentForm').style.display=document.getElementById('assessmentForm').style.display==='none'?'block':'none'; this.textContent=document.getElementById('assessmentForm').style.display==='none'?'Take Assessment':'Hide Assessment';" style="margin-bottom:16px">Take Assessment</button>
  <div id="assessmentForm" style="display:none">
  <div class="form-grid">
    <div class="form-group">
      <label class="form-label">Current Rank</label>
      <select class="form-select" id="currentRank">
        <option value="">Select your current rank</option>
        <option value="deputy">Deputy Sheriff</option>
        <option value="corporal">Corporal</option>
        <option value="sergeant">Sergeant</option>
        <option value="lieutenant">Lieutenant</option>
        <option value="captain">Captain</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Years of Service</label>
      <input type="number" class="form-input" id="yearsService" min="0" max="40" placeholder="Enter years">
    </div>
    <div class="form-group">
      <label class="form-label">Education Level</label>
      <select class="form-select" id="education">
        <option value="">Select education level</option>
        <option value="highschool">High School</option>
        <option value="associates">Associate's Degree</option>
        <option value="bachelors">Bachelor's Degree</option>
        <option value="masters">Master's Degree</option>
        <option value="doctorate">Doctorate</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Specialized Training</label>
      <select class="form-select" id="training">
        <option value="">Select training completed</option>
        <option value="fto">Field Training Officer</option>
        <option value="investigations">Investigations</option>
        <option value="swat">SWAT/Tactical</option>
        <option value="k9">K-9 Unit</option>
        <option value="narcotics">Narcotics</option>
        <option value="multiple">Multiple Specializations</option>
      </select>
    </div>
  </div>
  
  <button class="calculate-btn" onclick="calculatePathway()">Generate My Career Pathway</button>
  
  <div class="results" id="results">
    <div class="result-header">
      <div class="result-icon">&#10004;</div>
      <div class="result-title">Your Personalized Career Pathway</div>
    </div>
    <div class="result-content" id="resultContent">
      <!-- Results will be populated by JavaScript -->
    </div>
  </div>
  </div>
</div>

<!-- Resources (compact) -->
<div class="resources" style="padding:20px">
  <h2 style="margin-bottom:12px;font-size:1.1rem">Resources</h2>
  <div class="resource-grid" style="gap:12px">
    <div class="resource-card" style="padding:14px"><div class="resource-title" style="margin-bottom:4px;font-size:0.9rem">Study Guides</div><a href="#" class="resource-link">Download &rarr;</a></div>
    <div class="resource-card" style="padding:14px"><div class="resource-title" style="margin-bottom:4px;font-size:0.9rem">Training Programs</div><a href="#" class="resource-link">View &rarr;</a></div>
    <div class="resource-card" style="padding:14px"><div class="resource-title" style="margin-bottom:4px;font-size:0.9rem">Mentorship Network</div><a href="#" class="resource-link">Join &rarr;</a></div>
    <div class="resource-card" style="padding:14px"><div class="resource-title" style="margin-bottom:4px;font-size:0.9rem">Education Benefits</div><a href="#" class="resource-link">Learn More &rarr;</a></div>
  </div>
</div>

</div>

<script>
function calculatePathway() {
  const currentRank = document.getElementById('currentRank').value;
  const yearsService = parseInt(document.getElementById('yearsService').value);
  const education = document.getElementById('education').value;
  const training = document.getElementById('training').value;
  
  if (!currentRank || !yearsService) {
    alert('Please fill in your current rank and years of service.');
    return;
  }
  
  const results = document.getElementById('results');
  const resultContent = document.getElementById('resultContent');
  
  // Generate personalized pathway
  let pathway = generatePathwayData(currentRank, yearsService, education, training);
  
  let html = `
    <p>Based on your current position and experience, here's your personalized career advancement timeline:</p>
    <div class="result-timeline">
  `;
  
  pathway.timeline.forEach(item => {
    html += `
      <div class="timeline-item">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-text">${item.text}</div>
      </div>
    `;
  });
  
  html += `
    </div>
    <p style="margin-top:16px"><strong>Recommendations:</strong> ${pathway.recommendations}</p>
  `;
  
  resultContent.innerHTML = html;
  results.classList.add('show');
  
  // Scroll to results
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generatePathwayData(currentRank, yearsService, education, training) {
  const pathways = {
    deputy: {
      nextRank: 'Corporal',
      timeframe: '2-4 years',
      timeline: [
        { year: 'Current', text: 'Focus on excellent performance evaluations and seek FTO opportunities' },
        { year: 'Year 1-2', text: 'Complete Field Training Officer certification and mentor new deputies' },
        { year: 'Year 2-3', text: 'Take on leadership roles and complete advanced training courses' },
        { year: 'Year 3-4', text: 'Prepare for promotional examination and interview process' }
      ],
      recommendations: 'Gain diverse patrol experience, complete FTO certification, and demonstrate consistent leadership potential.'
    },
    corporal: {
      nextRank: 'Sergeant',
      timeframe: '2-4 years',
      timeline: [
        { year: 'Current', text: 'Excel as FTO and develop supervisory skills' },
        { year: 'Year 1-2', text: 'Complete supervisory leadership courses and mentor junior deputies' },
        { year: 'Year 2-3', text: 'Gain experience in specialized units and take on additional responsibilities' },
        { year: 'Year 3-4', text: 'Prepare for Sergeant promotional process and develop command presence' }
      ],
      recommendations: 'Focus on developing your supervisory skills and gain experience in different operational areas.'
    },
    sergeant: {
      nextRank: 'Lieutenant',
      timeframe: '4-6 years',
      timeline: [
        { year: 'Current', text: 'Develop strong squad leadership and operational planning skills' },
        { year: 'Year 1-3', text: 'Gain command experience and complete advanced leadership training' },
        { year: 'Year 3-5', text: 'Develop budget management and inter-agency coordination skills' },
        { year: 'Year 5-6', text: 'Prepare for Lieutenant promotional examination and interview' }
      ],
      recommendations: 'Focus on strategic planning, budget management, and developing your command presence.'
    },
    lieutenant: {
      nextRank: 'Captain',
      timeframe: '4-6 years',
      timeline: [
        { year: 'Current', text: 'Excel in division command and policy development' },
        { year: 'Year 1-3', text: 'Gain experience in multiple command areas and develop executive leadership' },
        { year: 'Year 3-5', text: 'Complete executive leadership training and develop departmental expertise' },
        { year: 'Year 5-6', text: 'Prepare for Captain promotional process and demonstrate strategic vision' }
      ],
      recommendations: 'Focus on executive leadership, strategic planning, and developing departmental policy expertise.'
    },
    captain: {
      nextRank: 'Executive Leadership',
      timeframe: 'Ongoing',
      timeline: [
        { year: 'Current', text: 'Excel in senior command and departmental leadership' },
        { year: 'Year 1-3', text: 'Consider advanced education and specialized executive training' },
        { year: 'Year 3-5', text: 'Mentor junior officers and develop succession planning' },
        { year: 'Year 5+', text: 'Pursue advanced leadership roles and contribute to departmental strategy' }
      ],
      recommendations: 'Focus on executive leadership, mentoring the next generation, and contributing to departmental strategic planning.'
    }
  };
  
  return pathways[currentRank] || pathways.deputy;
}

// Handle resource links
document.querySelectorAll('.resource-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const resource = this.closest('.resource-card').querySelector('.resource-title').textContent;
    alert(`Resource access for "${resource}" would be implemented here.\n\nIn a real implementation, this would link to the actual resource documents, registration forms, or external systems.`);
  });
});

/* ================================================================
   AUTO-FILL from logged-in user session
   ================================================================ */
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(user => {
    // Map user rank to the select option value
    const rankMap = {
      'Deputy': 'deputy', 'Corporal': 'corporal', 'Sergeant': 'sergeant',
      'Lieutenant': 'lieutenant', 'Captain': 'captain'
    };
    const rankSelect = document.getElementById('currentRank');
    if (user.rank && rankMap[user.rank]) {
      rankSelect.value = rankMap[user.rank];
    }
    // Autofill years of service
    const yearsInput = document.getElementById('yearsService');
    if (user.years_of_service != null && user.years_of_service > 0) {
      yearsInput.value = user.years_of_service;
    } else if (user.date_of_hire) {
      // Calculate from hire date
      const hired = new Date(user.date_of_hire);
      const years = Math.floor((Date.now() - hired) / (365.25 * 24 * 60 * 60 * 1000));
      if (years >= 0) yearsInput.value = years;
    }

    // Highlight current rank node in the timeline
    const ranks = ['deputy','corporal','sergeant','lieutenant','captain'];
    const currentIdx = ranks.indexOf(rankMap[user.rank] || '');
    if (currentIdx >= 0) {
      const nodes = document.querySelectorAll('.rank-node');
      nodes.forEach((node, i) => {
        const icon = node.querySelector('.rank-icon');
        if (i < currentIdx) {
          icon.style.background = 'linear-gradient(135deg,#34d399,#059669)';
          icon.style.boxShadow = '0 4px 16px rgba(52,211,153,0.3)';
        } else if (i === currentIdx) {
          icon.style.boxShadow = '0 0 0 4px rgba(251,191,36,0.4), 0 4px 16px rgba(245,158,11,0.4)';
        }
      });
    }
  })
  .catch(() => {});
</script>

</body>
</html>
