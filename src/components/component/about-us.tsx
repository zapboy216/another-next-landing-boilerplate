import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function AboutUs() {
  const t = useTranslations('About');

  return (
    <>
      <section className="bg-gray-100 py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <RocketIcon className="mb-4 size-12 text-[#6366F1]" />
              <h3 className="mb-2 text-2xl font-bold">{t('heading')}</h3>
              <p className="animate-fade-in-up text-gray-500 dark:text-gray-400">
                {t('about_paragraph_two')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PaletteIcon className="mb-4 size-12 text-[#EC4899]" />
              <h3 className="mb-2 text-2xl font-bold">{t('heading_two')}</h3>
              <p className="animate-fade-in-down text-gray-500 dark:text-gray-400">
                {t('about_paragraph_three')}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CodeIcon className="mb-4 size-12 text-[#34D399]" />
              <h3 className="mb-2 text-2xl font-bold">{t('heading_three')}</h3>
              <p className="animate-fade-in-down text-gray-500 dark:text-gray-400">
                {t('about_paragraph_four')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="animate-fade-in-down mb-4 text-4xl font-bold">
                {t('paragraph_heading')}
              </h2>
              <p className="animate-fade-in-down mb-8 text-gray-500 dark:text-gray-400">
                {t('about_paragraph_five')}
              </p>
              <p className="animate-fade-in-down mb-8 text-gray-500 dark:text-gray-400">
                {t('about_paragraph_six')}
              </p>
              <Button
                variant="ghost"
                className="animate-fade-in-down border border-black text-2xl"
              >
                {t('button_text')}
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="About"
                height="600"
                src={t('imageUrl')}
                style={{
                  aspectRatio: '500/400',
                  objectFit: 'cover',
                }}
                width="800"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
