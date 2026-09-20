const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'priyanshu_full_portfolio', 'src');
const write = (p, c) => fs.writeFileSync(path.join(root, p), c);

write('components/Navbar.jsx', `import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ active, setActive }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Skills", "Journey", "Insights", "Contact"];
  const go = (id) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="nav">
      <button className="brand" onClick={() => go("Home")}>PRIYANSHU</button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(l => (
          <button key={l} className={active === l ? "active" : ""} onClick={() => go(l)}>{l}</button>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="talk" onClick={() => go("Contact")}>Let's Talk <ArrowRight size={15} /></button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}`);

write('components/Footer.jsx', `import React from 'react';
export default function Footer() {
  return (
    <footer>
      <span>PRIYANSHU</span>
      <span>Build · Learn · Create · Repeat</span>
      <span>© 2026 Priyanshu. All rights reserved.</span>
    </footer>
  );
}`);

write('components/SectionKicker.jsx', `import React from 'react';
export default function SectionKicker({ num, children, dark = false }) {
  return (
    <div className={"kicker " + (dark ? "dark" : "")}>
      <span>{num}</span><i>·</i>{children}
    </div>
  );
}`);

write('pages/Hero.jsx', `import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';

export default function Hero({ go }) {
  return (
    <section id="home" className="hero section-dark">
      <img className="hero-bg" src="/src/assets/hero-bg.png" alt="" />
      <div className="hero-vignette" />
      <div className="hero-copy">
        <SectionKicker num="00">ENGINEER · BUILDER · PROBLEM SOLVER</SectionKicker>
        <h1>Turning Ideas<br />Into <em>Real Impact.</em></h1>
        <p>I build AI-powered products that solve real problems and create meaningful experiences through technology, curiosity, and continuous learning.</p>
        <div className="hero-ctas">
          <button className="btn light" onClick={() => go("Projects")}>Explore My Work <ArrowRight size={16} /></button>
          <a className="btn outline" href="/resume.pdf"><Download size={15} /> Download CV</a>
          <div className="socials">
            <a href="https://www.linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer"><Linkedin size={15} /></a>
            <a href="https://github.com/pds-37" target="_blank" rel="noreferrer"><Github size={15} /></a>
            <a href="mailto:official.priyanshu.37@gmail.com"><Mail size={15} /></a>
          </div>
        </div>
      </div>
      <div className="scribble hero-scribble">Same<br />Curiosity<br />Bigger<br />Impact <span>↘</span></div>
      <div className="hero-stats">
        <div><strong>3+</strong><span>Projects</span></div>
        <div><strong>AI/ML</strong><span>Focus Area</span></div>
        <div><strong>Always</strong><span>Learning</span></div>
      </div>
      <div className="scroll-cue"><span className="mouse"></span>Scroll to explore</div>
    </section>
  );
}`);

write('pages/About.jsx', `import React from 'react';
import { BrainCircuit, Layers3, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';

export default function About() {
  const features = [
    [BrainCircuit, "Problem Solver"],
    [Layers3, "Continuous Learner"],
    [Code2, "Product Thinker"],
    [CheckCircle2, "Impact Driven"]
  ];
  return (
    <section id="about" className="about section-dark">
      <img className="about-bg" src="/src/assets/about-bg.png" alt="" />
      <div className="about-overlay" />
      <div className="about-copy">
        <SectionKicker num="01">ABOUT</SectionKicker>
        <h2>A curious mind<br />and a <em>builder</em> at heart.</h2>
        <p>I'm a Computer Science student who loves building AI-powered products, exploring new technologies, and creating solutions that make a real impact. I enjoy working at the intersection of technology, creativity, and strategy.</p>
        <div className="feature-row">
          {features.map(([Icon, t]) => (
            <div className="feature" key={t}><Icon /><span>{t}</span></div>
          ))}
        </div>
        <a className="btn outline" href="#journey">Know More About Me <ArrowRight size={15} /></a>
      </div>
      <div className="about-label ideas">Ideas</div>
      <div className="about-label tech">Technology</div>
      <div className="about-label people">People</div>
      <div className="about-label impact">Impact</div>
      <div className="scribble wall-scribble">Same<br />Curiosity<br />Bigger<br />Impact</div>
    </section>
  );
}`);

