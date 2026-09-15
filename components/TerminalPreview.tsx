'use client';

import { useEffect, useRef, useState } from 'react';

interface TerminalPreviewProps {
  lines: readonly string[];
  /** shown in the fake title bar, e.g. "~/projects/explorer" */
  path: string;
}

/**
 * Stand-in "screenshot" for projects without images: a mini terminal that
 * types its lines when scrolled into view. Matches the About section's
 * terminal styling. Respects prefers-reduced-motion.
 */
export default function TerminalPreview({ lines, path }: TerminalPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [reduced, setReduced] = useState(false);
  // Total characters revealed across all lines
  const [count, setCount] = useState(0);

  const total = lines.reduce((n, l) => n + l.length, 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      setStarted(true);
      setCount(total);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [total]);

  useEffect(() => {
    if (!started || reduced || count >= total) return;
    const t = setTimeout(() => setCount((c) => c + 1), 26);
    return () => clearTimeout(t);
  }, [started, reduced, count, total]);

  // Slice the flat character budget back into per-line text
  let budget = count;
  const rendered = lines.map((line) => {
    const take = Math.max(0, Math.min(line.length, budget));
    budget -= take;
    return line.slice(0, take);
  });
  const activeIndex = rendered.findIndex((l, i) => l.length < lines[i].length);
  const cursorLine = activeIndex === -1 ? lines.length - 1 : activeIndex;

  return (
    <div ref={ref} className="flex h-full flex-col bg-ink">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 border-b border-hairline bg-white/2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[10px] text-fog">{path}</span>
      </div>

      {/* Typed body */}
      <div className="flex flex-1 flex-col justify-center gap-1.5 p-5 font-mono text-xs leading-relaxed sm:text-sm">
        {rendered.map((text, i) => {
          if (!text && i > cursorLine) return <p key={i} aria-hidden>&nbsp;</p>;
          const isCmd = lines[i].startsWith('$');
          const isOk = lines[i].startsWith('✓');
          return (
            <p
              key={i}
              className={isCmd ? 'text-snow' : isOk ? 'text-amber' : 'text-fog'}
            >
              {isCmd ? (
                <>
                  <span className="text-amber">$</span>
                  <span>{text.slice(1)}</span>
                </>
              ) : (
                text
              )}
              {i === cursorLine && (
                <span className="anim-blink ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-amber" />
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
