import React, { useState } from 'react';
import { Mail, ArrowRight, Send, CheckCircle2, MapPin, Clock, User } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import SectionKicker from '../components/SectionKicker';
import priyanshuProfile from '../assets/priyanshu-profile.jpg';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setStatus('sending');
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:official.priyanshu.37@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="contact section-dark">
      <div className="contact-copy">
        <div className="reveal-item stagger-1">
          <SectionKicker num="07">CONTACT</SectionKicker>
        </div>
        <h2 className="reveal-item stagger-2">Let's build<br /><em>something meaningful.</em></h2>
        <p className="reveal-item stagger-3">I'm always open to discussing new opportunities, interesting ideas, or potential collaborations.</p>

        <div className="contact-links reveal-item stagger-4">
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

      {/* Standalone Clean Interactive Contact Form Card */}
      <div className="contact-form-container">
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="form-header">
            <div className="profile-avatar-wrap">
              <img src={priyanshuProfile} alt="Priyanshu Tiwari" className="profile-avatar" />
              <span className="online-status-dot" title="Available for work" />
            </div>
            <div>
              <h3>Send a Message</h3>
              <p>Reach out directly to Priyanshu</p>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <User size={14} className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <Mail size={14} className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group text-group">
            <textarea
              name="message"
              placeholder="Tell me about your idea, project, or role..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`form-submit-btn ${status}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>Sending...</>
            ) : status === 'sent' ? (
              <><CheckCircle2 size={16} /> Message Sent!</>
            ) : (
              <>Send Message <Send size={14} /></>
            )}
          </button>

          <div className="form-footer-bar">
            <div><MapPin size={12} /> India</div>
            <div><Clock size={12} /> IST (UTC+5:30)</div>
          </div>
        </form>
      </div>
    </section>
  );
}