write('pages/Projects.jsx', `import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <section id="projects" className="projects section-light">
      <div className="projects-intro">
        <SectionKicker num="02">PROJECTS</SectionKicker>
        <h2>Products<br /><em>I've built.</em></h2>
        <p>A collection of projects across AI, software development, security and problem solving.</p>
        <div className="project-controls">
          <button onClick={() => setActive((active - 1 + projects.length) % projects.length)}><ArrowLeft size={16} /></button>
          <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          <button onClick={() => setActive((active + 1) % projects.length)}><ArrowRight size={16} /></button>
        </div>
      </div>
      <div className="project-stage">
        <article className="featured-project">
          <div className="project-image-wrap">
            <img src={"/src/assets/" + p.image} alt="" />
            <div className="featured-pill">Featured</div>
          </div>
          <div className="project-info">
            <div className="project-eyebrow">{p.eyebrow}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-actions">
              {p.link ? (
                <a className="btn dark" href={p.link} target="_blank" rel="noreferrer">
                  View Project <ExternalLink size={14} />
                </a>
              ) : (
                <button className="btn dark">View Project <ArrowRight size={14} /></button>
              )}
              <button className="btn mini">Case Study</button>
            </div>
          </div>
        </article>
        <div className="project-side-cards">
          {projects.filter((_, i) => i !== active).slice(0, 2).map((x) => (
            <button key={x.id} className="side-project" onClick={() => setActive(projects.findIndex(y => y.id === x.id))}>
              <img src={"/src/assets/" + x.image} alt="" />
              <div><small>{x.eyebrow}</small><strong>{x.title}</strong></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}`);

write('pages/ProjectDetail.jsx', `import React from 'react';
import { BrainCircuit, Search, Sparkles, Server, ArrowRight, Github } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';

export default function ProjectDetail() {
  return (
    <section id="project-detail" className="detail section-dark">
      <div className="detail-copy">
        <SectionKicker num="03">PROJECT DETAIL</SectionKicker>
        <h2>ContextMind</h2>
        <div className="detail-sub">Your Knowledge, Amplified.</div>
        <p>An intelligent knowledge assistant that uses LLMs, embeddings, and vector search to help you organize, search, and interact with your information naturally.</p>
        <div className="detail-buttons">
          <button className="btn light">Live Demo <ArrowRight size={15} /></button>
          <button className="btn outline"><Github size={15} /> View Code</button>
        </div>
      </div>
      <div className="detail-image">
        <img src="/src/assets/contextmind.png" alt="ContextMind project preview" />
      </div>
      <div className="detail-features">
        <span><BrainCircuit /> LLM Powered</span>
        <span><Search /> Vector Search</span>
        <span><Sparkles /> RAG Pipeline</span>
        <span><Server /> Modern Stack</span>
      </div>
    </section>
  );
}`);

write('pages/Skills.jsx', `import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills section-light">
      <div className="skills-copy">
        <SectionKicker num="04">SKILLS</SectionKicker>
        <h2>A toolkit<br /><em>for what's next.</em></h2>
        <p>Technologies I use to turn ideas into products. I'm always learning, experimenting, and sharpening the tools that matter.</p>
        <button className="btn dark">Explore My Skills <ArrowRight size={15} /></button>
      </div>
      <div className="skills-visual">
        <div className="cube-stack">
          <div /><div /><div /><div /><div /><div />
        </div>
        <div className="skill-orbit orbit-a">AI/ML</div>
        <div className="skill-orbit orbit-b">Frontend</div>
        <div className="skill-orbit orbit-c">Backend</div>
        <div className="skill-orbit orbit-d">Data</div>
        <div className="skill-orbit orbit-e">Tools</div>
      </div>
      <div className="skill-list">
        {skills.map(([a, b]) => (
          <div key={a}><strong>{a}</strong><span>{b}</span></div>
        ))}
      </div>
    </section>
  );
}`);

