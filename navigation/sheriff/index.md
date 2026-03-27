---
layout: none
title: DSA Portal
permalink: /sheriff/
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
    .logo-badge { width: 38px; height: 38px; background: linear-gradient(135deg,#fbbf24,#d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.8rem; color: #1e3a5f; }
    .logo-text { font-size: 0.95rem; font-weight: 700; color: #fff; }
    .logo-sub { font-size: 0.62rem; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; }

    nav { display: flex; gap: 2px; align-items: center; }
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

    .back-link {
      position: fixed; bottom: 20px; left: 20px; padding: 6px 14px;
      background: rgba(96,165,250,0.12); border: 1px solid rgba(96,165,250,0.3); border-radius: 8px;
      color: #60a5fa; font-size: 0.75rem; z-index: 999; transition: all 0.2s;
    }
    .back-link:hover { background: #3b82f6; color: #fff; }

    /* ===== HERO ===== */
    .hero {
      padding: 100px 24px 80px; text-align: center;
      background: linear-gradient(170deg, rgba(15,40,71,0.92) 0%, rgba(22,42,70,0.94) 40%, rgba(11,26,46,0.96) 100%);
      position: relative; overflow: hidden;
    }
    .hero::before {
      content: ''; position: absolute; inset: 0;
      background: url('{{ site.baseurl }}/images/dsa/store-uniforms.jpg') center/cover no-repeat;
      opacity: 0.12; z-index: 0;
    }
    .hero::after {
      content: ''; position: absolute; top: 50%; left: 50%; width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%);
      transform: translate(-50%,-50%); pointer-events: none; z-index: 0;
    }
    .hero-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
    .hero-logo { width: 110px; height: auto; margin-bottom: 20px; filter: drop-shadow(0 4px 16px rgba(0,0,0,0.5)); }
    .hero h2 { font-size: 2.6rem; font-weight: 800; background: linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 14px; }
    .hero p { font-size: 1.05rem; color: #7f8ea3; margin-bottom: 28px; }

    /* Image cards */
    .img-card { border-radius: 12px; overflow: hidden; }
    .img-card img { width: 100%; height: 180px; object-fit: cover; display: block; }
    .news-card .img-card img { height: 160px; }
    .about-card .img-card { margin-bottom: 14px; }
    .about-card .img-card img { height: 170px; }
    .store-hero { border-radius: 14px; overflow: hidden; margin-bottom: 24px; }
    .store-hero img { width: 100%; height: 240px; object-fit: cover; display: block; }
    .hero-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .hero-cta .btn { padding: 12px 28px; font-size: 0.9rem; border-radius: 10px; }
    .stats { display: flex; justify-content: center; gap: 48px; margin-top: 50px; flex-wrap: wrap; }
    .stat-num { font-size: 2rem; font-weight: 800; color: #fbbf24; }
    .stat-label { font-size: 0.7rem; color: #475569; text-transform: uppercase; letter-spacing: 1px; }

    /* ===== SECTIONS ===== */
    .section { max-width: 1100px; margin: 0 auto; padding: 60px 24px; }
    .sec-head { text-align: center; margin-bottom: 36px; }
    .sec-head h2 { font-size: 1.7rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
    .sec-head p { color: #475569; font-size: 0.9rem; }

    /* Tiles */
    .tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .tile {
      background: rgba(22,42,70,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px;
      padding: 20px; cursor: pointer; transition: all 0.25s; position: relative;
    }
    .tile:hover { border-color: #fbbf24; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
    .tile-icon { font-size: 1.6rem; margin-bottom: 8px; }
    .tile-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
    .tile-desc { font-size: 0.76rem; color: #64748b; line-height: 1.5; }

    /* Expandable detail panel (opens inline, no page redirect) */
    .detail-panel {
      display: none; max-width: 1100px; margin: -20px auto 0; padding: 0 24px 40px;
      animation: panelIn 0.3s ease;
    }
    .detail-panel.open { display: block; }
    @keyframes panelIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
    .dp-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 14px; padding: 32px;
      position: relative;
    }
    .dp-close { position: absolute; top: 14px; right: 18px; background: none; border: none; color: #475569; font-size: 1.4rem; cursor: pointer; }
    .dp-close:hover { color: #ef4444; }
    .dp-card h3 { font-size: 1.3rem; color: #fbbf24; margin-bottom: 16px; }
    .dp-card p, .dp-card li { font-size: 0.88rem; color: #94a3b8; line-height: 1.7; }
    .dp-card ul { padding-left: 20px; margin-top: 10px; }
    .dp-card li { margin-bottom: 6px; }
    .dp-card .dp-contact { margin-top: 16px; padding: 14px; background: rgba(251,191,36,0.05); border-radius: 8px; font-size: 0.82rem; color: #cbd5e1; }

    /* News */
    .news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .news-card { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 22px; transition: border-color 0.2s; }
    .news-card:hover { border-color: #3b82f6; }
    .news-tag { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
    .t-ann { background: rgba(251,191,36,0.12); color: #fbbf24; }
    .t-evt { background: rgba(96,165,250,0.12); color: #60a5fa; }
    .t-ben { background: rgba(52,211,153,0.12); color: #34d399; }
    .news-card h3 { font-size: 1rem; color: #fff; margin-bottom: 6px; }
    .news-card p { font-size: 0.8rem; color: #7f8ea3; }
    .news-date { font-size: 0.7rem; color: #3b4d6b; margin-top: 8px; }

    /* Events */
    .ev-list { display: flex; flex-direction: column; gap: 10px; }
    .ev {
      display: flex; align-items: center; gap: 16px;
      background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px 18px; transition: border-color 0.2s;
    }
    .ev:hover { border-color: #60a5fa; }
    .ev-date { min-width: 50px; text-align: center; background: rgba(96,165,250,0.08); border-radius: 8px; padding: 6px; }
    .ev-date .m { font-size: 0.6rem; text-transform: uppercase; color: #60a5fa; letter-spacing: 1px; }
    .ev-date .d { font-size: 1.3rem; font-weight: 800; color: #fff; }
    .ev-info h4 { font-size: 0.88rem; color: #fff; }
    .ev-info p { font-size: 0.75rem; color: #475569; }
    .ev-rsvp {
      margin-left: auto; padding: 6px 14px; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3);
      border-radius: 6px; color: #60a5fa; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
    }
    .ev-rsvp:hover { background: #3b82f6; color: #fff; border-color: #3b82f6; }
    .ev-rsvp.done { background: rgba(52,211,153,0.1); border-color: #34d399; color: #34d399; pointer-events: none; }

    .ev-cal {
      background: #162a46; border: 1px solid #1e3352; border-radius: 14px; padding: 18px;
    }
    .ev-cal-header {
      display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
      padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px solid #1e3352;
    }
    .ev-cal-title { display: flex; flex-direction: column; gap: 4px; }
    .ev-cal-month { font-size: 1.05rem; font-weight: 700; color: #fff; }
    .ev-cal-sub { font-size: 0.72rem; color: #64748b; }
    .ev-cal-controls { display: flex; gap: 8px; align-items: center; }
    .ev-cal-btn {
      background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.3); color: #60a5fa;
      border-radius: 8px; padding: 6px 10px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s;
    }
    .ev-cal-btn:hover { background: #3b82f6; color: #fff; border-color: #3b82f6; }
    .ev-cal-weekdays {
      display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-bottom: 8px;
      font-size: 0.62rem; text-transform: uppercase; letter-spacing: 1px; color: #475569;
    }
    .ev-cal-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; }
    .ev-day {
      background: rgba(11,26,46,0.55); border: 1px solid #1e3352; border-radius: 10px;
      min-height: 70px; padding: 8px; text-align: left; cursor: pointer; position: relative;
      transition: border-color 0.2s, transform 0.2s;
    }
    .ev-day:hover { border-color: #60a5fa; transform: translateY(-2px); }
    .ev-day.is-out { opacity: 0.45; }
    .ev-day.is-today { border-color: #fbbf24; box-shadow: 0 0 0 1px rgba(251,191,36,0.2); }
    .ev-day.selected { border-color: #3b82f6; box-shadow: 0 0 0 1px rgba(59,130,246,0.25); }
    .ev-day .num { font-size: 0.8rem; color: #e2e8f0; font-weight: 600; }
    .ev-day.has-event .num { color: #fbbf24; }
    .ev-badge {
      position: absolute; bottom: 8px; right: 8px; background: rgba(96,165,250,0.18); color: #60a5fa;
      border: 1px solid rgba(96,165,250,0.3); font-size: 0.62rem; padding: 2px 6px; border-radius: 999px;
    }
    .ev-cal-detail {
      margin-top: 16px; padding-top: 16px; border-top: 1px solid #1e3352;
      display: grid; gap: 12px;
    }
    .ev-detail-head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
    .ev-detail-head h3 { font-size: 1rem; color: #fff; }
    .ev-detail-sub { font-size: 0.72rem; color: #64748b; }
    .ev-detail-list { display: grid; gap: 10px; }
    .ev-card {
      background: rgba(11,26,46,0.4); border: 1px solid #1e3352; border-radius: 12px; padding: 14px;
      display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
    }
    .ev-card-main { display: flex; align-items: center; gap: 14px; flex: 1; min-width: 200px; }
    .ev-card-info h4 { font-size: 0.9rem; color: #fff; margin-bottom: 4px; }
    .ev-card-info p { font-size: 0.75rem; color: #7f8ea3; }
    .ev-card-img {
      width: 48px; height: 48px; border-radius: 8px; object-fit: cover; flex-shrink: 0;
    }
    .ev-empty { font-size: 0.8rem; color: #64748b; background: rgba(11,26,46,0.4); border-radius: 10px; padding: 14px; }

    /* About */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .about-card { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 24px; }
    .about-card h3 { font-size: 1.05rem; color: #fbbf24; margin-bottom: 10px; }
    .about-card p { font-size: 0.84rem; color: #7f8ea3; }
    .about-card ul { padding-left: 18px; margin-top: 8px; }
    .about-card li { font-size: 0.82rem; color: #94a3b8; margin-bottom: 4px; }

    /* FAQ */
    .faq-wrap { max-width: 800px; margin: 0 auto; }
    .faq-bar { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; align-items: center; }
    .faq-bar input { flex: 1; min-width: 200px; padding: 10px 16px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px; color: #e2e8f0; font-size: 0.88rem; outline: none; }
    .faq-bar input:focus { border-color: #fbbf24; }
    .faq-tag { padding: 5px 12px; border-radius: 16px; font-size: 0.72rem; font-weight: 600; background: rgba(255,255,255,0.04); border: 1px solid #1e3352; color: #64748b; cursor: pointer; transition: all 0.15s; }
    .faq-tag.on, .faq-tag:hover { background: rgba(251,191,36,0.1); border-color: #fbbf24; color: #fbbf24; }
    .fq { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; margin-bottom: 8px; overflow: hidden; }
    .fq-q { padding: 14px 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 0.9rem; color: #e2e8f0; }
    .fq-q .t { color: #fbbf24; transition: transform 0.25s; font-size: 1.1rem; }
    .fq-q.open .t { transform: rotate(45deg); }
    .fq-a { display: none; padding: 0 18px 14px; font-size: 0.84rem; color: #7f8ea3; line-height: 1.7; }
    .fq-a.open { display: block; }

    /* Store */
    .store-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .store-item {
      background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 20px; text-align: center; transition: all 0.2s;
    }
    .store-item:hover { border-color: #fbbf24; transform: translateY(-2px); }
    .store-item .si-icon { font-size: 2rem; margin-bottom: 8px; }
    .store-item h4 { font-size: 0.88rem; color: #fff; margin-bottom: 4px; }
    .store-item p { font-size: 0.72rem; color: #475569; }
    .store-item .price { font-size: 0.9rem; font-weight: 700; color: #fbbf24; margin-top: 8px; }

    /* Contact */
    .contact-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
    .c-card { background: #162a46; border: 1px solid #1e3352; border-radius: 12px; padding: 24px; text-align: center; }
    .c-card .c-icon { font-size: 1.6rem; margin-bottom: 8px; }
    .c-card h4 { font-size: 0.9rem; color: #fff; margin-bottom: 4px; }
    .c-card p { font-size: 0.82rem; color: #7f8ea3; }
    .c-card a { color: #fbbf24; }

    /* Admin */
    .admin-section { display: none; }
    .admin-section.open { display: block; }
    .a-table { width: 100%; border-collapse: collapse; background: #162a46; border-radius: 12px; overflow: hidden; }
    .a-table th { background: #0f2040; padding: 12px 16px; text-align: left; font-size: 0.72rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px; }
    .a-table td { padding: 10px 16px; border-bottom: 1px solid #1e3352; font-size: 0.82rem; color: #cbd5e1; }
    .a-table tr:hover td { background: rgba(96,165,250,0.04); }
    .badge-s { padding: 2px 8px; border-radius: 10px; font-size: 0.68rem; font-weight: 600; }
    .badge-active { background: rgba(52,211,153,0.12); color: #34d399; }

    /* Footer */
    footer { background: #091425; border-top: 1px solid #1e3352; padding: 36px 24px; margin-top: 40px; }
    .ft-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 32px; }
    .ft-col h4 { color: #fbbf24; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
    .ft-col p, .ft-col a { font-size: 0.8rem; color: #3b4d6b; display: block; margin-bottom: 6px; }
    .ft-col a:hover { color: #fbbf24; }
    .ft-copy { text-align: center; margin-top: 24px; font-size: 0.72rem; color: #1e3352; }

    /* Chatbot */
    .cb-trigger {
      position: fixed; bottom: 22px; right: 22px; width: 56px; height: 56px;
      background: linear-gradient(135deg,#f59e0b,#d97706); border-radius: 50%; border: none;
      display: flex; align-items: center; justify-content: center; font-size: 1.4rem;
      cursor: pointer; box-shadow: 0 6px 24px rgba(245,158,11,0.35); z-index: 1100; transition: transform 0.2s;
    }
    .cb-trigger:hover { transform: scale(1.08); }
    .cb-win {
      display: none; position: fixed; bottom: 90px; right: 22px; width: 370px; max-height: 480px;
      background: #162a46; border: 1px solid #2a3a5c; border-radius: 14px;
      z-index: 1100; box-shadow: 0 16px 50px rgba(0,0,0,0.5); flex-direction: column; overflow: hidden;
    }
    .cb-win.open { display: flex; }
    .cb-head { background: #0f2040; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e3352; }
    .cb-head h3 { color: #fbbf24; font-size: 0.92rem; }
    .cb-x { background: none; border: none; color: #475569; font-size: 1.3rem; cursor: pointer; }
    .cb-msgs { flex: 1; overflow-y: auto; padding: 14px; max-height: 320px; }
    .cm { margin-bottom: 10px; display: flex; }
    .cm.bot { justify-content: flex-start; }
    .cm.user { justify-content: flex-end; }
    .cb { max-width: 82%; padding: 9px 13px; border-radius: 10px; font-size: 0.82rem; line-height: 1.5; }
    .cm.bot .cb { background: #0f2040; color: #cbd5e1; border-bottom-left-radius: 3px; }
    .cm.user .cb { background: #3b82f6; color: #fff; border-bottom-right-radius: 3px; }
    .cb-input { display: flex; gap: 8px; padding: 10px 14px; border-top: 1px solid #1e3352; background: #0f2040; }
    .cb-input input { flex: 1; padding: 9px 12px; background: rgba(255,255,255,0.04); border: 1px solid #1e3352; border-radius: 8px; color: #e2e8f0; font-size: 0.82rem; outline: none; }
    .cb-input button { padding: 9px 14px; background: #f59e0b; border: none; border-radius: 8px; color: #1e3a5f; font-weight: 700; font-size: 0.82rem; cursor: pointer; }
    .cb-input button:disabled { opacity: 0.4; cursor: not-allowed; }
    .typing-dots { display: flex; gap: 4px; padding: 10px 14px !important; align-items: center; }
    .typing-dots span { width: 7px; height: 7px; background: #475569; border-radius: 50%; animation: tdot 1.4s infinite ease-in-out both; }
    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes tdot { 0%,80%,100% { transform: scale(0.5); opacity: 0.3; } 40% { transform: scale(1); opacity: 1; } }

    /* Modal */
    .modal-bg { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 2000; align-items: center; justify-content: center; }
    .modal-bg.open { display: flex; }
    .modal { background: #162a46; border: 1px solid #2a3a5c; border-radius: 16px; padding: 36px; width: 100%; max-width: 420px; position: relative; }
    .modal-x { position: absolute; top: 14px; right: 16px; background: none; border: none; color: #475569; font-size: 1.4rem; cursor: pointer; }
    .modal h2 { font-size: 1.4rem; color: #fbbf24; margin-bottom: 4px; }
    .modal .sub { color: #475569; font-size: 0.82rem; margin-bottom: 20px; }
    .mtabs { display: flex; margin-bottom: 20px; }
    .mtab { flex: 1; padding: 8px; text-align: center; font-weight: 600; font-size: 0.85rem; color: #475569; border-bottom: 2px solid transparent; cursor: pointer; }
    .mtab.on { color: #fbbf24; border-bottom-color: #fbbf24; }
    .fg { margin-bottom: 14px; }
    .fg label { display: block; font-size: 0.72rem; color: #64748b; margin-bottom: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .fg input, .fg select {
      width: 100%; padding: 10px 12px; background: rgba(255,255,255,0.04); border: 1px solid #1e3352;
      border-radius: 8px; color: #e2e8f0; font-size: 0.85rem; outline: none;
    }
    .fg input:focus, .fg select:focus { border-color: #fbbf24; }
    .fg select option { background: #162a46; }
    .modal-submit { width: 100%; padding: 12px; background: linear-gradient(135deg,#f59e0b,#d97706); border: none; border-radius: 10px; color: #1e3a5f; font-size: 0.95rem; font-weight: 700; cursor: pointer; margin-top: 6px; }
    .modal-err { color: #ef4444; font-size: 0.8rem; margin-top: 8px; display: none; }

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

    /* Mobile */
    .mob-toggle { display: none; background: none; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; }
    @media (max-width: 900px) {
      nav { display: none; }
      .mob-toggle { display: block; }
      .game-feature-grid { grid-template-columns: 1fr 1fr; }
      .slack-map { grid-template-columns: 1fr; }
      .layer-guide { grid-template-columns: 1fr; }
      .tiles { grid-template-columns: repeat(2, 1fr); }
      .news-grid { grid-template-columns: 1fr; }
      .about-grid { grid-template-columns: 1fr; }
      .store-grid { grid-template-columns: repeat(2, 1fr); }
      .contact-row { grid-template-columns: 1fr; }
      .ft-inner { grid-template-columns: 1fr; }
      .hero h2 { font-size: 1.8rem; }
      .stats { gap: 20px; }
      .search-box input { width: 140px; }
      .cb-win { width: calc(100% - 40px); right: 20px; }
    }
    @media (max-width: 500px) {
      .game-feature-grid { grid-template-columns: 1fr; }
      .tiles { grid-template-columns: 1fr; }
      .store-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<a href="{{ site.baseurl }}/" class="back-link">&#8592; Main Site</a>

<!-- HEADER -->
<header class="header">
  <div class="header-inner">
    <div class="logo" onclick="scrollTo('#top')">
      <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Logo" style="width:42px;height:auto;">
      <div><div class="logo-text">Deputy Sheriffs' Assoc.</div><div class="logo-sub">San Diego County</div></div>
    </div>
    <nav>
      <div class="nav-link" onclick="scrollTo('#dashboard')">Resources</div>
      <div class="nav-link" onclick="scrollTo('#news')">News</div>
      <div class="nav-link" onclick="scrollTo('#events')">Events</div>
      <div class="nav-link" onclick="scrollTo('#about')">About</div>
      <div class="nav-link" onclick="scrollTo('#store')">Store</div>
      <div class="nav-link" onclick="scrollTo('#faq')">FAQ</div>
      <div class="nav-link" onclick="scrollTo('#contact')">Contact</div>
      <div class="nav-link" onclick="scrollTo('#games')">&#127918; Games</div>
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
      <button class="mob-toggle" onclick="this.nextElementSibling?.classList.toggle('open')">&#9776;</button>
    </div>
  </div>
</header>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-inner">
    <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Badge" class="hero-logo">
    <h2>The Strength Behind the Badge</h2>
    <p>Representing the dedicated officers of the San Diego County Sheriff's Department since 1955. Benefits, legal defense, events, and advocacy &mdash; all in one place.</p>
    <div class="hero-cta">
      <button class="btn btn-gold" onclick="scrollTo('#dashboard')">Explore Resources</button>
      <button class="btn btn-outline" onclick="scrollTo('#about')">Learn About DSA</button>
    </div>
    <div class="stats">
      <div><div class="stat-num">4,229</div><div class="stat-label">Active Members</div></div>
      <div><div class="stat-num">70+</div><div class="stat-label">Years of Service</div></div>
      <div><div class="stat-num">12</div><div class="stat-label">Stations</div></div>
      <div><div class="stat-num">24/7</div><div class="stat-label">Support</div></div>
    </div>
  </div>
</section>

<!-- DASHBOARD -->
<div class="section" id="dashboard">
  <div class="sec-head"><h2>Member Resources</h2><p>Click any tile to see details instantly &mdash; no extra pages</p></div>
  <div class="tiles">
    <div class="tile" onclick="openDetail('benefits')"><div class="tile-icon">&#128179;</div><div class="tile-title">Benefits</div><div class="tile-desc">Health, dental, vision & life insurance</div></div>
    <div class="tile" onclick="openDetail('legal')"><div class="tile-icon">&#128272;</div><div class="tile-title">Legal Defense</div><div class="tile-desc">Representation & defense fund</div></div>
    <div class="tile" onclick="openDetail('wellness')"><div class="tile-icon">&#127891;</div><div class="tile-title">Wellness</div><div class="tile-desc">Peer support & mental health</div></div>
    <div class="tile" onclick="openDetail('forms')"><div class="tile-icon">&#128196;</div><div class="tile-title">Forms & Docs</div><div class="tile-desc">Contracts, forms & downloads</div></div>
    <div class="tile" onclick="scrollTo('#events')"><div class="tile-icon">&#128197;</div><div class="tile-title">Events</div><div class="tile-desc">Upcoming meetings & social events</div></div>
    <div class="tile" onclick="scrollTo('#store')"><div class="tile-icon">&#128176;</div><div class="tile-title">DSA Store</div><div class="tile-desc">Official merch & apparel</div></div>
    <div class="tile" onclick="openDetail('newsletters')"><div class="tile-icon">&#128240;</div><div class="tile-title">Newsletters</div><div class="tile-desc">Monthly publications & minutes</div></div>
    <div class="tile" onclick="openDetail('pac')"><div class="tile-icon">&#127937;</div><div class="tile-title">Political Action</div><div class="tile-desc">PAC updates & endorsements</div></div>
  </div>
</div>

<!-- Detail panels (expand inline below tiles — zero clicks to a new page) -->
<div class="detail-panel" id="dp-benefits"><div class="dp-card">
  <button class="dp-close" onclick="closeDetail('benefits')">&times;</button>
  <h3>Benefits & Insurance</h3>
  <p>DSA members and their families have access to comprehensive coverage negotiated at competitive group rates:</p>
  <ul>
    <li><strong>Medical:</strong> Multiple plan options through leading providers with low copays and broad network access across San Diego County.</li>
    <li><strong>Dental:</strong> Delta Dental PPO and Premier plans. Preventive care covered at 100%; major services at 50-80%.</li>
    <li><strong>Vision:</strong> VSP coverage for annual exams, frames, lenses, and contacts with low out-of-pocket costs.</li>
    <li><strong>Life & Disability:</strong> Group term life insurance and short/long-term disability coverage included with membership.</li>
    <li><strong>Supplemental:</strong> Optional additional life insurance, accident insurance, and critical illness policies available.</li>
  </ul>
  <p>Open enrollment is announced annually. Coverage changes can also be made during qualifying life events.</p>
  <div class="dp-contact">Questions? Call (858) 486-9009 or email benefits@dsasd.org</div>
</div></div>

<div class="detail-panel" id="dp-legal"><div class="dp-card">
  <button class="dp-close" onclick="closeDetail('legal')">&times;</button>
  <h3>Legal Defense Fund</h3>
  <p>The DSA Legal Defense Fund provides critical support when you need it most:</p>
  <ul>
    <li><strong>Administrative Investigations:</strong> Full representation during IA interviews and Skelly hearings.</li>
    <li><strong>Critical Incidents:</strong> Immediate attorney response 24/7 for officer-involved shootings, use-of-force incidents, and in-custody deaths.</li>
    <li><strong>Civil Litigation:</strong> Defense against lawsuits arising from the performance of your duties.</li>
    <li><strong>Weingarten Rights:</strong> Your right to union representation at any investigatory interview that could lead to discipline.</li>
    <li><strong>Coverage:</strong> Attorney fees, expert witnesses, court costs, and related expenses.</li>
  </ul>
  <div class="dp-contact">24/7 Legal Hotline: (858) 486-9009 &mdash; Call immediately if involved in a critical incident</div>
</div></div>

<div class="detail-panel" id="dp-wellness"><div class="dp-card">
  <button class="dp-close" onclick="closeDetail('wellness')">&times;</button>
  <h3>Wellness & Peer Support</h3>
  <p>Your well-being matters. All services are <strong>completely confidential</strong>:</p>
  <ul>
    <li><strong>Peer Support Team:</strong> Trained deputy counselors available for confidential conversations.</li>
    <li><strong>CISM Team:</strong> Critical Incident Stress Management debriefings after traumatic events.</li>
    <li><strong>Mental Health Referrals:</strong> Licensed therapists experienced with law enforcement issues.</li>
    <li><strong>Fitness Partnerships:</strong> Gym discounts and fitness facility access across San Diego County.</li>
    <li><strong>Wellness Workshops:</strong> Regular stress management, sleep health, and resilience seminars.</li>
    <li><strong>Family Support:</strong> Resources for spouses and families of law enforcement personnel.</li>
    <li><strong>Substance Abuse:</strong> Confidential counseling and treatment referrals.</li>
  </ul>
  <div class="dp-contact">Wellness Coordinator: (858) 486-9009 ext. 3 &mdash; All inquiries are 100% confidential</div>
</div></div>

<div class="detail-panel" id="dp-forms"><div class="dp-card">
  <button class="dp-close" onclick="closeDetail('forms')">&times;</button>
  <h3>Forms & Documents</h3>
  <p>Access important DSA documents and forms:</p>
  <ul>
    <li><strong>Membership Enrollment Form</strong> &mdash; New member registration and payroll deduction authorization</li>
    <li><strong>Beneficiary Designation Form</strong> &mdash; Life insurance beneficiary updates</li>
    <li><strong>Grievance Filing Form</strong> &mdash; Formal grievance submission per the MOU</li>
    <li><strong>Current MOU (Memorandum of Understanding)</strong> &mdash; Full contract with the County of San Diego</li>
    <li><strong>Board Meeting Minutes</strong> &mdash; Monthly meeting records and motions</li>
    <li><strong>Insurance Plan Summaries</strong> &mdash; Coverage details for medical, dental, and vision</li>
    <li><strong>Retirement Planning Guide</strong> &mdash; SDCERA pension information for deputies</li>
  </ul>
  <div class="dp-contact">Request forms: info@dsasd.org or visit DSA HQ at 13881 Danielson St, Poway</div>
</div></div>

<div class="detail-panel" id="dp-newsletters"><div class="dp-card">
  <button class="dp-close" onclick="closeDetail('newsletters')">&times;</button>
  <h3>Silver Star Newsletter & Publications</h3>
  <div style="margin-bottom:16px;border-radius:10px;overflow:hidden"><img src="{{ site.baseurl }}/images/dsa/silver-star-newsletter.jpg" alt="Silver Star Newsletter" style="width:100%;max-height:180px;object-fit:cover;display:block"></div>
  <p>The <strong>Silver Star</strong> is the official DSA publication, delivered bi-monthly to all members. Browse recent issues below:</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0">
    <div style="background:#0f2040;border-radius:8px;padding:14px;text-align:center;cursor:pointer" onclick="this.querySelector('.nl-peek').classList.toggle('open')">
      <div style="font-size:0.7rem;color:#60a5fa;text-transform:uppercase;letter-spacing:1px">Mar/Apr 2026</div>
      <div style="font-size:0.88rem;font-weight:700;color:#fff;margin:4px 0">Contract Update</div>
      <div style="font-size:0.72rem;color:#475569">New MOU highlights, pay scale changes, wellness program expansion</div>
      <div class="nl-peek" style="display:none;margin-top:8px;padding-top:8px;border-top:1px solid #1e3352;font-size:0.75rem;color:#94a3b8;text-align:left"><strong>Inside:</strong> President's Report, 2026 MOU Summary, Open Enrollment Reminder, Deputy of the Year Nominees, Golf Tournament Signup</div>
    </div>
    <div style="background:#0f2040;border-radius:8px;padding:14px;text-align:center;cursor:pointer" onclick="this.querySelector('.nl-peek').classList.toggle('open')">
      <div style="font-size:0.7rem;color:#60a5fa;text-transform:uppercase;letter-spacing:1px">Jan/Feb 2026</div>
      <div style="font-size:0.88rem;font-weight:700;color:#fff;margin:4px 0">Scholarship Issue</div>
      <div style="font-size:0.72rem;color:#475569">Memorial scholarships, board election results, retirement seminar</div>
      <div class="nl-peek" style="display:none;margin-top:8px;padding-top:8px;border-top:1px solid #1e3352;font-size:0.75rem;color:#94a3b8;text-align:left"><strong>Inside:</strong> 2026 Scholarship Applications, New Board Members, Legislative Update, Peer Support Spotlight, Holiday Recap</div>
    </div>
    <div style="background:#0f2040;border-radius:8px;padding:14px;text-align:center;cursor:pointer" onclick="this.querySelector('.nl-peek').classList.toggle('open')">
      <div style="font-size:0.7rem;color:#60a5fa;text-transform:uppercase;letter-spacing:1px">Nov/Dec 2025</div>
      <div style="font-size:0.88rem;font-weight:700;color:#fff;margin:4px 0">Year in Review</div>
      <div style="font-size:0.72rem;color:#475569">Annual report, holiday events, Shop with a Deputy recap</div>
      <div class="nl-peek" style="display:none;margin-top:8px;padding-top:8px;border-top:1px solid #1e3352;font-size:0.75rem;color:#94a3b8;text-align:left"><strong>Inside:</strong> 2025 Annual Report, Financial Summary, Christmas Party Photos, Children's Party, PAC Year-End Review</div>
    </div>
  </div>
  <p style="font-size:0.84rem;color:#94a3b8"><strong>Also published:</strong></p>
  <ul>
    <li><strong>Board Meeting Minutes:</strong> Official records from monthly Board of Directors meetings</li>
    <li><strong>Legislative Updates:</strong> Alerts on bills and policies affecting law enforcement in California</li>
    <li><strong>President's Reports:</strong> Monthly updates from DSA leadership</li>
  </ul>
  <div class="dp-contact">Subscribe to email updates: info@dsasd.org &mdash; Past issues available at DSA HQ or request via email</div>
</div></div>

<div class="detail-panel" id="dp-pac"><div class="dp-card">
  <button class="dp-close" onclick="closeDetail('pac')">&times;</button>
  <h3>Political Action Committee</h3>
  <p>The DSA PAC advocates for the interests of San Diego County deputies:</p>
  <ul>
    <li><strong>Candidate Endorsements:</strong> Research-based endorsements for local, state, and federal elections that support law enforcement.</li>
    <li><strong>Legislative Advocacy:</strong> Lobbying on bills affecting deputy working conditions, retirement, and safety.</li>
    <li><strong>Voter Guides:</strong> Published before each election with DSA-endorsed candidates and ballot measures.</li>
    <li><strong>PAC Contributions:</strong> Voluntary member contributions support political activities.</li>
  </ul>
  <div class="dp-contact">PAC inquiries: pac@dsasd.org</div>
</div></div>

<!-- NEWS -->
<div class="section" id="news">
  <div class="sec-head"><h2>Latest News</h2></div>
  <div class="news-grid">
    <div class="news-card"><div class="img-card"><img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="DSA Board Member"></div><span class="news-tag t-ann">Announcement</span><h3>2026 Contract Negotiations Update</h3><p>The DSA bargaining team has reached a tentative agreement with the county on wages, benefits, and working conditions for the next three years.</p><div class="news-date">March 15, 2026</div></div>
    <div class="news-card"><div class="img-card"><img src="{{ site.baseurl }}/images/dsa/golf-tournament-photo.png" alt="DSA Golf Tournament"></div><span class="news-tag t-evt">Event</span><h3>Annual DSA Family Picnic</h3><p>Join us at Poway Community Park on April 12th. Food, games, and fellowship for all DSA members and families.</p><div class="news-date">March 10, 2026</div></div>
    <div class="news-card"><div class="img-card"><img src="{{ site.baseurl }}/images/dsa/silver-star-newsletter.jpg" alt="Silver Star Newsletter"></div><span class="news-tag t-ben">Benefit</span><h3>New Dental Plan Options</h3><p>Expanded Delta Dental coverage now available. Open enrollment begins April 1st with improved major services rates.</p><div class="news-date">March 5, 2026</div></div>
  </div>
</div>

<!-- EVENTS -->
<div class="section" id="events">
  <div class="sec-head"><h2>Upcoming Events</h2></div>
  <div class="ev-cal">
    <div class="ev-cal-header">
      <div class="ev-cal-title">
        <div class="ev-cal-month" id="evCalMonth">April 2026</div>
        <div class="ev-cal-sub">Select a date to see details and RSVP</div>
      </div>
      <div class="ev-cal-controls">
        <button class="ev-cal-btn" id="evPrev" type="button">&#10094;</button>
        <button class="ev-cal-btn" id="evToday" type="button">Today</button>
        <button class="ev-cal-btn" id="evNext" type="button">&#10095;</button>
      </div>
    </div>
    <div class="ev-cal-weekdays">
      <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
    </div>
    <div class="ev-cal-days" id="evCalDays"></div>
    <div class="ev-cal-detail" id="evCalDetail">
      <div class="ev-detail-head">
        <h3 id="evCalDetailTitle">Select a date</h3>
        <div class="ev-detail-sub">All times local (PT)</div>
      </div>
      <div class="ev-detail-list" id="evCalList">
        <div class="ev-empty">Click a highlighted day to view event details.</div>
      </div>
    </div>
  </div>
</div>

<!-- ABOUT -->
<div class="section" id="about">
  <div class="sec-head"><h2>About the DSA</h2></div>
  <div class="about-grid">
    <div class="about-card">
      <div class="img-card"><img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Logo" style="height:170px;object-fit:contain;background:#e8ecf0;padding:20px"></div>
      <h3>Our Mission</h3>
      <p>The Deputy Sheriffs' Association of San Diego County is the labor union representing all sworn personnel of the San Diego County Sheriff's Department. Founded in 1955, we negotiate contracts, provide legal defense, support political action, and deliver member benefits and wellness programs for over 4,229 members.</p>
      <p style="margin-top:10px">As the exclusive collective bargaining unit, the DSA negotiates Memoranda of Understanding (MOUs) covering wages, benefits, working conditions, overtime, and retirement with the County of San Diego.</p>
    </div>
    <div class="about-card">
      <h3>Stations We Cover</h3>
      <ul>
        <li>San Diego Central</li><li>Vista</li><li>Encinitas</li><li>Fallbrook</li>
        <li>Imperial Beach</li><li>Lemon Grove</li><li>Pine Valley</li><li>Rancho San Diego</li>
        <li>San Marcos</li><li>Santee</li><li>4S Ranch</li><li>Court Services</li>
        <li>Detention Facilities (Vista, Central, East Mesa, George Bailey, Las Colinas)</li>
      </ul>
    </div>
    <div class="about-card">
      <div class="img-card"><img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="DSA Board Member"></div>
      <h3>Leadership</h3>
      <p>The DSA is governed by a Board of Directors elected by the membership. The Board meets monthly at DSA Headquarters in Poway to review operations, approve expenditures, and set policy direction.</p>
      <p style="margin-top:8px">Shop stewards are assigned to each station and facility to provide frontline union representation and ensure contract compliance.</p>
    </div>
    <div class="about-card">
      <div class="img-card"><img src="{{ site.baseurl }}/images/dsa/memorial-line-of-duty.png" alt="Line of Duty Memorial"></div>
      <h3>History</h3>
      <p>Since 1955, the DSA has grown from a small association of deputies to one of the largest law enforcement labor organizations in California. Key milestones include establishing the Legal Defense Fund, negotiating landmark contracts, and expanding wellness and peer support services.</p>
    </div>
  </div>
</div>

<!-- STORE -->
<div class="section" id="store">
  <div class="sec-head"><h2>DSA Store</h2><p>Official merchandise &mdash; member discounts applied automatically</p></div>
  <div class="store-hero"><img src="{{ site.baseurl }}/images/dsa/store-interior.jpg" alt="DSA Store Interior"></div>
  <div class="store-grid">
    <div class="store-item"><div class="si-icon">&#128085;</div><h4>Polo Shirt</h4><p>Embroidered DSA logo</p><div class="price">$35</div></div>
    <div class="store-item"><div class="si-icon">&#129506;</div><h4>Baseball Cap</h4><p>Adjustable, navy blue</p><div class="price">$22</div></div>
    <div class="store-item"><div class="si-icon">&#129689;</div><h4>Challenge Coin</h4><p>Collector's edition</p><div class="price">$15</div></div>
    <div class="store-item"><div class="si-icon">&#128188;</div><h4>Duffel Bag</h4><p>DSA branded, heavy duty</p><div class="price">$45</div></div>
    <div class="store-item"><div class="si-icon">&#9749;</div><h4>Travel Mug</h4><p>Stainless, 16oz</p><div class="price">$18</div></div>
    <div class="store-item"><div class="si-icon">&#128737;</div><h4>Lapel Pin</h4><p>Gold DSA shield</p><div class="price">$12</div></div>
    <div class="store-item"><div class="si-icon">&#127939;</div><h4>Workout Tee</h4><p>Moisture-wicking</p><div class="price">$28</div></div>
    <div class="store-item"><div class="si-icon">&#128218;</div><h4>Patch Set</h4><p>Velcro-backed, set of 3</p><div class="price">$20</div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:20px">
    <div style="border-radius:10px;overflow:hidden"><img src="{{ site.baseurl }}/images/dsa/store-relaunch-flyer.png" alt="DSA Store Relaunch" style="width:100%;height:180px;object-fit:cover;display:block"></div>
    <div style="border-radius:10px;overflow:hidden"><img src="{{ site.baseurl }}/images/dsa/store-uniforms.jpg" alt="DSA Uniforms" style="width:100%;height:180px;object-fit:cover;display:block"></div>
  </div>
  <p style="text-align:center;margin-top:16px;color:#475569;font-size:0.8rem">Also available at DSA HQ, 13881 Danielson St, Poway &mdash; Online orders ship within 5-7 business days</p>
</div>

<!-- GAMIFICATION -->
<div class="section" id="games">
  <div class="sec-head">
    <h2>&#127918; Net Patrol &mdash; CB Unit 4 Challenge Zone</h2>
    <p>College Board Unit 4 networking turned into a game-builder lesson: move traffic from GitHub Pages to NGINX, Flask / Spring, and AWS while clearly teaching OSI vs TCP/IP, encapsulation, request/response flow, and MTU.</p>
  </div>
  <div class="game-feature-grid">
    <div class="game-feature-card">
      <h4>Contest Fit</h4>
      <div class="requirement-tags">
        <span class="requirement-tag">Background</span>
        <span class="requirement-tag">Player</span>
        <span class="requirement-tag">NPC</span>
        <span class="requirement-tag">AI NPC</span>
      </div>
    </div>
    <div class="game-feature-card">
      <h4>Academic Focus</h4>
      <div class="requirement-tags">
        <span class="requirement-tag academic">OSI 7-Layer</span>
        <span class="requirement-tag academic">TCP/IP 5-Layer</span>
        <span class="requirement-tag academic">MTU / MSS</span>
      </div>
    </div>
    <div class="game-feature-card">
      <h4>Real Project Link</h4>
      <p>Every packet mission connects back to GitHub Pages, HTTPS, NGINX, Flask / Spring, AWS EC2, Docker, and SQL so the lesson applies to your real deployment instead of abstract notes.</p>
    </div>
    <div class="game-feature-card">
      <h4>Slack Concepts Used</h4>
      <p>The Slack asks are shown directly: fun game, real deployment, OSI vs TCP/IP, MTU formation, request/response flow, pop-quiz review, and a clear player/NPC/AI NPC structure.</p>
    </div>
  </div>
  <div class="game-feature-card" style="margin-bottom:18px">
    <h4>How To Teach It</h4>
    <div class="teach-list">
      <div class="teach-step"><strong>1.</strong> Point to the board and say: these seven circles are the OSI layers we use to explain networking.</div>
      <div class="teach-step"><strong>2.</strong> Point to the labels under them and say: TCP/IP combines some of those jobs into five practical layers.</div>
      <div class="teach-step"><strong>3.</strong> Move the player and explain: our project traffic starts at GitHub Pages, then moves through HTTPS, TCP, IP, Ethernet, NGINX, Docker, and the backend.</div>
      <div class="teach-step"><strong>4.</strong> Use an oversized packet to teach MTU and request/response flow: if the payload is too big, fragment it before delivery so the backend can answer cleanly.</div>
    </div>
  </div>
  <div class="game-tabs">
    <button class="gtab active" onclick="switchGameTab(this,'patrol')">&#127914; Net Patrol Mission</button>
    <button class="gtab" onclick="switchGameTab(this,'quiz')">&#9997;&#65039; Pop Quiz Review</button>
    <button class="gtab" onclick="switchGameTab(this,'mtu')">&#128202; MTU Lab</button>
  </div>

  <!-- TAB 1: Canvas Game -->
  <div class="gtab-panel" id="gtab-patrol">
    <div class="game-layout">
      <div class="game-canvas-stack">
        <div class="gb-controls">
          <div class="gb-left">
            <button class="gb-btn" onclick="startNetGame()">▶ Play</button>
            <button class="gb-btn" onclick="pauseNetGame()">⏸ Pause</button>
            <button class="gb-btn" onclick="stopNetGame()">■ Stop</button>
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
            <button class="btn btn-gold" style="margin-top:10px" onclick="startNetGame()">Launch Mission</button>
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
    <div class="layer-guide">
      <div class="guide-card">
        <h4>Network Stack Lesson Guide</h4>
        <div class="stack-guide">
          <div class="stack-row">
            <strong>HTTP/DNS (Application Layer)</strong>
            <span>Frontend (GitHub Pages) -> Backend (AWS EC2 with Docker)</span>
            <p>The frontend uses JavaScript <code>fetch()</code> to send HTTP(S) requests. DNS resolves the backend domain, and the backend builds request and response data for CRUD operations.</p>
          </div>
          <div class="stack-row">
            <strong>Presentation + Session</strong>
            <span>SSL/TLS, Certbot, and ongoing communication</span>
            <p>Presentation handles encryption and translation. Session manages dialogues between apps, such as persistent connections and application conversations.</p>
          </div>
          <div class="stack-row">
            <strong>TCP/UDP (Transport Layer)</strong>
            <span>Request and response move as reliable segments</span>
            <p>TCP breaks data into segments, often around 1460 bytes of payload. NGINX receives traffic and routes it to the correct backend service.</p>
          </div>
          <div class="stack-row">
            <strong>IP (Network Layer)</strong>
            <span>Request and response become routed packets</span>
            <p>The TCP segment is wrapped in an IP packet with source and destination IP addresses. Routers move those packets across the internet to AWS.</p>
          </div>
          <div class="stack-row">
            <strong>Data Link + Physical</strong>
            <span>Ethernet/Wi-Fi frames and electrical or optical signals</span>
            <p>The packet becomes a frame with MAC addresses and CRC, then moves as bits through cables, fiber, or wireless signals.</p>
          </div>
          <div class="stack-row">
            <strong>NGINX as Orchestrator</strong>
            <span>Traffic manager between internet and backend</span>
            <p>NGINX acts as the orchestrator, connecting traffic from the internet to Flask or Spring containers and sending responses back out.</p>
          </div>
        </div>
      </div>
      <div class="guide-card">
        <h4>College Board Requirement Match</h4>
        <div class="stack-guide">
          <div class="stack-row">
            <strong>Fun and Gamified</strong>
            <p>Player movement, packet pickup, fragmentation, rescue, and delivery turn Unit 4 into a game instead of a static note page.</p>
          </div>
          <div class="stack-row">
            <strong>Real to Our Project</strong>
            <p>The mission uses GitHub Pages, HTTPS, NGINX, Docker, Flask / Spring, AWS EC2, and SQL exactly like the blog and deployment stack.</p>
          </div>
          <div class="stack-row">
            <strong>Academic</strong>
            <p>The board shows the OSI 7-layer explanation and the TCP/IP 5-layer standard while the MTU lab teaches segmentation and framing.</p>
          </div>
          <div class="stack-row">
            <strong>Required Game Parts</strong>
            <p>Background: layer board. Player: frontend engineer. NPC: Router Ron. AI NPC: Hacker H4X. The Java leaderboard is excluded from the challenge.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: Quiz -->
  <div class="gtab-panel" id="gtab-quiz" style="display:none">
    <div class="model-compare" style="max-width:760px;margin:0 auto 18px">
      <div class="model-col">
        <div class="model-title">OSI Model &mdash; 7 Layers <span style="font-weight:400;font-size:0.75rem;color:#94a3b8">(Guideline)</span></div>
        <div class="ml" style="border-color:#f59e0b;background:rgba(245,158,11,0.10)">L7 &mdash; Application<br><span>HTTP, DNS, fetch() from GitHub Pages</span></div>
        <div class="ml" style="border-color:#d97706;background:rgba(217,119,6,0.08)">L6 &mdash; Presentation<br><span>TLS/SSL encrypts data &rarr; HTTPS</span></div>
        <div class="ml" style="border-color:#b45309;background:rgba(180,83,9,0.08)">L5 &mdash; Session<br><span>Manages socket &amp; keep-alive state</span></div>
        <div class="ml" style="border-color:#3b82f6;background:rgba(59,130,246,0.08)">L4 &mdash; Transport<br><span>TCP ports, seq#, MSS = 1460 B</span></div>
        <div class="ml" style="border-color:#10b981;background:rgba(16,185,129,0.08)">L3 &mdash; Network<br><span>IP addresses, routing to EC2</span></div>
        <div class="ml" style="border-color:#8b5cf6;background:rgba(139,92,246,0.08)">L2 &mdash; Data Link<br><span>Ethernet frames, MAC, FCS/CRC</span></div>
        <div class="ml" style="border-color:#475569;background:rgba(71,85,105,0.08)">L1 &mdash; Physical<br><span>Electrical/optical/radio signals</span></div>
      </div>
      <div class="model-vs">vs</div>
      <div class="model-col">
        <div class="model-title">TCP/IP Model &mdash; 5 Layers <span style="font-weight:400;font-size:0.75rem;color:#94a3b8">(Standard)</span></div>
        <div class="ml span3" style="border-color:#f59e0b;background:rgba(245,158,11,0.10)">Application (L7 + L6 + L5 merged)<br><span>HTTP, TLS, Sessions all live here</span></div>
        <div class="ml" style="border-color:#3b82f6;background:rgba(59,130,246,0.08)">Transport<br><span>TCP/UDP, ports, MSS = 1460 B</span></div>
        <div class="ml" style="border-color:#10b981;background:rgba(16,185,129,0.08)">Internet<br><span>IP packets, routing, TTL</span></div>
        <div class="ml span2" style="border-color:#8b5cf6;background:rgba(139,92,246,0.08)">Link (L2 + L1 merged)<br><span>Ethernet, MAC, Wi-Fi &amp; physical signals</span></div>
      </div>
    </div>
    <div style="max-width:760px;margin:0 auto 14px;padding:10px 14px;background:rgba(251,191,36,0.07);border-left:3px solid #fbbf24;border-radius:6px;font-size:0.8rem;color:#cbd5e1">
      <strong style="color:#fbbf24">Key Distinction:</strong> OSI is a 7-layer <em>reference guideline</em> used for teaching and troubleshooting. TCP/IP is the 5-layer <em>practical standard</em> the internet actually runs on. They differ at the top (OSI splits App/Presentation/Session; TCP/IP merges them) and at the bottom (OSI splits Data Link/Physical; TCP/IP merges them as &ldquo;Link&rdquo;).
    </div>
    <div id="quizContainer" style="max-width:760px;margin:0 auto"></div>
  </div>

  <!-- TAB 3: MTU Explorer -->
  <div class="gtab-panel" id="gtab-mtu" style="display:none">
    <div class="mtu-explorer">
      <p style="font-size:0.88rem;color:#94a3b8;max-width:700px">Adjust the payload size to see how a real project request is encapsulated. This lab mirrors a GitHub Pages frontend calling an AWS backend through HTTPS, TCP, IP, Ethernet, NGINX, and your application server.</p>
      <div class="mtu-row">
        <label>Application Payload (bytes)</label>
        <input type="range" id="mtuPayload" min="100" max="3000" value="800" oninput="updateMTU()">
        <span id="mtuPayloadVal">800 B</span>
      </div>
      <div class="mtu-frame-box">
        <div class="mtu-viz" id="mtuFrameViz"></div>
        <div style="margin-top:10px;font-size:0.78rem;color:#64748b" id="mtuFrameLabel"></div>
      </div>
      <div class="mtu-warn" id="mtuWarn">&#9888; Payload exceeds 1460 B TCP MSS (MTU 1500 &minus; 40 B headers). Fragmentation required &mdash; Fragments needed: <strong id="mtuFragCount">-</strong></div>
      <div class="mtu-info-grid" id="mtuCalcGrid">
        <div class="mtu-ic"><h5>Pop Quiz Check</h5><p id="mtuQuizCheck">With a payload of 800B, the TCP segment stays below the Ethernet MTU, so one frame can carry it cleanly.</p></div>
        <div class="mtu-ic"><h5>Fragment Plan</h5><p id="mtuFragmentPlan">1 fragment: 800B payload + 40B TCP/IP overhead inside a 858B Ethernet frame.</p></div>
        <div class="mtu-ic"><h5>Encapsulation Flow</h5><p id="mtuEncapFlow">Application data becomes a TCP segment, then an IP packet, then an Ethernet frame, then bits on the wire.</p></div>
      </div>
      <div class="mtu-info-grid">
        <div class="mtu-ic"><h5>Ethernet Frame (L2)</h5><p>14B Dest/Src MAC + EtherType<br>+ IP Packet (payload)<br>+ 4B FCS / CRC tail<br><strong>Max: 1518 B total</strong></p></div>
        <div class="mtu-ic"><h5>IP Packet (L3)</h5><p>20B IP Header<br>(TTL, src/dst IP, protocol)<br>+ TCP Segment<br><strong>Max: 1500 B (MTU)</strong></p></div>
        <div class="mtu-ic"><h5>TCP Segment (L4)</h5><p>20B TCP Header<br>(ports, seq, ack, flags)<br>+ Application Data<br><strong>Max payload: 1460 B (MSS)</strong></p></div>
        <div class="mtu-ic"><h5>Our Deployment Stack</h5><p>GitHub Pages JS <code>fetch()</code><br>&#8594; HTTPS via Certbot/TLS<br>&#8594; TCP &#8594; IP &#8594; Ethernet<br>&#8594; NGINX &#8594; Flask / Spring on EC2</p></div>
        <div class="mtu-ic"><h5>OSI Model (7 layers)</h5><p>7: Application (HTTP/DNS)<br>6: Presentation (TLS/SSL)<br>5: Session (WebSocket)<br>4: Transport (TCP/UDP)<br>3: Network (IP routing)<br>2: Data Link (Ethernet)<br>1: Physical (signals)</p></div>
        <div class="mtu-ic"><h5>TCP/IP Model (5 layers)</h5><p>5: Application (L5+L6+L7)<br>4: Transport (TCP/UDP)<br>3: Internet (IP)<br>2: Link (Ethernet/Wi-Fi)<br>1: Physical (bits/signals)<br><br><em>OSI is a guideline (7);<br>TCP/IP is the standard (5).</em></p></div>
      </div>

      <!-- Step-by-step Request Journey -->
      <h4 style="color:#fbbf24;margin:22px 0 10px;font-size:0.95rem;letter-spacing:0.04em;text-transform:uppercase">Request Journey: GitHub Pages &rarr; AWS EC2</h4>
      <p style="font-size:0.8rem;color:#94a3b8;margin-bottom:12px">Trace a single <code>fetch()</code> call through every layer. Each step wraps the previous in a new header — this is <strong>encapsulation</strong>.</p>
      <div class="journey">
        <div class="journey-step" style="border-color:#f59e0b">
          <div style="font-size:0.7rem;color:#f59e0b;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">OSI L7 / TCP/IP Application</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">HTTP Request Generated</div>
          <div style="font-size:0.78rem;color:#94a3b8"><code>fetch("https://api.ec2.example/data")</code> creates an HTTP GET with headers. DNS resolves the hostname to the EC2 IP address first.</div>
        </div>
        <div class="js-arrow">&#8595;</div>
        <div class="journey-step" style="border-color:#d97706">
          <div style="font-size:0.7rem;color:#d97706;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">OSI L6 / TCP/IP Application (TLS)</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">TLS Encryption (HTTPS)</div>
          <div style="font-size:0.78rem;color:#94a3b8">Certbot/Let&rsquo;s Encrypt cert activates. The HTTP plaintext is encrypted into a TLS record. Nobody in transit can read the payload.</div>
        </div>
        <div class="js-arrow">&#8595;</div>
        <div class="journey-step" style="border-color:#3b82f6">
          <div style="font-size:0.7rem;color:#3b82f6;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">OSI L4 / TCP/IP Transport</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">TCP Segment (MSS = 1460 B)</div>
          <div style="font-size:0.78rem;color:#94a3b8">TLS record is handed to TCP. A 20 B TCP header is added (src port, dst port :443, seq#, ack#, flags). If encrypted payload &gt; 1460 B, TCP splits it across multiple segments.</div>
        </div>
        <div class="js-arrow">&#8595;</div>
        <div class="journey-step" style="border-color:#10b981">
          <div style="font-size:0.7rem;color:#10b981;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">OSI L3 / TCP/IP Internet</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">IP Packet (MTU = 1500 B)</div>
          <div style="font-size:0.78rem;color:#94a3b8">20 B IP header wraps the TCP segment (src IP = client, dst IP = EC2 public IP, TTL, protocol=6/TCP). Total IP payload cannot exceed 1500 B (MTU).</div>
        </div>
        <div class="js-arrow">&#8595;</div>
        <div class="journey-step" style="border-color:#8b5cf6">
          <div style="font-size:0.7rem;color:#8b5cf6;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">OSI L2 / TCP/IP Link</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">Ethernet Frame (max 1518 B)</div>
          <div style="font-size:0.78rem;color:#94a3b8">14 B Ethernet header (src MAC, dst MAC, EtherType 0x0800) + IP packet + 4 B FCS/CRC trailer. ARP resolved the next-hop MAC. Frame max = 1518 B.</div>
        </div>
        <div class="js-arrow">&#8595;</div>
        <div class="journey-step" style="border-color:#475569">
          <div style="font-size:0.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">OSI L1 / TCP/IP Physical</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">Bits on the Wire</div>
          <div style="font-size:0.78rem;color:#94a3b8">Frame is converted to electrical (copper), optical (fiber), or radio (Wi-Fi) signals and transmitted across the physical medium to the next hop.</div>
        </div>
        <div class="js-arrow">&#8595;</div>
        <div class="journey-step" style="border-color:#fbbf24;background:rgba(251,191,36,0.06)">
          <div style="font-size:0.7rem;color:#fbbf24;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">AWS EC2 &mdash; NGINX Reverse Proxy</div>
          <div style="font-weight:600;color:#e2e8f0;margin:2px 0">Decapsulation + Routing</div>
          <div style="font-size:0.78rem;color:#94a3b8">EC2 reassembles frames &rarr; IP packet &rarr; TCP stream &rarr; decrypts TLS &rarr; HTTP request. NGINX inspects the Host header and proxies the request to the correct Docker container (Flask or Spring).</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FAQ -->
<div class="section" id="faq">
  <div class="sec-head"><h2>Frequently Asked Questions</h2><p>Search below or ask the AI chatbot (bottom right)</p></div>
  <div class="faq-wrap">
    <div class="faq-bar">
      <input type="text" placeholder="Search FAQs..." id="faqSearch">
      <div class="faq-tag on" data-c="all">All</div>
      <div class="faq-tag" data-c="membership">Membership</div>
      <div class="faq-tag" data-c="benefits">Benefits</div>
      <div class="faq-tag" data-c="legal">Legal</div>
      <div class="faq-tag" data-c="events">Events</div>
      <div class="faq-tag" data-c="store">Store</div>
    </div>
    <div id="faqList">
      <div class="fq" data-c="membership"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>How do I become a DSA member?</span><span class="t">+</span></div><div class="fq-a">All sworn personnel of the San Diego County Sheriff's Department are eligible. Contact the DSA office at (858) 486-9009 or visit headquarters at 13881 Danielson Street, Poway. Dues are automatically deducted from your paycheck and benefits begin immediately.</div></div>
      <div class="fq" data-c="membership"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>What do membership dues cover?</span><span class="t">+</span></div><div class="fq-a">Dues cover legal defense, political representation, member benefits, organizational operations, and access to all DSA programs. Rates are set by the Board of Directors. Contact the office for current rates.</div></div>
      <div class="fq" data-c="membership"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>What are Weingarten Rights?</span><span class="t">+</span></div><div class="fq-a">You have the right to request union representation at any investigatory interview that could lead to discipline. If management denies your request, the interview must stop. Contact a shop steward or the DSA office immediately.</div></div>
      <div class="fq" data-c="benefits"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>What insurance benefits are available?</span><span class="t">+</span></div><div class="fq-a">Members have access to group health insurance (medical, dental, vision), life insurance, disability insurance, and supplemental coverage. We negotiate competitive rates with major providers. Coverage extends to you and your family.</div></div>
      <div class="fq" data-c="benefits"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>When is open enrollment?</span><span class="t">+</span></div><div class="fq-a">Open enrollment is announced annually, typically in the fall. You can also make changes during qualifying life events such as marriage, birth of a child, or change in spouse's coverage.</div></div>
      <div class="fq" data-c="legal"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>What legal defense does DSA provide?</span><span class="t">+</span></div><div class="fq-a">The Legal Defense Fund covers administrative investigations, IA interviews, Skelly hearings, critical incidents (24/7 response), and civil litigation from on-duty actions. Attorney fees, expert witnesses, and court costs are covered.</div></div>
      <div class="fq" data-c="legal"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>What should I do after a critical incident?</span><span class="t">+</span></div><div class="fq-a">Call the DSA 24/7 legal hotline at (858) 486-9009 immediately. Do not give a detailed statement until your attorney arrives. You have the right to representation. The CISM team is also available for post-incident support.</div></div>
      <div class="fq" data-c="events"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>How do I RSVP for events?</span><span class="t">+</span></div><div class="fq-a">Click the RSVP button next to any event on this page, call the office, or email info@dsasd.org. Most events are open to members and their immediate families.</div></div>
      <div class="fq" data-c="store"><div class="fq-q" onclick="toggleFaqAnswer(this)"><span>How do I buy DSA merchandise?</span><span class="t">+</span></div><div class="fq-a">Browse the Store section above or visit DSA HQ in Poway. Online orders ship within 5-7 business days. Member discounts are applied automatically at checkout.</div></div>
    </div>
  </div>
</div>

<!-- CONTACT -->
<div class="section" id="contact">
  <div class="sec-head"><h2>Contact Us</h2></div>
  <div style="display:flex;gap:16px;justify-content:center;margin-bottom:24px;flex-wrap:wrap">
    <div style="text-align:center"><img src="{{ site.baseurl }}/images/dsa/staff-photo-1.png" alt="DSA Staff" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid #fbbf24"><p style="font-size:0.72rem;color:#94a3b8;margin-top:4px">DSA Staff</p></div>
    <div style="text-align:center"><img src="{{ site.baseurl }}/images/dsa/staff-photo-2.png" alt="DSA Staff" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid #fbbf24"><p style="font-size:0.72rem;color:#94a3b8;margin-top:4px">DSA Staff</p></div>
    <div style="text-align:center"><img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="Board Member" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid #fbbf24"><p style="font-size:0.72rem;color:#94a3b8;margin-top:4px">Board Member</p></div>
  </div>
  <div class="contact-row">
    <div class="c-card"><div class="c-icon">&#128205;</div><h4>Visit Us</h4><p>13881 Danielson Street<br>Poway, CA 92064</p><p style="margin-top:6px;font-size:0.75rem;color:#475569">Mon-Fri 8:00 AM - 5:00 PM</p></div>
    <div class="c-card"><div class="c-icon">&#128222;</div><h4>Call Us</h4><p><a href="tel:+18584869009">(858) 486-9009</a></p><p style="margin-top:4px;font-size:0.75rem;color:#475569">24/7 Legal Hotline available</p></div>
    <div class="c-card"><div class="c-icon">&#128231;</div><h4>Email Us</h4><p><a href="mailto:info@dsasd.org">info@dsasd.org</a></p><p style="margin-top:4px"><a href="mailto:benefits@dsasd.org" style="font-size:0.78rem">benefits@dsasd.org</a></p></div>
  </div>
</div>

<!-- ADMIN -->
<div class="section admin-section" id="adminSection">
  <div class="sec-head"><h2>All Registered Members</h2></div>
  <table class="a-table"><thead><tr><th>Name</th><th>Username</th><th>Badge</th><th>Rank</th><th>Station</th><th>Email</th><th>Status</th></tr></thead><tbody id="adminBody"></tbody></table>
</div>

<!-- FOOTER -->
<footer>
  <div class="ft-inner">
    <div class="ft-col"><div style="display:flex;align-items:center;gap:12px;margin-bottom:10px"><img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA" style="width:50px;height:auto;opacity:0.8"><h4 style="margin:0">Deputy Sheriffs' Association</h4></div><p>13881 Danielson Street, Poway, CA 92064</p><p>(858) 486-9009 &middot; info@dsasd.org</p><p style="margin-top:8px;color:#1e3352">&copy; 2026 DSA San Diego County</p></div>
    <div class="ft-col"><h4>Navigate</h4><a href="#dashboard">Resources</a><a href="#news">News</a><a href="#events">Events</a><a href="#store">Store</a><a href="#faq">FAQ</a></div>
    <div class="ft-col"><h4>Support</h4><a href="#contact">Contact</a><a href="javascript:void(0)" onclick="openDetail('legal')">Legal Defense</a><a href="javascript:void(0)" onclick="openDetail('wellness')">Wellness</a><a href="javascript:void(0)" onclick="openDetail('forms')">Forms</a></div>
  </div>
</footer>

<!-- CHATBOT -->
<button class="cb-trigger" onclick="document.getElementById('cbWin').classList.toggle('open')">&#128172;</button>
<div class="cb-win" id="cbWin">
  <div class="cb-head"><h3>DSA Assistant (AI)</h3><button class="cb-x" onclick="document.getElementById('cbWin').classList.remove('open')">&times;</button></div>
  <div class="cb-msgs" id="cbMsgs"><div class="cm bot"><div class="cb">Hi! I'm the DSA FAQ Assistant powered by AI. Ask me anything about membership, benefits, legal defense, events, or the store.</div></div></div>
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
   CONFIG — single source for API base URL
   ================================================================ */
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8587'
  : 'https://flask.opencodingsociety.com';

let user = null;

/* ================================================================
   DOM HELPERS — each does exactly one thing
   ================================================================ */

/** Scroll the viewport to the element matching `sel`. */
function scrollTo(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

/** Return a DOM element by id (shorthand). */
function el(id) { return document.getElementById(id); }

/** Show an error message inside a `.modal-err` element. */
function showError(elementId, message) {
  const err = el(elementId);
  err.textContent = message;
  err.style.display = 'block';
}

/** Hide an error message element. */
function hideError(elementId) {
  el(elementId).style.display = 'none';
}

/** Sanitize a string for safe HTML insertion. */
function sanitizeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

/** Make a JSON POST/PUT/DELETE request to the API. */
function apiRequest(path, method, body) {
  const opts = { method, credentials: 'include', headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  return fetch(`${API}${path}`, opts).then(r => {
    if (!r.ok) return r.json().then(d => { throw new Error(d.message || d.error || 'Request failed'); });
    return r.json();
  });
}

/* ================================================================
   DETAIL PANELS — open / close inline resource panels
   ================================================================ */

function closeAllDetailPanels() {
  document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('open'));
}

function openDetail(id) {
  closeAllDetailPanels();
  const panel = el('dp-' + id);
  if (panel) {
    panel.classList.add('open');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function closeDetail(id) {
  el('dp-' + id)?.classList.remove('open');
}

/* ================================================================
   RSVP — mark an event button as RSVP'd
   ================================================================ */

function rsvp(btn) {
  btn.textContent = '\u2713 RSVP\'d';
  btn.classList.add('done');
}

/* ================================================================
   EVENTS CALENDAR — interactive month view + day detail
   ================================================================ */

const eventData = [
  { title: 'Board of Directors Meeting', date: '2026-04-02', time: '6:00 PM', location: 'DSA Headquarters, Poway' },
  { title: 'Annual Family Picnic', date: '2026-04-12', time: '11:00 AM', location: 'Poway Community Park' },
  { title: 'Wellness Workshop: Stress Management', date: '2026-04-18', time: '2:00 PM', location: 'Virtual Event' },
  { title: 'Deputy of the Year Awards', date: '2026-05-01', time: '7:00 PM', location: 'Hilton San Diego' },
  {
    title: 'Charity Golf Tournament', date: '2026-05-15', time: '8:00 AM', location: 'Morgan Run Club & Resort',
    image: '{{ site.baseurl }}/images/dsa/golf-tournament-flyer.png', imageAlt: 'Golf Tournament'
  },
  {
    title: 'Law Enforcement Memorial', date: '2026-05-22', time: '10:00 AM', location: 'County Admin Center',
    image: '{{ site.baseurl }}/images/dsa/memorial-line-of-duty.png', imageAlt: 'Line of Duty Memorial'
  },
];

const eventMap = buildEventMap(eventData);
let selectedDateKey = null;
let calendarMonth = getInitialCalendarMonth(eventData);

function buildEventMap(events) {
  const map = new Map();
  events.forEach(e => {
    const key = e.date;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(e);
  });
  return map;
}

function parseDateKey(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatMonthYear(date) {
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
}

function formatDisplayDate(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function dateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getInitialCalendarMonth(events) {
  if (!events.length) return new Date();
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const today = new Date();
  const todayKey = dateKey(today);
  const upcoming = sorted.find(e => e.date >= todayKey) || sorted[0];
  return new Date(parseDateKey(upcoming.date).getFullYear(), parseDateKey(upcoming.date).getMonth(), 1);
}

function getEventKeysInMonth(year, month) {
  return [...eventMap.keys()]
    .filter(k => {
      const d = parseDateKey(k);
      return d.getFullYear() === year && d.getMonth() === month;
    })
    .sort();
}

function renderCalendar() {
  const monthLabel = el('evCalMonth');
  const daysGrid = el('evCalDays');
  if (!monthLabel || !daysGrid) return;

  monthLabel.textContent = formatMonthYear(calendarMonth);

  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevMonthLast = new Date(year, month, 0);

  const startOffset = firstDay.getDay();
  const totalDays = lastDay.getDate();
  const prevMonthDays = prevMonthLast.getDate();
  const cells = [];

  for (let i = 0; i < startOffset; i++) {
    const day = prevMonthDays - startOffset + i + 1;
    cells.push({ date: new Date(year, month - 1, day), isOut: true });
  }

  for (let day = 1; day <= totalDays; day++) {
    cells.push({ date: new Date(year, month, day), isOut: false });
  }

  while (cells.length % 7 !== 0) {
    const day = cells.length - (startOffset + totalDays) + 1;
    cells.push({ date: new Date(year, month + 1, day), isOut: true });
  }

  const todayKey = dateKey(new Date());

  daysGrid.innerHTML = cells.map(c => {
    const key = dateKey(c.date);
    const count = eventMap.get(key)?.length || 0;
    const classes = [
      'ev-day',
      c.isOut ? 'is-out' : '',
      count ? 'has-event' : '',
      key === todayKey ? 'is-today' : '',
      key === selectedDateKey ? 'selected' : '',
    ].filter(Boolean).join(' ');
    return `
      <button class="${classes}" type="button" data-date="${key}">
        <span class="num">${c.date.getDate()}</span>
        ${count ? `<span class="ev-badge">${count}</span>` : ''}
      </button>
    `;
  }).join('');

  daysGrid.querySelectorAll('.ev-day').forEach(btn => {
    btn.addEventListener('click', () => selectDate(btn.dataset.date));
  });

  if (!selectedDateKey || parseDateKey(selectedDateKey).getMonth() !== month || parseDateKey(selectedDateKey).getFullYear() !== year) {
    const keysInMonth = getEventKeysInMonth(year, month);
    const fallbackKey = keysInMonth[0] || dateKey(new Date(year, month, 1));
    selectDate(fallbackKey, false);
  } else {
    renderDayDetail(selectedDateKey);
  }
}

function renderDayDetail(key) {
  const title = el('evCalDetailTitle');
  const list = el('evCalList');
  if (!title || !list) return;

  const date = parseDateKey(key);
  title.textContent = formatDisplayDate(date);

  const events = eventMap.get(key) || [];
  if (!events.length) {
    list.innerHTML = `<div class="ev-empty">No events scheduled for this date.</div>`;
    return;
  }

  list.innerHTML = events.map(e => `
    <div class="ev-card">
      <div class="ev-card-main">
        <div class="ev-card-info">
          <h4>${e.title}</h4>
          <p>${e.location} &mdash; ${e.time}</p>
        </div>
        ${e.image ? `<img class="ev-card-img" src="${e.image}" alt="${e.imageAlt || e.title}">` : ''}
      </div>
      <button class="ev-rsvp" onclick="rsvp(this)">RSVP</button>
    </div>
  `).join('');
}

function selectDate(key, rerender = true) {
  selectedDateKey = key;
  if (rerender) { renderCalendar(); return; }
  renderDayDetail(key);
}

function shiftCalendarMonth(delta) {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + delta, 1);
  renderCalendar();
}

function goToToday() {
  const today = new Date();
  calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  selectedDateKey = dateKey(today);
  renderCalendar();
}

el('evPrev')?.addEventListener('click', () => shiftCalendarMonth(-1));
el('evNext')?.addEventListener('click', () => shiftCalendarMonth(1));
el('evToday')?.addEventListener('click', goToToday);

renderCalendar();

/* ================================================================
   FAQ — toggle answers and filter by category / search
   ================================================================ */

function toggleFaqAnswer(questionEl) {
  questionEl.classList.toggle('open');
  questionEl.nextElementSibling.classList.toggle('open');
}

function filterFaqByCategory(category) {
  document.querySelectorAll('.fq').forEach(f => {
    f.style.display = (category === 'all' || f.dataset.c === category) ? '' : 'none';
  });
}

function filterFaqBySearch(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.fq').forEach(f => {
    f.style.display = f.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

function setActiveFaqTag(activeTag) {
  document.querySelectorAll('.faq-tag').forEach(x => x.classList.remove('on'));
  activeTag.classList.add('on');
}

document.querySelectorAll('.faq-tag').forEach(t => t.addEventListener('click', function() {
  setActiveFaqTag(this);
  filterFaqByCategory(this.dataset.c);
}));

el('faqSearch')?.addEventListener('input', function() {
  filterFaqBySearch(this.value);
});

/* ================================================================
   SEARCH — autocomplete dropdown that scrolls to sections
   ================================================================ */

const searchMap = [
  { label: 'Benefits & Insurance', target: '#dashboard', detail: 'benefits' },
  { label: 'Legal Defense',        target: '#dashboard', detail: 'legal' },
  { label: 'Wellness Programs',    target: '#dashboard', detail: 'wellness' },
  { label: 'Forms & Documents',    target: '#dashboard', detail: 'forms' },
  { label: 'Newsletters',          target: '#dashboard', detail: 'newsletters' },
  { label: 'Political Action',     target: '#dashboard', detail: 'pac' },
  { label: 'Events Calendar',      target: '#events' },
  { label: 'DSA Store',            target: '#store' },
  { label: 'FAQ',                  target: '#faq' },
  { label: 'Contact Us',           target: '#contact' },
  { label: 'About DSA',            target: '#about' },
  { label: 'Latest News',          target: '#news' },
  { label: 'Membership',           target: '#faq' },
  { label: 'Games',               target: '#games' },
  { label: 'Net Patrol Mission',  target: '#games' },
  { label: 'Networking Game',     target: '#games' },
  { label: 'Pop Quiz Review',     target: '#games' },
  { label: 'MTU Lab',             target: '#games' },
];

function findSearchMatches(query) {
  return searchMap.filter(s => s.label.toLowerCase().includes(query.toLowerCase()));
}

function renderSearchDropdown(hits, dropdown) {
  dropdown.innerHTML = hits.map(h =>
    `<div class="search-item" data-target="${h.target}" data-detail="${h.detail || ''}">${h.label}</div>`
  ).join('');
}

function handleSearchItemClick(item, dropdown) {
  scrollTo(item.dataset.target);
  if (item.dataset.detail) setTimeout(() => openDetail(item.dataset.detail), 400);
  dropdown.classList.remove('open');
  const si = el('searchInput');
  if (si) si.value = '';
}

el('searchInput')?.addEventListener('input', function() {
  const q = this.value.trim(), drop = el('searchDrop');
  if (!drop) return;
  if (q.length < 2) { drop.classList.remove('open'); return; }
  const hits = findSearchMatches(q);
  if (!hits.length) { drop.classList.remove('open'); return; }
  renderSearchDropdown(hits, drop);
  drop.classList.add('open');
  drop.querySelectorAll('.search-item').forEach(it =>
    it.addEventListener('click', function() { handleSearchItemClick(this, drop); })
  );
});

/* ================================================================
   CLICK-AWAY — close dropdowns when clicking outside
   ================================================================ */

function closeDropdownsOnClickAway(e) {
  const drop = el('searchDrop');
  if (drop && !e.target.closest('.search-box')) drop.classList.remove('open');
  if (!e.target.closest('.user-area')) el('userPanel')?.classList.remove('open');
}

document.addEventListener('click', closeDropdownsOnClickAway);

/* ================================================================
   NAV HIGHLIGHT — highlight the active nav link on scroll
   ================================================================ */

const sectionIds = ['dashboard', 'news', 'events', 'about', 'store', 'games', 'faq', 'contact'];

function getActiveSection() {
  const y = window.scrollY + 120;
  let active = '';
  sectionIds.forEach(s => {
    const section = el(s);
    if (section && section.offsetTop <= y) active = s;
  });
  return active;
}

function highlightActiveNavLink() {
  const active = getActiveSection();
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('onclick')?.includes(active));
  });
}

window.addEventListener('scroll', highlightActiveNavLink);

/* ================================================================
   MODAL — open / close / tab switching for login/signup
   ================================================================ */

function openModal(tab) {
  el('modalBg').classList.add('open');
  switchModalTab(tab || 'login');
}

function closeModal() {
  el('modalBg').classList.remove('open');
  hideError('lErr');
  hideError('sErr');
}

function switchModalTab(t) {
  const isLogin = (t === 'login');
  el('tLog').classList.toggle('on', isLogin);
  el('tSign').classList.toggle('on', !isLogin);
  el('fLogin').style.display = isLogin ? 'block' : 'none';
  el('fSign').style.display = isLogin ? 'none' : 'block';
  el('mTitle').textContent = isLogin ? 'Member Login' : 'Create Account';
  el('mSub').textContent = isLogin ? 'Access your DSA portal' : 'Register as a DSA member';
}

// kept as global alias so onclick="mTab(...)" in HTML still works
function mTab(t) { switchModalTab(t); }

/* ================================================================
   AUTH — login, signup, logout, session check
   ================================================================ */

function getLoginCredentials() {
  return { uid: el('lUid').value, password: el('lPw').value };
}

function getSignupData() {
  return {
    name: el('sName').value, uid: el('sUid').value,
    sheriff_id: el('sSid').value, email: el('sEmail').value,
    rank: el('sRank').value, station: el('sStation').value,
    phone: el('sPhone').value, password: el('sPw').value,
  };
}

function doLogin(e) {
  e.preventDefault();
  apiRequest('/api/sheriff/authenticate', 'POST', getLoginCredentials())
    .then(d => { user = d.user; closeModal(); updateUI(); })
    .catch(err => showError('lErr', err.message));
}

function doSignup(e) {
  e.preventDefault();
  const body = getSignupData();
  apiRequest('/api/sheriff/user', 'POST', body)
    .then(() => { switchModalTab('login'); el('lUid').value = body.uid; alert('Account created! Please log in.'); })
    .catch(err => showError('sErr', err.message));
}

function logout() {
  apiRequest('/api/sheriff/authenticate', 'DELETE')
    .finally(() => { user = null; updateUI(); el('userPanel').classList.remove('open'); });
}

/* ================================================================
   UI STATE — update header to reflect logged-in / logged-out
   ================================================================ */

function showLoggedInUI() {
  el('authBtns').style.display = 'none';
  el('userArea').classList.add('active');
  el('uName').textContent = user.name.split(' ')[0];
  el('upName').textContent = user.name;
  el('upBadge').textContent = 'Badge: ' + user.sheriff_id;
  el('upRank').textContent = 'Rank: ' + user.rank;
  el('upStation').textContent = 'Station: ' + user.station;
  el('adminBtn').style.display = user.role === 'Admin' ? 'block' : 'none';
}

function showLoggedOutUI() {
  el('authBtns').style.display = 'flex';
  el('userArea').classList.remove('active');
  el('adminSection').classList.remove('open');
}

function updateUI() {
  user ? showLoggedInUI() : showLoggedOutUI();
}

/* ================================================================
   ADMIN PANEL — toggle and load member table
   ================================================================ */

function toggleAdmin() {
  const s = el('adminSection');
  s.classList.toggle('open');
  if (s.classList.contains('open')) loadAdmin();
  el('userPanel').classList.remove('open');
  if (s.classList.contains('open')) setTimeout(() => s.scrollIntoView({ behavior: 'smooth' }), 100);
}

function renderAdminRow(u) {
  return `<tr><td>${u.name}</td><td>${u.uid}</td><td>${u.sheriff_id}</td><td>${u.rank}</td><td>${u.station}</td><td>${u.email}</td><td><span class="badge-s badge-active">${u.status}</span></td></tr>`;
}

function loadAdmin() {
  fetch(`${API}/api/sheriff/user`, { credentials: 'include' })
    .then(r => r.json())
    .then(users => { el('adminBody').innerHTML = users.map(renderAdminRow).join(''); })
    .catch(e => console.error(e));
}

/* ================================================================
   CHATBOT — AI-powered DSA FAQ assistant
   ================================================================ */

let chatHist = [];

function getChatInput() {
  const inp = el('cbIn');
  const msg = inp.value.trim();
  inp.value = '';
  return msg;
}

function addChatMessage(text, sender) {
  const container = el('cbMsgs');
  const div = document.createElement('div');
  div.className = 'cm ' + sender;
  div.innerHTML = '<div class="cb">' + sanitizeHTML(text) + '</div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  const container = el('cbMsgs');
  const div = document.createElement('div');
  const id = 't' + Date.now();
  div.id = id;
  div.className = 'cm bot';
  div.innerHTML = '<div class="cb typing-dots"><span></span><span></span><span></span></div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  el(id)?.remove();
}

function disableChatSend() {
  const btn = el('cbSend');
  btn.disabled = true;
  btn.textContent = '...';
}

function enableChatSend() {
  const btn = el('cbSend');
  btn.disabled = false;
  btn.textContent = 'Send';
}

function sendChat() {
  const msg = getChatInput();
  if (!msg) return;

  addChatMessage(msg, 'user');
  chatHist.push({ role: 'user', content: msg });

  const typingId = showTypingIndicator();
  disableChatSend();

  apiRequest('/api/sheriff/chat', 'POST', { message: msg, history: chatHist.slice(-10) })
    .then(d => {
      removeTypingIndicator(typingId);
      addChatMessage(d.reply, 'bot');
      chatHist.push({ role: 'assistant', content: d.reply });
    })
    .catch(() => {
      removeTypingIndicator(typingId);
      addChatMessage("Sorry, I can't connect right now. Call (858) 486-9009 or email info@dsasd.org.", 'bot');
    })
    .finally(enableChatSend);
}

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
    if (tab === 'quiz') initQuiz();
    if (tab === 'mtu') updateMTU();
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
    // ── Dark base ──────────────────────────────────────────────────────────
    ctx.fillStyle = '#060e1a';
    ctx.fillRect(0, 0, 780, 440);

    // Subtle vertical grid
    ctx.strokeStyle = 'rgba(59,130,246,0.04)';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < 780; gx += 40) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, 440); ctx.stroke();
    }

    // Animated data "bits" flowing downward — represent packets in transit
    const t = Date.now();
    [80, 195, 330, 480, 605, 715].forEach((bx, i) => {
      const by = (t / (180 + i * 25) + i * 73) % 450;
      ctx.fillStyle = 'rgba(96,165,250,0.18)';
      ctx.beginPath(); ctx.arc(bx, by, 2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(96,165,250,0.1)';
      ctx.beginPath(); ctx.arc(bx, (by + 110) % 450, 1.5, 0, Math.PI * 2); ctx.fill();
    });

    // ── Highlight the layer the player is currently standing in ────────────
    const activeLay = gameRunning ? layerAt(player.y) : null;

    // ── Draw all 7 OSI layer bands (horizontal zones) ──────────────────────
    OSI.forEach(layer => {
      const isActive = !!(activeLay && activeLay.id === layer.id);

      // Band gradient fill — active zone gets brighter tint
      const g = ctx.createLinearGradient(0, layer.y, 780, layer.y + layer.h);
      g.addColorStop(0, layer.col + (isActive ? '42' : '18'));
      g.addColorStop(1, 'rgba(6,14,26,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, layer.y, 780, layer.h);

      // Active zone: glowing border outline
      if (isActive) {
        ctx.strokeStyle = layer.col;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        ctx.strokeRect(1, layer.y + 1, 778, layer.h - 2);
        ctx.globalAlpha = 1;
      }

      // Top border line of zone
      ctx.strokeStyle = layer.col;
      ctx.globalAlpha = isActive ? 0.9 : 0.38;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, layer.y); ctx.lineTo(780, layer.y); ctx.stroke();
      ctx.globalAlpha = 1;

      // Left: layer number (prominent)
      ctx.fillStyle = layer.col;
      ctx.globalAlpha = isActive ? 1.0 : 0.72;
      ctx.font = 'bold 14px monospace';
      ctx.fillText('L' + layer.id, 5, layer.y + 16);
      // Left: layer name
      ctx.font = 'bold 9px monospace';
      ctx.fillText(layer.name.toUpperCase(), 5, layer.y + 28);
      ctx.globalAlpha = 1;

      // Center: short concept description — brighter when active
      ctx.fillStyle = isActive ? 'rgba(226,232,240,0.9)' : 'rgba(100,116,139,0.52)';
      ctx.font = isActive ? 'bold 9px sans-serif' : '9px sans-serif';
      ctx.fillText(layer.desc, 92, layer.y + 16);

      // Right: TCP/IP model mapping label
      ctx.fillStyle = layer.col;
      ctx.globalAlpha = isActive ? 0.95 : 0.45;
      ctx.font = 'bold 8px monospace';
      const tcpLabel = 'TCP/IP: ' + layer.tcp;
      ctx.fillText(tcpLabel, 775 - ctx.measureText(tcpLabel).width, layer.y + layer.h - 5);
      ctx.globalAlpha = 1;

      // Dashed floor line between zones (the "platform" the character walks on)
      ctx.strokeStyle = layer.col + '3a';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 7]);
      ctx.beginPath(); ctx.moveTo(92, layer.y + layer.h); ctx.lineTo(680, layer.y + layer.h); ctx.stroke();
      ctx.setLineDash([]);
    });

    // ── Deployment flow banner at very top ─────────────────────────────────
    ctx.fillStyle = 'rgba(6,14,26,0.88)';
    ctx.fillRect(0, 0, 780, 14);
    ctx.fillStyle = '#334155';
    ctx.font = '8px monospace';
    ctx.fillText('DEPLOYMENT: GitHub Pages fetch()  →  HTTPS/TLS  →  TCP  →  IP  →  Ethernet  →  NGINX  →  Flask/Spring  →  AWS EC2  →  SQL', 4, 11);

    // Old circle-node diagram removed — replaced by the dark horizontal band layout above.
    if (false) { const layerNodes = [

    function centerText(text, x, y, font, color) {
      ctx.font = font;
      ctx.fillStyle = color;
      const w = ctx.measureText(text).width;
      ctx.fillText(text, x - w / 2, y);
    }

    function drawNodeSymbol(type, x, y) {
      ctx.save();
      ctx.translate(x, y);
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = '#1f2937';
      ctx.fillStyle = '#ef4444';

      if (type === 'application') {
        rr(ctx, -26, -18, 52, 38, 6);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-26, -18, 52, 8);
        ctx.fillStyle = '#1f2937';
        ctx.beginPath();
        ctx.arc(15, -14, 1.5, 0, Math.PI * 2);
        ctx.arc(20, -14, 1.5, 0, Math.PI * 2);
        ctx.fill();
        rr(ctx, -8, -2, 16, 16, 3);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 6, 4, 0, Math.PI * 2);
        ctx.stroke();
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * 6, Math.sin(a) * 6 + 6);
          ctx.lineTo(Math.cos(a) * 9, Math.sin(a) * 9 + 6);
          ctx.stroke();
        }
      } else if (type === 'presentation') {
        rr(ctx, -24, -18, 48, 34, 4);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-24, 10, 48, 6);
        ctx.beginPath();
        ctx.moveTo(-14, 2);
        ctx.lineTo(-6, -3);
        ctx.lineTo(0, 5);
        ctx.lineTo(8, -7);
        ctx.lineTo(16, -1);
        ctx.stroke();
      } else if (type === 'session') {
        ctx.beginPath();
        ctx.arc(0, 0, 24, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(-22, 0);
        ctx.arc(-2, 0, 20, Math.PI / 2, Math.PI * 1.5, true);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(4, 0, 11, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(8, -17);
        ctx.lineTo(15, -10);
        ctx.lineTo(11, -10);
        ctx.moveTo(15, 10);
        ctx.lineTo(8, 17);
        ctx.lineTo(12, 17);
        ctx.stroke();
      } else if (type === 'transport') {
        rr(ctx, -18, -10, 16, 12, 2);
        rr(ctx, 4, 8, 16, 12, 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-18, -10, 16, 12);
        ctx.fillRect(4, 8, 16, 12);
        ctx.beginPath();
        ctx.moveTo(-2, -4);
        ctx.lineTo(-2, 10);
        ctx.lineTo(4, 10);
        ctx.moveTo(-12, 2);
        ctx.lineTo(-12, 14);
        ctx.lineTo(0, 14);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-5, 7);
        ctx.lineTo(-2, 10);
        ctx.lineTo(1, 7);
        ctx.moveTo(-3, 11);
        ctx.lineTo(0, 14);
        ctx.lineTo(3, 11);
        ctx.stroke();
      } else if (type === 'network') {
        rr(ctx, -20, -22, 28, 44, 5);
        rr(ctx, -2, -16, 18, 32, 4);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(-6, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(-6, 0, 10, 0, Math.PI * 2);
        ctx.moveTo(-16, 0);
        ctx.lineTo(4, 0);
        ctx.moveTo(-6, -10);
        ctx.lineTo(-6, 10);
        ctx.moveTo(-13, -6);
        ctx.quadraticCurveTo(-6, -10, 1, -6);
        ctx.moveTo(-13, 6);
        ctx.quadraticCurveTo(-6, 10, 1, 6);
        ctx.stroke();
      } else if (type === 'datalink') {
        rr(ctx, -18, -10, 18, 14, 2);
        rr(ctx, -4, 4, 18, 14, 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-18, -10, 18, 4);
        ctx.fillRect(-4, 4, 18, 4);
        ctx.beginPath();
        ctx.moveTo(0, -3);
        ctx.lineTo(0, 10);
        ctx.moveTo(-8, 0);
        ctx.lineTo(-8, 12);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-3, 7);
        ctx.lineTo(0, 10);
        ctx.lineTo(3, 7);
        ctx.moveTo(-11, 9);
        ctx.lineTo(-8, 12);
        ctx.lineTo(-5, 9);
        ctx.stroke();
      } else if (type === 'physical') {
        ctx.beginPath();
        ctx.moveTo(-16, 18);
        ctx.lineTo(-16, -6);
        ctx.moveTo(10, 18);
        ctx.lineTo(10, -6);
        ctx.stroke();
        rr(ctx, -22, 10, 40, 12, 3);
        ctx.fillStyle = '#ef4444';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#1f2937';
        ctx.beginPath();
        ctx.arc(-14, 16, 1.5, 0, Math.PI * 2);
        ctx.arc(-8, 16, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, -2, 5, -Math.PI / 2, Math.PI / 2);
        ctx.arc(0, -2, 12, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
      }

      ctx.restore();
    }

    for (let i = 0; i < layerNodes.length - 1; i++) {
      const from = layerNodes[i];
      const to = layerNodes[i + 1];
      const cx = (from.x + to.x) / 2;
      const cy = Math.min(from.y, to.y) - 60;
      ctx.strokeStyle = 'rgba(156,163,175,0.65)';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(from.x + 40, from.y);
      ctx.quadraticCurveTo(cx, cy, to.x - 40, to.y);
      ctx.stroke();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(203,213,225,0.9)';
      ctx.stroke();
      ctx.fillStyle = 'rgba(156,163,175,0.8)';
      ctx.beginPath();
      ctx.moveTo(to.x - 48, to.y - 8);
      ctx.lineTo(to.x - 30, to.y);
      ctx.lineTo(to.x - 48, to.y + 8);
      ctx.closePath();
      ctx.fill();
    }

    layerNodes.forEach((node, i) => {
      const model = OSI[i];
      ctx.strokeStyle = 'rgba(203,213,225,0.85)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 54, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([3, 7]);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(203,213,225,0.75)';
      ctx.beginPath();
      ctx.arc(node.x, node.y, 63, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(node.x, node.y, 44, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = model.col + '66';
      ctx.lineWidth = 2;
      ctx.stroke();

      drawNodeSymbol(node.icon, node.x, node.y);

      centerText(node.title, node.x, node.y - 92, 'bold 18px "Segoe UI", sans-serif', '#0f172a');
      centerText(node.subtitle, node.x, node.y - 66, 'bold 18px "Segoe UI", sans-serif', '#0f172a');
    });

    ctx.fillStyle = '#ffffff';
    rr(ctx, 544, 18, 214, 54, 14);
    ctx.fill();
    ctx.strokeStyle = '#dbeafe';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#1d4ed8';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('Deployment Route', 560, 40);
    ctx.fillStyle = '#64748b';
    ctx.font = '10px monospace';
    ctx.fillText('GitHub Pages -> NGINX -> Flask / Spring -> SQL', 560, 58); } // end dead-code block
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

    // ── Current layer panel (top-left) — prominent label that changes as you move ──
    if (lay && gameRunning) {
      ctx.fillStyle = 'rgba(6,14,26,0.93)';
      ctx.strokeStyle = lay.col;
      ctx.lineWidth = 1.5;
      rr(ctx, 5, 16, 318, 42, 5); ctx.fill(); ctx.stroke();
      ctx.fillStyle = lay.col;
      ctx.font = 'bold 11px monospace';
      ctx.fillText('Layer ' + lay.id + ' — ' + lay.name + '  ·  TCP/IP: ' + lay.tcp, 11, 31);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8.5px sans-serif';
      const desc = lay.desc.length > 60 ? lay.desc.slice(0, 60) + '…' : lay.desc;
      ctx.fillText(desc, 11, 48);
    }

    // ── Score / delivery panel (top-right) ────────────────────────────────────
    ctx.fillStyle = 'rgba(6,14,26,0.9)';
    ctx.strokeStyle = '#1e3352'; ctx.lineWidth = 1;
    rr(ctx, 594, 16, 180, 42, 5); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('Score: ' + gState.score, 600, 31);
    ctx.fillStyle = '#64748b';
    ctx.font = '8.5px monospace';
    ctx.fillText('Active: ' + packets.filter(p => !p.done && !p.stolen).length + '  Del: ' + gState.delivered + '  Lvl: ' + gState.level, 600, 47);

    // ── Bottom info bar — always visible reference ─────────────────────────────
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
      '<button class="btn btn-gold" style="margin-top:12px" onclick="startNetGame()">Replay Mission</button>';
    setStatus('Complete');
  };

  /* ================================================================
     POP QUIZ REVIEW
     ================================================================ */
  const QUIZ_POOL = [
    {
      cat: 'Models',
      q: 'Which statement best compares the OSI model and the TCP/IP model used in class?',
      opts: ['OSI is the internet standard and TCP/IP is only theoretical', 'OSI is a 7-layer guideline, while TCP/IP is the practical 5-layer standard', 'Both are always shown as 7 layers', 'TCP/IP replaces physical media entirely'],
      ans: 1,
      exp: 'OSI is a reference model that helps explain responsibilities in detail. TCP/IP is the practical stack used on real networks, often shown in 4 or 5 layers.'
    },
    {
      cat: 'Deployment',
      q: 'In a GitHub Pages frontend calling a Flask or Spring backend, what is a good Layer 7 example?',
      opts: ['Ethernet MAC addressing', 'A JavaScript fetch() request using HTTPS', 'Electrical signaling over a cable', 'CRC frame checking'],
      ans: 1,
      exp: 'Application-layer behavior includes HTTP requests, DNS lookups, and app-to-app communication. A browser fetch() request is a direct Unit 4 example.'
    },
    {
      cat: 'Security',
      q: 'Which part of the deployment most closely matches the OSI Presentation layer idea in this lesson?',
      opts: ['Certbot-managed TLS encryption', 'SQL query planning', 'Route 53 billing', 'Docker image naming'],
      ans: 0,
      exp: 'The Presentation-layer idea is data translation and encryption. In this stack, TLS certificates and HTTPS best represent that role.'
    },
    {
      cat: 'Transport',
      q: 'Why is the TCP Maximum Segment Size commonly 1460 bytes on a standard Ethernet network?',
      opts: ['1500B MTU minus 20B IP and 20B TCP headers', '1518B Ethernet frame minus 58B DNS headers', '1024B default browser packet size plus 436B retry room', 'Because TCP always reserves 60B for SQL'],
      ans: 0,
      exp: 'Standard Ethernet MTU is 1500B for the IP packet. With 20B IP and 20B TCP overhead, the TCP payload typically tops out at 1460B.'
    },
    {
      cat: 'Encapsulation',
      q: 'What is the correct order when application data travels down the stack?',
      opts: ['Data -> TCP segment -> IP packet -> Ethernet frame', 'Data -> IP packet -> TCP segment -> Ethernet frame', 'Ethernet frame -> TCP segment -> IP packet -> data', 'Data -> Ethernet frame -> IP packet -> TCP segment'],
      ans: 0,
      exp: 'Encapsulation adds transport first, then network, then link framing before the Physical layer turns the bits into signals.'
    },
    {
      cat: 'Roles',
      q: 'What does NGINX most realistically do in this project network path?',
      opts: ['Store SQL rows directly', 'Act as a reverse proxy between incoming traffic and backend services', 'Replace DNS entirely', 'Handle the Java leaderboard challenge'],
      ans: 1,
      exp: 'NGINX receives requests and forwards them to the right backend service, so it lives around the boundary between Transport and Application concerns.'
    },
    {
      cat: 'Session',
      q: 'Which choice best matches the OSI Session layer idea?',
      opts: ['Tracking an ongoing WebSocket or persistent app conversation', 'Adding source MAC addresses', 'Sending radio signals through Wi-Fi', 'Choosing the SQL table name'],
      ans: 0,
      exp: 'Session is about managing ongoing communication between applications. In TCP/IP, that idea is usually folded into the Application layer.'
    },
    {
      cat: 'Network',
      q: 'At Layer 3, what information is most important for routing traffic from your browser toward AWS EC2?',
      opts: ['Source and destination IP addresses', 'Source and destination MAC addresses only', 'TLS certificate issuer', 'HTML element IDs'],
      ans: 0,
      exp: 'IP addresses are what routers use to move packets across networks. MAC addresses matter locally on the current link.'
    },
    {
      cat: 'MTU',
      q: 'A payload is 2200 bytes. With TCP/IP overhead of 40 bytes and Ethernet MTU 1500, how many fragments are needed?',
      opts: ['1', '2', '3', '4'],
      ans: 1,
      exp: 'The MSS is 1460 bytes, so 2200 bytes of payload needs two pieces: 1460 bytes and 740 bytes.'
    },
    {
      cat: 'Link',
      q: 'Which choice belongs most directly to the Data Link layer?',
      opts: ['Ethernet framing and FCS/CRC checking', 'REST API route naming', 'TLS certificate renewal', 'Browser DOM rendering'],
      ans: 0,
      exp: 'The Data Link layer handles local framing, MAC addressing, and frame validation such as CRC checks.'
    },
    {
      cat: 'Project',
      q: 'Why does this lesson connect networking to your own deployment instead of only memorizing definitions?',
      opts: ['Because Unit 4 wants students to apply networking concepts to real computing systems', 'Because TCP/IP has no definitions', 'Because OSI replaced all projects', 'Because Java leaderboards are required for packet delivery'],
      ans: 0,
      exp: 'The strongest Unit 4 understanding comes from applying the model to a real system you built and deployed, not just naming layers.'
    },
    {
      cat: 'Physical',
      q: 'What is happening at the Physical layer when your request finally leaves the machine?',
      opts: ['Bits are transmitted as electrical, optical, or radio signals', 'SQL rows are joined', 'HTTP headers are parsed into JSON', 'NGINX chooses a color theme'],
      ans: 0,
      exp: 'The Physical layer is where the raw bitstream becomes a signal traveling across actual hardware media.'
    }
  ];

  let quizDeck = [];
  let qIdx = 0;
  let qScore = 0;
  let qAnswered = false;

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  window.initQuiz = function () {
    if (el('quizContainer') && el('quizContainer').innerHTML) return;
    quizDeck = shuffle(QUIZ_POOL).slice(0, 10);
    qIdx = 0;
    qScore = 0;
    renderQ();
  };

  function renderQ() {
    const c = el('quizContainer');
    if (!c) return;
    if (qIdx >= quizDeck.length) {
      const pct = Math.round((qScore / quizDeck.length) * 100);
      const msg = pct >= 80
        ? '<p style="color:#34d399;margin-top:8px">&#9733; Pop-quiz ready. You can explain Unit 4 with project evidence, not just vocabulary.</p>'
        : pct >= 50
          ? '<p style="color:#fbbf24;margin-top:8px">&#128218; Mid-range score. Replay the mission and MTU lab to tighten the weak spots.</p>'
          : '<p style="color:#94a3b8;margin-top:8px">Another pass will help. Focus on model comparison, encapsulation order, and MTU math.</p>';
      c.innerHTML = '<div class="quiz-score"><div class="qs-num">' + qScore + '/' + quizDeck.length + '</div><p style="color:#94a3b8;margin-top:8px">' + pct + '% mastery on the pop quiz review</p>' + msg + '<button class="btn btn-gold" style="margin-top:18px" onclick="resetQuiz()">Retry Quiz</button></div>';
      return;
    }

    qAnswered = false;
    const q = quizDeck[qIdx];
    c.innerHTML =
      '<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-size:0.78rem;color:#475569;margin-bottom:8px"><span>Question ' + (qIdx + 1) + ' / ' + quizDeck.length + '</span><span>Category: ' + q.cat + '</span><span>Score: ' + qScore + '</span></div>' +
      '<div class="quiz-q"><h4>' + q.q + '</h4><div class="quiz-opts">' +
      q.opts.map((o, i) => '<button class="qopt" onclick="answerQuiz(' + i + ')">' + o + '</button>').join('') +
      '</div><div class="quiz-exp" id="quizExp"><strong>Explanation:</strong> ' + q.exp + '</div></div>';
  }

  window.answerQuiz = function (i) {
    if (qAnswered) return;
    qAnswered = true;
    const q = quizDeck[qIdx];
    document.querySelectorAll('.qopt').forEach((b, j) => {
      if (j === q.ans) b.classList.add('correct');
      else if (j === i) b.classList.add('wrong');
      b.disabled = true;
    });
    const exp = el('quizExp');
    if (exp) exp.classList.add('show');
    if (i === q.ans) qScore++;
    setTimeout(() => {
      qIdx++;
      renderQ();
    }, 1900);
  };

  window.resetQuiz = function () {
    qIdx = 0;
    qScore = 0;
    quizDeck = shuffle(QUIZ_POOL).slice(0, 10);
    const c = el('quizContainer');
    if (c) c.innerHTML = '';
    renderQ();
  };

  /* ================================================================
     MTU LAB
     ================================================================ */
  window.updateMTU = function () {
    const payloadEl = el('mtuPayload');
    if (!payloadEl) return;

    const payload = parseInt(payloadEl.value, 10);
    if (el('mtuPayloadVal')) el('mtuPayloadVal').textContent = payload + ' B';

    const tcpHdr = 20;
    const ipHdr = 20;
    const ethHdr = 14;
    const ethFcs = 4;
    const mss = 1460;
    const needsFrag = payload > mss;
    const frags = needsFrag ? Math.ceil(payload / mss) : 1;
    const fragmentPayloads = [];

    let remaining = payload;
    while (remaining > 0) {
      const part = Math.min(mss, remaining);
      fragmentPayloads.push(part);
      remaining -= part;
    }

    const firstPayload = fragmentPayloads[0] || 0;
    const ipPkt = firstPayload + tcpHdr + ipHdr;
    const frame = ipPkt + ethHdr + ethFcs;
    const segs = [
      { label: 'Eth Hdr', bytes: ethHdr, col: '#8b5cf6', tc: 'white' },
      { label: 'IP Hdr', bytes: ipHdr, col: '#10b981', tc: 'white' },
      { label: 'TCP Hdr', bytes: tcpHdr, col: '#3b82f6', tc: 'white' },
      { label: 'Payload', bytes: firstPayload, col: '#f59e0b', tc: '#1e3a5f' },
      { label: 'FCS', bytes: ethFcs, col: '#475569', tc: 'white' },
    ];

    const viz = el('mtuFrameViz');
    if (viz) {
      viz.innerHTML = segs.map(sg =>
        '<div class="mf-seg" style="background:' + sg.col + ';flex:' + sg.bytes + ';color:' + sg.tc + '"><strong>' + sg.label + '</strong><span>' + sg.bytes + 'B</span></div>'
      ).join('');
    }

    const lbl = el('mtuFrameLabel');
    if (lbl) {
      lbl.innerHTML = 'Frame: <strong>' + frame + 'B</strong> &nbsp;|&nbsp; IP packet: <strong>' + ipPkt + 'B</strong> &nbsp;|&nbsp; MTU check: ' +
        (ipPkt <= 1500
          ? '<span style="color:#34d399">OK (' + ipPkt + ' <= 1500)</span>'
          : '<span style="color:#ef4444">Exceeds MTU</span>') +
        ' &nbsp;|&nbsp; ' +
        (needsFrag
          ? '<span style="color:#f59e0b">' + frags + ' fragments required</span>'
          : '<span style="color:#34d399">No fragmentation needed</span>');
    }

    const warn = el('mtuWarn');
    if (warn) {
      if (needsFrag) {
        warn.classList.add('show');
        const fc = el('mtuFragCount');
        if (fc) fc.textContent = frags;
      } else {
        warn.classList.remove('show');
      }
    }

    const quizCheck = el('mtuQuizCheck');
    if (quizCheck) {
      quizCheck.innerHTML = needsFrag
        ? 'This payload is too large for one TCP segment on Ethernet. A Unit 4 pop quiz should expect you to compute <strong>' + frags + '</strong> fragments and explain why.'
        : 'This payload fits under the 1460B MSS, so it can travel in a single TCP segment inside one Ethernet frame.';
    }

    const plan = el('mtuFragmentPlan');
    if (plan) {
      const sizes = fragmentPayloads.map((size, idx) => 'Fragment ' + (idx + 1) + ': ' + size + 'B payload').join('<br>');
      plan.innerHTML = sizes + '<br><span style="color:#64748b">Each fragment still needs its own 20B TCP + 20B IP overhead.</span>';
    }

    const flow = el('mtuEncapFlow');
    if (flow) {
      flow.innerHTML = 'Application payload ' + payload + 'B -> TCP segment(s) -> IP packet(s) -> Ethernet frame(s) -> bits on the wire.<br><span style="color:#64748b">OSI gives you the language; TCP/IP is the practical stack doing the work.</span>';
    }
  };

  window.addEventListener('load', function () {
    updateMTU();
  });

})();

/* ================================================================
   INIT — check auth session on page load
   ================================================================ */

function checkExistingSession() {
  fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
    .then(r => { if (!r.ok) throw 0; return r.json(); })
    .then(d => { user = d; updateUI(); })
    .catch(() => {});
}

checkExistingSession();
</script>
</body>
</html>
