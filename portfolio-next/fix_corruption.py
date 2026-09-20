import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add isolate to the hero section
content = content.replace('className="relative h-screen min-h-screen overflow-hidden bg-[#07090a] text-[#f4f1eb]"', 'className="relative h-screen min-h-screen overflow-hidden bg-[#07090a] text-[#f4f1eb] isolate"')

# 2. Fix arrows
content = content.replace('Let&apos;s Talk <span className="ml-2 font-serif leading-none mt-[-1px]">?</span>', 'Let&apos;s Talk <span className="ml-2 font-serif leading-none mt-[-1px]">&rarr;</span>')

content = content.replace('Explore My Work\\n              <span className="font-serif leading-none">?</span>', 'Explore My Work\\n              <span className="font-serif leading-none">&rarr;</span>')

content = content.replace('Download CV\\n              <span className="font-serif leading-none">?</span>', 'Download CV\\n              <span className="font-serif leading-none">&darr;</span>')

content = content.replace('<span className="block ml-[48px] mt-[4px] font-[\'Inter\',sans-serif] text-[29px] rotate-[15deg]">?</span>', '<span className="block ml-[48px] mt-[4px] font-[\'Inter\',sans-serif] text-[29px] rotate-[15deg]">&#8600;</span>')

# 3. Fix About section icons (replacing the whole array)
old_icons = '''{[
                { icon: "??", text: "Problem Solver" },
                { icon: "??", text: "Continuous Learner" },
                { icon: "??", text: "Product Thinker" },
                { icon: "??", text: "Impact Driven" },
              ]}'''

new_icons = '''{[
                { icon: <Lightbulb className="w-5 h-5" />, text: "Problem Solver" },
                { icon: <BookOpen className="w-5 h-5" />, text: "Continuous Learner" },
                { icon: <Box className="w-5 h-5" />, text: "Product Thinker" },
                { icon: <Target className="w-5 h-5" />, text: "Impact Driven" },
              ]}'''

content = content.replace(old_icons, new_icons)

# Add the lucide-react imports for these new icons
content = content.replace('import { ArrowRight, ArrowLeft, Download, Mail } from "lucide-react";', 'import { ArrowRight, ArrowLeft, Download, Mail, Lightbulb, BookOpen, Box, Target } from "lucide-react";')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
