import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <Container title={`Projects | Devpro`}>
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I've been building a
          <span className="text-cyan-500"> lot of things</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          Discover the results of my work—from small creative experiments to
          fully realized web applications. Each project reflects my passion for
          coding and design.
        </p>
      </div>

      <Projects />
    </Container>
  );
}
