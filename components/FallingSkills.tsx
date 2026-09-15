'use client';

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiSpringboot,
  SiFastapi,
  SiRabbitmq,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiSelenium,
  SiCypress,
  SiJunit5,
  SiTestinglibrary,
  SiEthereum,
  SiWeb3Dotjs,
  SiEthers,
  SiPython,
  SiGit,
  SiGithub,
  SiJira,
  SiFigma,
  SiClaude,
  SiPostman,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';
import { VscAzure } from 'react-icons/vsc';
import { TbApi, TbSql } from 'react-icons/tb';

type Skill = { name: string; Icon: IconType; color: string };
type Group = { dir: string; skills: Skill[] };

// Four columns, mirroring the CV's skill areas. Chips fall into their column.
export const skillGroups: Group[] = [
  {
    dir: 'frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#8B7FF5' },
    ],
  },
  {
    dir: 'backend',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'Go', Icon: SiGo, color: '#00ADD8' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
      { name: 'REST & gRPC', Icon: TbApi, color: '#F6A83C' },
      { name: 'RabbitMQ', Icon: SiRabbitmq, color: '#FF6600' },
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'Java', Icon: FaJava, color: '#ED8B00' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'SQL', Icon: TbSql, color: '#F6A83C' },
    ],
  },
  {
    dir: 'cloud-databases',
    skills: [
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'Azure', Icon: VscAzure, color: '#0078D4' },
      { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'Prometheus', Icon: SiPrometheus, color: '#E6522C' },
      { name: 'Grafana', Icon: SiGrafana, color: '#F46800' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4FA9E8' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    dir: 'blockchain-tools',
    skills: [
      { name: 'Ethereum', Icon: SiEthereum, color: '#B4C1FF' },
      { name: 'Web3.js', Icon: SiWeb3Dotjs, color: '#F16822' },
      { name: 'Ethers.js', Icon: SiEthers, color: '#6C7BF7' },
      { name: 'Selenium', Icon: SiSelenium, color: '#43B02A' },
      { name: 'Cypress', Icon: SiCypress, color: '#69D3A7' },
      { name: 'JUnit 5', Icon: SiJunit5, color: '#25A162' },
      { name: 'Testing Library', Icon: SiTestinglibrary, color: '#E33332' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
      { name: 'Jira', Icon: SiJira, color: '#2684FF' },
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'Claude Code', Icon: SiClaude, color: '#D97757' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

const flat = skillGroups.flatMap((g, gi) => g.skills.map((s) => ({ ...s, group: gi })));

/**
 * Skill chips drop with gravity into per-category piles (Matter.js) and can be
 * dragged/tossed with the pointer. Columns collapse into one shared pile below
 * lg. Falls back to a static wrapped grid for prefers-reduced-motion.
 */
export default function FallingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reduced, setReduced] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || reduced) return;
    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;
    let engine: Matter.Engine | null = null;
    let mouseConstraint: Matter.MouseConstraint | null = null;
    let destroyed = false;

    const build = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      const columns = W >= 1024 ? 4 : 1;
      const colW = W / columns;

      engine = Matter.Engine.create({ enableSleeping: true });
      engine.gravity.y = 1;

      const wallOpts = { isStatic: true, friction: 0.9 } as const;
      const bodies: Matter.Body[] = [
        // floor + outer walls (thick, positioned just outside the box)
        Matter.Bodies.rectangle(W / 2, H + 30, W + 200, 60, wallOpts),
        Matter.Bodies.rectangle(-30, H / 2, 60, H * 4, wallOpts),
        Matter.Bodies.rectangle(W + 30, H / 2, 60, H * 4, wallOpts),
      ];
      // column dividers on desktop keep each category in its own pile
      for (let c = 1; c < columns; c++) {
        bodies.push(Matter.Bodies.rectangle(c * colW, H / 2 - H, 2, H * 4, wallOpts));
      }

      const chipBodies = flat.map((skill, i) => {
        const el = chipRefs.current[i]!;
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        const col = columns === 1 ? 0 : skill.group;
        const pad = 8 + w / 2;
        const x0 = col * colW + pad + Math.random() * Math.max(1, colW - pad * 2);
        const y0 = -40 - Math.random() * 420 - (i % 8) * 34;
        return Matter.Bodies.rectangle(x0, y0, w, h, {
          chamfer: { radius: Math.min(10, h / 2) },
          restitution: 0.35,
          friction: 0.6,
          frictionAir: 0.015,
          angle: (Math.random() - 0.5) * 0.5,
        });
      });

      Matter.Composite.add(engine.world, [...bodies, ...chipBodies]);

      // pointer drag / toss
      const mouse = Matter.Mouse.create(container);
      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      Matter.Composite.add(engine.world, mouseConstraint);
      // Give scrolling back to the page: physics only owns plain mouse drags.
      const m = mouse as unknown as {
        mousewheel: EventListener;
        mousemove: EventListener;
        mousedown: EventListener;
        mouseup: EventListener;
      };
      container.removeEventListener('wheel', m.mousewheel);
      container.removeEventListener('touchmove', m.mousemove);
      container.removeEventListener('touchstart', m.mousedown);
      container.removeEventListener('touchend', m.mouseup);

      const tick = () => {
        if (destroyed || !engine) return;
        Matter.Engine.update(engine, 1000 / 60);
        for (let i = 0; i < chipBodies.length; i++) {
          const el = chipRefs.current[i];
          const b = chipBodies[i];
          if (!el) continue;
          el.style.opacity = '1';
          el.style.transform = `translate(${b.position.x - el.offsetWidth / 2}px, ${
            b.position.y - el.offsetHeight / 2
          }px) rotate(${b.angle}rad)`;
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const teardown = () => {
      cancelAnimationFrame(rafId);
      if (engine) {
        Matter.Composite.clear(engine.world, false);
        Matter.Engine.clear(engine);
        engine = null;
      }
    };

    build();

    // Rebuild piles when the container width changes (breakpoint/orientation)
    let lastW = container.clientWidth;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      if (container.clientWidth === lastW) return;
      lastW = container.clientWidth;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        teardown();
        if (!destroyed) build();
      }, 250);
    });
    ro.observe(container);

    return () => {
      destroyed = true;
      clearTimeout(resizeTimer);
      ro.disconnect();
      teardown();
    };
  }, [started, reduced]);

  // Reduced motion: a plain wrapped grid, grouped by category.
  if (reduced) {
    return (
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.dir}>
            <p className="font-mono text-xs text-fog">
              <span className="text-amber">~/skills/</span>
              {group.dir}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg border border-hairline bg-ink px-3 py-2"
                >
                  <Icon aria-hidden size={16} style={{ color }} />
                  <span className="font-mono text-xs text-snow/85">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Column headers (desktop) */}
      <div className="hidden grid-cols-4 lg:grid">
        {skillGroups.map((group) => (
          <p key={group.dir} className="px-2 font-mono text-xs text-fog">
            <span className="text-amber">~/skills/</span>
            {group.dir}
          </p>
        ))}
      </div>
      <p className="font-mono text-xs text-fog lg:hidden">
        <span className="text-amber">~/skills/</span>all
      </p>

      {/* Physics arena */}
      <div
        ref={containerRef}
        className="relative mt-4 h-[560px] touch-pan-y overflow-hidden rounded-2xl border border-hairline bg-ink-raised sm:h-[480px] lg:h-105"
        aria-label="Interactive skill chips — drag to toss them around"
      >
        {/* faint column divider lines (desktop) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 left-1/4 w-px bg-hairline" />
          <div className="absolute inset-y-0 left-2/4 w-px bg-hairline" />
          <div className="absolute inset-y-0 left-3/4 w-px bg-hairline" />
        </div>

        {flat.map(({ name, Icon, color }, i) => (
          <div
            key={name}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 flex cursor-grab select-none items-center gap-2 rounded-lg border border-hairline bg-ink px-3 py-2 opacity-0 will-change-transform active:cursor-grabbing"
          >
            <Icon aria-hidden size={16} className="shrink-0" style={{ color }} />
            <span className="whitespace-nowrap font-mono text-xs text-snow/85">{name}</span>
          </div>
        ))}

        <p className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] text-fog/60">
          ( drag the chips )
        </p>
      </div>
    </div>
  );
}
