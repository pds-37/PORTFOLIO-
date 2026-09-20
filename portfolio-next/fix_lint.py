import os

files_to_fix = [
    ('src/components/Navigation.tsx', [('Let\'s Talk', 'Let&apos;s Talk')]),
    ('src/components/sections/About.tsx', [('I\'m a Computer', 'I&apos;m a Computer'), ('\"Better', '&quot;Better'), ('Tomorrow\"', 'Tomorrow&quot;')]),
    ('src/components/sections/Contact.tsx', [('Let\'s build', 'Let&apos;s build'), ('I\'m always', 'I&apos;m always')]),
    ('src/components/sections/Projects.tsx', [('I\'ve built', 'I&apos;ve built')]),
    ('src/components/sections/Skills.tsx', [('what\'s next', 'what&apos;s next'), ('I\'m always', 'I&apos;m always')])
]

for file, fixes in files_to_fix:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in fixes:
        content = content.replace(old, new)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

with open('src/components/sections/ProjectDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('import { motion } from \"framer-motion\";\n', '')
content = content.replace(', Globe }', ' }')
content = content.replace('...({} as any)', '...({} as React.SVGProps<SVGSVGElement>)')
with open('src/components/sections/ProjectDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
