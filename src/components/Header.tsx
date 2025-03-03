"use client";
import { jura, lexendDeca } from "@/lib/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const t = useTranslations("Header");
  const FULL_NAME = t("greeting");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setName(FULL_NAME.slice(0, index + 1));
      index++;

      if (index === FULL_NAME.length) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [FULL_NAME]);

  return (
    <header className="relative pb-14 h-100 flex w-full justify-center items-center overflow-hidden shadow-bottom">
      <div className="flex flex-col w-full justify-center text-center z-10">
        <Image
          src="/assets/nort.jpg"
          alt="Avatar"
          width={2048}
          height={2048}
          className="w-48 h-48 rounded-full shadow-lg mx-auto mb-5"
        />
        <h1
          className={`text-5xl font-extrabold py-0.5 mb-2 glow min-h-[3.5rem] ${lexendDeca.className}`}
        >
          {name}
          <span className="cursor">|</span>
        </h1>
        <p className={`text-2xl font-extrabold ${jura.className}`}>
          {t("developer")}
        </p>
      </div>
    </header>
  );
};

export default Header;
