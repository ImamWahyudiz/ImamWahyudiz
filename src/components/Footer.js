import { profileData } from '../data/profileData.js';

export function renderFooter() {
  return `
    <footer class="border-t border-slate-900 bg-slate-950/80 backdrop-blur-md py-8 px-4 sm:px-8 text-center text-xs font-mono text-slate-500 z-10 relative">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-slate-400">
          <span class="text-cyan-400 font-bold">IW</span>
          <span>© ${new Date().getFullYear()} ${profileData.name}. All rights reserved.</span>
        </div>
        <div class="flex items-center gap-4 text-slate-400">
          <span class="text-cyan-400">BUILT WITH VITE // CSS3 GLASS // CYBER CLI</span>
        </div>
      </div>
    </footer>
  `;
}
