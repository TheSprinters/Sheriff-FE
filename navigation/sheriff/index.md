---
layout: none
title: DSA Portal
permalink: /
search_exclude: true
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deputy Sheriffs' Association of San Diego County</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; scroll-padding-top: 80px; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #0b1a2e; color: #e2e8f0; line-height: 1.6; }
    a { color: #60a5fa; text-decoration: none; }

    /* ===== HEADER ===== */
    .header {
      position: sticky; top: 0; z-index: 1000;
      background: rgba(15,40,71,0.95); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .header-inner {
      max-width: 1200px; margin: 0 auto; height: 64px;
      display: flex; align-items: center; justify-content: space-between; padding: 0 24px; gap: 16px;
    }
    .logo { display: flex; align-items: center; gap: 10px; flex-shrink: 0; cursor: pointer; }
    .logo-text { font-size: 0.95rem; font-weight: 700; color: #fff; }
    .logo-sub { font-size: 0.62rem; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; }

    nav { display: flex; gap: 2px; align-items: center; }
    .nav-sep { width: 1px; height: 18px; background: rgba(255,255,255,0.08); margin: 0 4px; }
    .nav-link {
      padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 500; color: #94a3b8;
      cursor: pointer; transition: all 0.15s; white-space: nowrap;
    }
    .nav-link:hover, .nav-link.active { color: #fbbf24; background: rgba(251,191,36,0.08); }

    .header-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

    .search-box { position: relative; }
    .search-box input {
      width: 180px; padding: 7px 32px 7px 12px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px; color: #e2e8f0; font-size: 0.8rem; outline: none; transition: all 0.25s;
    }
    .search-box input::placeholder { color: #475569; }
    .search-box input:focus { border-color: #fbbf24; width: 240px; background: rgba(255,255,255,0.1); }
    .search-box .icon { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #475569; font-size: 0.8rem; pointer-events: none; }
    .search-dropdown {
      display: none; position: absolute; top: calc(100% + 6px); left: 0; right: 0;
      background: #162a46; border: 1px solid #2a3a5c; border-radius: 10px; overflow: hidden;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5); z-index: 1001;
    }
    .search-dropdown.open { display: block; }
    .search-item { padding: 10px 14px; font-size: 0.82rem; color: #cbd5e1; cursor: pointer; border-bottom: 1px solid #1e3352; }
    .search-item:hover { background: rgba(251,191,36,0.08); color: #fbbf24; }
    .search-item:last-child { border-bottom: none; }

    .btn { padding: 7px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; }
    .btn-outline { background: transparent; color: #fbbf24; border: 1px solid rgba(251,191,36,0.4); }
    .btn-outline:hover { background: rgba(251,191,36,0.1); }
    .btn-gold { background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; }
    .btn-gold:hover { box-shadow: 0 4px 14px rgba(245,158,11,0.3); }

    .user-area { position: relative; display: none; }
    .user-area.active { display: flex; align-items: center; }
    .user-chip {
      display: flex; align-items: center; gap: 6px; padding: 5px 12px;
      background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.3); border-radius: 8px;
      color: #fbbf24; font-size: 0.8rem; font-weight: 600; cursor: pointer;
    }
    .user-panel {
      display: none; position: absolute; top: calc(100% + 8px); right: 0;
      background: #162a46; border: 1px solid #2a3a5c; border-radius: 12px;
      min-width: 220px; box-shadow: 0 12px 40px rgba(0,0,0,0.5); overflow: hidden; z-index: 1001;
    }
    .user-panel.open { display: block; }
    .up-header { padding: 14px 16px; background: rgba(251,191,36,0.04); border-bottom: 1px solid #1e3352; }
    .up-name { font-weight: 700; color: #fbbf24; }
    .up-badge { font-size: 0.72rem; color: #64748b; }
    .up-item { padding: 10px 16px; font-size: 0.82rem; color: #94a3b8; cursor: pointer; border-bottom: 1px solid #1e3352; }
    .up-item:hover { background: rgba(96,165,250,0.06); color: #fff; }

    /* ===== MOBILE MENU ===== */
    .mob-toggle { display: none; background: none; border: none; color: #fbbf24; font-size: 1.4rem; cursor: pointer; }
    .mob-menu {
      display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
      background: rgba(11,26,46,0.98); backdrop-filter: blur(8px); z-index: 999;
      flex-direction: column; padding: 30px 24px; gap: 4px; overflow-y: auto;
    }
    .mob-menu.open { display: flex; }

    /* ===== HERO with background slideshow ===== */
    .hero {
      padding: 50px 24px 32px; text-align: center;
      position: relative; overflow: hidden; min-height: 340px;
      display: flex; align-items: center; justify-content: center;
    }
    .hero-bg {
      position: absolute; inset: 0; z-index: 0;
    }
    .hero-bg img {
      position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
      opacity: 0; transition: opacity 1.2s ease-in-out;
    }
    .hero-bg img.active { opacity: 1; }
    .hero-overlay {
      position: absolute; inset: 0; z-index: 1;
      background: linear-gradient(170deg, rgba(15,40,71,0.82), rgba(11,26,46,0.88));
    }
    .hero-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
    .hero-logo { width: 64px; height: auto; margin-bottom: 8px; filter: drop-shadow(0 4px 16px rgba(0,0,0,0.5)); }
    .hero h2 { font-size: 1.8rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; line-height: 1.2; }
    .hero p { font-size: 0.88rem; color: #c8d0dd; margin-bottom: 14px; max-width: 560px; margin-left: auto; margin-right: auto; }

    .hero-cta { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
    .hero-cta .btn { padding: 9px 20px; font-size: 0.82rem; border-radius: 10px; }
    .stats { display: flex; justify-content: center; gap: 28px; margin-top: 16px; flex-wrap: wrap; }
    .stat-num { font-size: 1.3rem; font-weight: 800; color: #fbbf24; }
    .stat-label { font-size: 0.6rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }

    /* ===== QUICK NAV STRIP ===== */
    .quick-nav {
      max-width: 1100px; margin: -20px auto 0; padding: 0 24px; position: relative; z-index: 3;
    }
    .quick-nav-inner {
      display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px;
      background: rgba(22,42,70,0.7); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px; padding: 10px; backdrop-filter: blur(8px);
    }
    .qn-item {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 10px 6px; border-radius: 10px; cursor: pointer; transition: all 0.2s;
      text-decoration: none; color: #94a3b8; text-align: center;
    }
    .qn-item:hover { background: rgba(251,191,36,0.08); color: #fbbf24; }
    .qn-icon { font-size: 1.3rem; }
    .qn-label { font-size: 0.68rem; font-weight: 600; }

    /* ===== MAIN CONTENT: 2-column layout ===== */
    .main-content {
      max-width: 1100px; margin: 20px auto 0; padding: 0 24px;
      display: grid; grid-template-columns: 1fr 340px; gap: 20px;
    }

    /* Left column: tabs */
    .tabs-bar {
      display: flex; gap: 4px; background: rgba(22,42,70,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 6px; overflow-x: auto; scrollbar-width: none; margin-bottom: 16px;
    }
    .tabs-bar::-webkit-scrollbar { display: none; }
    .tab-btn {
      flex: 1; min-width: 100px;
      padding: 8px 14px; border: none; background: transparent;
      color: #94a3b8; font-size: 0.82rem; font-weight: 600; cursor: pointer;
      border-radius: 8px; transition: all 0.2s; white-space: nowrap;
      display: flex; align-items: center; justify-content: center; gap: 6px;
    }
    .tab-btn:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
    .tab-btn.active {
      background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1));
      color: #fbbf24; box-shadow: inset 0 0 0 1px rgba(251,191,36,0.25);
    }
    .tab-btn .tab-icon { font-size: 1rem; }

    .tab-panel { display: none; }
    .tab-panel.active { display: block; animation: tabIn 0.3s ease; }
    @keyframes tabIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

    .panel-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; flex-wrap: wrap; gap: 8px; }
    .panel-head h2 { font-size: 1rem; font-weight: 700; color: #fff; letter-spacing: 0.3px; }
    .panel-head p { color: #64748b; font-size: 0.75rem; }

    /* ===== TILES ===== */
    .tiles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .tile {
      background: rgba(22,42,70,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px;
      padding: 14px; cursor: pointer; transition: all 0.2s; display: block; color: inherit;
    }
    .tile:hover { border-color: #fbbf24; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.3); }
    .tile-icon { font-size: 1.3rem; margin-bottom: 4px; }
    .tile-title { font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 2px; }
    .tile-desc { font-size: 0.7rem; color: #64748b; line-height: 1.4; }

    /* Expandable detail panel for Member Services */
    .detail-panel {
      display: none; margin: 10px 0 0;
      animation: panelIn 0.25s ease;
    }
    .detail-panel.open { display: block; }
    @keyframes panelIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    .dp-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 18px 20px;
      position: relative;
    }
    .dp-close { position: absolute; top: 10px; right: 14px; background: none; border: none; color: #475569; font-size: 1.3rem; cursor: pointer; }
    .dp-close:hover { color: #ef4444; }
    .dp-card h3 { font-size: 1rem; color: #fbbf24; margin-bottom: 8px; }
    .dp-card p, .dp-card li { font-size: 0.82rem; color: #94a3b8; line-height: 1.55; }
    .dp-card ul { padding-left: 18px; margin-top: 6px; }
    .dp-card li { margin-bottom: 3px; }
    .dp-card .dp-contact { margin-top: 10px; padding: 8px 12px; background: rgba(251,191,36,0.05); border-radius: 8px; font-size: 0.78rem; color: #cbd5e1; }

    /* ===== RIGHT SIDEBAR ===== */
    .sidebar { display: flex; flex-direction: column; gap: 16px; }

    /* Mini calendar */
    .side-card {
      background: rgba(22,42,70,0.6); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 16px; overflow: hidden;
    }
    .side-card h3 {
      font-size: 0.88rem; font-weight: 700; color: #fbbf24; margin-bottom: 10px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .side-card h3 a { font-size: 0.72rem; color: #60a5fa; font-weight: 500; }

    .mini-cal-grid {
      display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 10px;
    }
    .mc-hdr { text-align: center; font-size: 0.6rem; color: #475569; font-weight: 700; padding: 2px; }
    .mc-day {
      aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; color: #64748b; border-radius: 4px; position: relative;
    }
    .mc-day.today { background: rgba(251,191,36,0.2); color: #fbbf24; font-weight: 700; }
    .mc-day.has-event::after {
      content: ''; position: absolute; bottom: 2px; width: 3px; height: 3px;
      background: #f59e0b; border-radius: 50%;
    }

    /* Upcoming events mini-list */
    .evt-item {
      display: flex; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .evt-item:last-child { border-bottom: none; }
    .evt-date-box {
      min-width: 40px; text-align: center; background: rgba(251,191,36,0.08);
      border-radius: 8px; padding: 4px 6px;
    }
    .evt-date-box .day { font-size: 1rem; font-weight: 800; color: #fbbf24; line-height: 1; }
    .evt-date-box .mon { font-size: 0.58rem; color: #94a3b8; text-transform: uppercase; }
    .evt-info .evt-title { font-size: 0.8rem; font-weight: 600; color: #e2e8f0; }
    .evt-info .evt-meta { font-size: 0.68rem; color: #64748b; }

    /* News preview */
    .news-mini {
      padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .news-mini:last-child { border-bottom: none; }
    .news-mini .nm-title { font-size: 0.8rem; font-weight: 600; color: #e2e8f0; margin-bottom: 2px; }
    .news-mini .nm-date { font-size: 0.68rem; color: #64748b; }

    /* ===== ML LAB (Call Priority Trainer) ===== */
    .ml-intro {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.8));
      border: 1px solid #1e3352; border-radius: 12px; padding: 14px 18px; margin-bottom: 14px;
    }
    .ml-intro h3 { color: #fbbf24; font-size: 0.95rem; margin-bottom: 4px; }
    .ml-intro p { color: #94a3b8; font-size: 0.78rem; line-height: 1.5; }

    .ml-stepper { display: flex; gap: 6px; margin-bottom: 14px; }
    .ml-step-dot {
      flex: 1; padding: 6px 10px; text-align: center;
      background: rgba(22,42,70,0.6); border: 1px solid #1e3352; border-radius: 8px;
      font-size: 0.7rem; color: #64748b; font-weight: 600;
    }
    .ml-step-dot.active { background: rgba(251,191,36,0.12); border-color: rgba(251,191,36,0.4); color: #fbbf24; }
    .ml-step-dot.done { background: rgba(52,211,153,0.08); border-color: rgba(52,211,153,0.3); color: #34d399; }

    .ml-stage { display: none; }
    .ml-stage.active { display: block; }

    .ml-progress-bar { height: 5px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; margin-bottom: 12px; }
    .ml-progress-fill { height: 100%; background: linear-gradient(90deg, #fbbf24, #f59e0b); width: 0%; transition: width 0.3s ease; }

    .ml-case { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 12px 14px; margin-bottom: 8px; transition: all 0.2s; }
    .ml-case.answered { border-color: rgba(52,211,153,0.3); background: rgba(22,42,70,0.8); }
    .ml-case-num { font-size: 0.65rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px; }
    .ml-case-desc { font-size: 0.82rem; color: #e2e8f0; margin-bottom: 8px; line-height: 1.4; }
    .ml-case-features { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 8px; }
    .ml-feat-chip { padding: 2px 7px; background: rgba(96,165,250,0.08); border: 1px solid rgba(96,165,250,0.2); border-radius: 10px; font-size: 0.65rem; color: #93c5fd; }
    .ml-case-btns { display: flex; gap: 5px; flex-wrap: wrap; }
    .ml-btn {
      padding: 5px 12px; border: 1px solid #1e3352; background: rgba(22,42,70,0.4);
      color: #94a3b8; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.15s;
    }
    .ml-btn:hover { border-color: #fbbf24; color: #fbbf24; }
    .ml-btn.selected.p1 { background: rgba(239,68,68,0.15); border-color: #ef4444; color: #ef4444; }
    .ml-btn.selected.p2 { background: rgba(245,158,11,0.15); border-color: #f59e0b; color: #f59e0b; }
    .ml-btn.selected.p3 { background: rgba(52,211,153,0.15); border-color: #34d399; color: #34d399; }

    .ml-actions { display: flex; gap: 10px; justify-content: space-between; margin-top: 14px; flex-wrap: wrap; }
    .ml-train-btn, .ml-reset-btn {
      padding: 10px 24px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 10px;
      font-weight: 800; font-size: 0.85rem; cursor: pointer; transition: all 0.2s;
    }
    .ml-train-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .ml-train-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }
    .ml-reset-btn { background: transparent; border: 1px solid rgba(96,165,250,0.4); color: #60a5fa; }
    .ml-reset-btn:hover { background: rgba(96,165,250,0.08); }

    .ml-loader { text-align: center; padding: 30px 16px; color: #94a3b8; font-size: 0.85rem; }
    .ml-loader .spinner {
      display: inline-block; width: 28px; height: 28px;
      border: 3px solid rgba(251,191,36,0.15); border-top-color: #fbbf24;
      border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 8px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .ml-score-card {
      background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
      border: 1px solid rgba(251,191,36,0.25); border-radius: 14px;
      padding: 20px; margin-bottom: 14px; text-align: center;
    }
    .ml-score-num { font-size: 2.2rem; font-weight: 800; color: #fbbf24; line-height: 1; }
    .ml-score-label { font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
    .ml-score-sub { font-size: 0.8rem; color: #94a3b8; margin-top: 8px; }

    .ml-result-row {
      background: #162a46; border: 1px solid #1e3352; border-radius: 10px;
      padding: 10px 12px; margin-bottom: 6px;
      display: grid; grid-template-columns: 1fr auto auto; gap: 10px; align-items: center;
    }
    .ml-result-row.correct { border-left: 3px solid #34d399; }
    .ml-result-row.wrong { border-left: 3px solid #ef4444; }
    .ml-result-desc { font-size: 0.78rem; color: #cbd5e1; line-height: 1.4; }
    .ml-result-pred { font-size: 0.68rem; padding: 3px 8px; border-radius: 10px; font-weight: 700; text-align: center; min-width: 58px; }
    .ml-result-pred.p1 { background: rgba(239,68,68,0.12); color: #ef4444; }
    .ml-result-pred.p2 { background: rgba(245,158,11,0.12); color: #f59e0b; }
    .ml-result-pred.p3 { background: rgba(52,211,153,0.12); color: #34d399; }
    .ml-result-icon { font-size: 1rem; }
    .ml-result-icon.correct { color: #34d399; }
    .ml-result-icon.wrong { color: #ef4444; }

    .ml-explain {
      background: #0d1727; border: 1px solid #1e3352; border-radius: 10px;
      padding: 12px 14px; margin-top: 10px; font-size: 0.74rem; color: #94a3b8; line-height: 1.5;
    }
    .ml-explain b { color: #fbbf24; }

    /* ===== FOOTER ===== */
    footer { background: #0a1524; padding: 24px 24px; border-top: 1px solid #1e3352; }
    .ft-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 20px; }
    .ft-col h4 { font-size: 0.82rem; color: #fbbf24; margin-bottom: 8px; }
    .ft-col p, .ft-col a { font-size: 0.75rem; color: #64748b; display: block; line-height: 1.7; }
    .ft-col a:hover { color: #fbbf24; }

    /* ===== MODAL ===== */
    .modal-bg { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 2000; align-items: center; justify-content: center; padding: 20px; }
    .modal-bg.open { display: flex; }
    .modal { background: #162a46; border: 1px solid #1e3352; border-radius: 14px; padding: 28px; max-width: 420px; width: 100%; position: relative; max-height: 90vh; overflow-y: auto; }
    .modal h2 { font-size: 1.2rem; color: #fbbf24; margin-bottom: 4px; }
    .modal .sub { font-size: 0.8rem; color: #64748b; margin-bottom: 18px; }
    .modal-x { position: absolute; top: 10px; right: 14px; background: none; border: none; color: #64748b; font-size: 1.4rem; cursor: pointer; }
    .modal-x:hover { color: #ef4444; }
    .mtabs { display: flex; gap: 4px; margin-bottom: 18px; background: #0d1727; border-radius: 10px; padding: 4px; }
    .mtab { flex: 1; padding: 8px; text-align: center; font-size: 0.82rem; color: #94a3b8; cursor: pointer; border-radius: 6px; transition: all 0.2s; }
    .mtab.on { background: rgba(251,191,36,0.15); color: #fbbf24; }
    .fg { margin-bottom: 12px; }
    .fg label { display: block; font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px; }
    .fg input, .fg select { width: 100%; padding: 8px 12px; background: #0d1727; border: 1px solid #1e3352; border-radius: 8px; color: #e2e8f0; font-size: 0.85rem; }
    .fg input:focus, .fg select:focus { outline: none; border-color: #fbbf24; }
    .modal-submit { width: 100%; padding: 10px; background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; border: none; border-radius: 8px; font-weight: 700; font-size: 0.9rem; cursor: pointer; margin-top: 8px; }
    .modal-err { color: #ef4444; font-size: 0.78rem; margin-top: 8px; display: none; }

    /* ===== ADMIN ===== */
    .admin-section { display: none; max-width: 1100px; margin: 0 auto; padding: 20px 24px 40px; }
    .admin-section.open { display: block; }
    .admin-section h2 { font-size: 1.1rem; color: #fbbf24; margin-bottom: 14px; }
    .a-table { width: 100%; border-collapse: collapse; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; overflow: hidden; font-size: 0.8rem; }
    .a-table th { background: rgba(251,191,36,0.08); color: #fbbf24; text-align: left; padding: 10px 12px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; }
    .a-table td { padding: 10px 12px; color: #cbd5e1; border-top: 1px solid #1e3352; }
    .badge-s { padding: 2px 8px; border-radius: 10px; font-size: 0.68rem; font-weight: 700; }
    .badge-active { background: rgba(52,211,153,0.12); color: #34d399; }

    /* ===== CHATBOT ===== */
    .cb-trigger {
      position: fixed; bottom: 24px; right: 24px; width: 54px; height: 54px; border-radius: 50%;
      background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; border: none;
      font-size: 1.3rem; cursor: pointer; box-shadow: 0 6px 20px rgba(245,158,11,0.35);
      z-index: 1500;
    }
    .cb-win {
      display: none; position: fixed; bottom: 90px; right: 24px; width: 360px; max-width: calc(100vw - 48px);
      height: 480px; background: #162a46; border: 1px solid #1e3352; border-radius: 14px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5); flex-direction: column; overflow: hidden; z-index: 1500;
    }
    .cb-win.open { display: flex; }
    .cb-head { padding: 12px 16px; background: rgba(251,191,36,0.05); border-bottom: 1px solid #1e3352; display: flex; align-items: center; justify-content: space-between; }
    .cb-head h3 { font-size: 0.9rem; color: #fbbf24; }
    .cb-x { background: none; border: none; color: #64748b; font-size: 1.3rem; cursor: pointer; }
    .cb-msgs { flex: 1; overflow-y: auto; padding: 14px; display: flex; flex-direction: column; gap: 10px; }
    .cm { max-width: 85%; }
    .cm.user { align-self: flex-end; }
    .cm.bot { align-self: flex-start; }
    .cm .cb { padding: 8px 12px; border-radius: 10px; font-size: 0.82rem; line-height: 1.45; }
    .cm.user .cb { background: rgba(96,165,250,0.15); color: #cbd5e1; }
    .cm.bot .cb { background: rgba(22,42,70,0.9); color: #94a3b8; border: 1px solid #1e3352; }
    .cb-input { display: flex; gap: 6px; padding: 10px; border-top: 1px solid #1e3352; }
    .cb-input input { flex: 1; padding: 8px 12px; background: #0d1727; border: 1px solid #1e3352; border-radius: 8px; color: #e2e8f0; font-size: 0.82rem; outline: none; }
    .cb-input button { padding: 8px 14px; background: linear-gradient(135deg,#f59e0b,#d97706); color: #1e3a5f; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.8rem; }

    /* Quick-ask chips in chatbot */
    .cb-chips { display: flex; flex-wrap: wrap; gap: 5px; padding: 6px 14px 0; }
    .cb-chip {
      padding: 4px 10px; background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2);
      border-radius: 14px; font-size: 0.7rem; color: #fbbf24; cursor: pointer; transition: all 0.15s;
    }
    .cb-chip:hover { background: rgba(251,191,36,0.15); }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .main-content { grid-template-columns: 1fr; }
      .sidebar { order: -1; }
      .quick-nav-inner { grid-template-columns: repeat(3, 1fr); }
      .ft-inner { grid-template-columns: 1fr; }
      .ml-result-row { grid-template-columns: 1fr auto; }
    }
    @media (max-width: 700px) {
      nav { display: none; }
      .search-box { display: none; }
      .mob-toggle { display: block; }
      .hero h2 { font-size: 1.5rem; }
      .stats { gap: 20px; }
      .stat-num { font-size: 1.15rem; }
      .tiles { grid-template-columns: 1fr; }
      .quick-nav-inner { grid-template-columns: repeat(3, 1fr); }
    }
  </style>
</head>
<body>

<!-- HEADER -->
<header class="header">
  <div class="header-inner">
    <div class="logo" onclick="scrollToSection('#top')">
      <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Logo" style="width:38px;height:auto;">
      <div><div class="logo-text">Deputy Sheriffs' Assoc.</div><div class="logo-sub">San Diego County</div></div>
    </div>
    <nav>
      <div class="nav-link active" onclick="showTab('services')">Services</div>
      <div class="nav-link" onclick="showTab('community')">Community</div>
      <div class="nav-link" onclick="showTab('career')">Career</div>
      <div class="nav-link" onclick="showTab('ml')">ML Lab</div>
      <div class="nav-sep"></div>
      <a href="{{ site.baseurl }}/sheriff/info" class="nav-link" style="text-decoration:none">Full Info</a>
    </nav>
    <div class="header-right">
      <div class="search-box">
        <input type="text" placeholder="Search..." id="searchInput" autocomplete="off">
        <span class="icon">&#128269;</span>
        <div class="search-dropdown" id="searchDrop"></div>
      </div>
      <div id="authBtns">
        <button class="btn btn-outline" onclick="openModal('login')">Log In</button>
        <button class="btn btn-gold" onclick="openModal('signup')">Join</button>
      </div>
      <div class="user-area" id="userArea">
        <div class="user-chip" onclick="document.getElementById('userPanel').classList.toggle('open')">
          &#9733; <span id="uName">Deputy</span> &#9662;
        </div>
        <div class="user-panel" id="userPanel">
          <div class="up-header"><div class="up-name" id="upName">-</div><div class="up-badge" id="upBadge">-</div></div>
          <div class="up-item" id="upRank">-</div>
          <div class="up-item" id="upStation">-</div>
          <div class="up-item" id="adminBtn" style="display:none" onclick="toggleAdmin()">&#128100; View All Members</div>
          <div class="up-item" onclick="logout()" style="color:#ef4444">&#128682; Log Out</div>
        </div>
      </div>
      <button class="mob-toggle" id="mobBtn" onclick="document.getElementById('mobMenu').classList.toggle('open')">&#9776;</button>
    </div>
  </div>
</header>

<!-- MOBILE MENU -->
<div class="mob-menu" id="mobMenu">
  <div class="nav-link" onclick="showTab('services');document.getElementById('mobMenu').classList.remove('open')">Services</div>
  <div class="nav-link" onclick="showTab('community');document.getElementById('mobMenu').classList.remove('open')">Community</div>
  <div class="nav-link" onclick="showTab('career');document.getElementById('mobMenu').classList.remove('open')">Career</div>
  <div class="nav-link" onclick="showTab('ml');document.getElementById('mobMenu').classList.remove('open')">ML Lab</div>
  <a href="{{ site.baseurl }}/sheriff/info" class="nav-link">Full Info</a>
</div>

<!-- HERO with real DSA background images -->
<section class="hero" id="top">
  <div class="hero-bg">
    <img src="{{ site.baseurl }}/images/dsa/golf-tournament-photo.png" alt="" class="active">
    <img src="{{ site.baseurl }}/images/dsa/memorial-line-of-duty.png" alt="">
    <img src="{{ site.baseurl }}/images/dsa/staff-photo-1.png" alt="">
    <img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="">
    <img src="{{ site.baseurl }}/images/dsa/staff-photo-2.png" alt="">
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-inner">
    <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Badge" class="hero-logo">
    <h2>The Strength Behind the Badge</h2>
    <p>Representing San Diego County Sheriff's Deputies since 1955. Benefits, legal defense, events, and advocacy &mdash; all in one place.</p>
    <div class="hero-cta">
      <button class="btn btn-gold" onclick="showTab('services')">Explore Services</button>
      <a href="{{ site.baseurl }}/sheriff/info" class="btn btn-outline" style="text-decoration:none">About the DSA</a>
    </div>
    <div class="stats">
      <div><div class="stat-num">4,229</div><div class="stat-label">Members</div></div>
      <div><div class="stat-num">70+</div><div class="stat-label">Years</div></div>
      <div><div class="stat-num">12</div><div class="stat-label">Stations</div></div>
      <div><div class="stat-num">24/7</div><div class="stat-label">Support</div></div>
    </div>
  </div>
</section>

<!-- QUICK NAVIGATION STRIP -->
<div class="quick-nav">
  <div class="quick-nav-inner">
    <a class="qn-item" href="{{ site.baseurl }}/sheriff/events"><span class="qn-icon">&#128197;</span><span class="qn-label">Events</span></a>
    <a class="qn-item" href="{{ site.baseurl }}/sheriff/news"><span class="qn-icon">&#128240;</span><span class="qn-label">News</span></a>
    <div class="qn-item" onclick="showTab('services');openDetail('benefits')"><span class="qn-icon">&#128179;</span><span class="qn-label">Benefits</span></div>
    <div class="qn-item" onclick="showTab('services');openDetail('legal')"><span class="qn-icon">&#128272;</span><span class="qn-label">Legal</span></div>
    <a class="qn-item" href="{{ site.baseurl }}/sheriff/store"><span class="qn-icon">&#128176;</span><span class="qn-label">Store</span></a>
    <a class="qn-item" href="{{ site.baseurl }}/sheriff/contact"><span class="qn-icon">&#128222;</span><span class="qn-label">Contact</span></a>
  </div>
</div>

<!-- MAIN CONTENT: 2-column layout -->
<div class="main-content" id="tabsTop">

  <!-- LEFT COLUMN: Tabs -->
  <div class="left-col">
    <div class="tabs-bar" role="tablist">
      <button class="tab-btn active" data-tab="services" onclick="showTab('services')"><span class="tab-icon">&#128737;</span>Services</button>
      <button class="tab-btn" data-tab="community" onclick="showTab('community')"><span class="tab-icon">&#127963;</span>Community</button>
      <button class="tab-btn" data-tab="career" onclick="showTab('career')"><span class="tab-icon">&#127937;</span>Career</button>
      <button class="tab-btn" data-tab="ml" onclick="showTab('ml')"><span class="tab-icon">&#129504;</span>ML Lab</button>
    </div>

    <!-- TAB: SERVICES -->
    <div class="tab-panel active" id="tab-services">
      <div class="panel-head">
        <h2>Member Services</h2>
        <p>Tap a tile for details</p>
      </div>
      <div class="tiles">
        <div class="tile" onclick="openDetail('benefits')"><div class="tile-icon">&#128179;</div><div class="tile-title">Benefits</div><div class="tile-desc">Health, dental, vision, life</div></div>
        <div class="tile" onclick="openDetail('legal')"><div class="tile-icon">&#128272;</div><div class="tile-title">Legal Defense</div><div class="tile-desc">24/7 representation fund</div></div>
        <div class="tile" onclick="openDetail('wellness')"><div class="tile-icon">&#127891;</div><div class="tile-title">Wellness</div><div class="tile-desc">Peer support &amp; mental health</div></div>
        <div class="tile" onclick="openDetail('forms')"><div class="tile-icon">&#128196;</div><div class="tile-title">Forms &amp; Docs</div><div class="tile-desc">Contracts &amp; downloads</div></div>
      </div>
      <div class="detail-panel" id="dp-benefits"><div class="dp-card">
        <button class="dp-close" onclick="closeDetail('benefits')">&times;</button>
        <h3>Benefits &amp; Insurance</h3>
        <ul>
          <li><strong>Medical:</strong> Multiple plan options with low copays and broad network access.</li>
          <li><strong>Dental:</strong> Delta Dental PPO &mdash; preventive care covered at 100%.</li>
          <li><strong>Vision:</strong> VSP exams, frames, lenses, and contacts.</li>
          <li><strong>Life &amp; Disability:</strong> Group term life and short/long-term disability.</li>
        </ul>
        <div class="dp-contact">Questions? Call (858) 486-9009 or email benefits@dsasd.org</div>
      </div></div>
      <div class="detail-panel" id="dp-legal"><div class="dp-card">
        <button class="dp-close" onclick="closeDetail('legal')">&times;</button>
        <h3>Legal Defense Fund</h3>
        <ul>
          <li><strong>Administrative Investigations:</strong> IA interviews &amp; Skelly hearings.</li>
          <li><strong>Critical Incidents:</strong> 24/7 attorney response for officer-involved incidents.</li>
          <li><strong>Civil Litigation:</strong> Defense for suits from on-duty actions.</li>
          <li><strong>Coverage:</strong> Attorney fees, expert witnesses, court costs.</li>
        </ul>
        <div class="dp-contact">24/7 Legal Hotline: (858) 486-9009</div>
      </div></div>
      <div class="detail-panel" id="dp-wellness"><div class="dp-card">
        <button class="dp-close" onclick="closeDetail('wellness')">&times;</button>
        <h3>Wellness &amp; Peer Support</h3>
        <ul>
          <li><strong>Peer Support Team:</strong> Trained deputy counselors, fully confidential.</li>
          <li><strong>CISM Team:</strong> Critical Incident Stress Management debriefings.</li>
          <li><strong>Mental Health Referrals:</strong> Therapists experienced with LE issues.</li>
          <li><strong>Family Support:</strong> Resources for spouses and families.</li>
        </ul>
        <div class="dp-contact">Confidential line: (858) 486-9009 x wellness</div>
      </div></div>
      <div class="detail-panel" id="dp-forms"><div class="dp-card">
        <button class="dp-close" onclick="closeDetail('forms')">&times;</button>
        <h3>Forms &amp; Documents</h3>
        <ul>
          <li>Current MOU &amp; contract amendments</li>
          <li>Benefits enrollment &amp; change forms</li>
          <li>Legal defense fund request forms</li>
          <li>Grievance and Weingarten templates</li>
        </ul>
        <div class="dp-contact">Request documents: info@dsasd.org</div>
      </div></div>
    </div>

    <!-- TAB: COMMUNITY -->
    <div class="tab-panel" id="tab-community">
      <div class="panel-head">
        <h2>Community &amp; Information</h2>
        <p>News, events, the DSA story, and the store</p>
      </div>
      <div class="tiles">
        <a class="tile" href="{{ site.baseurl }}/sheriff/news"><div class="tile-icon">&#128240;</div><div class="tile-title">News</div><div class="tile-desc">Latest updates &amp; announcements</div></a>
        <a class="tile" href="{{ site.baseurl }}/sheriff/events"><div class="tile-icon">&#128197;</div><div class="tile-title">Events</div><div class="tile-desc">Calendar &amp; RSVP</div></a>
        <a class="tile" href="{{ site.baseurl }}/sheriff/info#about"><div class="tile-icon">&#127963;</div><div class="tile-title">About DSA</div><div class="tile-desc">Mission, stations, history</div></a>
        <a class="tile" href="{{ site.baseurl }}/sheriff/store"><div class="tile-icon">&#128176;</div><div class="tile-title">DSA Store</div><div class="tile-desc">Official merch &amp; apparel</div></a>
      </div>
    </div>

    <!-- TAB: CAREER -->
    <div class="tab-panel" id="tab-career">
      <div class="panel-head">
        <h2>Career &amp; Support</h2>
        <p>Grow your career and reach us anytime</p>
      </div>
      <div class="tiles">
        <a class="tile" href="{{ site.baseurl }}/sheriff/pathway"><div class="tile-icon">&#127937;</div><div class="tile-title">Rank Pathway</div><div class="tile-desc">Personalized promotion plan</div></a>
        <a class="tile" href="{{ site.baseurl }}/sheriff/faq"><div class="tile-icon">&#10067;</div><div class="tile-title">FAQ</div><div class="tile-desc">Common member questions</div></a>
        <div class="tile" onclick="document.getElementById('cbWin').classList.add('open')"><div class="tile-icon">&#128172;</div><div class="tile-title">AI Assistant</div><div class="tile-desc">Ask the DSA chatbot</div></div>
        <a class="tile" href="{{ site.baseurl }}/sheriff/contact"><div class="tile-icon">&#128222;</div><div class="tile-title">Contact</div><div class="tile-desc">Visit, call, email</div></a>
      </div>
    </div>

    <!-- TAB: ML LAB -->
    <div class="tab-panel" id="tab-ml">
      <div class="panel-head">
        <h2>&#129504; ML Lab &mdash; Call Priority Trainer</h2>
        <p>Teach a KNN classifier to triage sheriff dispatch calls</p>
      </div>
      <div class="ml-intro">
        <h3>What this is</h3>
        <p>You are the data scientist. Label 8 real-world dispatch scenarios with a priority (P1 = emergency, P2 = urgent, P3 = routine). The browser trains a <b>k-Nearest-Neighbors</b> classifier on your labels, then tests it on 5 unseen calls.</p>
      </div>
      <div class="ml-stepper">
        <div class="ml-step-dot active" id="mlDot1">1. Label</div>
        <div class="ml-step-dot" id="mlDot2">2. Train</div>
        <div class="ml-step-dot" id="mlDot3">3. Results</div>
      </div>
      <div class="ml-stage active" id="mlStage1">
        <div class="ml-progress-bar"><div class="ml-progress-fill" id="mlProg"></div></div>
        <div id="mlCases"></div>
        <div class="ml-actions">
          <button class="ml-reset-btn" onclick="mlAutoLabel()">&#9889; Use Suggested Labels</button>
          <button class="ml-train-btn" id="mlTrainBtn" onclick="mlTrain()" disabled>Train Model &rarr;</button>
        </div>
      </div>
      <div class="ml-stage" id="mlStage2">
        <div class="ml-loader">
          <div class="spinner"></div>
          <div id="mlLoaderText">Encoding features &amp; training KNN (k=3)&hellip;</div>
        </div>
      </div>
      <div class="ml-stage" id="mlStage3">
        <div class="ml-score-card">
          <div class="ml-score-num" id="mlScoreNum">0/5</div>
          <div class="ml-score-label">Model Accuracy</div>
          <div class="ml-score-sub" id="mlScoreSub"></div>
        </div>
        <h3 style="color:#fbbf24;font-size:0.88rem;margin:12px 0 6px">Test Call Predictions</h3>
        <div id="mlResults"></div>
        <div class="ml-explain" id="mlExplain"></div>
        <div class="ml-actions">
          <button class="ml-reset-btn" onclick="mlReset()">&#8635; Play Again</button>
          <button class="ml-train-btn" onclick="mlReset()">New Dataset</button>
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT SIDEBAR -->
  <div class="sidebar">

    <!-- Mini Events Calendar -->
    <div class="side-card">
      <h3>&#128197; Events <a href="{{ site.baseurl }}/sheriff/events">View All &rarr;</a></h3>
      <div class="mini-cal-grid" id="miniCal"></div>
      <div id="upcomingEvents"></div>
    </div>

    <!-- Latest News -->
    <div class="side-card">
      <h3>&#128240; News <a href="{{ site.baseurl }}/sheriff/news">More &rarr;</a></h3>
      <div class="news-mini"><div class="nm-title">Contract Negotiations: Healthcare Benefits Progress</div><div class="nm-date">April 10, 2026</div></div>
      <div class="news-mini"><div class="nm-title">New Legal Defense Fund Guidelines</div><div class="nm-date">April 8, 2026</div></div>
      <div class="news-mini"><div class="nm-title">Spring BBQ Registration Open</div><div class="nm-date">April 5, 2026</div></div>
    </div>

    <!-- DSA Store Preview -->
    <div class="side-card">
      <h3>&#128176; Store <a href="{{ site.baseurl }}/sheriff/store">Shop &rarr;</a></h3>
      <img src="{{ site.baseurl }}/images/dsa/store-relaunch-flyer.png" alt="DSA Store" style="width:100%;border-radius:8px;margin-bottom:8px;">
      <p style="font-size:0.78rem;color:#94a3b8;margin:0">Official DSA merchandise, challenge coins, patches, and apparel. Member discounts available.</p>
    </div>

  </div>
</div>

<!-- ADMIN (hidden unless admin toggles it) -->
<div class="admin-section" id="adminSection">
  <h2>All Registered Members</h2>
  <table class="a-table"><thead><tr><th>Name</th><th>Username</th><th>Badge</th><th>Rank</th><th>Station</th><th>Email</th><th>Status</th></tr></thead><tbody id="adminBody"></tbody></table>
</div>

<!-- FOOTER -->
<footer>
  <div class="ft-inner">
    <div class="ft-col">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA" style="width:40px;height:auto;opacity:0.8">
        <h4 style="margin:0">Deputy Sheriffs' Association</h4>
      </div>
      <p>13881 Danielson Street, Poway, CA 92064</p>
      <p>(858) 486-9009 &middot; info@dsasd.org</p>
      <p style="margin-top:6px;color:#1e3352">&copy; 2026 DSA San Diego County</p>
    </div>
    <div class="ft-col"><h4>Quick Links</h4>
      <a href="javascript:void(0)" onclick="showTab('services')">Services</a>
      <a href="javascript:void(0)" onclick="showTab('community')">Community</a>
      <a href="javascript:void(0)" onclick="showTab('career')">Career</a>
      <a href="javascript:void(0)" onclick="showTab('ml')">ML Lab</a>
    </div>
    <div class="ft-col"><h4>More</h4>
      <a href="{{ site.baseurl }}/sheriff/info">Full DSA Info</a>
      <a href="{{ site.baseurl }}/sheriff/events">Events Calendar</a>
      <a href="{{ site.baseurl }}/sheriff/store">DSA Store</a>
      <a href="javascript:void(0)" onclick="showTab('services');openDetail('legal')">Legal Defense</a>
    </div>
  </div>
</footer>

<!-- CHATBOT with preset responses -->
<button class="cb-trigger" onclick="document.getElementById('cbWin').classList.toggle('open')">&#128172;</button>
<div class="cb-win" id="cbWin">
  <div class="cb-head"><h3>DSA Assistant</h3><button class="cb-x" onclick="document.getElementById('cbWin').classList.remove('open')">&times;</button></div>
  <div class="cb-msgs" id="cbMsgs">
    <div class="cm bot"><div class="cb">Hi! I'm the DSA Assistant. Ask me about membership, benefits, legal defense, events, stations, or the store. You can also click a quick question below.</div></div>
  </div>
  <div class="cb-chips" id="cbChips">
    <span class="cb-chip" onclick="askPreset('What benefits does DSA offer?')">Benefits</span>
    <span class="cb-chip" onclick="askPreset('How does legal defense work?')">Legal</span>
    <span class="cb-chip" onclick="askPreset('What events are coming up?')">Events</span>
    <span class="cb-chip" onclick="askPreset('How do I contact the DSA?')">Contact</span>
    <span class="cb-chip" onclick="askPreset('What stations are in San Diego County?')">Stations</span>
  </div>
  <div class="cb-input"><input id="cbIn" placeholder="Ask a question..." onkeydown="if(event.key==='Enter')sendChat()"><button id="cbSend" onclick="sendChat()">Send</button></div>
</div>

<!-- LOGIN MODAL -->
<div class="modal-bg" id="modalBg">
  <div class="modal">
    <button class="modal-x" onclick="closeModal()">&times;</button>
    <h2 id="mTitle">Member Login</h2>
    <p class="sub" id="mSub">Access your DSA portal</p>
    <div class="mtabs"><div class="mtab on" id="tLog" onclick="mTab('login')">Log In</div><div class="mtab" id="tSign" onclick="mTab('signup')">Sign Up</div></div>
    <form id="fLogin" onsubmit="doLogin(event)">
      <div class="fg"><label>Username</label><input id="lUid" placeholder="Enter username" required></div>
      <div class="fg"><label>Password</label><input type="password" id="lPw" placeholder="Enter password" required></div>
      <button type="submit" class="modal-submit">Log In</button>
      <p class="modal-err" id="lErr"></p>
    </form>
    <form id="fSign" onsubmit="doSignup(event)" style="display:none">
      <div class="fg"><label>Full Name</label><input id="sName" placeholder="John Smith" required></div>
      <div class="fg"><label>Username</label><input id="sUid" placeholder="Choose a username" required></div>
      <div class="fg"><label>Badge / Sheriff ID</label><input id="sSid" placeholder="SD-1234" required></div>
      <div class="fg"><label>Email</label><input type="email" id="sEmail" placeholder="your@email.com"></div>
      <div class="fg"><label>Rank</label><select id="sRank"><option>Deputy</option><option>Corporal</option><option>Sergeant</option><option>Lieutenant</option><option>Captain</option></select></div>
      <div class="fg"><label>Station</label><select id="sStation"><option>San Diego Central</option><option>Vista Station</option><option>Encinitas Station</option><option>Fallbrook Station</option><option>Imperial Beach Station</option><option>Lemon Grove Station</option><option>Pine Valley Station</option><option>Rancho San Diego Station</option><option>San Marcos Station</option><option>Santee Station</option><option>4S Ranch Station</option><option>DSA Headquarters - Poway</option></select></div>
      <div class="fg"><label>Phone</label><input type="tel" id="sPhone" placeholder="(xxx) xxx-xxxx"></div>
      <div class="fg"><label>Password (min 8 chars)</label><input type="password" id="sPw" placeholder="Create password" required minlength="8"></div>
      <button type="submit" class="modal-submit">Create Account</button>
      <p class="modal-err" id="sErr"></p>
    </form>
  </div>
</div>

<script>
/* ================================================================
   CONFIG
   ================================================================ */
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

let user = null;

/* ================================================================
   DOM HELPERS
   ================================================================ */
function scrollToSection(sel) { document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' }); }
function el(id) { return document.getElementById(id); }
function showError(id, msg) { const e = el(id); e.textContent = msg; e.style.display = 'block'; }
function hideError(id) { el(id).style.display = 'none'; }
function sanitizeHTML(t) { return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>'); }
function apiRequest(path, method, body) {
  const opts = { 
    method, 
    mode: 'cors',
    credentials: 'include', 
    headers: { 
      'Content-Type': 'application/json',
      'X-Origin': 'client'
    } 
  };
  if (body) opts.body = JSON.stringify(body);
  return fetch(`${API}${path}`, opts).then(r => {
    if (!r.ok) return r.json().then(d => { throw new Error(d.message || d.error || 'Request failed'); });
    return r.json();
  });
}

/* ================================================================
   TABS
   ================================================================ */
function showTab(id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + id));
  document.querySelectorAll('header .nav-link').forEach(l => {
    const onClick = l.getAttribute('onclick') || '';
    l.classList.toggle('active', onClick.includes("showTab('" + id + "')"));
  });
  const top = el('tabsTop');
  if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ================================================================
   DETAIL PANELS
   ================================================================ */
function closeAllDetailPanels() {
  document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('open'));
}
function openDetail(id) {
  showTab('services');
  closeAllDetailPanels();
  const panel = el('dp-' + id);
  if (panel) { panel.classList.add('open'); setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200); }
}
function closeDetail(id) { el('dp-' + id)?.classList.remove('open'); }

/* ================================================================
   SEARCH
   ================================================================ */
const searchMap = [
  { label: 'Benefits & Insurance', tab: 'services', detail: 'benefits' },
  { label: 'Legal Defense',        tab: 'services', detail: 'legal' },
  { label: 'Wellness',             tab: 'services', detail: 'wellness' },
  { label: 'Forms & Documents',    tab: 'services', detail: 'forms' },
  { label: 'News',                 target: '{{ site.baseurl }}/sheriff/news' },
  { label: 'Events',               target: '{{ site.baseurl }}/sheriff/events' },
  { label: 'About DSA',            target: '{{ site.baseurl }}/sheriff/info#about' },
  { label: 'Store',                target: '{{ site.baseurl }}/sheriff/store' },
  { label: 'Rank Pathway',         target: '{{ site.baseurl }}/sheriff/pathway' },
  { label: 'FAQ',                  target: '{{ site.baseurl }}/sheriff/faq' },
  { label: 'AI Assistant',         tab: 'career' },
  { label: 'Contact',              target: '{{ site.baseurl }}/sheriff/contact' },
  { label: 'ML Lab',               tab: 'ml' },
  { label: 'Call Priority Trainer', tab: 'ml' },
  { label: 'Full DSA Info',        target: '{{ site.baseurl }}/sheriff/info' },
];

el('searchInput')?.addEventListener('input', function() {
  const q = this.value.trim(), drop = el('searchDrop');
  if (!drop) return;
  if (q.length < 2) { drop.classList.remove('open'); return; }
  const hits = searchMap.filter(s => s.label.toLowerCase().includes(q.toLowerCase()));
  if (!hits.length) { drop.classList.remove('open'); return; }
  drop.innerHTML = hits.map((h, i) => `<div class="search-item" data-i="${i}">${h.label}</div>`).join('');
  drop.classList.add('open');
  drop.querySelectorAll('.search-item').forEach((it, i) => it.addEventListener('click', function() {
    const hit = hits[i];
    if (hit.tab) showTab(hit.tab);
    if (hit.detail) setTimeout(() => openDetail(hit.detail), 300);
    if (hit.target) { if (hit.target.startsWith('#')) scrollToSection(hit.target); else location.href = hit.target; }
    drop.classList.remove('open');
    el('searchInput').value = '';
  }));
});

document.addEventListener('click', function(e) {
  const drop = el('searchDrop');
  if (drop && !e.target.closest('.search-box')) drop.classList.remove('open');
  if (!e.target.closest('.user-area')) el('userPanel')?.classList.remove('open');
});

/* ================================================================
   MODAL / AUTH / ADMIN
   ================================================================ */
function openModal(tab) { el('modalBg').classList.add('open'); switchModalTab(tab || 'login'); }
function closeModal() { el('modalBg').classList.remove('open'); hideError('lErr'); hideError('sErr'); }
function switchModalTab(t) {
  const isLogin = (t === 'login');
  el('tLog').classList.toggle('on', isLogin);
  el('tSign').classList.toggle('on', !isLogin);
  el('fLogin').style.display = isLogin ? 'block' : 'none';
  el('fSign').style.display = isLogin ? 'none' : 'block';
  el('mTitle').textContent = isLogin ? 'Member Login' : 'Create Account';
  el('mSub').textContent = isLogin ? 'Access your DSA portal' : 'Register as a DSA member';
}
function mTab(t) { switchModalTab(t); }

function doLogin(e) {
  e.preventDefault();
  hideError('lErr');
  apiRequest('/api/sheriff/authenticate', 'POST', { uid: el('lUid').value, password: el('lPw').value })
    .then(d => { user = d.user; closeModal(); updateUI(); })
    .catch(err => showError('lErr', err.message));
}
function doSignup(e) {
  e.preventDefault();
  hideError('sErr');
  const body = {
    name: el('sName').value, uid: el('sUid').value, sheriff_id: el('sSid').value,
    email: el('sEmail').value, rank: el('sRank').value, station: el('sStation').value,
    phone: el('sPhone').value, password: el('sPw').value,
  };
  apiRequest('/api/sheriff/user', 'POST', body)
    .then(() => { switchModalTab('login'); el('lUid').value = body.uid; alert('Account created! Please log in.'); })
    .catch(err => showError('sErr', err.message));
}
function logout() {
  apiRequest('/api/sheriff/authenticate', 'DELETE')
    .finally(() => { user = null; updateUI(); el('userPanel').classList.remove('open'); });
}
function updateUI() {
  if (user) {
    el('authBtns').style.display = 'none';
    el('userArea').classList.add('active');
    el('uName').textContent = user.name.split(' ')[0];
    el('upName').textContent = user.name;
    el('upBadge').textContent = 'Badge: ' + user.sheriff_id;
    el('upRank').textContent = 'Rank: ' + user.rank;
    el('upStation').textContent = 'Station: ' + user.station;
    el('adminBtn').style.display = user.role === 'Admin' ? 'block' : 'none';
  } else {
    el('authBtns').style.display = 'flex';
    el('userArea').classList.remove('active');
    el('adminSection').classList.remove('open');
  }
}
function toggleAdmin() {
  const s = el('adminSection');
  s.classList.toggle('open');
  if (s.classList.contains('open')) loadAdmin();
  el('userPanel').classList.remove('open');
  if (s.classList.contains('open')) setTimeout(() => s.scrollIntoView({ behavior: 'smooth' }), 100);
}
function loadAdmin() {
  fetch(`${API}/api/sheriff/user`, { credentials: 'include' })
    .then(r => r.json())
    .then(users => {
      el('adminBody').innerHTML = users.map(u =>
        `<tr><td>${u.name}</td><td>${u.uid}</td><td>${u.sheriff_id}</td><td>${u.rank}</td><td>${u.station}</td><td>${u.email}</td><td><span class="badge-s badge-active">${u.status}</span></td></tr>`
      ).join('');
    })
    .catch(e => console.error(e));
}

/* ================================================================
   HERO BACKGROUND SLIDESHOW
   ================================================================ */
(function() {
  const imgs = document.querySelectorAll('.hero-bg img');
  if (imgs.length < 2) return;
  let idx = 0;
  setInterval(() => {
    imgs[idx].classList.remove('active');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('active');
  }, 5000);
})();

/* ================================================================
   MINI CALENDAR + UPCOMING EVENTS (sidebar)
   ================================================================ */
const sideEvents = [
  { title: 'Monthly General Meeting', date: '2026-04-15', time: '6:00 PM', loc: 'DSA HQ, Poway' },
  { title: 'Spring BBQ & Family Day', date: '2026-04-22', time: '12:00 PM', loc: 'Vista Station' },
  { title: 'Legal Defense Workshop', date: '2026-04-28', time: '2:00 PM', loc: 'Central Jail Training' },
  { title: 'Scholarship Fundraiser Gala', date: '2026-05-06', time: '7:00 PM', loc: 'Sheraton Mission Valley' },
];

(function buildMiniCal() {
  const now = new Date();
  const y = now.getFullYear(), m = now.getMonth();
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const startDay = first.getDay();
  const daysInMonth = last.getDate();
  const eventDates = new Set(sideEvents.map(e => parseInt(e.date.split('-')[2])));

  let html = '';
  ['S','M','T','W','T','F','S'].forEach(d => { html += `<div class="mc-hdr">${d}</div>`; });
  for (let i = 0; i < startDay; i++) html += '<div class="mc-day"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    let cls = 'mc-day';
    if (d === now.getDate()) cls += ' today';
    if (eventDates.has(d)) cls += ' has-event';
    html += `<div class="${cls}">${d}</div>`;
  }
  el('miniCal').innerHTML = html;

  // Upcoming events list
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  el('upcomingEvents').innerHTML = sideEvents.slice(0, 3).map(ev => {
    const d = new Date(ev.date);
    return `<div class="evt-item">
      <div class="evt-date-box"><div class="day">${d.getDate()}</div><div class="mon">${months[d.getMonth()]}</div></div>
      <div class="evt-info"><div class="evt-title">${ev.title}</div><div class="evt-meta">${ev.time} &bull; ${ev.loc}</div></div>
    </div>`;
  }).join('');
})();

/* ================================================================
   CHATBOT — Preset responses for demo (no API key needed)
   Falls back to API if available, otherwise uses local responses
   ================================================================ */
const PRESET_RESPONSES = {
  'benefits': 'The DSA offers comprehensive benefits including medical insurance (multiple plan options with low copays), Delta Dental PPO with preventive care covered at 100%, VSP vision coverage for exams, frames, and contacts, plus group term life insurance and short/long-term disability coverage. Benefits extend to members and their families. For specific plan details, call (858) 486-9009 or email benefits@dsasd.org.',
  'legal defense': 'The DSA Legal Defense Fund provides 24/7 legal representation for members. Coverage includes: administrative investigations (IA interviews & Skelly hearings), critical incident response (immediate attorney dispatch for officer-involved incidents), civil litigation defense for on-duty actions, and Weingarten rights representation. The fund covers attorney fees, expert witnesses, and court costs. Emergency Legal Hotline: (858) 486-9009.',
  'legal': 'The DSA Legal Defense Fund provides 24/7 legal representation for members. Coverage includes: administrative investigations (IA interviews & Skelly hearings), critical incident response (immediate attorney dispatch for officer-involved incidents), civil litigation defense for on-duty actions, and Weingarten rights representation. The fund covers attorney fees, expert witnesses, and court costs. Emergency Legal Hotline: (858) 486-9009.',
  'events': 'Upcoming DSA events include: Monthly General Meeting (April 15, 6:00 PM at DSA HQ in Poway), Spring BBQ & Family Day (April 22, 12:00 PM at Vista Station), Legal Defense Workshop (April 28, 2:00 PM at Central Jail Training Room), and the Scholarship Fundraiser Gala (May 6, 7:00 PM at Sheraton Mission Valley). Visit the Events page for full details and to RSVP.',
  'contact': 'You can reach the DSA at: Address: 13881 Danielson Street, Poway, CA 92064. Phone: (858) 486-9009 (also the 24/7 Legal Hotline). Email: info@dsasd.org or benefits@dsasd.org for benefits questions. Office Hours: Monday-Friday, 8:00 AM - 5:00 PM. Visit the Contact page for a map and more details.',
  'stations': 'DSA members serve across San Diego County at these patrol stations: San Diego Central, Vista, Encinitas, Fallbrook, Imperial Beach, Lemon Grove, Pine Valley, Rancho San Diego, San Marcos, Santee, 4S Ranch, and Court Services. Detention facilities include Vista Detention, Central Jail, East Mesa, George Bailey, and Las Colinas. Specialized units include K-9, SWAT, Investigations, Narcotics, Traffic, Search & Rescue, Crime Lab, Gang Unit, and Bomb/Arson.',
  'membership': 'All sworn personnel of the San Diego County Sheriff\'s Department are eligible for DSA membership. Membership dues are automatically deducted from paychecks, and benefits begin immediately upon enrollment. Members include Deputies, Corporals, Sergeants, Lieutenants, and Captains. To enroll, contact the DSA office at (858) 486-9009.',
  'store': 'The DSA Store offers official merchandise including challenge coins, patches, memorabilia, and apparel. The store is located at DSA Headquarters in Poway and is also available online. Member discounts apply automatically. Online orders ship within 5-7 business days. Visit the Store page for current inventory.',
  'wellness': 'The DSA offers comprehensive wellness services: a Peer Support Team with trained deputy counselors (fully confidential), Critical Incident Stress Management (CISM) debriefings, mental health referrals to therapists experienced with law enforcement issues, fitness facility partnerships and gym discounts, stress management workshops, family support services, and confidential substance abuse counseling referrals. Contact the wellness line: (858) 486-9009 x wellness.',
  'rank': 'The San Diego County Sheriff\'s Department rank structure includes: Deputy (entry-level, patrol & calls for service), Corporal (senior deputy, field training officer), Sergeant (first-line supervisor), Lieutenant (division commander), and Captain (senior commander, station commander). The DSA represents sworn personnel at every rank level. Visit the Rank Pathway page for personalized promotion planning.',
  'about': 'The Deputy Sheriffs\' Association of San Diego County (DSA) was founded in 1955 and is the exclusive collective bargaining unit for all sworn deputies. With over 4,229 active members, the DSA negotiates contracts with the County covering wages, benefits, working conditions, overtime, and retirement. Headquarters: 13881 Danielson Street, Poway, CA 92064. Website: dsasd.org.',
  'hours': 'DSA Headquarters office hours are Monday through Friday, 8:00 AM to 5:00 PM. The 24/7 Legal Hotline is always available at (858) 486-9009 for emergencies. Address: 13881 Danielson Street, Poway, CA 92064.',
  'grievance': 'If you have a workplace issue or contract dispute, contact your station\'s Shop Steward first — they are your frontline union representative. Stewards can help with grievance filing, MOU interpretation, and Weingarten rights representation at investigatory interviews. For complex cases, contact the DSA office at (858) 486-9009 or email info@dsasd.org.',
  'mou': 'The DSA negotiates Memoranda of Understanding (MOUs) with the County of San Diego covering wages, benefits, working conditions, overtime, and retirement for all sworn personnel. Current MOU documents and contract amendments are available through the Forms & Documents section. Contact info@dsasd.org for specific contract questions.',
  'newsletter': 'The Silver Star Newsletter is the DSA\'s bi-monthly publication sent to all members. It covers union updates, negotiation progress, legislative alerts, board meeting summaries, and community news. Contact communications@dsasd.org to submit content or subscribe.',
  'scholarship': 'The DSA Scholarship Program provides financial assistance to children of active DSA members for college and vocational education. Applications are accepted annually. The 2026-2027 application period is currently open. Contact the DSA office at (858) 486-9009 for application materials and deadlines.',
  'weingarten': 'Under Weingarten Rights, you have the right to request union representation at any investigatory interview that you reasonably believe could lead to discipline. Your Shop Steward or a DSA representative can attend to assist you. If you are called to an investigatory interview, contact the DSA immediately at (858) 486-9009.',
  'login': 'To log in to the DSA portal, click the "Log In" button in the top right corner and enter your username and password. If you don\'t have an account yet, click "Join" to create one with your Sheriff ID badge number. If you\'re having trouble, contact info@dsasd.org for account assistance.',
  'help': 'I can help you with information about: DSA membership & benefits, legal defense services, upcoming events, station locations, the DSA store, wellness programs, rank structure, contract/MOU questions, grievance procedures, and more. Just ask your question or click one of the quick topics below!',
};

function findPresetResponse(msg) {
  const lower = msg.toLowerCase();
  // Check for keyword matches
  const keywords = [
    { keys: ['benefit', 'insurance', 'medical', 'dental', 'vision', 'health'], resp: 'benefits' },
    { keys: ['legal', 'defense', 'attorney', 'lawyer', 'representation'], resp: 'legal defense' },
    { keys: ['event', 'calendar', 'bbq', 'picnic', 'meeting', 'gala', 'upcoming'], resp: 'events' },
    { keys: ['contact', 'phone', 'email', 'address', 'reach', 'call'], resp: 'contact' },
    { keys: ['station', 'location', 'facility', 'detention', 'patrol'], resp: 'stations' },
    { keys: ['member', 'join', 'enroll', 'dues', 'eligible'], resp: 'membership' },
    { keys: ['store', 'merch', 'merchandise', 'apparel', 'coin', 'patch', 'shop', 'buy'], resp: 'store' },
    { keys: ['wellness', 'mental', 'peer support', 'counseling', 'stress', 'cism', 'fitness'], resp: 'wellness' },
    { keys: ['rank', 'promotion', 'deputy', 'sergeant', 'lieutenant', 'captain', 'corporal', 'pathway'], resp: 'rank' },
    { keys: ['about', 'history', 'founded', 'mission', 'what is', 'who is'], resp: 'about' },
    { keys: ['hours', 'open', 'office hours', 'when'], resp: 'hours' },
    { keys: ['grievance', 'dispute', 'complaint', 'steward', 'workplace'], resp: 'grievance' },
    { keys: ['mou', 'contract', 'negotiat', 'wages', 'salary', 'overtime', 'bargain'], resp: 'mou' },
    { keys: ['newsletter', 'silver star', 'publication'], resp: 'newsletter' },
    { keys: ['scholarship', 'education', 'college', 'financial aid'], resp: 'scholarship' },
    { keys: ['weingarten', 'rights', 'interview', 'investigat'], resp: 'weingarten' },
    { keys: ['login', 'log in', 'sign in', 'account', 'password'], resp: 'login' },
    { keys: ['help', 'what can you', 'how do i', 'assist'], resp: 'help' },
  ];
  for (const kw of keywords) {
    if (kw.keys.some(k => lower.includes(k))) {
      return PRESET_RESPONSES[kw.resp];
    }
  }
  return null;
}

let chatHist = [];
function addChatMessage(text, sender) {
  const c = el('cbMsgs');
  const div = document.createElement('div');
  div.className = 'cm ' + sender;
  div.innerHTML = '<div class="cb">' + sanitizeHTML(text) + '</div>';
  c.appendChild(div); c.scrollTop = c.scrollHeight;
}

function askPreset(q) {
  el('cbIn').value = q;
  sendChat();
}

function sendChat() {
  const inp = el('cbIn'); const msg = inp.value.trim(); inp.value = '';
  if (!msg) return;
  addChatMessage(msg, 'user');
  chatHist.push({ role: 'user', content: msg });

  // Try preset first
  const preset = findPresetResponse(msg);
  if (preset) {
    setTimeout(() => {
      addChatMessage(preset, 'bot');
      chatHist.push({ role: 'assistant', content: preset });
    }, 400);
    return;
  }

  // Fallback: try API, then generic response
  const c = el('cbMsgs');
  const typing = document.createElement('div');
  const tid = 't' + Date.now();
  typing.id = tid; typing.className = 'cm bot';
  typing.innerHTML = '<div class="cb">...</div>';
  c.appendChild(typing); c.scrollTop = c.scrollHeight;
  const btn = el('cbSend'); btn.disabled = true; btn.textContent = '...';
  apiRequest('/api/sheriff/chat', 'POST', { message: msg, history: chatHist.slice(-10) })
    .then(d => {
      el(tid)?.remove();
      addChatMessage(d.reply, 'bot');
      chatHist.push({ role: 'assistant', content: d.reply });
    })
    .catch(() => {
      el(tid)?.remove();
      const fallback = "I'm not sure about that specific question. For detailed assistance, please contact the DSA office at (858) 486-9009 or email info@dsasd.org. You can also try asking about benefits, legal defense, events, stations, membership, wellness, or the store.";
      addChatMessage(fallback, 'bot');
      chatHist.push({ role: 'assistant', content: fallback });
    })
    .finally(() => { btn.disabled = false; btn.textContent = 'Send'; });
}

/* ================================================================
   INIT — auth session
   ================================================================ */
fetch(`${API}/api/sheriff/id`, { 
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: { 
    'Content-Type': 'application/json',
    'X-Origin': 'client'
  }
})
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(d => {
    user = d;
    updateUI();
    // Personalize chatbot greeting
    const msgs = el('cbMsgs');
    if (msgs && user.name) {
      msgs.innerHTML = `<div class="cm bot"><div class="cb">Hi ${user.name.split(' ')[0]}! I'm the DSA Assistant. As a ${user.rank || 'member'} at ${user.station || 'your station'}, I can help with benefits, legal defense, events, and more. Ask away or click a quick question below.</div></div>`;
    }
    // Personalize the hero welcome
    const heroP = document.querySelector('.hero p');
    if (heroP && user.name) {
      heroP.textContent = `Welcome back, ${user.rank || ''} ${user.name.split(' ')[0]}. Benefits, legal defense, events, and advocacy — all in one place.`;
    }
  })
  .catch(() => {});

/* ================================================================
   ML LAB — Call Priority KNN Trainer
   ================================================================ */
const ML_TRAIN = [
  { desc: 'Domestic disturbance with weapon at 2am in a residential home; injuries reported.',
    feat: [2,0,2,1], suggest: 1, tags: ['Night','Residential','Weapon','Injury'] },
  { desc: 'Loud music noise complaint at 11pm in a residential neighborhood; no injuries.',
    feat: [1,0,0,0], suggest: 3, tags: ['Evening','Residential','Noise'] },
  { desc: 'Armed robbery in progress at 3am at a 24-hour gas station; cashier injured.',
    feat: [2,1,2,1], suggest: 1, tags: ['Night','Commercial','Armed','Injury'] },
  { desc: 'Shoplifting report at 2pm in a retail mall; no injuries, suspect fled.',
    feat: [0,1,1,0], suggest: 3, tags: ['Day','Commercial','Theft'] },
  { desc: 'Stabbing at 7pm in a public park; one victim with serious injuries.',
    feat: [1,2,2,1], suggest: 1, tags: ['Evening','Public','Weapon','Injury'] },
  { desc: 'Multi-vehicle traffic accident at 5pm on the highway; minor injuries being evaluated.',
    feat: [1,3,1,1], suggest: 2, tags: ['Evening','Highway','Accident','Injury'] },
  { desc: 'Welfare check on elderly resident, 10am, residential; no known injury.',
    feat: [0,0,0,0], suggest: 3, tags: ['Day','Residential','Welfare'] },
  { desc: 'Bar fight at 1am in a downtown commercial district; one party with facial injuries.',
    feat: [2,1,1,1], suggest: 2, tags: ['Night','Commercial','Disturbance','Injury'] },
];

const ML_TEST = [
  { desc: 'Home invasion with firearm at 3am; homeowner reports serious injuries.',
    feat: [2,0,2,1], truth: 1 },
  { desc: 'Shoplifting incident at 4pm in a retail store; suspect fled, no injuries.',
    feat: [0,1,1,0], truth: 3 },
  { desc: 'Stabbing reported at 10pm near a public transit stop; victim bleeding heavily.',
    feat: [1,2,2,1], truth: 1 },
  { desc: 'Minor fender-bender at 3pm on the highway; no injuries.',
    feat: [0,3,1,0], truth: 3 },
  { desc: 'Loud music complaint at midnight in residential area; no injuries.',
    feat: [2,0,0,0], truth: 3 },
];

const PRIO_TEXT = { 1: 'P1 Emergency', 2: 'P2 Urgent', 3: 'P3 Routine' };
const PRIO_SHORT = { 1: 'P1', 2: 'P2', 3: 'P3' };
let mlLabels = new Array(ML_TRAIN.length).fill(null);

function mlRenderCases() {
  const host = el('mlCases');
  host.innerHTML = ML_TRAIN.map((c, i) => {
    const answered = mlLabels[i] ? 'answered' : '';
    const btns = [1,2,3].map(p => {
      const sel = mlLabels[i] === p ? `selected p${p}` : '';
      return `<button class="ml-btn ${sel}" onclick="mlLabel(${i}, ${p})">${PRIO_TEXT[p]}</button>`;
    }).join('');
    const tags = c.tags.map(t => `<span class="ml-feat-chip">${t}</span>`).join('');
    return `<div class="ml-case ${answered}"><div class="ml-case-num">Case ${i+1}/${ML_TRAIN.length}</div><div class="ml-case-desc">${c.desc}</div><div class="ml-case-features">${tags}</div><div class="ml-case-btns">${btns}</div></div>`;
  }).join('');
  mlUpdateProgress();
}

function mlLabel(i, p) { mlLabels[i] = p; mlRenderCases(); }
function mlAutoLabel() { ML_TRAIN.forEach((c, i) => { mlLabels[i] = c.suggest; }); mlRenderCases(); }

function mlUpdateProgress() {
  const done = mlLabels.filter(x => x !== null).length;
  el('mlProg').style.width = (done / ML_TRAIN.length * 100) + '%';
  el('mlTrainBtn').disabled = done < ML_TRAIN.length;
}

function mlStep(n) {
  document.querySelectorAll('.ml-stage').forEach(s => s.classList.remove('active'));
  el('mlStage' + n).classList.add('active');
  for (let i = 1; i <= 3; i++) {
    const dot = el('mlDot' + i);
    dot.classList.remove('active', 'done');
    if (i < n) dot.classList.add('done');
    else if (i === n) dot.classList.add('active');
  }
}

function mlKnn(testFeat, trainFeats, trainLabels, k) {
  const dists = trainFeats.map((f, i) => ({
    d: Math.sqrt(f.reduce((s, v, j) => s + (v - testFeat[j])**2, 0)),
    label: trainLabels[i]
  }));
  dists.sort((a, b) => a.d - b.d);
  const top = dists.slice(0, k);
  const votes = { 1:0, 2:0, 3:0 };
  top.forEach(x => { votes[x.label] = (votes[x.label] || 0) + 1; });
  let best = 1, bestCount = -1;
  for (const lbl of [1,2,3]) { if (votes[lbl] > bestCount) { bestCount = votes[lbl]; best = parseInt(lbl); } }
  return best;
}

function mlTrain() {
  mlStep(2);
  const loader = el('mlLoaderText');
  const steps = ['Encoding features & training KNN (k=3)...','Computing distances for 5 test calls...','Tallying nearest-neighbor votes...','Scoring against expert ground truth...'];
  let i = 0; loader.innerHTML = steps[0];
  const iv = setInterval(() => { i++; if (i >= steps.length) { clearInterval(iv); mlEvaluate(); return; } loader.innerHTML = steps[i]; }, 550);
}

function mlEvaluate() {
  const trainFeats = ML_TRAIN.map(c => c.feat);
  const preds = ML_TEST.map(t => mlKnn(t.feat, trainFeats, mlLabels, 3));
  const correct = preds.filter((p, i) => p === ML_TEST[i].truth).length;
  el('mlScoreNum').textContent = correct + '/' + ML_TEST.length;
  el('mlScoreSub').textContent = correct === ML_TEST.length ? 'Perfect. Your labels trained a model that matches the dispatch desk exactly.'
    : correct >= 3 ? 'Solid. The model generalized well from your training labels.'
    : 'Underfit. Try labeling training cases more consistently with severity and injury.';
  el('mlResults').innerHTML = ML_TEST.map((t, i) => {
    const pred = preds[i], ok = pred === t.truth;
    return `<div class="ml-result-row ${ok?'correct':'wrong'}"><div class="ml-result-desc">${t.desc}<br><span style="color:#64748b;font-size:0.7rem">Expert: ${PRIO_TEXT[t.truth]} &middot; Model: ${PRIO_TEXT[pred]}</span></div><div class="ml-result-pred p${pred}">${PRIO_SHORT[pred]}</div><div class="ml-result-icon ${ok?'correct':'wrong'}">${ok?'&#10003;':'&#10007;'}</div></div>`;
  }).join('');
  const lc = { 1:0, 2:0, 3:0 }; mlLabels.forEach(l => { lc[l]++; });
  el('mlExplain').innerHTML = `<b>How KNN decided:</b> for each test call, the model found the 3 closest training cases by feature distance and took a majority vote.<br><b>Your training distribution:</b> P1=${lc[1]}, P2=${lc[2]}, P3=${lc[3]}. Balanced classes produce better accuracy.`;
  mlStep(3);
}

function mlReset() { mlLabels = new Array(ML_TRAIN.length).fill(null); mlRenderCases(); mlStep(1); }
mlRenderCases();
</script>
</body>
</html>
