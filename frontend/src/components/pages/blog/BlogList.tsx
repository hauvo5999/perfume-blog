import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Grid, List, Clock, User, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const BlogListPage: React.FC = () => {
  // States
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  
  // Sample data
  const posts = [
    {
      id: 1,
      title: "Dior Sauvage Elixir - Sự Trở Lại Đầy Mạnh Mẽ",
      image: "/pefume-place-holder.webp",
      brand: "Dior",
      rating: 9.2,
      category: "review",
      date: "14/05/2025",
      readTime: "8 phút",
      author: "Trần Minh Tuấn",
      excerpt: "Phiên bản cô đặc mạnh mẽ nhất của dòng Sauvage mang đến sự nam tính và quyến rũ khó cưỡng."
    },
    {
      id: 2,
      title: "Maison Francis Kurkdjian Baccarat Rouge 540 - Huyền Thoại Của Thời Đại",
      image: "/pefume-place-holder.webp",
      brand: "Maison Francis Kurkdjian",
      rating: 9.8,
      category: "review",
      date: "10/05/2025",
      readTime: "10 phút",
      author: "Nguyễn Hoàng",
      excerpt: "Kiệt tác của Francis Kurkdjian đã trở thành hiện tượng toàn cầu với hương thơm ngọt ngào khó quên."
    },
    {
      id: 3,
      title: "Tom Ford Tobacco Vanille - Hương Thuốc Lá Ngọt Ngào Cho Mùa Đông",
      image: "/pefume-place-holder.webp",
      brand: "Tom Ford",
      rating: 9.4,
      category: "review",
      date: "05/05/2025",
      readTime: "6 phút",
      author: "Trần Minh Tuấn",
      excerpt: "Mùi hương ấm áp, ngọt ngào của thuốc lá và vanilla là lựa chọn hoàn hảo cho những ngày đông lạnh giá."
    },
    {
      id: 4,
      title: "Top 10 Nước Hoa Nam Được Yêu Thích Nhất Năm 2025",
      image: "/pefume-place-holder.webp",
      brand: "Nhiều thương hiệu",
      rating: 0,
      category: "list",
      date: "01/05/2025",
      readTime: "12 phút",
      author: "Nguyễn Hoàng",
      excerpt: "Danh sách 10 chai nước hoa nam đang được săn đón nhiều nhất trong năm 2025, từ những thương hiệu designer đến niche."
    },
    {
      id: 5,
      title: "Cách Phân Biệt Nước Hoa Thật - Giả Năm 2025",
      image: "/pefume-place-holder.webp",
      brand: "",
      rating: 0,
      category: "guide",
      date: "27/04/2025",
      readTime: "15 phút",
      author: "Trần Thị Mai",
      excerpt: "Tổng hợp những cách nhận biết nước hoa thật - giả mới nhất, giúp bạn tránh mua phải hàng không chính hãng."
    },
    {
      id: 6,
      title: "Jo Malone Wood Sage & Sea Salt - Hương Biển Thanh Mát",
      image: "/pefume-place-holder.webp",
      brand: "Jo Malone",
      rating: 8.7,
      category: "review",
      date: "20/04/2025",
      readTime: "7 phút",
      author: "Trần Thị Mai",
      excerpt: "Mùi hương đại dương kết hợp với xô thơm và muối biển tạo nên cảm giác thanh mát, trong lành tuyệt vời."
    },
    {
      id: 7,
      title: "Parfums de Marly Layton - Quý Ông Lịch Lãm",
      image: "/pefume-place-holder.webp",
      brand: "Parfums de Marly",
      rating: 9.3,
      category: "review",
      date: "15/04/2025",
      readTime: "9 phút",
      author: "Nguyễn Hoàng",
      excerpt: "Hương thơm sang trọng, lịch lãm với sự kết hợp tinh tế giữa táo, hoa oải hương và vanilla - sự lựa chọn hoàn hảo cho quý ông hiện đại."
    },
    {
      id: 8,
      title: "Xu Hướng Nước Hoa Mùa Hè 2025",
      image: "/pefume-place-holder.webp",
      brand: "",
      rating: 0,
      category: "trend",
      date: "10/04/2025",
      readTime: "11 phút",
      author: "Trần Minh Tuấn",
      excerpt: "Khám phá những xu hướng nước hoa nổi bật cho mùa hè 2025 - từ hương hoa quả tươi mát đến hương biển trong lành."
    }
  ];
  
  const categories = [
    { name: "Tất cả", value: "all", count: 28 },
    { name: "Review", value: "review", count: 18 },
    { name: "Hướng dẫn", value: "guide", count: 4 },
    { name: "Top list", value: "list", count: 3 },
    { name: "Xu hướng", value: "trend", count: 3 }
  ];
  
  const brands = [
    "Chanel", "Dior", "Tom Ford", "Creed", "Maison Francis Kurkdjian", 
    "Byredo", "Jo Malone", "Parfums de Marly", "Xerjoff", "Louis Vuitton"
  ];
  
  const tags = [
    "Nước hoa nam", "Nước hoa nữ", "Hương gỗ", "Hương hoa", "Mùa hè",
    "Mùa đông", "Lưu hương lâu", "Niche", "Designer"
  ];
  
  const recentPosts = [
    { id: 1, title: "Dior Sauvage Elixir - Sự Trở Lại Đầy Mạnh Mẽ", image: "/pefume-place-holder.webp", date: "14/05/2025" },
    { id: 2, title: "Maison Francis Kurkdjian Baccarat Rouge 540", image: "/pefume-place-holder.webp", date: "10/05/2025" },
    { id: 4, title: "Top 10 Nước Hoa Nam Được Yêu Thích Nhất Năm 2025", image: "/pefume-place-holder.webp", date: "01/05/2025" }
  ];
  
  // Filtered posts based on active category
  const filteredPosts = activeCategoryFilter === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategoryFilter);

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1600/400')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Blog
            </h1>
            <p className="mt-4 text-lg text-purple-100 max-w-xl mx-auto">
              Khám phá các bài viết, đánh giá và hướng dẫn về nước hoa từ đội ngũ chuyên gia của chúng tôi.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <button 
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 mr-2 sm:mr-4"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Lọc</span>
                <ChevronDown className={`h-4 w-4 ml-1 transform transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="hidden sm:flex items-center space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setActiveCategoryFilter(category.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeCategoryFilter === category.value 
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                    <span className="ml-1 text-xs">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border-none text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer pr-8"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="oldest">Cũ nhất</option>
                  <option value="rating">Đánh giá cao</option>
                  <option value="popular">Phổ biến nhất</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>
              
              {/* View mode toggle */}
              <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-full transition-colors duration-200 ${
                    viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-full transition-colors duration-200 ${
                    viewMode === 'list' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Expanded Filters (Mobile Categories) */}
          {filterOpen && (
            <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-800 mt-3 sm:hidden">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setActiveCategoryFilter(category.value);
                      setFilterOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeCategoryFilter === category.value 
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                    <span className="ml-1 text-xs">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {post.rating > 0 && (
                        <div className="absolute top-0 right-0 m-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold shadow-md">
                            {post.rating}
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute top-0 left-0 m-3">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                          {post.category === 'review' ? 'Review' : 
                           post.category === 'guide' ? 'Hướng dẫn' : 
                           post.category === 'list' ? 'Top list' : 
                           post.category === 'trend' ? 'Xu hướng' : post.category}
                        </span>
                      </div>
                      
                      {post.brand && (
                        <div className="absolute bottom-0 left-0 m-3">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900/70 text-white">
                            {post.brand}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-5 flex flex-col">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        <a href={"/blog/" + post.id}>{post.title}</a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <a 
                          href={"/blog/" + post.id}
                          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                        >
                          Đọc tiếp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* List View */}
            {viewMode === 'list' && (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="group flex flex-col sm:flex-row bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="sm:w-1/3 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 sm:h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {post.rating > 0 && (
                        <div className="absolute top-0 right-0 m-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold shadow-md">
                            {post.rating}
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute top-0 left-0 m-3">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                          {post.category === 'review' ? 'Review' : 
                           post.category === 'guide' ? 'Hướng dẫn' : 
                           post.category === 'list' ? 'Top list' : 
                           post.category === 'trend' ? 'Xu hướng' : post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="sm:w-2/3 p-5 flex flex-col">
                      {post.brand && (
                        <div className="mb-2">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            {post.brand}
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        <a href={"/blog/" + post.id}>{post.title}</a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.excerpt}</p>
                      
                      <div className="mt-auto flex flex-wrap justify-between items-center">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-2 sm:mb-0">
                          <User className="h-3.5 w-3.5 mr-1" />
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <a 
                          href={"/blog/" + post.id} 
                          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                        >
                          Đọc tiếp<ChevronRight className="h-4 w-4 inline ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex items-center rounded-full bg-white dark:bg-gray-900 p-1.5 shadow-sm">
                <a
                  href="#"
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <ArrowLeft className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="mx-1 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="mx-1 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  2
                </a>
                <a
                  href="#"
                  className="mx-1 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  3
                </a>
                <span className="mx-1 text-gray-400">...</span>
                <a
                  href="#"
                  className="mx-1 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  12
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <ArrowRight className="h-5 w-5" />
                </a>
              </nav>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search - Mobile Only */}
            <div className="block sm:hidden bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden p-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="search"
                  className="py-2.5 pl-10 pr-4 w-full rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-gray-900 text-sm"
                  placeholder="Tìm kiếm bài viết..."
                />
              </div>
            </div>
            
            {/* Featured Post */}
            {/* <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="/pefume-place-holder.webp" 
                  alt="Featured post" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-purple-600 text-white mb-2">
                    Nổi bật
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Cách chọn nước hoa phù hợp với từng mùa trong năm
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Khám phá những hương thơm lý tưởng cho mùa xuân, hạ, thu và đông.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>10 phút đọc</span>
                  </div>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                  >
                    Đọc tiếp
                  </a>
                </div>
              </div>
            </div> */}
            
            {/* Categories */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold">Danh mục</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.value}>
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveCategoryFilter(category.value);
                        }}
                        className={`flex items-center justify-between py-2 transition-colors duration-200 ${
                          activeCategoryFilter === category.value 
                          ? 'text-purple-600 dark:text-purple-400 font-medium' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                      >
                        <div className="flex items-center">
                          {category.value === 'all' && <span className="mr-2">🏷️</span>}
                          {category.value === 'review' && <span className="mr-2">⭐</span>}
                          {category.value === 'guide' && <span className="mr-2">📚</span>}
                          {category.value === 'list' && <span className="mr-2">📋</span>}
                          {category.value === 'trend' && <span className="mr-2">📈</span>}
                          <span>{category.name}</span>
                        </div>
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Recent Posts */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold">Bài viết gần đây</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex p-4 hover:bg-gray-50 dark:hover:bg-gray-850 transition-colors duration-200">
                    <img 
                      src={post.image}
                      alt={post.title} 
                      className="w-16 h-16 object-cover rounded-lg" 
                    />
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-medium line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                        <a href="#">{post.title}</a>
                      </h4>
                      <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <a 
                  href="#" 
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                >
                  Xem tất cả<ChevronRight className="h-4 w-4 inline ml-1" />
                </a>
              </div>
            </div>
            
            {/* Popular Brands */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold">Thương hiệu phổ biến</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {brands.slice(0, 6).map((brand, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-800 dark:hover:text-purple-200 transition-colors duration-200"
                    >
                      {brand}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-800 dark:hover:text-purple-200 transition-colors duration-200"
                  >
                    +{brands.length - 6} khác
                  </a>
                </div>
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold">Tags phổ biến</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-800 dark:hover:text-purple-200 transition-colors duration-200"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-md overflow-hidden text-white">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Đăng ký nhận bản tin</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Nhận thông báo về những bài viết mới và khuyến mãi đặc biệt về nước hoa.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full px-4 py-2.5 text-sm text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="button"
                    className="w-full px-4 py-2.5 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogListPage;