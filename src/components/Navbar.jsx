import { useState } from 'react';
import { Menu, X, Bot, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#tools', label: 'Tools' },
    { href: '#cases', label: 'Cases' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-[#0B1220]/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6] rounded-lg" aria-label="Department of AI home">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B82F6] text-white shadow-sm"><Bot className="h-5 w-5" aria-hidden /></span>
            <span className="hidden sm:block font-semibold tracking-tight text-gray-900 dark:text-white">Department of AI</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B82F6] rounded-md px-1 py-1">
                {l.label}
              </a>
            ))}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
              <input
                type="search"
                placeholder="Search tools"
                aria-label="Search tools"
                className="pl-9 pr-3 py-2 text-sm rounded-xl bg-gray-100 dark:bg-white/10 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
            </div>
            <a href="#submit" className="inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]">
              Submit Use Case
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6] text-gray-700 dark:text-gray-100"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2" role="menu" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/5" role="menuitem">
                {l.label}
              </a>
            ))}
            <a href="#submit" className="block rounded-lg px-3 py-2 text-sm font-semibold text-white bg-[#3B82F6] text-center">
              Submit Use Case
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
