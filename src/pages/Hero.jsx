import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import SectionKicker from '../components/SectionKicker';
import ParticleCanvas from '../components/ParticleCanvas';
import heroBg from '../assets/hero-bg.png';

export default function Hero({ go }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [projectCount, setProjectCount] = useState(0);

  // Smooth animated counter for "3+ Projects"
  useEffect(() => {
    let start = 0;
    const target = 3;
    const duration = 1200;
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setProjectCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setProjectCount(target);
      }
    };

    const frameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Parallax tracking
  const handleMouseMove = (e) => {
    const hero = e.currentTarget;
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.025;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.025;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="hero section-dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className="hero-bg" src={heroBg} alt="Hero Background" />
      <ParticleCanvas />
      <div className="hero-vignette" />

      <div className="hero-copy">
        <div className="reveal-item stagger-1">
          <SectionKicker num="00">ENGINEER · BUILDER · PROBLEM SOLVER</SectionKicker>
        </div>
        
        <h1 className="reveal-item stagger-2">
          Turning Ideas<br />Into <em>Real Impact.</em>
        </h1>
        
        <p className="reveal-item stagger-3">
          I build AI-powered products and secure systems that solve real problems and create meaningful experiences through technology, curiosity, and continuous learning.
        </p>

        <div className="hero-ctas reveal-item stagger-4">
          <button className="btn light" onClick={() => go("Projects")}>
            Explore My Work <ArrowRight size={16} />
          </button>
          <a className="btn outline" href="/resume.pdf">
            <Download size={15} /> Download CV
          </a>
          <div className="socials">
            <a href="https://www.linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer" title="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="https://github.com/pds-37" target="_blank" rel="noreferrer" title="GitHub">
              <Github size={15} />
            </a>
            <a href="mailto:official.priyanshu.37@gmail.com" title="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>

      <div
        className="scribble hero-scribble parallax-layer"
        style={{
          transform: `rotate(-7deg) translate3d(${parallax.x * 1.5}px, ${parallax.y * 1.5}px, 0)`,
        }}
      >
        Think<br />Secure<br />Build<br />Smart <span>↘</span>
      </div>

      <div className="hero-stats reveal-item stagger-5">
        <div>
          <strong className="stat-counter-glow">{projectCount}+</strong>
          <span>Projects</span>
        </div>
        <div>
          <strong className="stat-counter-glow">AI/ML & Cyber</strong>
          <span>Focus Areas</span>
        </div>
        <div>
          <strong className="stat-counter-glow">Always</strong>
          <span>Learning</span>
        </div>
      </div>

      <div className="scroll-cue reveal-item stagger-5">
        <span className="mouse"></span>Scroll to explore
      </div>
    </section>
  );
}