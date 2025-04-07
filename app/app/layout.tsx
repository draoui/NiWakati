import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ni Wakati - Ensemble pour un avenir meilleur',
  description: "Association dédiée au développement durable et à l'aide aux communautés",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Ni Wakati</h3>
                <p className="text-gray-300">
                  Association dédiée au développement durable
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact</h4>
                <p className="text-gray-300">contact@ni-wakati.be</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Ni Wakati. Tous droits réservés.
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}