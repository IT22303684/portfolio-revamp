import CopyEmail from '@/components/CopyEmail';
import Reveal from '@/components/Reveal';
import TerminalPreview from '@/components/TerminalPreview';
import { site } from '@/lib/data';

const connectLines = [
  '$ ./connect --with dasun',
  '→ opening channels…',
  `✓ email     ${site.email}`,
  '✓ github    github.com/IT22303684',
  '✓ linkedin  /in/dasun-tharuka',
  '→ response_time: < 24h',
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline">
      {/* Ambient amber glow behind the CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, var(--color-amber-soft), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            <span className="text-fog">06 / </span>Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
            $ ./connect
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: big pitch + CTA */}
          <div>
            <Reveal delay={0.08}>
              <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-snow sm:text-5xl">
                Have a project
                <br />
                in mind<span className="text-amber">?</span>
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fog sm:text-lg">
                I&apos;m open to interesting problems, collaborations, and good
                conversations about web, Go, and AI-assisted engineering. The
                fastest route is email — I usually reply within a day.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-9">
              <CopyEmail email={site.email} />
            </Reveal>

            <Reveal delay={0.28} className="mt-10">
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.18em]">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-fog transition-colors hover:text-snow"
                >
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-fog transition-colors hover:text-snow"
                >
                  LinkedIn
                </a>
                <span className="text-fog/60">{site.location}</span>
              </div>
            </Reveal>
          </div>

          {/* Right: typed connect session */}
          <Reveal delay={0.16}>
            <div className="h-64 overflow-hidden rounded-2xl border border-hairline bg-ink-raised shadow-2xl shadow-black/40 sm:h-72">
              <TerminalPreview lines={connectLines} path="~/contact — ssh" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
