import type { StaticImageData } from 'next/image';

export type ProjectTag = 'Web' | 'Mobile' | 'Platforms';

interface CaseStudyResult {
  label: string;
  value: string;
  /** fill bar width, percent */
  fill: number;
}

interface CaseStudy {
  role: string;
  stack: string;
  year: string;
  intro: string;
  problem: string;
  built: string;
  results: CaseStudyResult[];
}

export interface Project {
  slug: string;
  name: string;
  host: string;
  tag: ProjectTag;
  blurb: string;
  image: StaticImageData;
  color: string;
  tint: string;
  /** live/external URL */
  link: string;
  /** featured-card chips */
  chips?: string[];
  caseStudy?: CaseStudy;
}

export interface Job {
  company: string;
  role: string;
  shortRole: string;
  years: string;
  shortYears: string;
  logo: string;
  bullets: string[];
}

export interface Skill {
  title: string;
  body: string;
  color: string;
}

export interface NavItem {
  name: string;
  href: string;
}
