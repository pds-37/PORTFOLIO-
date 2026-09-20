import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace the ABOUT SECTION block
start_marker = '{/* 2. ABOUT SECTION (DARK) */}'
end_marker = '{/* 3. PROJECTS SECTION (LIGHT) */}'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print('Could not find markers')
    exit(1)

new_about = '''{/* 2. ABOUT SECTION (DARK) */}
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

      '''

new_content = content[:start_idx] + new_about + content[end_idx:]

if 'ArrowLeft' not in new_content:
    new_content = new_content.replace('import { ArrowRight, Download, Mail }', 'import { ArrowRight, ArrowLeft, Download, Mail }')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
