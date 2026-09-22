'use client';
import Container from './Container';
import Reveal from './Reveal';
import { lexendDeca } from '@/lib/fonts';
import { useTranslations } from 'next-intl';
import React from 'react';

const About = () => {
  const t = useTranslations('About');
  return (
    <section className="relative overflow-hidden shadow-top scroll-mt-20" id="about">
      <Container>
        <div className="flex flex-col gap-y-6 justify-center items-center my-7">
          <Reveal>
            <h2 className="text-4xl 2xl:text-5xl text-center font-extrabold glow-text">
              {t('title')}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className={`text-center text-xl 2xl:text-2xl z-10 ${lexendDeca.className}`}>
              {t('content')}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default About;
