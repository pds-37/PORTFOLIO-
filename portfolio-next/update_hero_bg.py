import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the background gradients div
old_bg = '''{/* Background Gradients & Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(4, 6, 7, 0.98) 0%, rgba(4, 6, 7, 0.94) 35%, rgba(4, 6, 7, 0.60) 58%, rgba(4, 6, 7, 0.10) 100%), url('/hero-bg.jpg')" 
          }}
        ></div>'''

new_bg = '''{/* Blurred Architecture Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center blur-[18px] brightness-[0.36] scale-[1.08]"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.98) 39%, rgba(0,0,0,0.66) 55%, rgba(0,0,0,0.08) 100%), linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.72)), url('/priyanshu-hero.png')" 
          }}
        ></div>
        {/* Secondary Architecture Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ 
            background: "linear-gradient(90deg, rgba(6,8,9,1) 0%, rgba(6,8,9,1) 43%, transparent 70%), linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.82) 100%)" 
          }}
        ></div>
        {/* Light Slit Overlay */}
        <div className="absolute z-0 top-0 right-0 w-[28%] h-full opacity-15 blur-[25px]" style={{ background: "linear-gradient(90deg, transparent, #e8c99d 47%, #fff2dd 52%, transparent)" }}></div>
'''

content = content.replace(old_bg, new_bg)

# Update the foreground image styling to match their circular framed look
old_img_container = '''{/* Person / Silhouette */}
          <div className="absolute right-[-15%] md:right-[7%] bottom-0 w-[70%] md:w-[42%] lg:w-[29%] max-w-[470px] z-[2] flex justify-center opacity-45 md:opacity-100">
            <div 
              className="w-full relative" 
              style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
            >
              <Image 
                src="/priyanshu-hero.png" 
                alt="Priyanshu Figure" 
                width={470}
                height={800}
                className="w-full object-contain filter contrast-[1.05] brightness-[0.92]" 
              />
            </div>
          </div>'''

new_img_container = '''{/* Circular Photo */}
          <div className="absolute right-[4%] bottom-[-1px] w-[min(37vw,570px)] z-[3] flex justify-center pointer-events-none max-md:w-[55vw] max-md:right-[-10%] max-md:opacity-45 max-sm:w-[72vw] max-sm:right-[-18%] max-sm:opacity-30">
             <div className="w-full relative">
                {/* Glow behind image */}
                <div className="absolute inset-[8%_4%_0] -z-10 blur-[25px]" style={{ background: "radial-gradient(circle, rgba(217,185,138,0.2), transparent 60%)" }}></div>
                <Image 
                  src="/priyanshu-hero.png" 
                  alt="Priyanshu portrait" 
                  width={570}
                  height={570}
                  className="w-full aspect-square object-cover rounded-full border-[2px] border-[rgba(255,247,235,0.85)] shadow-[0_0_70px_rgba(222,185,132,0.16)] brightness-90 contrast-[1.04]" 
                />
             </div>
          </div>'''

content = content.replace(old_img_container, new_img_container)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
