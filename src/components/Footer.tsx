"use client";
import React from "react";
import Container from "./Container";
import { jura } from "@/lib/fonts";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer
      className={`w-full border-t border-zinc-800 dark:border-zinc-200 py-8 ${jura.className}`}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="text-sm text-zinc-800 dark:text-zinc-400">
            <p>
              &copy; {new Date().getFullYear()} Nort1346.{" "}
              {t("allRightsReserved")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="text-zinc-800 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-100 transition-colors"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
