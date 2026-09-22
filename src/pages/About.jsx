import React, { useState } from 'react';
import { BrainCircuit, Layers3, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionKicker from '../components/SectionKicker';
import aboutBg from '../assets/about-hero-bg.png';

export default function About() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const features = [
    [BrainCircuit, "Problem Solver"],
    [Layers3, "Continuous Learner"],
    [Code2, "Product Thinker"],
    [CheckCircle2, "Impact Driven"]
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.02;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.02;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      className="about section-dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className="about-bg" src={aboutBg} alt="About background" />
      <div className="about-overlay" />

      <div className="about-copy">
        <div className="reveal-item stagger-1">
          <SectionKicker num="01">ABOUT</SectionKicker>
        </div>

        <h2 className="reveal-item stagger-2">
          A curious mind<br />and a <em>builder</em> at heart.
        </h2>

        <p className="reveal-item stagger-3">
          I'm a Computer Science student who loves building AI-powered products, exploring new technologies, and creating solutions that make a real impact. I enjoy working at the intersection of technology, creativity, and strategy.
        </p>

        <div className="feature-row reveal-item stagger-4">
          {features.map(([Icon, t]) => (
            <div className="feature" key={t}>
              <Icon />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <div className="reveal-item stagger-5">
          <a className="btn outline" href="#journey">
            Know More About Me <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Floating 3D Parallax Tags */}
      <div
        className="about-label ideas parallax-layer"
        style={{ transform: `translate3d(${parallax.x * -1.8}px, ${parallax.y * -1.8}px, 0)` }}
      >
        Ideas
      </div>
      <div
        className="about-label tech parallax-layer"
        style={{ transform: `translate3d(${parallax.x * 2.2}px, ${parallax.y * 2.2}px, 0)` }}
      >
        Technology
      </div>
      <div
        className="about-label people parallax-layer"
        style={{ transform: `translate3d(${parallax.x * -1.4}px, ${parallax.y * -1.4}px, 0)` }}
      >
        People
      </div>
      <div
        className="about-label impact parallax-layer"
        style={{ transform: `translate3d(${parallax.x * 2.5}px, ${parallax.y * 2.5}px, 0)` }}
      >
        Impact
      </div>

      <div
        className="scribble wall-scribble parallax-layer"
        style={{ transform: `rotate(5deg) translate3d(${parallax.x * 1.6}px, ${parallax.y * 1.6}px, 0)` }}
      >
        Same<br />Curiosity<br />Bigger<br />Impact
      </div>
    </section>
  );
}