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

    /* ===== HERO (compact) ===== */
    .hero {
      padding: 44px 24px 28px; text-align: center;
      background: linear-gradient(170deg, rgba(15,40,71,0.92), rgba(11,26,46,0.96));
      position: relative; overflow: hidden;
    }
    .hero::after {
      content: ''; position: absolute; top: 50%; left: 50%; width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%);
      transform: translate(-50%,-50%); pointer-events: none; z-index: 0;
    }
    .hero-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
    .hero-logo { width: 64px; height: auto; margin-bottom: 8px; filter: drop-shadow(0 4px 16px rgba(0,0,0,0.5)); }
    .hero h2 { font-size: 1.8rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; line-height: 1.2; }
    .hero p { font-size: 0.88rem; color: #7f8ea3; margin-bottom: 14px; max-width: 560px; margin-left: auto; margin-right: auto; }

    .hero-cta { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
    .hero-cta .btn { padding: 9px 20px; font-size: 0.82rem; border-radius: 10px; }
    .stats { display: flex; justify-content: center; gap: 28px; margin-top: 16px; flex-wrap: wrap; }
    .stat-num { font-size: 1.3rem; font-weight: 800; color: #fbbf24; }
    .stat-label { font-size: 0.6rem; color: #475569; text-transform: uppercase; letter-spacing: 1px; }

    /* ===== TABS ===== */
    .tabs-wrap { max-width: 1100px; margin: 0 auto; padding: 20px 24px 0; }
    .tabs-bar {
      display: flex; gap: 4px; background: rgba(22,42,70,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 6px; overflow-x: auto; scrollbar-width: none;
    }
    .tabs-bar::-webkit-scrollbar { display: none; }
    .tab-btn {
      flex: 1; min-width: 120px;
      padding: 10px 16px; border: none; background: transparent;
      color: #94a3b8; font-size: 0.84rem; font-weight: 600; cursor: pointer;
      border-radius: 8px; transition: all 0.2s; white-space: nowrap;
      display: flex; align-items: center; justify-content: center; gap: 6px;
    }
    .tab-btn:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
    .tab-btn.active {
      background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1));
      color: #fbbf24; box-shadow: inset 0 0 0 1px rgba(251,191,36,0.25);
    }
    .tab-btn .tab-icon { font-size: 1rem; }

    .tab-panel { display: none; max-width: 1100px; margin: 0 auto; padding: 24px 24px 10px; }
    .tab-panel.active { display: block; animation: tabIn 0.3s ease; }
    @keyframes tabIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

    .panel-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px; }
    .panel-head h2 { font-size: 1.05rem; font-weight: 700; color: #fff; letter-spacing: 0.3px; }
    .panel-head p { color: #64748b; font-size: 0.78rem; }

    /* ===== TILES ===== */
    .tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
    .tile {
      background: rgba(22,42,70,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px;
      padding: 16px; cursor: pointer; transition: all 0.2s; display: block; color: inherit;
    }
    .tile:hover { border-color: #fbbf24; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.3); }
    .tile-icon { font-size: 1.4rem; margin-bottom: 6px; }
    .tile-title { font-size: 0.88rem; font-weight: 700; color: #fff; margin-bottom: 2px; }
    .tile-desc { font-size: 0.72rem; color: #64748b; line-height: 1.4; }

    /* Expandable detail panel for Member Services */
    .detail-panel {
      display: none; margin: 12px 0 0;
      animation: panelIn 0.25s ease;
    }
    .detail-panel.open { display: block; }
    @keyframes panelIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    .dp-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 22px 24px;
      position: relative;
    }
    .dp-close { position: absolute; top: 10px; right: 14px; background: none; border: none; color: #475569; font-size: 1.3rem; cursor: pointer; }
    .dp-close:hover { color: #ef4444; }
    .dp-card h3 { font-size: 1.05rem; color: #fbbf24; margin-bottom: 10px; }
    .dp-card p, .dp-card li { font-size: 0.84rem; color: #94a3b8; line-height: 1.6; }
    .dp-card ul { padding-left: 20px; margin-top: 8px; }
    .dp-card li { margin-bottom: 4px; }
    .dp-card .dp-contact { margin-top: 12px; padding: 10px 14px; background: rgba(251,191,36,0.05); border-radius: 8px; font-size: 0.8rem; color: #cbd5e1; }

    /* ===== ML LAB (Call Priority Trainer) ===== */
    .ml-intro {
      background: linear-gradient(135deg, rgba(22,42,70,0.8), rgba(11,26,46,0.8));
      border: 1px solid #1e3352; border-radius: 12px; padding: 18px 22px; margin-bottom: 16px;
    }
    .ml-intro h3 { color: #fbbf24; font-size: 1rem; margin-bottom: 6px; }
    .ml-intro p { color: #94a3b8; font-size: 0.8rem; line-height: 1.5; }

    .ml-stepper { display: flex; gap: 8px; margin-bottom: 16px; }
    .ml-step-dot {
      flex: 1; padding: 8px 12px; text-align: center;
      background: rgba(22,42,70,0.6); border: 1px solid #1e3352; border-radius: 8px;
      font-size: 0.72rem; color: #64748b; font-weight: 600;
    }
    .ml-step-dot.active { background: rgba(251,191,36,0.12); border-color: rgba(251,191,36,0.4); color: #fbbf24; }
    .ml-step-dot.done { background: rgba(52,211,153,0.08); border-color: rgba(52,211,153,0.3); color: #34d399; }

    .ml-stage { display: none; }
    .ml-stage.active { display: block; }

    .ml-progress-bar {
      height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;
      margin-bottom: 14px;
    }
    .ml-progress-fill {
      height: 100%; background: linear-gradient(90deg, #fbbf24, #f59e0b); width: 0%;
      transition: width 0.3s ease;
    }

    .ml-case {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px;
      padding: 16px 18px; margin-bottom: 10px; transition: all 0.2s;
    }
    .ml-case.answered { border-color: rgba(52,211,153,0.3); background: rgba(22,42,70,0.8); }
    .ml-case-num { font-size: 0.68rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
    .ml-case-desc { font-size: 0.88rem; color: #e2e8f0; margin-bottom: 10px; line-height: 1.45; }
    .ml-case-features {
      display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px;
    }
    .ml-feat-chip {
      padding: 2px 8px; background: rgba(96,165,250,0.08); border: 1px solid rgba(96,165,250,0.2);
      border-radius: 10px; font-size: 0.68rem; color: #93c5fd;
    }
    .ml-case-btns { display: flex; gap: 6px; flex-wrap: wrap; }
    .ml-btn {
      padding: 6px 14px; border: 1px solid #1e3352; background: rgba(22,42,70,0.4);
      color: #94a3b8; border-radius: 8px; font-size: 0.78rem; font-weight: 600; cursor: pointer;
      transition: all 0.15s;
    }
    .ml-btn:hover { border-color: #fbbf24; color: #fbbf24; }
    .ml-btn.selected.p1 { background: rgba(239,68,68,0.15); border-color: #ef4444; color: #ef4444; }
    .ml-btn.selected.p2 { background: rgba(245,158,11,0.15); border-color: #f59e0b; color: #f59e0b; }
    .ml-btn.selected.p3 { background: rgba(52,211,153,0.15); border-color: #34d399; color: #34d399; }

    .ml-actions { display: flex; gap: 10px; justify-content: space-between; margin-top: 16px; flex-wrap: wrap; }
    .ml-train-btn, .ml-reset-btn {
      padding: 12px 28px; background: linear-gradient(135deg,#f59e0b,#d97706);
      color: #1e3a5f; border: none; border-radius: 10px;
      font-weight: 800; font-size: 0.88rem; cursor: pointer;
      transition: all 0.2s; letter-spacing: 0.3px;
    }
    .ml-train-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .ml-train-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,0.35); }
    .ml-reset-btn { background: transparent; border: 1px solid rgba(96,165,250,0.4); color: #60a5fa; }
    .ml-reset-btn:hover { background: rgba(96,165,250,0.08); }

    .ml-loader {
      text-align: center; padding: 40px 20px; color: #94a3b8; font-size: 0.9rem;
    }
    .ml-loader .spinner {
      display: inline-block; width: 32px; height: 32px;
      border: 3px solid rgba(251,191,36,0.15); border-top-color: #fbbf24;
      border-radius: 50%; animation: spin 0.8s linear infinite;
      margin-bottom: 10px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .ml-score-card {
      background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
      border: 1px solid rgba(251,191,36,0.25); border-radius: 14px;
      padding: 24px; margin-bottom: 16px; text-align: center;
    }
    .ml-score-num {
      font-size: 2.6rem; font-weight: 800; color: #fbbf24; line-height: 1;
    }
    .ml-score-label {
      font-size: 0.72rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px;
    }
    .ml-score-sub { font-size: 0.84rem; color: #94a3b8; margin-top: 10px; }

    .ml-result-row {
      background: #162a46; border: 1px solid #1e3352; border-radius: 10px;
      padding: 12px 14px; margin-bottom: 8px;
      display: grid; grid-template-columns: 1fr auto auto; gap: 12px; align-items: center;
    }
    .ml-result-row.correct { border-left: 3px solid #34d399; }
    .ml-result-row.wrong { border-left: 3px solid #ef4444; }
    .ml-result-desc { font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; }
    .ml-result-pred {
      font-size: 0.7rem; padding: 3px 10px; border-radius: 10px; font-weight: 700;
      text-align: center; min-width: 64px;
    }
    .ml-result-pred.p1 { background: rgba(239,68,68,0.12); color: #ef4444; }
    .ml-result-pred.p2 { background: rgba(245,158,11,0.12); color: #f59e0b; }
    .ml-result-pred.p3 { background: rgba(52,211,153,0.12); color: #34d399; }
    .ml-result-icon { font-size: 1.1rem; }
    .ml-result-icon.correct { color: #34d399; }
    .ml-result-icon.wrong { color: #ef4444; }

    .ml-explain {
      background: #0d1727; border: 1px solid #1e3352; border-radius: 10px;
      padding: 14px 16px; margin-top: 12px; font-size: 0.76rem; color: #94a3b8; line-height: 1.55;
    }
    .ml-explain b { color: #fbbf24; }

    /* ===== GAMIFICATION BUTTON ===== */
    .gami-wrap { text-align: center; padding: 36px 24px 52px; }
    .gami-btn {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 18px 48px; font-size: 1.1rem; font-weight: 800; letter-spacing: 0.5px;
      background: linear-gradient(135deg, #f59e0b, #d97706); color: #1e3a5f;
      border-radius: 14px; text-decoration: none;
      box-shadow: 0 6px 24px rgba(245,158,11,0.35);
      transition: all 0.25s;
    }
    .gami-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(245,158,11,0.5); }
    .gami-sub { display: block; margin-top: 10px; color: #64748b; font-size: 0.78rem; }

    /* ===== FOOTER ===== */
    footer { background: #0a1524; padding: 28px 24px; border-top: 1px solid #1e3352; }
    .ft-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 22px; }
    .ft-col h4 { font-size: 0.85rem; color: #fbbf24; margin-bottom: 10px; }
    .ft-col p, .ft-col a { font-size: 0.78rem; color: #64748b; display: block; line-height: 1.7; }
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
      display: none; position: fixed; bottom: 90px; right: 24px; width: 340px; max-width: calc(100vw - 48px);
      height: 440px; background: #162a46; border: 1px solid #1e3352; border-radius: 14px;
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

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .tiles { grid-template-columns: repeat(2, 1fr); }
      .ft-inner { grid-template-columns: 1fr; }
      .ml-result-row { grid-template-columns: 1fr auto; }
      .ml-result-row .ml-result-icon { grid-column: 2; }
    }
    @media (max-width: 700px) {
      nav { display: none; }
      .search-box { display: none; }
      .mob-toggle { display: block; }
      .hero h2 { font-size: 1.5rem; }
      .stats { gap: 20px; }
      .stat-num { font-size: 1.15rem; }
      .tab-btn { min-width: 90px; font-size: 0.76rem; padding: 8px 10px; }
      .ml-stepper { flex-wrap: wrap; }
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
      <div class="nav-link" onclick="showTab('services')">Services</div>
      <div class="nav-link" onclick="showTab('community')">Community</div>
      <div class="nav-link" onclick="showTab('career')">Career</div>
      <div class="nav-link" onclick="showTab('ml')">ML Lab</div>
      <div class="nav-sep"></div>
      <a href="{{ site.baseurl }}/sheriff/info" class="nav-link" style="text-decoration:none">Full Info</a>
      <div class="nav-link" onclick="scrollToSection('#gamification')">Gamification</div>
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
  <div class="nav-link" onclick="scrollToSection('#gamification');document.getElementById('mobMenu').classList.remove('open')">Gamification</div>
</div>

<!-- HERO -->
<section class="hero" id="top">
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

<!-- TABS -->
<div class="tabs-wrap" id="tabsTop">
  <div class="tabs-bar" role="tablist">
    <button class="tab-btn active" data-tab="services" onclick="showTab('services')"><span class="tab-icon">&#128737;</span>Services</button>
    <button class="tab-btn" data-tab="community" onclick="showTab('community')"><span class="tab-icon">&#127963;</span>Community</button>
    <button class="tab-btn" data-tab="career" onclick="showTab('career')"><span class="tab-icon">&#127937;</span>Career</button>
    <button class="tab-btn" data-tab="ml" onclick="showTab('ml')"><span class="tab-icon">&#129504;</span>ML Lab</button>
  </div>
</div>

<!-- TAB: SERVICES -->
<div class="tab-panel active" id="tab-services">
  <div class="panel-head">
    <h2>Member Services</h2>
    <p>Tap a tile to open details inline</p>
  </div>
  <div class="tiles">
    <div class="tile" onclick="openDetail('benefits')"><div class="tile-icon">&#128179;</div><div class="tile-title">Benefits</div><div class="tile-desc">Health, dental, vision, life</div></div>
    <div class="tile" onclick="openDetail('legal')"><div class="tile-icon">&#128272;</div><div class="tile-title">Legal Defense</div><div class="tile-desc">24/7 representation fund</div></div>
    <div class="tile" onclick="openDetail('wellness')"><div class="tile-icon">&#127891;</div><div class="tile-title">Wellness</div><div class="tile-desc">Peer support &amp; mental health</div></div>
    <div class="tile" onclick="openDetail('forms')"><div class="tile-icon">&#128196;</div><div class="tile-title">Forms &amp; Docs</div><div class="tile-desc">Contracts &amp; downloads</div></div>
  </div>

  <!-- Detail panels -->
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
    <p>You are the data scientist. Label 8 real-world dispatch scenarios with a priority (P1 = emergency, P2 = urgent, P3 = routine). The browser trains a <b>k-Nearest-Neighbors</b> classifier on your labels, then tests it on 5 unseen calls. Your score is how many the AI gets right against the sheriff's expert-labeled ground truth.</p>
  </div>

  <div class="ml-stepper">
    <div class="ml-step-dot active" id="mlDot1">1. Label Training</div>
    <div class="ml-step-dot" id="mlDot2">2. Train &amp; Test</div>
    <div class="ml-step-dot" id="mlDot3">3. Results</div>
  </div>

  <!-- STAGE 1: Training -->
  <div class="ml-stage active" id="mlStage1">
    <div class="ml-progress-bar"><div class="ml-progress-fill" id="mlProg"></div></div>
    <div id="mlCases"></div>
    <div class="ml-actions">
      <button class="ml-reset-btn" onclick="mlAutoLabel()">&#9889; Use Suggested Labels</button>
      <button class="ml-train-btn" id="mlTrainBtn" onclick="mlTrain()" disabled>Train Model &rarr;</button>
    </div>
  </div>

  <!-- STAGE 2: Training visual -->
  <div class="ml-stage" id="mlStage2">
    <div class="ml-loader">
      <div class="spinner"></div>
      <div id="mlLoaderText">Encoding features &amp; training KNN (k=3)&hellip;</div>
    </div>
  </div>

  <!-- STAGE 3: Results -->
  <div class="ml-stage" id="mlStage3">
    <div class="ml-score-card">
      <div class="ml-score-num" id="mlScoreNum">0/5</div>
      <div class="ml-score-label">Model Accuracy</div>
      <div class="ml-score-sub" id="mlScoreSub">The AI matched your dispatch desk on this many test calls.</div>
    </div>
    <h3 style="color:#fbbf24;font-size:0.92rem;margin:16px 0 8px">Test Call Predictions</h3>
    <div id="mlResults"></div>
    <div class="ml-explain" id="mlExplain"></div>
    <div class="ml-actions">
      <button class="ml-reset-btn" onclick="mlReset()">&#8635; Play Again</button>
      <button class="ml-train-btn" onclick="mlReset()">New Dataset</button>
    </div>
  </div>
</div>

<!-- GAMIFICATION -->
<div class="gami-wrap" id="gamification">
  <a href="{{ site.baseurl }}/games" class="gami-btn">&#127918; Gamification &rarr;</a>
  <span class="gami-sub">Networking challenge zone &mdash; Net Patrol, Pop Quiz, and MTU Lab</span>
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
    <div class="ft-col"><h4>Tabs</h4>
      <a href="javascript:void(0)" onclick="showTab('services')">Services</a>
      <a href="javascript:void(0)" onclick="showTab('community')">Community</a>
      <a href="javascript:void(0)" onclick="showTab('career')">Career</a>
      <a href="javascript:void(0)" onclick="showTab('ml')">ML Lab</a>
    </div>
    <div class="ft-col"><h4>More</h4>
      <a href="{{ site.baseurl }}/sheriff/info">Full Info</a>
      <a href="{{ site.baseurl }}/games">Gamification</a>
      <a href="javascript:void(0)" onclick="showTab('services');openDetail('legal')">Legal Defense</a>
    </div>
  </div>
</footer>

<!-- CHATBOT -->
<button class="cb-trigger" onclick="document.getElementById('cbWin').classList.toggle('open')">&#128172;</button>
<div class="cb-win" id="cbWin">
  <div class="cb-head"><h3>DSA Assistant (AI)</h3><button class="cb-x" onclick="document.getElementById('cbWin').classList.remove('open')">&times;</button></div>
  <div class="cb-msgs" id="cbMsgs"><div class="cm bot"><div class="cb">Hi! Ask me anything about membership, benefits, legal defense, events, or the store.</div></div></div>
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
  const opts = { method, credentials: 'include', headers: { 'Content-Type': 'application/json' } };
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
  { label: 'Gamification',         target: '#gamification' },
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
  apiRequest('/api/sheriff/authenticate', 'POST', { uid: el('lUid').value, password: el('lPw').value })
    .then(d => { user = d.user; closeModal(); updateUI(); })
    .catch(err => showError('lErr', err.message));
}
function doSignup(e) {
  e.preventDefault();
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
   CHATBOT
   ================================================================ */
let chatHist = [];
function addChatMessage(text, sender) {
  const c = el('cbMsgs');
  const div = document.createElement('div');
  div.className = 'cm ' + sender;
  div.innerHTML = '<div class="cb">' + sanitizeHTML(text) + '</div>';
  c.appendChild(div); c.scrollTop = c.scrollHeight;
}
function sendChat() {
  const inp = el('cbIn'); const msg = inp.value.trim(); inp.value = '';
  if (!msg) return;
  addChatMessage(msg, 'user');
  chatHist.push({ role: 'user', content: msg });
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
      addChatMessage("Sorry, I can't connect right now. Call (858) 486-9009 or email info@dsasd.org.", 'bot');
    })
    .finally(() => { btn.disabled = false; btn.textContent = 'Send'; });
}

/* ================================================================
   INIT — auth session
   ================================================================ */
fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
  .then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(d => { user = d; updateUI(); })
  .catch(() => {});

/* ================================================================
   ML LAB — Call Priority KNN Trainer
   Feature vector: [timeOfDay, locationType, keywordSeverity, injuryReported]
     timeOfDay:        0 = day (6am-6pm), 1 = evening (6pm-11pm), 2 = night (11pm-6am)
     locationType:     0 = residential, 1 = commercial, 2 = public, 3 = highway
     keywordSeverity:  0 = low (noise, welfare), 1 = medium (theft, disturb), 2 = high (weapon, assault)
     injuryReported:   0 = no, 1 = yes
   Labels: 1 = P1 (emergency), 2 = P2 (urgent), 3 = P3 (routine)
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
    return `
      <div class="ml-case ${answered}">
        <div class="ml-case-num">Training Case ${i+1} of ${ML_TRAIN.length}</div>
        <div class="ml-case-desc">${c.desc}</div>
        <div class="ml-case-features">${tags}</div>
        <div class="ml-case-btns">${btns}</div>
      </div>
    `;
  }).join('');
  mlUpdateProgress();
}

function mlLabel(i, p) {
  mlLabels[i] = p;
  mlRenderCases();
}

function mlAutoLabel() {
  ML_TRAIN.forEach((c, i) => { mlLabels[i] = c.suggest; });
  mlRenderCases();
}

function mlUpdateProgress() {
  const done = mlLabels.filter(x => x !== null).length;
  const pct = (done / ML_TRAIN.length) * 100;
  el('mlProg').style.width = pct + '%';
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

/* KNN (k=3) Euclidean. Returns predicted label among train set. */
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
  for (const lbl of [1,2,3]) {
    if (votes[lbl] > bestCount) { bestCount = votes[lbl]; best = parseInt(lbl); }
  }
  return best;
}

function mlTrain() {
  mlStep(2);
  const loader = el('mlLoaderText');
  const steps = [
    'Encoding features &amp; training KNN (k=3)&hellip;',
    'Computing distances for 5 test calls&hellip;',
    'Tallying nearest-neighbor votes&hellip;',
    'Scoring against expert ground truth&hellip;',
  ];
  let i = 0;
  loader.innerHTML = steps[0];
  const iv = setInterval(() => {
    i++;
    if (i >= steps.length) { clearInterval(iv); mlEvaluate(); return; }
    loader.innerHTML = steps[i];
  }, 550);
}

function mlEvaluate() {
  const trainFeats = ML_TRAIN.map(c => c.feat);
  const trainLabels = mlLabels;
  const K = 3;

  const preds = ML_TEST.map(t => mlKnn(t.feat, trainFeats, trainLabels, K));
  const correct = preds.filter((p, i) => p === ML_TEST[i].truth).length;

  el('mlScoreNum').textContent = correct + '/' + ML_TEST.length;
  let sub;
  if (correct === ML_TEST.length) sub = 'Perfect. Your labels trained a model that matches the dispatch desk exactly.';
  else if (correct >= 3) sub = 'Solid. The model generalized well from your training labels.';
  else sub = 'Underfit. Try labeling training cases more consistently with severity and injury.';
  el('mlScoreSub').textContent = sub;

  el('mlResults').innerHTML = ML_TEST.map((t, i) => {
    const pred = preds[i];
    const ok = pred === t.truth;
    return `
      <div class="ml-result-row ${ok ? 'correct' : 'wrong'}">
        <div class="ml-result-desc">${t.desc}<br><span style="color:#64748b;font-size:0.72rem">Expert: ${PRIO_TEXT[t.truth]} &nbsp;&middot;&nbsp; Model: ${PRIO_TEXT[pred]}</span></div>
        <div class="ml-result-pred p${pred}">${PRIO_SHORT[pred]}</div>
        <div class="ml-result-icon ${ok ? 'correct' : 'wrong'}">${ok ? '&#10003;' : '&#10007;'}</div>
      </div>
    `;
  }).join('');

  const labelCounts = { 1:0, 2:0, 3:0 };
  mlLabels.forEach(l => { labelCounts[l]++; });
  el('mlExplain').innerHTML = `
    <b>How KNN decided:</b> for each test call, the model found the 3 closest training cases by feature distance
    (time-of-day, location, keyword severity, injury) and took a majority vote of their labels.<br>
    <b>Your training distribution:</b> P1 = ${labelCounts[1]}, P2 = ${labelCounts[2]}, P3 = ${labelCounts[3]}.
    Balanced classes usually produce better KNN accuracy.
  `;

  mlStep(3);
}

function mlReset() {
  mlLabels = new Array(ML_TRAIN.length).fill(null);
  mlRenderCases();
  mlStep(1);
}

mlRenderCases();
</script>
</body>
</html>
