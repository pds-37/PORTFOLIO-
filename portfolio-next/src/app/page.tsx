"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Download, Mail, Lightbulb, BookOpen, Box, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative h-screen min-h-screen overflow-hidden bg-[#07090a] text-[#f4f1eb] isolate">
        
        {/* The Background Image */}
        <img 
          src="/hero-bg.png" 
          alt="" 
          aria-hidden="true" 
          className="absolute inset-0 w-full h-full object-cover object-[63%_center] md:object-center -z-40" 
        />

        {/* Left side gradient overlay to ensure HTML text is readable */}
        <div 
          className="absolute inset-0 -z-30" 
          style={{ background: "linear-gradient(90deg, rgba(5,7,8,.18) 0%, rgba(5,7,8,.10) 45%, rgba(5,7,8,.04) 100%)" }}
        ></div>

        {/* Cinematic bottom fade */}
        <div 
          className="absolute left-0 right-0 bottom-0 h-[34%] -z-20 pointer-events-none" 
          style={{ background: "linear-gradient(to top, rgba(4,5,6,.82), transparent)" }}
        ></div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 h-[72px] md:h-[88px] px-6 md:px-[5vw] flex items-center justify-between z-20">
          <div className="text-white text-[14px] md:text-[16px] font-bold tracking-[0.2px]">
            PRIYANSHU
          </div>

          <div className="hidden lg:flex items-center gap-[32px]">
            <Link href="#home" className="relative text-white/80 text-[12px] font-medium transition hover:text-white after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[9px] after:h-[1px] after:bg-[#d8b584]">Home</Link>
            <Link href="#about" className="relative text-white/80 text-[12px] font-medium transition hover:text-white">About</Link>
            <Link href="#projects" className="relative text-white/80 text-[12px] font-medium transition hover:text-white">Projects</Link>
            <Link href="#skills" className="relative text-white/80 text-[12px] font-medium transition hover:text-white">Skills</Link>
            <Link href="#journey" className="relative text-white/80 text-[12px] font-medium transition hover:text-white">Journey</Link>
            <Link href="#contact" className="relative text-white/80 text-[12px] font-medium transition hover:text-white">Contact</Link>
          </div>

          <Link href="#contact" className="border-0 bg-[#f4ece1] text-[#111] px-[16px] py-[11px] md:px-[21px] md:py-[13px] rounded-full text-[11px] md:text-[12px] font-semibold transition hover:-translate-y-[2px] hover:bg-white inline-flex items-center">
            Let&apos;s Talk <span className="ml-2 font-serif leading-none mt-[-1px]">&rarr;</span>
          </Link>
        </nav>

        {/* MAIN TEXT LAYER */}
        <div className="absolute left-[22px] right-[22px] top-[48%] md:left-[6%] md:top-[50%] -translate-y-1/2 md:w-[min(600px,48vw)] z-10">
          
          <div className="mb-[20px] text-[10px] font-medium tracking-[3.5px] uppercase text-[#d9bb91]">
            Engineer &#183; Builder &#183; Problem Solver
          </div>

          <h1 className="text-[clamp(48px,14vw,76px)] md:text-[clamp(55px,6.4vw,104px)] leading-[0.94] tracking-[-3px] md:tracking-[-5px] font-bold text-[#f5f3ef]">
            Turning Ideas<br/>
            Into <span className="text-[#d8b584]">Real Impact.</span>
          </h1>

          <p className="w-[min(490px,100%)] mt-[24px] text-[#c2c2bd] text-[13px] md:text-[15px] leading-[1.65] max-w-[360px] md:max-w-none">
            I build AI-powered products that solve real problems
            and create meaningful experiences through technology,
            curiosity, and continuous learning.
          </p>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-[14px] mt-[30px]">
            
            <Link href="#projects" className="inline-flex items-center justify-center gap-[15px] min-h-[45px] px-[20px] rounded-full text-[12px] font-semibold bg-[#f4ece1] text-[#111] transition hover:-translate-y-[2px]">
              Explore My Work
              <span className="font-serif leading-none">&rarr;</span>
            </Link>

            <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center gap-[15px] min-h-[45px] px-[20px] rounded-full text-[12px] font-semibold border border-white/30 text-white bg-black/10 backdrop-blur-[8px] transition hover:-translate-y-[2px]">
              Download CV
              <span className="font-serif leading-none">&darr;</span>
            </a>

            <div className="flex items-center gap-[10px] ml-[6px]">
              <a href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer" className="w-[34px] h-[34px] grid place-items-center border border-white/25 rounded-full text-white text-[10px] font-semibold transition hover:bg-white hover:text-[#111]">in</a>
              <a href="https://github.com/pds-37" target="_blank" rel="noreferrer" className="w-[34px] h-[34px] grid place-items-center border border-white/25 rounded-full text-white text-[10px] font-semibold transition hover:bg-white hover:text-[#111]">GH</a>
              <a href="mailto:official.priyanshu.37@gmail.com" className="w-[34px] h-[34px] grid place-items-center border border-white/25 rounded-full text-white text-[10px] font-semibold transition hover:bg-white hover:text-[#111]">@</a>
            </div>

          </div>

        </div>

        {/* HANDWRITTEN DESIGN ELEMENT */}
        <div className="hidden lg:block absolute left-[48%] top-[24%] text-[#efe3d4] font-['Caveat',cursive] text-[25px] leading-[0.98] -rotate-[7deg] z-[12] pointer-events-none">
          Same<br/>Curiosity<br/>Bigger<br/>Impact
          <span className="block ml-[48px] mt-[4px] font-['Inter',sans-serif] text-[29px] rotate-[15deg]">&#8600;</span>
        </div>

        {/* RIGHT-SIDE MESSAGE */}
        <div className="hidden lg:block absolute right-[4%] bottom-[95px] z-[15] text-white/60 font-['Caveat',cursive] text-[23px] leading-[0.95] -rotate-[4deg]">
          Same<br/>Curiosity<br/>Bigger<br/>Impact
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="absolute left-[22px] right-[22px] md:left-[6%] md:right-[6%] bottom-[22px] md:bottom-[34px] flex flex-col md:flex-row md:items-center items-start gap-[18px] md:gap-0 z-[15]">
          
          <div className="flex items-center gap-[12px] md:mr-[58px] text-[#d2d1cc] text-[11px]">
            <div className="relative w-[20px] h-[32px] border border-white/75 rounded-[12px]">
              <div className="absolute left-1/2 top-[6px] w-[2px] h-[6px] -translate-x-1/2 bg-white"></div>
            </div>
            <span>Scroll to explore</span>
          </div>

          <div className="flex items-center w-full md:w-auto">
            <div className="flex-1 md:flex-none min-w-0 md:min-w-[125px] px-[12px] md:px-[24px] pl-0 md:pl-0 border-l-0 border-white/20">
              <strong className="block text-[#e0bc89] text-[13px] md:text-[16px] font-semibold mb-[3px]">3+</strong>
              <span className="text-[#aaa9a5] text-[9px] md:text-[10px]">Projects</span>
            </div>
            <div className="flex-1 md:flex-none min-w-0 md:min-w-[125px] px-[12px] md:px-[24px] border-l border-white/20">
              <strong className="block text-[#e0bc89] text-[13px] md:text-[16px] font-semibold mb-[3px]">AI/ML</strong>
              <span className="text-[#aaa9a5] text-[9px] md:text-[10px]">Focus Area</span>
            </div>
            <div className="flex-1 md:flex-none min-w-0 md:min-w-[125px] px-[12px] md:px-[24px] border-l border-white/20">
              <strong className="block text-[#e0bc89] text-[13px] md:text-[16px] font-semibold mb-[3px]">Always</strong>
              <span className="text-[#aaa9a5] text-[9px] md:text-[10px]">Learning</span>
            </div>
          </div>

        </div>

      </section>
      {/* 2. ABOUT SECTION (DARK) */}
      <section id="about" className="w-full bg-[#0E1011] text-[#F4F4F5] px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col z-20">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/40 mb-6 block">
              01 . ABOUT
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight mb-8">
              A curious mind <br/> and a <span className="text-[#CBA583]">builder</span> at heart.
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-12 max-w-[420px] font-medium">
              I&apos;m a Computer Science student who loves building AI-powered products, exploring new technologies, and creating solutions that make a real impact. I enjoy working at the intersection of technology, creativity, and strategy.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-y border-white/5">
              {[
                { icon: "??", text: "Problem Solver" },
                { icon: "??", text: "Continuous Learner" },
                { icon: "??", text: "Product Thinker" },
                { icon: "??", text: "Impact Driven" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-xl opacity-70">
                    {item.icon}
                  </div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/80 leading-tight">
                    {item.text.split(" ").map((word, j) => <span key={j} className="block">{word}</span>)}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Link href="#journey" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-xs tracking-wide hover:bg-white hover:text-black transition-all">
                Know More About Me <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Content - Statue/Portrait with Orbital Rings */}
          <div className="relative w-full h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Faint Text on far right */}
            <div className="hidden lg:flex absolute -right-20 lg:-right-32 top-1/4 font-semibold text-4xl lg:text-5xl text-white/[0.03] leading-[1.2] flex-col items-start z-0 tracking-widest uppercase">
              <span>Same</span>
              <span>Curiosity</span>
              <span>Bigger</span>
              <span>Impact</span>
              <div className="w-12 h-[2px] bg-white/[0.05] mt-4"></div>
            </div>

            {/* Simulated Orbital Rings */}
            <div className="absolute top-[40%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full border border-white/[0.1] z-0 rotate-[20deg]">
              <div className="absolute -top-1 left-[20%] w-2 h-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="absolute top-[80%] -right-1 w-1.5 h-1.5 rounded-full bg-white/20"></div>
            </div>
            
            <div className="absolute top-[40%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[450px] lg:w-[300px] lg:h-[550px] rounded-full border border-white/[0.08] z-0 rotate-[-30deg]">
              <div className="absolute top-[10%] -left-1 w-2 h-2 rounded-full bg-white/30"></div>
              <div className="absolute bottom-[20%] -right-1 w-3 h-3 rounded-full bg-[#CBA583]/50 shadow-[0_0_15px_rgba(203,165,131,0.6)]"></div>
            </div>
            
            {/* Orbital Text Labels */}
            <div className="absolute top-[15%] left-[25%] lg:left-[20%] text-white text-xs lg:text-sm tracking-widest uppercase font-semibold z-10 drop-shadow-md">Ideas</div>
            <div className="absolute bottom-[35%] lg:bottom-[30%] left-[5%] lg:left-[10%] text-white text-xs lg:text-sm tracking-widest uppercase font-semibold z-10 drop-shadow-md">People</div>
            <div className="absolute top-[25%] right-[10%] text-white text-xs lg:text-sm tracking-widest uppercase font-semibold z-10 drop-shadow-md">Technology</div>
            <div className="absolute bottom-[30%] lg:bottom-[20%] right-[5%] lg:right-[15%] text-white text-xs lg:text-sm tracking-widest uppercase font-semibold z-10 drop-shadow-md">Impact</div>

            {/* Base Block & Portrait (Mimicking Statue) */}
            <div className="relative z-20 flex flex-col items-center mt-0 lg:mt-20">
              {/* Glowing Halo */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#CBA583]/10 rounded-full blur-[60px] -z-10"></div>
              
              <div className="w-56 h-72 lg:w-64 lg:h-80 relative overflow-hidden mask-image-bottom">
                <Image 
                  src="/priyanshu-portrait.png" 
                  alt="Priyanshu Portrait" 
                  fill
                  className="object-cover object-top grayscale contrast-125 brightness-90" 
                />
              </div>
              
              {/* Stone Base Inscription */}
              <div className="bg-[#18191B] border border-white/10 w-64 lg:w-72 p-6 flex flex-col items-center justify-center text-center shadow-2xl relative z-30 mt-[-15px]">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 leading-[1.8]">
                  A BETTER <br/> YOU <br/> A BRIGHTER <br/> TOMORROW
                </p>
                {/* Secondary block behind */}
                <div className="absolute -bottom-4 -right-4 lg:-right-8 w-20 h-20 lg:w-24 lg:h-24 bg-[#111214] border border-white/5 -z-10 shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar matching Figma */}
        <div className="absolute bottom-8 left-6 right-6 lg:left-24 lg:right-24 flex justify-between items-center z-30">
          <div className="flex items-center gap-6 text-white/40">
            <button className="hover:text-white transition"><ArrowLeft className="w-4 h-4" /></button>
            <span className="text-[0.65rem] font-bold tracking-[0.2em]">01 / 04</span>
            <button className="hover:text-white transition"><ArrowRight className="w-4 h-4" /></button>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
            <div className="w-12 h-[1px] bg-white/20 mr-2"></div>
            <span>IDEAS</span> <span className="opacity-50">&#8226;</span> <span>BUILD</span> <span className="opacity-50">&#8226;</span> <span>SOLVE</span> <span className="opacity-50">&#8226;</span> <span>REPEAT</span>
            <div className="w-12 h-[1px] bg-white/20 ml-2"></div>
          </div>
          
          <div className="flex items-center gap-6">
             {/* Simple Lucide icons for social matching Figma */}
             <a href="#" className="text-white/40 hover:text-white transition">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </a>
             <a href="#" className="text-white/40 hover:text-white transition">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </a>
             <a href="#" className="text-white/40 hover:text-white transition">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
             </a>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION (LIGHT) */}
      <section id="projects" className="w-full bg-brand-light text-neutral-900 px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
                02 . Projects
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                Products <br/> I&apos;ve built.
              </h2>
            </div>
            <p className="text-lg text-neutral-600 max-w-sm mb-2 font-medium">
              A collection of projects that reflect my interests in AI, software development, and real-world problem solving.
            </p>
          </div>

          {/* Project Showcase 1 (Dark Card) */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center mb-10 overflow-hidden relative shadow-2xl group">
            <div className="w-full lg:w-1/2 relative z-10">
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 mb-4 block uppercase">03 . Project Detail</span>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">ContextMind & Chanakya</h3>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-md">
                AI-powered systems designed for dynamic routing and intelligent knowledge retrieval. Utilizes large language models and vector databases.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://chanakya-psi.vercel.app/" target="_blank" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-200 transition">
                  Live Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="https://github.com/pds-37" target="_blank" className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition">
                  View Code
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative z-10 transform group-hover:scale-105 transition duration-700">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 shadow-2xl relative">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-[#0A0A0A] h-[300px] rounded-lg flex items-center justify-center border border-white/5">
                   <div className="text-center">
                     <div className="text-xl font-semibold mb-2">Hello, Priyanshu</div>
                     <div className="text-sm text-neutral-500">What would you like to explore today?</div>
                     <div className="mt-6 mx-auto w-64 h-10 bg-[#1A1A1A] rounded-full border border-white/10 flex items-center px-4">
                       <span className="text-neutral-600 text-xs">Ask anything...</span>
                     </div>
                   </div>
                </div>
                <div className="font-[Caveat,cursive] text-2xl absolute -bottom-6 -right-6 rotate-[-10deg] text-neutral-400">
                  Turn your <br/> information <br/> into insight.
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 2 */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-10 hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Swastha Parivar</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  A healthcare ecosystem connecting families and medical professionals through real-time health tracking and telemedicine.
                </p>
                <div className="flex gap-2 flex-wrap mb-10">
                  {["React", "Node.js", "Healthcare UI"].map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-neutral-100 px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <Link href="https://swastha-parivar-ten.vercel.app/" target="_blank" className="flex items-center gap-2 bg-neutral-900 text-brand-light w-max px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-800 transition">
                View Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-10 hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Study Buddy</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  An EdTech companion with a student dashboard, learning modules, progress tracking, and an interface designed around the day-to-day study workflow.
                </p>
                <div className="flex gap-2 flex-wrap mb-10">
                  {["MERN Stack", "EdTech", "UI/UX"].map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-neutral-100 px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <Link href="https://study-buddy-frontend-kappa.vercel.app/" target="_blank" className="flex items-center gap-2 bg-neutral-900 text-brand-light w-max px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-800 transition">
                View Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION (DARK) */}
      <section id="skills" className="w-full bg-[#101213] text-white px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10 flex flex-col items-start lg:pr-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a09e96] mb-6 block">
              04 . SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
              A toolkit <br/> for what&apos;s next.
            </h2>
            <p className="text-[1.05rem] text-[#b3b3b3] mb-12 max-w-sm leading-relaxed font-medium">
              Technologies I use to turn ideas into products. I&apos;m always learning and exploring new tools.
            </p>
            <Link href="/skills" className="inline-flex items-center gap-4 border border-[#443F38] bg-[#0A0A0A]/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/5 transition w-fit">
              <span className="font-semibold text-sm">Explore My Skills</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 mt-20 flex items-center gap-4">
              Tools I work with 
              <span className="w-8 h-[1px] bg-neutral-600 block"></span>
            </p>
          </div>

          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full flex items-center justify-center -ml-10 lg:-ml-20">
             {/* Using the uploaded image for the 3D cube */}
             <div className="w-[150%] sm:w-[130%] h-full relative">
               <Image 
                 src="/skills-cube.png" 
                 alt="Skills 3D Cube" 
                 fill
                 className="object-cover object-right-center lg:object-right scale-110 drop-shadow-2xl mix-blend-screen"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#101213] via-transparent to-transparent z-10"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#101213] via-transparent to-transparent z-10"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNEY SECTION (LIGHT) */}
      <section id="journey" className="w-full bg-[#FAF9F6] text-neutral-900 px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
              05 . Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
              A path of <br/> continuous growth.
            </h2>
            <p className="text-lg text-neutral-600 mb-12 max-w-md leading-relaxed">
              Key milestones, experiences, and learnings that have shaped my journey.
            </p>
            <Link href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" className="inline-flex items-center gap-2 border border-neutral-900 text-neutral-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-neutral-900 hover:text-white transition">
              View Full Timeline <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative border-l border-neutral-300 pl-8 ml-4 md:ml-0">
            {[
              { year: "2026", title: "Looking ahead to bigger impact", desc: "Supervised Machine Learning & Security Foundations." },
              { year: "2025", title: "Software Dev Intern", desc: "Developed MERN modules for a Hospital Information System." },
              { year: "2024", title: "Built and shipped real projects", desc: "Developed platforms like Swastha Parivar and Chanakya." },
              { year: "2023", title: "Started my CS journey", desc: "B.Tech in Computer Science at GL Bajaj Institute." },
            ].map((item, i) => (
              <div key={i} className="mb-12 relative group">
                <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full border-2 border-neutral-900 bg-[#FAF9F6] group-hover:bg-neutral-900 transition-colors"></div>
                <div className="text-sm font-bold text-neutral-900 mb-2">{item.year}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (DARK) */}
      <section id="contact" className="w-full bg-[#080808] text-white px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-full lg:w-1/2 h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10" />
            <Image 
              src="/priyanshu-seated.png" 
              alt="Workspace" 
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a09e96] mb-6 block">
              06 . Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Let&apos;s build <br/> something meaningful.
            </h2>
            <p className="text-[1.05rem] text-[#b3b3b3] mb-12 max-w-md leading-relaxed font-medium">
              I&apos;m always open to discussing new opportunities, interesting ideas, or potential collaborations.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:official.priyanshu.37@gmail.com" className="flex items-center gap-4 border border-[#443F38] bg-[#0A0A0A]/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/5 transition w-fit">
                <Mail className="w-5 h-5 text-[#d4d4d4]" />
                <span className="font-semibold text-sm text-[#e5e5e5]">official.priyanshu.37@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" className="flex items-center gap-4 border border-[#443F38] bg-[#0A0A0A]/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/5 transition w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#d4d4d4]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="font-semibold text-sm text-[#e5e5e5]">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="relative h-full min-h-[300px] flex flex-col justify-between items-end">
             {/* Handwritten Note */}
             <div className="w-full flex justify-center lg:justify-start pt-10 lg:pt-20 lg:pl-10">
               <div className="font-[Caveat,cursive] text-[2rem] md:text-[2.5rem] -rotate-6 text-[#d9d9d9] leading-[1.1] opacity-90">
                 Good ideas <br/> can come from <br/> anywhere.
                 <div className="w-12 h-[2px] bg-[#665F55] mt-6 ml-2 rounded-full"></div>
               </div>
             </div>

             {/* Location Pin */}
             <div className="absolute bottom-0 right-0 flex items-center gap-3 text-[#d4d4d4]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               <div className="flex flex-col text-sm font-medium leading-tight">
                 <span className="opacity-70">Currently in</span>
                 <span className="font-bold">India</span>
               </div>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}
