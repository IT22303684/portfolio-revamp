import { sections } from '@/lib/data';

// Shared placeholder shell — each real section will replace its usage of
// this with a full build, keeping the same id/anchor contract.
export default function SectionShell({ id }: { id: (typeof sections)[number]['id'] }) {
  const section = sections.find((s) => s.id === id)!;

  return (
    <section id={id} className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
          {section.label}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-snow sm:text-4xl">
          {section.label} — coming soon
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-fog">{section.blurb}</p>
      </div>
    </section>
  );
}
