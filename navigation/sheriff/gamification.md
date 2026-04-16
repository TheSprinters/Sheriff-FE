---
layout: none
title: Gamification Hub
permalink: /sheriff/gamification
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gamification Hub &mdash; Deputy Sheriffs' Association</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #0b1a2e; color: #e2e8f0; line-height: 1.6; }
    a { color: #60a5fa; text-decoration: none; }

    .topbar {
      position: sticky; top: 0; z-index: 1000;
      background: rgba(15,40,71,0.95); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .topbar-inner {
      max-width: 1000px; margin: 0 auto; height: 58px;
      display: flex; align-items: center; justify-content: space-between; padding: 0 24px;
    }
    .topbar .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .topbar .logo img { width: 34px; height: auto; }
    .topbar .logo-text { font-size: 0.88rem; font-weight: 700; color: #fff; }
    .topbar .logo-sub { font-size: 0.58rem; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; }
    .back-btn {
      padding: 7px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;
      background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.3); color: #fbbf24;
      transition: all 0.2s;
    }
    .back-btn:hover { background: rgba(251,191,36,0.15); }

    .page { max-width: 900px; margin: 0 auto; padding: 40px 24px 60px; }

    .page-header { text-align: center; margin-bottom: 36px; }
    .page-header h1 {
      font-size: 2rem; font-weight: 800;
      background: linear-gradient(135deg,#fbbf24,#f59e0b);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }
    .page-header p { color: #94a3b8; font-size: 0.95rem; max-width: 600px; margin: 0 auto; }

    /* Stats bar */
    .stats-bar {
      display: flex; gap: 12px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap;
    }
    .stat-pill {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 18px; background: rgba(22,42,70,0.7); border: 1px solid #1e3352;
      border-radius: 12px;
    }
    .stat-pill .sp-icon { font-size: 1.2rem; }
    .stat-pill .sp-num { font-size: 1.1rem; font-weight: 800; color: #fbbf24; }
    .stat-pill .sp-label { font-size: 0.72rem; color: #64748b; }

    /* Game cards */
    .game-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }
    .game-card {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.9));
      border: 1px solid #1e3352; border-radius: 16px; padding: 24px;
      transition: all 0.25s; cursor: pointer; position: relative; overflow: hidden;
    }
    .game-card:hover { border-color: #fbbf24; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
    .game-card .gc-icon { font-size: 2rem; margin-bottom: 10px; }
    .game-card h3 { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
    .game-card p { font-size: 0.82rem; color: #94a3b8; line-height: 1.5; margin-bottom: 12px; }
    .game-card .gc-tag {
      display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 0.68rem;
      font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .tag-active { background: rgba(52,211,153,0.12); color: #34d399; }
    .tag-new { background: rgba(251,191,36,0.12); color: #fbbf24; }
    .tag-coming { background: rgba(96,165,250,0.12); color: #60a5fa; }
    .gc-play {
      display: inline-flex; align-items: center; gap: 6px; margin-top: 10px;
      padding: 8px 18px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border-radius: 10px; font-weight: 700; font-size: 0.82rem;
      text-decoration: none; transition: all 0.2s;
    }
    .gc-play:hover { box-shadow: 0 4px 14px rgba(245,158,11,0.35); }

    /* Leaderboard preview */
    .lb-section { margin-bottom: 32px; }
    .lb-section h2 {
      font-size: 1.2rem; font-weight: 700; color: #fbbf24; margin-bottom: 14px;
      display: flex; align-items: center; gap: 8px;
    }
    .lb-table {
      width: 100%; border-collapse: collapse; background: rgba(22,42,70,0.6);
      border: 1px solid #1e3352; border-radius: 12px; overflow: hidden;
    }
    .lb-table th {
      background: rgba(251,191,36,0.06); padding: 10px 14px; text-align: left;
      font-size: 0.72rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .lb-table td {
      padding: 10px 14px; color: #cbd5e1; border-top: 1px solid #1e3352; font-size: 0.84rem;
    }
    .lb-table tr:hover td { background: rgba(251,191,36,0.03); }
    .rank-badge {
      display: inline-flex; align-items: center; justify-content: center;
      width: 24px; height: 24px; border-radius: 50%; font-size: 0.72rem; font-weight: 800;
    }
    .rank-1 { background: rgba(251,191,36,0.2); color: #fbbf24; }
    .rank-2 { background: rgba(192,192,192,0.15); color: #c0c0c0; }
    .rank-3 { background: rgba(205,127,50,0.15); color: #cd7f32; }

    /* Badges section */
    .badges-section { margin-bottom: 32px; }
    .badges-section h2 {
      font-size: 1.2rem; font-weight: 700; color: #fbbf24; margin-bottom: 14px;
    }
    .badge-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
    .badge-card {
      background: rgba(22,42,70,0.6); border: 1px solid #1e3352; border-radius: 12px;
      padding: 16px; text-align: center; transition: all 0.2s;
    }
    .badge-card:hover { border-color: rgba(251,191,36,0.3); }
    .badge-card .bc-icon { font-size: 2rem; margin-bottom: 6px; }
    .badge-card .bc-name { font-size: 0.78rem; font-weight: 600; color: #e2e8f0; }
    .badge-card .bc-desc { font-size: 0.68rem; color: #64748b; margin-top: 2px; }
    .badge-card.locked { opacity: 0.4; }
    .badge-card.locked .bc-icon::after { content: ' 🔒'; font-size: 0.8rem; }

    .pg-footer {
      text-align: center; padding: 24px; font-size: 0.75rem; color: #1e3352;
      border-top: 1px solid #1e3352; margin-top: 20px;
    }

    @media (max-width: 700px) {
      .game-grid { grid-template-columns: 1fr; }
      .badge-grid { grid-template-columns: repeat(2, 1fr); }
      .stats-bar { gap: 8px; }
    }
  </style>
</head>
<body>

<div class="topbar">
  <div class="topbar-inner">
    <a href="{{ site.baseurl }}/" class="logo">
      <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA">
      <div><div class="logo-text">Deputy Sheriffs' Assoc.</div><div class="logo-sub">San Diego County</div></div>
    </a>
    <a href="{{ site.baseurl }}/" class="back-btn">&#8592; Back to Portal</a>
  </div>
</div>

<div class="page">

  <div class="page-header">
    <h1>&#127918; Gamification Hub</h1>
    <p>Challenge yourself with interactive learning games, earn badges, and climb the leaderboard. All games are designed to reinforce networking and law enforcement knowledge.</p>
  </div>

  <!-- Stats Bar -->
  <div class="stats-bar">
    <div class="stat-pill"><span class="sp-icon">&#127942;</span><div><div class="sp-num">0</div><div class="sp-label">Points</div></div></div>
    <div class="stat-pill"><span class="sp-icon">&#11088;</span><div><div class="sp-num">0</div><div class="sp-label">Badges</div></div></div>
    <div class="stat-pill"><span class="sp-icon">&#128293;</span><div><div class="sp-num">0</div><div class="sp-label">Streak</div></div></div>
    <div class="stat-pill"><span class="sp-icon">&#128200;</span><div><div class="sp-num">--</div><div class="sp-label">Rank</div></div></div>
  </div>

  <!-- Game Cards -->
  <div class="game-grid">
    <div class="game-card" onclick="location.href='{{ site.baseurl }}/games'">
      <div class="gc-icon">&#128187;</div>
      <h3>Net Patrol</h3>
      <p>Test your networking knowledge with scenario-based challenges. Tackle real-world network problems deputies face in the field.</p>
      <span class="gc-tag tag-active">Active</span>
      <br><a href="{{ site.baseurl }}/games" class="gc-play">Play Now &#8594;</a>
    </div>

    <div class="game-card" onclick="location.href='{{ site.baseurl }}/games'">
      <div class="gc-icon">&#127891;</div>
      <h3>Pop Quiz</h3>
      <p>Rapid-fire multiple choice questions covering networking fundamentals, protocols, security, and troubleshooting.</p>
      <span class="gc-tag tag-active">Active</span>
      <br><a href="{{ site.baseurl }}/games" class="gc-play">Play Now &#8594;</a>
    </div>

    <div class="game-card" onclick="location.href='{{ site.baseurl }}/games'">
      <div class="gc-icon">&#128295;</div>
      <h3>MTU Lab</h3>
      <p>Interactive packet fragmentation simulator. Learn how Maximum Transmission Unit affects network performance.</p>
      <span class="gc-tag tag-active">Active</span>
      <br><a href="{{ site.baseurl }}/games" class="gc-play">Play Now &#8594;</a>
    </div>

    <div class="game-card">
      <div class="gc-icon">&#129504;</div>
      <h3>ML Call Trainer</h3>
      <p>Train a KNN classifier to triage dispatch calls. Available on the main portal under ML Lab.</p>
      <span class="gc-tag tag-new">On Portal</span>
      <br><a href="{{ site.baseurl }}/" class="gc-play" onclick="event.stopPropagation()">Go to ML Lab &#8594;</a>
    </div>
  </div>

  <!-- Leaderboard -->
  <div class="lb-section">
    <h2>&#127942; Leaderboard</h2>
    <table class="lb-table">
      <thead><tr><th>Rank</th><th>Player</th><th>Points</th><th>Badges</th><th>Games</th></tr></thead>
      <tbody>
        <tr><td><span class="rank-badge rank-1">1</span></td><td>M. Rodriguez</td><td style="color:#fbbf24;font-weight:700">2,450</td><td>6</td><td>24</td></tr>
        <tr><td><span class="rank-badge rank-2">2</span></td><td>D. Chen</td><td style="color:#fbbf24;font-weight:700">2,180</td><td>5</td><td>21</td></tr>
        <tr><td><span class="rank-badge rank-3">3</span></td><td>J. Thompson</td><td style="color:#fbbf24;font-weight:700">1,920</td><td>4</td><td>18</td></tr>
        <tr><td>4</td><td>DSA Admin</td><td>1,540</td><td>3</td><td>14</td></tr>
        <tr><td>5</td><td>Guest Player</td><td>890</td><td>2</td><td>8</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Badges -->
  <div class="badges-section">
    <h2>&#11088; Badges to Earn</h2>
    <div class="badge-grid">
      <div class="badge-card">
        <div class="bc-icon">&#128640;</div>
        <div class="bc-name">First Responder</div>
        <div class="bc-desc">Complete your first game</div>
      </div>
      <div class="badge-card">
        <div class="bc-icon">&#127775;</div>
        <div class="bc-name">Sharp Shooter</div>
        <div class="bc-desc">Score 100% on a quiz</div>
      </div>
      <div class="badge-card locked">
        <div class="bc-icon">&#128293;</div>
        <div class="bc-name">On Fire</div>
        <div class="bc-desc">7-day play streak</div>
      </div>
      <div class="badge-card locked">
        <div class="bc-icon">&#129504;</div>
        <div class="bc-name">ML Expert</div>
        <div class="bc-desc">Perfect ML Lab score</div>
      </div>
      <div class="badge-card locked">
        <div class="bc-icon">&#128272;</div>
        <div class="bc-name">Net Guardian</div>
        <div class="bc-desc">Complete all Net Patrol levels</div>
      </div>
      <div class="badge-card locked">
        <div class="bc-icon">&#127942;</div>
        <div class="bc-name">Top Deputy</div>
        <div class="bc-desc">Reach #1 on leaderboard</div>
      </div>
      <div class="badge-card locked">
        <div class="bc-icon">&#128218;</div>
        <div class="bc-name">Scholar</div>
        <div class="bc-desc">Pass all quiz categories</div>
      </div>
      <div class="badge-card locked">
        <div class="bc-icon">&#9889;</div>
        <div class="bc-name">Speed Demon</div>
        <div class="bc-desc">Under 30s avg answer time</div>
      </div>
    </div>
  </div>

</div>

<div class="pg-footer">&copy; 2026 Deputy Sheriffs' Association of San Diego County</div>

</body>
</html>
