'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks, site } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled || open
          ? 'border-hairline bg-ink/90 shadow-lg shadow-black/30'
          : 'border-hairline/50 bg-ink/60'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* Wordmark: terminal prompt with a blinking amber cursor */}
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="anim-nav flex items-center gap-0.5 font-mono text-sm text-snow"
          style={{ '--anim-delay': '0.05s' } as React.CSSProperties}
        >
          <span className="text-fog">~/</span>
          <span>dasun</span>
          <span aria-hidden className="anim-blink ml-1 inline-block h-4 w-2 bg-amber" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="anim-nav"
              style={{ '--anim-delay': `${0.12 + i * 0.06}s` } as React.CSSProperties}
            >
              <Link
                href={link.href}
                className="nav-link font-mono text-xs uppercase tracking-[0.18em] text-fog transition-colors hover:text-snow focus-visible:text-snow"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className="anim-nav"
            style={{ '--anim-delay': `${0.12 + navLinks.length * 0.06}s` } as React.CSSProperties}
          >
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-amber/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-amber transition-colors hover:bg-amber hover:text-ink focus-visible:bg-amber focus-visible:text-ink"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        {/* Mobile hamburger → X */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="anim-nav relative flex h-10 w-10 items-center justify-center md:hidden"
          style={{ '--anim-delay': '0.12s' } as React.CSSProperties}
        >
          <span
            className={`absolute h-px w-5 bg-snow transition-transform duration-300 ${
              open ? 'rotate-45' : '-translate-y-[3.5px]'
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-snow transition-transform duration-300 ${
              open ? '-rotate-45' : 'translate-y-[3.5px]'
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-ink/95 px-6 pb-10 pt-8 backdrop-blur-lg transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="overflow-hidden border-b border-hairline"
              style={{
                transition: `transform 0.45s cubic-bezier(0.22,1,0.36,1) ${0.06 + i * 0.05}s, opacity 0.45s ease ${0.06 + i * 0.05}s`,
                transform: open ? 'translateY(0)' : 'translateY(24px)',
                opacity: open ? 1 : 0,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4"
              >
                <span className="font-display text-3xl font-semibold text-snow">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-fog">{link.href}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center justify-between"
          style={{
            transition: `opacity 0.5s ease ${0.06 + navLinks.length * 0.05}s`,
            opacity: open ? 1 : 0,
          }}
        >
          <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.18em]">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-fog transition-colors hover:text-snow">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-fog transition-colors hover:text-snow">
              LinkedIn
            </a>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-amber/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-amber"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
