const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'priyanshu_full_portfolio');
const dirs = ['src/components', 'src/pages', 'src/data', 'src/assets', 'public'];

dirs.forEach(p => fs.mkdirSync(path.join(root, p), { recursive: true }));

fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({
    name: 'priyanshu-portfolio',
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {dev: 'vite', build: 'vite build', preview: 'vite preview'},
    dependencies: {'@vitejs/plugin-react': 'latest', vite: 'latest', react: 'latest', 'react-dom': 'latest', 'lucide-react': 'latest'},
    devDependencies: {}
}, null, 2));

fs.writeFileSync(path.join(root, 'index.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Priyanshu — Engineer · Builder · Problem Solver</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`);

console.log("Base created.");
