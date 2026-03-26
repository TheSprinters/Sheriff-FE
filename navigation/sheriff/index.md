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
    .game-layout { display: flex; gap: 16px; align-items: flex-start; }
    .game-canvas-wrap { position: relative; flex: 1; border-radius: 12px; overflow: hidden; background: #0b1a2e; border: 1px solid #1e3352; min-width: 0; }
    #netCanvas { display: block; width: 100%; height: auto; }
    .game-overlay { position: absolute; inset: 0; background: rgba(11,26,46,0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; text-align: center; padding: 24px; }
    .game-overlay h3 { font-size: 1.4rem; color: #fbbf24; }
    .game-overlay p { font-size: 0.85rem; color: #94a3b8; max-width: 360px; }
    .game-sidebar { width: 210px; flex-shrink: 0; display: flex; flex-direction: column; gap: 12px; }
    .gs-card { background: #162a46; border: 1px solid #1e3352; border-radius: 10px; padding: 14px; }
    .gs-card h4 { font-size: 0.75rem; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
    .gs-card p { font-size: 0.76rem; color: #94a3b8; line-height: 1.6; }
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

    /* Mobile */
    .mob-toggle { display: none; background: none; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; }
    @media (max-width: 900px) {
      nav { display: none; }
      .mob-toggle { display: block; }
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
    <h2>&#127918; Net Patrol &mdash; Networking Games</h2>
    <p>CB Unit 4 &bull; Learn OSI vs TCP/IP, MTU &amp; how this DSA site deploys from GitHub Pages &#8594; AWS EC2</p>
  </div>
  <div class="game-tabs">
    <button class="gtab active" onclick="switchGameTab(event,'patrol')">&#127914; Net Patrol (Game)</button>
    <button class="gtab" onclick="switchGameTab(event,'quiz')">&#9997;&#65039; OSI / TCP-IP Quiz</button>
    <button class="gtab" onclick="switchGameTab(event,'mtu')">&#128202; MTU Explorer</button>
  </div>

  <!-- TAB 1: Canvas Game -->
  <div class="gtab-panel" id="gtab-patrol">
    <div class="game-layout">
      <div class="game-canvas-wrap">
        <canvas id="netCanvas" width="780" height="440"></canvas>
        <div class="game-overlay" id="gameOverlay">
          <div style="font-size:2.8rem">&#128737;</div>
          <h3>Net Patrol</h3>
          <p>You're a DSA deputy escorting data packets through the 7-layer OSI stack &mdash; from GitHub Pages all the way down to the AWS EC2 Physical layer. Stop Hacker H4X from stealing your frames!</p>
          <p style="font-size:0.74rem;color:#64748b;margin-top:2px"><strong>&#8592;&#8594;</strong> Move &nbsp;|&nbsp; <strong>&#8593; / Space</strong> Jump &nbsp;|&nbsp; <strong>E</strong> Carry/Drop packet &nbsp;|&nbsp; <strong>F</strong> Fragment if &gt;1460B</p>
          <button class="btn btn-gold" style="margin-top:10px" onclick="startNetGame()">Start Game</button>
        </div>
      </div>
      <div class="game-sidebar">
        <div class="gs-card">
          <h4>&#127947; Score</h4>
          <div id="scoreDisplay">0</div>
          <div style="margin-top:6px;font-size:0.76rem;color:#475569">Level: <span id="levelDisplay">1</span> &nbsp;|&nbsp; Lives: <span id="livesDisplay">&#9733;&#9733;&#9733;</span></div>
        </div>
        <div class="gs-card">
          <h4>&#127758; Current Layer</h4>
          <p id="layerText">Start the game to see your current OSI layer here.</p>
        </div>
        <div class="gs-card">
          <h4>&#128736; Controls</h4>
          <p>&#8592;&#8594; Move &nbsp;|&nbsp; &#8593; Jump<br>E &mdash; Pick up / Drop packet<br>F &mdash; Fragment oversized packet<br><br>&#9733; <span style="color:#fbbf24">Gold badge</span> = You (Deputy)<br>&#128308; <span style="color:#ef4444">Red mask</span> = Hacker H4X<br>&#128994; <span style="color:#34d399">Router box</span> = NGINX proxy</p>
        </div>
        <div class="gs-card">
          <h4>&#128218; Mission</h4>
          <p id="missionText">Escort packets from Application (L7) down through all OSI layers to Physical (L1). Each layer adds headers. Fragment any packet &gt;1460B before Transport layer!</p>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: Quiz -->
  <div class="gtab-panel" id="gtab-quiz" style="display:none">
    <div id="quizContainer" style="max-width:720px;margin:0 auto"></div>
  </div>

  <!-- TAB 3: MTU Explorer -->
  <div class="gtab-panel" id="gtab-mtu" style="display:none">
    <div class="mtu-explorer">
      <p style="font-size:0.88rem;color:#94a3b8;max-width:700px">Adjust the payload size to see how an Ethernet frame is assembled. This mirrors how the DSA site's GitHub Pages frontend sends data over TCP/IP to the AWS EC2 Flask/Spring backend via NGINX.</p>
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
      <div class="mtu-info-grid">
        <div class="mtu-ic"><h5>Ethernet Frame (L2)</h5><p>14B Dest/Src MAC + EtherType<br>+ IP Packet (payload)<br>+ 4B FCS / CRC tail<br><strong>Max: 1518 B total</strong></p></div>
        <div class="mtu-ic"><h5>IP Packet (L3)</h5><p>20B IP Header<br>(TTL, src/dst IP, protocol)<br>+ TCP Segment<br><strong>Max: 1500 B (MTU)</strong></p></div>
        <div class="mtu-ic"><h5>TCP Segment (L4)</h5><p>20B TCP Header<br>(ports, seq, ack, flags)<br>+ Application Data<br><strong>Max payload: 1460 B (MSS)</strong></p></div>
        <div class="mtu-ic"><h5>Our Deployment Stack</h5><p>GitHub Pages JS <code>fetch()</code><br>&#8594; HTTPS via Certbot/TLS<br>&#8594; TCP &#8594; IP &#8594; Ethernet<br>&#8594; NGINX &#8594; Flask / Spring on EC2</p></div>
        <div class="mtu-ic"><h5>OSI Model (7 layers)</h5><p>7: Application (HTTP/DNS)<br>6: Presentation (TLS/SSL)<br>5: Session (WebSocket)<br>4: Transport (TCP/UDP)<br>3: Network (IP routing)<br>2: Data Link (Ethernet)<br>1: Physical (signals)</p></div>
        <div class="mtu-ic"><h5>TCP/IP Model (5 layers)</h5><p>5: Application (L5+L6+L7)<br>4: Transport (TCP/UDP)<br>3: Internet (IP)<br>2: Link (Ethernet/Wi-Fi)<br>1: Physical (bits/signals)<br><br><em>OSI is a guideline (7);<br>TCP/IP is the standard (5).</em></p></div>
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

el('faqSearch').addEventListener('input', function() {
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
  { label: 'Net Patrol',          target: '#games' },
  { label: 'Networking Game',     target: '#games' },
  { label: 'OSI Quiz',            target: '#games' },
  { label: 'MTU Explorer',        target: '#games' },
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
  el('searchInput').value = '';
}

el('searchInput').addEventListener('input', function() {
  const q = this.value.trim(), drop = el('searchDrop');
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
  if (!e.target.closest('.search-box')) el('searchDrop').classList.remove('open');
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
  window.switchGameTab = function (e, tab) {
    document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
    e.currentTarget.classList.add('active');
    document.querySelectorAll('.gtab-panel').forEach(p => p.style.display = 'none');
    const panel = el('gtab-' + tab);
    if (panel) panel.style.display = 'block';
    if (tab === 'quiz') initQuiz();
    if (tab === 'mtu') updateMTU();
    if (tab !== 'patrol') { gameRunning = false; if (animId) cancelAnimationFrame(animId); }
  };

  /* ================================================================
     NET PATROL — Canvas Game
     Player = Deputy, NPC = NGINX Router Ron, AI NPC = Hacker H4X
     Teach: OSI layers, headers, MTU / fragmentation
     ================================================================ */
  let ctx = null, animId = null, gameRunning = false;
  const gState = { score: 0, lives: 3, level: 1, delivered: 0, lost: 0 };

  /* 7 OSI layers mapped to canvas y-positions (canvas height 440) */
  const OSI = [
    { id:7, name:'Application', y:0,   h:52, col:'#f59e0b', tcp:'Application',  desc:'HTTP/DNS — JS fetch() from GitHub Pages'   },
    { id:6, name:'Presentation',y:52,  h:42, col:'#d97706', tcp:'(App layer)',   desc:'TLS/SSL — Certbot encrypts the payload'    },
    { id:5, name:'Session',     y:94,  h:42, col:'#b45309', tcp:'(App layer)',   desc:'Session mgmt — WebSocket / keep-alive'     },
    { id:4, name:'Transport',   y:136, h:68, col:'#3b82f6', tcp:'Transport',     desc:'TCP — 20B header, MSS = 1460B max payload' },
    { id:3, name:'Network',     y:204, h:68, col:'#10b981', tcp:'Internet',      desc:'IP Routing — src→ EC2 3.233.212.71'        },
    { id:2, name:'Data Link',   y:272, h:68, col:'#8b5cf6', tcp:'Link',          desc:'Ethernet Frame — 14B header + 4B FCS/CRC'  },
    { id:1, name:'Physical',    y:340, h:100,col:'#475569', tcp:'Link',          desc:'Electrical / Optical signals — raw bits!'  },
  ];

  /* Entities */
  const player = { x:80,  y:250, w:28, h:36, vx:0, vy:0, onGround:false, carrying:null, speed:3.5, jump:-11, invince:0 };
  const hacker  = { x:420, y:50,  w:26, h:34, vx:1.2, vy:0, onGround:false, carrying:null };
  const routerNpc = { x:650, y:376, w:44, h:40, msg:'', msgT:0 };
  let packets = [], fx = [];
  const keys = {};

  /* ---- Rounded rect polyfill ---- */
  function rr(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x+r, y); c.lineTo(x+w-r, y); c.quadraticCurveTo(x+w, y, x+w, y+r);
    c.lineTo(x+w, y+h-r); c.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    c.lineTo(x+r, y+h); c.quadraticCurveTo(x, y+h, x, y+h-r);
    c.lineTo(x, y+r); c.quadraticCurveTo(x, y, x+r, y); c.closePath();
  }

  function mkPkt(x, y) {
    const sz = Math.floor(Math.random() * 2200 + 300);
    return { x, y, w:48, h:26, vy:0.4, vx:0, layer:7, headers:[], escore:false, stolen:false, done:false, sz, frag:false, frags:1 };
  }
  function pTotal(p) { return p.sz + p.headers.reduce((s,h)=>s+h.b,0); }
  function pNeedsFrag(p) { return p.sz > 1460 && p.layer <= 4 && !p.frag; }

  function addScore(n) { gState.score += n; if (el('scoreDisplay')) el('scoreDisplay').textContent = gState.score; }
  function spawnFX(x, y, col, txt) { fx.push({ x, y, col, txt, life:90, vy:-1.0 }); }

  function physics(e) {
    e.vy = Math.min(e.vy + 0.48, 14);
    e.x += e.vx; e.y += e.vy;
    if (e.y >= 440 - e.h) { e.y = 440 - e.h; e.vy = 0; e.onGround = true; } else { e.onGround = false; }
    e.x = Math.max(0, Math.min(780 - e.w, e.x));
  }

  function layerAt(y) {
    for (let i = OSI.length - 1; i >= 0; i--) if (y + 20 >= OSI[i].y) return OSI[i];
    return OSI[0];
  }

  function updatePlayer() {
    player.vx = 0;
    if (keys['ArrowLeft']  || keys['a']) player.vx = -player.speed;
    if (keys['ArrowRight'] || keys['d']) player.vx =  player.speed;
    if ((keys['ArrowUp'] || keys[' '] || keys['w']) && player.onGround) player.vy = player.jump;
    physics(player);
    if (player.carrying) {
      player.carrying.x = player.x + player.w/2 - player.carrying.w/2;
      player.carrying.y = player.y - player.carrying.h - 3;
    }
    if (player.invince > 0) player.invince--;
    const lay = layerAt(player.y);
    if (lay && el('layerText')) {
      el('layerText').innerHTML = '<strong>OSI Layer ' + lay.id + ': ' + lay.name + '</strong><br>TCP/IP: ' + lay.tcp + '<br><span style="color:#64748b">' + lay.desc + '</span>';
    }
  }

  function updateHacker() {
    let tgt = null, minD = 9999;
    packets.forEach(p => {
      if (!p.stolen && !p.done && !p.escore) {
        const d = Math.hypot(p.x - hacker.x, p.y - hacker.y);
        if (d < minD) { minD = d; tgt = p; }
      }
    });
    if (tgt && !hacker.carrying) {
      const dx = tgt.x - hacker.x, dy = tgt.y - hacker.y, dist = Math.hypot(dx, dy);
      const spd = 1.0 + gState.level * 0.22;
      hacker.vx = (dx / dist) * spd;
      if (dist < 25 && hacker.onGround && dy < -35) hacker.vy = -9;
      if (dist < 30 && tgt !== player.carrying) {
        hacker.carrying = tgt; tgt.stolen = true;
        spawnFX(tgt.x, tgt.y, '#ef4444', 'STOLEN!');
        setRouterMsg('Stop the hacker! Press E near a packet to grab it!');
        gState.lost++; loseLife();
      }
    } else if (hacker.carrying) {
      hacker.vx = -2.8;
      hacker.carrying.x = hacker.x; hacker.carrying.y = hacker.y - 30;
      if (hacker.x <= 4) hacker.carrying = null;
    }
    physics(hacker);
  }

  function updatePackets() {
    packets.forEach(p => {
      if (p.escore || p.stolen || p.done) return;
      p.vy = Math.min(p.vy + 0.03, 1.3); p.y += p.vy;
      OSI.forEach(lay => {
        if (p.y + p.h >= lay.y + lay.h && p.layer > lay.id) {
          p.layer = lay.id;
          const adds = { 4:20, 3:20, 2:18 };
          if (adds[lay.id]) {
            p.headers.push({ b: adds[lay.id] });
            spawnFX(p.x + p.w/2, p.y, lay.col, '+' + adds[lay.id] + 'B hdr');
          }
        }
      });
      if (p.y + p.h >= 438) deliverPacket(p);
    });
    const active = packets.filter(p => !p.done && !p.stolen).length;
    if (active < 4 + gState.level && Math.random() < 0.006 + gState.level * 0.002) {
      packets.push(mkPkt(60 + Math.random() * 620, 5));
    }
    packets = packets.filter(p => p.y < 510 && !(p.stolen && !hacker.carrying));
  }

  function deliverPacket(p) {
    if (p.done) return;
    p.done = true; gState.delivered++;
    const pts = p.frag ? 150 : 100;
    addScore(pts);
    spawnFX(p.x + p.w/2, p.y, '#34d399', '+' + pts + ' pts!');
    setRouterMsg('Packet delivered to AWS EC2! +' + pts + ' pts');
    if (gState.delivered % 5 === 0) {
      gState.level++;
      if (el('levelDisplay')) el('levelDisplay').textContent = gState.level;
      setRouterMsg('Level ' + gState.level + '! Hacker H4X is faster now!');
    }
  }

  function loseLife() {
    gState.lives = Math.max(0, gState.lives - 1);
    if (el('livesDisplay')) el('livesDisplay').innerHTML = '&#9733;'.repeat(gState.lives) + '&#9734;'.repeat(3 - gState.lives);
    if (gState.lives <= 0) endNetGame();
  }

  function setRouterMsg(m) { routerNpc.msg = m; routerNpc.msgT = 240; }

  /* ---- Drawing ---- */
  function drawBg() {
    ctx.fillStyle = '#0b1a2e'; ctx.fillRect(0, 0, 780, 440);
    OSI.forEach(l => {
      ctx.fillStyle = l.col + '16'; ctx.fillRect(0, l.y, 780, l.h);
      ctx.fillStyle = l.col + 'bb'; ctx.font = 'bold 10px monospace';
      ctx.fillText('L' + l.id + ' ' + l.name, 5, l.y + l.h - 5);
      ctx.strokeStyle = l.col + '33'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, l.y + l.h); ctx.lineTo(780, l.y + l.h); ctx.stroke();
    });
    ctx.strokeStyle = 'rgba(96,165,250,0.03)'; ctx.lineWidth = 1;
    for (let x = 0; x < 780; x += 32) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,440); ctx.stroke(); }
  }

  function drawPlayer() {
    const {x,y,w,h} = player;
    if (player.invince > 0 && Math.floor(player.invince/5) % 2) return;
    ctx.fillStyle = '#1e3a5f'; ctx.fillRect(x+4, y+12, w-8, h-12);
    ctx.fillStyle = '#d4a574'; ctx.beginPath(); ctx.ellipse(x+w/2, y+7, 8, 8, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#0f2040'; ctx.fillRect(x+2, y-1, w-4, 9); ctx.fillRect(x-1, y+4, w+2, 5);
    ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 13px serif'; ctx.fillText('★', x+8, y+26);
    ctx.fillStyle = '#1e3a5f'; ctx.fillRect(x-1, y+16, 5, player.carrying?10:14); ctx.fillRect(x+w-4, y+16, 5, player.carrying?10:14);
    ctx.fillStyle = '#0f2040'; ctx.fillRect(x+6, y+h-11, 7, 11); ctx.fillRect(x+w-13, y+h-11, 7, 11);
  }

  function drawHacker() {
    const {x,y,w,h} = hacker;
    ctx.fillStyle = '#7f1d1d'; ctx.fillRect(x+4, y+12, w-8, h-12);
    ctx.fillStyle = '#1c1c1c'; ctx.beginPath(); ctx.ellipse(x+w/2, y+7, 8, 8, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#ef4444'; ctx.fillRect(x+3, y+3, 5, 3); ctx.fillRect(x+w-8, y+3, 5, 3);
    ctx.fillStyle = '#ef4444'; ctx.font = 'bold 7px monospace'; ctx.fillText('H4X', x+2, y-3);
    ctx.fillStyle = '#7f1d1d'; ctx.fillRect(x-1, y+16, 5, 14); ctx.fillRect(x+w-4, y+16, 5, 14);
    ctx.fillStyle = '#450a0a'; ctx.fillRect(x+5, y+h-11, 7, 11); ctx.fillRect(x+w-12, y+h-11, 7, 11);
  }

  function drawRouter() {
    const {x,y,w,h} = routerNpc;
    ctx.fillStyle = '#0f2040'; ctx.strokeStyle = '#34d399'; ctx.lineWidth = 2;
    rr(ctx, x, y, w, h, 5); ctx.fill(); ctx.stroke();
    [[x+8,y,x+5,y-14],[x+22,y,x+21,y-11],[x+37,y,x+39,y-13]].forEach(([ax,ay,bx,by]) => {
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(bx,by); ctx.stroke();
      ctx.fillStyle = Math.random()>0.5?'#34d399':'#10b981';
      ctx.beginPath(); ctx.arc(bx, by, 3, 0, Math.PI*2); ctx.fill();
    });
    ctx.fillStyle = '#34d399'; ctx.font = 'bold 8px monospace'; ctx.fillText('NGINX', x+5, y+16);
    ctx.fillStyle = '#64748b'; ctx.font = '7px monospace'; ctx.fillText('Router Ron', x+1, y+28);
    ctx.fillStyle = Date.now()%900<450 ? '#34d399' : '#065f46';
    ctx.beginPath(); ctx.arc(x+37, y+10, 4, 0, Math.PI*2); ctx.fill();
    if (routerNpc.msgT > 0 && routerNpc.msg) {
      routerNpc.msgT--;
      const alpha = Math.min(1, routerNpc.msgT/40);
      const bw=210, bh=40, bx=x-bw-8, by=y-14;
      ctx.fillStyle = 'rgba(22,42,70,'+(alpha*0.95)+')';
      ctx.strokeStyle = 'rgba(52,211,153,'+alpha+')'; ctx.lineWidth = 1;
      rr(ctx, bx, by, bw, bh, 6); ctx.fill(); ctx.stroke();
      ctx.fillStyle = 'rgba(200,220,255,'+alpha+')'; ctx.font = '8.5px sans-serif';
      const lines = routerNpc.msg.match(/.{1,32}(\s|$)/g) || [routerNpc.msg];
      lines.slice(0,2).forEach((ln,i) => ctx.fillText(ln.trim(), bx+8, by+14+i*13));
    }
  }

  function drawPackets() {
    packets.forEach(p => {
      if (p.stolen || p.done) return;
      if (pNeedsFrag(p)) { ctx.shadowColor='#f59e0b'; ctx.shadowBlur=10; }
      ctx.fillStyle = p.escore ? '#1d4ed8' : '#0f2447';
      ctx.strokeStyle = p.escore ? '#93c5fd' : '#3b82f6'; ctx.lineWidth = 1.5;
      rr(ctx, p.x, p.y, p.w, p.h, 4); ctx.fill(); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 8px monospace';
      ctx.fillText(pTotal(p)+'B', p.x+4, p.y+11);
      if (pNeedsFrag(p)) { ctx.fillStyle='#f59e0b'; ctx.font='bold 7px monospace'; ctx.fillText('⚠ FRAG!',p.x+3,p.y+22); }
      else if (p.frag) { ctx.fillStyle='#34d399'; ctx.font='7px monospace'; ctx.fillText(p.frags+'x',p.x+p.w-18,p.y+22); }
      let hx = p.x + p.w - 3;
      p.headers.forEach(hdr => { const hcols={4:'#3b82f6',3:'#10b981',2:'#8b5cf6'}; ctx.fillStyle=(hcols[hdr.b===20&&p.layer<=4?4:hdr.b===20?3:2]||'#60a5fa')+'88'; ctx.fillRect(hx-3,p.y+2,3,p.h-4); hx-=4; });
    });
  }

  function drawFX() {
    fx = fx.filter(f => f.life > 0);
    fx.forEach(f => {
      f.y += f.vy; f.life--;
      const alpha = f.life/90;
      ctx.globalAlpha = alpha; ctx.fillStyle = f.col;
      ctx.font = 'bold 10px monospace'; ctx.fillText(f.txt||'+', f.x, f.y);
      ctx.globalAlpha = 1;
    });
  }

  function drawHUD() {
    const lay = layerAt(player.y);
    if (lay) {
      ctx.fillStyle = 'rgba(15,32,64,0.88)'; rr(ctx,596,5,178,38,6); ctx.fill();
      ctx.fillStyle = lay.col; ctx.font = 'bold 10px monospace'; ctx.fillText('Layer '+lay.id+': '+lay.name, 603, 20);
      ctx.fillStyle = '#475569'; ctx.font = '9px monospace'; ctx.fillText('TCP/IP: '+lay.tcp, 603, 35);
    }
    ctx.fillStyle = 'rgba(15,32,64,0.8)'; rr(ctx,5,5,168,24,5); ctx.fill();
    ctx.fillStyle = '#64748b'; ctx.font = '9px monospace';
    ctx.fillText('Active: '+packets.filter(p=>!p.done&&!p.stolen).length+' | Delivered: '+gState.delivered, 10, 19);
    ctx.fillStyle = '#1e3352'; ctx.font = '8px monospace';
    ctx.fillText('MTU=1500B  MSS=1460B  Eth frame=1518B', 6, 437);
  }

  function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, 780, 440);
    drawBg(); updatePlayer(); updateHacker(); updatePackets();
    drawPackets(); drawRouter(); drawPlayer(); drawHacker(); drawFX(); drawHUD();
    animId = requestAnimationFrame(gameLoop);
  }

  let eDown = false, fDown = false;
  document.addEventListener('keydown', e => {
    keys[e.key] = true;
    if (!eDown && (e.key==='e'||e.key==='E')) { eDown=true; doInteract(); }
    if (!fDown && (e.key==='f'||e.key==='F')) { fDown=true; doFragment(); }
    if (gameRunning && ['ArrowUp','ArrowLeft','ArrowRight',' '].includes(e.key)) e.preventDefault();
  });
  document.addEventListener('keyup', e => {
    keys[e.key] = false;
    if (e.key==='e'||e.key==='E') eDown=false;
    if (e.key==='f'||e.key==='F') fDown=false;
  });

  function doInteract() {
    if (player.carrying) {
      player.carrying.escore = false; player.carrying.vy = 0.5; player.carrying = null;
    } else {
      packets.forEach(p => {
        if (!p.stolen && !p.done && !p.escore &&
            Math.abs(p.x+p.w/2 - (player.x+player.w/2)) < 44 &&
            Math.abs(p.y+p.h/2 - (player.y+player.h/2)) < 44) {
          player.carrying = p; p.escore = true;
        }
      });
    }
  }

  function doFragment() {
    const p = player.carrying;
    if (!p || !pNeedsFrag(p)) return;
    p.frags = Math.ceil(p.sz / 1460); p.frag = true; p.sz = 1460;
    addScore(25);
    spawnFX(p.x+p.w/2, p.y, '#f59e0b', 'FRAG x'+p.frags+'!');
    setRouterMsg('Fragmented into '+p.frags+' pieces! MTU 1500 — good thinking, Deputy!');
  }

  window.startNetGame = function () {
    const c = document.getElementById('netCanvas'); if (!c) return;
    ctx = c.getContext('2d');
    Object.assign(gState, {score:0, lives:3, level:1, delivered:0, lost:0});
    packets = []; fx = [];
    Object.assign(player, {x:80, y:250, vx:0, vy:0, carrying:null, invince:0});
    Object.assign(hacker, {x:420, y:50, vx:1.2, vy:0, carrying:null});
    if (el('scoreDisplay'))  el('scoreDisplay').textContent = '0';
    if (el('levelDisplay'))  el('levelDisplay').textContent = '1';
    if (el('livesDisplay'))  el('livesDisplay').innerHTML = '&#9733;&#9733;&#9733;';
    /* Spawn initial packets — one oversized to teach fragmentation */
    packets.push(mkPkt(180, 8));
    packets.push(mkPkt(400, 8));
    const bigPkt = mkPkt(580, 8); bigPkt.sz = 1900; packets.push(bigPkt);
    const ov = el('gameOverlay'); if (ov) ov.style.display = 'none';
    setRouterMsg('Route packets down through all 7 OSI layers to deliver data to AWS EC2!');
    gameRunning = true;
    if (animId) cancelAnimationFrame(animId);
    gameLoop();
  };

  window.endNetGame = function () {
    gameRunning = false;
    const ov = el('gameOverlay'); if (!ov) return;
    ov.style.display = 'flex'; ov.style.flexDirection = 'column';
    ov.style.alignItems = 'center'; ov.style.justifyContent = 'center'; ov.style.gap = '10px';
    ov.innerHTML = '<div style="font-size:2.2rem">&#128737;</div>' +
      '<h3 style="color:#fbbf24">Game Over!</h3>' +
      '<p>Score: <strong>' + gState.score + '</strong> &nbsp;|&nbsp; Delivered: <strong>' + gState.delivered + '</strong> &nbsp;|&nbsp; Level: <strong>' + gState.level + '</strong></p>' +
      '<p style="font-size:0.76rem;color:#475569">Packets Lost: ' + gState.lost + '</p>' +
      '<button class="btn btn-gold" style="margin-top:12px" onclick="startNetGame()">Play Again</button>';
  };

  /* ================================================================
     OSI / TCP-IP QUIZ
     ================================================================ */
  const QUIZ = [
    { q:'How many layers does the OSI reference model have?',
      opts:['4','5','7','9'], ans:2,
      exp:'OSI (Open Systems Interconnection) has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. It is a guideline/reference. TCP/IP is the practical standard with 4–5 layers.' },
    { q:'In TCP/IP (5-layer model), what happens to OSI Layers 5, 6, and 7?',
      opts:['They are removed entirely','All three merge into the TCP/IP Application layer','They become the Transport layer','They stay as separate sub-layers'], ans:1,
      exp:'TCP/IP merges OSI Layers 5 (Session), 6 (Presentation), and 7 (Application) into one Application layer. That is why our HTTPS (TLS = Presentation) and WebSocket sessions are all "Application layer" in TCP/IP terms.' },
    { q:'What is the Maximum Transmission Unit (MTU) for standard Ethernet?',
      opts:['512 bytes','1024 bytes','1500 bytes','9000 bytes'], ans:2,
      exp:'Standard Ethernet MTU is 1500 bytes — the maximum IP packet size. With 20B IP header + 20B TCP header = 40B overhead, the TCP Maximum Segment Size (MSS) is 1460 bytes of application payload.' },
    { q:'In our DSA project, which tool provides OSI Layer 6 (Presentation / TLS encryption)?',
      opts:['Python Flask API','NGINX reverse proxy','Certbot / Let\'s Encrypt TLS','GitHub Pages CDN'], ans:2,
      exp:'Certbot manages SSL/TLS certificates (Let\'s Encrypt), providing the encryption that corresponds to OSI Layer 6 Presentation. NGINX uses these certs to terminate HTTPS connections.' },
    { q:'How large is a standard Ethernet frame header (destination MAC + source MAC + EtherType)?',
      opts:['4 bytes','8 bytes','14 bytes','20 bytes'], ans:2,
      exp:'Ethernet header = 6B destination MAC + 6B source MAC + 2B EtherType = 14B. There is also a 4B FCS/CRC tail, so total Ethernet overhead is 18B. Max Ethernet frame = 14+1500+4 = 1518B.' },
    { q:'What role does NGINX play in our deployment (OSI perspective)?',
      opts:['It is the SQL database','It is a Reverse Proxy operating at L4/L7 boundary','It compiles the Java Spring code','It manages GitHub Actions CI/CD'], ans:1,
      exp:'NGINX is a reverse proxy and orchestrator. It receives TCP traffic on port 80/443 (L4 Transport) and routes HTTP requests (L7 Application) to the correct Docker container. It sits at the Transport ↔ Application boundary.' },
    { q:'When a JS fetch() request travels DOWN the OSI stack, what does Layer 3 (Network) add?',
      opts:['MAC addresses','Port numbers','Source & destination IP addresses','TLS certificate'], ans:2,
      exp:'Layer 3 (Network / IP) adds the 20-byte IP header containing source IP (your home) and destination IP (AWS EC2 3.233.212.71). This enables routing across the internet through multiple routers.' },
    { q:'Correct order of ENCAPSULATION going DOWN from the application:',
      opts:['IP packet → TCP segment → Ethernet frame → Data','Data → TCP segment → IP packet → Ethernet frame','Ethernet frame → IP packet → TCP segment → Data','Data → IP packet → Ethernet frame → TCP segment'], ans:1,
      exp:'Encapsulation: Application Data → TCP wraps with 20B header (segment) → IP wraps with 20B header (packet) → Ethernet wraps with 14B header + 4B FCS (frame) → Physical layer sends as bits.' },
    { q:'OSI Layer 5 (Session) is primarily responsible for:',
      opts:['Routing packets between networks','Establishing, managing, and terminating application dialogues (e.g. WebSockets)','Encrypting payload data','Converting frames to electrical signals'], ans:1,
      exp:'OSI Layer 5 (Session) manages communication sessions between applications — things like WebSocket persistent connections. In TCP/IP this is folded into the Application layer alongside Presentation and Application.' },
    { q:'A payload is 2200 bytes. With MTU=1500 and TCP/IP overhead of 40B, how many TCP fragments are needed?',
      opts:['1','2','3','4'], ans:1,
      exp:'MSS = 1500 - 40 = 1460B. Fragments: ⌈2200/1460⌉ = 2. Fragment 1 carries 1460B, Fragment 2 carries 740B. Each gets its own IP+TCP headers. Press F in Net Patrol to practice this!' },
  ];
  let qIdx = 0, qScore = 0, qAnswered = false;

  window.initQuiz = function () {
    if (el('quizContainer') && el('quizContainer').innerHTML) return;
    qIdx = 0; qScore = 0; renderQ();
  };

  function renderQ() {
    const c = el('quizContainer'); if (!c) return;
    if (qIdx >= QUIZ.length) {
      const pct = Math.round(qScore/QUIZ.length*100);
      const msg = pct>=80?'<p style="color:#34d399;margin-top:8px">&#9733; Expert Network Deputy! Your packets route flawlessly.</p>'
                 :pct>=50?'<p style="color:#fbbf24;margin-top:8px">&#128218; Solid — review the OSI/TCP-IP blog for the ones you missed.</p>'
                         :'<p style="color:#94a3b8;margin-top:8px">Keep studying the networking stack blog and try again!</p>';
      c.innerHTML = '<div class="quiz-score"><div class="qs-num">'+qScore+'/'+QUIZ.length+'</div><p style="color:#94a3b8;margin-top:8px">'+pct+'% — '+qScore+' correct out of '+QUIZ.length+'</p>'+msg+'<button class="btn btn-gold" style="margin-top:18px" onclick="resetQuiz()">Retry Quiz</button></div>';
      return;
    }
    qAnswered = false;
    const q = QUIZ[qIdx];
    c.innerHTML = '<div style="text-align:right;font-size:0.78rem;color:#475569;margin-bottom:8px">Question '+(qIdx+1)+' / '+QUIZ.length+' &nbsp;|&nbsp; Score: '+qScore+'</div>'
      +'<div class="quiz-q"><h4>'+q.q+'</h4><div class="quiz-opts">'
      +q.opts.map((o,i)=>'<button class="qopt" onclick="answerQuiz('+i+')">'+o+'</button>').join('')
      +'</div><div class="quiz-exp" id="quizExp"><strong>Explanation:</strong> '+q.exp+'</div></div>';
  }

  window.answerQuiz = function (i) {
    if (qAnswered) return; qAnswered = true;
    const q = QUIZ[qIdx];
    document.querySelectorAll('.qopt').forEach((b,j) => {
      if (j===q.ans) b.classList.add('correct');
      else if (j===i) b.classList.add('wrong');
      b.disabled = true;
    });
    const exp = el('quizExp'); if (exp) exp.classList.add('show');
    if (i===q.ans) qScore++;
    setTimeout(() => { qIdx++; renderQ(); }, 1900);
  };

  window.resetQuiz = function () { qIdx=0; qScore=0; const c=el('quizContainer'); if(c)c.innerHTML=''; renderQ(); };

  /* ================================================================
     MTU EXPLORER
     ================================================================ */
  window.updateMTU = function () {
    const payloadEl = el('mtuPayload'); if (!payloadEl) return;
    const payload = parseInt(payloadEl.value);
    if (el('mtuPayloadVal')) el('mtuPayloadVal').textContent = payload + ' B';
    const tcpHdr=20, ipHdr=20, ethHdr=14, ethFcs=4, mss=1460;
    const needsFrag = payload > mss;
    const frags = needsFrag ? Math.ceil(payload/mss) : 1;
    const seg1Payload = needsFrag ? mss : payload;
    const ipPkt = seg1Payload + tcpHdr + ipHdr;
    const frame = ipPkt + ethHdr + ethFcs;
    const segs = [
      { label:'Eth Hdr', bytes:ethHdr, col:'#8b5cf6', tc:'white' },
      { label:'IP Hdr',  bytes:ipHdr,  col:'#10b981', tc:'white' },
      { label:'TCP Hdr', bytes:tcpHdr, col:'#3b82f6', tc:'white' },
      { label:'Payload', bytes:seg1Payload, col:'#f59e0b', tc:'#1e3a5f' },
      { label:'FCS',     bytes:ethFcs, col:'#475569', tc:'white' },
    ];
    const total = segs.reduce((s,sg)=>s+sg.bytes, 0);
    const viz = el('mtuFrameViz');
    if (viz) viz.innerHTML = segs.map(sg => '<div class="mf-seg" style="background:'+sg.col+';flex:'+sg.bytes+';color:'+sg.tc+'"><strong>'+sg.label+'</strong><span>'+sg.bytes+'B</span></div>').join('');
    const lbl = el('mtuFrameLabel');
    if (lbl) lbl.innerHTML = 'Frame: <strong>'+frame+'B</strong> &nbsp;|&nbsp; IP packet: <strong>'+ipPkt+'B</strong> &nbsp;|&nbsp; MTU check: '+(ipPkt<=1500?'<span style="color:#34d399">✓ OK ('+ipPkt+' ≤ 1500)</span>':'<span style="color:#ef4444">✗ Exceeds MTU</span>')+' &nbsp;|&nbsp; '+(needsFrag?'<span style="color:#f59e0b">Fragments: '+frags+'</span>':'<span style="color:#34d399">No fragmentation needed</span>');
    const warn = el('mtuWarn');
    if (warn) {
      if (needsFrag) { warn.classList.add('show'); const fc=el('mtuFragCount'); if(fc) fc.textContent=frags; }
      else warn.classList.remove('show');
    }
  };

  /* Auto-init MTU on page load so the diagram renders */
  window.addEventListener('load', function () { updateMTU(); });

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
