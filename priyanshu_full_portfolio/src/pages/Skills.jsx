import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills section-dark">
      <div className="skills-copy">
        <SectionKicker num="04" dark={true}>SKILLS</SectionKicker>
        <h2>A toolkit<br /><em>for what's next.</em></h2>
        <p>Technologies I use to turn ideas into products. I'm always learning, experimenting, and sharpening the tools that matter.</p>
        <a href="https://github.com/pds-37" target="_blank" rel="noreferrer" className="btn light">
          Explore My Skills <ArrowRight size={15} />
        </a>
      </div>

      <div className="skills-visual">
        <img src="/assets/skills-cube.png" alt="3D Glass Skills Cube" />
      </div>

      <div className="skill-list">
        {skills.map(([category, items]) => (
          <div key={category}>
            <strong>{category}</strong>
            <span>{items}</span>
          </div>
        ))}
      </div>
    </section>
  );
}