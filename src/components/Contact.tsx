"use client";
import React from "react";
import { jura, lexendDeca } from "@/lib/fonts";
import { useTranslations } from "next-intl";
import { PiNumberCircleOneBold, PiNumberCircleTwoBold } from "react-icons/pi";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <section className="relative overflow-hidden mb-10" id="contact">
      <h2 className="text-4xl text-center mb-10 font-extrabold glow-text">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-y-7 justify-center items-center my-7">
        <div
          className={`flex flex-col justify-center items-center self-center text-2xl ${lexendDeca.className}`}
        >
          <PiNumberCircleOneBold size={35} />
          <p className="font-bold">{t("writeMeAnEmail")}</p>
          <a
            className={`mt-3 font-bold ${jura.className} glow hover:scale-105 transition-all duration-700`}
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>
        </div>
        <div
          className={`flex flex-col justify-center items-center self-center text-2xl ${lexendDeca.className}`}
        >
          <PiNumberCircleTwoBold size={35} />
          <p className="font-bold">{t("letsBeSocial")}</p>
          <div className={`flex flex-row space-x-3 mt-3`}>
            <a
              href="https://discord.com/users/794288711164493864"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <FaDiscord
                className="transition-all duration-700 group-hover:rotate-y-[360deg] hover:text-zinc-800  dark:hover:text-zinc-300"
                size={40}
              />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <FaLinkedin
                className="transition-all duration-700 group-hover:rotate-y-[360deg] hover:text-zinc-800  dark:hover:text-zinc-300"
                size={40}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
