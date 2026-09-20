import os
from pathlib import Path
import shutil, json

root = Path("d:/Projects/PORTFOLIO--main/priyanshu_full_portfolio")
src = root / "src"
components = src / "components"
pages = src / "pages"
assets = src / "assets"
public = root / "public"
for p in [components, pages, assets, public]:
    p.mkdir(parents=True, exist_ok=True)

package_json = {
    "name": "priyanshu-portfolio",
    "private": True,
    "version": "1.0.0",
    "type": "module",
    "scripts": {"dev": "vite", "build": "vite build", "preview": "vite preview"},
    "dependencies": {"@vitejs/plugin-react": "latest", "vite": "latest", "react": "latest", "react-dom": "latest", "lucide-react": "latest"},
    "devDependencies": {}
}
(root / "package.json").write_text(json.dumps(package_json, indent=2), encoding="utf-8")

(root / "index.html").write_text('''<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Priyanshu — Computer Science student, engineer and builder creating AI-powered products." />
  <meta name="theme-color" content="#080a0b" />
  <title>Priyanshu — Engineer · Builder · Problem Solver</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
''', encoding="utf-8")

(root / "src" / "main.jsx").write_text(r'''import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2,
  Code2, Download, Github, Linkedin, Mail, Menu, X, ShieldCheck,
  BrainCircuit, Database, Layers3, LockKeyhole, Search, Server,
  Sparkles, Terminal, ExternalLink
} from "lucide-react";
import "./styles.css";

const A = "/src/assets/";

const projects = [
  {
    id:"guardianos",
    title:"GuardianOS",
    eyebrow:"AI SECURITY · AGENT SUPERVISION",
    desc:"An open-source AI security firewall and agent supervisor designed to detect prompt injection, risky actions, data exfiltration and rogue agent behavior.",
    tags:["Python","FastAPI","React","PostgreSQL","Redis","Neo4j"],
    image:"projects-preview.png",
    accent:"gold"
  },
  {
    id:"hashguard",
    title:"HashGuard",
    eyebrow:"DIGITAL FORENSICS · EVIDENCE INTEGRITY",
    desc:"A tamper-evident digital security evidence platform that preserves, fingerprints and verifies evidence throughout an investigation.",
    tags:["SHA-256","Chain of Custody","Security","Forensics"],
    image:"contextmind.png",
    accent:"blue"
  },
  {
    id:"swasthaparivar",
    title:"SwasthaParivar",
    eyebrow:"AI · FULL STACK · HEALTHCARE",
    desc:"A healthcare platform combining a MERN application with AI assistance, patient workflows and a security-first V2 architecture.",
    tags:["React","Node.js","MongoDB","Gemini","Security"],
    image:"contact-preview.png",
    accent:"cream"
  },
  {
    id:"salary",
    title:"Employee Salary Prediction",
    eyebrow:"MACHINE LEARNING · STREAMLIT",
    desc:"A supervised learning application using the Adult Income dataset, Logistic Regression and an interactive Streamlit interface.",
    tags:["Python","Scikit-learn","Logistic Regression","Streamlit"],
    image:"skills-preview.png",
    accent:"gold",
    link:"https://github.com/pds-37/Employee-Salary-Prediction"
  },
  {
    id:"contextmind",
    title:"ContextMind",
    eyebrow:"RAG · LLM · VECTOR SEARCH",
    desc:"An intelligent knowledge assistant concept built around retrieval, semantic search and natural interaction with personal information.",
    tags:["Next.js","OpenAI","Pinecone","RAG"],
    image:"contextmind.png",
    accent:"cream"
  }
];

const skills = [
  ["AI / ML", "Python · OpenAI · LangChain · RAG · Embeddings"],
  ["Frontend", "React · Next.js · Tailwind CSS · Responsive UI"],
  ["Backend", "Node.js · Express · REST APIs · FastAPI"],
  ["Data", "MongoDB · PostgreSQL · MySQL · Vector Databases"],
  ["Security", "Threat Detection · Incident Response · Network Security"],
  ["Tools", "Git · GitHub · Docker · Postman · Linux"]
];

function Nav({active,setActive}) {
  const [open,setOpen] = useState(false);
  const links = ["Home","About","Projects","Skills","Journey","Insights","Contact"];
  const go = (id) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth"});
  };
  return <header className="nav">
    <button className="brand" onClick={()=>go("Home")}>PRIYANSHU</button>
    <nav className={open ? "nav-links open":"nav-links"}>
      {links.map(l=><button key={l} className={active===l?"active":""} onClick={()=>go(l)}>{l}</button>)}
    </nav>
    <div className="nav-actions">
      <button className="talk" onClick={()=>go("Contact")}>Let's Talk <ArrowRight size={15}/></button>
      <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={19}/> : <Menu size={19}/>}
      </button>
    </div>
  </header>
}

function SectionKicker({num,children,dark=false}) {
  return <div className={"kicker "+(dark?"dark":"")}><span>{num}</span><i>·</i>{children}</div>
}

function Hero({go}) {
  return <section id="home" className="hero section-dark">
    <img className="hero-bg" src={A+"hero-bg.png"} alt="" />
    <div className="hero-vignette"/>
    <div className="hero-copy">
      <SectionKicker num="00">ENGINEER · BUILDER · PROBLEM SOLVER</SectionKicker>
      <h1>Turning Ideas<br/>Into <em>Real Impact.</em></h1>
      <p>I build AI-powered products that solve real problems and create meaningful experiences through technology, curiosity, and continuous learning.</p>
      <div className="hero-ctas">
        <button className="btn light" onClick={()=>go("Projects")}>Explore My Work <ArrowRight size={16}/></button>
        <a className="btn outline" href="/resume.pdf"><Download size={15}/> Download CV</a>
        <div className="socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={15}/></a>
          <a href="https://github.com/pds-37" target="_blank" rel="noreferrer"><Github size={15}/></a>
          <a href="mailto:work.priyanshu37@gmail.com"><Mail size={15}/></a>
        </div>
      </div>
    </div>
    <div className="scribble hero-scribble">Same<br/>Curiosity<br/>Bigger<br/>Impact <span>?</span></div>
    <div className="hero-stats">
      <div><strong>3+</strong><span>Projects</span></div>
      <div><strong>AI/ML</strong><span>Focus Area</span></div>
      <div><strong>Always</strong><span>Learning</span></div>
    </div>
    <div className="scroll-cue"><span className="mouse"></span>Scroll to explore</div>
  </section>
}

function About() {
  const features = [
    [BrainCircuit,"Problem Solver"],[Layers3,"Continuous Learner"],[Code2,"Product Thinker"],[CheckCircle2,"Impact Driven"]
  ];
  return <section id="about" className="about section-dark">
    <img className="about-bg" src={A+"about-bg.png"} alt="" />
    <div className="about-overlay"/>
    <div className="about-copy">
      <SectionKicker num="01">ABOUT</SectionKicker>
      <h2>A curious mind<br/>and a <em>builder</em> at heart.</h2>
      <p>I'm a Computer Science student who loves building AI-powered products, exploring new technologies, and creating solutions that make a real impact. I enjoy working at the intersection of technology, creativity, and strategy.</p>
      <div className="feature-row">{features.map(([Icon,t])=><div className="feature" key={t}><Icon/><span>{t}</span></div>)}</div>
      <a className="btn outline" href="#journey">Know More About Me <ArrowRight size={15}/></a>
    </div>
    <div className="about-label ideas">Ideas</div>
    <div className="about-label tech">Technology</div>
    <div className="about-label people">People</div>
    <div className="about-label impact">Impact</div>
    <div className="scribble wall-scribble">Same<br/>Curiosity<br/>Bigger<br/>Impact</div>
  </section>
}

function Projects() {
  const [active,setActive] = useState(0);
  const p = projects[active];
  return <section id="projects" className="projects section-light">
    <div className="projects-intro">
      <SectionKicker num="02">PROJECTS</SectionKicker>
      <h2>Products<br/><em>I've built.</em></h2>
      <p>A collection of projects across AI, software development, security and problem solving.</p>
      <div className="project-controls">
        <button onClick={()=>setActive((active-1+projects.length)%projects.length)}><ArrowLeft size={16}/></button>
        <span>{String(active+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</span>
        <button onClick={()=>setActive((active+1)%projects.length)}><ArrowRight size={16}/></button>
      </div>
    </div>
    <div className="project-stage">
      <article className="featured-project">
        <div className="project-image-wrap">
          <img src={A+p.image} alt="" />
          <div className="featured-pill">Featured</div>
        </div>
        <div className="project-info">
          <div className="project-eyebrow">{p.eyebrow}</div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
          <div className="project-actions">
            {p.link ? <a className="btn dark" href={p.link} target="_blank" rel="noreferrer">View Project <ExternalLink size={14}/></a> : <button className="btn dark">View Project <ArrowRight size={14}/></button>}
            <button className="btn mini">Case Study</button>
          </div>
        </div>
      </article>
      <div className="project-side-cards">
        {projects.filter((_,i)=>i!==active).slice(0,2).map((x)=><button key={x.id} className="side-project" onClick={()=>setActive(projects.findIndex(y=>y.id===x.id))}>
          <img src={A+x.image} alt="" />
          <div><small>{x.eyebrow}</small><strong>{x.title}</strong></div>
        </button>)}
      </div>
    </div>
  </section>
}

function ProjectDetail() {
  return <section id="project-detail" className="detail section-dark">
    <div className="detail-copy">
      <SectionKicker num="03">PROJECT DETAIL</SectionKicker>
      <h2>ContextMind</h2>
      <div className="detail-sub">Your Knowledge, Amplified.</div>
      <p>An intelligent knowledge assistant that uses LLMs, embeddings, and vector search to help you organize, search, and interact with your information naturally.</p>
      <div className="detail-buttons"><button className="btn light">Live Demo <ArrowRight size={15}/></button><button className="btn outline"><Github size={15}/> View Code</button></div>
    </div>
    <div className="detail-image"><img src={A+"contextmind.png"} alt="ContextMind project preview"/></div>
    <div className="detail-features">
      <span><BrainCircuit/> LLM Powered</span><span><Search/> Vector Search</span><span><Sparkles/> RAG Pipeline</span><span><Server/> Modern Stack</span>
    </div>
  </section>
}

function Skills() {
  return <section id="skills" className="skills section-light">
    <div className="skills-copy">
      <SectionKicker num="04">SKILLS</SectionKicker>
      <h2>A toolkit<br/><em>for what's next.</em></h2>
      <p>Technologies I use to turn ideas into products. I'm always learning, experimenting, and sharpening the tools that matter.</p>
      <button className="btn dark">Explore My Skills <ArrowRight size={15}/></button>
    </div>
    <div className="skills-visual">
      <div className="cube-stack"><div/><div/><div/><div/><div/><div/></div>
      <div className="skill-orbit orbit-a">AI/ML</div><div className="skill-orbit orbit-b">Frontend</div><div className="skill-orbit orbit-c">Backend</div><div className="skill-orbit orbit-d">Data</div><div className="skill-orbit orbit-e">Tools</div>
    </div>
    <div className="skill-list">{skills.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>
  </section>
}

function Journey() {
  const milestones = [
    ["2025","Building for Impact","Working on AI-powered products, cybersecurity solutions, and open-source projects."],
    ["2024","Real-World Development","Built and deployed full-stack applications, explored AI/ML and strengthened problem-solving."],
    ["2023","Dived into AI/ML","Explored machine learning, LLMs, and generative AI through projects and experimentation."],
    ["2022","Explored Web Development","Learned HTML, CSS, JavaScript, React and backend technologies."],
    ["2021","The Beginning","Started my Computer Science journey with curiosity and a passion for technology."]
  ];
  return <section id="journey" className="journey section-dark">
    <img src={A+"journey-visual.png"} alt="" />
    <div className="journey-overlay"/>
    <div className="journey-copy"><SectionKicker num="05">JOURNEY</SectionKicker><h2>A path of<br/><em>continuous growth.</em></h2><p>A journey of curiosity, learning, building, challenging myself, and creating impact — and this is just the beginning.</p><button className="btn outline">View Full Timeline <ArrowRight size={15}/></button></div>
    <div className="timeline">{milestones.map(([year,title,desc])=><div className="milestone" key={year}><span className="dot"/><div><strong>{year}</strong><h3>{title}</h3><p>{desc}</p></div></div>)}</div>
    <div className="journey-stats"><div><b>4+</b><span>Years of Learning</span></div><div><b>10+</b><span>Projects Built</span></div><div><b>5+</b><span>Technologies</span></div><div><b>8</b><span>Curiosity</span></div></div>
  </section>
}

function Insights() {
  const posts = [
    ["Aug 10, 2024","What I Learned Building with LLMs","Key lessons from building real LLM applications.","insights-preview.png"],
    ["Jul 22, 2024","A Practical Guide to RAG","How I built a RAG system and what I learned.","contextmind.png"],
    ["Jun 15, 2024","Product Thinking for Engineers","Why product thinking matters even as a technical person.","skills-preview.png"]
  ];
  return <section id="insights" className="insights section-light">
    <div className="insights-head"><div><SectionKicker num="06">THINKING / INSIGHTS</SectionKicker><h2>Notes from<br/><em>my journey.</em></h2><p>Thoughts, learnings, and ideas around AI, product development, and everything in between.</p></div><button className="btn outline dark-outline">Read All Articles <ArrowRight size={15}/></button></div>
    <div className="posts">{posts.map(([date,title,desc,img])=><article key={title}><img src={A+img} alt="" /><div className="post-body"><small>{date}</small><h3>{title}</h3><p>{desc}</p><a href="#insights">Read More <ArrowRight size={13}/></a></div></article>)}</div>
  </section>
}

function Contact() {
  return <section id="contact" className="contact section-light">
    <div className="contact-copy"><SectionKicker num="07">CONTACT</SectionKicker><h2>Let's build<br/><em>something meaningful.</em></h2><p>I'm always open to discussing new opportunities, interesting ideas, or potential collaborations.</p>
      <div className="contact-links">
        <a href="mailto:work.priyanshu37@gmail.com"><Mail/>work.priyanshu37@gmail.com <ArrowRight/></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin/>Connect on LinkedIn <ArrowRight/></a>
        <a href="https://github.com/pds-37" target="_blank" rel="noreferrer"><Github/>View GitHub <ArrowRight/></a>
      </div>
    </div>
    <div className="contact-art"><img src={A+"contact-preview.png"} alt="" /></div>
    <div className="scribble contact-note">Good<br/>Ideas<br/>Take<br/>Time.</div>
  </section>
}

function Footer(){ return <footer><span>PRIYANSHU</span><span>Build · Learn · Create · Repeat</span><span>© 2026 Priyanshu. All rights reserved.</span></footer> }

function App(){
  const [active,setActive] = useState("Home");
  const go=(name)=>{setActive(name); document.getElementById(name.toLowerCase())?.scrollIntoView({behavior:"smooth"});}
  useEffect(()=>{
    const ids=["home","about","projects","skills","journey","insights","contact"];
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))})
    },{rootMargin:"-35% 0px -55% 0px"});
    ids.forEach(id=>{const el=document.getElementById(id); if(el)obs.observe(el)});
    return()=>obs.disconnect();
  },[]);
  return <div>
    <Nav active={active} setActive={setActive}/>
    <main>
      <Hero go={go}/>
      <About/>
      <Projects/>
      <ProjectDetail/>
      <Skills/>
      <Journey/>
      <Insights/>
      <Contact/>
    </main>
    <Footer/>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
''', encoding="utf-8")

