'use client';
import { lexendDeca } from '@/lib/fonts';
import ProjectTile from './ProjectTile';
import Reveal from './Reveal';
import { useTranslations } from 'next-intl';
import React from 'react';

const LODE_TAGS = ['Nuxt 4', 'TypeScript', 'Drizzle ORM', 'SQLite / PostgreSQL', 'Tailwind CSS v4'];
const NORTBOT_TAGS = ['TypeScript', 'Discord.js'];
const ENGLISHFLOW_TAGS = ['Next.js', 'TypeScript'];
const SPEARS_TAGS = ['Unity', 'C#', 'Android'];
const MYSTIQO_TAGS = ['TypeScript', 'React', 'Socket.IO', 'Express'];
const BADMINTON_MATCH_TAGS = ['JavaScript', 'React', 'Vite'];
const NORTHOOK_TAGS = ['JavaScript', 'Node.js', 'Express'];

const Projects = () => {
  const t = useTranslations('Projects');
  const projects = [
    {
      name: t('projects.lode.title'),
      description: t('projects.lode.content'),
      iconUrl: '/assets/lode.webp',
      projectLink: 'https://github.com/Nort1346/Lode',
      tags: LODE_TAGS,
    },
    {
      name: t('projects.nortbot.title'),
      description: t('projects.nortbot.content'),
      iconUrl: '/assets/nortbot.webp',
      projectLink: 'https://nortbot.info',
      tags: NORTBOT_TAGS,
    },
    {
      name: t('projects.mystiqo.title'),
      description: t('projects.mystiqo.content'),
      iconUrl: '/assets/mystiqo.webp',
      projectLink: 'https://mystiqo.nort.space',
      tags: MYSTIQO_TAGS,
    },
    {
      name: t('projects.spears.title'),
      description: t('projects.spears.content'),
      iconUrl: '/assets/spears.webp',
      projectLink: 'https://play.google.com/store/apps/details?id=com.NortStudios.Spears',
      tags: SPEARS_TAGS,
    },
    {
      name: t('projects.englishflow.title'),
      description: t('projects.englishflow.content'),
      iconUrl: '/assets/englishflow.webp',
      projectLink: 'https://www.englishflow.com.pl',
      tags: ENGLISHFLOW_TAGS,
    },
    {
      name: t('projects.badmintonMatch.title'),
      description: t('projects.badmintonMatch.content'),
      iconUrl: '/assets/badmintonMatch.webp',
      projectLink: 'https://badminton.nort.space',
      tags: BADMINTON_MATCH_TAGS,
    },
    {
      name: t('projects.northook.title'),
      description: t('projects.northook.content'),
      iconUrl: '/assets/northook.webp',
      projectLink: 'https://hook.nort.space',
      tags: NORTHOOK_TAGS,
    },
  ];

  return (
    <section className="relative overflow-hidden my-7 scroll-mt-20" id="projects">
      <div className="flex flex-col gap-y-6 justify-center items-center my-5">
        <Reveal>
          <h2 className="text-4xl 2xl:text-5xl text-center font-extrabold glow-text">
            {t('title')}
          </h2>
        </Reveal>
        <div
          className={`text-center flex flex-col mx-0 md:mx-2 lg:mx-7 z-10 ${lexendDeca.className}`}
        >
          {projects.map((project, i) => (
            <Reveal key={project.iconUrl} delay={i * 75}>
              <ProjectTile {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
