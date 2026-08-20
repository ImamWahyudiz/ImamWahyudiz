const fs = require('fs');
const path = require('path');

const photoB64 = fs.readFileSync(path.join(__dirname, '../public/foto-formal.jpeg')).toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 620" width="400" height="620">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&amp;family=Orbitron:wght@700;900&amp;display=swap');
      
      /* Global Pendulum Sway */
      .lanyard-sway-group {
        transform-origin: 200px 0px;
        animation: pendulum-sway 6s ease-in-out infinite alternate;
      }

      @keyframes pendulum-sway {
        0% { transform: rotate(-2.5deg) translateY(-2px); }
        100% { transform: rotate(2.5deg) translateY(2px); }
      }

      /* Synchronized 3D Spin Animation */
      .front-card-rig {
        transform-origin: 200px 300px;
        animation: spin-front 10s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }

      .back-card-rig {
        transform-origin: 200px 300px;
        animation: spin-back 10s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }

      .strap-rig {
        transform-origin: 200px 90px;
        animation: spin-strap 10s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }

      /* FRONT FACE KEYFRAMES */
      @keyframes spin-front {
        0%, 36% {
          transform: scaleX(1);
          opacity: 1;
        }
        46% {
          transform: scaleX(0.001);
          opacity: 1;
        }
        46.01%, 88% {
          transform: scaleX(0);
          opacity: 0;
        }
        88.01% {
          transform: scaleX(0.001);
          opacity: 1;
        }
        98%, 100% {
          transform: scaleX(1);
          opacity: 1;
        }
      }

      /* BACK FACE KEYFRAMES */
      @keyframes spin-back {
        0%, 46% {
          transform: scaleX(0);
          opacity: 0;
        }
        46.01% {
          transform: scaleX(0.001);
          opacity: 1;
        }
        56%, 78% {
          transform: scaleX(1);
          opacity: 1;
        }
        88% {
          transform: scaleX(0.001);
          opacity: 1;
        }
        88.01%, 100% {
          transform: scaleX(0);
          opacity: 0;
        }
      }

      @keyframes spin-strap {
        0%, 36% { transform: scaleX(1); }
        46%, 88% { transform: scaleX(0.25); }
        56%, 78% { transform: scaleX(0.95); }
        98%, 100% { transform: scaleX(1); }
      }

      text {
        font-family: 'JetBrains Mono', monospace;
      }
      
      .font-orbitron {
        font-family: 'Orbitron', 'JetBrains Mono', sans-serif;
      }

      .cyan-glow {
        filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.65));
      }

      .purple-glow {
        filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.65));
      }
    </style>

    <!-- Linear Gradients -->
    <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="40%" stop-color="#00f2fe" />
      <stop offset="70%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#7c3aed" />
    </linearGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070b14" />
      <stop offset="50%" stop-color="#0c1324" />
      <stop offset="100%" stop-color="#070b14" />
    </linearGradient>

    <linearGradient id="cardBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d0e1c" />
      <stop offset="50%" stop-color="#140f26" />
      <stop offset="100%" stop-color="#070b14" />
    </linearGradient>

    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>

    <clipPath id="avatarCircle">
      <circle cx="200" cy="205" r="50" />
    </clipPath>
  </defs>

  <g class="lanyard-sway-group">
    
    <!-- Top Strap & Buckle -->
    <g class="strap-rig">
      <path d="M 140 -20 L 192 90 L 208 90 L 260 -20" fill="none" stroke="url(#strapGrad)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" class="cyan-glow" />
      <path d="M 143 -20 L 194 88 M 206 88 L 257 -20" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6" />

      <rect x="184" y="80" width="32" height="15" rx="4" fill="#334155" stroke="#00f2fe" stroke-width="1.5" />
      <rect x="194" y="95" width="12" height="18" rx="3" fill="#64748b" stroke="#a855f7" stroke-width="1" />
      <ellipse cx="200" cy="115" rx="7" ry="11" fill="none" stroke="#00f2fe" stroke-width="3" />
    </g>

    <!-- ================= FRONT FACE ================= -->
    <g class="front-card-rig">
      <rect x="54" y="124" width="292" height="472" rx="20" fill="none" stroke="#00f2fe" stroke-width="2" class="cyan-glow" />
      <rect x="55" y="125" width="290" height="470" rx="19" fill="url(#cardGrad)" />
      
      <path d="M 55 190 L 345 190 L 345 145 Q 345 125 325 125 L 75 125 Q 55 125 55 145 Z" fill="#0b1329" />
      <line x1="55" y1="190" x2="345" y2="190" stroke="url(#headerGrad)" stroke-width="2" />

      <!-- Punch Slot -->
      <rect x="180" y="133" width="40" height="8" rx="4" fill="#030712" stroke="#1e293b" stroke-width="1.5" />

      <!-- Avatar Halo & Photo Profile -->
      <circle cx="200" cy="205" r="54" fill="none" stroke="url(#headerGrad)" stroke-width="3" class="cyan-glow" />
      <circle cx="200" cy="205" r="50" fill="#0b1329" />

      <image 
        x="150" 
        y="155" 
        width="100" 
        height="100" 
        preserveAspectRatio="xMidYMid slice"
        href="data:image/jpeg;base64,${photoB64}" 
        xlink:href="data:image/jpeg;base64,${photoB64}" 
        clip-path="url(#avatarCircle)"
      />

      <!-- Identity Text -->
      <text x="200" y="286" text-anchor="middle" font-size="20" font-weight="800" fill="#f8fafc" class="font-orbitron">IMAM WAHYUDI</text>
      <text x="200" y="308" text-anchor="middle" font-size="12" font-weight="700" fill="#00f2fe" letter-spacing="1">INFORMATICS STUDENT</text>
      <text x="200" y="328" text-anchor="middle" font-size="11" fill="#94a3b8">&lt; UIN SUNAN KALIJAGA /&gt;</text>

      <!-- Status Badges Row -->
      <g transform="translate(68, 348)">
        <rect x="0" y="0" width="124" height="28" rx="6" fill="#0369a1" opacity="0.3" stroke="#00f2fe" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="#00f2fe" class="cyan-glow" />
        <text x="68" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#00f2fe">LVL 99 : PRO</text>
      </g>

      <g transform="translate(208, 348)">
        <rect x="0" y="0" width="124" height="28" rx="6" fill="#581c87" opacity="0.3" stroke="#a855f7" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="#a855f7" class="purple-glow" />
        <text x="68" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#d8b4fe">ONLINE // CODE</text>
      </g>

      <!-- Core Stack Badges with Real Vector Logo Glyphs -->
      <!-- 1. JS -->
      <g transform="translate(70, 395)">
        <rect x="0" y="0" width="80" height="26" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <rect x="7" y="6" width="14" height="14" rx="2" fill="#f7df1e" />
        <text x="14" y="17" text-anchor="middle" font-size="9" font-weight="900" fill="#000">JS</text>
        <text x="50" y="17" text-anchor="middle" font-size="10" fill="#f7df1e" font-weight="700">JS / VUE</text>
      </g>

      <!-- 2. Python -->
      <g transform="translate(160, 395)">
        <rect x="0" y="0" width="80" height="26" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <!-- Python Vector -->
        <g transform="translate(7, 5) scale(0.55)">
          <path d="M9.9 0C4.5 0 4.8 2.3 4.8 2.3l.01 2.4h5.2V5.5H3.1S0 5.1 0 10.4c0 5.4 2.7 5.2 2.7 5.2h1.6V13.3s-.1-2.7 2.7-2.7h5.1s2.6.1 2.6-2.5V2.6S15.3 0 9.9 0zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#38bdf8" />
          <path d="M10.1 20c5.4 0 5.1-2.3 5.1-2.3l-.01-2.4H10v-.8h6.9s3.1.4 3.1-4.9c0-5.4-2.7-5.2-2.7-5.2h-1.6v2.3s.1 2.7-2.7 2.7H7.9s-2.6-.1-2.6 2.5v4.8s-.6 2.6 4.8 2.6zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#fde047" />
        </g>
        <text x="50" y="17" text-anchor="middle" font-size="10" fill="#38bdf8" font-weight="700">PYTHON</text>
      </g>

      <!-- 3. ESP32 -->
      <g transform="translate(250, 395)">
        <rect x="0" y="0" width="80" height="26" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <!-- Chip Vector -->
        <rect x="7" y="7" width="10" height="10" fill="#10b981" rx="1" transform="translate(2, 1)" />
        <text x="50" y="17" text-anchor="middle" font-size="10" fill="#10b981" font-weight="700">ESP32</text>
      </g>

      <!-- Security Barcode Strip -->
      <g transform="translate(85, 445)">
        <text x="115" y="0" text-anchor="middle" font-size="9" fill="#64748b" letter-spacing="2">KEY ID: 0x88FE92A // GRANTED</text>
        <g fill="#00f2fe" opacity="0.85" transform="translate(10, 8)">
          <rect x="0" y="0" width="3" height="24" />
          <rect x="6" y="0" width="6" height="24" />
          <rect x="16" y="0" width="2" height="24" />
          <rect x="22" y="0" width="8" height="24" />
          <rect x="34" y="0" width="14" height="24" />
          <rect x="52" y="0" width="4" height="24" />
          <rect x="60" y="0" width="10" height="24" />
          <rect x="74" y="0" width="3" height="24" />
          <rect x="81" y="0" width="16" height="24" />
          <rect x="101" y="0" width="5" height="24" />
          <rect x="110" y="0" width="12" height="24" />
          <rect x="126" y="0" width="4" height="24" />
          <rect x="134" y="0" width="8" height="24" />
          <rect x="146" y="0" width="18" height="24" />
          <rect x="168" y="0" width="6" height="24" />
          <rect x="178" y="0" width="4" height="24" />
          <rect x="186" y="0" width="14" height="24" />
          <rect x="204" y="0" width="4" height="24" />
        </g>
      </g>

      <!-- Footer Tag -->
      <g transform="translate(75, 524)">
        <rect x="0" y="0" width="250" height="26" rx="6" fill="#0b1329" stroke="#1e293b" stroke-width="1" />
        <text x="125" y="17" text-anchor="middle" font-size="10" font-weight="700" fill="#00f2fe" letter-spacing="2">GITHUB: @ImamWahyudiz</text>
      </g>
    </g>

    <!-- ================= BACK FACE ================= -->
    <g class="back-card-rig">
      <rect x="54" y="124" width="292" height="472" rx="20" fill="none" stroke="#a855f7" stroke-width="2" class="purple-glow" />
      <rect x="55" y="125" width="290" height="470" rx="19" fill="url(#cardBackGrad)" />
      
      <path d="M 55 190 L 345 190 L 345 145 Q 345 125 325 125 L 75 125 Q 55 125 55 145 Z" fill="#0b1329" />
      <line x1="55" y1="190" x2="345" y2="190" stroke="url(#headerGrad)" stroke-width="2" />

      <!-- Punch Slot -->
      <rect x="180" y="133" width="40" height="8" rx="4" fill="#030712" stroke="#1e293b" stroke-width="1.5" />

      <text x="200" y="165" text-anchor="middle" font-size="13" font-weight="800" fill="#a855f7" letter-spacing="2" class="font-orbitron">SYSTEM ARCHITECTURE</text>

      <!-- Profile Matrix Details -->
      <g transform="translate(80, 215)" font-size="11">
        <text x="0" y="0" fill="#00f2fe" font-weight="700">&gt; SPECIALIZATION</text>
        <text x="0" y="24" fill="#e2e8f0">• Full Stack Web Architecture</text>
        <text x="0" y="48" fill="#e2e8f0">• Embedded IoT Telemetry (ESP32)</text>
        <text x="0" y="72" fill="#e2e8f0">• Data Structures &amp; Algorithms</text>
        <text x="0" y="96" fill="#e2e8f0">• Parallel &amp; High Concurrency</text>
      </g>

      <!-- Tech Network Circuit Nodes -->
      <g transform="translate(75, 345)">
        <text x="125" y="0" text-anchor="middle" font-size="10" fill="#a855f7" font-weight="700" letter-spacing="1">CONNECTED ECOSYSTEM</text>
        
        <line x1="35" y1="36" x2="115" y2="36" stroke="#334155" stroke-width="2" />
        <line x1="135" y1="36" x2="215" y2="36" stroke="#334155" stroke-width="2" />

        <!-- Node 1: TypeScript -->
        <circle cx="35" cy="36" r="18" fill="#0f172a" stroke="#00f2fe" stroke-width="2" />
        <text x="35" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#00f2fe">TS</text>

        <!-- Node 2: PHP -->
        <circle cx="125" cy="36" r="18" fill="#0f172a" stroke="#a855f7" stroke-width="2" />
        <text x="125" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#a855f7">PHP</text>

        <!-- Node 3: C++ -->
        <circle cx="215" cy="36" r="18" fill="#0f172a" stroke="#10b981" stroke-width="2" />
        <text x="215" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#10b981">C++</text>
      </g>

      <!-- Status Info Box -->
      <g transform="translate(75, 435)" font-size="10">
        <rect x="0" y="0" width="250" height="58" rx="8" fill="#0b1329" stroke="#1e293b" stroke-width="1" />
        <text x="15" y="22" fill="#64748b">STATUS:</text>
        <text x="75" y="22" fill="#10b981" font-weight="700">READY TO COLLABORATE</text>

        <text x="15" y="44" fill="#64748b">LOCATION:</text>
        <text x="85" y="44" fill="#e2e8f0" font-weight="700">INDONESIA // REMOTE</text>
      </g>

      <!-- Footer Tag -->
      <g transform="translate(75, 524)">
        <rect x="0" y="0" width="250" height="26" rx="6" fill="#0b1329" stroke="#1e293b" stroke-width="1" />
        <text x="125" y="17" text-anchor="middle" font-size="10" font-weight="700" fill="#a855f7" letter-spacing="2">LINKEDIN: /in/imam-wahyudi</text>
      </g>
    </g>

  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/lanyard.svg'), svgContent);
console.log('Successfully updated public/lanyard.svg!');
