"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GlyphName = "arrow" | "chevron-left" | "chevron-right" | "cloud" | "code" | "database" | "download" | "github" | "linkedin" | "mail" | "map" | "menu" | "moon" | "spark" | "server" | "shield" | "sun" | "user";

const projects = [
  { title: "Swastha Parivar", description: "A healthcare ecosystem connecting families and medical professionals through real-time health tracking, appointment scheduling, telemedicine, and role-specific access.", tags: ["React", "Node.js", "Healthcare UI"], image: "/projects/swastha_parivar.png", href: "https://swastha-parivar-ten.vercel.app/" },
  { title: "Study Buddy", description: "An EdTech companion with a student dashboard, learning modules, and progress tracking designed around everyday study workflows.", tags: ["MERN Stack", "EdTech", "UI/UX"], image: "/projects/study_buddy.png", href: "https://study-buddy-frontend-kappa.vercel.app/" },
  { title: "Chanakya — Railway AI", description: "A rail-network system modelled as a weighted directed graph to dynamically recompute paths and minimise cascading delays.", tags: ["Python", "AI/ML", "Distributed Systems"], image: "/projects/chanakya.png", href: "https://chanakya-psi.vercel.app/" },
  { title: "Financial Threat Monitor", description: "An anomaly-detection system combining Random Forest and Isolation Forest methods for financial risk monitoring.", tags: ["Python", "Scikit-learn", "Streamlit"], image: "/projects/financial_threat_monitor.png" },
  { title: "Health Nexus", description: "A multi-role healthcare platform pairing secure routing and relational data with patient-vital monitoring and alerts.", tags: ["MySQL", "Node.js", "AI Analytics"], image: "/projects/health_nexus.png", href: "https://care-vista.vercel.app/" },
];

const skills: { label: string; glyph: GlyphName; tools: string[] }[] = [
  { label: "AI / ML", glyph: "spark", tools: ["Python", "Scikit-learn", "ML systems"] },
  { label: "Frontend", glyph: "code", tools: ["Next.js", "React", "Tailwind CSS"] },
  { label: "Backend", glyph: "server", tools: ["Node.js", "Express", "REST APIs"] },
  { label: "Data", glyph: "database", tools: ["MySQL", "Data modelling", "Analytics"] },
  { label: "Tools & Cloud", glyph: "cloud", tools: ["Git", "Docker", "AWS foundations"] },
];

const certifications = [
  ["DeepLearning.AI & Stanford", "Supervised Machine Learning: Regression & Classification", "Jan 2026 · Andrew Ng"],
  ["Amazon Web Services", "AWS Academy Graduate — Cloud Foundations", "Oct 2025 · 20 hours"],
  ["Palo Alto Networks", "Cybersecurity, Network & Cloud Security Foundations", "Mar 2026"],
  ["Cisco Networking Academy", "Introduction to Cybersecurity & Cybersecurity Essentials", "Aug 2025"],
  ["PentestingExams.com", "Certified Blue Team Practitioner — with Merit", "Mar 2026"],
  ["IBM, Infosys & HCL GUVI", "AI/ML internship, foundations & AI Impact Buildathon", "2025–26"],
];

const milestones = [
  ["2021", "Started my CS journey"],
  ["2022", "Explored web development"],
  ["2023", "Dived into AI/ML"],
  ["2024", "Built and shipped real projects"],
  ["2025–26", "Deepening focus on AI security and product systems"],
];

const navItems = ["home", "about", "projects", "skills", "journey", "contact"];
const darkSections = new Set(["projects", "certifications", "journey"]);

