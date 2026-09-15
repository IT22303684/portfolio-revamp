'use client';

import { useEffect, useState } from 'react';

const BOOT_LINES = [
  '$ boot portfolio --user dasun',
  '→ loading modules… ok',
  '→ mounting sections… ok',
  '✓ ready',
] as const;

const LINE_INTERVAL = 260; // ms between boot lines
const EXIT_DELAY = 350; // pause on "ready" before sliding away

/**
 * First-visit terminal boot screen. Types a short boot log, fills the amber
 * bar, then slides up and unmounts. Skipped for repeat visits in the same
 * session and for prefers-reduced-motion.
 */
export default function Preloader() {
  const [lines, setLines] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (
      sessionStorage.getItem('booted') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setGone(true);
      sessionStorage.setItem('booted', '1');
      return;
    }
    sessionStorage.setItem('booted', '1');

    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLines(i + 1), (i + 1) * LINE_INTERVAL));
    });
    timers.push(
      setTimeout(() => setLeaving(true), BOOT_LINES.length * LINE_INTERVAL + EXIT_DELAY)
    );
    timers.push(
      setTimeout(
        () => setGone(true),
        BOOT_LINES.length * LINE_INTERVAL + EXIT_DELAY + 650
      )
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink transition-[transform,opacity] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        transform: leaving ? 'translateY(-100%)' : 'translateY(0)',
        opacity: leaving ? 0.9 : 1,
      }}
    >
      <div className="w-72 px-5 font-mono text-sm sm:w-80">
        {BOOT_LINES.map((line, i) => {
          const visible = i < lines;
          const isCmd = line.startsWith('$');
          const isOk = line.startsWith('✓');
          return (
            <p
              key={line}
              className={`transition-opacity duration-200 ${
                visible ? 'opacity-100' : 'opacity-0'
              } ${isCmd ? 'text-snow' : isOk ? 'text-amber' : 'text-fog'}`}
            >
              {isCmd ? (
                <>
                  <span className="text-amber">$</span>
                  {line.slice(1)}
                </>
              ) : (
                line
              )}
            </p>
          );
        })}

        {/* Progress bar */}
        <div className="mt-5 h-px w-full overflow-hidden bg-hairline">
          <div
            className="h-full bg-amber transition-[width] duration-300 ease-out"
            style={{ width: `${(lines / BOOT_LINES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
