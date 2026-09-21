import React from 'react';
import { BrainCircuit, Layers3, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import aboutBg from '../assets/about-hero-bg.png';

export default function About() {
  const features = [
    [BrainCircuit, "Problem Solver"],
    [Layers3, "Continuous Learner"],
    [Code2, "Product Thinker"],
    [CheckCircle2, "Impact Driven"]
  ];
  return (
    <section id="about" className="about section-dark">
      <img className="about-bg" src={aboutBg} alt="About background" />
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
}