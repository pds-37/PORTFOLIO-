import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '{/* 1. HERO SECTION'
end_marker = '{/* 2. ABOUT SECTION'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print('Could not find markers')
    exit(1)

new_hero = '''{/* 1. HERO SECTION */}
      <section id="home" className="relative h-screen min-h-screen overflow-hidden bg-[#07090a] text-[#f4f1eb]">
        
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
            Let&apos;s Talk <span className="ml-2 font-serif leading-none mt-[-1px]">?</span>
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
              <span className="font-serif leading-none">?</span>
            </Link>

            <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center gap-[15px] min-h-[45px] px-[20px] rounded-full text-[12px] font-semibold border border-white/30 text-white bg-black/10 backdrop-blur-[8px] transition hover:-translate-y-[2px]">
              Download CV
              <span className="font-serif leading-none">?</span>
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
          <span className="block ml-[48px] mt-[4px] font-['Inter',sans-serif] text-[29px] rotate-[15deg]">?</span>
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
      '''

new_content = content[:start_idx] + new_hero + content[end_idx:]

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
