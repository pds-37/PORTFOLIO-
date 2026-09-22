import React from 'react';
import { ArrowRight, Cpu, Code, Server, Database, Shield, Wrench, Sparkles } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import TiltCard from '../utils/useTilt';

export default function Skills() {
  const categories = [
    {
      title: "AI / ML & Intelligence",
      icon: Cpu,
      color: "#d6b27f",
      items: ["Python", "OpenAI", "LangChain", "RAG Pipeline", "Vector Search"]
    },
    {
      title: "Frontend & UI",
      icon: Code,
      color: "#61dafb",
      items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Vite"]
    },
    {
      title: "Backend & Systems",
      icon: Server,
      color: "#68a063",
      items: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets"]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "#47a248",
      items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "MySQL"]
    },
    {
      title: "Cybersecurity & Security",
      icon: Shield,
      color: "#ff6b6b",
      items: ["Threat Detection", "Digital Forensics", "Agent Supervision", "Network Security"]
    },
    {
      title: "DevOps & Tooling",
      icon: Wrench,
      color: "#a855f7",
      items: ["Git / GitHub", "Docker", "Linux", "Postman", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="skills section-dark">
      <div className="skills-copy">
        <div className="reveal-item stagger-1">
          <SectionKicker num="04" dark={true}>SKILLS & CAPABILITIES</SectionKicker>
        </div>
        <h2 className="reveal-item stagger-2">A toolkit<br /><em>for what's next.</em></h2>
        <p className="reveal-item stagger-3">Technologies I use to turn ideas into products. I'm always learning, experimenting, and sharpening the tools that matter.</p>
        <div className="reveal-item stagger-4">
          <a href="https://github.com/pds-37" target="_blank" rel="noreferrer" className="btn light">
            Explore GitHub <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Animated 3D Glass Tech Core */}
      <div className="skills-core-visual reveal-item stagger-2">
        <div className="core-orbit-ring ring-1" />
        <div className="core-orbit-ring ring-2" />
        <div className="core-glass-card">
          <div className="core-glow-point" />
          <Sparkles className="core-icon" size={28} />
          <h3>AI & Full-Stack Core</h3>
          <p>Architecting secure, intelligent, end-to-end applications</p>
          <div className="core-pills">
            <span>AI / ML</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>Data</span>
            <span>Security</span>
            <span>DevOps</span>
          </div>
        </div>
      </div>

      {/* Skill Cards Grid with 3D Tilt */}
      <div className="skills-matrix">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <TiltCard 
              key={cat.title} 
              className="skill-card"
              max={12}
              scale={1.03}
              style={{ 
                '--cat-color': cat.color, 
                '--cat-glow': `${cat.color}33`,
                '--tilt-glare': `${cat.color}25`
              }}
            >
              <div className="skill-card-header">
                <Icon size={16} style={{ color: cat.color }} />
                <strong>{cat.title}</strong>
              </div>
              <div className="skill-card-tags">
                {cat.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}