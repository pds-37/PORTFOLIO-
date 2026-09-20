const fs = require('fs');
const path = require('path');

const map = {
  'about-bg.png': 'priyanshu-seated.png',
  'journey-visual.png': 'earth-night.png',
  'contextmind.png': 'chanakya.png',
  'projects-preview.png': 'financial_threat_monitor.png',
  'skills-preview.png': 'skills-cube.png',
  'contact-preview.png': 'health_nexus.png',
  'insights-preview.png': 'study_buddy.png'
};

const root = path.join(__dirname, 'priyanshu_full_portfolio', 'src', 'assets');
for (const [k, v] of Object.entries(map)) {
    fs.copyFileSync(path.join(root, v), path.join(root, k));
}
console.log('Images mapped.');
