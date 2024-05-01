import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export function AboutUs() {
  const t = useTranslations('About');
  return (
    <>
      <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#6366F1] to-[#EC4899]">
        <div className="container flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
            About Us
          </h1>
          <p className="mb-8 max-w-3xl text-xl md:text-2xl">
            {t(about_paragraph)}
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="solid">
              Learn More
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            alt="Background"
            className="size-full object-cover"
            height="800"
            src="#"
            style={{
              aspectRatio: '1600/800',
              objectFit: 'cover',
            }}
            width="1600"
          />
        </div>
      </section>
      <section className="bg-gray-100 py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <RocketIcon className="mb-4 size-12 text-[#6366F1]" />
              <h3 className="mb-2 text-2xl font-bold">Innovation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are constantly pushing the boundaries of what's possible,
                always seeking new and innovative solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PaletteIcon className="mb-4 size-12 text-[#EC4899]" />
              <h3 className="mb-2 text-2xl font-bold">Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of talented designers create visually stunning and
                user-friendly interfaces.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CodeIcon className="mb-4 size-12 text-[#34D399]" />
              <h3 className="mb-2 text-2xl font-bold">Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We build robust and scalable applications using the latest
                technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Our Story</h2>
              <p className="mb-8 text-gray-500 dark:text-gray-400">
                Founded in 2015, our company has grown to become a leading
                provider of innovative digital solutions. Our mission is to
                empower businesses and individuals to achieve their goals
                through cutting-edge technology and design.
              </p>
              <p className="mb-8 text-gray-500 dark:text-gray-400">
                Over the years, we've worked with a diverse range of clients,
                from startups to Fortune 500 companies, helping them to
                transform their digital presence and drive growth. Our team of
                passionate experts is dedicated to delivering exceptional
                results, and we take pride in our ability to consistently exceed
                our clients' expectations.
              </p>
              <Button variant="solid">Meet the Team</Button>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="About"
                className="rounded-lg shadow-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: '500/400',
                  objectFit: 'cover',
                }}
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
