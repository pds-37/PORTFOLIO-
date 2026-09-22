import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import journeyVisual from '../assets/journey-visual.png';

export default function Journey() {
  const milestones = [
    ["2026", "Building for Impact", "Working on AI-powered products, cybersecurity solutions, and open-source projects."],
    ["2025", "Advanced Development", "Built and deployed full-stack applications, dived deep into AI/ML and LLMs."],
    ["2024", "Explored Web Technologies", "Learned React, Node.js, databases and built initial projects."],
    ["2023", "The Beginning", "Started my B.Tech Computer Science journey with curiosity and a passion for technology."]
  ];
  return (
    <section id="journey" className="journey section-dark">
      <img src={journeyVisual} alt="Journey background" />
      <div className="journey-overlay" />
      <div className="journey-copy">
        <div className="reveal-item stagger-1">
          <SectionKicker num="05">JOURNEY</SectionKicker>
        </div>
        <h2 className="reveal-item stagger-2">A path of<br /><em>continuous growth.</em></h2>
        <p className="reveal-item stagger-3">A journey of curiosity, learning, building, challenging myself, and creating impact — and this is just the beginning.</p>
      </div>
      <div className="timeline reveal-item stagger-4">
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
      <div className="journey-stats reveal-item stagger-5">
        <div><b>3+</b><span>Years of Learning</span></div>
        <div><b>10+</b><span>Projects Built</span></div>
        <div><b>5+</b><span>Technologies</span></div>
        <div><b>∞</b><span>Curiosity</span></div>
      </div>
    </section>
  );
}