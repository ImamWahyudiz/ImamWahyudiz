const fs = require('fs');
const path = require('path');

// Theme colors matching cyber portfolio: Cyan #00f2fe, Blue #0077b6, Purple #a855f7, Dark #0b1329
const width = 600;
const height = 110;

// Generate simulated matrix contribution dots with glowing snake trail
const cols = 36;
const rows = 6;
const dotSize = 8;
const gap = 5;

let dotsSvg = '';
const colors = ['#0f172a', '#0e243a', '#0369a1', '#0284c7', '#00f2fe'];

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const x = 20 + c * (dotSize + gap);
    const y = 20 + r * (dotSize + gap);
    
    // Patterned heatmap
    let color = colors[0];
    const rand = (c * 7 + r * 13) % 100;
    if (rand > 75) color = colors[4];
    else if (rand > 55) color = colors[3];
    else if (rand > 35) color = colors[2];
    else if (rand > 15) color = colors[1];

    dotsSvg += `<rect x="${x}" y="${y}" width="${dotSize}" height="${dotSize}" rx="2" fill="${color}" opacity="0.85" />\n`;
  }
}

const snakeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600;800&amp;display=swap');
      .font-mono { font-family: 'JetBrains Mono', monospace; }
      
      @keyframes snakeMove {
        0% { transform: translateX(0px); }
        50% { transform: translateX(200px); }
        100% { transform: translateX(0px); }
      }
      .snake-head {
        animation: snakeMove 8s ease-in-out infinite;
      }
      .cyan-glow {
        filter: drop-shadow(0 0 6px rgba(0,242,254,0.8));
      }
    </style>
    
    <linearGradient id="snakeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#a855f7" />
      <stop offset="50%" stop-color="#00f2fe" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <!-- Background Frame -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="12" fill="#040711" stroke="#1e293b" stroke-width="1" />
  
  <!-- Grid Dots -->
  <g>
    ${dotsSvg}
  </g>

  <!-- Animated Cyber Snake Trail -->
  <g class="snake-head">
    <rect x="120" y="46" width="12" height="12" rx="3" fill="#ffffff" class="cyan-glow" stroke="#00f2fe" stroke-width="2" />
    <rect x="107" y="46" width="10" height="10" rx="2" fill="#00f2fe" opacity="0.9" />
    <rect x="94" y="46" width="10" height="10" rx="2" fill="#0284c7" opacity="0.8" />
    <rect x="81" y="46" width="10" height="10" rx="2" fill="#0369a1" opacity="0.7" />
    <rect x="68" y="46" width="10" height="10" rx="2" fill="#a855f7" opacity="0.6" />
  </g>

  <!-- Overlay Header Tag -->
  <g transform="translate(485, 22)">
    <rect x="0" y="0" width="100" height="22" rx="4" fill="#0b1329" stroke="#00f2fe" stroke-width="0.8" />
    <text x="50" y="14" text-anchor="middle" font-size="9.5" fill="#00f2fe" font-weight="700" class="font-mono">SNAKE.EATER</text>
  </g>

  <!-- Metric Details -->
  <g transform="translate(485, 52)" class="font-mono text-right">
    <text x="95" y="12" font-size="9" fill="#64748b" text-anchor="end">ACTIVITY RADAR</text>
    <text x="95" y="26" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="end">CONTRIBUTIONS</text>
    <text x="95" y="38" font-size="9" fill="#10b981" text-anchor="end">● SYNCED</text>
  </g>
</svg>
`;

fs.writeFileSync(path.join(__dirname, '../public/github-snake-dark.svg'), snakeSvg.trim());
console.log('Successfully generated public/github-snake-dark.svg');
