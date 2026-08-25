import React from 'react';

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/estele.co?igsi=azNyY2NjcGR6NzRm',
    icon: 'M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-3.25a1 1 0 110 2 1 1 0 010-2z',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/estelejewelery',
    icon: 'M13.5 22v-8.5H16l.4-3.5h-2.9V7.9c0-.9.25-1.4 1.5-1.4H16.5V3.4C16.2 3.35 15.2 3.25 14 3.25c-2.5 0-4.2 1.5-4.2 4.3v2.45H7v3.5h2.8V22h3.7z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/esteleaccessories/',
    icon: 'M6.94 6.5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.75H3.5V21H7V8.75zm6.06 0H9.72V21h3.24v-6.1c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.83 1.98 3.25V21H21v-6.65c0-3.35-.72-5.93-4.64-5.93-1.88 0-3.14 1.03-3.66 2.01h-.05V8.75z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-md mx-auto text-center py-14 px-6">
        <h3 className="font-serif-display text-xl sm:text-2xl text-white mb-2">
          Estele
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Clean beauty, crafted with care.
        </p>
        <p className="text-white text-lg sm:text-xl font-serif mb-4">
          Follow Us
        </p>

        <div className="flex justify-center gap-4">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t border-gray-800">
        © 2026 Estele. Demo storefront.
      </div>
    </footer>
  );
}