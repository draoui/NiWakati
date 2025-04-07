export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
  slug: string;
}

export const wordpressService = {
  async getLatestPosts(count = 3): Promise<WordPressPost[]> {
    try {
      const response = await fetch(
        `https://blog.ni-wakati.be/wp-json/wp/v2/posts?_embed&per_page=${count}`,
        { next: { revalidate: 3600 } } // Revalidate every hour
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return [];
    }
  }
};