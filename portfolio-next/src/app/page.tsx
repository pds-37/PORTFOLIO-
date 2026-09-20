"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (LIGHT) */}
      <section className="relative w-full min-h-screen bg-brand-light text-neutral-900 overflow-hidden flex flex-col px-6 md:px-12 lg:px-24">
        <nav className="w-full py-8 flex justify-between items-center z-50">
          <div className="text-xl font-bold tracking-widest uppercase">Priyanshu</div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
            <Link href="#about" className="hover:opacity-60 transition">Home</Link>
            <Link href="#about" className="hover:opacity-60 transition">About</Link>
            <Link href="#projects" className="hover:opacity-60 transition">Projects</Link>
            <Link href="#skills" className="hover:opacity-60 transition">Skills</Link>
            <Link href="#journey" className="hover:opacity-60 transition">Journey</Link>
            <Link href="#contact" className="hover:opacity-60 transition">Contact</Link>
          </div>
        </nav>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-10 pb-20">
          <div className="flex flex-col z-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6">
              AI Engineer • Builder • Problem Solver
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold mb-6 tracking-tight text-neutral-900">
              I build <br /> products <br /> that think.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-md mb-10 font-medium leading-relaxed">
              Turning ideas into real-world solutions through AI, technology, and a deep curiosity for impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="flex items-center gap-2 bg-neutral-900 text-brand-light px-8 py-4 rounded-full font-semibold text-sm hover:bg-neutral-800 transition">
                Explore My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 bg-transparent border border-neutral-900 text-neutral-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-neutral-900 hover:text-brand-light transition">
                Download CV
              </a>
            </div>
          </div>
          
          <div className="relative h-[600px] lg:h-[800px] w-full flex justify-end items-end z-10">
            {/* Handwritten Notes */}
            <div className="font-handwriting text-3xl md:text-4xl absolute top-10 left-0 md:-left-10 -rotate-6 text-neutral-800 leading-tight">
              Same <br/> Curiosity <br/> Bigger <br/> Impact <br/> ↘
            </div>
            <div className="font-handwriting text-3xl md:text-4xl absolute top-32 right-10 rotate-3 text-neutral-800 text-right leading-tight z-20">
              A <br/> Better <br/> You <br/> A <br/> Brighter <br/> Tomorrow
            </div>
            
            <Image 
              src="/priyanshu-hero.png" 
              alt="Priyanshu" 
              width={700} 
              height={900} 
              className="object-contain max-h-[90%] w-auto relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (DARK) */}
      <section id="about" className="w-full bg-brand-dark text-white px-6 md:px-12 lg:px-24 py-32 dark-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
              01 . About
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              A curious mind <br/> and a builder at heart.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-lg">
              I'm a Computer Science student who loves building AI-powered products, exploring new technologies, and creating solutions that make a real impact. I enjoy working at the intersection of technology, creativity, and strategy.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "💡", text: "Problem Solver" },
                { icon: "🔄", text: "Continuous Learner" },
                { icon: "🧠", text: "Product Thinker" },
                { icon: "🚀", text: "Impact Driven" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-xl bg-white/5">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-neutral-300 leading-tight">
                    {item.text.split(" ").map((word, j) => <span key={j}>{word}<br/></span>)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link href="#journey" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition">
                Know More About Me <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative pl-0 lg:pl-10">
            <div className="font-handwriting text-3xl md:text-4xl absolute -top-10 -right-10 md:-right-20 rotate-6 text-neutral-400 z-20">
              Ideas <br/> Technology <br/> People <br/> Impact <br/> ↙
            </div>
            <div className="bg-[#151515] p-6 rounded-xl border border-white/5 relative z-10 shadow-2xl">
              <Image 
                src="/priyanshu-portrait.png" 
                alt="Priyanshu Portrait" 
                width={500} 
                height={600} 
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold tracking-widest">PRIYANSHU</h3>
                <p className="text-[0.65rem] tracking-[0.2em] text-neutral-500 mt-2 uppercase">
                  Engineer • Builder • Problem Solver
                </p>
              </div>
            </div>
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
                Products <br/> I've built.
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
                <div className="font-handwriting text-2xl absolute -bottom-6 -right-6 rotate-[-10deg] text-neutral-400">
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
      <section id="skills" className="w-full bg-[#0A0A0A] text-white px-6 md:px-12 lg:px-24 py-32 dark-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
              04 . Skills
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
              A toolkit <br/> for what's next.
            </h2>
            <p className="text-lg text-neutral-400 mb-12 max-w-md leading-relaxed">
              Technologies I use to turn ideas into products. I'm always learning and exploring new tools.
            </p>
            <Link href="https://github.com/pds-37" target="_blank" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition">
              Explore My Skills <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 mt-16">
              Tools I work with — VS Code, Git, Figma
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 relative z-10">
             {/* We mimic the cube visually using structural glass cards */}
             <div className="flex flex-col gap-4">
               <h3 className="text-xl font-semibold mb-2 border-b border-white/10 pb-4">Backend</h3>
               <ul className="text-neutral-400 space-y-3 font-medium">
                 <li>Node.js</li>
                 <li>Express</li>
                 <li>Python</li>
                 <li>REST APIs</li>
               </ul>
             </div>
             <div className="flex flex-col gap-4 mt-12">
               <h3 className="text-xl font-semibold mb-2 border-b border-white/10 pb-4">AI / ML</h3>
               <ul className="text-neutral-400 space-y-3 font-medium">
                 <li>Scikit-learn</li>
                 <li>TensorFlow</li>
                 <li>Vector DBs</li>
                 <li>LLMs</li>
               </ul>
             </div>
             <div className="flex flex-col gap-4">
               <h3 className="text-xl font-semibold mb-2 border-b border-white/10 pb-4">Data</h3>
               <ul className="text-neutral-400 space-y-3 font-medium">
                 <li>MySQL</li>
                 <li>MongoDB</li>
                 <li>PostgreSQL</li>
               </ul>
             </div>
             <div className="flex flex-col gap-4 mt-12">
               <h3 className="text-xl font-semibold mb-2 border-b border-white/10 pb-4">Frontend</h3>
               <ul className="text-neutral-400 space-y-3 font-medium">
                 <li>React.js</li>
                 <li>Next.js</li>
                 <li>Tailwind CSS</li>
               </ul>
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
              Let's build <br/> something meaningful.
            </h2>
            <p className="text-[1.05rem] text-[#b3b3b3] mb-12 max-w-md leading-relaxed font-medium">
              I'm always open to discussing new opportunities, interesting ideas, or potential collaborations.
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
               <div className="font-handwriting text-[2rem] md:text-[2.5rem] -rotate-6 text-[#d9d9d9] leading-[1.1] opacity-90">
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
