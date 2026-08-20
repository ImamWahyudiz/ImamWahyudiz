import { profileData } from '../data/profileData.js';

export function renderTimeline() {
  return `
    <section id="timeline" class="py-20 px-4 sm:px-8 max-w-5xl mx-auto z-10 relative">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-16">
        <div class="cyber-badge mb-3">
          <span class="text-cyan-400 font-bold">05 // TIMELINE</span> Career & Milestones
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Development <span class="text-gradient">Journey & Experience</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Key milestones across software development, parallel computing research, and IoT microcontroller engineering.
        </p>
      </div>

      <!-- Timeline Items -->
      <div class="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 space-y-12">
        ${profileData.timeline.map((item, idx) => `
          <div class="relative pl-6 sm:pl-8 group">
            
            <!-- Glowing Node -->
            <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.9)] transition-all duration-300"></div>

            <!-- Date tag on left for desktop -->
            <div class="sm:absolute sm:-left-36 top-0 font-mono text-xs font-bold text-cyan-400 mb-2 sm:mb-0 sm:text-right sm:w-28">
              ${item.year}
            </div>

            <!-- Card Content -->
            <div class="glass-card p-6 border-slate-800/90 group-hover:border-cyan-500/50 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 class="text-lg sm:text-xl font-bold text-slate-100 font-mono group-hover:text-cyan-300 transition-colors">
                  ${item.title}
                </h3>
                <span class="font-mono text-xs text-purple-400 bg-purple-950/50 px-2.5 py-0.5 rounded border border-purple-500/30">
                  ${item.subtitle || 'MILESTONE // COMPLETED'}
                </span>
              </div>
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                ${item.description}
              </p>
              ${item.tags ? `
                <div class="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-slate-800/80">
                  ${item.tags.map(tag => `
                    <span class="px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/70 text-cyan-300/90 font-mono text-[11px]">
                      #${tag}
                    </span>
                  `).join('')}
                </div>
              ` : ''}
            </div>

          </div>
        `).join('')}
      </div>

    </section>
  `;
}
