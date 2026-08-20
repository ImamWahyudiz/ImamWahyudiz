export function getTechVectorIcon(name, size = "w-6 h-6") {
  const key = name.toLowerCase();

  if (key.includes('python')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C6.5 2 6.8 4.3 6.8 4.3l.01 2.4h5.2V7.5H5.1S2 7.1 2 12.4c0 5.4 2.7 5.2 2.7 5.2h1.6V15.3s-.1-2.7 2.7-2.7h5.1s2.6.1 2.6-2.5V4.6S17.3 2 11.9 2zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#38bdf8" />
        <path d="M12.1 22c5.4 0 5.1-2.3 5.1-2.3l-.01-2.4H12v-.8h6.9s3.1.4 3.1-4.9c0-5.4-2.7-5.2-2.7-5.2h-1.6v2.3s.1 2.7-2.7 2.7H9.9s-2.6-.1-2.6 2.5v4.8s-.6 2.6 4.8 2.6zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#fde047" />
      </svg>
    `;
  }

  if (key.includes('typescript') || key === 'ts') {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178c6" />
        <text x="12" y="17" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">TS</text>
      </svg>
    `;
  }

  if (key.includes('javascript') || key === 'js') {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#f7df1e" />
        <text x="12" y="17" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="900" fill="#000000" text-anchor="middle">JS</text>
      </svg>
    `;
  }

  if (key.includes('php')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777bb4" />
        <text x="12" y="16" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">PHP</text>
      </svg>
    `;
  }

  if (key.includes('react')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#61dafb" stroke-width="1.8">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61dafb" stroke="none" />
      </svg>
    `;
  }

  if (key.includes('laravel')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#f43f5e">
        <path d="M3 15L12 6l9 9-4.5 4.5L12 15l-4.5 4.5L3 15z" />
      </svg>
    `;
  }

  if (key.includes('vue')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h4l6 10.5L18 3h4L12 21 2 3z" fill="#42b883" />
        <path d="M6.5 3h3.5L12 7l2-4h3.5L12 13 6.5 3z" fill="#35495e" />
      </svg>
    `;
  }

  if (key.includes('node')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#22c55e">
        <path d="M12 2l10 5.8v11.6L12 22 2 19.4V7.8L12 2z" />
      </svg>
    `;
  }

  if (key.includes('tailwind')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#38bdf8">
        <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.6 2.5-2.2 4.1-1.7 1 0.3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.9 6 2.9 3.3 0 5.5-1.7 6.6-5-1.1 1.6-2.5 2.2-4.1 1.7-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.9-6-2.9zm-6 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.6 2.5-2.2 4.1-1.7 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.9 6 2.9 3.3 0 5.5-1.7 6.6-5-1.1 1.6-2.5 2.2-4.1 1.7-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.9-6-2.9z" />
      </svg>
    `;
  }

  if (key.includes('c++') || key.includes('cpp') || key === 'c / c++') {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599c" />
        <text x="12" y="16" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">C++</text>
      </svg>
    `;
  }

  if (key.includes('java')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#ea580c" />
        <text x="12" y="16" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">JAVA</text>
      </svg>
    `;
  }

  if (key.includes('esp32') || key.includes('hardware') || key.includes('chip')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="#064e3b" />
        <line x1="2" y1="9" x2="5" y2="9" />
        <line x1="2" y1="15" x2="5" y2="15" />
        <line x1="19" y1="9" x2="22" y2="9" />
        <line x1="19" y1="15" x2="22" y2="15" />
        <line x1="9" y1="2" x2="9" y2="5" />
        <line x1="15" y1="2" x2="15" y2="5" />
        <line x1="9" y1="19" x2="9" y2="22" />
        <line x1="15" y1="19" x2="15" y2="22" />
        <circle cx="12" cy="12" r="2" fill="#10b981" />
      </svg>
    `;
  }

  if (key.includes('sensor') || key.includes('ky-003') || key.includes('hall')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
        <circle cx="12" cy="12" r="3" fill="#2dd4bf" />
      </svg>
    `;
  }

  if (key.includes('light') || key.includes('ky-027')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5v1.5h7V14.5c2-1 3.5-3 3.5-5.5a7 7 0 00-7-7z" fill="#78350f" />
      </svg>
    `;
  }

  if (key.includes('circuit') || key.includes('actuator')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2">
        <path d="M4 4h6v6H4zM14 14h6v6h-6zM10 7h4v10h-4" />
        <circle cx="7" cy="7" r="1.5" fill="#a855f7" />
        <circle cx="17" cy="17" r="1.5" fill="#a855f7" />
      </svg>
    `;
  }

  if (key.includes('git') || key.includes('github')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#f8fafc">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    `;
  }

  if (key.includes('vscode')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#007acc">
        <path d="M17.5 2.5L7.5 10.5 3 7 1 8.5l4 3.5-4 3.5 2 1.5 4.5-3.5 10 8 4.5-2V4.5l-4.5-2z" />
      </svg>
    `;
  }

  if (key.includes('postman')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#ff6c37">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l8-5-3 5 3 5-8-5z" fill="#ffffff" />
      </svg>
    `;
  }

  if (key.includes('linux') || key.includes('cli')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#fde047" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#0f172a" stroke="#334155" />
        <path d="M6 9l4 3-4 3M12 15h6" />
      </svg>
    `;
  }

  if (key.includes('vite')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l10 5-10 15L2 7l10-5z" fill="#bd34fe" />
        <path d="M12 4l7 3.5L12 18 5 7.5 12 4z" fill="#ffea79" />
      </svg>
    `;
  }

  if (key.includes('html') || key.includes('css')) {
    return `
      <svg class="${size}" viewBox="0 0 24 24" fill="#e34f26">
        <path d="M4 2h16l-1.5 16.5L12 22l-6.5-3.5L4 2z" />
        <path d="M12 4v16l5-2.5 1-11.5H12z" fill="#ef652a" />
      </svg>
    `;
  }

  // Default Vector Terminal Code
  return `
    <svg class="${size}" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  `;
}
