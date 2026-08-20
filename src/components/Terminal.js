import { profileData } from '../data/profileData.js';
import { playSound, toggleSound, isSoundEnabled } from '../utils/audio.js';

export function renderTerminal() {
  return `
    <section id="terminal" class="py-16 px-4 sm:px-8 max-w-5xl mx-auto z-10 relative scroll-mt-28">
      
      <!-- Minimized App Icon Trigger (Shown when terminal is closed / minimized) -->
      <div id="terminal-minimized-badge" class="hidden flex-col items-center justify-center p-8 text-center">
        <button id="restore-terminal-btn" class="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all cursor-pointer backdrop-blur-xl">
          <div class="w-10 h-10 rounded-xl bg-slate-950 border border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="text-left font-mono">
            <div class="text-sm font-bold text-slate-100 group-hover:text-cyan-300 flex items-center gap-2">
              <span>CYBER CLI // INTERACTIVE</span>
              <span class="status-dot"></span>
            </div>
            <div class="text-xs text-cyan-400/80">Click to launch developer terminal</div>
          </div>
        </button>
      </div>

      <!-- Main Window Frame -->
      <div id="terminal-main-window" class="terminal-window scanline">
        
        <!-- Window Top Bar -->
        <div class="terminal-header">
          <div class="flex items-center gap-2">
            <!-- Red: Close / Minimize to Icon -->
            <button id="term-btn-close" class="w-3.5 h-3.5 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer" title="Hide / Minimize to App Icon"></button>
            <!-- Yellow: Clear History -->
            <button id="term-btn-minimize" class="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity cursor-pointer" title="Clear Buffer / Minimize"></button>
            <!-- Green: Fullscreen / Maximize -->
            <button id="term-btn-maximize" class="w-3.5 h-3.5 rounded-full bg-green-500 hover:opacity-80 transition-opacity cursor-pointer" title="Toggle Fullscreen Window"></button>
            
            <span class="ml-3 text-xs text-slate-300 font-semibold font-mono tracking-wider">
              bash // imam@cyber-core:~ (tty1)
            </span>
          </div>

          <div class="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
            <span class="hidden sm:inline text-cyan-400">Type <b class="text-white bg-slate-800 px-1.5 py-0.5 rounded">help</b> for commands</span>
            <span class="status-dot"></span>
          </div>
        </div>

        <!-- Terminal Output Area -->
        <div id="terminal-history" class="p-4 sm:p-6 text-xs sm:text-sm font-mono text-slate-200 min-h-[260px] max-h-[460px] overflow-y-auto space-y-3 leading-relaxed">
          <div class="mb-2">
            <img src="./terminal-banner.svg" alt="Imam Wahyudi Terminal Shell Banner" class="w-full max-w-full drop-shadow-[0_4px_12px_rgba(0,242,254,0.15)]" />
          </div>
          <div class="text-slate-400 text-xs font-mono">
            [System initialized at ${new Date().toLocaleTimeString()}]. Type any command below or use interactive suggestions:
          </div>
        </div>

        <!-- Terminal Input Prompt -->
        <div class="p-3 sm:p-4 bg-slate-950/90 border-t border-slate-800 flex items-center gap-2">
          <span class="text-cyan-400 font-mono font-bold text-sm select-none">imam@cyber:~$</span>
          <input 
            id="terminal-input" 
            type="text" 
            autocomplete="off" 
            spellcheck="false" 
            placeholder="Type 'help', 'skills', 'projects', 'timeline', 'contact'..."
            class="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm placeholder-slate-600 caret-cyan-400"
          />
          <button id="terminal-submit-btn" class="px-3 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 rounded text-cyan-300 font-mono text-xs transition-colors cursor-pointer">
            RUN ↵
          </button>
        </div>

      </div>
    </section>
  `;
}

