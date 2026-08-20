import { profileData } from '../data/profileData.js';
import { playSound } from '../utils/audio.js';

export function renderContact() {
  return `
    <section id="contact" class="py-20 px-4 sm:px-8 max-w-5xl mx-auto z-10 relative">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-14">
        <div class="cyber-badge mb-3">
          <span class="text-cyan-400 font-bold">06 // FREQUENCY</span> Communication Hub
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Let's Build Something <span class="text-gradient">Extraordinary</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
          Have an exciting project, open source collaboration, or IoT inquiry? Feel free to connect across any channel below.
        </p>
      </div>

      <!-- Main Contact Card -->
      <div class="glass-card p-8 sm:p-10 border-cyan-500/30 text-center relative overflow-hidden">
        
        <!-- Ambient Decorative Ring -->
        <div class="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-2xl mx-auto space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs">
            <span class="status-dot"></span> OPEN FOR COLLABORATIONS
          </div>

          <h3 class="text-2xl sm:text-3xl font-bold font-mono text-slate-100">
            ${profileData.socials.email}
          </h3>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button id="copy-email-btn" class="btn-cyber">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              <span id="copy-email-text">COPY EMAIL</span>
            </button>

            <a href="mailto:${profileData.socials.email}" class="btn-cyber btn-cyber-outline" onclick="playSound('click')">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>SEND EMAIL</span>
            </a>
          </div>

          <!-- Social Links Matrix -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800">
            
            <a href="${profileData.socials.github}" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400 hover:bg-slate-900/90 transition-all flex items-center justify-center gap-3 group" onclick="playSound('click')">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <div class="text-left font-mono">
                <div class="text-xs font-bold text-slate-200 group-hover:text-cyan-300">GitHub</div>
                <div class="text-[11px] text-slate-400">@${profileData.username}</div>
              </div>
            </a>

            <a href="${profileData.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400 hover:bg-slate-900/90 transition-all flex items-center justify-center gap-3 group" onclick="playSound('click')">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <div class="text-left font-mono">
                <div class="text-xs font-bold text-slate-200 group-hover:text-cyan-300">LinkedIn</div>
                <div class="text-[11px] text-slate-400">Imam Wahyudi</div>
              </div>
            </a>

            <a href="${profileData.socials.instagram}" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-pink-400 hover:bg-slate-900/90 transition-all flex items-center justify-center gap-3 group" onclick="playSound('click')">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div class="text-left font-mono">
                <div class="text-xs font-bold text-slate-200 group-hover:text-pink-300">Instagram</div>
                <div class="text-[11px] text-slate-400">@apachersa</div>
              </div>
            </a>

          </div>

        </div>

      </div>

    </section>
  `;
}

export function setupContactEvents() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');

  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', () => {
      playSound('success');
      navigator.clipboard.writeText(profileData.socials.email).then(() => {
        copyText.textContent = 'COPIED TO CLIPBOARD! ✨';
        setTimeout(() => {
          copyText.textContent = 'COPY EMAIL';
        }, 2500);
      });
    });
  }
}
