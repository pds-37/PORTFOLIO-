import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Box, ShieldCheck, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionKicker from '../components/SectionKicker';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + projects.length) % projects.length);
  const next = () => setActive((active + 1) % projects.length);

  const getIndex = (offset) => (active + offset + projects.length) % projects.length;

  const leftProject = projects[getIndex(-1)];
  const centerProject = projects[active];
  const rightProject = projects[getIndex(1)];

  return (
    <section id="projects" className="projects-v2 section-dark">
      <div className="projects-v2-container">
        
        {/* Left Side Info */}
        <div className="projects-v2-info">
          <SectionKicker num="03">PROJECTS</SectionKicker>
          <h2>Products<br/><em>I've built.</em></h2>
          <p>A collection of projects that reflect my interests in AI, software development, and real-world problem solving.</p>
          
          <a href="https://github.com/pds-37" target="_blank" rel="noopener noreferrer" className="btn outline view-all-btn" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none'}}>
            View All Projects <ArrowRight size={15} />
          </a>
          
          <div className="scribble projects-scribble-left">
            From<br/>idea<br/>to impact. <span className="scribble-arrow">↗</span>
          </div>
          
          <div className="projects-v2-nav">
            <button onClick={prev}><ArrowLeft size={16}/></button>
            <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button onClick={next}><ArrowRight size={16}/></button>
          </div>
        </div>

        {/* Right Side Carousel */}
        <div className="projects-v2-carousel-wrap">
          <div className="scribble projects-scribble-right">
            Things<br/>I build <span className="scribble-arrow">↓</span>
          </div>

          <div className="projects-v2-carousel">
            
            {/* Left Laptop */}
            <div className="laptop-card laptop-left" onClick={prev}>
              <div className="laptop-screen">
                <img src={`/assets/${leftProject.image}`} alt={leftProject.title} />
              </div>
              <div className="laptop-bottom"></div>
              <div className="laptop-details-mini">
                <h3>{leftProject.title}</h3>
                <p>{leftProject.desc.substring(0, 50)}...</p>
                <div className="mini-tags">
                  {leftProject.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="mini-view">View Project <ArrowRight size={12}/></div>
              </div>
            </div>

            {/* Right Laptop */}
            <div className="laptop-card laptop-right" onClick={next}>
              <div className="laptop-screen">
                <img src={`/assets/${rightProject.image}`} alt={rightProject.title} />
              </div>
              <div className="laptop-bottom"></div>
              <div className="laptop-details-mini">
                <h3>{rightProject.title}</h3>
                <p>{rightProject.desc.substring(0, 50)}...</p>
                <div className="mini-tags">
                  {rightProject.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="mini-view">View Project <ArrowRight size={12}/></div>
              </div>
            </div>

            {/* Center Laptop */}
            <div className="laptop-card laptop-center">
              <div className="featured-pill-v2">Featured</div>
              <div className="laptop-screen">
                <img src={`/assets/${centerProject.image}`} alt={centerProject.title} />
              </div>
              <div className="laptop-bottom"></div>
              
              <div className="laptop-details-main">
                <div className="laptop-main-header">
                  <h3>{centerProject.title}</h3>
                  <div className="laptop-main-sub">{centerProject.eyebrow}</div>
                </div>
                <p>{centerProject.desc}</p>
                <div className="main-tags">
                  {centerProject.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                
                <Link to={`/project/${centerProject.id}`} target="_blank" className="btn-text-link">
                  View Project <ArrowRight size={15}/>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Banner */}
      <div className="projects-v2-banner">
        <div className="banner-item">
          <Box size={22}/>
          <div><strong>Real-World Impact</strong><span>Solving meaningful problems</span></div>
        </div>
        <div className="banner-item">
          <ShieldCheck size={22}/>
          <div><strong>Modern Tech Stack</strong><span>Scalable & maintainable</span></div>
        </div>
        <div className="banner-item">
          <Lightbulb size={22}/>
          <div><strong>Always Learning</strong><span>Turning ideas into reality</span></div>
        </div>
        <div className="banner-item">
          <Users size={22}/>
          <div><strong>Open Source Mindset</strong><span>Building for a better tomorrow</span></div>
        </div>
      </div>
    </section>
  );
}