export function setupTerminalEvents() {
  const input = document.getElementById('terminal-input');
  const history = document.getElementById('terminal-history');
  const submitBtn = document.getElementById('terminal-submit-btn');
  const mainWindow = document.getElementById('terminal-main-window');
  const minimizedBadge = document.getElementById('terminal-minimized-badge');
  const restoreBtn = document.getElementById('restore-terminal-btn');

  const btnClose = document.getElementById('term-btn-close');
  const btnMinimize = document.getElementById('term-btn-minimize');
  const btnMaximize = document.getElementById('term-btn-maximize');

  if (!input || !history || !mainWindow) return;

  const commandHistory = [];
  let historyIndex = -1;

  // Window control functions
  window.minimizeTerminal = () => {
    playSound('select');
    mainWindow.classList.add('hidden');
    if (minimizedBadge) minimizedBadge.classList.remove('hidden');
  };

  window.restoreTerminal = () => {
    playSound('power');
    mainWindow.classList.remove('hidden');
    if (minimizedBadge) minimizedBadge.classList.add('hidden');
    input.focus();
  };

  window.toggleFullscreenTerminal = () => {
    playSound('action');
    const isFullscreen = mainWindow.classList.toggle('terminal-fullscreen');
    const termSection = document.getElementById('terminal');
    
    if (isFullscreen) {
      document.body.classList.add('terminal-locked');
      if (termSection) termSection.style.zIndex = '49';
    } else {
      document.body.classList.remove('terminal-locked');
      if (termSection) termSection.style.zIndex = '10';
    }
    input.focus();
  };

  window.clearTerminal = () => {
    playSound('select');
    history.innerHTML = '';
  };

  // Wire buttons
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      window.minimizeTerminal();
    });
  }

  if (btnMinimize) {
    btnMinimize.addEventListener('click', () => {
      window.clearTerminal();
    });
  }

  if (btnMaximize) {
    btnMaximize.addEventListener('click', () => {
      window.toggleFullscreenTerminal();
    });
  }

  if (restoreBtn) {
    restoreBtn.addEventListener('click', () => {
      window.restoreTerminal();
    });
  }

  window.executeTerminalCommand = (cmd) => {
    input.value = cmd;
    processCommand(cmd);
    input.value = '';
    input.focus();
  };

  function appendLine(html, type = 'output') {
    const line = document.createElement('div');
    if (type === 'input') {
      line.className = 'flex items-center gap-2 text-cyan-400 font-semibold';
      line.innerHTML = `<span class="text-slate-500 select-none">imam@cyber:~$</span> <span>${escapeHtml(html)}</span>`;
    } else if (type === 'error') {
      line.className = 'text-red-400';
      line.innerHTML = html;
    } else {
      line.className = 'text-slate-200';
      line.innerHTML = html;
    }
    history.appendChild(line);
    history.scrollTop = history.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function processCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    playSound('typing');
    appendLine(trimmed, 'input');
    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    const args = trimmed.split(/\s+/);
    const cmd = args[0].toLowerCase();

    switch (cmd) {
      case 'help':
      case '?':
        let helpText = `<div class="space-y-1 my-1">`;
        profileData.terminalHelp.forEach(h => {
          helpText += `<div><span class="text-cyan-300 font-bold w-20 inline-block underline cursor-pointer" onclick="window.executeTerminalCommand('${h.cmd}')">${h.cmd}</span> <span class="text-slate-400">- ${h.desc}</span></div>`;
        });
        helpText += `</div>`;
        appendLine(helpText);
        break;

      case 'about':
        appendLine(`
          <div class="bg-slate-900/60 p-3 rounded-lg border border-cyan-500/30 space-y-1.5">
            <div class="text-cyan-300 font-bold">${profileData.name} (${profileData.handle})</div>
            <div class="text-emerald-400">${profileData.role}</div>
            <div class="text-slate-300 leading-relaxed">${profileData.bio}</div>
            <div class="text-slate-400 text-xs mt-2">Location: ${profileData.location} | Status: ${profileData.status}</div>
          </div>
        `);
        break;

      case 'skills':
      case 'stack':
        let stackText = `<div class="text-cyan-400 font-bold mb-2">TECHNOLOGY STACK:</div>`;
        stackText += `<div class="space-y-2">`;
        const categories = {
          languages: "Languages",
          web: "Web Frameworks & Frontend",
          hardware: "IoT & Embedded Hardware",
          tools: "Development & DevOps Tools"
        };
        for (const [key, title] of Object.entries(categories)) {
          const items = profileData.techStack.filter(s => s.category === key);
          stackText += `<div><span class="text-purple-400 font-bold">${title}:</span> <span class="text-slate-200">${items.map(i => i.name).join('  |  ')}</span></div>`;
        }
        stackText += `</div>`;
        appendLine(stackText);
        break;

      case 'projects':
      case 'repos':
        let projText = `<div class="text-cyan-400 font-bold mb-2">FEATURED PROJECTS:</div>`;
        projText += `<div class="space-y-3">`;
        profileData.projects.forEach((p, idx) => {
          projText += `
            <div class="bg-slate-900/50 p-2.5 rounded border border-slate-800">
              <div class="flex items-center justify-between text-cyan-300 font-bold">
                <span>${idx + 1}. ${p.title} (${p.categoryLabel})</span>
                <span class="text-amber-300 text-xs">⭐ ${p.stars}</span>
              </div>
              <p class="text-slate-300 text-xs my-1">${p.description}</p>
              <div class="text-[11px] text-purple-300">Stack: ${p.tags.join(', ')}</div>
            </div>
          `;
        });
        projText += `</div>`;
        appendLine(projText);
        break;

      case 'stats':
        appendLine(`
          <div class="bg-slate-900/60 p-3 rounded-lg border border-cyan-500/30 space-y-2">
            <div class="text-cyan-300 font-bold">LIVE GITHUB METRICS:</div>
            <div class="text-slate-200">Username: <span class="text-cyan-400 font-bold">${profileData.username}</span></div>
            <div class="text-slate-200">Repositories: Public Repos & IoT Stacks</div>
            <div class="text-slate-200">Focus Areas: Full Stack Web, Parallel Algorithms, Embedded Firmware</div>
            <div class="text-emerald-400 text-xs">Streak & Activity live synced on dashboard section below.</div>
          </div>
        `);
        break;

      case 'timeline':
        let timeText = `<div class="text-cyan-400 font-bold mb-2">MILESTONES & JOURNEY:</div>`;
        timeText += `<div class="space-y-2">`;
        profileData.timeline.forEach(t => {
          timeText += `<div><span class="text-purple-300 font-bold">[${t.year}]</span> <span class="text-cyan-300 font-semibold">${t.title}</span> - <span class="text-slate-300">${t.description}</span></div>`;
        });
        timeText += `</div>`;
        appendLine(timeText);
        break;

      case 'contact':
        appendLine(`
          <div class="bg-slate-900/60 p-3 rounded-lg border border-cyan-500/30 space-y-1.5">
            <div class="text-cyan-300 font-bold">DIRECT CHANNELS:</div>
            <div>GitHub: <a href="${profileData.socials.github}" target="_blank" class="text-cyan-400 underline">${profileData.socials.github}</a></div>
            <div>LinkedIn: <a href="${profileData.socials.linkedin}" target="_blank" class="text-cyan-400 underline">linkedin.com/in/imam-wahyudi</a></div>
            <div>Instagram: <a href="${profileData.socials.instagram}" target="_blank" class="text-cyan-400 underline">${profileData.socials.instagram}</a></div>
            <div>Email: <span class="text-emerald-400">${profileData.socials.email}</span></div>
          </div>
        `);
        break;

      case 'sound':
        const state = toggleSound();
        appendLine(`<div class="text-emerald-400">Cyber Audio FX: <b>${state ? 'ENABLED' : 'DISABLED'}</b></div>`);
        break;

      case 'matrix':
        appendLine(`<div class="text-emerald-400 font-mono font-bold animate-pulse">Initializing Matrix Digital Stream... Look at the glowing particle grid!</div>`);
        playSound('success');
        break;

      case 'initialize':
      case 'init':
      case 'fastfetch':
      case 'neofetch':
      case 'fetch':
      case 'sysinfo':
      case 'profile':
        playSound('power');
        appendLine(`
          <div class="my-2 space-y-2">
            <div class="text-cyan-400 font-mono text-xs font-bold flex items-center gap-2">
              <span class="status-dot"></span>
              <span>SYSTEM INITIALIZED // v2.4.0 SYSTEM PROFILE</span>
            </div>
            <img src="./terminal-banner.svg" alt="Imam Wahyudi Terminal Shell Banner" class="w-full max-w-full drop-shadow-[0_4px_12px_rgba(0,242,254,0.15)]" />
          </div>
        `);
        break;

      case 'clear':
      case 'cls':
        history.innerHTML = '';
        break;

      case 'sudo':
        appendLine(`<div class="text-amber-400">Permission denied: You are already in superuser guest session with root browsing privileges.</div>`);
        break;

      case 'echo':
        appendLine(escapeHtml(args.slice(1).join(' ')));
        break;

      default:
        appendLine(`Command not found: '<span class="text-red-400">${escapeHtml(cmd)}</span>'. Type '<span class="text-cyan-300 underline cursor-pointer" onclick="window.executeTerminalCommand('help')">help</span>' for list of commands.`, 'error');
        break;
    }
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value;
        input.value = '';
        processCommand(val);
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          input.value = commandHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          input.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = commandHistory.length;
          input.value = '';
        }
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const val = input.value;
      input.value = '';
      processCommand(val);
      input.focus();
    });
  }
}
