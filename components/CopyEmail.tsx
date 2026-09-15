'use client';

import { useEffect, useRef, useState } from 'react';
import Magnet from '@/components/Magnet';

interface CopyEmailProps {
  email: string;
}

/**
 * Contact CTA: a magnetic mailto pill plus a copy-to-clipboard button with
 * "copied ✓" feedback.
 */
export default function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions/http) — the mailto pill still works.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Magnet padding={60} magnetStrength={8}>
        <a
          href={`mailto:${email}`}
          className="inline-block rounded-full bg-amber px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink shadow-[0_0_32px_var(--color-amber-soft)] transition-shadow hover:shadow-[0_0_48px_var(--color-amber-soft)]"
        >
          Say hello
        </a>
      </Magnet>

      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="rounded-full border border-hairline px-5 py-3 font-mono text-xs text-fog transition-colors hover:border-amber/50 hover:text-snow"
      >
        {copied ? (
          <span className="text-amber">copied ✓</span>
        ) : (
          <span>
            <span className="text-amber">$</span> cp email
          </span>
        )}
      </button>
    </div>
  );
}
