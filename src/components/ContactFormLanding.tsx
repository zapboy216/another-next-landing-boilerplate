// src/components/ContactFormLanding.tsx

import Image from 'next/image';
import React from 'react';

import ContactForm from './ContactForm';

interface Paragraph {
  id: string;
  text: string;
}

interface ContactFormLandingProps {
  backgroundImageUrl: string;
  splashHeading: string;
  splashHeading1: string;
  paragraphs: Paragraph[];
  ctaText: string;
  imageUrl: string;
}

const ContactFormLanding: React.FC<ContactFormLandingProps> = ({
  backgroundImageUrl,
  splashHeading,
  splashHeading1,
  paragraphs,
  ctaText,
  imageUrl,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-auto">
      {/* Background Image */}
      <Image
        src={backgroundImageUrl}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0 size-full"
      />

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            {splashHeading}
          </h1>
          <h2 className="mb-8 text-2xl md:text-4xl">{splashHeading1}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.id} className="mb-4 text-lg md:text-xl">
              {paragraph.text}
            </p>
          ))}
          <a
            href="#"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            {ctaText}
          </a>
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Image
            src={imageUrl}
            alt="Dummy Attorney"
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
      <div className="relative z-20 mt-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormLanding;
