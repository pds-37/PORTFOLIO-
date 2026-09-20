import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the HERO SECTION
start_marker = '{/* 1. HERO SECTION (LIGHT) */}'
end_marker = '{/* 2. ABOUT SECTION (DARK) */}'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print('Could not find markers')
    exit(1)

new_hero = '''{/* 1. HERO SECTION (DARK CINEMATIC) */}
      <section className="relative w-full min-h-screen bg-[#111214] text-white overflow-hidden flex flex-col">
        {/* Background Overlay to simulate the cinematic feel if image is missing */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-[#111214]/60 to-black/80"></div>
        
        {/* Navigation */}
        <nav className="w-full py-8 px-6 md:px-12 lg:px-24 flex justify-between items-center z-50 relative">
          <div className="text-xl font-bold tracking-widest uppercase">PRIYANSHU</div>
          <div className="hidden lg:flex gap-8 text-sm font-semibold tracking-wide text-white/60">
            <Link href="#about" className="hover:text-white transition border-b-2 border-[#CBA583] pb-1 text-white">Home</Link>
            <Link href="#about" className="hover:text-white transition pb-1">About</Link>
            <Link href="#projects" className="hover:text-white transition pb-1">Projects</Link>
            <Link href="#skills" className="hover:text-white transition pb-1">Skills</Link>
            <Link href="#journey" className="hover:text-white transition pb-1">Journey</Link>
            <Link href="#contact" className="hover:text-white transition pb-1">Contact</Link>
          </div>
          <div>
            <Link href="#contact" className="flex items-center gap-2 bg-[#F4F1ED] text-black px-6 py-2.5 rounded-full font-bold text-xs tracking-wide hover:bg-white transition shadow-lg">
              Let&apos;s Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 relative z-10 w-full max-w-[1400px] mx-auto mt-[-5%]">
          
          <div className="max-w-3xl relative">
            <span className="text-sm font-bold tracking-[0.3em] text-[#CBA583] mb-6 block uppercase drop-shadow-md">
              HELLO, I&apos;M
            </span>
            
            {/* Outline stacked text */}
            <div className="relative mb-6">
              <h1 className="absolute -top-16 left-0 text-7xl md:text-[8rem] font-bold tracking-tighter text-transparent opacity-30 pointer-events-none select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                PRIYANSHU
              </h1>
              <h1 className="text-6xl md:text-[7.5rem] leading-none font-bold tracking-tighter text-white relative z-10 drop-shadow-xl">
                PRIYANSHU
              </h1>
            </div>

            <div className="flex items-center gap-4 text-sm md:text-base text-white/70 font-medium tracking-wide mb-8 drop-shadow-md">
              <span>Computer Science Student</span>
              <span className="text-white/20">|</span>
              <span>Builder</span>
              <span className="text-white/20">|</span>
              <span>Problem Solver</span>
            </div>
            
            <p className="text-base md:text-lg text-white/70 max-w-[400px] mb-12 font-medium leading-relaxed drop-shadow-md">
              Exploring technology, building meaningful products, and turning ideas into real impact.
            </p>
            
            <div className="flex items-center gap-8">
              <Link href="#projects" className="flex items-center gap-3 bg-[#F4F1ED] text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white transition shadow-xl">
                Let&apos;s Build Together <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-6 text-white/70">
                <a href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer" className="hover:text-white transition drop-shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://github.com/pds-37" target="_blank" rel="noreferrer" className="hover:text-white transition drop-shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="mailto:official.priyanshu.37@gmail.com" className="hover:text-white transition drop-shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar overlay */}
        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8">
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white/50">
              <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-white/50 rounded-full"></div>
              </div>
              <span className="text-[0.65rem] font-bold tracking-wider">Scroll to explore</span>
              <div className="w-12 h-[1px] bg-white/20 ml-4"></div>
            </div>
            
            <div className="hidden lg:flex items-center gap-10 ml-8 border-l border-white/10 pl-10">
              <div className="flex flex-col gap-1">
                <span className="text-[#CBA583] font-bold text-sm tracking-wider drop-shadow">3+</span>
                <span className="text-white/60 text-[0.6rem] uppercase tracking-widest font-semibold">Projects</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-[#CBA583] font-bold text-sm tracking-wider drop-shadow">AI/ML</span>
                <span className="text-white/60 text-[0.6rem] uppercase tracking-widest font-semibold">Focus Area</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-[#CBA583] font-bold text-sm tracking-wider drop-shadow">Always</span>
                <span className="text-white/60 text-[0.6rem] uppercase tracking-widest font-semibold">Learning</span>
              </div>
            </div>
          </div>
          
          {/* Handwriting on Right Wall */}
          <div className="hidden lg:flex flex-col items-center opacity-40 -mt-16">
            <div className="font-handwriting text-3xl text-white rotate-[-5deg] leading-tight text-center">
              Same <br/> Curiosity <br/> Bigger <br/> Impact
            </div>
            <svg className="w-8 h-8 mt-4 rotate-[30deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
          </div>
        </div>
      </section>

      '''

new_content = content[:start_idx] + new_hero + content[end_idx:]

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
