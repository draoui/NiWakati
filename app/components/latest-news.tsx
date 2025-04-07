import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getLatestPosts } from '@/lib/services/wordpress.service';

export async function LatestNews() {
  const posts = await getLatestPosts(3);
  
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Dernières actualités</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const date = new Date(post.date);
            
            return (
              <div key={post.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {post.featured_media_url && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.featured_media_url}
                      alt={post.title.rendered || 'Article image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {format(date, 'dd MMMM yyyy', { locale: fr })}
                  </span>
                  <h3 
                    className="text-lg font-semibold mt-1 mb-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Link 
                    href={post.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline text-sm"
                  >
                    Lire la suite
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}