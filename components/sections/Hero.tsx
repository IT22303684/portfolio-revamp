import Lanyard from '@/components/Lanyard';
import Orb from '@/components/Orb';
import TypewriterName from '@/components/TypewriterName';
import { hero, site } from '@/lib/data';

// Entrance choreography: text rises in sequence while gravity drops the
// badge — the physics sim is the hero's own entrance animation.
const delay = (s: number) => ({ '--anim-delay': `${s}s` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh">
      {/* Visual: Orb glow + draggable lanyard badge.
          Mobile → top block in normal flow (no overlap with text).
          Desktop → absolute right half, full height. */}
      <div className="relative h-[54svh] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[52%]">
        {/* Ambient orb behind the badge */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_45%,#000_55%,transparent_100%)]"
        >
          <Orb hue={35} hoverIntensity={0.35} rotateOnHover backgroundColor="#0a0e16" />
        </div>

        {/* Lanyard canvas (transparent) sits in front of the orb */}
        <div className="absolute inset-0">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>

        <p className="pointer-events-none absolute bottom-4 right-5 hidden font-mono text-xs text-fog lg:block">
          ( drag the badge )
        </p>
      </div>

      {/* Copy — pointer-events-none so the badge stays draggable through the
          transparent right side on desktop; interactive bits opt back in. */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-6xl flex-col px-5 pb-16 sm:px-8 lg:min-h-svh lg:justify-center lg:pb-24 lg:pt-24">
        <div className="max-w-xl pt-8 lg:pt-0">
          <p
            className="anim-rise font-mono text-xs uppercase tracking-[0.22em] text-amber"
            style={delay(0.1)}
          >
            {hero.eyebrow}
          </p>

          <h1
            className="anim-rise mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-snow sm:text-7xl lg:text-8xl"
            style={delay(0.22)}
          >
            <TypewriterName text="Dasun Tharuka" />
          </h1>

          <p
            className="anim-rise mt-6 max-w-lg text-base leading-relaxed text-fog sm:text-lg"
            style={delay(0.36)}
          >
            {hero.thesis}
          </p>

          {/* Proof, styled as one quiet terminal line */}
          <p
            className="anim-rise mt-6 font-mono text-xs text-fog sm:text-sm"
            style={delay(0.48)}
          >
            <span className="text-amber">$</span> {hero.proofLine}
          </p>

          <div
            className="anim-rise pointer-events-auto mt-10 flex flex-wrap items-center gap-4"
            style={delay(0.6)}
          >
            <a
              href="#projects"
              className="rounded-full bg-amber px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href={site.cvPath}
              download
              className="rounded-full border border-hairline px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-snow transition-colors hover:border-amber/50 hover:text-amber"
            >
              Download CV
            </a>
          </div>

          <div
            className="anim-rise pointer-events-auto mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.18em]"
            style={delay(0.72)}
          >
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
            <a
              href={`mailto:${site.email}`}
              className="nav-link text-fog transition-colors hover:text-snow"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
