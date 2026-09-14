import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Research from '@/components/sections/Research';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { site } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-8 font-mono text-xs text-fog sm:flex-row sm:items-center sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <p>{site.location}</p>
        </div>
      </footer>
    </>
  );
}
