import { jura, lexendDeca } from '@/lib/fonts';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

interface ProjectTileProps {
  name: string;
  description: string;
  iconUrl: string;
  projectLink: string;
  badge?: string;
  tags?: string[];
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  name,
  description,
  iconUrl,
  projectLink,
  badge,
  tags,
}) => {
  const t = useTranslations('Projects');
  return (
    <div className="fancy bg-zinc-100 dark:bg-zinc-900 backdrop-blur-3xl border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-xl shadow-lg overflow-hidden m-4 justify-stretch p-4 2xl:p-6 gap-y-3 transition transform hover:scale-105 duration-500 flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="rounded-lg w-full lg:w-1/4 flex justify-center lg:justify-start items-center">
          <Image
            src={iconUrl}
            width={1024}
            height={1024}
            alt={`${name} icon`}
            className="w-48 h-48 2xl:w-56 2xl:h-56 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full lg:w-3/4 gap-y-5 lg:gap-y-3 justify-around items-center mt-5 lg:mt-0">
          <h3 className="text-2xl 2xl:text-3xl flex items-center gap-3 font-semibold">
            {name}
            {badge && (
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-md border border-zinc-300 dark:border-zinc-600 bg-zinc-200/60 dark:bg-zinc-800/60 text-xs tracking-wider text-zinc-700 dark:text-zinc-300 ${jura.className}`}
              >
                {badge}
              </span>
            )}
          </h3>
          <p className={`text-lg 2xl:text-xl flex ${lexendDeca.className}`}>{description}</p>
          {tags && tags.length > 0 && (
            <ul
              aria-label={`${name} tech stack`}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={`rounded-md border border-zinc-300 dark:border-zinc-700 px-2.5 py-1 text-[11px] 2xl:text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 ${jura.className}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <a
            href={projectLink}
            className={`inline-block w-full py-2 2xl:py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg transition-colors hover:bg-gray-900 dark:hover:bg-gray-200 duration-150 font-medium text-sm 2xl:text-base ${jura.className}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('viewProject')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
