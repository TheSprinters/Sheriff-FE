---
layout: none
title: Net Patrol Games
permalink: /games
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Net Patrol &mdash; CB Unit 4 Challenge Zone</title>
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
      max-width: 1100px; margin: 0 auto; height: 58px;
      display: flex; align-items: center; justify-content: space-between; padding: 0 24px;
    }
    .topbar .logo { display: flex; align-items: center; gap: 10px; }
    .topbar .logo img { width: 34px; height: auto; }
    .topbar .logo-text { font-size: 0.88rem; font-weight: 700; color: #fff; }
    .back-btn {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 8px 18px; border-radius: 8px;
      background: rgba(251,191,36,0.10); border: 1px solid rgba(251,191,36,0.25);
      color: #fbbf24; font-size: 0.82rem; font-weight: 600; transition: all 0.2s;
    }
    .back-btn:hover { background: rgba(251,191,36,0.18); }

    /* Content */
    .content { max-width: 1100px; margin: 0 auto; padding: 32px 24px 60px; }
    .page-title { font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; }
    .page-sub { font-size: 0.88rem; color: #94a3b8; margin-bottom: 28px; max-width: 800px; line-height: 1.6; }

    /* ===== GAMIFICATION ===== */
    .game-tabs { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
    .gtab { padding: 9px 20px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; background: rgba(255,255,255,0.04); border: 1px solid #1e3352; color: #64748b; cursor: pointer; transition: all 0.2s; }
    .gtab:hover, .gtab.active { background: rgba(251,191,36,0.12); border-color: #fbbf24; color: #fbbf24; }
    .game-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; }
    .game-feature-card {
      background: linear-gradient(180deg, rgba(22,42,70,0.88), rgba(11,26,46,0.95));
      border: 1px solid #1e3352; border-radius: 12px; padding: 14px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
    }
    .game-feature-card h4 { font-size: 0.76rem; color: #fbbf24; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.6px; }
    .game-feature-card p { font-size: 0.76rem; color: #94a3b8; line-height: 1.55; }
    .teach-list { display: grid; gap: 6px; }
    .teach-step { font-size: 0.76rem; color: #cbd5e1; line-height: 1.5; }
    .teach-step strong { color: #fbbf24; }
    .requirement-tags { display: flex; gap: 7px; flex-wrap: wrap; }
    .requirement-tag {
      padding: 5px 10px; border-radius: 999px; font-size: 0.7rem; font-weight: 700;
      background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.28); color: #34d399;
    }
    .requirement-tag.academic { background: rgba(96,165,250,0.08); border-color: rgba(96,165,250,0.28); color: #60a5fa; }
    .requirement-tag.warning { background: rgba(251,191,36,0.08); border-color: rgba(251,191,36,0.28); color: #fbbf24; }
    .game-layout { display: flex; gap: 16px; align-items: flex-start; }
    .game-canvas-stack { display: flex; flex-direction: column; gap: 12px; flex: 1; min-width: 0; }
    .game-status-bar {
      display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
      background: #0d1727; border: 1px solid #1e3352; border-radius: 12px; padding: 18px 22px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
    }
    .game-status-bar h3 { font-size: 0.95rem; color: #e2e8f0; font-weight: 700; }
    .game-status-bar h3 span { color: #3b82f6; font-size: 1.15rem; margin-left: 4px; }
    .status-mini { display: flex; gap: 10px; flex-wrap: wrap; }
    .status-pill {
      padding: 7px 12px; border-radius: 999px; background: rgba(59,130,246,0.08);
      border: 1px solid rgba(59,130,246,0.22); color: #93c5fd; font-size: 0.74rem; font-weight: 700;
    }
    .game-canvas-wrap {
      position: relative; flex: 1; border-radius: 16px; overflow: hidden; background: #f8fafc;
      border: 3px solid #3b82f6; box-shadow: 0 18px 50px rgba(2,12,27,0.28); min-width: 0;
    }
    .gb-controls {
      display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;
      background: #0d1727; border: 1px solid #1e3352; border-radius: 12px; padding: 14px 18px;
    }
    .gb-left, .gb-right { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .gb-btn {
      padding: 8px 14px; border-radius: 9px; border: 1px solid rgba(59,130,246,0.24);
      background: #111f34; color: #e2e8f0; font-size: 0.8rem; font-weight: 700; cursor: pointer;
    }
    .gb-btn:hover { border-color: #3b82f6; color: #93c5fd; }
    .gb-chip {
      padding: 7px 12px; border-radius: 999px; background: rgba(255,255,255,0.05);
      border: 1px solid #1e3352; color: #94a3b8; font-size: 0.74rem; font-weight: 700;
    }
    .gb-select {
      padding: 8px 12px; border-radius: 9px; background: #111f34; border: 1px solid #1e3352;
      color: #e2e8f0; font-size: 0.8rem; outline: none;
    }
    .layer-guide {
      margin-top: 16px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 14px;
    }
    .guide-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px;
    }
    .guide-card h4 { font-size: 0.84rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 10px; }
    .guide-card p { font-size: 0.79rem; color: #94a3b8; line-height: 1.6; }
    .stack-guide { display: grid; gap: 10px; }
    .stack-row {
      background: rgba(255,255,255,0.03); border: 1px solid #1e3352; border-radius: 10px; padding: 12px;
    }
    .stack-row strong { display: block; color: #e2e8f0; font-size: 0.82rem; margin-bottom: 5px; }
    .stack-row span { display: block; color: #64748b; font-size: 0.73rem; margin-bottom: 6px; }
    .stack-row p { font-size: 0.77rem; color: #94a3b8; line-height: 1.55; }
    #netCanvas { display: block; width: 100%; height: auto; }
    .game-overlay {
      position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,15,29,0.82), rgba(8,15,29,0.74));
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; text-align: center; padding: 24px;
    }
    .game-overlay h3 { font-size: 1.4rem; color: #fbbf24; }
    .game-overlay p { font-size: 0.84rem; color: #cbd5e1; max-width: 520px; line-height: 1.55; }
    .slack-map {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px;
      background: rgba(15,23,42,0.42); border: 1px solid rgba(148,163,184,0.16); border-radius: 12px; padding: 12px;
      max-width: 720px;
    }
    .slack-map-item { text-align: left; font-size: 0.76rem; color: #cbd5e1; line-height: 1.5; }
    .slack-map-item strong { color: #fbbf24; }
    .game-sidebar { width: 210px; flex-shrink: 0; display: flex; flex-direction: column; gap: 12px; }
    .gs-card { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; }
    .gs-card h4 { font-size: 0.75rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
    .gs-card p { font-size: 0.76rem; color: #94a3b8; line-height: 1.6; }
    .packet-metrics { display: grid; gap: 8px; }
    .packet-metric { display: flex; justify-content: space-between; gap: 8px; font-size: 0.73rem; }
    .packet-metric span:first-child { color: #64748b; }
    .packet-metric span:last-child { color: #e2e8f0; font-weight: 700; text-align: right; }
    #scoreDisplay { font-size: 1.9rem; font-weight: 800; color: #fbbf24; }
    #layerText { font-size: 0.74rem; color: #94a3b8; line-height: 1.55; }
    /* Quiz */
    .quiz-q { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 20px; margin-bottom: 14px; }
    .quiz-q h4 { font-size: 0.92rem; color: #e2e8f0; margin-bottom: 14px; }
    .quiz-opts { display: grid; gap: 8px; }
    .qopt { padding: 10px 16px; border-radius: 8px; border: 1px solid #1e3352; background: rgba(255,255,255,0.03); color: #94a3b8; cursor: pointer; font-size: 0.83rem; transition: all 0.15s; text-align: left; }
    .qopt:hover:not(:disabled) { border-color: #3b82f6; color: #e2e8f0; background: rgba(59,130,246,0.08); }
    .qopt.correct { border-color: #34d399 !important; background: rgba(52,211,153,0.12) !important; color: #34d399 !important; }
    .qopt.wrong   { border-color: #ef4444 !important; background: rgba(239,68,68,0.1)   !important; color: #ef4444 !important; }
    .quiz-exp { margin-top: 10px; padding: 10px 14px; background: rgba(96,165,250,0.07); border-radius: 8px; font-size: 0.8rem; color: #7f8ea3; display: none; }
    .quiz-exp.show { display: block; }
    .quiz-score { text-align: center; padding: 30px 20px; }
    .quiz-score .qs-num { font-size: 3rem; font-weight: 800; color: #fbbf24; }
    /* MTU Explorer */
    .mtu-explorer { display: flex; flex-direction: column; gap: 16px; }
    .mtu-row { display: flex; align-items: center; gap: 14px; }
    .mtu-row label { font-size: 0.82rem; color: #94a3b8; min-width: 160px; }
    .mtu-row input[type=range] { flex: 1; accent-color: #fbbf24; }
    .mtu-row span { min-width: 62px; font-size: 0.82rem; color: #fbbf24; font-weight: 700; text-align: right; }
    .mtu-frame-box { background: #0b1a2e; border: 1px solid #1e3352; border-radius: 10px; padding: 16px; overflow-x: auto; }
    .mtu-viz { display: flex; align-items: stretch; height: 60px; border-radius: 6px; overflow: hidden; min-width: 560px; }
    .mf-seg { display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; padding: 2px; }
    .mf-seg span { font-size: 0.6rem; opacity: 0.8; margin-top: 2px; }
    .mtu-info-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
    .mtu-ic { background: #162a46; border: 1px solid #1e3352; border-radius: 8px; padding: 12px; }
    .mtu-ic h5 { font-size: 0.72rem; color: #fbbf24; margin-bottom: 6px; text-transform: uppercase; }
    .mtu-ic p { font-size: 0.78rem; color: #94a3b8; line-height: 1.5; }
    .mtu-warn { background: rgba(245,158,11,0.1); border: 1px solid #d97706; border-radius: 8px; padding: 10px 14px; font-size: 0.82rem; color: #fbbf24; display: none; }
    .mtu-warn.show { display: block; }

    /* Model comparison (quiz tab) */
    .model-compare { display: flex; gap: 10px; margin-bottom: 20px; }
    .model-col { flex: 1; display: flex; flex-direction: column; gap: 3px; }
    .model-title { font-size: 0.74rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; padding: 6px 0 8px; border-bottom: 1px solid #1e3352; margin-bottom: 4px; }
    .ml { padding: 7px 10px; font-size: 0.76rem; color: #cbd5e1; border-radius: 0 6px 6px 0; line-height: 1.4; border-left: 3px solid; cursor: default; transition: all 0.15s; }
    .ml:hover { filter: brightness(1.25); color: #fff; }
    .ml.span3 { min-height: 76px; display: flex; align-items: center; }
    .ml.span2 { min-height: 50px; display: flex; align-items: center; }
    .model-vs { display: flex; align-items: center; justify-content: center; font-weight: 800; color: #334155; font-size: 1.1rem; flex-shrink: 0; width: 26px; }
    /* Request journey (MTU tab) */
    .journey { display: flex; flex-direction: column; gap: 0; margin: 16px 0; border-left: 2px solid #1e3352; padding-left: 16px; }
    .journey-step { padding: 10px 14px; border-left: 3px solid; margin-bottom: 3px; background: rgba(255,255,255,0.02); border-radius: 0 8px 8px 0; transition: background 0.2s; }
    .journey-step:hover { background: rgba(255,255,255,0.05); }
    .journey-step h5 { font-size: 0.8rem; color: #e2e8f0; margin: 0 0 3px; }
    .journey-step p  { font-size: 0.74rem; color: #64748b; margin: 0; line-height: 1.5; }
    .journey-step .js-bytes { font-size: 0.72rem; font-weight: 700; float: right; opacity: 0.8; }
    .js-arrow { text-align: left; color: #1e3352; font-size: 0.85rem; padding: 2px 0 2px 4px; }

    .btn-gold {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 10px 22px; border-radius: 10px; border: none;
      background: linear-gradient(135deg, #fbbf24, #d97706); color: #1e3a5f;
      font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.2s;
    }
    .btn-gold:hover { filter: brightness(1.1); transform: translateY(-1px); }

    @keyframes targetPop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }

    @media (max-width: 768px) {
      .game-feature-grid { grid-template-columns: 1fr 1fr; }
      .game-layout { flex-direction: column; }
      .game-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; }
      .gs-card { flex: 1; min-width: 160px; }
      .layer-guide { grid-template-columns: 1fr; }
      .mtu-info-grid { grid-template-columns: 1fr; }
      .model-compare { flex-direction: column; }
      .model-vs { transform: rotate(90deg); width: auto; margin: 4px auto; }
    }
  </style>
</head>
<body>

<!-- Top Bar -->
<div class="topbar">
  <div class="topbar-inner">
    <a href="{{ site.baseurl }}/" class="logo" style="text-decoration:none">
      <img src="{{ site.baseurl }}/images/logo.png" alt="DSA">
      <span class="logo-text">DSA Portal</span>
    </a>
    <a href="{{ site.baseurl }}/" class="back-btn">&larr; Back to Portal</a>
  </div>
</div>

<!-- Content -->
<div class="content">
  <h1 class="page-title">&#127918; Net Patrol &mdash; CB Unit 4 Challenge Zone</h1>
  <p class="page-sub">College Board Unit 4 networking turned into a game-builder lesson: move traffic from GitHub Pages to NGINX, Flask / Spring, and AWS while clearly teaching OSI vs TCP/IP, encapsulation, request/response flow, and MTU.</p>

  <div class="game-feature-grid">
    <div class="game-feature-card">
      <h4>Training Modules</h4>
      <div class="requirement-tags">
        <span class="requirement-tag">Net Patrol</span>
        <span class="requirement-tag warning">Robbery Sim</span>
        <span class="requirement-tag academic">Target Range</span>
      </div>
    </div>
    <div class="game-feature-card">
      <h4>Skills Tested</h4>
      <div class="requirement-tags">
        <span class="requirement-tag academic">Tactical Response</span>
        <span class="requirement-tag academic">Marksmanship</span>
        <span class="requirement-tag academic">Networking</span>
      </div>
    </div>
    <div class="game-feature-card">
      <h4>Real Scenarios</h4>
      <p>Robbery response, target identification, suspect pursuit, hostage negotiation, and network security &mdash; all based on real deputy training.</p>
    </div>
    <div class="game-feature-card">
      <h4>Earn Badges</h4>
      <p>Complete challenges to unlock badges like Marksman, Tactician, and Net Guardian. Climb the leaderboard in the <a href="{{ site.baseurl }}/sheriff/gamification" style="color:#fbbf24">Gamification Hub</a>.</p>
    </div>
  </div>
  <div class="game-tabs">
    <button class="gtab active" onclick="switchGameTab(this,'patrol')">&#127914; Net Patrol Mission</button>
    <button class="gtab" onclick="switchGameTab(this,'robbery')">&#128680; Robbery Response</button>
    <button class="gtab" onclick="switchGameTab(this,'range')">&#127919; Target Range</button>
  </div>

  <!-- TAB 1: Canvas Game -->
  <div class="gtab-panel" id="gtab-patrol">
    <div class="game-layout">
      <div class="game-canvas-stack">
        <div class="gb-controls">
          <div class="gb-left">
            <button class="gb-btn" onclick="startNetGame()">&#9654; Play</button>
            <button class="gb-btn" onclick="pauseNetGame()">&#9208; Pause</button>
            <button class="gb-btn" onclick="stopNetGame()">&#9632; Stop</button>
            <span class="gb-chip">Engine v1.1</span>
          </div>
          <div class="gb-right">
            <select id="netLevelSelect" class="gb-select" onchange="setNetLevel(this.value)">
              <option value="full">Select Level...</option>
              <option value="application">HTTP/DNS (Application)</option>
              <option value="transport">TCP/UDP (Transport)</option>
              <option value="network">IP (Network)</option>
              <option value="physical">Physical Layer</option>
              <option value="full">Full Stack Mission</option>
            </select>
          </div>
        </div>
        <div class="game-status-bar">
          <h3>Game Status: <span id="gameStatusHeadline">Not Started</span></h3>
          <div class="status-mini">
            <div class="status-pill">Teach OSI vs TCP/IP</div>
            <div class="status-pill">Show MTU decisions</div>
            <div class="status-pill">Connect to deployment</div>
          </div>
        </div>
        <div class="game-canvas-wrap">
          <canvas id="netCanvas" width="780" height="440"></canvas>
          <div class="game-overlay" id="gameOverlay">
          <div style="font-size:2.8rem">&#128640;</div>
          <h3>Net Patrol Mission</h3>
          <p>This board matches the CSSE game-builder idea: the OSI layers are the map, the arrows show packet flow, and the mission teaches exactly how our project traffic moves from the frontend to the backend.</p>
          <p style="font-size:0.76rem;color:#e2e8f0;margin-top:2px"><strong>&#8592;&#8594;</strong> Move &nbsp;|&nbsp; <strong>&#8593; / Space</strong> Jump &nbsp;|&nbsp; <strong>E</strong> Pick up packet &nbsp;|&nbsp; <strong>F</strong> Fragment packet if it is too large</p>
          <div class="slack-map">
              <div class="slack-map-item"><strong>Fun:</strong> A live mission with a player, Router Ron as the NPC, and Hacker H4X as the AI NPC.</div>
              <div class="slack-map-item"><strong>Real:</strong> The route follows our project deployment from GitHub Pages to NGINX, Docker, Flask or Spring, AWS EC2, and SQL.</div>
              <div class="slack-map-item"><strong>Academic:</strong> OSI 7-layer language, TCP/IP 5-layer standard, MTU/MSS, and request/response flow are explained directly.</div>
              <div class="slack-map-item"><strong>Teachable:</strong> The board, analyzer, quiz, and MTU lab all repeat the same lesson in simple words so it is easier to present.</div>
            </div>
            <button class="btn-gold" style="margin-top:10px" onclick="startNetGame()">Launch Mission</button>
          </div>
        </div>
      </div>
      <div class="game-sidebar">
        <div class="gs-card">
          <h4>&#127947; Mission Score</h4>
          <div id="scoreDisplay">0</div>
          <div style="margin-top:6px;font-size:0.76rem;color:#475569">Level: <span id="levelDisplay">1</span> &nbsp;|&nbsp; Lives: <span id="livesDisplay">&#9733;&#9733;&#9733;</span></div>
          <div style="margin-top:4px;font-size:0.76rem;color:#94a3b8">Combo: <span id="comboDisplay">0x</span> &nbsp;|&nbsp; Status: <span id="statusDisplay">Awaiting launch</span></div>
        </div>
        <div class="gs-card">
          <h4>&#127758; Current Layer</h4>
          <p id="layerText">Start the game to see which OSI layer your player is standing on.</p>
        </div>
        <div class="gs-card">
          <h4>&#128736; Controls</h4>
          <p>&#8592;&#8594; Move &nbsp;|&nbsp; &#8593; Jump<br>E &mdash; Pick up, drop, or talk to Router Ron<br>F &mdash; Split a packet that is too large<br><br>&#9733; <span style="color:#fbbf24">Player</span><br>&#128994; <span style="color:#34d399">Router Ron = NPC</span><br>&#128308; <span style="color:#ef4444">Hacker H4X = AI NPC</span></p>
        </div>
        <div class="gs-card">
          <h4>&#128218; Learning Goal</h4>
          <p id="missionText">Teach this simply: OSI helps us explain networking, TCP/IP is what real internet traffic uses, and MTU tells us when a packet must be split.</p>
          <p id="routeDisplay" style="margin-top:10px;font-size:0.74rem;color:#64748b">Route: GitHub Pages fetch() &#8594; HTTPS/TLS &#8594; TCP &#8594; IP &#8594; Ethernet &#8594; NGINX &#8594; Flask / Spring &#8594; SQL</p>
        </div>
        <div class="gs-card">
          <h4>&#128172; Router Ron</h4>
          <p id="npcPrompt">Walk near Router Ron and press E to talk.</p>
          <p id="npcDialogue" style="margin-top:10px;color:#cbd5e1">Ron will coach you on OSI, TCP/IP, MTU, and how this game matches your deployment.</p>
        </div>
        <div class="gs-card">
          <h4>&#128270; Packet Analyzer</h4>
          <div class="packet-metrics">
            <div class="packet-metric"><span>Protocol</span><span id="packetProtocol">Waiting</span></div>
            <div class="packet-metric"><span>Payload</span><span id="packetPayload">-</span></div>
            <div class="packet-metric"><span>Headers</span><span id="packetHeaders">-</span></div>
            <div class="packet-metric"><span>Fragments</span><span id="packetFragments">-</span></div>
            <div class="packet-metric"><span>Decision</span><span id="packetDecision">Launch mission</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="layer-guide" id="layerGuide" style="display:none">
      <div class="guide-card">
        <h4>Network Stack Guide</h4>
        <div class="stack-guide">
          <div class="stack-row"><strong>Application</strong><p>fetch() sends HTTP(S) requests. DNS resolves domains. Backend handles CRUD.</p></div>
          <div class="stack-row"><strong>Transport</strong><p>TCP segments data at ~1460B payload. NGINX routes to backend services.</p></div>
          <div class="stack-row"><strong>Network</strong><p>IP packets with src/dst addresses route through the internet to AWS.</p></div>
          <div class="stack-row"><strong>Link + Physical</strong><p>Ethernet frames with MAC/CRC become electrical/optical/radio signals.</p></div>
        </div>
      </div>
      <div class="guide-card">
        <h4>Game Elements</h4>
        <div class="stack-guide">
          <div class="stack-row"><strong>Player</strong><p>Frontend engineer carrying packets through the OSI stack.</p></div>
          <div class="stack-row"><strong>NPC</strong><p>Router Ron teaches OSI vs TCP/IP, MTU, and deployment flow.</p></div>
          <div class="stack-row"><strong>AI NPC</strong><p>Hacker H4X steals packets &mdash; chase and recover them.</p></div>
        </div>
      </div>
    </div>
    <button class="gb-btn" style="margin-top:12px" onclick="var g=document.getElementById('layerGuide');g.style.display=g.style.display==='none'?'grid':'none';this.textContent=g.style.display==='none'?'Show Network Guide':'Hide Network Guide'">Show Network Guide</button>
  </div>

  <!-- TAB 2: Robbery Response Simulation -->
  <div class="gtab-panel" id="gtab-robbery" style="display:none">
    <div style="max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
        <div style="font-size:2.2rem">&#128680;</div>
        <div>
          <h2 style="font-size:1.2rem;color:#fbbf24;margin:0">Robbery Response Simulator</h2>
          <p style="font-size:0.82rem;color:#94a3b8;margin:4px 0 0">Make split-second decisions as you respond to an in-progress robbery call. Choose wisely &mdash; your score depends on safety, protocol, and timing.</p>
        </div>
      </div>
      <!-- Stats bar -->
      <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Score:</span> <strong id="robScore" style="color:#fbbf24">0</strong></div>
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Scene:</span> <strong id="robScene" style="color:#60a5fa">1/5</strong></div>
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Rating:</span> <strong id="robRating" style="color:#34d399">--</strong></div>
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Timer:</span> <strong id="robTimer" style="color:#ef4444">15s</strong></div>
      </div>
      <!-- Scene display -->
      <div id="robContainer" style="background:linear-gradient(135deg,rgba(22,42,70,0.8),rgba(11,26,46,0.9));border:1px solid #1e3352;border-radius:16px;padding:28px;min-height:320px">
        <div style="text-align:center;padding:40px 20px">
          <div style="font-size:3rem;margin-bottom:12px">&#128694;</div>
          <h3 style="color:#fbbf24;font-size:1.1rem">Ready to Respond?</h3>
          <p style="color:#94a3b8;font-size:0.85rem;max-width:500px;margin:10px auto 20px">You'll face 5 real-world robbery scenarios. Each scene gives you 15 seconds to pick the best tactical response. Points are awarded for safety, proper protocol, and de-escalation when appropriate.</p>
          <button class="btn-gold" onclick="startRobbery()">Begin Simulation &#8594;</button>
        </div>
      </div>
      <!-- Debrief -->
      <div id="robDebrief" style="margin-top:12px;padding:12px 16px;background:rgba(96,165,250,0.06);border:1px solid rgba(96,165,250,0.15);border-radius:10px;font-size:0.82rem;color:#94a3b8;display:none">
        <strong style="color:#60a5fa">Debrief:</strong> <span id="robDebriefText"></span>
      </div>
    </div>
  </div>

  <!-- TAB 3: Target Range -->
  <div class="gtab-panel" id="gtab-range" style="display:none">
    <div style="max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
        <div style="font-size:2.2rem">&#127919;</div>
        <div>
          <h2 style="font-size:1.2rem;color:#fbbf24;margin:0">Deputy Target Range</h2>
          <p style="font-size:0.82rem;color:#94a3b8;margin:4px 0 0">Test your aim and reaction time. Click targets as they appear &mdash; but watch out for civilians! Hitting innocents costs points.</p>
        </div>
      </div>
      <!-- Stats bar -->
      <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Score:</span> <strong id="rangeScore" style="color:#fbbf24">0</strong></div>
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Accuracy:</span> <strong id="rangeAccuracy" style="color:#34d399">--</strong></div>
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Round:</span> <strong id="rangeRound" style="color:#60a5fa">0/20</strong></div>
        <div style="padding:8px 14px;background:#162a46;border:1px solid #1e3352;border-radius:10px;font-size:0.78rem"><span style="color:#64748b">Time:</span> <strong id="rangeTime" style="color:#ef4444">60s</strong></div>
      </div>
      <!-- Range canvas area -->
      <div id="rangeArea" style="position:relative;background:linear-gradient(180deg,#1a2744 0%,#0f1c30 40%,#162a46 100%);border:3px solid #3b82f6;border-radius:16px;height:400px;overflow:hidden;cursor:crosshair;user-select:none" onclick="rangeClick(event)">
        <div id="rangeOverlay" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(8,15,29,0.85);z-index:10;text-align:center;padding:24px">
          <div style="font-size:3rem;margin-bottom:12px">&#127919;</div>
          <h3 style="color:#fbbf24;font-size:1.1rem">Deputy Target Range</h3>
          <p style="color:#94a3b8;font-size:0.85rem;max-width:460px;margin:10px auto 20px">20 targets will appear for 60 seconds. Red targets (&#128308;) are threats &mdash; click them for points. Blue targets (&#128309;) are civilians &mdash; avoid clicking them or lose points. Speed bonus for fast reactions!</p>
          <button class="btn-gold" onclick="event.stopPropagation();startRange()">Start Training &#8594;</button>
        </div>
        <!-- Targets will be spawned here dynamically -->
        <div id="rangeTargets" style="position:absolute;inset:0"></div>
        <!-- Lane lines for depth illusion -->
        <div style="position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(0deg,rgba(22,42,70,0.9),transparent);pointer-events:none"></div>
        <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);font-size:0.7rem;color:#334155;pointer-events:none">SDSO TRAINING FACILITY &mdash; RANGE 1</div>
      </div>
      <!-- Post-round feedback -->
      <div id="rangeFeedback" style="margin-top:12px;padding:12px 16px;background:rgba(52,211,153,0.06);border:1px solid rgba(52,211,153,0.15);border-radius:10px;font-size:0.82rem;color:#94a3b8;display:none">
        <strong style="color:#34d399">Range Report:</strong> <span id="rangeFeedbackText"></span>
      </div>
    </div>
  </div>
</div>

<script>
function el(id) { return document.getElementById(id); }

/* ================================================================
   GAMIFICATION — Net Patrol / OSI Quiz / MTU Explorer
   CB Unit 4: Networking — OSI 7-layer vs TCP/IP 5-layer, MTU
   ================================================================ */
(function () {

  /* ---- TAB SWITCHING ---- */
  window.switchGameTab = function (evtOrEl, tab) {
    document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
    const btn = evtOrEl?.currentTarget || evtOrEl || window.event?.currentTarget;
    if (btn && btn.classList) btn.classList.add('active');
    document.querySelectorAll('.gtab-panel').forEach(p => p.style.display = 'none');
    const panel = el('gtab-' + tab);
    if (panel) panel.style.display = 'block';
    if (tab !== 'patrol') { gameRunning = false; gamePaused = false; if (animId) cancelAnimationFrame(animId); }
  };

  /* ================================================================
     NET PATROL — Canvas Game
     Player = network engineer, NPC = Router Ron, AI NPC = Hacker H4X
     Teaches OSI vs TCP/IP, encapsulation, MTU, deployment flow
     ================================================================ */
  let ctx = null, animId = null, gameRunning = false;
  const gState = { score: 0, lives: 3, level: 1, delivered: 0, lost: 0, rescued: 0, streak: 0 };

  const OSI = [
    { id: 7, name: 'Application',  y: 0,   h: 52,  col: '#f59e0b', tcp: 'Application', desc: 'HTTP, DNS, and fetch() begin the request from GitHub Pages.' },
    { id: 6, name: 'Presentation', y: 52,  h: 42,  col: '#d97706', tcp: 'Application', desc: 'TLS/SSL encryption translates plain data into secure HTTPS.' },
    { id: 5, name: 'Session',      y: 94,  h: 42,  col: '#b45309', tcp: 'Application', desc: 'Sessions manage the conversation, sockets, and keep-alive flow.' },
    { id: 4, name: 'Transport',    y: 136, h: 68,  col: '#3b82f6', tcp: 'Transport',   desc: 'TCP adds ports, sequence numbers, and the MSS limit of 1460 bytes.' },
    { id: 3, name: 'Network',      y: 204, h: 68,  col: '#10b981', tcp: 'Internet',    desc: 'IP adds source and destination addresses for routing to AWS EC2.' },
    { id: 2, name: 'Data Link',    y: 272, h: 68,  col: '#8b5cf6', tcp: 'Link',        desc: 'Ethernet frames add MAC addresses plus the FCS/CRC trailer.' },
    { id: 1, name: 'Physical',     y: 340, h: 100, col: '#475569', tcp: 'Physical',    desc: 'Bits move as electrical, radio, or optical signals across media.' },
  ];

  const DEPLOYMENT_ROUTE = [
    'GitHub Pages',
    'HTTPS / TLS',
    'TCP',
    'IP',
    'Ethernet',
    'NGINX',
    'Flask / Spring',
    'SQL'
  ];

  const ROUTER_DIALOGUE = [
    {
      prompt: 'OSI is our teaching map. TCP/IP is the practical model your deployment really uses.',
      route: 'Talk it through as: Application -> Transport -> Internet -> Link -> Physical.',
      analyzer: 'NPC lesson: OSI vs TCP/IP'
    },
    {
      prompt: 'Your frontend starts the trip with fetch() and HTTP or HTTPS from GitHub Pages.',
      route: 'Then NGINX routes traffic to Flask or Spring on AWS EC2 through Docker.',
      analyzer: 'NPC lesson: deployment route'
    },
    {
      prompt: 'MTU matters because Ethernet is usually 1500 bytes, so TCP payload should stay near 1460 bytes.',
      route: 'If the packet is too large, fragment it before delivery so the request and response still work cleanly.',
      analyzer: 'NPC lesson: MTU and MSS'
    },
    {
      prompt: 'Presentation handles encryption like TLS, and Session manages the dialogue between applications.',
      route: 'That is why HTTPS and ongoing app communication belong in the lesson too.',
      analyzer: 'NPC lesson: Presentation and Session'
    }
  ];

  const PACKET_SCENARIOS = [
    { label: 'GET /api/sheriff/id', protocol: 'HTTP', app: 'fetch()', target: 'NGINX -> Flask', prompt: 'Use OSI to explain how a frontend request reaches your backend.' },
    { label: 'POST /api/authenticate', protocol: 'HTTPS', app: 'login form', target: 'Certbot TLS -> Flask', prompt: 'This packet should remind you why Presentation and Session matter.' },
    { label: 'PUT /api/user', protocol: 'HTTPS', app: 'profile update', target: 'NGINX -> Spring', prompt: 'Payload size matters more when CRUD requests carry real data.' },
    { label: 'SQL read response', protocol: 'JSON', app: 'dashboard load', target: 'Backend -> GitHub Pages', prompt: 'Think about response traffic moving back up the stack too.' }
  ];

  const player = { x: 80, y: 250, w: 28, h: 36, vx: 0, vy: 0, onGround: false, carrying: null, speed: 3.5, jump: -11, invince: 0 };
  const hacker = { x: 420, y: 50, w: 26, h: 34, vx: 1.2, vy: 0, onGround: false, carrying: null, stun: 0 };
  const routerNpc = { x: 650, y: 376, w: 44, h: 40, msg: '', msgT: 0 };
  let packets = [], fx = [];
  const keys = {};
  let gamePaused = false;
  let levelMode = 'full';
  let routerDialogIndex = 0;
  const spriteSources = {
    player: '{{ site.baseurl }}/images/gamify/lessons/character.png',
    npc: '{{ site.baseurl }}/images/gamify/wizard.png',
    ai: '{{ site.baseurl }}/images/gamebuilder/sprites/slime.png'
  };
  const sprites = {};
  ['player', 'npc', 'ai'].forEach(key => {
    const img = new Image();
    img.src = spriteSources[key];
    sprites[key] = img;
  });

  function rr(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  }

  function pickScenario() {
    return PACKET_SCENARIOS[Math.floor(Math.random() * PACKET_SCENARIOS.length)];
  }

  function mkPkt(x, y, forcedSize) {
    const scenario = pickScenario();
    const sz = typeof forcedSize === 'number' ? forcedSize : Math.floor(Math.random() * 2200 + 280);
    return {
      x, y, w: 58, h: 28, vy: 0.35, vx: 0,
      layer: 7,
      headers: [],
      escore: false,
      stolen: false,
      done: false,
      sz,
      frag: false,
      frags: 1,
      scenario
    };
  }

  function pPayload(p) { return p.sz; }
  function pTotal(p) { return p.sz + p.headers.reduce((sum, hdr) => sum + hdr.bytes, 0); }
  function pNeedsFrag(p) { return p.sz > 1460 && !p.frag; }
  function collides(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function addScore(n) {
    gState.score += n;
    if (el('scoreDisplay')) el('scoreDisplay').textContent = gState.score;
  }

  function spawnFX(x, y, col, txt) {
    fx.push({ x, y, col, txt, life: 90, vy: -1.0 });
  }

  function setStatus(text) {
    if (el('statusDisplay')) el('statusDisplay').textContent = text;
    if (el('gameStatusHeadline')) el('gameStatusHeadline').textContent = text;
  }

  function canDrawSprite(img) {
    return img && img.complete && img.naturalWidth > 0;
  }

  function updateMissionText(packet, extra) {
    const base = packet
      ? '<strong>' + packet.scenario.protocol + '</strong> ' + packet.scenario.label + '<br><span style="color:#64748b">' + packet.scenario.prompt + '</span>'
      : 'Use the 7-layer OSI model as a guideline to explain what the 5-layer TCP/IP model actually does in your deployment. Fragment any packet larger than 1460B before delivery to avoid MTU trouble.';
    if (el('missionText')) el('missionText').innerHTML = base + (extra ? '<br><span style="color:#94a3b8">' + extra + '</span>' : '');
  }

  function updateRouteText(packet, lay) {
    const route = lay
      ? 'Route focus: ' + DEPLOYMENT_ROUTE.slice(0, Math.max(1, 8 - lay.id)).join(' -> ')
      : 'Route: ' + DEPLOYMENT_ROUTE.join(' -> ');
    const suffix = packet ? '<br><span style="color:#94a3b8">' + packet.scenario.app + ' targeting ' + packet.scenario.target + '</span>' : '';
    if (el('routeDisplay')) el('routeDisplay').innerHTML = route + suffix;
  }

  function updateSidebar() {
    if (el('comboDisplay')) el('comboDisplay').textContent = gState.streak + 'x';
    if (el('levelDisplay')) el('levelDisplay').textContent = gState.level;
    if (el('livesDisplay')) el('livesDisplay').innerHTML = '&#9733;'.repeat(gState.lives) + '&#9734;'.repeat(3 - gState.lives);
  }

  function updatePacketAnalyzer(packet, decision) {
    if (el('packetProtocol')) el('packetProtocol').textContent = packet ? packet.scenario.protocol : 'Waiting';
    if (el('packetPayload')) el('packetPayload').textContent = packet ? (pPayload(packet) + 'B') : '-';
    if (el('packetHeaders')) {
      el('packetHeaders').textContent = packet && packet.headers.length
        ? packet.headers.map(h => h.label).join(', ')
        : (packet ? 'Application only' : '-');
    }
    if (el('packetFragments')) el('packetFragments').textContent = packet ? (packet.frag ? (packet.frags + ' planned') : (pNeedsFrag(packet) ? 'Needed' : 'Not needed')) : '-';
    if (el('packetDecision')) el('packetDecision').textContent = decision || 'Launch mission';
  }

  function isNearRouter() {
    const px = player.x + player.w / 2;
    const py = player.y + player.h / 2;
    const rx = routerNpc.x + routerNpc.w / 2;
    const ry = routerNpc.y + routerNpc.h / 2;
    return Math.hypot(px - rx, py - ry) < 86;
  }

  function setNpcDialogue(prompt, detail) {
    if (el('npcPrompt')) el('npcPrompt').textContent = prompt;
    if (el('npcDialogue')) el('npcDialogue').textContent = detail;
  }

  function talkToRouter() {
    const lesson = ROUTER_DIALOGUE[routerDialogIndex % ROUTER_DIALOGUE.length];
    routerDialogIndex++;
    setRouterMsg(lesson.prompt);
    setNpcDialogue('Router Ron says:', lesson.prompt + ' ' + lesson.route);
    updateMissionText(null, lesson.prompt);
    updatePacketAnalyzer(null, lesson.analyzer);
    setStatus('Talking to Router Ron');
  }

  function physics(e) {
    e.vy = Math.min(e.vy + 0.48, 14);
    e.x += e.vx;
    e.y += e.vy;
    if (e.y >= 440 - e.h) {
      e.y = 440 - e.h;
      e.vy = 0;
      e.onGround = true;
    } else {
      e.onGround = false;
    }
    e.x = Math.max(0, Math.min(780 - e.w, e.x));
  }

  function layerAt(y) {
    for (let i = OSI.length - 1; i >= 0; i--) {
      if (y + 20 >= OSI[i].y) return OSI[i];
    }
    return OSI[0];
  }

  function applyHeaderForLayer(packet, layerId) {
    const bytesMap = {
      4: { bytes: 20, label: 'TCP' },
      3: { bytes: 20, label: 'IP' },
      2: { bytes: 18, label: 'Ethernet' }
    };
    const info = bytesMap[layerId];
    if (!info) return;
    if (packet.headers.some(h => h.layerId === layerId)) return;
    packet.headers.push({ layerId, bytes: info.bytes, label: info.label });
    spawnFX(packet.x + packet.w / 2, packet.y, OSI.find(l => l.id === layerId).col, '+' + info.bytes + 'B ' + info.label);
  }

  function updatePlayer() {
    player.vx = 0;
    if (keys['ArrowLeft'] || keys['a']) player.vx = -player.speed;
    if (keys['ArrowRight'] || keys['d']) player.vx = player.speed;
    if ((keys['ArrowUp'] || keys[' '] || keys['w']) && player.onGround) player.vy = player.jump;
    physics(player);

    if (player.carrying) {
      player.carrying.x = player.x + player.w / 2 - player.carrying.w / 2;
      player.carrying.y = player.y - player.carrying.h - 3;
    }
    if (player.invince > 0) player.invince--;

    const lay = layerAt(player.y);
    if (lay && el('layerText')) {
      el('layerText').innerHTML = '<strong>OSI Layer ' + lay.id + ': ' + lay.name + '</strong><br>TCP/IP: ' + lay.tcp + '<br><span style="color:#64748b">' + lay.desc + '</span>';
    }
    if (!player.carrying) {
      if (isNearRouter()) {
        setNpcDialogue('Press E to talk.', 'Router Ron can explain OSI vs TCP/IP, deployment flow, MTU, and request/response ideas.');
      } else if (el('npcPrompt') && el('npcPrompt').textContent.indexOf('Press E to talk.') === 0) {
        setNpcDialogue('Walk near Router Ron and press E to talk.', 'Ron will coach you on OSI, TCP/IP, MTU, and how this game matches your deployment.');
      }
    }
    updateRouteText(player.carrying, lay);
    if (player.carrying) {
      updateMissionText(player.carrying, 'Current payload: ' + pPayload(player.carrying) + 'B. ' + (pNeedsFrag(player.carrying) ? 'You still need fragmentation before delivery.' : 'This payload fits the MTU plan.'));
      updatePacketAnalyzer(player.carrying, pNeedsFrag(player.carrying) ? 'Fragment before delivery' : 'Safe to route');
    } else if (!hacker.carrying) {
      updatePacketAnalyzer(null, 'Find or catch a packet');
    }

    if (hacker.carrying && collides(player, hacker) && !player.carrying) {
      const rescued = hacker.carrying;
      rescued.stolen = false;
      rescued.escore = true;
      rescued.x = player.x + player.w / 2 - rescued.w / 2;
      rescued.y = player.y - rescued.h - 3;
      player.carrying = rescued;
      hacker.carrying = null;
      hacker.stun = 90;
      gState.rescued++;
      gState.streak++;
      addScore(60);
      spawnFX(player.x + 18, player.y - 10, '#34d399', 'RESCUED!');
      setRouterMsg('Nice recovery. AI threats can interrupt delivery, but you can still restore the packet.');
      setStatus('Packet recovered from Hacker H4X');
      updatePacketAnalyzer(rescued, 'Recovered from AI NPC');
    }
  }

  function updateHacker() {
    if (hacker.stun > 0) {
      hacker.stun--;
      hacker.vx = 0;
      physics(hacker);
      return;
    }

    let target = null;
    let minDist = Infinity;
    packets.forEach(p => {
      if (!p.stolen && !p.done && !p.escore) {
        const d = Math.hypot(p.x - hacker.x, p.y - hacker.y);
        if (d < minDist) {
          minDist = d;
          target = p;
        }
      }
    });

    if (target && !hacker.carrying) {
      const dx = target.x - hacker.x;
      const dy = target.y - hacker.y;
      const dist = Math.max(1, Math.hypot(dx, dy));
      const spd = 1.0 + gState.level * 0.24;
      hacker.vx = (dx / dist) * spd;
      if (dist < 25 && hacker.onGround && dy < -35) hacker.vy = -9;
      if (dist < 30 && target !== player.carrying) {
        hacker.carrying = target;
        target.stolen = true;
        gState.lost++;
        gState.streak = 0;
        spawnFX(target.x, target.y, '#ef4444', 'STOLEN!');
        setRouterMsg('H4X stole a packet. Chase it and press into the hacker to rescue the traffic.');
        setStatus('Packet intercepted by AI attacker');
        updatePacketAnalyzer(target, 'Packet stolen by H4X');
        loseLife();
      }
    } else if (hacker.carrying) {
      hacker.vx = -3.1;
      hacker.carrying.x = hacker.x;
      hacker.carrying.y = hacker.y - 30;
      if (hacker.x <= 4) {
        hacker.carrying.done = true;
        hacker.carrying = null;
      }
    }

    physics(hacker);
  }

  function updatePackets() {
    packets.forEach(p => {
      if (p.escore || p.stolen || p.done) return;
      p.vy = Math.min(p.vy + 0.03, 1.3);
      p.y += p.vy;

      OSI.forEach(lay => {
        if (p.y + p.h >= lay.y + lay.h && p.layer > lay.id) {
          p.layer = lay.id;
          applyHeaderForLayer(p, lay.id);
        }
      });

      if (p.y + p.h >= 438) deliverPacket(p);
    });

    const active = packets.filter(p => !p.done && !p.stolen).length;
    if (active < 4 + gState.level && Math.random() < 0.006 + gState.level * 0.0024) {
      const size = Math.random() < 0.35 ? Math.floor(Math.random() * 900 + 1500) : undefined;
      packets.push(mkPkt(60 + Math.random() * 620, 5, size));
    }

    packets = packets.filter(p => p.y < 520 && !p.done && !(p.stolen && !hacker.carrying));
  }

  function deliverPacket(p) {
    if (p.done) return;
    p.done = true;

    if (pNeedsFrag(p)) {
      gState.streak = 0;
      spawnFX(p.x + p.w / 2, p.y, '#ef4444', 'MTU FAIL');
      setRouterMsg('MTU violation. TCP payload exceeded 1460B, so this delivery is rejected.');
      setStatus('Dropped oversized packet at Transport/Data Link boundary');
      updatePacketAnalyzer(p, 'Failed MTU check');
      loseLife();
      return;
    }

    gState.delivered++;
    gState.streak++;
    const comboBonus = Math.min(100, gState.streak * 10);
    const pts = 100 + (p.frag ? 40 : 20) + comboBonus;
    addScore(pts);
    spawnFX(p.x + p.w / 2, p.y, '#34d399', '+' + pts + ' pts!');
    setRouterMsg('Delivered ' + p.scenario.label + ' to the backend route. Good encapsulation and MTU decisions.');
    setStatus('Successful delivery to deployment edge');
    updatePacketAnalyzer(p, 'Delivered successfully');

    if (gState.delivered % 5 === 0) {
      gState.level++;
      setRouterMsg('Level ' + gState.level + '. Traffic spikes are coming, and H4X is now faster.');
      setStatus('Difficulty increased');
    }
    updateSidebar();
  }

  function loseLife() {
    gState.lives = Math.max(0, gState.lives - 1);
    updateSidebar();
    if (gState.lives <= 0) endNetGame();
  }

  function setRouterMsg(message) {
    routerNpc.msg = message;
    routerNpc.msgT = 260;
  }

  function drawBg() {
    ctx.fillStyle = '#060e1a';
    ctx.fillRect(0, 0, 780, 440);

    ctx.strokeStyle = 'rgba(59,130,246,0.04)';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < 780; gx += 40) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, 440); ctx.stroke();
    }

    const t = Date.now();
    [80, 195, 330, 480, 605, 715].forEach((bx, i) => {
      const by = (t / (180 + i * 25) + i * 73) % 450;
      ctx.fillStyle = 'rgba(96,165,250,0.18)';
      ctx.beginPath(); ctx.arc(bx, by, 2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(96,165,250,0.1)';
      ctx.beginPath(); ctx.arc(bx, (by + 110) % 450, 1.5, 0, Math.PI * 2); ctx.fill();
    });

    const activeLay = gameRunning ? layerAt(player.y) : null;

    OSI.forEach(layer => {
      const isActive = !!(activeLay && activeLay.id === layer.id);

      const g = ctx.createLinearGradient(0, layer.y, 780, layer.y + layer.h);
      g.addColorStop(0, layer.col + (isActive ? '42' : '18'));
      g.addColorStop(1, 'rgba(6,14,26,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, layer.y, 780, layer.h);

      if (isActive) {
        ctx.strokeStyle = layer.col;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        ctx.strokeRect(1, layer.y + 1, 778, layer.h - 2);
        ctx.globalAlpha = 1;
      }

      ctx.strokeStyle = layer.col;
      ctx.globalAlpha = isActive ? 0.9 : 0.38;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, layer.y); ctx.lineTo(780, layer.y); ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.fillStyle = layer.col;
      ctx.globalAlpha = isActive ? 1.0 : 0.72;
      ctx.font = 'bold 14px monospace';
      ctx.fillText('L' + layer.id, 5, layer.y + 16);
      ctx.font = 'bold 9px monospace';
      ctx.fillText(layer.name.toUpperCase(), 5, layer.y + 28);
      ctx.globalAlpha = 1;

      ctx.fillStyle = isActive ? 'rgba(226,232,240,0.9)' : 'rgba(100,116,139,0.52)';
      ctx.font = isActive ? 'bold 9px sans-serif' : '9px sans-serif';
      ctx.fillText(layer.desc, 92, layer.y + 16);

      ctx.fillStyle = layer.col;
      ctx.globalAlpha = isActive ? 0.95 : 0.45;
      ctx.font = 'bold 8px monospace';
      const tcpLabel = 'TCP/IP: ' + layer.tcp;
      ctx.fillText(tcpLabel, 775 - ctx.measureText(tcpLabel).width, layer.y + layer.h - 5);
      ctx.globalAlpha = 1;

      ctx.strokeStyle = layer.col + '3a';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 7]);
      ctx.beginPath(); ctx.moveTo(92, layer.y + layer.h); ctx.lineTo(680, layer.y + layer.h); ctx.stroke();
      ctx.setLineDash([]);
    });

    ctx.fillStyle = 'rgba(6,14,26,0.88)';
    ctx.fillRect(0, 0, 780, 14);
    ctx.fillStyle = '#334155';
    ctx.font = '8px monospace';
    ctx.fillText('DEPLOYMENT: GitHub Pages fetch()  \u2192  HTTPS/TLS  \u2192  TCP  \u2192  IP  \u2192  Ethernet  \u2192  NGINX  \u2192  Flask/Spring  \u2192  AWS EC2  \u2192  SQL', 4, 11);
  }

  function drawPlayer() {
    const { x, y, w, h } = player;
    if (player.invince > 0 && Math.floor(player.invince / 5) % 2) return;
    if (canDrawSprite(sprites.player)) {
      ctx.drawImage(sprites.player, x - 10, y - 12, 48, 54);
      ctx.fillStyle = '#b91c1c';
      ctx.font = 'bold 8px monospace';
      ctx.fillText('PLAYER', x - 2, y - 6);
      return;
    }
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(x + 4, y + 12, w - 8, h - 12);
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + 7, 8, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(x + 2, y - 1, w - 4, 9);
    ctx.fillRect(x - 1, y + 4, w + 2, 5);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('P1', x + 6, y + 26);
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(x - 1, y + 16, 5, player.carrying ? 10 : 14);
    ctx.fillRect(x + w - 4, y + 16, 5, player.carrying ? 10 : 14);
    ctx.fillStyle = '#0f2040';
    ctx.fillRect(x + 6, y + h - 11, 7, 11);
    ctx.fillRect(x + w - 13, y + h - 11, 7, 11);
  }

  function drawHacker() {
    const { x, y, w, h } = hacker;
    if (canDrawSprite(sprites.ai)) {
      ctx.drawImage(sprites.ai, x - 10, y - 8, 44, 44);
      ctx.fillStyle = hacker.stun > 0 ? '#cbd5e1' : '#ef4444';
      ctx.font = 'bold 8px monospace';
      ctx.fillText(hacker.stun > 0 ? 'STUN' : 'AI NPC', x - 2, y - 6);
      return;
    }
    ctx.fillStyle = hacker.stun > 0 ? '#4b5563' : '#7f1d1d';
    ctx.fillRect(x + 4, y + 12, w - 8, h - 12);
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + 7, 8, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(x + 3, y + 3, 5, 3);
    ctx.fillRect(x + w - 8, y + 3, 5, 3);
    ctx.fillStyle = hacker.stun > 0 ? '#cbd5e1' : '#ef4444';
    ctx.font = 'bold 7px monospace';
    ctx.fillText(hacker.stun > 0 ? 'STUN' : 'H4X', x + 1, y - 3);
    ctx.fillStyle = hacker.stun > 0 ? '#374151' : '#7f1d1d';
    ctx.fillRect(x - 1, y + 16, 5, 14);
    ctx.fillRect(x + w - 4, y + 16, 5, 14);
    ctx.fillStyle = '#450a0a';
    ctx.fillRect(x + 5, y + h - 11, 7, 11);
    ctx.fillRect(x + w - 12, y + h - 11, 7, 11);
  }

  function drawRouter() {
    const { x, y, w, h } = routerNpc;
    if (canDrawSprite(sprites.npc)) {
      ctx.drawImage(sprites.npc, x - 8, y - 54, 72, 72);
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 8px monospace';
      ctx.fillText('NPC', x + 9, y + 16);
      ctx.fillStyle = '#64748b';
      ctx.font = '7px monospace';
      ctx.fillText('Router Ron', x + 1, y + 28);
    } else {
    ctx.fillStyle = '#0f2040';
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2;
    rr(ctx, x, y, w, h, 5);
    ctx.fill();
    ctx.stroke();

    [[x + 8, y, x + 5, y - 14], [x + 22, y, x + 21, y - 11], [x + 37, y, x + 39, y - 13]].forEach(([ax, ay, bx, by]) => {
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
      ctx.fillStyle = Math.random() > 0.5 ? '#34d399' : '#10b981';
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 8px monospace';
    ctx.fillText('NPC', x + 9, y + 16);
    ctx.fillStyle = '#64748b';
    ctx.font = '7px monospace';
    ctx.fillText('Router Ron', x + 1, y + 28);
    ctx.fillStyle = Date.now() % 900 < 450 ? '#34d399' : '#065f46';
    ctx.beginPath();
    ctx.arc(x + 37, y + 10, 4, 0, Math.PI * 2);
    ctx.fill();
    }

    if (routerNpc.msgT > 0 && routerNpc.msg) {
      routerNpc.msgT--;
      const alpha = Math.min(1, routerNpc.msgT / 40);
      const bw = 220;
      const bh = 48;
      const bx = x - bw - 8;
      const by = y - 20;
      ctx.fillStyle = 'rgba(22,42,70,' + (alpha * 0.96) + ')';
      ctx.strokeStyle = 'rgba(52,211,153,' + alpha + ')';
      ctx.lineWidth = 1;
      rr(ctx, bx, by, bw, bh, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'rgba(200,220,255,' + alpha + ')';
      ctx.font = '8.5px sans-serif';
      const lines = routerNpc.msg.match(/.{1,34}(\s|$)/g) || [routerNpc.msg];
      lines.slice(0, 3).forEach((ln, i) => ctx.fillText(ln.trim(), bx + 8, by + 14 + i * 12));
    }
  }

  function drawPackets() {
    packets.forEach(p => {
      if (p.stolen || p.done) return;
      if (pNeedsFrag(p)) {
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 10;
      }
      ctx.fillStyle = p.escore ? '#1d4ed8' : '#0f2447';
      ctx.strokeStyle = p.escore ? '#93c5fd' : '#3b82f6';
      ctx.lineWidth = 1.5;
      rr(ctx, p.x, p.y, p.w, p.h, 4);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 8px monospace';
      ctx.fillText(p.scenario.protocol, p.x + 4, p.y + 10);
      ctx.fillText(pTotal(p) + 'B', p.x + 4, p.y + 21);

      if (pNeedsFrag(p)) {
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 7px monospace';
        ctx.fillText('FRAG', p.x + p.w - 22, p.y + 20);
      } else if (p.frag) {
        ctx.fillStyle = '#34d399';
        ctx.font = '7px monospace';
        ctx.fillText(p.frags + 'x', p.x + p.w - 18, p.y + 20);
      }

      let hx = p.x + p.w - 4;
      p.headers.forEach(hdr => {
        const hcols = { 4: '#3b82f6', 3: '#10b981', 2: '#8b5cf6' };
        ctx.fillStyle = (hcols[hdr.layerId] || '#60a5fa') + '96';
        ctx.fillRect(hx - 3, p.y + 2, 3, p.h - 4);
        hx -= 4;
      });
    });
  }

  function drawFX() {
    fx = fx.filter(f => f.life > 0);
    fx.forEach(f => {
      f.y += f.vy;
      f.life--;
      const alpha = f.life / 90;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = f.col;
      ctx.font = 'bold 10px monospace';
      ctx.fillText(f.txt || '+', f.x, f.y);
      ctx.globalAlpha = 1;
    });
  }

  function drawHUD() {
    const lay = layerAt(player.y);

    if (lay && gameRunning) {
      ctx.fillStyle = 'rgba(6,14,26,0.93)';
      ctx.strokeStyle = lay.col;
      ctx.lineWidth = 1.5;
      rr(ctx, 5, 16, 318, 42, 5); ctx.fill(); ctx.stroke();
      ctx.fillStyle = lay.col;
      ctx.font = 'bold 11px monospace';
      ctx.fillText('Layer ' + lay.id + ' \u2014 ' + lay.name + '  \u00b7  TCP/IP: ' + lay.tcp, 11, 31);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8.5px sans-serif';
      const desc = lay.desc.length > 60 ? lay.desc.slice(0, 60) + '\u2026' : lay.desc;
      ctx.fillText(desc, 11, 48);
    }

    ctx.fillStyle = 'rgba(6,14,26,0.9)';
    ctx.strokeStyle = '#1e3352'; ctx.lineWidth = 1;
    rr(ctx, 594, 16, 180, 42, 5); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('Score: ' + gState.score, 600, 31);
    ctx.fillStyle = '#64748b';
    ctx.font = '8.5px monospace';
    ctx.fillText('Active: ' + packets.filter(p => !p.done && !p.stolen).length + '  Del: ' + gState.delivered + '  Lvl: ' + gState.level, 600, 47);

    ctx.fillStyle = 'rgba(6,14,26,0.92)';
    ctx.fillRect(0, 425, 780, 15);
    ctx.fillStyle = '#2d3a4f';
    ctx.font = '8px monospace';
    ctx.fillText('MTU 1500B | TCP MSS 1460B | Ethernet frame max 1518B | OSI = 7-layer guideline | TCP/IP = 5-layer standard used in deployment', 4, 435);
  }

  function gameLoop() {
    if (!gameRunning || gamePaused) return;
    ctx.clearRect(0, 0, 780, 440);
    drawBg();
    updatePlayer();
    updateHacker();
    updatePackets();
    drawPackets();
    drawRouter();
    drawPlayer();
    drawHacker();
    drawFX();
    drawHUD();
    animId = requestAnimationFrame(gameLoop);
  }

  let eDown = false;
  let fDown = false;
  document.addEventListener('keydown', e => {
    keys[e.key] = true;
    if (!eDown && (e.key === 'e' || e.key === 'E')) {
      eDown = true;
      doInteract();
    }
    if (!fDown && (e.key === 'f' || e.key === 'F')) {
      fDown = true;
      doFragment();
    }
    if (gameRunning && ['ArrowUp', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
  });

  document.addEventListener('keyup', e => {
    keys[e.key] = false;
    if (e.key === 'e' || e.key === 'E') eDown = false;
    if (e.key === 'f' || e.key === 'F') fDown = false;
  });

  function doInteract() {
    if (!player.carrying && isNearRouter()) {
      talkToRouter();
      return;
    }

    if (player.carrying) {
      player.carrying.escore = false;
      player.carrying.vy = 0.5;
      player.carrying = null;
      updateMissionText(null);
      updateRouteText(null);
      setStatus('Packet released');
      updatePacketAnalyzer(null, 'Packet released');
      return;
    }

    let grabbed = null;
    packets.forEach(p => {
      if (!p.stolen && !p.done && !p.escore &&
          Math.abs(p.x + p.w / 2 - (player.x + player.w / 2)) < 44 &&
          Math.abs(p.y + p.h / 2 - (player.y + player.h / 2)) < 44) {
        grabbed = p;
      }
    });
    if (!grabbed) return;
    player.carrying = grabbed;
    grabbed.escore = true;
    updateMissionText(grabbed, 'Explain which OSI job maps into the TCP/IP model as you move this packet.');
    updateRouteText(grabbed, layerAt(player.y));
    setStatus('Packet secured');
    setRouterMsg('Packet picked up. Can you explain which layers are guideline-only versus practical standard?');
    updatePacketAnalyzer(grabbed, pNeedsFrag(grabbed) ? 'Oversized: fragment soon' : 'Carry to deployment edge');
  }

  function doFragment() {
    const p = player.carrying;
    if (!p || !pNeedsFrag(p)) return;
    p.frags = Math.ceil(p.sz / 1460);
    p.frag = true;
    p.sz = Math.min(1460, p.sz);
    addScore(25);
    spawnFX(p.x + p.w / 2, p.y, '#f59e0b', 'FRAG x' + p.frags);
    setRouterMsg('Fragmentation success. MSS is 1460B because Ethernet MTU 1500B loses 40B to IP and TCP headers.');
    setStatus('Packet fragmented for MTU compliance');
    updateMissionText(p, 'Fragment plan: ' + p.frags + ' pieces. This is exactly what the MTU lab explains.');
    updatePacketAnalyzer(p, 'Fragmentation complete');
  }

  window.startNetGame = function () {
    const c = document.getElementById('netCanvas');
    if (!c) return;
    ctx = c.getContext('2d');
    Object.assign(gState, { score: 0, lives: 3, level: 1, delivered: 0, lost: 0, rescued: 0, streak: 0 });
    packets = [];
    fx = [];
    Object.assign(player, { x: 78, y: 178, vx: 0, vy: 0, carrying: null, invince: 0 });
    Object.assign(hacker, { x: 430, y: 82, vx: 1.2, vy: 0, carrying: null, stun: 0 });
    addScore(0);
    updateSidebar();
    setStatus('Running');
    updateMissionText(null);
    updateRouteText(null);
    updatePacketAnalyzer(null, 'Launch mission');
    routerDialogIndex = 0;
    setNpcDialogue('Walk near Router Ron and press E to talk.', 'Ron will coach you on OSI, TCP/IP, MTU, and how this game matches your deployment.');
    gamePaused = false;

    packets.push(mkPkt(180, 8, 860));
    packets.push(mkPkt(390, 8, 1240));
    packets.push(mkPkt(580, 8, 1900));

    if (levelMode === 'application') {
      Object.assign(player, { x: 74, y: 178 });
      packets = [mkPkt(130, 120, 780)];
    } else if (levelMode === 'transport') {
      Object.assign(player, { x: 450, y: 250 });
      packets = [mkPkt(430, 170, 1900)];
    } else if (levelMode === 'network') {
      Object.assign(player, { x: 574, y: 178 });
      packets = [mkPkt(520, 155, 1280)];
    } else if (levelMode === 'physical') {
      Object.assign(player, { x: 718, y: 178 });
      packets = [mkPkt(650, 250, 900)];
    }

    const ov = el('gameOverlay');
    if (ov) ov.style.display = 'none';
    setRouterMsg('Mission start. Protect deployment traffic, explain the stack, and do not ignore MTU.');
    gameRunning = true;
    if (animId) cancelAnimationFrame(animId);
    gameLoop();
  };

  window.pauseNetGame = function () {
    if (!gameRunning) return;
    gamePaused = !gamePaused;
    setStatus(gamePaused ? 'Paused' : 'Running');
    if (!gamePaused) gameLoop();
  };

  window.stopNetGame = function () {
    gameRunning = false;
    gamePaused = false;
    if (animId) cancelAnimationFrame(animId);
    setStatus('Not Started');
    const ov = el('gameOverlay');
    if (ov) ov.style.display = 'flex';
  };

  window.setNetLevel = function (value) {
    levelMode = value || 'full';
    setStatus('Not Started');
    updatePacketAnalyzer(null, 'Level: ' + levelMode);
  };

  window.endNetGame = function () {
    gameRunning = false;
    gamePaused = false;
    const ov = el('gameOverlay');
    if (!ov) return;
    const mastery = gState.score >= 900 ? 'Unit 4 mastered' : gState.score >= 500 ? 'Solid review run' : 'Needs another practice round';
    ov.style.display = 'flex';
    ov.style.flexDirection = 'column';
    ov.style.alignItems = 'center';
    ov.style.justifyContent = 'center';
    ov.style.gap = '10px';
    ov.innerHTML =
      '<div style="font-size:2.2rem">&#128640;</div>' +
      '<h3 style="color:#fbbf24">Mission Complete</h3>' +
      '<p>Score: <strong>' + gState.score + '</strong> &nbsp;|&nbsp; Delivered: <strong>' + gState.delivered + '</strong> &nbsp;|&nbsp; Rescued: <strong>' + gState.rescued + '</strong></p>' +
      '<p style="font-size:0.76rem;color:#94a3b8">Packets Lost: ' + gState.lost + ' &nbsp;|&nbsp; Max Level: ' + gState.level + ' &nbsp;|&nbsp; ' + mastery + '</p>' +
      '<button class="btn-gold" style="margin-top:12px" onclick="startNetGame()">Replay Mission</button>';
    setStatus('Complete');
  };

  /* ================================================================
     ROBBERY RESPONSE SIMULATOR
     ================================================================ */
  const ROB_SCENARIOS = [
    {
      title: 'Dispatch Call',
      scene: 'You receive a 211 (robbery in progress) at a convenience store on Main St. Two suspects reported inside. What is your first action?',
      emoji: '&#128222;',
      options: [
        { text: 'Rush in immediately with weapon drawn', pts: -10, feedback: 'Rushing in without info puts everyone at risk. Always assess first.' },
        { text: 'Acknowledge dispatch and request backup while en route', pts: 30, feedback: 'Correct. Acknowledge, request backup, and gather intel while responding.' },
        { text: 'Drive past the store to look inside', pts: 5, feedback: 'Observing is good but you need to acknowledge dispatch and request backup first.' },
        { text: 'Wait at the station for more details', pts: -5, feedback: 'Time is critical in a robbery call. Respond immediately while gathering info.' }
      ]
    },
    {
      title: 'Arrival on Scene',
      scene: 'You arrive first on scene. The store front is glass and you can see one suspect at the register with a handgun. A second suspect is near the door. Backup is 2 minutes out.',
      emoji: '&#128663;',
      options: [
        { text: 'Enter through the front door alone', pts: -15, feedback: 'Never enter alone against armed suspects. Wait for backup and contain the scene.' },
        { text: 'Set up a perimeter and relay suspect descriptions to dispatch', pts: 30, feedback: 'Excellent. Contain, observe, and communicate. This is textbook response.' },
        { text: 'Use your PA system to order suspects out', pts: 5, feedback: 'This could work but risks escalation. Better to contain quietly until backup arrives.' },
        { text: 'Block the front entrance with your patrol car', pts: 10, feedback: 'Using your vehicle as cover is smart, but be careful not to trap suspects with hostages.' }
      ]
    },
    {
      title: 'Suspect Fleeing',
      scene: 'One suspect runs out the back door while the other stays inside with 3 hostages. Backup just arrived. What do you prioritize?',
      emoji: '&#127939;',
      options: [
        { text: 'Chase the fleeing suspect on foot alone', pts: -5, feedback: 'The hostage situation is the higher priority. Direct backup to track the fleeing suspect.' },
        { text: 'Direct backup to pursue the runner while you maintain position on the hostage situation', pts: 30, feedback: 'Perfect. Hostage safety is priority one. Coordinate backup for the pursuit.' },
        { text: 'Leave your position to get a better view', pts: -10, feedback: 'Abandoning your position could compromise the containment perimeter.' },
        { text: 'Fire a warning shot to stop the runner', pts: -20, feedback: 'Warning shots are not authorized and create extreme danger for bystanders.' }
      ]
    },
    {
      title: 'Negotiation',
      scene: 'The remaining suspect is now barricaded with hostages and demands a getaway car. He is becoming increasingly agitated. What approach do you take?',
      emoji: '&#128483;',
      options: [
        { text: 'Agree to all demands immediately', pts: 0, feedback: 'Avoid giving everything up front. Slow negotiations buy time for tactical teams.' },
        { text: 'Keep suspect talking calmly, buy time for negotiators and SWAT to arrive', pts: 30, feedback: 'Excellent. Time is on your side. Keep communication open and stall tactically.' },
        { text: 'Cut the store power to disorient the suspect', pts: -5, feedback: 'This could panic the suspect and endanger hostages. Leave tactical decisions to SWAT.' },
        { text: 'Refuse all communication', pts: -15, feedback: 'Cutting off communication removes your ability to monitor the situation and protect hostages.' }
      ]
    },
    {
      title: 'Resolution',
      scene: 'SWAT is in position. The suspect agrees to release one hostage in exchange for water. As the hostage exits, the suspect becomes visible through the doorway. What is the call?',
      emoji: '&#128737;',
      options: [
        { text: 'Take the shot yourself', pts: -10, feedback: 'This is SWAT\'s operation now. Unauthorized action could jeopardize the entire rescue.' },
        { text: 'Let SWAT handle it while you secure the released hostage', pts: 30, feedback: 'Perfect. Secure the hostage, maintain your perimeter role, and let SWAT execute their plan.' },
        { text: 'Rush the door while the suspect is distracted', pts: -20, feedback: 'Extremely dangerous. Uncoordinated entry risks crossfire with SWAT and hostage harm.' },
        { text: 'Yell at the suspect to surrender', pts: 5, feedback: 'Verbal commands can help but could also startle the suspect. Defer to SWAT command.' }
      ]
    }
  ];

  let robIdx = 0, robScore = 0, robTimer = null, robTimeLeft = 15;

  function updateRobStats() {
    if (el('robScore')) el('robScore').textContent = robScore;
    if (el('robScene')) el('robScene').textContent = (robIdx + 1) + '/5';
    if (el('robTimer')) el('robTimer').textContent = robTimeLeft + 's';
    const rating = robScore >= 100 ? 'Elite' : robScore >= 60 ? 'Proficient' : robScore >= 30 ? 'Developing' : 'Needs Work';
    const rCol = robScore >= 100 ? '#fbbf24' : robScore >= 60 ? '#34d399' : robScore >= 30 ? '#60a5fa' : '#ef4444';
    if (el('robRating')) { el('robRating').textContent = rating; el('robRating').style.color = rCol; }
  }

  function renderRobScene() {
    const s = ROB_SCENARIOS[robIdx];
    const c = el('robContainer');
    if (!c) return;
    robTimeLeft = 15;
    updateRobStats();
    clearInterval(robTimer);
    robTimer = setInterval(() => {
      robTimeLeft--;
      if (el('robTimer')) el('robTimer').textContent = robTimeLeft + 's';
      if (robTimeLeft <= 0) { clearInterval(robTimer); robAnswer(-1); }
    }, 1000);

    c.innerHTML =
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px"><span style="font-size:1.6rem">' + s.emoji + '</span><h3 style="color:#fbbf24;font-size:1rem;margin:0">Scene ' + (robIdx+1) + ': ' + s.title + '</h3></div>' +
      '<p style="color:#cbd5e1;font-size:0.88rem;line-height:1.6;margin-bottom:18px">' + s.scene + '</p>' +
      '<div style="display:grid;gap:8px">' +
      s.options.map((o, i) =>
        '<button onclick="robAnswer(' + i + ')" style="text-align:left;padding:12px 16px;background:rgba(255,255,255,0.03);border:1px solid #1e3352;border-radius:10px;color:#cbd5e1;font-size:0.84rem;cursor:pointer;transition:all 0.15s" onmouseover="this.style.borderColor=\'#3b82f6\';this.style.color=\'#e2e8f0\'" onmouseout="this.style.borderColor=\'#1e3352\';this.style.color=\'#cbd5e1\'">' +
        '<strong style="color:#60a5fa">' + String.fromCharCode(65+i) + '.</strong> ' + o.text + '</button>'
      ).join('') +
      '</div>';
  }

  window.robAnswer = function(idx) {
    clearInterval(robTimer);
    const s = ROB_SCENARIOS[robIdx];
    let pts, feedback;
    if (idx < 0) {
      pts = -10; feedback = 'Time ran out! In a real scenario, hesitation can cost lives. You must act decisively.';
    } else {
      pts = s.options[idx].pts; feedback = s.options[idx].feedback;
    }
    robScore += pts;
    updateRobStats();

    const db = el('robDebrief');
    const dbt = el('robDebriefText');
    if (db && dbt) {
      dbt.innerHTML = '<span style="color:' + (pts > 0 ? '#34d399' : '#ef4444') + '">' + (pts > 0 ? '+' : '') + pts + ' pts.</span> ' + feedback;
      db.style.display = 'block';
    }

    // Highlight chosen option
    const btns = el('robContainer').querySelectorAll('button');
    btns.forEach((b, i) => {
      b.style.pointerEvents = 'none';
      const opt = s.options[i];
      if (opt && opt.pts >= 25) b.style.borderColor = '#34d399';
      if (i === idx && pts < 0) b.style.borderColor = '#ef4444';
    });

    setTimeout(() => {
      robIdx++;
      if (robIdx >= ROB_SCENARIOS.length) {
        endRobbery();
      } else {
        el('robDebrief').style.display = 'none';
        renderRobScene();
      }
    }, 2200);
  };

  function endRobbery() {
    const c = el('robContainer');
    const grade = robScore >= 120 ? 'Elite Deputy' : robScore >= 80 ? 'Senior Deputy' : robScore >= 40 ? 'Deputy' : 'Trainee';
    const gradeCol = robScore >= 120 ? '#fbbf24' : robScore >= 80 ? '#34d399' : robScore >= 40 ? '#60a5fa' : '#ef4444';
    c.innerHTML =
      '<div style="text-align:center;padding:30px 20px">' +
      '<div style="font-size:3rem;margin-bottom:10px">&#128737;</div>' +
      '<h3 style="color:#fbbf24;font-size:1.2rem">Simulation Complete</h3>' +
      '<div style="font-size:2.4rem;font-weight:800;color:#fbbf24;margin:12px 0">' + robScore + ' pts</div>' +
      '<p style="color:' + gradeCol + ';font-size:1rem;font-weight:700">Rating: ' + grade + '</p>' +
      '<p style="color:#94a3b8;font-size:0.84rem;margin:12px 0 20px;max-width:400px;display:inline-block">Your decisions were evaluated on safety protocol, tactical awareness, de-escalation, and proper chain of command.</p>' +
      '<br><button class="btn-gold" onclick="startRobbery()">Retry Simulation</button>' +
      '</div>';
    el('robDebrief').style.display = 'none';
    updateRobStats();
  }

  window.startRobbery = function() {
    robIdx = 0; robScore = 0;
    el('robDebrief').style.display = 'none';
    renderRobScene();
  };

  /* ================================================================
     TARGET RANGE
     ================================================================ */
  let rangeActive = false, rangeTimer = null, rangeTimeLeft = 60;
  let rangeHits = 0, rangeMisses = 0, rangeCivHits = 0, rangeSpawned = 0, rangeTotal = 20;
  let rangeScoreVal = 0, rangeSpawnTimer = null;

  function updateRangeStats() {
    if (el('rangeScore')) el('rangeScore').textContent = rangeScoreVal;
    const total = rangeHits + rangeMisses + rangeCivHits;
    const acc = total > 0 ? Math.round((rangeHits / total) * 100) + '%' : '--';
    if (el('rangeAccuracy')) el('rangeAccuracy').textContent = acc;
    if (el('rangeRound')) el('rangeRound').textContent = rangeSpawned + '/' + rangeTotal;
    if (el('rangeTime')) el('rangeTime').textContent = rangeTimeLeft + 's';
  }

  function spawnTarget() {
    if (!rangeActive || rangeSpawned >= rangeTotal) return;
    rangeSpawned++;
    const area = el('rangeTargets');
    if (!area) return;
    const isThreat = Math.random() < 0.65;
    const size = 44 + Math.floor(Math.random() * 20);
    const maxX = area.offsetWidth - size - 10;
    const maxY = area.offsetHeight - size - 30;
    const x = 10 + Math.floor(Math.random() * maxX);
    const y = 20 + Math.floor(Math.random() * maxY);
    const lifespan = 1800 + Math.floor(Math.random() * 1200);
    const spawnTime = Date.now();

    const t = document.createElement('div');
    t.className = 'range-target';
    t.dataset.threat = isThreat ? '1' : '0';
    t.dataset.spawn = spawnTime;
    t.style.cssText = 'position:absolute;left:' + x + 'px;top:' + y + 'px;width:' + size + 'px;height:' + size + 'px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:' + (size * 0.5) + 'px;cursor:crosshair;transition:transform 0.1s,opacity 0.2s;animation:targetPop 0.15s ease-out;z-index:5;' +
      (isThreat
        ? 'background:radial-gradient(circle,#dc2626 30%,#7f1d1d 100%);border:2px solid #ef4444;box-shadow:0 0 12px rgba(239,68,68,0.4)'
        : 'background:radial-gradient(circle,#2563eb 30%,#1e3a5f 100%);border:2px solid #3b82f6;box-shadow:0 0 12px rgba(59,130,246,0.4)');
    t.innerHTML = isThreat ? '&#128299;' : '&#129489;';
    t.onclick = function(e) {
      e.stopPropagation();
      if (!rangeActive) return;
      const reaction = Date.now() - parseInt(this.dataset.spawn);
      if (this.dataset.threat === '1') {
        rangeHits++;
        const bonus = reaction < 800 ? 15 : reaction < 1200 ? 10 : 5;
        rangeScoreVal += 10 + bonus;
        this.innerHTML = '&#10060;';
        this.style.background = 'rgba(52,211,153,0.3)';
        this.style.borderColor = '#34d399';
      } else {
        rangeCivHits++;
        rangeScoreVal -= 20;
        this.innerHTML = '&#9888;';
        this.style.background = 'rgba(239,68,68,0.3)';
        this.style.borderColor = '#ef4444';
      }
      this.style.pointerEvents = 'none';
      updateRangeStats();
      setTimeout(() => { if (this.parentNode) this.parentNode.removeChild(this); }, 300);
    };

    area.appendChild(t);
    setTimeout(() => {
      if (t.parentNode && t.style.pointerEvents !== 'none') {
        if (isThreat) rangeMisses++;
        t.style.opacity = '0';
        setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 200);
        updateRangeStats();
      }
    }, lifespan);
  }

  window.rangeClick = function(e) {
    if (!rangeActive) return;
    if (e.target.closest('.range-target') || e.target.closest('#rangeOverlay')) return;
    rangeMisses++;
    updateRangeStats();
  };

  window.startRange = function() {
    rangeActive = true;
    rangeScoreVal = 0; rangeHits = 0; rangeMisses = 0; rangeCivHits = 0; rangeSpawned = 0; rangeTimeLeft = 60;
    const ov = el('rangeOverlay'); if (ov) ov.style.display = 'none';
    const fb = el('rangeFeedback'); if (fb) fb.style.display = 'none';
    const area = el('rangeTargets'); if (area) area.innerHTML = '';
    updateRangeStats();

    clearInterval(rangeTimer);
    rangeTimer = setInterval(() => {
      rangeTimeLeft--;
      if (el('rangeTime')) el('rangeTime').textContent = rangeTimeLeft + 's';
      if (rangeTimeLeft <= 0) endRange();
    }, 1000);

    clearInterval(rangeSpawnTimer);
    rangeSpawnTimer = setInterval(() => {
      if (rangeSpawned < rangeTotal && rangeActive) spawnTarget();
    }, 2400);
    spawnTarget();
  };

  function endRange() {
    rangeActive = false;
    clearInterval(rangeTimer);
    clearInterval(rangeSpawnTimer);
    const area = el('rangeTargets'); if (area) area.innerHTML = '';

    const total = rangeHits + rangeMisses + rangeCivHits;
    const acc = total > 0 ? Math.round((rangeHits / total) * 100) : 0;
    const grade = acc >= 85 && rangeCivHits === 0 ? 'Expert Marksman' : acc >= 70 ? 'Sharpshooter' : acc >= 50 ? 'Qualified' : 'Needs Practice';
    const gradeCol = acc >= 85 && rangeCivHits === 0 ? '#fbbf24' : acc >= 70 ? '#34d399' : acc >= 50 ? '#60a5fa' : '#ef4444';

    const ov = el('rangeOverlay');
    if (ov) {
      ov.style.display = 'flex';
      ov.innerHTML =
        '<div style="font-size:2.6rem;margin-bottom:8px">&#127919;</div>' +
        '<h3 style="color:#fbbf24;font-size:1.1rem">Training Complete</h3>' +
        '<div style="font-size:2.2rem;font-weight:800;color:#fbbf24;margin:8px 0">' + rangeScoreVal + ' pts</div>' +
        '<p style="color:' + gradeCol + ';font-weight:700">' + grade + '</p>' +
        '<div style="display:flex;gap:16px;margin:12px 0;font-size:0.82rem;color:#94a3b8">' +
        '<span>Threats Hit: <strong style="color:#34d399">' + rangeHits + '</strong></span>' +
        '<span>Missed: <strong style="color:#ef4444">' + rangeMisses + '</strong></span>' +
        '<span>Civilian Hits: <strong style="color:#ef4444">' + rangeCivHits + '</strong></span>' +
        '<span>Accuracy: <strong style="color:#fbbf24">' + acc + '%</strong></span>' +
        '</div>' +
        '<button class="btn-gold" style="margin-top:8px" onclick="event.stopPropagation();startRange()">Retry Training</button>';
    }

    const fb = el('rangeFeedback');
    const fbt = el('rangeFeedbackText');
    if (fb && fbt) {
      fbt.textContent = rangeCivHits > 0
        ? 'You hit ' + rangeCivHits + ' civilian(s). In the field, target identification is critical. Practice distinguishing threats from bystanders.'
        : acc >= 80
          ? 'Outstanding performance! Clean target discrimination and solid accuracy. Ready for duty.'
          : 'Keep practicing. Focus on quick target identification and steady aim.';
      fb.style.display = 'block';
    }
    updateRangeStats();
  }

})();
</script>
</body>
</html>
