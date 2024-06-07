import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

interface Paragraph {
  id: string;
  text: string;
}

interface LandingProps {
  backgroundVideoUrl: string;
  splashHeading: string;
  splashHeading1: string;
  paragraphs: Paragraph[];
  ctaText: string;
  imageUrl: string;
}

const Landing: React.FC<LandingProps> = ({
  backgroundVideoUrl,
  splashHeading,
  splashHeading1,
  paragraphs,
  ctaText,
  imageUrl,
}) => {
  const t = useTranslations('Contact');

  return (
    <div className="font-montserrat relative min-h-screen w-full overflow-auto">
      {/* Background Video */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        src={backgroundVideoUrl}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          <h1 className="animate-fade-in-bottom mb-4 text-4xl font-bold md:text-4xl">
            {t('splash_heading')}
          </h1>
          <h2 className="animate-fade-in-bottom mb-8 text-2xl md:text-4xl">
            {t('splash_heading1')}
          </h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.id}
              className="animate-fade-in-bottom mb-4 text-lg md:text-xl"
            >
              {paragraph.text}
            </p>
          ))}
          <a
            href="./contact"
            className="animate-fade-in-bottom rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            {t('heading_cta')}
          </a>
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Image
            src={imageUrl}
            alt="Dummy Attorney"
            width={400}
            height={400}
            className="animate-fade-in mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
