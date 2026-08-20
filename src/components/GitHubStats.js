import { profileData } from '../data/profileData.js';

export function renderGitHubStats() {
  return `
    <section id="stats" class="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-14">
        <div class="cyber-badge mb-3">
          <span class="text-cyan-400 font-bold">04 // TELEMETRY</span> Activity & Metrics
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Live GitHub <span class="text-gradient">Contributions & Telemetry</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Real-time activity tracking, contribution streaks, and developer telemetry synced with GitHub API.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        <!-- Main Streak Card (Span 7) -->
        <div class="lg:col-span-7 glass-card p-6 sm:p-8 flex flex-col justify-between border-cyan-500/30">
          <div>
            <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div class="flex items-center gap-2">
                <span class="status-dot"></span>
                <span class="font-mono text-xs text-cyan-400 font-bold">GITHUB STREAK TELEMETRY</span>
              </div>
              <span class="font-mono text-[11px] text-slate-400">@${profileData.username}</span>
            </div>

            <div class="flex justify-center items-center py-2 overflow-hidden">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=${profileData.username}&theme=tokyonight&hide_border=true&background=0b1329&ring=00f2fe&fire=a855f7&currStreakLabel=00f2fe&sideLabels=00f2fe" 
                alt="GitHub Streak Stats" 
                class="w-full max-w-lg rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-3">
            <span class="flex items-center gap-1.5 text-cyan-300">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Continuous Daily Coding
            </span>
            <a href="${profileData.socials.github}" target="_blank" class="text-cyan-400 hover:underline flex items-center gap-1">
              Verify on GitHub &rarr;
            </a>
          </div>
        </div>

        <!-- Secondary Stats & Badges (Span 5) -->
        <div class="lg:col-span-5 flex flex-col gap-6">
          
          <!-- Top Languages / Focus Card -->
          <div class="glass-card p-6 border-purple-500/30 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span class="font-mono text-xs text-purple-400 font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-purple-400"></span> TOP REPO LANGUAGES
                </span>
                <span class="font-mono text-[10px] text-slate-500">REALTIME</span>
              </div>
              
              <div class="space-y-3 font-mono text-xs">
                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>JavaScript / TypeScript</span>
                    <span class="text-cyan-400 font-bold">35%</span>
                  </div>
                  <div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style="width: 35%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>PHP (Laravel Framework)</span>
                    <span class="text-purple-400 font-bold">28%</span>
                  </div>
                  <div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style="width: 28%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>Python & C++ (IoT / Hardware)</span>
                    <span class="text-emerald-400 font-bold">22%</span>
                  </div>
                  <div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full" style="width: 22%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>Java & Data Structures</span>
                    <span class="text-amber-400 font-bold">15%</span>
                  </div>
                  <div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div class="bg-gradient-to-r from-amber-500 to-orange-400 h-2 rounded-full" style="width: 15%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Profile View Counter Badge -->
            <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span class="text-[11px] font-mono text-slate-400">Profile Views:</span>
              <img src="https://komarev.com/ghpvc/?username=${profileData.username}&label=VIEWS&color=00f2fe&style=for-the-badge" alt="Views Counter" class="h-6 rounded" />
            </div>
          </div>

          <!-- Quick GitHub Badges -->
          <div class="glass-card p-5 border-slate-800 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-mono text-xs font-bold text-slate-200">GitHub Community</h4>
                <p class="font-mono text-[11px] text-slate-400">Open source collaboration & issues</p>
              </div>
            </div>
            <a href="https://github.com/${profileData.username}?tab=followers" target="_blank" class="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-cyan-400 font-semibold transition-all">
              Follow +
            </a>
          </div>

        </div>

      </div>

    </section>
  `;
}
