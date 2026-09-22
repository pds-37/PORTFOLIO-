import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlowCursor from "./components/GlowCursor";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Journey from "./pages/Journey";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import Contact from "./pages/Contact";

function MainLayout() {
  const [active, setActive] = useState("Home");
  const { pathname } = useLocation();

  const go = (name) => {
    setActive(name);
    if (pathname !== "/") {
      window.location.href = `/#${name.toLowerCase()}`;
    } else {
      document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["home", "about", "projects", "skills", "certificates", "journey", "insights", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [pathname]);

  return (
    <div>
      <GlowCursor />
      <Navbar active={active} setActive={go} />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero go={go} />
            <About />
            <Projects />
            <Skills />
            <Certificates />
            <Journey />
            <Insights />
            <Contact />
          </main>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/insight/:id" element={<InsightDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}