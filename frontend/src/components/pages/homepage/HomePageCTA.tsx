import React from 'react';

const HomePageCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Tham gia cộng đồng Scent Stories</h2>
        <p className="text-purple-100 max-w-2xl mx-auto mb-8">
          Chia sẻ đánh giá, khám phá những mùi hương mới và kết nối với những người yêu nước hoa khác từ khắp nơi trên thế giới.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 text-sm font-medium bg-white text-purple-700 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 shadow-md"
          >
            Đăng ký ngay
          </a>
          <a
            href="#"
            className="px-6 py-3 text-sm font-medium text-white border border-white rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePageCTA; 