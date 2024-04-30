'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Index() {
  const t = useTranslations('Index');
  const videoUrl = t('video_url');

  const [playVideo, setPlayVideo] = useState(true);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (matchMedia.matches) {
      setPlayVideo(false);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay={playVideo}
        loop
        muted
        playsInline
        className="absolute z-0 min-h-full w-auto min-w-full max-w-none"
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex size-full items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="animate-pulse text-4xl font-bold">
            Welcome to Our Freelance Software Development Firm
          </h1>
          <p className="mt-4 animate-bounce text-xl">
            Innovative Web Solutions, Exceptional Expertise
          </p>
        </div>
      </div>
    </div>
  );
}
