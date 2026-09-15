import FallingSkills from '@/components/FallingSkills';
import Reveal from '@/components/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            <span className="text-fog">05 / </span>Skills
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
            $ ls -R ~/skills/
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <FallingSkills />
        </Reveal>
      </div>
    </section>
  );
}
