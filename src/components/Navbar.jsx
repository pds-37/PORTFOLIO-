import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ active, setActive }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Skills", "Certificates", "Journey", "Insights", "Contact"];
  const go = (id) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="nav">
      <button className="brand" onClick={() => go("Home")}>PRIYANSHU</button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(l => (
          <button key={l} className={active === l ? "active" : ""} onClick={() => go(l)}>{l}</button>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="talk" onClick={() => go("Contact")}>Let's Talk <ArrowRight size={15} /></button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}