write('pages/Journey.jsx', `import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';

export default function Journey() {
  const milestones = [
    ["2025", "Building for Impact", "Working on AI-powered products, cybersecurity solutions, and open-source projects."],
    ["2024", "Real-World Development", "Built and deployed full-stack applications, explored AI/ML and strengthened problem-solving."],
    ["2023", "Dived into AI/ML", "Explored machine learning, LLMs, and generative AI through projects and experimentation."],
    ["2022", "Explored Web Development", "Learned HTML, CSS, JavaScript, React and backend technologies."],
    ["2021", "The Beginning", "Started my Computer Science journey with curiosity and a passion for technology."]
  ];
  return (
    <section id="journey" className="journey section-dark">
      <img src="/src/assets/journey-visual.png" alt="" />
      <div className="journey-overlay" />
      <div className="journey-copy">
        <SectionKicker num="05">JOURNEY</SectionKicker>
        <h2>A path of<br /><em>continuous growth.</em></h2>
        <p>A journey of curiosity, learning, building, challenging myself, and creating impact — and this is just the beginning.</p>
        <button className="btn outline">View Full Timeline <ArrowRight size={15} /></button>
      </div>
      <div className="timeline">
        {milestones.map(([year, title, desc]) => (
          <div className="milestone" key={year}>
            <span className="dot" />
            <div>
              <strong>{year}</strong>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="journey-stats">
        <div><b>4+</b><span>Years of Learning</span></div>
        <div><b>10+</b><span>Projects Built</span></div>
        <div><b>5+</b><span>Technologies</span></div>
        <div><b>∞</b><span>Curiosity</span></div>
      </div>
    </section>
  );
}`);

write('pages/Insights.jsx', `import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';

export default function Insights() {
  const posts = [
    ["Aug 10, 2024", "What I Learned Building with LLMs", "Key lessons from building real LLM applications.", "insights-preview.png"],
    ["Jul 22, 2024", "A Practical Guide to RAG", "How I built a RAG system and what I learned.", "contextmind.png"],
    ["Jun 15, 2024", "Product Thinking for Engineers", "Why product thinking matters even as a technical person.", "skills-preview.png"]
  ];
  return (
    <section id="insights" className="insights section-light">
      <div className="insights-head">
        <div>
          <SectionKicker num="06">THINKING / INSIGHTS</SectionKicker>
          <h2>Notes from<br /><em>my journey.</em></h2>
          <p>Thoughts, learnings, and ideas around AI, product development, and everything in between.</p>
        </div>
        <button className="btn outline dark-outline">Read All Articles <ArrowRight size={15} /></button>
      </div>
      <div className="posts">
        {posts.map(([date, title, desc, img]) => (
          <article key={title}>
            <img src={"/src/assets/" + img} alt="" />
            <div className="post-body">
              <small>{date}</small>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#insights">Read More <ArrowRight size={13} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}`);

write('pages/Contact.jsx', `import React from 'react';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';

export default function Contact() {
  return (
    <section id="contact" className="contact section-light">
      <div className="contact-copy">
        <SectionKicker num="07">CONTACT</SectionKicker>
        <h2>Let's build<br /><em>something meaningful.</em></h2>
        <p>I'm always open to discussing new opportunities, interesting ideas, or potential collaborations.</p>
        <div className="contact-links">
          <a href="mailto:official.priyanshu.37@gmail.com"><Mail />official.priyanshu.37@gmail.com <ArrowRight /></a>
          <a href="https://www.linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer"><Linkedin />Connect on LinkedIn <ArrowRight /></a>
          <a href="https://github.com/pds-37" target="_blank" rel="noreferrer"><Github />View GitHub <ArrowRight /></a>
        </div>
      </div>
      <div className="contact-art">
        <img src="/src/assets/contact-preview.png" alt="" />
      </div>
      <div className="scribble contact-note">Good<br />Ideas<br />Take<br />Time.</div>
    </section>
  );
}`);

write('App.jsx', `import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

export default function App() {
  const [active, setActive] = useState("Home");
  const go = (name) => {
    setActive(name);
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const ids = ["home", "about", "projects", "skills", "journey", "insights", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <main>
        <Hero go={go} />
        <About />
        <Projects />
        <ProjectDetail />
        <Skills />
        <Journey />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}`);

write('main.jsx', `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')).render(<App />);`);

console.log('Components built.');
