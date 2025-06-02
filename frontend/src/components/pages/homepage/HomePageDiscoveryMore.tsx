import React from 'react';

const HomePageDiscoveryMore: React.FC = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Khám phá thêm</h2>
          <a href="#" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
            Xem tất cả<span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src="/api/placeholder/800/400" 
                alt="Guide to choosing perfumes" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white mb-3">
                  Hướng dẫn
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Cách chọn nước hoa phù hợp với từng mùa trong năm
                </h3>
                <p className="text-gray-200 text-sm">
                  Khám phá những hương thơm lý tưởng cho mùa xuân, hạ, thu và đông.
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">HT</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Hương Trần</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Biên tập viên</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">10 phút đọc</span>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-4">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-2">
                    {['Hướng dẫn', 'Top list', 'Review', 'Tin tức'][index % 4]}
                  </span>
                  <h3 className="text-base font-bold mb-2 line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                    <a href="#">
                      {[
                        'Top 5 nước hoa nam được yêu thích nhất 2025',
                        'Cách phân biệt nước hoa thật và giả',
                        'Review: Jo Malone English Pear & Freesia',
                        'Xu hướng nước hoa mùa hè 2025'
                      ][index % 4]}
                    </a>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                    {[
                      'Khám phá những mùi hương nam tính được săn đón nhất trong năm nay.',
                      'Những dấu hiệu giúp bạn nhận biết nước hoa chính hãng và giả mạo.',
                      'Hương thơm tinh tế của quả lê và hoa phong lữ tạo nên sự thanh mát.',
                      'Những mùi hương nhẹ nhàng, tươi mát sẽ thống trị mùa hè năm nay.'
                    ][index % 4]}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>12/05/2025</span>
                    <span>5 phút đọc</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageDiscoveryMore; 