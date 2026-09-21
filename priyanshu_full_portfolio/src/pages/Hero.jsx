import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import SectionKicker from '../components/SectionKicker';
import heroBg from '../assets/hero-bg.png';

export default function Hero({ go }) {
  return (
    <section id="home" className="hero section-dark">
      <img className="hero-bg" src={heroBg} alt="Hero Background" />
      <div className="hero-vignette" />
      <div className="hero-copy">
        <SectionKicker num="00">ENGINEER · BUILDER · PROBLEM SOLVER</SectionKicker>
        <h1>Turning Ideas<br />Into <em>Real Impact.</em></h1>
        <p>I build AI-powered products and secure systems that solve real problems and create meaningful experiences through technology, curiosity, and continuous learning.</p>
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
      <div className="scribble hero-scribble">Think<br />Secure<br />Build<br />Smart <span>↘</span></div>
      <div className="hero-stats">
        <div><strong>3+</strong><span>Projects</span></div>
        <div><strong>AI/ML & Cyber</strong><span>Focus Areas</span></div>
        <div><strong>Always</strong><span>Learning</span></div>
      </div>
      <div className="scroll-cue"><span className="mouse"></span>Scroll to explore</div>
    </section>
  );
}