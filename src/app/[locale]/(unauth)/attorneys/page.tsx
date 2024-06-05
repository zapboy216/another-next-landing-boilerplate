import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Attorneys',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Attorneys = () => {
  const t = useTranslations('Attorneys');

  return (
    <>
      <p>{t('splash_heading')}</p>

      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array(6).keys()).map((elt) => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/attorneys/${elt}`}
          >
            {t('attorney_name', { name: elt })}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Attorney;
