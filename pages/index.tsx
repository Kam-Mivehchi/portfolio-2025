import { Container } from '@/components/Container';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';

import { Repository } from '@/types/repos';

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ repos }: { repos: Repository[] }) {
  const shouldShowMore = () => {
    if (repos && repos.length > 9) {
      return true;
    }
    return false;
  };
  return (
    <Container>
      <Hero />
      <Experience />
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-8  mt-40">
        I've been building a lot of things
      </h1>

      <Projects />
    </Container>
  );
}
