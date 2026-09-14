'use client';

import { useEffect, useState } from 'react';

interface TypewriterNameProps {
  text: string;
  className?: string;
  /** ms per character */
  speed?: number;
  /** ms before typing starts */
  startDelay?: number;
}

export default function TypewriterName({
  text,
  className,
  speed = 110,
  startDelay = 700,
}: TypewriterNameProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReduced(true);
      setCount(text.length); // show it all at once, no animation
      return;
    }
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay, text.length]);

  useEffect(() => {
    if (!started || reduced || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, reduced, count, text.length, speed]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {/* Full text for screen readers and SEO */}
      <span className="sr-only">{text}.</span>
      <span aria-hidden>
        {text.slice(0, count)}
        <span className="text-amber">{done ? '.' : ''}</span>
        <span
          className={`ml-1.5 inline-block h-[0.72em] w-[0.06em] translate-y-[0.04em] bg-amber align-baseline ${
            done ? 'anim-blink' : ''
          }`}
        />
      </span>
    </span>
  );
}
