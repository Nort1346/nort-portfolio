'use client';
import { jura, lexendDeca } from '@/lib/fonts';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const TYPING_INTERVAL_MS = 60;
const START_DELAY_MS = 650;

const Header = () => {
  const t = useTranslations('Header');
  const FULL_NAME = t('greeting');
  const [name, setName] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setName('');
    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setName(FULL_NAME.slice(0, index));
        if (index >= FULL_NAME.length && interval !== undefined) {
          clearInterval(interval);
        }
      }, TYPING_INTERVAL_MS);
    }, START_DELAY_MS);
    return () => {
      clearTimeout(start);
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [FULL_NAME]);

  const subtitleDelay = Math.min(
    START_DELAY_MS + FULL_NAME.length * TYPING_INTERVAL_MS + 250,
    2400,
  );

  return (
    <header className="relative flex min-h-[calc(100dvh-6rem)] w-full flex-col items-center overflow-hidden px-8 sm:px-12 pt-12 shadow-bottom">
      <div className="z-10 flex w-full flex-1 flex-col justify-center text-center">
        <Image
          src="/assets/nort.webp"
          alt="Avatar"
          width={2048}
          height={2048}
          priority
          className="rise w-48 h-48 2xl:w-64 2xl:h-64 rounded-full shadow-lg mx-auto mb-5 transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.03] hover:shadow-xl"
        />
        <div className="rise flex flex-col items-center" style={{ animationDelay: '150ms' }}>
          <h1
            aria-label={FULL_NAME}
            className={`text-center text-5xl 2xl:text-7xl font-extrabold py-0.5 mb-2 min-h-[3.5rem] ${lexendDeca.className}`}
          >
            <span aria-hidden="true" className="glow">
              {name}
            </span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </h1>
          <p
            className={`rise text-2xl 2xl:text-3xl font-extrabold ${jura.className}`}
            style={{ animationDelay: `${subtitleDelay}ms` }}
          >
            {t('developer')}
          </p>
          <div className="rise mt-5" style={{ animationDelay: `${subtitleDelay + 250}ms` }}>
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 px-3.5 py-1.5 text-xs 2xl:text-sm tracking-wider text-zinc-700 dark:text-zinc-300 ${jura.className}`}
            >
              <span
                aria-hidden="true"
                className="pulse-dot inline-block h-2 w-2 rounded-full bg-zinc-500 dark:bg-zinc-400"
              />
              {t('availability')}
            </span>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label={t('scrollCue')}
        className="rise z-10 mb-8 text-zinc-400 transition-colors duration-200 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-200"
        style={{ animationDelay: `${subtitleDelay + 550}ms` }}
      >
        <FaChevronDown className="scroll-cue" size={28} />
      </a>
    </header>
  );
};

export default Header;
