import { useTranslations } from 'next-intl';
import React from 'react';

import Landing from '@/components/Landing';

const Attorneys: React.FC = () => {
  const t = useTranslations('Attorneys');

  const overlayContent = (
    <div>
      <h1 className="text-4xl font-bold">{t('splash_heading')}</h1>
      <p className="mt-4">{t('paragraph')}</p>
      <button className="mt-8 rounded bg-blue-500 px-4 py-2 text-white">
        {t('cta')}
      </button>
    </div>
  );

  return (
    <Landing
      backgroundType="image"
      backgroundUrl={t('backgroundUrl')}
      overlayContent={overlayContent}
      overlayOpacity={0.5}
    />
  );
};

export default Attorneys;
