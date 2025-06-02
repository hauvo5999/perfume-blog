import React from 'react';

const HomePageHero: React.FC = () => {
  return (
    <section className="relative home-hero bg-gradient-to-r from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1600/800')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Khám phá thế giới hương thơm đẳng cấp
          </h1>
          <p className="mt-6 text-lg text-purple-100 max-w-lg">
            Nơi chia sẻ những đánh giá chân thực, câu chuyện đằng sau mỗi chai nước hoa và khám phá những hương thơm độc đáo từ khắp nơi trên thế giới.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="px-5 py-3 text-sm font-medium text-purple-700 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 shadow-md"
            >
              Khám phá bộ sưu tập
            </a>
            <a
              href="#"
              className="px-5 py-3 text-sm font-medium text-white border border-white rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
            >
              Bài viết mới nhất
            </a>
          </div>
        </div>
      </div>
      
      {/* Scent Notes Decor */}
      <div className="hidden md:block absolute bottom-0 right-0 w-1/3 h-full">
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-50 blur-xl"></div>
        <div className="absolute top-20 right-40 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-40 blur-xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-30 blur-xl"></div>
      </div>
    </section>
  );
};

export default HomePageHero; 