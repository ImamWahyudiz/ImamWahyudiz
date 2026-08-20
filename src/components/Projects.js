import { profileData } from '../data/profileData.js';
import { playSound } from '../utils/audio.js';

let currentProjectCategory = 'all';
let isProjectsExpanded = false;
const PROJECTS_INITIAL_LIMIT = 3; // 2 baris (3 kolom x 2 baris = 6 proyek)

export function renderProjects() {
  return `
    <section id="projects" class="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-10">
        <div class="cyber-badge cyber-badge-purple mb-3">
          <span class="text-purple-400 font-bold">03 // BUILDS</span> Engineering Projects
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Featured <span class="text-gradient-purple">Open Source & Systems</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Repositori sistem perangkat lunak, client-side tools, dan arsitektur hardware mikrokontroler di GitHub.
        </p>
      </div>

      <!-- Project Category Filter Buttons (All, Web, Network/Cyber, IoT) -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        <button class="project-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-purple-500 text-slate-950 border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer" data-category="all">
          ALL_BUILDS (${profileData.projects.length})
        </button>
        <button class="project-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-pointer" data-category="web">
          WEB APPS
        </button>
        <button class="project-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-pointer" data-category="network-cyber">
          NETWORK & CYBER
        </button>
        <button class="project-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-pointer" data-category="iot">
          IOT & HARDWARE
        </button>
      </div>

      <!-- Projects Grid Container (Default 2 baris / 6 item) -->
      <div id="projects-grid-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${renderProjectCards('all', false)}
      </div>

      <!-- View All / Toggle Button -->
      <div class="mt-10 flex justify-center">
        <button id="toggle-projects-btn" class="btn-cyber btn-cyber-outline flex items-center gap-2 px-6 py-3 cursor-pointer">
          <span id="toggle-projects-text">VIEW ALL PROJECTS (${profileData.projects.length})</span>
          <svg id="toggle-projects-icon" class="w-4 h-4 text-purple-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

    </section>
  `;
}

function renderProjectCards(category, expanded = false) {
  const filtered = category === 'all'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === category);

  const displayItems = (!expanded && filtered.length > PROJECTS_INITIAL_LIMIT)
    ? filtered.slice(0, PROJECTS_INITIAL_LIMIT)
    : filtered;

  return displayItems.map((project, idx) => `
    <div class="glass-card p-6 flex flex-col justify-between group border-purple-500/20 hover:border-cyan-400/80 transition-all duration-300">
      <div>
        <!-- Card Top Row -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg bg-slate-900 border border-purple-500/30 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold shadow-inner">
              0${idx + 1}
            </span>
            <span class="font-mono text-[11px] text-purple-400 font-semibold tracking-wider uppercase">
              ${project.categoryLabel || 'ENGINEERING'}
            </span>
          </div>
          <div class="flex items-center gap-1.5 font-mono text-xs text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
            <!-- Star Vector Icon -->
            <svg class="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>${project.stars}</span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-mono mb-2.5">
          ${project.title}
        </h3>

        <!-- Description -->
        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-light">
          ${project.description}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${project.tags.map(tag => `
            <span class="px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/70 text-cyan-300/90 font-mono text-[11px]">
              #${tag}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Card Bottom Actions with Real Vector Icons -->
      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <a href="${project.link || project.demo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 hover:text-cyan-400 transition-colors" onclick="window.handleProjectClick()">
          <!-- GitHub Vector -->
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span>SOURCE REPO</span>
        </a>

        <a href="${project.demo || project.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold" onclick="window.handleProjectClick()">
          <span>LIVE RUN</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  `).join('');
}

export function setupProjectsEvents() {
  const buttons = document.querySelectorAll('.project-filter-btn');
  const container = document.getElementById('projects-grid-container');
  const toggleBtn = document.getElementById('toggle-projects-btn');
  const toggleText = document.getElementById('toggle-projects-text');
  const toggleIcon = document.getElementById('toggle-projects-icon');

  window.handleProjectClick = () => {
    playSound('action');
  };

  function updateProjectsGrid() {
    if (!container) return;
    container.innerHTML = renderProjectCards(currentProjectCategory, isProjectsExpanded);

    const filteredCount = currentProjectCategory === 'all'
      ? profileData.projects.length
      : profileData.projects.filter(p => p.category === currentProjectCategory).length;

    if (toggleBtn && toggleText && toggleIcon) {
      if (filteredCount <= PROJECTS_INITIAL_LIMIT) {
        toggleBtn.classList.add('hidden');
      } else {
        toggleBtn.classList.remove('hidden');
        if (isProjectsExpanded) {
          toggleText.textContent = "SHOW LESS (COLLAPSE TO 2 ROWS)";
          toggleIcon.style.transform = "rotate(180deg)";
        } else {
          toggleText.textContent = `VIEW ALL PROJECTS (${filteredCount})`;
          toggleIcon.style.transform = "rotate(0deg)";
        }
      }
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      currentProjectCategory = btn.getAttribute('data-category');

      // Update styling
      buttons.forEach(b => {
        b.className = "project-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-pointer";
      });
      btn.className = "project-filter-btn px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-purple-500 text-slate-950 border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer";

      updateProjectsGrid();
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      playSound('action');
      isProjectsExpanded = !isProjectsExpanded;
      updateProjectsGrid();
    });
  }
}
