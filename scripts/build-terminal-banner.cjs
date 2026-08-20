const fs = require('fs');
const path = require('path');

const photoFormalB64 = fs.readFileSync(path.join(__dirname, '../public/foto-formal.jpeg')).toString('base64');
const photoSemiB64 = fs.readFileSync(path.join(__dirname, '../public/semi-formal.jpeg')).toString('base64');

// Lanyard height 210, width 960 to accommodate terminal banner info on left and lanyard ID card on right
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 960 210" width="100%" height="210">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700;800&amp;family=Orbitron:wght@700;900&amp;display=swap');
      
      text {
        font-family: 'JetBrains Mono', monospace;
      }
      .font-orbitron {
        font-family: 'Orbitron', 'JetBrains Mono', sans-serif;
      }
      .glow {
        filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.35));
      }
      .cyan-glow {
        filter: drop-shadow(0 0 6px rgba(0, 242, 254, 0.6));
      }

      /* Synchronized 3D Spin Animation for Mini Lanyard on Right */
      .lanyard-sway-group {
        transform-origin: 870px 10px;
        animation: pendulum-sway 6s ease-in-out infinite alternate;
      }

      @keyframes pendulum-sway {
        0% { transform: rotate(-2deg); }
        100% { transform: rotate(2deg); }
      }

      .front-card-rig {
        transform-origin: 870px 110px;
        animation: spin-front 10s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }
      .back-card-rig {
        transform-origin: 870px 110px;
        animation: spin-back 10s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }

      @keyframes spin-front {
        0%, 38% { transform: scaleX(1); opacity: 1; }
        48% { transform: scaleX(0.001); opacity: 1; }
        48.01%, 88% { transform: scaleX(0); opacity: 0; }
        88.01% { transform: scaleX(0.001); opacity: 1; }
        98%, 100% { transform: scaleX(1); opacity: 1; }
      }

      @keyframes spin-back {
        0%, 38% { transform: scaleX(0); opacity: 0; }
        48% { transform: scaleX(0.001); opacity: 1; }
        58%, 78% { transform: scaleX(-1); opacity: 1; }
        88% { transform: scaleX(0.001); opacity: 1; }
        88.01%, 100% { transform: scaleX(0); opacity: 0; }
      }
    </style>

    <linearGradient id="termBoxBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040711" />
      <stop offset="50%" stop-color="#091122" />
      <stop offset="100%" stop-color="#040711" />
    </linearGradient>

    <linearGradient id="cyanPurple" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>

    <clipPath id="avatarClip">
      <rect x="0" y="0" width="145" height="165" rx="10" />
    </clipPath>

    <clipPath id="lanyardAvatarClip">
      <circle cx="50" cy="50" r="26" />
    </clipPath>
  </defs>

  <!-- Outer Cyber Neon Box -->
  <rect x="3" y="3" width="954" height="204" rx="12" fill="url(#termBoxBg)" stroke="url(#cyanPurple)" stroke-width="1.5" class="glow" />

  <!-- Corner Tech HUD Accents -->
  <path d="M 3 24 L 3 3 L 24 3" fill="none" stroke="#00f2fe" stroke-width="3" />
  <path d="M 957 24 L 957 3 L 936 3" fill="none" stroke="#a855f7" stroke-width="3" />
  <path d="M 3 186 L 3 207 L 24 207" fill="none" stroke="#00f2fe" stroke-width="3" />
  <path d="M 957 186 L 957 207 L 936 207" fill="none" stroke="#a855f7" stroke-width="3" />

  <!-- Left Side: Clean Real Photo Avatar -->
  <g transform="translate(22, 22)">
    <g clip-path="url(#avatarClip)">
      <image 
        x="0" 
        y="0" 
        width="145" 
        height="165" 
        preserveAspectRatio="xMidYMid slice"
        href="data:image/jpeg;base64,${photoSemiB64}" 
        xlink:href="data:image/jpeg;base64,${photoSemiB64}"
      />
      <!-- Bottom Label -->
      <rect x="0" y="125" width="145" height="40" fill="url(#termBoxBg)" opacity="0.7" />
      <text x="72" y="152" text-anchor="middle" font-size="9.5" font-weight="700" fill="#00f2fe">IMAM WAHYUDI</text>
    </g>

    <!-- Frame Border & Header Label -->
    <rect x="0" y="0" width="145" height="165" rx="10" fill="none" stroke="#00f2fe" stroke-width="1.5" class="glow" />
    <rect x="25" y="-7" width="95" height="14" rx="3" fill="#040711" stroke="#00f2fe" stroke-width="1" />
    <text x="72" y="3.5" text-anchor="middle" font-size="8" font-weight="800" fill="#00f2fe" letter-spacing="1.5">DEV // PASS</text>
  </g>

  <!-- Middle Area: Terminal Welcome Header & Cyber Commands Info -->
  <g transform="translate(190, 32)">
    
    <!-- Top System Tag & Status -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="145" height="22" rx="4" fill="#0369a1" opacity="0.25" stroke="#00f2fe" stroke-width="1" />
      <circle cx="10" cy="11" r="3.5" fill="#10b981" />
      <text x="22" y="15" font-size="10" font-weight="800" fill="#00f2fe" letter-spacing="1">CLI_MODE // ACTIVE</text>

      <text x="165" y="15" font-size="10.5" fill="#64748b">HOST: imam@cyber-core (x86_64)</text>
    </g>

    <!-- Main Title -->
    <text x="0" y="52" font-size="17" font-weight="900" fill="#f8fafc" class="font-orbitron" letter-spacing="1">
      WELCOME TO <tspan fill="#00f2fe">IMAM WAHYUDI</tspan> CYBER CLI
    </text>

    <!-- Subtitle / Version -->
    <text x="0" y="76" font-size="12" fill="#a855f7" font-weight="700">
      SYSTEM KERNEL v2.4.0-release <tspan fill="#64748b">|</tspan> <tspan fill="#e2e8f0">Interactive Developer Shell</tspan>
    </text>

    <line x1="0" y1="92" x2="570" y2="92" stroke="#1e293b" stroke-width="1" />

    <!-- Instructions / Guide -->
    <g transform="translate(0, 114)" font-size="11.5">
      <text x="0" y="0" fill="#94a3b8">
        Type <tspan fill="#fde047" font-weight="700">'help'</tspan> to inspect all commands, or click fast triggers:
      </text>
      
      <!-- Command Pills -->
      <g transform="translate(0, 12)">
        <text x="0" y="14" fill="#00f2fe" font-weight="700">&gt; skills</text>
        <text x="85" y="14" fill="#00f2fe" font-weight="700">&gt; projects</text>
        <text x="190" y="14" fill="#00f2fe" font-weight="700">&gt; initialize</text>
        <text x="300" y="14" fill="#00f2fe" font-weight="700">&gt; timeline</text>
        <text x="400" y="14" fill="#00f2fe" font-weight="700">&gt; contact</text>
      </g>
    </g>

  </g>

  <!-- Right Side: Mini 3D Lanyard ID Card (Formal Photo, No Heavy Container) -->
  <g class="lanyard-sway-group">
    
    <!-- Top Mini Strap -->
    <path d="M 850 0 L 870 24 L 890 0" fill="none" stroke="#00f2fe" stroke-width="5" stroke-linecap="round" opacity="0.8" />
    <rect x="864" y="22" width="12" height="6" rx="2" fill="#334155" stroke="#00f2fe" stroke-width="1" />
    <circle cx="870" cy="32" r="3" fill="none" stroke="#00f2fe" stroke-width="1.5" />

    <!-- FRONT FACE -->
    <g class="front-card-rig">
      <rect x="815" y="36" width="110" height="155" rx="8" fill="#0b1329" stroke="#00f2fe" stroke-width="1.2" class="cyan-glow" />
      
      <!-- Card Header Strip -->
      <path d="M 815 62 L 925 62 L 925 44 Q 925 36 917 36 L 823 36 Q 815 36 815 44 Z" fill="#030712" />
      <text x="870" y="52" text-anchor="middle" font-size="7.5" font-weight="800" fill="#00f2fe" letter-spacing="1">DEV ID // 2026</text>

      <!-- Formal Photo Avatar -->
      <g transform="translate(820, 58)">
        <circle cx="50" cy="50" r="28" fill="none" stroke="#00f2fe" stroke-width="1.5" />
        <image 
          x="24" 
          y="24" 
          width="52" 
          height="52" 
          preserveAspectRatio="xMidYMid slice"
          href="data:image/jpeg;base64,${photoFormalB64}" 
          xlink:href="data:image/jpeg;base64,${photoFormalB64}" 
          clip-path="url(#lanyardAvatarClip)"
        />
      </g>

      <!-- Name & Title -->
      <text x="870" y="146" text-anchor="middle" font-size="8.5" font-weight="800" fill="#f8fafc" class="font-orbitron">IMAM WAHYUDI</text>
      <text x="870" y="158" text-anchor="middle" font-size="6.5" font-weight="700" fill="#a855f7">INFORMATICS STUDENT</text>
      <text x="870" y="168" text-anchor="middle" font-size="6" fill="#64748b">UIN SUNAN KALIJAGA</text>

      <!-- Bottom Status -->
      <rect x="830" y="174" width="80" height="10" rx="2" fill="#0369a1" opacity="0.3" stroke="#00f2fe" stroke-width="0.6" />
      <text x="870" y="181.5" text-anchor="middle" font-size="5.5" font-weight="700" fill="#00f2fe">● VERIFIED PASS</text>
    </g>

    <!-- BACK FACE -->
    <g class="back-card-rig">
      <rect x="815" y="36" width="110" height="155" rx="8" fill="#070d1e" stroke="#a855f7" stroke-width="1.2" />
      <text x="870" y="56" text-anchor="middle" font-size="7.5" font-weight="800" fill="#a855f7">CYBER REPO PASS</text>
      <text x="870" y="80" text-anchor="middle" font-size="6" fill="#94a3b8">GITHUB: @ImamWahyudiz</text>
      <text x="870" y="94" text-anchor="middle" font-size="6" fill="#94a3b8">LANG: JS / PY / C / JAVA</text>
      <text x="870" y="108" text-anchor="middle" font-size="6" fill="#94a3b8">IOT: ESP32 DEVKIT</text>
      
      <!-- Mini Barcode -->
      <g transform="translate(830, 130)" fill="#00f2fe" opacity="0.8">
        <rect x="0" y="0" width="2" height="16" />
        <rect x="5" y="0" width="4" height="16" />
        <rect x="12" y="0" width="1" height="16" />
        <rect x="16" y="0" width="6" height="16" />
        <rect x="25" y="0" width="3" height="16" />
        <rect x="31" y="0" width="8" height="16" />
        <rect x="42" y="0" width="2" height="16" />
        <rect x="47" y="0" width="5" height="16" />
        <rect x="55" y="0" width="3" height="16" />
        <rect x="61" y="0" width="7" height="16" />
        <rect x="71" y="0" width="2" height="16" />
        <rect x="76" y="0" width="4" height="16" />
      </g>
      <text x="870" y="158" text-anchor="middle" font-size="5.5" fill="#64748b">KEY: 0x88FE92A</text>
    </g>

  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/terminal-banner.svg'), svg);
console.log('Successfully updated terminal-banner.svg with integrated right-side Lanyard ID!');
