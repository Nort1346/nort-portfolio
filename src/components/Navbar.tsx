"use client";
import { jura } from "@/lib/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCircleInfo, FaDiagramProject, FaEnvelope } from "react-icons/fa6";

const Navbar: React.FC<{ sticky?: boolean }> = ({ sticky = false }) => {
  const t = useTranslations("NavBar");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const OFFSET: number = 40;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > OFFSET) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      if (Math.abs(window.scrollY - lastScrollY) >= OFFSET)
        setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {sticky && <div className="h-24" />}
      <nav
        className={`fixed top-0 left-1/2 transform ${
          jura.className
        } -translate-x-1/2 px-10 font-light bg-white/50 dark:bg-black/50 backdrop-blur-md p-4 shadow-lg rounded-b-xl z-20 border-x border-b border-black/20 dark:border-white/20 transition-all duration-500 ease-in-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container text-2xl mx-auto flex justify-center items-center">
          <div className="space-x-4 flex items-center">
            <Link
              href="#about"
              className="flex items-center hover:text-gray-500 dark:hover:text-gray-400 transition duration-150 space-x-2 whitespace-nowrap"
            >
              <FaCircleInfo className="inline sm:hidden" size={30} />
              <span className="font-mono hidden sm:inline">{t("about")}</span>
            </Link>
            <Link
              href="#projects"
              className="flex items-center hover:text-gray-500 dark:hover:text-gray-400 transition duration-150 space-x-2 whitespace-nowrap"
            >
              <FaDiagramProject className="inline sm:hidden" size={30} />
              <span className="font-mono hidden sm:inline">
                {t("projects")}
              </span>
            </Link>
            <Link
              href="#contact"
              className="flex items-center hover:text-gray-500 dark:hover:text-gray-400 transition duration-150 space-x-2 whitespace-nowrap"
            >
              <FaEnvelope className="inline sm:hidden m-0" size={30} />
              <span className="font-mono hidden sm:inline">{t("contact")}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
