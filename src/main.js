import './index.css';
import { renderNavbar, setupNavbarEvents } from './components/Navbar.js';
import { renderHero, setupHeroEvents } from './components/Hero.js';
import { renderTerminal, setupTerminalEvents } from './components/Terminal.js';
import { renderTechStack, setupTechStackEvents } from './components/TechStack.js';
import { renderProjects, setupProjectsEvents } from './components/Projects.js';
import { renderGitHubStats } from './components/GitHubStats.js';
import { renderTimeline } from './components/Timeline.js';
import { renderContact, setupContactEvents } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { initParticleCanvas } from './utils/particles.js';

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Background Canvas & Grids -->
    <canvas id="cyber-canvas" class="fixed inset-0 pointer-events-none z-0"></canvas>
    <div class="cyber-grid"></div>
    <div class="ambient-glow-1"></div>
    <div class="ambient-glow-2"></div>

    <!-- Main Content Container -->
    <div class="relative z-10 flex flex-col min-h-screen">
      ${renderNavbar()}
      <main class="flex-1">
        ${renderHero()}
        ${renderTerminal()}
        ${renderTechStack()}
        ${renderProjects()}
        ${renderGitHubStats()}
        ${renderTimeline()}
        ${renderContact()}
      </main>
      ${renderFooter()}
    </div>
  `;

  // Initialize interactive modules & event listeners
  initParticleCanvas('cyber-canvas');
  setupNavbarEvents();
  setupHeroEvents();
  setupTerminalEvents();
  setupTechStackEvents();
  setupProjectsEvents();
  setupContactEvents();
}

document.addEventListener('DOMContentLoaded', initApp);
