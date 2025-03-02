import { jura, lexendDeca } from "@/lib/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface ProjectTileProps {
  name: string;
  description: string;
  iconUrl: string;
  projectLink: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  name,
  description,
  iconUrl,
  projectLink,
}) => {
  const t = useTranslations("Projects");
  return (
    <div className="fancy bg-zinc-100 dark:bg-zinc-900 backdrop-blur-3xl border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-xl shadow-lg overflow-hidden m-4 justify-stretch p-4 gap-y-3 transition transform hover:scale-105 duration-500 flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="rounded-lg w-full lg:w-1/4 flex justify-center lg:justify-start items-center">
          <Image
            src={iconUrl}
            width={1024}
            height={1024}
            alt={`${name} icon`}
            className="w-48 h-48 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full lg:w-3/4 gap-y-5 lg:gap-y-3 justify-around items-center mt-5 lg:mt-0">
          <h3 className="text-2xl flex justify-end font-semibold">{name}</h3>
          <p className={`text-lg flex ${lexendDeca.className}`}>
            {description}
          </p>
          <a
            href={projectLink}
            className={`inline-block w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg transition-colors hover:bg-gray-900 dark:hover:bg-gray-200 duration-150 font-medium ${jura.className}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("viewProject")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
