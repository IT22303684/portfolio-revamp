import Reveal from '@/components/Reveal';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            <span className="text-fog">02 / </span>Experience
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
            $ git log --oneline
          </h2>
        </Reveal>

        <ol className="relative mt-12">
          {experience.map((job, i) => {
            const last = i === experience.length - 1;
            return (
              <li
                key={`${job.role}-${job.period}`}
                className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6"
              >
                {/* Graph column: commit node + connecting line */}
                <div className="flex flex-col items-center">
                  <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-amber bg-ink shadow-[0_0_0_4px_var(--color-amber-soft)]" />
                  {!last && <span className="my-2 w-px flex-1 bg-hairline" />}
                </div>

                {/* Content */}
                <Reveal delay={i * 0.08} className={last ? 'pb-0' : 'pb-12'}>
                  <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-snow">
                      {job.role}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-amber">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-sm text-fog">{job.company}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-snow/80"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
