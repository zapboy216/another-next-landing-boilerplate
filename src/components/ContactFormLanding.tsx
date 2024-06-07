// src/components/ContactFormLanding.tsx

'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

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
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

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
      <div className="absolute left-0 top-0 size-full bg-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold md:text-2xl">
            {splashHeading}
          </h1>
          <div className="relative z-20 mt-8">
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 w-full max-w-lg"
            >
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="message"
                >
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                >
                  {t('submit')}
                </button>
              </div>
            </form>
          </div>
          <h2 className="mb-8 text-2xl md:text-2xl">{splashHeading1}</h2>
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
    </div>
  );
};

export default ContactFormLanding;
