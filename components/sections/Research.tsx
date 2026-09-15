import Reveal from '@/components/Reveal';
import { research } from '@/lib/data';

export default function Research() {
  return (
    <section id="research" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            <span className="text-fog">04 / </span>Research
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
            $ cat nextgen-qa.md
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-hairline bg-ink-raised">
            {/* Header row */}
            <div className="flex flex-col gap-3 border-b border-hairline p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <h3 className="font-display text-2xl font-semibold text-snow">
                  {research.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-fog">{research.tagline}</p>
              </div>
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-amber">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                </span>
                {research.status}
              </p>
            </div>

            <div className="grid gap-10 p-6 sm:p-7 lg:grid-cols-[1.2fr_1fr]">
              {/* Left: what + why it's novel + highlights */}
              <div>
                <p className="leading-relaxed text-snow/80">{research.overview}</p>
                <p className="mt-4 leading-relaxed text-snow/80">{research.novelty}</p>

                <ul className="mt-6 space-y-2.5">
                  {research.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-snow/80">
                      <span className="text-amber">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: pipeline flow + agent loop, terminal-styled */}
              <div className="rounded-xl border border-hairline bg-ink p-5 font-mono text-sm">
                <p className="text-fog">
                  <span className="text-amber">$</span> nextgen run --pipeline
                </p>
                <ol className="mt-4 space-y-1.5">
                  {research.pipeline.map((step, i) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="text-[11px] text-fog">[{i + 1}/6]</span>
                      <span className="text-snow/85">{step}</span>
                      {i < research.pipeline.length - 1 && (
                        <span aria-hidden className="text-amber">
                          ↓
                        </span>
                      )}
                      {i === research.pipeline.length - 1 && (
                        <span className="text-amber">✓</span>
                      )}
                    </li>
                  ))}
                </ol>

                <p className="mt-6 text-fog">
                  <span className="text-amber">$</span> agent --loop
                </p>
                <p className="mt-2 leading-relaxed text-snow/85">
                  {research.agents.join(' → ')}{' '}
                  <span className="text-amber">↺</span>
                  <span className="text-fog"> (Reflexion memory)</span>
                </p>
              </div>
            </div>

            {/* Tech chips */}
            <div className="border-t border-hairline p-6 sm:p-7">
              <ul className="flex flex-wrap gap-1.5">
                {research.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] text-fog"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
