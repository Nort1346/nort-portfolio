"use client";
import React from "react";
import Container from "./Container";
import { lexendDeca } from "@/lib/fonts";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
    <section className="relative overflow-hidden shadow-top" id="about">
      <Container>
        <div className="flex flex-col gap-y-6 justify-center items-center my-7">
          <h2 className="text-4xl text-center font-extrabold glow-text">
            {t("title")}
          </h2>
          <div className={`text-center text-xl z-10 ${lexendDeca.className}`}>
            {t("content")}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
