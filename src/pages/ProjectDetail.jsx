import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BrainCircuit, Search, Sparkles, Server } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';
import SectionKicker from '../components/SectionKicker';
import { projects } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex(p => p.id === id);
  const p = projects[projectIndex] || projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const prevId = projects[(projectIndex - 1 + projects.length) % projects.length].id;
  const nextId = projects[(projectIndex + 1) % projects.length].id;

  return (
    <div className="project-detail-page section-dark">
      <div className="pd-container">
        
        <Link to="/#projects" className="pd-back">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="pd-main">
          {/* Left Side Info */}
          <div className="pd-info">
            <SectionKicker num="03">PROJECT DETAIL</SectionKicker>
            <h1>{p.title}</h1>
            <div className="pd-sub">{p.eyebrow}</div>
            <p>{p.desc}</p>
            <div className="pd-buttons">
              <button className="btn light">Live Demo <ArrowRight size={15} /></button>
              {p.link ? (
                <a className="btn outline" href={p.link} target="_blank" rel="noreferrer">
                  <Github size={15} /> View Code
                </a>
              ) : (
                <button className="btn outline">
                  <Github size={15} /> View Code
                </button>
              )}
            </div>
          </div>

          {/* Right Side Laptop */}
          <div className="pd-visual">
            <div className="pd-laptop">
              <div className="laptop-screen">
                <img src={getAssetUrl(p.image)} alt={p.title} />
              </div>
              <div className="laptop-bottom"></div>
            </div>
            
            <div className="scribble pd-scribble">
              Turn your<br/>information<br/>into insight. <span>↙</span>
            </div>
          </div>
        </div>

        {/* Features Banner */}
        <div className="pd-features">
          <div className="pd-feature">
            <BrainCircuit size={28}/>
            <div><strong>LLM Powered</strong><span>Natural language understanding</span></div>
          </div>
          <div className="pd-feature">
            <Search size={28}/>
            <div><strong>Vector Search</strong><span>Semantic information retrieval</span></div>
          </div>
          <div className="pd-feature">
            <Sparkles size={28}/>
            <div><strong>RAG Pipeline</strong><span>Accurate, up-to-date responses</span></div>
          </div>
          <div className="pd-feature">
            <Server size={28}/>
            <div><strong>Modern Stack</strong><span>Built for scale and real use</span></div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pd-footer">
          <div className="pd-nav">
            <Link to={`/project/${prevId}`}><ArrowLeft size={16}/></Link>
            <span>{String(projectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            <Link to={`/project/${nextId}`}><ArrowRight size={16}/></Link>
          </div>
          
          <div className="pd-footer-right">
            <div className="pd-mantra">IDEAS <span>·</span> BUILD <span>·</span> SOLVE <span>·</span> REPEAT</div>
            <div className="pd-socials">
              <a href="https://www.linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer"><Linkedin size={16}/></a>
              <a href="https://github.com/pds-37" target="_blank" rel="noreferrer"><Github size={16}/></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}