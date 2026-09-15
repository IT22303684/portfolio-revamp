import Reveal from '@/components/Reveal';
import { about } from '@/lib/data';

// One terminal command block: the prompt line + its output.
function Line({ cmd, children }: { cmd: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-fog">
        <span className="text-amber">$</span>{' '}
        <span className="text-snow">{cmd}</span>
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            <span className="text-fog">01 / </span>About
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
            $ whoami
          </h2>
        </Reveal>

        {/* Terminal window */}
        <Reveal delay={0.08} className="mt-10">
          <div className="overflow-hidden rounded-xl border border-hairline bg-ink-raised shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-hairline bg-white/2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate font-mono text-xs text-fog">
                dasun@portfolio: ~/about
              </span>
            </div>

            {/* Body */}
            <div className="space-y-6 overflow-x-auto p-5 font-mono text-sm leading-relaxed sm:p-7">
              <Line cmd="whoami">
                <p className="text-snow">{about.whoami}</p>
              </Line>

              <Line cmd="cat about.txt">
                <p className="max-w-3xl text-snow/85">{about.bio}</p>
              </Line>

              <Line cmd="cat education.txt">
                <div className="text-snow/85">
                  <p className="text-snow">{about.education.degree}</p>
                  <p className="text-fog">
                    {about.education.school} · {about.education.period}
                  </p>
                  <p className="text-amber">
                    GPA {about.education.gpa} · {about.education.honors}
                  </p>
                </div>
              </Line>

              <Line cmd="ls ~/now/">
                <ul className="space-y-1 text-snow/85">
                  {about.now.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-amber">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Line>

              <Line cmd="uname -a">
                <dl className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {about.meta.map(({ k, v }) => (
                    <div key={k} className="flex gap-2">
                      <dt className="text-fog">{k}:</dt>
                      <dd className="text-snow/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Line>

              {/* Live prompt */}
              <p className="text-fog">
                <span className="text-amber">$</span>{' '}
                <span className="anim-blink inline-block h-4 w-2.25 translate-y-0.75 bg-amber align-baseline" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
