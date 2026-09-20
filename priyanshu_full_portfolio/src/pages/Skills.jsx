import React from 'react';
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
        <img src="/src/assets/skills-hero-bg.png" alt="Skills visualization" />
      </div>
      <div className="skill-list">
        {skills.map(([a, b]) => (
          <div key={a}><strong>{a}</strong><span>{b}</span></div>
        ))}
      </div>
    </section>
  );
}