export default function Home() {
  const [active, setActive] = useState("home");
  const [project, setProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme] = useState<"light" | "dark">("dark");
  const [dragStart, setDragStart] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-38% 0px -50%" },
    );
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const changeProject = (direction: number) => setProject((current) => (current + direction + projects.length) % projects.length);
  const visibleProjects = [-1, 0, 1].map((offset) => projects[(project + offset + projects.length) % projects.length]);
  const endDrag = (clientX: number) => {
    if (dragStart === null) return;
    const distance = clientX - dragStart;
    if (Math.abs(distance) > 35) changeProject(distance > 0 ? -1 : 1);
    setDragStart(null);
  };
  const headerClass = theme === "dark" || darkSections.has(active) ? "site-header is-dark" : "site-header";

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={headerClass}>
      <nav className="container nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home">PRIYANSHU</a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation"><Glyph name="menu" /></button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => <a key={item} href={`#${item}`} className={active === item ? "active" : ""} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </div>
        <div className="nav-actions"><a className="talk-button" href="#contact">Let&apos;s Talk <Glyph name="arrow" /></a></div>
      </nav>
    </header>

    <main id="main">
      <section id="home" className={`hero ${theme === "dark" ? "dark-hero" : ""}`}><div className="container hero-grid">
        <div className="hero-copy-block">
          <p className="eyebrow">{theme === "dark" ? "Engineer · Builder · Problem Solver" : "AI Engineer · Builder · Problem Solver"}</p>
          <h1>{theme === "dark" ? <>Turning ideas<br />into <em>real impact.</em></> : <>I build<br />products<br />that <em>think.</em></>}</h1>
          <p className="section-copy">{theme === "dark" ? "I build AI-powered products that solve real problems and create meaningful experiences." : "Turning ideas into real-world solutions through AI, technology, and a deep curiosity for impact."}</p>
          <div className="button-row"><a className="button button-dark" href="#projects">Explore My Work <Glyph name="arrow" /></a><a className="button" href="/resume.pdf" download>Download CV <Glyph name="download" /></a></div>
          <div className="hero-stats"><span><b>5+</b> Projects</span><span><b>AI/ML</b> Focus Area</span><span><b>Always</b> Learning</span></div>
        </div>
        <div className="hero-portrait-wrap"><p className="scribble hero-scribble">Same<br />curiosity.<br />Bigger<br />impact.</p><Image src="/priyanshu-seated.png" alt="Priyanshu Tiwari" width={1254} height={1254} priority className="hero-portrait" /><p className="portrait-words">Ideas<br />Technology<br />People<br />Impact</p><span className="location-badge"><Glyph name="map" /> Currently in India</span></div>
      </div></section>

      <section id="about" className={`about ${theme === "dark" ? "dark-about dark-section" : "light-section"} section-pad`}><div className="container about-grid">
        <div><p className="eyebrow">01. About</p><h2>A curious mind<br />and a builder<br /><em>at heart.</em></h2><p className="section-copy">I&apos;m a Computer Science student who loves building AI-powered products, exploring new technologies, and creating solutions that make a real impact. I enjoy working at the intersection of technology, creativity, and strategy.</p><div className="trait-list"><Trait glyph="user" title="Problem Solver" /><Trait glyph="spark" title="Continuous Learner" /><Trait glyph="shield" title="Product Thinker" /><Trait glyph="map" title="Impact Driven" /></div><a className="button" href="#journey">Know More About Me <Glyph name="arrow" /></a></div>
        <div className="about-still-life"><div className="portrait-frame"><Image src="/priyanshu-portrait.png" alt="Priyanshu Tiwari" fill sizes="(max-width: 820px) 72vw, 32vw" /></div><p className="about-note">Better<br />Ideas<br />A Brighter<br />Tomorrow</p><div className="book-stack"><span>Ideas</span><span>Build</span><span>Solve</span><span>Repeat</span></div><i className="plant plant-one" /><i className="plant plant-two" /></div>
      </div></section>

      <section id="projects" className="projects dark-section section-pad"><div className="container"><div className="section-intro"><p className="eyebrow">02. Projects</p><h2>Products<br />I&apos;ve built.</h2><p className="section-copy">Selected work across AI, software development, and real-world problem solving.</p><a className="button button-ghost" href="#projects">Browse projects <Glyph name="arrow" /></a></div><div className="project-showcase"><p className="sr-only" aria-live="polite">Showing project {project + 1} of {projects.length}: {projects[project].title}</p><button className="carousel-button left" type="button" onClick={() => changeProject(-1)} aria-label="Previous project"><Glyph name="chevron-left" /></button><div className="project-track" onPointerDown={(event) => setDragStart(event.clientX)} onPointerUp={(event) => endDrag(event.clientX)} onPointerCancel={() => setDragStart(null)}>{visibleProjects.map((item, slot) => { const index = projects.indexOf(item); return <article className={`project-card ${slot === 1 ? "featured" : ""}`} key={`${item.title}-${slot}`} onClick={() => setProject(index)}><div className="project-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 88vw, 410px" /></div><div className="project-card-copy">{slot === 1 && <span className="featured-badge">Featured</span>}<p className="project-index">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p><h3>{item.title}</h3><p>{item.description}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="project-link">Visit project <Glyph name="arrow" /></a> : <span className="project-link is-muted">Case study in progress</span>}</div></article>; })}</div><button className="carousel-button right" type="button" onClick={() => changeProject(1)} aria-label="Next project"><Glyph name="chevron-right" /></button></div></div></section>

      <section id="skills" className={`skills ${theme === "dark" ? "dark-skills dark-section" : "light-section"} section-pad`}><div className="container skills-grid"><div><p className="eyebrow">03. Skills</p><h2>A toolkit<br />for what&apos;s next.</h2><p className="section-copy">Technologies I use to turn ideas into products. I&apos;m always learning and exploring new tools.</p><a className="button" href="#skills">Explore My Skills <Glyph name="arrow" /></a></div><div className={`skill-architecture ${theme === "dark" ? "dark-skill-architecture" : ""}`} aria-label="Technology skill categories"><div className="glass-tower" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="skill-list"><p>Technologies</p>{skills.map((skill) => <div className="skill-row" key={skill.label}><Glyph name={skill.glyph} /><div><b>{skill.label}</b><span>{skill.tools.join(" · ")}</span></div></div>)}</div></div></div></section>

      <section id="certifications" className="certifications dark-section section-pad"><div className="container"><div className="section-intro"><p className="eyebrow">04. Credentials</p><h2>Learning with<br />clear intent.</h2><p className="section-copy">Focused learning across AI, cloud, cybersecurity, and practical engineering.</p></div><div className="certification-grid">{certifications.map(([provider, title, detail], index) => <article className="certificate-card" key={title}><span>{String(index + 1).padStart(2, "0")}</span><p className="certificate-provider">{provider}</p><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section id="journey" className="journey dark-section section-pad"><div className="container journey-grid"><div><p className="eyebrow">05. Journey</p><h2>A path of<br />continuous growth.</h2><p className="section-copy">Key milestones, experiences, and learnings that have shaped my journey.</p><a className="button button-ghost" href="#contact">View Full Timeline <Glyph name="arrow" /></a></div><div className="timeline">{milestones.slice().reverse().map(([year, detail]) => <div className="timeline-item" key={year}><i /><div><b>{year}</b><span>{detail}</span></div></div>)}</div><p className="scribble journey-note">Still<br />Exploring...</p></div></section>

      <section id="notes" className="notes light-section section-pad"><div className="container"><div className="notes-heading"><p className="eyebrow">06. Thinking / Insights</p><h2>Notes from<br />my journey.</h2><p className="section-copy">Working notes on AI, product development, and everything I&apos;m learning along the way.</p></div><div className="note-grid">{[["What I learned building with LLMs", "Key lessons from building real AI applications."], ["A practical guide to RAG", "How I think about retrieval systems and useful answers."], ["Product thinking for engineers", "Why product thinking matters in technical work."]].map(([title, detail], index) => <article className="note-card" key={title}><div className={`note-art art-${index}`}><Glyph name={index === 0 ? "spark" : index === 1 ? "database" : "code"} /></div><p>In progress</p><h3>{title}</h3><span>{detail}</span><a href="mailto:official.priyanshu.37@gmail.com?subject=Portfolio%20note">Read more <Glyph name="arrow" /></a></article>)}</div></div></section>

      <section id="contact" className={`contact ${theme === "dark" ? "dark-contact dark-section" : "light-section"} section-pad`}><div className="container contact-grid"><div><p className="eyebrow">{theme === "dark" ? "06. Contact" : "07. Contact"}</p><h2>Let&apos;s build<br />something meaningful.</h2><p className="section-copy">I&apos;m always open to discussing new opportunities, interesting ideas, or potential collaborations.</p><div className="contact-links"><a href="mailto:official.priyanshu.37@gmail.com"><Glyph name="mail" /> official.priyanshu.37@gmail.com <Glyph name="arrow" /></a><a href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer"><Glyph name="linkedin" /> Connect on LinkedIn <Glyph name="arrow" /></a><a href="https://github.com/pds-37" target="_blank" rel="noreferrer"><Glyph name="github" /> View GitHub <Glyph name="arrow" /></a></div></div>{theme === "dark" ? <DarkContactScene /> : <div className="contact-scene" aria-hidden="true"><div className="scene-arch" /><div className="scene-column" /><div className="scene-steps"><i /><i /><i /></div><i className="plant plant-three" /><i className="plant plant-four" /><p>Good<br />Ideas<br />Take<br />Time.</p><span><Glyph name="map" /> Currently in India</span></div>}</div></section>
    </main>

    <footer className="site-footer"><div className="container"><strong>PRIYANSHU</strong><span>Build · Learn · Create · Repeat</span><small>© {new Date().getFullYear()} Priyanshu. All rights reserved.</small><div><a href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Glyph name="linkedin" /></a><a href="https://github.com/pds-37" target="_blank" rel="noreferrer" aria-label="GitHub"><Glyph name="github" /></a></div></div></footer>
  </>;
}

function DarkContactScene() { return <div className="dark-contact-scene" aria-hidden="true"><Image src="/earth-night.png" alt="" width={1024} height={1024} className="dark-contact-globe" /><i className="dark-orbit orbit-one" /><i className="dark-orbit orbit-two" /><p>Good ideas<br />can come from<br />anywhere.</p><span><Glyph name="map" /> Currently in India</span></div>; }

function Trait({ glyph, title }: { glyph: GlyphName; title: string }) { return <div><Glyph name={glyph} /><span>{title}</span></div>; }

function Glyph({ name }: { name: GlyphName }) {
  const glyphs: Record<GlyphName, string> = { arrow: "→", "chevron-left": "‹", "chevron-right": "›", cloud: "☁", code: "‹/›", database: "◉", download: "↓", github: "◌", linkedin: "in", mail: "✉", map: "⌖", menu: "☰", moon: "☾", spark: "✦", server: "▥", shield: "◇", sun: "☼", user: "◎" };
  return <span className={`glyph glyph-${name}`} aria-hidden="true">{glyphs[name]}</span>;
}
