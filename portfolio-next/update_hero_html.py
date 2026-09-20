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
      <section className="relative w-full min-h-screen overflow-hidden bg-[#080909] text-[#f5f2eb]">
        
        {/* Background Gradients & Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(4, 6, 7, 0.98) 0%, rgba(4, 6, 7, 0.94) 35%, rgba(4, 6, 7, 0.60) 58%, rgba(4, 6, 7, 0.10) 100%), url('/hero-bg.jpg')" 
          }}
        ></div>
        
        {/* Cinematic Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 70% 45%, rgba(255, 191, 115, 0.12), transparent 35%)"
          }}
        ></div>

        {/* Navbar */}
        <header className="relative z-10 h-[90px] flex items-center justify-between px-[5vw]">
          <div className="text-[18px] font-bold tracking-[-0.5px]">PRIYANSHU</div>
          
          <nav className="hidden md:flex items-center gap-[34px]">
            <Link href="#" className="text-[#d8d6d0] text-[13px] font-medium transition hover:text-white relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[9px] after:h-[1px] after:bg-[#e7c99e]">Home</Link>
            <Link href="#about" className="text-[#d8d6d0] text-[13px] font-medium transition hover:text-white relative">About</Link>
            <Link href="#projects" className="text-[#d8d6d0] text-[13px] font-medium transition hover:text-white relative">Projects</Link>
            <Link href="#skills" className="text-[#d8d6d0] text-[13px] font-medium transition hover:text-white relative">Skills</Link>
            <Link href="#journey" className="text-[#d8d6d0] text-[13px] font-medium transition hover:text-white relative">Journey</Link>
            <Link href="#contact" className="text-[#d8d6d0] text-[13px] font-medium transition hover:text-white relative">Contact</Link>
          </nav>

          <Link href="#contact" className="border-none px-[23px] py-[14px] rounded-full bg-[#f5eee3] text-[#111] text-[13px] font-semibold cursor-pointer flex items-center gap-[12px] transition hover:-translate-y-0.5 hover:bg-white">
            Let&apos;s Talk <span className="text-[18px] leading-none">?</span>
          </Link>
        </header>

        {/* Main Content */}
        <div className="relative z-10 min-h-[calc(100vh-90px)] flex items-center px-[5vw] pt-10 pb-[170px] md:pb-[90px] items-start md:items-center">
          
          <div className="w-full md:w-[65%] lg:w-[52%] max-w-[760px]">
            
            <div className="text-[12px] tracking-[4px] uppercase text-[#d9b887] mb-[22px]">
              Engineer &#183; Builder &#183; Problem Solver
            </div>

            <div className="relative mb-3">
              <div 
                className="absolute -top-[10px] left-0 font-extrabold tracking-[-7px] text-transparent whitespace-nowrap z-0 text-[70px] md:text-[clamp(70px,9vw,150px)]"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
              >
                PRIYANSHU
              </div>
              <h1 className="relative z-10 font-extrabold tracking-[-6px] text-[#f5f4f0] leading-[0.9] text-[70px] md:text-[clamp(70px,9vw,150px)]">
                PRIYANSHU
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-[17px] mt-[25px] text-[#d7d4ce] text-[14px]">
              <span>Computer Science Student</span>
              <span className="w-[1px] h-[14px] bg-white/40"></span>
              <span>Builder</span>
              <span className="w-[1px] h-[14px] bg-white/40"></span>
              <span>Problem Solver</span>
            </div>

            <p className="mt-[28px] max-w-[590px] text-[15px] md:text-[17px] leading-[1.7] text-[#bdbdb9]">
              Exploring technology, building meaningful products, and turning ideas into real impact.
            </p>

            <div className="mt-[35px] flex flex-wrap items-center gap-[25px]">
              <Link href="#projects" className="inline-flex items-center gap-[20px] px-[26px] py-[17px] bg-[#f4ede3] text-[#111] rounded-full text-[14px] font-semibold transition hover:-translate-y-[3px]">
                Let&apos;s Build Together <span className="text-[19px] leading-none">?</span>
              </Link>

              <div className="flex items-center gap-[22px]">
                <a href="https://linkedin.com/in/priyanshu-tiwari-pds37" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] border border-white/25 rounded-full flex items-center justify-center text-white text-[14px] transition hover:bg-white hover:text-black">
                  in
                </a>
                <a href="https://github.com/pds-37" target="_blank" rel="noreferrer" className="w-[38px] h-[38px] border border-white/25 rounded-full flex items-center justify-center text-white text-[14px] transition hover:bg-white hover:text-black">
                  GH
                </a>
                <a href="mailto:official.priyanshu.37@gmail.com" className="w-[38px] h-[38px] border border-white/25 rounded-full flex items-center justify-center text-white text-[14px] transition hover:bg-white hover:text-black">
                  @
                </a>
              </div>
            </div>

          </div>

          {/* Handwritten Note (Center) */}
          <div className="hidden lg:block absolute top-[130px] left-[48%] font-handwriting text-[#eee4d7] text-[25px] leading-[1.05] -rotate-6 z-20">
            Same<br/>Curiosity<br/>Bigger<br/>Impact
            <span className="block text-[38px] ml-[55px] rotate-[18deg] mt-[-10px]">?</span>
          </div>

          {/* Person / Silhouette */}
          <div className="absolute right-[-15%] md:right-[7%] bottom-0 w-[70%] md:w-[42%] lg:w-[29%] max-w-[470px] z-[2] flex justify-center opacity-45 md:opacity-100">
            <div 
              className="w-full relative" 
              style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
            >
              <Image 
                src="/person.png" 
                alt="Priyanshu Figure" 
                width={470}
                height={800}
                className="w-full object-contain filter contrast-[1.05] brightness-[0.92]" 
              />
            </div>
          </div>

          {/* Side Quote (Right) */}
          <div className="hidden md:block absolute right-[3.5%] bottom-[110px] z-[8] w-[110px] font-handwriting text-[23px] leading-[1.05] text-white/60 -rotate-3">
            Same<br/>Curiosity<br/>Bigger<br/>Impact
            <div className="text-[30px] mt-[10px] ml-[35px] font-sans">?</div>
          </div>

          {/* Bottom Info */}
          <div className="absolute left-[5vw] right-[5vw] bottom-[35px] flex flex-col md:flex-row items-start md:items-center z-10 gap-[20px] md:gap-0">
            
            <div className="flex items-center gap-[14px] text-[#d5d3cd] text-[13px] md:mr-[80px]">
              <div className="w-[22px] h-[36px] border border-[#ddd] rounded-[14px] relative before:absolute before:w-[2px] before:h-[7px] before:bg-[#ddd] before:top-[7px] before:left-1/2 before:-translate-x-1/2"></div>
              <span>Scroll to explore</span>
            </div>

            <div className="flex items-center w-full md:w-auto">
              <div className="px-[12px] md:px-[28px] md:border-l border-white/25 md:min-w-[145px]">
                <strong className="block text-[#e8c391] text-[14px] md:text-[17px] mb-1">3+</strong>
                <span className="text-[#aaa9a5] text-[10px] md:text-[12px]">Projects</span>
              </div>
              <div className="px-[12px] md:px-[28px] border-l border-white/25 md:min-w-[145px]">
                <strong className="block text-[#e8c391] text-[14px] md:text-[17px] mb-1">AI/ML</strong>
                <span className="text-[#aaa9a5] text-[10px] md:text-[12px]">Focus Area</span>
              </div>
              <div className="px-[12px] md:px-[28px] border-l border-white/25 md:min-w-[145px]">
                <strong className="block text-[#e8c391] text-[14px] md:text-[17px] mb-1">Always</strong>
                <span className="text-[#aaa9a5] text-[10px] md:text-[12px]">Learning</span>
              </div>
            </div>

          </div>

        </div>
      </section>
      '''

new_content = content[:start_idx] + new_hero + content[end_idx:]

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