(root / "src" / "styles.css").write_text(r''':root{
  --dark:#080a0b;--light:#f1ece4;--ink:#111212;--muted:#7f807c;
  --gold:#d6b27f;--cream:#f5eee4;--line:rgba(255,255,255,.18);
}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,system-ui,sans-serif;background:var(--dark);color:white}
button,a{font:inherit}button{cursor:pointer}
.section-dark{background:var(--dark);color:white}.section-light{background:var(--light);color:var(--ink)}
.nav{position:fixed;top:0;left:0;right:0;height:82px;padding:0 4.5vw;display:flex;align-items:center;justify-content:space-between;z-index:100;background:linear-gradient(180deg,rgba(0,0,0,.32),transparent);mix-blend-mode:normal}
.brand{background:none;border:0;color:white;font-weight:800;font-size:15px;letter-spacing:.2px}
.nav-links{display:flex;gap:30px;align-items:center}.nav-links button{background:none;border:0;color:rgba(255,255,255,.82);font-size:12px;position:relative;padding:8px 0}.nav-links button.active{color:#fff}.nav-links button.active:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1.5px;background:var(--gold)}
.nav-actions{display:flex;align-items:center;gap:10px}.talk{border:0;background:var(--cream);color:#111;border-radius:999px;padding:12px 18px;font-weight:600;font-size:12px;display:flex;gap:10px;align-items:center}.menu-btn{display:none;border:1px solid rgba(255,255,255,.25);background:rgba(0,0,0,.25);color:white;border-radius:50%;width:38px;height:38px}
.hero,.about,.detail,.journey{min-height:100vh;position:relative;overflow:hidden}.hero-bg,.about-bg,.journey>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.hero-vignette{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,6,7,.28),transparent 72%),linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.65));z-index:1}.hero-copy{position:absolute;left:6%;top:50%;transform:translateY(-45%);width:min(600px,50vw);z-index:4}.kicker{font-size:10px;letter-spacing:3.5px;color:#cfcac2;text-transform:uppercase;margin-bottom:24px}.kicker span{color:var(--gold)}.kicker i{font-style:normal;margin:0 7px;color:#8d8d89}.hero h1,.about h2,.detail h2,.skills h2,.journey h2,.insights h2,.contact h2{font-size:clamp(48px,5.4vw,90px);line-height:.95;letter-spacing:-4px;margin:0;font-weight:700}.hero h1 em,.about h2 em,.detail h2 em,.skills h2 em,.journey h2 em,.insights h2 em,.contact h2 em{font-style:normal;color:var(--gold)}.hero-copy p{max-width:510px;color:#c0c0bb;line-height:1.65;font-size:15px;margin:25px 0 0}.hero-ctas{display:flex;align-items:center;gap:12px;margin-top:30px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:11px;min-height:44px;padding:0 19px;border-radius:999px;text-decoration:none;border:1px solid transparent;font-size:12px;font-weight:600;background:none}.btn.light{background:var(--cream);color:#111}.btn.outline{border-color:rgba(255,255,255,.48);color:white}.btn.dark{background:#111;color:white}.btn.mini{border-color:#ccc;color:#333}.socials{display:flex;gap:8px}.socials a{width:34px;height:34px;border:1px solid rgba(255,255,255,.25);border-radius:50%;display:grid;place-items:center;color:white;text-decoration:none}.scribble{font-family:"Caveat",cursive}.hero-scribble{position:absolute;left:47%;top:24%;z-index:5;font-size:23px;line-height:.95;transform:rotate(-7deg);color:#eee5d9}.hero-scribble span{font-family:Inter;font-size:25px;display:block;margin-left:50px}.hero-stats{position:absolute;bottom:42px;left:6%;z-index:5;display:flex}.hero-stats div{min-width:125px;padding:0 24px;border-left:1px solid var(--line)}.hero-stats div:first-child{border-left:0;padding-left:0}.hero-stats strong{display:block;color:#e0bb88;font-size:16px}.hero-stats span{font-size:10px;color:#aaa}.scroll-cue{position:absolute;right:6%;bottom:42px;z-index:5;font-size:10px;color:#bbb;display:flex;align-items:center;gap:10px}.mouse{width:18px;height:29px;border:1px solid #ddd;border-radius:10px;display:block;position:relative}.mouse:after{content:"";position:absolute;left:50%;top:6px;width:2px;height:6px;background:#ddd}
.about-bg{filter:none}.about-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,7,8,.1),transparent 65%),linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.75));z-index:1}.about-copy{position:absolute;left:4.6%;top:50%;transform:translateY(-48%);width:47%;z-index:5}.about-copy>p{max-width:610px;color:#dedbd5;font-size:15px;line-height:1.6;margin:24px 0}.feature-row{display:flex;margin:34px 0 30px}.feature{display:flex;align-items:center;gap:10px;padding:0 22px;border-left:1px solid var(--line);min-width:145px}.feature:first-child{border:0;padding-left:0}.feature svg{color:#e4c18f;width:28px}.feature span{font-size:12px;line-height:1.2}.about-label{position:absolute;z-index:5;font-size:17px;color:#eee}.ideas{right:46%;top:18%}.tech{right:13%;top:24%}.people{right:48%;top:52%}.impact{right:11%;top:57%}.wall-scribble{position:absolute;right:3%;top:30%;z-index:5;color:rgba(255,255,255,.4);font-size:22px;line-height:1.05}
.projects{min-height:100vh;padding:120px 5vw 70px;display:grid;grid-template-columns:26% 1fr;gap:5vw;align-items:center}.projects-intro h2{font-size:clamp(48px,5vw,78px);line-height:.95;letter-spacing:-3px;margin:0}.projects-intro h2 em{color:#9d7750;font-style:normal}.projects-intro p{color:#777;line-height:1.6;font-size:14px;max-width:310px;margin:22px 0 30px}.project-controls{display:flex;align-items:center;gap:16px;color:#666}.project-controls button{width:36px;height:36px;border:1px solid #bbb;background:transparent;border-radius:50%;display:grid;place-items:center}.project-stage{display:grid;grid-template-columns:minmax(0,1fr) 180px;gap:18px}.featured-project{background:#fff;border:1px solid #ddd;border-radius:20px;padding:16px;box-shadow:0 18px 50px rgba(0,0,0,.07)}.project-image-wrap{position:relative;border-radius:14px;overflow:hidden;background:#101314}.project-image-wrap img{width:100%;height:340px;object-fit:cover;display:block}.featured-pill{position:absolute;top:15px;right:15px;background:#f4e5bd;color:#16120d;border-radius:999px;padding:8px 12px;font-size:10px;font-weight:700}.project-info{padding:18px 6px 4px}.project-eyebrow{font-size:9px;letter-spacing:2px;color:#8c755d}.project-info h3{font-size:27px;margin:8px 0}.project-info p{font-size:13px;color:#666;line-height:1.55;max-width:620px}.tags{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0}.tags span{padding:7px 9px;border:1px solid #ddd;border-radius:999px;font-size:9px;color:#666}.project-actions{display:flex;gap:8px}.side-project{border:1px solid #ddd;background:#fff;border-radius:15px;padding:8px;text-align:left;cursor:pointer}.side-project img{width:100%;height:115px;object-fit:cover;border-radius:10px;display:block}.side-project small{display:block;font-size:7px;color:#888;margin-top:9px}.side-project strong{display:block;font-size:13px;margin-top:3px}
.detail{background:#0a0c0d;padding:130px 5vw 70px;display:grid;grid-template-columns:40% 1fr;grid-template-rows:1fr auto;gap:30px;align-items:center}.detail-copy{max-width:570px}.detail-copy .detail-sub{font-size:20px;color:#e8e4dc;margin-top:5px}.detail-copy p{color:#a8a8a4;line-height:1.65;font-size:14px;max-width:520px}.detail-buttons{display:flex;gap:10px;margin-top:25px}.detail-image{border:1px solid #303334;border-radius:20px;overflow:hidden;box-shadow:0 25px 80px rgba(0,0,0,.3)}.detail-image img{width:100%;height:440px;object-fit:cover;display:block}.detail-features{grid-column:1/-1;display:grid;grid-template-columns:repeat(4,1fr);gap:15px;border-top:1px solid #292b2c;padding-top:18px}.detail-features span{display:flex;gap:9px;align-items:center;color:#bbb;font-size:11px}.detail-features svg{width:17px;color:#d8b584}
.skills{min-height:100vh;padding:130px 5vw 80px;display:grid;grid-template-columns:27% 43% 30%;gap:2vw;align-items:center}.skills-copy p{color:#777;line-height:1.6;font-size:14px;max-width:310px;margin:23px 0 30px}.skills-visual{height:520px;position:relative;display:grid;place-items:center}.cube-stack{position:relative;width:230px;height:230px;transform:rotate(-1deg)}.cube-stack div{position:absolute;width:100px;height:100px;border:1px solid #bbb;background:linear-gradient(145deg,rgba(255,255,255,.95),rgba(220,216,207,.35));box-shadow:0 15px 35px rgba(0,0,0,.08);transform:rotate(30deg) skewY(-10deg);border-radius:7px}.cube-stack div:nth-child(1){left:65px;top:0}.cube-stack div:nth-child(2){left:10px;top:60px}.cube-stack div:nth-child(3){left:120px;top:60px}.cube-stack div:nth-child(4){left:65px;top:120px}.cube-stack div:nth-child(5){left:10px;top:180px}.cube-stack div:nth-child(6){left:120px;top:180px}.skill-orbit{position:absolute;font-size:12px;font-weight:600;color:#555}.orbit-a{top:80px;left:12%}.orbit-b{top:28%;right:12%}.orbit-c{bottom:30%;left:8%}.orbit-d{bottom:15%;right:15%}.orbit-e{top:50%;left:47%}.skill-list{border-left:1px solid #ccc;padding-left:28px}.skill-list div{padding:17px 0;border-bottom:1px solid #ddd;display:flex;flex-direction:column;gap:5px}.skill-list strong{font-size:13px}.skill-list span{font-size:11px;color:#777}
.journey>img{filter:brightness(.5)}.journey-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,7,8,.82),rgba(5,7,8,.3) 65%,rgba(5,7,8,.18));z-index:1}.journey-copy{position:absolute;left:5%;top:21%;width:38%;z-index:4}.journey-copy p{color:#c0c0bb;line-height:1.6;font-size:14px;max-width:450px;margin:24px 0}.timeline{position:absolute;left:50%;top:15%;width:44%;z-index:4;border-left:1px solid rgba(255,255,255,.45);padding-left:35px}.milestone{position:relative;padding:0 0 20px}.milestone .dot{position:absolute;left:-43px;top:3px;width:16px;height:16px;border:2px solid #eee;border-radius:50%;background:#d8b584}.milestone strong{font-size:18px}.milestone h3{margin:3px 0;font-size:16px}.milestone p{margin:0;color:#b2b2ae;font-size:11px;line-height:1.45;max-width:390px}.journey-stats{position:absolute;bottom:25px;left:5%;right:5%;z-index:5;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.journey-stats div{border:1px solid rgba(255,255,255,.25);border-radius:13px;padding:13px 17px;background:rgba(0,0,0,.14)}.journey-stats b{font-size:20px}.journey-stats span{display:block;font-size:10px;color:#aaa;margin-top:4px}
.insights{min-height:80vh;padding:120px 5vw 90px}.insights-head{display:flex;justify-content:space-between;align-items:end;gap:30px}.insights-head h2{font-size:clamp(48px,5vw,75px);line-height:.95;letter-spacing:-3px}.insights-head p{max-width:420px;color:#777;line-height:1.6;font-size:13px}.dark-outline{border-color:#aaa;color:#111}.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:55px}.posts article{background:#fff;border:1px solid #ddd;border-radius:14px;overflow:hidden}.posts img{width:100%;height:210px;object-fit:cover;display:block}.post-body{padding:18px}.post-body small{color:#999;font-size:9px}.post-body h3{font-size:16px;margin:8px 0}.post-body p{color:#777;font-size:11px;line-height:1.5}.post-body a{display:inline-flex;gap:8px;align-items:center;color:#222;text-decoration:none;font-size:10px;margin-top:10px}
.contact{min-height:80vh;padding:120px 5vw 80px;display:grid;grid-template-columns:43% 57%;position:relative;overflow:hidden}.contact-copy{align-self:center;z-index:2}.contact-copy p{color:#777;max-width:430px;line-height:1.6;font-size:14px;margin:23px 0 28px}.contact-links{display:grid;gap:9px;max-width:470px}.contact-links a{display:flex;align-items:center;gap:12px;padding:13px 15px;border:1px solid #d1cec7;border-radius:10px;text-decoration:none;color:#222;font-size:11px}.contact-links a svg:last-child{margin-left:auto}.contact-art{align-self:center;border-radius:20px;overflow:hidden;max-height:500px}.contact-art img{width:100%;height:500px;object-fit:cover;display:block}.contact-note{position:absolute;right:4%;top:24%;font-size:28px;color:#777;line-height:.95;transform:rotate(4deg)}
footer{height:72px;background:#0a0c0d;color:#aaa;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;font-size:10px}
footer span:first-child{color:#fff;font-weight:700}
@media(max-width:1000px){.nav-links{gap:16px}.hero-copy,.about-copy{width:55%}.hero-scribble,.about-label,.wall-scribble{display:none}.projects{grid-template-columns:1fr}.project-stage{grid-template-columns:1fr}.project-side-cards{display:none}.skills{grid-template-columns:1fr 1fr}.skill-list{grid-column:1/-1}.journey-copy{width:40%}.timeline{left:48%;width:48%}}
@media(max-width:760px){.nav{height:70px;padding:0 20px}.nav-links{display:none;position:absolute;top:70px;left:15px;right:15px;padding:14px;border:1px solid rgba(255,255,255,.12);background:rgba(8,10,11,.95);border-radius:14px;flex-direction:column;align-items:stretch}.nav-links.open{display:flex}.nav-links button{text-align:left;padding:10px}.menu-btn{display:grid;place-items:center}.hero-copy,.about-copy{left:22px;right:22px;width:auto;top:46%}.hero h1,.about h2,.detail h2,.skills h2,.journey h2,.insights h2,.contact h2{font-size:clamp(43px,11vw,65px);letter-spacing:-2.5px}.hero-copy p,.about-copy>p{font-size:13px}.hero-ctas{flex-wrap:wrap}.hero-stats{left:22px;bottom:25px}.hero-stats div{min-width:85px;padding:0 12px}.scroll-cue{display:none}.projects{padding:100px 22px 60px}.featured-project{padding:10px}.project-image-wrap img{height:230px}.detail{padding:110px 22px 60px;grid-template-columns:1fr}.detail-image img{height:260px}.detail-features{grid-template-columns:repeat(2,1fr)}.skills{padding:100px 22px 60px;grid-template-columns:1fr}.skills-visual{height:360px}.skill-list{grid-column:auto}.journey{min-height:1200px}.journey-copy{left:22px;width:calc(100% - 44px);top:14%}.timeline{left:28px;top:39%;width:calc(100% - 55px)}.journey-stats{left:22px;right:22px;grid-template-columns:repeat(2,1fr)}.insights{padding:100px 22px 60px}.insights-head{display:block}.posts{grid-template-columns:1fr}.contact{padding:100px 22px 60px;grid-template-columns:1fr}.contact-art{margin-top:35px}.contact-note{display:none}footer{height:auto;padding:22px;gap:12px;flex-direction:column;align-items:flex-start}}
''', encoding="utf-8")
