import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import SectionKicker from '../components/SectionKicker';
import contactHeroBg from '../assets/contact-hero-bg.png';

export default function Contact() {
  return (
    <section id="contact" className="contact section-light">
      <div className="contact-copy">
        <SectionKicker num="07">CONTACT</SectionKicker>
        <h2>Let's build<br /><em>something meaningful.</em></h2>
        <p>I'm always open to discussing new opportunities, interesting ideas, or potential collaborations.</p>

        <div className="contact-links">
          <a href="mailto:official.priyanshu.37@gmail.com">
            <Mail size={16} />
            <span>official.priyanshu.37@gmail.com</span>
            <ArrowRight size={14} />
          </a>
          <a href="https://www.linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            <span>Connect on LinkedIn</span>
            <ArrowRight size={14} />
          </a>
          <a href="https://github.com/pds-37" target="_blank" rel="noreferrer">
            <Github size={16} />
            <span>View GitHub</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="contact-art">
        <img src={contactHeroBg} alt="Workspace 3D Visual" />
      </div>
    </section>
  );
}