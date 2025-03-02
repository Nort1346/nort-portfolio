"use client";
import React from "react";
import { lexendDeca } from "@/lib/fonts";
import ProjectTile from "./ProjectTile";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <section className="relative overflow-hidden my-7" id="projects">
      <div className="flex flex-col gap-y-6 justify-center items-center my-5">
        <h2 className="text-4xl text-center font-extrabold glow-text">
          {t("title")}
        </h2>
        <div
          className={`text-center flex flex-col mx-0 md:mx-2 lg:mx-7 z-10 ${lexendDeca.className}`}
        >
          <ProjectTile
            name={t("projects.nortbot.title")}
            description={t("projects.nortbot.content")}
            iconUrl={"/assets/nortbot.jpg"}
            projectLink={"https://nortbot.info"}
          />
          <ProjectTile
            name={t("projects.spears.title")}
            description={t("projects.spears.content")}
            iconUrl={"/assets/spears.png"}
            projectLink={
              "https://play.google.com/store/apps/details?id=com.NortStudios.Spears"
            }
          />
          <ProjectTile
            name={t("projects.mystiqo.title")}
            description={t("projects.mystiqo.content")}
            iconUrl={"/assets/mystiqo.png"}
            projectLink={"http://mystiqo.atwebpages.com/"}
          />
          <ProjectTile
            name={t("projects.badmintonMatch.title")}
            description={t("projects.badmintonMatch.content")}
            iconUrl={"/assets/badmintonMatch.png"}
            projectLink={"https://www.badmintonmatch.site/"}
          />
          <ProjectTile
            name={t("projects.northook.title")}
            description={t("projects.northook.content")}
            iconUrl={"/assets/northook.png"}
            projectLink={"https://northook.vercel.app"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
