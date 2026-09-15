import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SpotlightCard from '@/components/SpotlightCard';
import TerminalPreview from '@/components/TerminalPreview';
import { projects } from '@/lib/data';

// Slug for the fake terminal path on image-less cards
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Projects() {
  return (
    <section id="projects" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            <span className="text-fog">03 / </span>Projects
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
            $ ls ~/projects/
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-fog">
            Personal and university builds — web platforms, Android apps, and
            two blockchain systems written in Go.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08} className="h-full">
              <SpotlightCard className="flex h-full flex-col">
                {/* Preview: screenshot, or typed terminal when no image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-hairline">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <TerminalPreview
                      lines={project.terminal ?? [`$ open ${slug(project.title)}`]}
                      path={`~/projects/${slug(project.title)}`}
                    />
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-snow">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-fog">{project.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-snow/75">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] text-fog"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
