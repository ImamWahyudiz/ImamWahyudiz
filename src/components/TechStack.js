import { profileData } from '../data/profileData.js';
import { playSound } from '../utils/audio.js';
import { getTechVectorIcon } from '../utils/techIcons.js';

let currentCategory = 'all';
let isExpanded = false;
const INITIAL_LIMIT = 8; // 2 baris (4 kolom x 2 baris = 8 item)

export function renderTechStack() {
  return `
    <section id="tech" class="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-12">
        <div class="cyber-badge mb-3">
          <span class="text-cyan-400 font-bold">02 // ARSENAL</span> Tech Matrix
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Technologies & <span class="text-gradient">Core Capabilities</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Daftar bahasa pemrograman, framework web, modul IoT, dan toolchain yang digunakan pada repositori GitHub.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        <button class="tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-cyan-500 text-slate-950 border border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all cursor-pointer" data-category="all">
          ALL_STACK (${profileData.techStack.length})
        </button>
        <button class="tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer" data-category="languages">
          LANGUAGES
        </button>
        <button class="tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer" data-category="web">
          WEB & FRAMEWORKS
        </button>
        <button class="tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer" data-category="hardware">
          IOT & HARDWARE
        </button>
        <button class="tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer" data-category="tools">
          TOOLS & APIS
        </button>
      </div>

      <!-- Tech Grid (Default 2 baris / 8 item) -->
      <div id="tech-grid-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        ${renderTechCards('all', false)}
      </div>

      <!-- View All / Toggle Button -->
      <div class="mt-10 flex justify-center">
        <button id="toggle-tech-btn" class="btn-cyber flex items-center gap-2 px-6 py-3 cursor-pointer">
          <span id="toggle-tech-text">VIEW ALL TECHNOLOGIES (${profileData.techStack.length})</span>
          <svg id="toggle-tech-icon" class="w-4 h-4 text-cyan-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

    </section>
  `;
}

function renderTechCards(category, expanded = false) {
  const filtered = category === 'all' 
    ? profileData.techStack 
    : profileData.techStack.filter(item => item.category === category);

  // Jika tidak expanded dan filtered lebih dari 8, potong jadi 8 (2 baris)
  const displayItems = (!expanded && filtered.length > INITIAL_LIMIT)
    ? filtered.slice(0, INITIAL_LIMIT)
    : filtered;

  return displayItems.map(item => `
    <div class="glass-card p-5 flex flex-col justify-between group hover:border-cyan-400/80 transition-all duration-300" onmouseenter="window.handleTechHover()">
      <div>
        <div class="flex items-center justify-between mb-3.5">
          <div class="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-800 shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform">
            ${getTechVectorIcon(item.name, 'w-6 h-6')}
          </div>
          <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40">
            ${item.category.toUpperCase()}
          </span>
        </div>

        <h3 class="text-base font-bold text-slate-100 font-mono group-hover:text-cyan-300 transition-colors mb-1.5">
          ${item.name}
        </h3>

        <p class="text-slate-400 text-xs leading-relaxed font-light">
          ${item.level}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>STATUS</span>
        <span class="text-emerald-400 font-semibold group-hover:text-cyan-300">ACTIVE // VERIFIED</span>
      </div>
    </div>
  `).join('');
}

export function setupTechStackEvents() {
  const buttons = document.querySelectorAll('.tech-filter-btn');
  const container = document.getElementById('tech-grid-container');
  const toggleBtn = document.getElementById('toggle-tech-btn');
  const toggleText = document.getElementById('toggle-tech-text');
  const toggleIcon = document.getElementById('toggle-tech-icon');

  window.handleTechHover = () => {
    playSound('hover');
  };

  function updateGrid() {
    if (!container) return;
    container.innerHTML = renderTechCards(currentCategory, isExpanded);

    const filteredCount = currentCategory === 'all' 
      ? profileData.techStack.length 
      : profileData.techStack.filter(item => item.category === currentCategory).length;

    if (toggleBtn && toggleText && toggleIcon) {
      if (filteredCount <= INITIAL_LIMIT) {
        toggleBtn.classList.add('hidden');
      } else {
        toggleBtn.classList.remove('hidden');
        if (isExpanded) {
          toggleText.textContent = "SHOW LESS (COLLAPSE TO 2 ROWS)";
          toggleIcon.style.transform = "rotate(180deg)";
        } else {
          toggleText.textContent = `VIEW ALL TECHNOLOGIES (${filteredCount})`;
          toggleIcon.style.transform = "rotate(0deg)";
        }
      }
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      currentCategory = btn.getAttribute('data-category');

      // Update active styling
      buttons.forEach(b => {
        b.className = "tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer";
      });
      btn.className = "tech-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-cyan-500 text-slate-950 border border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all cursor-pointer";

      updateGrid();
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      playSound('action');
      isExpanded = !isExpanded;
      updateGrid();
    });
  }
}
