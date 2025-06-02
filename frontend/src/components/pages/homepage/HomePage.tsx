import HomePageHero from './HomePageHero';
import HomePageDiscoveryMore from './HomePageDiscoveryMore';
import FeaturePostGrid from './HomePageFeaturePostGrid';
import HomePageCTA from './HomePageCTA';

const HomePage: React.FC = () => {
  // Dữ liệu mẫu
  const featuredPosts = [
    {
      id: 1,
      title: "Dior Sauvage Elixir - Sự Trở Lại Đầy Mạnh Mẽ",
      image: "/api/placeholder/600/400",
      brand: "Dior",
      rating: 9.2,
      excerpt: "Phiên bản cô đặc mạnh mẽ nhất của dòng Sauvage mang đến sự nam tính và quyến rũ khó cưỡng."
    },
    {
      id: 2,
      title: "Maison Francis Kurkdjian Baccarat Rouge 540 - Huyền Thoại Của Thời Đại",
      image: "/api/placeholder/600/400",
      brand: "Maison Francis Kurkdjian",
      rating: 9.8,
      excerpt: "Kiệt tác của Francis Kurkdjian đã trở thành hiện tượng toàn cầu với hương thơm ngọt ngào khó quên."
    },
    {
      id: 3,
      title: "Chanel No.5 - Một Thế Kỷ Hương Thơm Kinh Điển",
      image: "/api/placeholder/600/400",
      brand: "Chanel",
      rating: 9.5,
      excerpt: "Nhìn lại hành trình một thế kỷ của biểu tượng nước hoa vĩ đại nhất mọi thời đại."
    }
  ];
  
  const categories = [
    { name: "Nước hoa nam", count: 45, icon: "👔" },
    { name: "Nước hoa nữ", count: 72, icon: "👗" },
    { name: "Nước hoa unisex", count: 38, icon: "🔄" },
    { name: "Niche", count: 64, icon: "💎" },
    { name: "Designer", count: 91, icon: "✨" }
  ];
  
  const recentPosts = [
    { id: 4, title: "Tom Ford Tobacco Vanille - Hương Thuốc Lá Ngọt Ngào", image: "/api/placeholder/150/100", date: "15/05/2025" },
    { id: 5, title: "Kilian Angels' Share - Rượu Cognac Hảo Hạng", image: "/api/placeholder/150/100", date: "12/05/2025" },
    { id: 6, title: "Parfums de Marly Layton - Quý Ông Lịch Lãm", image: "/api/placeholder/150/100", date: "08/05/2025" },
    { id: 7, title: "Jo Malone Wood Sage & Sea Salt - Hương Biển Thanh Mát", image: "/api/placeholder/150/100", date: "05/05/2025" }
  ];
  
  const trending = [
    "Nước hoa mùa hè", "Tinh dầu nước hoa", "Hương gỗ", "Nước hoa dành cho công sở", "Nước hoa lưu hương lâu"
  ];
  
  const brands = [
    "Chanel", "Dior", "Tom Ford", "Creed", "Maison Francis Kurkdjian", 
    "Byredo", "Jo Malone", "Parfums de Marly", "Xerjoff", "Louis Vuitton"
  ];

  return (
    <>
      {/* Hero Section */}
      <HomePageHero />

      {/* Category Chips */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="mr-2">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
                <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {category.count}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <FeaturePostGrid featuredPosts={featuredPosts} />

      {/* Content Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold">Bài viết gần đây</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-20 h-16 object-cover rounded-lg" 
                    />
                    <div className="ml-4 flex-1">
                      <h4 className="text-base font-medium line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                        <a href="#">{post.title}</a>
                      </h4>
                      <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <a 
                  href="#" 
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                >
                  Xem tất cả bài viết<span className="ml-1">→</span>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold">Danh mục</h3>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                          <div className="flex items-center">
                            <span className="mr-2">{category.icon}</span>
                            <span>{category.name}</span>
                          </div>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trending */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold">Xu hướng tìm kiếm</h3>
                </div>
                <div className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {trending.map((tag, index) => (
                      <a
                        key={index}
                        href="#"
                        className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 text-gray-800 dark:text-gray-200 hover:text-purple-800 dark:hover:text-purple-200 rounded-full transition-colors duration-200"
                      >
                        #{tag.replace(/\s+/g, '')}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-md overflow-hidden text-white">
                <div className="px-6 py-6">
                  <h3 className="text-xl font-bold mb-2">Đăng ký nhận bản tin</h3>
                  <p className="text-purple-100 text-sm mb-4">
                    Nhận thông báo về những bài viết mới và khuyến mãi đặc biệt.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email của bạn"
                      className="w-full px-4 py-2 text-sm text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      Đăng ký
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Thương hiệu nổi bật</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-center p-4 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <span className="text-center text-gray-800 dark:text-gray-200 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {brand}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <HomePageCTA />

      {/* Blog Highlights */}
      <HomePageDiscoveryMore />

      {/* Instagram Feed */}
      {/* <HomePageInstagramFeed /> */}

      {/* Subscribe Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Đăng ký nhận bản tin</h2>
            <p className="text-purple-100 mb-8">
              Nhận thông tin về các bài viết mới nhất, đánh giá nước hoa và khuyến mãi đặc biệt trực tiếp vào hộp thư của bạn.
            </p>
            <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 flex-grow"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-purple-700 font-medium rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 shadow-md"
              >
                Đăng ký
              </button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng ký bất kỳ lúc nào.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
