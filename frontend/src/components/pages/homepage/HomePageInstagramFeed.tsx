import React from 'react';

const HomePageHero: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Instagram</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Theo dõi chúng tôi trên Instagram để cập nhật những bài viết mới nhất và hình ảnh độc quyền
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <a
              key={index}
              href="#"
              className="relative group aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden"
            >
              <img 
                src={`/api/placeholder/300/300?${index}`} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5z" />
            </svg>
            Theo dõi @scentstories trên Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero; 