import React from 'react';

interface FeaturedPost {
  id: number;
  title: string;
  image: string;
  brand: string;
  rating: number;
  excerpt: string;
}

interface FeaturePostGridProps {
  featuredPosts: FeaturedPost[];
}

const HomePageFeaturePostGrid: React.FC<FeaturePostGridProps> = ({ featuredPosts }) => {

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Bài viết nổi bật</h2>
          <a href="#" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
            Xem tất cả<span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 m-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold shadow-md">
                    {post.rating}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 m-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                    {post.brand}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                  >
                    Đọc tiếp<span className="ml-1">→</span>
                  </a>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>5 phút đọc</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageFeaturePostGrid; 