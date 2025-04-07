import Image from 'next/image';
import Link from 'next/link';
import { LatestNews } from '@/components/latest-news';

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="py-20 hero-gradient">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ni Wakati
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-10">
            Ensemble, pour un avenir meilleur. Développement durable et aide aux communautés locales.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/notre-mission"
              className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Notre mission
            </Link>
            <Link 
              href="/faire-un-don"
              className="bg-primary text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ni Wakati vise à améliorer les conditions de vie des communautés vulnérables
                à travers des projets durables dans les domaines de l'éducation,
                la santé et l'environnement.
              </p>
              <Link 
                href="/notre-mission"
                className="text-primary font-medium hover:underline"
              >
                En savoir plus
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full">
              <Image
                src="/images/mission.jpg"
                alt="Notre mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest news section */}
      <LatestNews />
    </div>
  );
}