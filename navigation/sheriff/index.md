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
    .logo-badge { width: 38px; height: 38px; background: linear-gradient(135deg,#fbbf24,#d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.8rem; color: #1e3a5f; }
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

    /* Pathway guide */
    .pw-step { display: none; }
    .pw-step.active { display: block; }
    .pw-progress { display: flex; gap: 6px; margin-bottom: 24px; }
    .pw-dot { flex: 1; height: 5px; border-radius: 3px; background: #1e3352; transition: background 0.3s; }
    .pw-dot.done { background: #fbbf24; }
    .pw-dot.now { background: #60a5fa; }
    .pw-rank-display {
      display: flex; align-items: center; gap: 16px; background: rgba(251,191,36,0.05);
      border: 1px solid rgba(251,191,36,0.15); border-radius: 12px; padding: 16px 20px; margin-bottom: 20px;
    }
    .pw-rank-badge {
      width: 56px; height: 56px; background: linear-gradient(135deg,#fbbf24,#d97706); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; color: #1e3a5f; flex-shrink: 0;
    }
    .pw-rank-info h3 { font-size: 1.1rem; color: #fbbf24; margin: 0 0 2px; }
    .pw-rank-info p { font-size: 0.82rem; color: #94a3b8; margin: 0; }
    .pw-question { margin-bottom: 18px; }
    .pw-question label { display: block; font-size: 0.92rem; color: #e2e8f0; font-weight: 600; margin-bottom: 10px; }
    .pw-opts { display: grid; gap: 8px; }
    .pw-opt {
      padding: 12px 16px; border-radius: 10px; border: 1px solid #1e3352; background: rgba(255,255,255,0.02);
      color: #94a3b8; cursor: pointer; font-size: 0.85rem; transition: all 0.15s; text-align: left;
    }
    .pw-opt:hover { border-color: #3b82f6; color: #e2e8f0; background: rgba(59,130,246,0.06); }
    .pw-opt.selected { border-color: #fbbf24; color: #fbbf24; background: rgba(251,191,36,0.08); }
    .pw-goal-sel {
      width: 100%; padding: 12px 16px; background: #162a46; border: 1px solid #1e3352; border-radius: 10px;
      color: #e2e8f0; font-size: 0.9rem; outline: none; cursor: pointer;
    }
    .pw-goal-sel:focus { border-color: #fbbf24; }
    .pw-goal-sel option { background: #162a46; }
    .pw-nav { display: flex; gap: 10px; margin-top: 20px; }
    .pw-nav .btn { flex: 1; text-align: center; }
    .pw-result-card {
      background: #162a46; border: 1px solid #1e3352; border-radius: 14px; padding: 24px; margin-bottom: 16px;
    }
    .pw-result-card h3 { font-size: 1.1rem; color: #fbbf24; margin-bottom: 12px; }
    .pw-result-card h4 { font-size: 0.92rem; color: #60a5fa; margin: 14px 0 8px; }
    .pw-result-card p { font-size: 0.84rem; color: #94a3b8; line-height: 1.6; }
    .pw-result-card ul { padding-left: 18px; margin: 6px 0; }
    .pw-result-card li { font-size: 0.84rem; color: #cbd5e1; margin-bottom: 5px; line-height: 1.5; }
    .pw-result-card .highlight { color: #fbbf24; font-weight: 700; }
    .pw-act {
      background: rgba(59,130,246,0.04); border: 1px solid rgba(59,130,246,0.15); border-radius: 12px;
      padding: 18px; margin-bottom: 12px;
    }
    .pw-act h4 { font-size: 0.9rem; color: #60a5fa; margin: 0 0 6px; }
    .pw-act p { font-size: 0.82rem; color: #94a3b8; margin: 0 0 8px; }
    .pw-act .tag { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 6px; }
    .pw-act .tag-req { background: rgba(251,191,36,0.1); color: #fbbf24; }
    .pw-act .tag-rec { background: rgba(52,211,153,0.1); color: #34d399; }
    .pw-act .tag-opt { background: rgba(96,165,250,0.1); color: #60a5fa; }
    .pw-act .checklist { padding-left: 0; list-style: none; margin: 8px 0 0; }
    .pw-act .checklist li { font-size: 0.82rem; color: #cbd5e1; padding: 6px 0; border-bottom: 1px solid #1e3352; cursor: pointer; }
    .pw-act .checklist li:last-child { border-bottom: none; }
    .pw-act .checklist li::before { content: '\\2610 '; color: #475569; margin-right: 6px; }
    .pw-act .checklist li.checked::before { content: '\\2611 '; color: #34d399; }
    .pw-act .checklist li.checked { color: #64748b; text-decoration: line-through; }
    .pw-timeline {
      position: relative; padding-left: 24px; margin: 16px 0;
      border-left: 2px solid rgba(251,191,36,0.2);
    }
    .pw-tl-item { margin-bottom: 18px; position: relative; }
    .pw-tl-item::before {
      content: ''; position: absolute; left: -29px; top: 4px; width: 10px; height: 10px;
      background: #fbbf24; border-radius: 50%;
    }
    .pw-tl-item h4 { font-size: 0.88rem; color: #e2e8f0; margin: 0 0 4px; }
    .pw-tl-item p { font-size: 0.8rem; color: #94a3b8; margin: 0; }

    /* Section divider */
    .sec-divider { max-width: 1100px; margin: 0 auto; height: 1px; background: linear-gradient(90deg, transparent, rgba(251,191,36,0.15), transparent); }

    /* Scroll-to-top */
    .scroll-top {
      position: fixed; bottom: 22px; right: 90px; width: 40px; height: 40px;
      background: rgba(96,165,250,0.12); border: 1px solid rgba(96,165,250,0.3); border-radius: 50%;
      color: #60a5fa; font-size: 1rem; cursor: pointer; z-index: 1099;
      display: none; align-items: center; justify-content: center; transition: all 0.2s;
    }
    .scroll-top:hover { background: #3b82f6; color: #fff; }
    .scroll-top.show { display: flex; }

    /* Mobile menu overlay */
    .mob-menu {
      display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
      background: rgba(11,26,46,0.98); z-index: 999; flex-direction: column; padding: 24px;
      gap: 4px; overflow-y: auto;
    }
    .mob-menu.open { display: flex; }
    .mob-menu .nav-link { padding: 14px 18px; font-size: 1rem; border-radius: 10px; }
    .mob-menu .nav-link:hover { background: rgba(251,191,36,0.08); }
    .mob-menu .nav-sep { width: 100%; height: 1px; background: rgba(255,255,255,0.06); margin: 6px 0; }

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

<a href="{{ site.baseurl }}/courses" class="back-link">&#8592; Course Info</a>

<!-- HEADER -->
<header class="header">
  <div class="header-inner">
    <div class="logo" onclick="scrollToSection('#top')">
      <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Logo" style="width:42px;height:auto;">
      <div><div class="logo-text">Deputy Sheriffs' Assoc.</div><div class="logo-sub">San Diego County</div></div>
    </div>
    <nav>
      <div class="nav-link" onclick="scrollToSection('#dashboard')">Resources</div>
      <div class="nav-link" onclick="scrollToSection('#news')">News</div>
      <div class="nav-link" onclick="scrollToSection('#events')">Events</div>
      <div class="nav-sep"></div>
      <div class="nav-link" onclick="scrollToSection('#about')">About</div>
      <div class="nav-link" onclick="scrollToSection('#store')">Store</div>
      <div class="nav-link" onclick="scrollToSection('#faq')">FAQ</div>
      <div class="nav-sep"></div>
      <div class="nav-link" onclick="scrollToSection('#pathway')">Pathway</div>
      <div class="nav-link" onclick="scrollToSection('#contact')">Contact</div>
      <div class="nav-link" onclick="scrollToSection('#games')">Games</div>
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
  <div class="nav-link" onclick="scrollToSection('#dashboard');document.getElementById('mobMenu').classList.remove('open')">Resources</div>
  <div class="nav-link" onclick="scrollToSection('#news');document.getElementById('mobMenu').classList.remove('open')">News</div>
  <div class="nav-link" onclick="scrollToSection('#events');document.getElementById('mobMenu').classList.remove('open')">Events</div>
  <div class="nav-sep"></div>
  <div class="nav-link" onclick="scrollToSection('#about');document.getElementById('mobMenu').classList.remove('open')">About</div>
  <div class="nav-link" onclick="scrollToSection('#store');document.getElementById('mobMenu').classList.remove('open')">Store</div>
  <div class="nav-link" onclick="scrollToSection('#faq');document.getElementById('mobMenu').classList.remove('open')">FAQ</div>
  <div class="nav-sep"></div>
  <div class="nav-link" onclick="scrollToSection('#pathway');document.getElementById('mobMenu').classList.remove('open')">Pathway</div>
  <div class="nav-link" onclick="scrollToSection('#contact');document.getElementById('mobMenu').classList.remove('open')">Contact</div>
  <div class="nav-link" onclick="scrollToSection('#games');document.getElementById('mobMenu').classList.remove('open')">Games</div>
</div>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-inner">
    <img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Badge" class="hero-logo">
    <h2>The Strength Behind the Badge</h2>
    <p>Representing the dedicated officers of the San Diego County Sheriff's Department since 1955. Benefits, legal defense, events, and advocacy &mdash; all in one place.</p>
    <div class="hero-cta">
      <button class="btn btn-gold" onclick="scrollToSection('#dashboard')">Explore Resources</button>
      <button class="btn btn-outline" onclick="scrollToSection('#about')">Learn About DSA</button>
      <a href="{{ site.baseurl }}/sheriff/info" class="btn btn-outline" style="text-decoration:none">Full DSA Info Page</a>
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
    <div class="tile" onclick="scrollToSection('#events')"><div class="tile-icon">&#128197;</div><div class="tile-title">Events</div><div class="tile-desc">Upcoming meetings & social events</div></div>
    <div class="tile" onclick="scrollToSection('#store')"><div class="tile-icon">&#128176;</div><div class="tile-title">DSA Store</div><div class="tile-desc">Official merch & apparel</div></div>
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

<div class="sec-divider"></div>

<!-- NEWS -->
<div class="section" id="news">
  <div class="sec-head"><h2>Latest News</h2></div>
  <div class="news-grid">
    <div class="news-card"><div class="img-card"><img src="{{ site.baseurl }}/images/dsa/board-portrait.png" alt="DSA Board Member"></div><span class="news-tag t-ann">Announcement</span><h3>2026 Contract Negotiations Update</h3><p>The DSA bargaining team has reached a tentative agreement with the county on wages, benefits, and working conditions for the next three years.</p><div class="news-date">March 15, 2026</div></div>
    <div class="news-card"><div class="img-card"><img src="{{ site.baseurl }}/images/dsa/golf-tournament-photo.png" alt="DSA Golf Tournament"></div><span class="news-tag t-evt">Event</span><h3>Annual DSA Family Picnic</h3><p>Join us at Poway Community Park on April 12th. Food, games, and fellowship for all DSA members and families.</p><div class="news-date">March 10, 2026</div></div>
    <div class="news-card"><div class="img-card"><img src="{{ site.baseurl }}/images/dsa/silver-star-newsletter.jpg" alt="Silver Star Newsletter"></div><span class="news-tag t-ben">Benefit</span><h3>New Dental Plan Options</h3><p>Expanded Delta Dental coverage now available. Open enrollment begins April 1st with improved major services rates.</p><div class="news-date">March 5, 2026</div></div>
  </div>
</div>

<div class="sec-divider"></div>

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

<div class="sec-divider"></div>

<!-- ABOUT -->
<div class="section" id="about">
  <div class="sec-head"><h2>About the DSA</h2></div>
  <div class="about-grid">
    <div class="about-card">
      <div class="img-card"><img src="{{ site.baseurl }}/images/dsa/dsa-logo.png" alt="DSA Logo" style="height:170px;object-fit:contain;background:#e8ecf0;padding:20px"></div>
      <h3>Our Mission</h3>
      <p>The Deputy Sheriffs' Association of San Diego County is the labor union representing all sworn personnel of the San Diego County Sheriff's Department. Founded in 1955, we negotiate contracts, provide legal defense, support political action, and deliver member benefits and wellness programs for over 4,229 members.</p>
      <p style="margin-top:10px">As the exclusive collective bargaining unit, the DSA negotiates Memoranda of Understanding (MOUs) covering wages, benefits, working conditions, overtime, and retirement with the County of San Diego.</p>
      <a href="{{ site.baseurl }}/sheriff/info" style="display:inline-block;margin-top:12px;padding:8px 18px;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.3);border-radius:8px;color:#fbbf24;font-size:0.82rem;font-weight:600;text-decoration:none">Read Full DSA History & Details &rarr;</a>
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

<div class="sec-divider"></div>

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

<div class="sec-divider"></div>

<!-- GAMIFICATION -->
<div class="section" id="games">
  <div class="sec-head">
    <h2>&#127918; Net Patrol &mdash; CB Unit 4 Challenge Zone</h2>
    <p>College Board Unit 4 networking turned into a game-builder lesson: move traffic from GitHub Pages to NGINX, Flask / Spring, and AWS while clearly teaching OSI vs TCP/IP, encapsulation, request/response flow, and MTU.</p>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:20px">
    <div style="background:linear-gradient(180deg,rgba(22,42,70,0.88),rgba(11,26,46,0.95));border:1px solid #1e3352;border-radius:12px;padding:18px;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:6px">&#127914;</div>
      <div style="font-size:0.82rem;font-weight:700;color:#fbbf24;margin-bottom:4px">Net Patrol Mission</div>
      <div style="font-size:0.74rem;color:#94a3b8">Canvas game with Player, NPC Router Ron, and AI NPC Hacker H4X</div>
    </div>
    <div style="background:linear-gradient(180deg,rgba(22,42,70,0.88),rgba(11,26,46,0.95));border:1px solid #1e3352;border-radius:12px;padding:18px;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:6px">&#9997;&#65039;</div>
      <div style="font-size:0.82rem;font-weight:700;color:#fbbf24;margin-bottom:4px">Pop Quiz Review</div>
      <div style="font-size:0.74rem;color:#94a3b8">12-question pool covering OSI, TCP/IP, MTU, and deployment</div>
    </div>
    <div style="background:linear-gradient(180deg,rgba(22,42,70,0.88),rgba(11,26,46,0.95));border:1px solid #1e3352;border-radius:12px;padding:18px;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:6px">&#128202;</div>
      <div style="font-size:0.82rem;font-weight:700;color:#fbbf24;margin-bottom:4px">MTU Lab</div>
      <div style="font-size:0.74rem;color:#94a3b8">Interactive payload slider with encapsulation visualization</div>
    </div>
  </div>
  <div style="text-align:center">
    <a href="{{ site.baseurl }}/games" class="btn btn-gold" style="font-size:0.95rem;padding:14px 36px;display:inline-flex;align-items:center;gap:8px">&#127918; Launch Challenge Zone &rarr;</a>
    <p style="font-size:0.76rem;color:#475569;margin-top:10px">Opens the full game page with all 3 modes</p>
  </div>
</div>

<div class="sec-divider"></div>

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

<div class="sec-divider"></div>

<!-- RANK PATHWAY GUIDE -->
<div class="section" id="pathway">
  <div class="sec-head">
    <h2>Rank Pathway Guide</h2>
    <p>Answer a few questions and get a personalized plan to advance your career</p>
  </div>

  <!-- Hint for guests -->
  <div id="pwGuest" style="display:none;text-align:center;margin-bottom:16px">
    <p style="font-size:0.82rem;color:#94a3b8"><a href="#" onclick="openModal('login');return false" style="color:#fbbf24;font-weight:600">Log in</a> to auto-fill your current rank, or just start below as a guest.</p>
  </div>

  <!-- Active state (always visible) -->
  <div id="pwActive">

    <!-- Current rank display -->
    <div class="pw-rank-display">
      <div class="pw-rank-badge" id="pwBadge">D</div>
      <div class="pw-rank-info">
        <h3 id="pwCurrentRank">Deputy</h3>
        <p id="pwCurrentDetail">Your current rank based on your account profile</p>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="pw-progress">
      <div class="pw-dot done" id="pwD1"></div>
      <div class="pw-dot" id="pwD2"></div>
      <div class="pw-dot" id="pwD3"></div>
      <div class="pw-dot" id="pwD4"></div>
    </div>

    <!-- STEP 1: Goal rank -->
    <div class="pw-step active" id="pwStep1">
      <div class="pw-question">
        <label>What rank do you want to reach?</label>
        <select class="pw-goal-sel" id="pwGoal">
          <option value="">-- Select your goal rank --</option>
        </select>
      </div>
      <div class="pw-nav">
        <button class="btn btn-gold" onclick="pwNext(1)" id="pwNext1" disabled>Next &rarr;</button>
      </div>
    </div>

    <!-- STEP 2: Experience questions -->
    <div class="pw-step" id="pwStep2">
      <div class="pw-question">
        <label>How many years have you served in your current rank?</label>
        <div class="pw-opts" id="pwYearsOpts">
          <div class="pw-opt" data-val="0-2" onclick="pwSelect(this,'pwYears')">0 &ndash; 2 years</div>
          <div class="pw-opt" data-val="3-5" onclick="pwSelect(this,'pwYears')">3 &ndash; 5 years</div>
          <div class="pw-opt" data-val="6-10" onclick="pwSelect(this,'pwYears')">6 &ndash; 10 years</div>
          <div class="pw-opt" data-val="10+" onclick="pwSelect(this,'pwYears')">10+ years</div>
        </div>
      </div>
      <div class="pw-question">
        <label>Which area best describes your primary focus?</label>
        <div class="pw-opts" id="pwFocusOpts">
          <div class="pw-opt" data-val="patrol" onclick="pwSelect(this,'pwFocus')">Patrol / Field Operations</div>
          <div class="pw-opt" data-val="investigations" onclick="pwSelect(this,'pwFocus')">Investigations / Detective</div>
          <div class="pw-opt" data-val="specialized" onclick="pwSelect(this,'pwFocus')">Specialized Unit (K-9, SWAT, Traffic, etc.)</div>
          <div class="pw-opt" data-val="detention" onclick="pwSelect(this,'pwFocus')">Detention / Court Services</div>
          <div class="pw-opt" data-val="admin" onclick="pwSelect(this,'pwFocus')">Administration / Support</div>
        </div>
      </div>
      <div class="pw-nav">
        <button class="btn btn-outline" onclick="pwBack(2)">&larr; Back</button>
        <button class="btn btn-gold" onclick="pwNext(2)" id="pwNext2" disabled>Next &rarr;</button>
      </div>
    </div>

    <!-- STEP 3: Skills self-assessment -->
    <div class="pw-step" id="pwStep3">
      <div class="pw-question">
        <label>Rate your leadership experience:</label>
        <div class="pw-opts" id="pwLeadOpts">
          <div class="pw-opt" data-val="none" onclick="pwSelect(this,'pwLead')">Minimal &mdash; I mostly follow direction from supervisors</div>
          <div class="pw-opt" data-val="some" onclick="pwSelect(this,'pwLead')">Some &mdash; I've led small teams or trained newer deputies</div>
          <div class="pw-opt" data-val="moderate" onclick="pwSelect(this,'pwLead')">Moderate &mdash; I regularly take charge of scenes or shifts</div>
          <div class="pw-opt" data-val="strong" onclick="pwSelect(this,'pwLead')">Strong &mdash; I've supervised units, managed budgets, or led operations</div>
        </div>
      </div>
      <div class="pw-question">
        <label>What's your biggest challenge for promotion?</label>
        <div class="pw-opts" id="pwChalOpts">
          <div class="pw-opt" data-val="exam" onclick="pwSelect(this,'pwChal')">Passing the promotional exam</div>
          <div class="pw-opt" data-val="experience" onclick="pwSelect(this,'pwChal')">Getting the right experience / assignments</div>
          <div class="pw-opt" data-val="education" onclick="pwSelect(this,'pwChal')">Education requirements (degree, certifications)</div>
          <div class="pw-opt" data-val="interview" onclick="pwSelect(this,'pwChal')">Oral interview / board assessment</div>
          <div class="pw-opt" data-val="network" onclick="pwSelect(this,'pwChal')">Building relationships with leadership</div>
        </div>
      </div>
      <div class="pw-nav">
        <button class="btn btn-outline" onclick="pwBack(3)">&larr; Back</button>
        <button class="btn btn-gold" onclick="pwGenerate()">Generate My Pathway</button>
      </div>
    </div>

    <!-- STEP 4: Results -->
    <div class="pw-step" id="pwStep4">
      <div id="pwResults"></div>
      <div class="pw-nav" style="margin-top:24px">
        <button class="btn btn-outline" onclick="pwReset()">Start Over</button>
        <button class="btn btn-gold" onclick="scrollToSection('#pathway')">Back to Top</button>
      </div>
    </div>

  </div>
</div>

<div class="sec-divider"></div>

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
    <div class="ft-col"><h4>Navigate</h4><a href="#dashboard">Resources</a><a href="#news">News</a><a href="#events">Events</a><a href="#store">Store</a><a href="#faq">FAQ</a><a href="#pathway">Pathway</a></div>
    <div class="ft-col"><h4>Support</h4><a href="#contact">Contact</a><a href="javascript:void(0)" onclick="openDetail('legal')">Legal Defense</a><a href="javascript:void(0)" onclick="openDetail('wellness')">Wellness</a><a href="javascript:void(0)" onclick="openDetail('forms')">Forms</a></div>
  </div>
</footer>

<!-- SCROLL TO TOP -->
<button class="scroll-top" id="scrollTopBtn" onclick="window.scrollToSection({top:0,behavior:'smooth'})">&#8593;</button>

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
  ? 'http://localhost:8325'
  : 'https://sheriff.opencodingsociety.com';

let user = null;

/* ================================================================
   DOM HELPERS — each does exactly one thing
   ================================================================ */

/** Scroll the viewport to the element matching `sel`. */
function scrollToSection(sel) {
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
  { label: 'Rank Pathway Guide',  target: '#pathway' },
  { label: 'Career Advancement',  target: '#pathway' },
  { label: 'Full DSA Info',       target: '{{ site.baseurl }}/sheriff/info' },
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
  scrollToSection(item.dataset.target);
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

const sectionIds = ['dashboard', 'news', 'events', 'about', 'store', 'games', 'faq', 'pathway', 'contact'];

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
   INIT — check auth session on page load
   ================================================================ */

function checkExistingSession() {
  fetch(`${API}/api/sheriff/id`, { credentials: 'include' })
    .then(r => { if (!r.ok) throw 0; return r.json(); })
    .then(d => { user = d; updateUI(); })
    .catch(() => {});
}

checkExistingSession();

/* ================================================================
   RANK PATHWAY GUIDE — gamified career advancement planner
   ================================================================ */

const RANKS = ['Deputy','Corporal','Sergeant','Lieutenant','Captain'];
const RANK_BADGES = { Deputy:'D', Corporal:'C', Sergeant:'S', Lieutenant:'L', Captain:'Cpt' };

const RANK_DATA = {
  'Deputy-Corporal': {
    timeline: '2-4 years',
    summary: 'Focus on field experience, FTO certification, and demonstrating leadership on patrol before testing for Corporal.',
    requirements: [
      'Minimum 3 years as Deputy (typical)',
      'Pass Corporal promotional exam (written + oral)',
      'No sustained disciplinary actions in prior 12 months',
      'Documented field training or mentorship of newer deputies',
      'Positive performance evaluations from supervising Sergeant',
    ],
    milestones: [
      { label: 'Year 1', text: 'Master patrol fundamentals, earn high marks on evaluations, volunteer for extra assignments' },
      { label: 'Year 2', text: 'Become a Field Training Officer (FTO), mentor a trainee through probation, join a station committee' },
      { label: 'Year 3', text: 'Study for promotional exam, take practice tests, participate in oral board prep sessions' },
      { label: 'Test Window', text: 'Take promotional exam when announced, score in top tier, await selection from eligibility list' },
    ],
  },
  'Deputy-Sergeant': {
    timeline: '5-8 years',
    summary: 'A jump to Sergeant means proving supervisory ability, deep policy knowledge, and consistent leadership across assignments.',
    requirements: [
      'Minimum 5 years sworn experience (typical)',
      'Pass Sergeant promotional exam (written, oral, assessment center)',
      'Demonstrated supervisory aptitude (FTO, acting roles, team leads)',
      'Strong knowledge of department policy, MOU, and labor law',
      'Recommended: Associate\'s or Bachelor\'s degree in Criminal Justice or related field',
    ],
    milestones: [
      { label: 'Years 1-2', text: 'Build patrol excellence, earn FTO certification, complete advanced officer training' },
      { label: 'Years 3-4', text: 'Seek specialized assignments (investigations, traffic, K-9), develop policy expertise' },
      { label: 'Years 4-5', text: 'Take acting Sergeant roles when available, lead station projects, pursue degree credits' },
      { label: 'Years 5-6', text: 'Intensive exam prep, oral board practice, assessment center scenarios, apply for promotion' },
    ],
  },
  'Deputy-Lieutenant': {
    timeline: '10-15 years',
    summary: 'Reaching Lieutenant requires sustained excellence through multiple ranks plus advanced education and command experience.',
    requirements: [
      'Minimum 8-10 years sworn experience',
      'Prior service as Corporal and/or Sergeant strongly expected',
      'Pass Lieutenant promotional exam and command assessment',
      'Bachelor\'s degree strongly recommended; Master\'s advantageous',
      'Proven record of unit management, budget oversight, inter-agency work',
    ],
    milestones: [
      { label: 'Years 1-4', text: 'Establish patrol excellence, earn FTO certification, complete Corporal promotion' },
      { label: 'Years 4-7', text: 'Serve as Sergeant, lead a squad, manage schedules and evaluations, build command skills' },
      { label: 'Years 7-10', text: 'Pursue higher education, attend leadership academies (POST, FBI LEEDA), seek inter-agency roles' },
      { label: 'Years 10+', text: 'Command-level exam prep, assessment center scenarios, executive interview, apply for Lieutenant' },
    ],
  },
  'Deputy-Captain': {
    timeline: '15-20+ years',
    summary: 'Captain is a senior executive rank requiring decades of experience, advanced education, and proven departmental leadership.',
    requirements: [
      'Minimum 15 years sworn experience (typical)',
      'Progressive promotion through Corporal, Sergeant, Lieutenant',
      'Master\'s degree or equivalent education strongly preferred',
      'Executive development programs (POST Command College, FBI National Academy, etc.)',
      'Demonstrated success commanding stations, divisions, or major operations',
    ],
    milestones: [
      { label: 'Years 1-5', text: 'Patrol mastery, FTO, Corporal promotion, build foundation' },
      { label: 'Years 5-10', text: 'Sergeant promotion, squad leadership, specialized unit experience, begin advanced degree' },
      { label: 'Years 10-15', text: 'Lieutenant promotion, station/division command, executive leadership programs, policy development' },
      { label: 'Years 15+', text: 'Captain assessment, executive interview, department-wide impact, strategic vision, apply for command' },
    ],
  },
  'Corporal-Sergeant': {
    timeline: '3-5 years',
    summary: 'Build on your FTO and team-lead experience to demonstrate full supervisory capability for the Sergeant exam.',
    requirements: [
      'Minimum 2-3 years as Corporal',
      'Pass Sergeant promotional exam (written, oral, assessment center)',
      'Demonstrated supervisory performance as Corporal',
      'Strong policy and MOU knowledge',
      'Recommended: progress toward Bachelor\'s degree',
    ],
    milestones: [
      { label: 'Year 1', text: 'Excel as Corporal, document your FTO and mentoring outcomes, take on shift-lead responsibilities' },
      { label: 'Year 2', text: 'Seek acting Sergeant assignments, attend POST supervisory courses, build policy expertise' },
      { label: 'Year 3', text: 'Exam prep: written study groups, oral board mock interviews, assessment center practice' },
      { label: 'Test Window', text: 'Take Sergeant promotional exam, score competitively, await selection' },
    ],
  },
  'Corporal-Lieutenant': {
    timeline: '7-12 years',
    summary: 'Moving from Corporal to Lieutenant means first serving as Sergeant, then developing command-level skills.',
    requirements: [
      'Promotion to Sergeant first (typical path)',
      'Pass Lieutenant promotional exam after Sergeant service',
      'Bachelor\'s degree strongly recommended',
      'Leadership academy attendance',
      'Proven management of teams, budgets, and operations',
    ],
    milestones: [
      { label: 'Years 1-3', text: 'Excel as Corporal, prepare for and pass Sergeant exam' },
      { label: 'Years 3-6', text: 'Serve as Sergeant, lead squads, manage evaluations, attend POST supervisory courses' },
      { label: 'Years 6-9', text: 'Pursue degree, attend leadership academies, seek specialized or inter-agency assignments' },
      { label: 'Years 9+', text: 'Lieutenant exam prep, command assessment, executive interview' },
    ],
  },
  'Corporal-Captain': {
    timeline: '12-18 years',
    summary: 'Long-term plan through Sergeant and Lieutenant before reaching Captain-level executive command.',
    requirements: [
      'Progressive promotion: Sergeant then Lieutenant first',
      'Advanced education (Master\'s preferred)',
      'Executive development programs',
      'Broad departmental experience across assignments',
      'Strategic leadership and policy development track record',
    ],
    milestones: [
      { label: 'Years 1-3', text: 'Sergeant promotion, supervisory excellence' },
      { label: 'Years 3-8', text: 'Lieutenant promotion, division command, advanced degree, leadership academies' },
      { label: 'Years 8-12', text: 'Executive roles, department-wide projects, policy authorship' },
      { label: 'Years 12+', text: 'Captain assessment, station command, executive leadership' },
    ],
  },
  'Sergeant-Lieutenant': {
    timeline: '4-7 years',
    summary: 'Leverage your supervisory track record and pursue command-level education and assignments.',
    requirements: [
      'Minimum 3-4 years as Sergeant',
      'Pass Lieutenant promotional exam and command assessment',
      'Bachelor\'s degree (Master\'s advantageous)',
      'POST Management Course or equivalent',
      'Inter-agency coordination experience',
    ],
    milestones: [
      { label: 'Years 1-2', text: 'Demonstrate excellent Sergeant performance, pursue advanced training, start or finish degree' },
      { label: 'Years 2-4', text: 'Attend POST Management Course, seek acting Lieutenant roles, manage station operations' },
      { label: 'Years 4-5', text: 'Exam prep, command assessment practice, build inter-agency network' },
      { label: 'Test Window', text: 'Lieutenant promotional exam, command assessment, executive oral board' },
    ],
  },
  'Sergeant-Captain': {
    timeline: '10-15 years',
    summary: 'Two-step advancement through Lieutenant to Captain requires sustained executive development.',
    requirements: [
      'Lieutenant promotion first (typical path)',
      'Advanced education and executive programs',
      'Station or division command experience as Lieutenant',
      'Department-wide policy and strategic planning experience',
      'FBI National Academy, POST Command College, or similar',
    ],
    milestones: [
      { label: 'Years 1-4', text: 'Lieutenant promotion via exam and command assessment' },
      { label: 'Years 4-8', text: 'Station/division command, advanced degree, executive programs' },
      { label: 'Years 8-10', text: 'Department-wide leadership roles, strategic initiatives, policy development' },
      { label: 'Years 10+', text: 'Captain assessment, executive interview, senior command' },
    ],
  },
  'Lieutenant-Captain': {
    timeline: '4-8 years',
    summary: 'Final step to senior command. Demonstrate strategic vision and executive leadership.',
    requirements: [
      'Minimum 3-5 years as Lieutenant',
      'Executive assessment and interview',
      'Master\'s degree preferred',
      'Completion of executive leadership programs',
      'Station or major division command experience',
    ],
    milestones: [
      { label: 'Years 1-2', text: 'Excel in station/division command, attend executive programs, pursue Master\'s if not complete' },
      { label: 'Years 2-4', text: 'Lead department-wide initiatives, inter-agency partnerships, community engagement at executive level' },
      { label: 'Years 4-5', text: 'Captain executive assessment, strategic vision presentation, board interview' },
      { label: 'Selection', text: 'Appointment by Sheriff from qualified candidates, assume station command' },
    ],
  },
};

/* Activities database by challenge area */
const ACTIVITIES = {
  exam: {
    title: 'Promotional Exam Preparation',
    items: [
      { text: 'Get the official study guide and exam bibliography from HR', required: true },
      { text: 'Form or join a study group with other candidates', required: true },
      { text: 'Complete at least 3 full-length practice exams under timed conditions', required: true },
      { text: 'Review department General Orders, Policy Manual, and current MOU', required: true },
      { text: 'Study California Penal Code sections most tested on promotional exams', rec: true },
      { text: 'Attend DSA-sponsored promotional exam prep workshop (if offered)', rec: true },
    ]
  },
  experience: {
    title: 'Building the Right Experience',
    items: [
      { text: 'Request a transfer to a high-activity station for broader exposure', required: true },
      { text: 'Volunteer for special assignments (task forces, event command, etc.)', required: true },
      { text: 'Become a Field Training Officer (FTO) to build mentoring skills', required: true },
      { text: 'Take acting roles at the next rank whenever available', rec: true },
      { text: 'Join a specialized unit to diversify your experience (investigations, traffic, K-9)', rec: true },
      { text: 'Document your accomplishments and project outcomes for your promotional file', rec: true },
    ]
  },
  education: {
    title: 'Education & Certification',
    items: [
      { text: 'Enroll in a Criminal Justice or Public Admin degree program', required: true },
      { text: 'Complete POST Supervisory or Management Course (rank-appropriate)', required: true },
      { text: 'Earn POST Advanced or Supervisory Certificate', required: true },
      { text: 'Attend leadership academy (FBI LEEDA, POST Command College, etc.)', rec: true },
      { text: 'Take elective courses in budgeting, HR management, or public policy', rec: true },
      { text: 'Pursue instructor certifications (defensive tactics, firearms, etc.)', rec: true },
    ]
  },
  interview: {
    title: 'Oral Board & Interview Skills',
    items: [
      { text: 'Practice with mock oral boards (ask senior officers to serve as panelists)', required: true },
      { text: 'Prepare structured responses using the STAR method (Situation, Task, Action, Result)', required: true },
      { text: 'Study common promotional interview scenarios and practice articulating your approach', required: true },
      { text: 'Record yourself answering practice questions and review for clarity and confidence', rec: true },
      { text: 'Research current department priorities and be ready to discuss your ideas for them', rec: true },
      { text: 'Develop a brief leadership philosophy statement you can deliver clearly', rec: true },
    ]
  },
  network: {
    title: 'Building Leadership Relationships',
    items: [
      { text: 'Volunteer for station or department-wide committees', required: true },
      { text: 'Introduce yourself to command staff at events and meetings', required: true },
      { text: 'Seek a mentor at the rank you aspire to reach', required: true },
      { text: 'Participate in DSA events, board meetings, and community outreach', rec: true },
      { text: 'Attend inter-agency meetings or conferences to broaden your network', rec: true },
      { text: 'Write for the Silver Star Newsletter or volunteer for DSA committees', rec: true },
    ]
  },
};

/* Focus-specific bonus activities */
const FOCUS_ACTIVITIES = {
  patrol: [
    'Pursue advanced patrol tactics certifications (vehicle pursuit, crisis intervention)',
    'Seek Field Training Officer (FTO) assignment to demonstrate leadership on patrol',
    'Volunteer for community policing programs and neighborhood outreach events',
  ],
  investigations: [
    'Complete POST Investigations Certificate and detective-level training courses',
    'Build case management skills: document complex case outcomes for your file',
    'Seek inter-agency task force assignments (FBI, DEA, regional teams)',
  ],
  specialized: [
    'Earn unit-specific certifications (K-9 handler, SWAT operator, bomb tech, etc.)',
    'Take on team-lead or instructor roles within your specialized unit',
    'Cross-train in a secondary specialty to broaden your command versatility',
  ],
  detention: [
    'Complete POST Detention Certificate and facility management coursework',
    'Seek rotational assignments between detention and patrol to broaden experience',
    'Pursue crisis intervention and de-escalation certifications',
  ],
  admin: [
    'Complete coursework in public administration, budgeting, or organizational management',
    'Seek project management roles for department-wide technology or process initiatives',
    'Build relationships across divisions by supporting cross-functional projects',
  ],
};

let pwAnswers = {};

function pwInit() {
  el('pwActive').style.display = 'block';

  if (!user) {
    // Guest mode — show hint and default to Deputy
    el('pwGuest').style.display = 'block';
    var rank = 'Deputy';
    el('pwCurrentRank').textContent = rank;
    el('pwBadge').textContent = RANK_BADGES[rank] || 'D';
    el('pwCurrentDetail').textContent = 'Starting rank: Deputy (log in to use your actual rank)';
  } else {
    el('pwGuest').style.display = 'none';
    var rank = user.rank || 'Deputy';
    el('pwCurrentRank').textContent = rank;
    el('pwBadge').textContent = RANK_BADGES[rank] || rank[0];
    el('pwCurrentDetail').textContent = 'Your current rank: ' + rank + ' at ' + (user.station || 'your station');
  }

  // Populate goal dropdown with ranks above current
  const idx = RANKS.indexOf(rank);
  const goalSel = el('pwGoal');
  goalSel.innerHTML = '<option value="">-- Select your goal rank --</option>';
  for (let i = idx + 1; i < RANKS.length; i++) {
    goalSel.innerHTML += '<option value="' + RANKS[i] + '">' + RANKS[i] + '</option>';
  }
  goalSel.onchange = function() {
    el('pwNext1').disabled = !this.value;
    pwAnswers.goal = this.value;
  };

  pwAnswers = {};
  pwShowStep(1);
}

function pwSelect(optEl, key) {
  optEl.parentElement.querySelectorAll('.pw-opt').forEach(o => o.classList.remove('selected'));
  optEl.classList.add('selected');
  pwAnswers[key] = optEl.dataset.val;
  // Enable next button if all questions on current step are answered
  if (key === 'pwYears' || key === 'pwFocus') {
    el('pwNext2').disabled = !(pwAnswers.pwYears && pwAnswers.pwFocus);
  }
}

function pwShowStep(n) {
  document.querySelectorAll('.pw-step').forEach(s => s.classList.remove('active'));
  el('pwStep' + n)?.classList.add('active');
  // Update progress dots
  for (let i = 1; i <= 4; i++) {
    const dot = el('pwD' + i);
    if (!dot) continue;
    dot.className = 'pw-dot' + (i < n ? ' done' : i === n ? ' now' : '');
  }
}

function pwNext(from) {
  if (from === 1 && !pwAnswers.goal) return;
  if (from === 2 && !(pwAnswers.pwYears && pwAnswers.pwFocus)) return;
  pwShowStep(from + 1);
}

function pwBack(from) {
  pwShowStep(from - 1);
}

function pwReset() {
  pwAnswers = {};
  document.querySelectorAll('.pw-opt').forEach(o => o.classList.remove('selected'));
  el('pwGoal').value = '';
  el('pwNext1').disabled = true;
  el('pwNext2').disabled = true;
  pwShowStep(1);
}

function pwGenerate() {
  const currentRank = (user && user.rank) ? user.rank : 'Deputy';
  const goalRank = pwAnswers.goal;
  if (!goalRank) {
    el('pwResults').innerHTML = '<p>Please select your goal rank first.</p>';
    pwShowStep(3);
    return;
  }
  const key = currentRank + '-' + goalRank;
  const data = RANK_DATA[key];

  if (!data) { pwShowStep(4); el('pwResults').innerHTML = '<p>No pathway data available for this combination.</p>'; return; }

  const challenge = pwAnswers.pwChal || 'exam';
  const focus = pwAnswers.pwFocus || 'patrol';
  const lead = pwAnswers.pwLead || 'none';
  const years = pwAnswers.pwYears || '0-2';

  let html = '';

  // 1. Summary card
  html += '<div class="pw-result-card">';
  html += '<h3>Your Pathway: ' + currentRank + ' &rarr; ' + goalRank + '</h3>';
  html += '<p><span class="highlight">Estimated timeline:</span> ' + data.timeline + '</p>';
  html += '<p>' + data.summary + '</p>';

  // Personalized note based on experience
  if (years === '10+') {
    html += '<p style="color:#34d399">With 10+ years in rank, you have substantial experience. Focus on exam preparation and building your promotional file.</p>';
  } else if (years === '0-2') {
    html += '<p style="color:#60a5fa">You\'re early in your current rank. Use this time to build a strong foundation of experience before testing.</p>';
  }

  // Leadership note
  if (lead === 'none' || lead === 'some') {
    html += '<p style="color:#f59e0b">Developing leadership experience should be a priority. Seek FTO, acting roles, and team lead opportunities.</p>';
  }

  html += '</div>';

  // 2. Requirements card
  html += '<div class="pw-result-card">';
  html += '<h3>Requirements for ' + goalRank + '</h3>';
  html += '<ul>';
  data.requirements.forEach(r => { html += '<li>' + r + '</li>'; });
  html += '</ul>';
  html += '</div>';

  // 3. Timeline milestones
  html += '<div class="pw-result-card">';
  html += '<h3>Your Career Timeline</h3>';
  html += '<div class="pw-timeline">';
  data.milestones.forEach(m => {
    html += '<div class="pw-tl-item"><h4>' + m.label + '</h4><p>' + m.text + '</p></div>';
  });
  html += '</div></div>';

  // 4. Primary challenge activities (interactive checklist)
  const challengeActs = ACTIVITIES[challenge];
  if (challengeActs) {
    html += '<div class="pw-act">';
    html += '<h4>' + challengeActs.title + '</h4>';
    html += '<p>Your primary focus area &mdash; complete these activities to address your biggest challenge:</p>';
    html += '<ul class="checklist">';
    challengeActs.items.forEach((item, i) => {
      const tag = item.required ? '<span class="tag tag-req">Required</span>' : '<span class="tag tag-rec">Recommended</span>';
      html += '<li onclick="this.classList.toggle(\'checked\')" id="pwCk' + challenge + i + '">' + tag + ' ' + item.text + '</li>';
    });
    html += '</ul></div>';
  }

  // 5. Secondary challenge activity (give them a second area too)
  const secondaryKey = challenge === 'experience' ? 'education' : 'experience';
  const secondaryActs = ACTIVITIES[secondaryKey];
  if (secondaryActs) {
    html += '<div class="pw-act">';
    html += '<h4>' + secondaryActs.title + ' <span class="tag tag-opt">Bonus</span></h4>';
    html += '<p>Strengthen your overall profile with these additional activities:</p>';
    html += '<ul class="checklist">';
    secondaryActs.items.slice(0, 4).forEach((item, i) => {
      const tag = item.required ? '<span class="tag tag-req">Core</span>' : '<span class="tag tag-rec">Recommended</span>';
      html += '<li onclick="this.classList.toggle(\'checked\')" id="pwCk2' + i + '">' + tag + ' ' + item.text + '</li>';
    });
    html += '</ul></div>';
  }

  // 6. Focus-specific activities
  const focusActs = FOCUS_ACTIVITIES[focus];
  if (focusActs) {
    html += '<div class="pw-act">';
    html += '<h4>Activities for Your Focus: ' + focus.charAt(0).toUpperCase() + focus.slice(1) + '</h4>';
    html += '<p>Tailored to your current assignment area:</p>';
    html += '<ul class="checklist">';
    focusActs.forEach((item, i) => {
      html += '<li onclick="this.classList.toggle(\'checked\')" id="pwCkF' + i + '"><span class="tag tag-opt">Focus</span> ' + item + '</li>';
    });
    html += '</ul></div>';
  }

  el('pwResults').innerHTML = html;
  pwShowStep(4);
  setTimeout(() => el('pwStep4')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

/* Hook into the existing updateUI to init pathway when auth state changes */
const _origUpdateUI = updateUI;
function updateUI() {
  _origUpdateUI();
  pwInit();
}

/* Also init on page load if already authenticated */
pwInit();

/* ================================================================
   SCROLL-TO-TOP BUTTON & ACTIVE NAV HIGHLIGHTING
   ================================================================ */
window.addEventListener('scroll', function() {
  const btn = el('scrollTopBtn');
  if (btn) btn.classList.toggle('show', window.scrollY > 400);

  // Highlight active nav link based on scroll position
  const sections = ['dashboard','news','events','about','store','faq','pathway','contact','games'];
  let current = '';
  for (const id of sections) {
    const sec = document.getElementById(id);
    if (sec && sec.getBoundingClientRect().top <= 120) current = id;
  }
  document.querySelectorAll('header .nav-link').forEach(link => {
    const href = link.getAttribute('onclick') || '';
    link.classList.toggle('active', href.includes(current) && current !== '');
  });
});
</script>
</body>
</html>
