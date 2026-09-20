const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'priyanshu_full_portfolio', 'src', 'styles.css');

const css = \

/* =========================================================
   PROJECTS V2 (3-Laptop Carousel)
========================================================= */
.projects-v2 {
  min-height: 100vh;
  padding: 120px 5vw 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--dark);
  color: white;
  position: relative;
  overflow: hidden;
}

.projects-v2-container {
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 4vw;
  align-items: center;
  flex: 1;
}

.projects-v2-info {
  position: relative;
  z-index: 10;
}

.projects-v2-info h2 {
  font-size: clamp(48px, 5vw, 78px);
  line-height: .95;
  letter-spacing: -3px;
  margin: 0;
}
.projects-v2-info h2 em {
  color: #c9a781;
  font-style: normal;
}
.projects-v2-info p {
  color: #a8a8a8;
  line-height: 1.6;
  font-size: 15px;
  margin: 22px 0 35px;
  max-width: 380px;
}
.view-all-btn {
  border-radius: 999px;
  padding: 12px 24px;
}

.projects-scribble-left {
  position: absolute;
  bottom: -90px;
  left: 20px;
  color: #a3957f;
  font-size: 20px;
  transform: rotate(-8deg);
  line-height: 1;
}
.scribble-arrow {
  display: block;
  font-family: Inter, sans-serif;
  margin-top: 5px;
  margin-left: 20px;
}

.projects-v2-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  color: #777;
  font-family: monospace;
  font-size: 12px;
  letter-spacing: 2px;
}
.projects-v2-nav button {
  background: none;
  border: none;
  color: white;
}

