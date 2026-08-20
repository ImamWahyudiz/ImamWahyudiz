import { profileData } from '../data/profileData.js';
import { playSound, toggleSound, isSoundEnabled } from '../utils/audio.js';

export function renderNavbar() {
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 backdrop-blur-xl bg-slate-950/70 border-b border-cyan-500/20 transition-all duration-300">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex flex-col">
            <span class="font-bold text-slate-100 tracking-wide font-mono text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              ${profileData.username}
            </span>
            <span class="text-[10px] text-cyan-400/80 font-mono flex items-center gap-1.5">
              <span class="status-dot"></span> DEV // ONLINE
            </span>
          </div>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-5 lg:gap-6 font-mono text-xs text-slate-300">
          <a href="#about" class="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1" onclick="window.handleNavClick(event, 'about')">
            <span class="text-cyan-500">01.</span>// ABOUT
          </a>
          <a href="#tech" class="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1" onclick="window.handleNavClick(event, 'tech')">
            <span class="text-cyan-500">02.</span>// STACK
          </a>
          <a href="#projects" class="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1" onclick="window.handleNavClick(event, 'projects')">
            <span class="text-cyan-500">03.</span>// PROJECTS
          </a>
          <a href="#stats" class="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1" onclick="window.handleNavClick(event, 'stats')">
            <span class="text-cyan-500">04.</span>// STATS
          </a>
          <a href="#timeline" class="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1" onclick="window.handleNavClick(event, 'timeline')">
            <span class="text-cyan-500">05.</span>// JOURNEY
          </a>
          <a href="#contact" class="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1" onclick="window.handleNavClick(event, 'contact')">
            <span class="text-cyan-500">06.</span>// CONNECT
          </a>
        </div>

        <!-- Action Tools -->
        <div class="flex items-center gap-2.5">
          <!-- Terminal Quick Open Button -->
          <button id="toggle-terminal-btn" class="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-all font-mono text-xs flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,242,254,0.15)]" title="Open Interactive CLI Terminal">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="hidden sm:inline">CLI_MODE</span>
          </button>

          <!-- Audio FX Toggle -->
          <button id="toggle-audio-btn" class="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all" title="Toggle Cyber Audio FX">
            <svg id="audio-icon-svg" class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `;
}

export function setupNavbarEvents() {
  const audioBtn = document.getElementById('toggle-audio-btn');
  const termBtn = document.getElementById('toggle-terminal-btn');

  window.handleNavClick = (e, targetId) => {
    e.preventDefault();
    playSound('click');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const enabled = toggleSound();
      const iconSvg = document.getElementById('audio-icon-svg');
      if (iconSvg) {
        if (enabled) {
          iconSvg.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
          `;
          iconSvg.classList.add('text-cyan-400');
          iconSvg.classList.remove('text-slate-500');
          playSound('power');
        } else {
          iconSvg.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
          `;
          iconSvg.classList.remove('text-cyan-400');
          iconSvg.classList.add('text-slate-500');
        }
      }
    });
  }

  if (termBtn) {
    termBtn.addEventListener('click', () => {
      playSound('action');
      if (window.restoreTerminal) {
        window.restoreTerminal();
      }
      const term = document.getElementById('terminal');
      if (term) {
        term.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          const input = document.getElementById('terminal-input');
          if (input) input.focus();
        }, 300);
      }
    });
  }
}
