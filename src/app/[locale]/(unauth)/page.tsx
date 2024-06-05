import { useTranslations } from 'next-intl';
import React from 'react';

import Landing from '@/components/Landing';

const Home: React.FC = () => {
  const t = useTranslations('Index');

  const overlayContent = (
    <div>
      <h1 className="text-4xl font-bold">{t('splash_heading')}</h1>
      <p className="mt-4">{t('splash_heading1')}</p>
      <button className="mt-8 rounded bg-blue-500 px-4 py-2 text-white">
        {t('heading_cta')}
      </button>
    </div>
  );

  return (
    <Landing
      backgroundType="video"
      backgroundUrl={t('backgroundVideoUrl')}
      overlayContent={overlayContent}
      overlayOpacity={0.5}
    />
  );
};

export default Home;