/* Carousel */
.projects-v2-carousel-wrap {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-scribble-right {
  position: absolute;
  top: 0;
  right: 5%;
  color: #a3957f;
  font-size: 22px;
  transform: rotate(8deg);
  z-index: 20;
  line-height: 1;
}

.projects-v2-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Laptops */
.laptop-card {
  position: absolute;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.laptop-screen {
  background: #111;
  border: 8px solid #222;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  position: relative;
}
.laptop-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.laptop-bottom {
  width: 110%;
  height: 12px;
  background: linear-gradient(to bottom, #444, #111);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.8);
}

/* Laptop Sizes & Positions */
.laptop-center {
  z-index: 10;
  width: 500px;
  transform: translateY(-40px);
}
.laptop-center .laptop-screen { height: 320px; border-width: 12px; }

.laptop-left {
  z-index: 5;
  width: 320px;
  transform: translateX(-280px) translateY(-50px) scale(0.85);
  filter: brightness(0.5);
  cursor: pointer;
}
.laptop-left .laptop-screen { height: 210px; }
.laptop-left:hover { filter: brightness(0.7); transform: translateX(-290px) translateY(-50px) scale(0.88); }

.laptop-right {
  z-index: 5;
  width: 320px;
  transform: translateX(280px) translateY(-50px) scale(0.85);
  filter: brightness(0.5);
  cursor: pointer;
}
.laptop-right .laptop-screen { height: 210px; }
.laptop-right:hover { filter: brightness(0.7); transform: translateX(290px) translateY(-50px) scale(0.88); }

/* Details inside laptops */
.laptop-details-main {
  position: absolute;
  top: 105%;
  width: 100%;
  text-align: left;
}
.laptop-main-header {
  display: flex;
  align-items: baseline;
  gap: 15px;
}
.laptop-main-header h3 {
  font-size: 32px;
  margin: 0;
}
.laptop-main-sub {
  color: #ccc;
  font-size: 14px;
}
.laptop-details-main p {
  color: #888;
  font-size: 13px;
  line-height: 1.6;
  margin: 12px 0;
}
.main-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.main-tags span {
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11px;
  color: #bbb;
}
.btn-text-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.btn-text-link:hover {
  text-decoration: underline;
}

.featured-pill-v2 {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #f4e5bd;
  color: #111;
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  z-index: 20;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.laptop-details-mini {
  position: absolute;
  top: 105%;
  width: 100%;
  text-align: left;
  opacity: 0.6;
}
.laptop-details-mini h3 { font-size: 20px; margin: 0 0 5px; }
.laptop-details-mini p { font-size: 11px; margin: 0 0 10px; line-height: 1.4; color: #aaa; }
.mini-tags { display: flex; gap: 4px; margin-bottom: 10px; }
.mini-tags span { border: 1px solid rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 999px; font-size: 9px; }
.mini-view { font-size: 11px; display: flex; align-items: center; gap: 5px; }


/* Bottom Banner (Image 2) */
.projects-v2-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 30px 0;
  margin-top: auto;
}
.banner-item {
  display: flex;
  align-items: center;
  gap: 15px;
  border-left: 1px solid rgba(255,255,255,0.1);
  padding-left: 30px;
}
.banner-item:first-child { border-left: none; padding-left: 0; }
.banner-item svg { color: #ccc; }
.banner-item strong { display: block; font-size: 13px; font-weight: 600; margin-bottom: 3px; }
.banner-item span { display: block; font-size: 11px; color: #777; }


/* =========================================================
   PROJECT DETAIL PAGE (Image 1)
========================================================= */
.project-detail-page {
  min-height: 100vh;
  padding-top: 100px; /* Space for fixed nav */
  background: var(--dark);
  color: white;
  display: flex;
  flex-direction: column;
}
.pd-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 5vw;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.pd-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #aaa;
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 40px;
}
.pd-back:hover { color: white; }

.pd-main {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 5vw;
  align-items: center;
}

.pd-info h1 {
  font-size: clamp(50px, 6vw, 85px);
  letter-spacing: -3px;
  line-height: 1;
  margin: 10px 0;
}
.pd-sub {
  font-size: 24px;
  color: #eee;
  margin-bottom: 25px;
}
.pd-info p {
  color: #aaa;
  font-size: 16px;
  line-height: 1.6;
  max-width: 480px;
  margin-bottom: 40px;
}
.pd-buttons {
  display: flex;
  gap: 15px;
}

.pd-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pd-laptop {
  width: 100%;
  max-width: 800px;
}
.pd-laptop .laptop-screen {
  border-width: 15px;
  border-radius: 16px 16px 0 0;
  height: 480px;
}
.pd-laptop .laptop-bottom {
  height: 18px;
  border-radius: 0 0 16px 16px;
}

.pd-scribble {
  position: absolute;
  right: -5%;
  bottom: 20%;
  color: #ccc;
  font-size: 24px;
  transform: rotate(-10deg);
  text-align: center;
  line-height: 1.2;
}
.pd-scribble span {
  display: block;
  font-family: Inter;
  font-size: 30px;
  margin-top: 10px;
}

.pd-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.pd-feature {
  display: flex;
  align-items: center;
  gap: 20px;
  border-left: 1px solid rgba(255,255,255,0.1);
  padding-left: 30px;
}
.pd-feature:first-child { border-left: none; padding-left: 0; }
.pd-feature svg { color: #ccc; }
.pd-feature strong { display: block; font-size: 14px; margin-bottom: 5px; }
.pd-feature span { font-size: 12px; color: #888; }

.pd-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  margin-top: auto;
}
.pd-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: monospace;
  font-size: 14px;
  letter-spacing: 2px;
  color: #888;
}
.pd-nav a { color: white; display: flex; align-items: center; }
.pd-footer-right {
  display: flex;
  align-items: center;
  gap: 40px;
}
.pd-mantra {
  font-size: 11px;
  letter-spacing: 3px;
  color: #777;
}
.pd-mantra span { color: #444; margin: 0 10px; }
.pd-socials {
  display: flex;
  gap: 15px;
}
.pd-socials a { color: white; }

@media(max-width:1200px){
  .laptop-left { transform: translateX(-180px) translateY(-50px) scale(0.7); }
  .laptop-right { transform: translateX(180px) translateY(-50px) scale(0.7); }
  .laptop-center { width: 400px; }
  .laptop-center .laptop-screen { height: 260px; }
}
@media(max-width:1000px){
  .projects-v2-container, .pd-main { grid-template-columns: 1fr; gap: 60px; }
  .projects-v2-banner, .pd-features { grid-template-columns: 1fr 1fr; gap: 30px; }
  .banner-item, .pd-feature { border-left: none; padding-left: 0; }
  .laptop-left, .laptop-right { display: none; }
  .pd-laptop .laptop-screen { height: 320px; }
  .pd-scribble, .projects-scribble-right { display: none; }
}
@media(max-width:760px){
  .projects-v2-banner, .pd-features { grid-template-columns: 1fr; }
  .pd-footer { flex-direction: column; gap: 30px; align-items: flex-start; }
}
\;

fs.appendFileSync(file, css);
console.log('CSS Appended');
