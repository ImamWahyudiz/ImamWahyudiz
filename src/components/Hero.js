import { profileData } from '../data/profileData.js';
import { playSound } from '../utils/audio.js';

export function renderHero() {
  return `
    <section id="about" class="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 scroll-mt-20">
      
      <!-- Full-Width Unified About Container -->
      <div class="glass-card p-6 sm:p-10 border-slate-800/80 shadow-2xl relative">
        
        <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 w-full">
          
          <!-- Left: Profile Photo Column + Action Buttons Directly Below Photo -->
          <div class="flex flex-col items-center shrink-0 w-60 sm:w-64 space-y-4">
            
            <!-- Photo Frame -->
            <div class="relative group cursor-pointer w-full" onclick="window.handleAvatarClick()">
              <div class="relative w-full h-[290px] sm:h-[310px] rounded-2xl bg-slate-950 border border-slate-700/80 hover:border-cyan-400/80 shadow-xl overflow-hidden flex flex-col justify-end transition-colors duration-300">
                
                <!-- Full Cover Semi-Formal Photo -->
                <img 
                  src="${profileData.avatar}" 
                  alt="${profileData.name}" 
                  class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                <!-- Bottom Overlay: Informatics Student Badge -->
                <div class="relative z-10 w-full px-3 py-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent backdrop-blur-[2px] border-t border-cyan-500/20 text-center">
                  <div class="flex items-center justify-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span class="font-mono text-xs text-cyan-300 font-bold tracking-wider uppercase">Informatics Student</span>
                  </div>
                </div>

                <!-- Top Right Live Status Dot -->
                <div class="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded bg-slate-900/90 border border-emerald-500/50 text-emerald-400 font-mono text-[10px] font-bold backdrop-blur-md">
                  ONLINE
                </div>
              </div>
            </div>

            <!-- Action Buttons Directly Under Photo -->
            <div class="flex items-center gap-2.5 w-full">
              <a href="#projects" class="btn-cyber flex-1 py-2.5 px-3 text-xs flex items-center justify-center gap-1.5 text-center" onclick="window.handleNavClick(event, 'projects')">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>BUILDS</span>
              </a>

              <a href="#contact" class="btn-cyber btn-cyber-outline flex-1 py-2.5 px-3 text-xs flex items-center justify-center gap-1.5 text-center" onclick="window.handleNavClick(event, 'contact')">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>CONTACT</span>
              </a>

              <a href="${profileData.socials.github}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md shrink-0" title="GitHub Profile">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>

          </div>

          <!-- Right: Clear, Balanced Developer Identity & Bio taking full width -->
          <div class="flex flex-col justify-between flex-1 text-left space-y-4 py-1">
            
            <div>
              <!-- Status Pill Above Name -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 w-fit">
                <span class="status-dot"></span>
                <span class="font-semibold tracking-wider">SYSTEM ACTIVE // v2.4.0</span>
                <span class="text-slate-600">|</span>
                <span class="text-slate-400 font-sans text-[11px]">${profileData.availability}</span>
              </div>

              <!-- Campus Sub-tag -->
              <div class="font-mono text-xs text-purple-400 font-bold tracking-widest uppercase mb-1">
                // UIN SUNAN KALIJAGA
              </div>

              <!-- Primary Visual Focus: Full Name -->
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight font-mono leading-none my-1.5">
                <span class="text-gradient">${profileData.name}</span>
              </h1>

              <!-- Handle & Origin -->
              <div class="font-mono text-xs text-slate-400 font-medium">
                ${profileData.handle} <span class="text-slate-600">•</span> ${profileData.location}
              </div>

              <!-- Supporting Bio Text (Calm & Clean) -->
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-light mt-3 max-w-2xl">
                ${profileData.bio}
              </p>

              <!-- Dynamic Typing Line -->
              <div class="h-6 flex items-center font-mono text-xs sm:text-sm text-cyan-400 font-medium mt-2">
                <span class="text-slate-600 mr-2">&gt;</span>
                <span id="hero-typing-text" class="border-r-2 border-cyan-400 pr-1 animate-pulse">
                  Informatics Student
                </span>
              </div>
            </div>

            <!-- Snake Radar Activity Strip -->
            <div class="pt-2 border-t border-slate-800/80">
              <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 px-1">
                <span class="text-cyan-400/90 font-medium flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  GITHUB CONTRIBUTION RADAR
                </span>
                <span class="text-slate-400 text-[10px]">snake.yml</span>
              </div>
              <div class="w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70 p-2 hover:border-cyan-500/40 transition-colors">
                <img 
                  src="./github-snake-dark.svg" 
                  alt="GitHub Snake Animation" 
                  class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function setupHeroEvents() {
  const typingElement = document.getElementById('hero-typing-text');
  if (!typingElement) return;

  const lines = profileData.typingLines;
  let lineIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentLine = lines[lineIdx];

    if (isDeleting) {
      typingElement.textContent = currentLine.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentLine.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIdx === currentLine.length) {
      isDeleting = true;
      typingSpeed = 1500;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      lineIdx = (lineIdx + 1) % lines.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  window.handleAvatarClick = () => {
    playSound('action');
  };
}
