import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  // Mock data for featured posts
  const featuredPosts = [
    {
      id: 1,
      title: "Top 10 Nước Hoa Nam Được Yêu Thích Nhất 2024",
      excerpt: "Khám phá những mùi hương nam tính, sang trọng đang làm mưa làm gió trong năm nay.",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=60",
      category: "Nước Hoa Nam"
    },
    {
      id: 2,
      title: "Hướng Dẫn Chọn Nước Hoa Theo Mùa",
      excerpt: "Bí quyết chọn nước hoa phù hợp với từng mùa trong năm.",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=60",
      category: "Bí Quyết"
    },
    {
      id: 3,
      title: "Nước Hoa Nữ Sang Trọng Cho Mùa Hè",
      excerpt: "Những mùi hương tươi mát, quyến rũ dành cho phái đẹp trong mùa hè.",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=60",
      category: "Nước Hoa Nữ"
    }
  ]

  // Mock data for categories
  const categories = [
    { id: 1, name: "Nước Hoa Nam", icon: "👨" },
    { id: 2, name: "Nước Hoa Nữ", icon: "👩" },
    { id: 3, name: "Unisex", icon: "👥" },
    { id: 4, name: "Bí Quyết", icon: "💡" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="home-hero relative h-[600px] bg-cover bg-center">
        <div className="absolute inset-0 bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Khám Phá Thế Giới Nước Hoa</h1>
              <p className="text-xl mb-8">Nơi chia sẻ những kiến thức, trải nghiệm và đánh giá chân thực về các loại nước hoa</p>
              <Link to="/blog" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Khám Phá Ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Bài Viết Nổi Bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 mb-2 block">{post.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 font-semibold hover:text-blue-800">
                  Đọc thêm →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Danh Mục</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Đăng Ký Nhận Tin</h2>
          <p className="text-blue-100 mb-8">Nhận thông báo về bài viết mới và các sự kiện đặc biệt</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button 
              type="submit" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage

// ==========================================================================================================================================================

// import React from 'react';

// const HomePage: React.FC = () => {
//   // Giả lập dữ liệu
//   const featuredPosts = [
//     {
//       id: 1,
//       title: "Dior Sauvage Elixir - Sức Mạnh Của Biểu Tượng",
//       image: "/api/placeholder/500/300",
//       brand: "Dior",
//       rating: 9.2,
//       excerpt: "Phiên bản cô đặc mạnh mẽ nhất của dòng Sauvage mang đến trải nghiệm mới mẻ..."
//     },
//     {
//       id: 2,
//       title: "Maison Francis Kurkdjian Baccarat Rouge 540 - Ánh Hồng Pha Lê",
//       image: "/api/placeholder/500/300",
//       brand: "Maison Francis Kurkdjian",
//       rating: 9.8,
//       excerpt: "Kiệt tác của Francis Kurkdjian đã trở thành hiện tượng toàn cầu với hương thơm..."
//     },
//     {
//       id: 3,
//       title: "Chanel No.5 - 100 Năm Của Một Huyền Thoại",
//       image: "/api/placeholder/500/300",
//       brand: "Chanel",
//       rating: 9.5,
//       excerpt: "Nhìn lại hành trình một thế kỷ của biểu tượng nước hoa vĩ đại nhất mọi thời đại..."
//     }
//   ];
  
//   const categories = [
//     { name: "Nước hoa nam", count: 45 },
//     { name: "Nước hoa nữ", count: 72 },
//     { name: "Nước hoa unisex", count: 38 },
//     { name: "Niche", count: 64 },
//     { name: "Designer", count: 91 }
//   ];
  
//   const recentPosts = [
//     { id: 4, title: "Tom Ford Tobacco Vanille - Hương Thuốc Lá Ngọt Ngào", image: "/api/placeholder/150/100" },
//     { id: 5, title: "Kilian Angels' Share - Rượu Cognac Hảo Hạng", image: "/api/placeholder/150/100" },
//     { id: 6, title: "Parfums de Marly Layton - Quý Ông Lịch Lãm", image: "/api/placeholder/150/100" },
//     { id: 7, title: "Jo Malone Wood Sage & Sea Salt - Hương Biển Thanh Mát", image: "/api/placeholder/150/100" }
//   ];
  
//   const brands = [
//     "Chanel", "Dior", "Tom Ford", "Creed", "Maison Francis Kurkdjian", 
//     "Byredo", "Jo Malone", "Parfums de Marly", "Xerjoff", "Louis Vuitton"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-purple-900">Scent Stories</h1>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-800 hover:text-purple-700 font-medium">Trang chủ</a>
//               <a href="#" className="text-gray-800 hover:text-purple-700 font-medium">Nước hoa nam</a>
//               <a href="#" className="text-gray-800 hover:text-purple-700 font-medium">Nước hoa nữ</a>
//               <a href="#" className="text-gray-800 hover:text-purple-700 font-medium">Thương hiệu</a>
//               <a href="#" className="text-gray-800 hover:text-purple-700 font-medium">Blog</a>
//             </nav>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="Tìm kiếm..." 
//                   className="w-40 md:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                 />
//                 <button className="absolute right-3 top-2.5 text-gray-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </button>
//               </div>
//               <button className="bg-purple-700 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-800 transition-colors">
//                 Đăng nhập
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Khám phá thế giới nước hoa đẳng cấp</h1>
//             <p className="text-xl mb-8">Nơi chia sẻ những đánh giá chân thực và chi tiết về những chai nước hoa đáng chú ý nhất.</p>
//             <div className="flex flex-wrap gap-4">
//               <a href="#" className="bg-white text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
//                 Khám phá bộ sưu tập
//               </a>
//               <a href="#" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-purple-900 transition-colors">
//                 Bài viết mới nhất
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
//           <img src="/api/placeholder/600/800" alt="Perfume bottles" className="w-full h-full object-cover object-center opacity-20" />
//         </div>
//       </section>

//       {/* Featured Posts */}
//       <section className="container mx-auto px-4 py-12">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Bài viết nổi bật</h2>
//           <a href="#" className="text-purple-700 font-medium hover:text-purple-900">Xem tất cả</a>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredPosts.map((post) => (
//             <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="relative">
//                 <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//                 <div className="absolute top-0 right-0 bg-purple-700 text-white m-2 px-2 py-1 rounded font-bold">
//                   {post.rating}/10
//                 </div>
//                 <div className="absolute bottom-0 left-0 bg-purple-900 text-white m-2 px-3 py-1 rounded-full text-sm">
//                   {post.brand}
//                 </div>
//               </div>
//               <div className="p-5">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
//                 <p className="text-gray-700 mb-4">{post.excerpt}</p>
//                 <a href="#" className="text-purple-700 font-medium hover:text-purple-900">Đọc tiếp →</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Categories and Recent Posts */}
//       <section className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Categories */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Danh mục</h3>
//             <ul>
//               {categories.map((category, index) => (
//                 <li key={index} className="border-b border-gray-100 last:border-0">
//                   <a href="#" className="flex justify-between items-center py-3 hover:text-purple-700">
//                     <span>{category.name}</span>
//                     <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
//                       {category.count}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Recent Posts */}
//           <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Bài viết gần đây</h3>
//             <div className="space-y-4">
//               {recentPosts.map((post) => (
//                 <div key={post.id} className="flex space-x-4">
//                   <img src={post.image} alt={post.title} className="w-20 h-16 object-cover rounded" />
//                   <div>
//                     <h4 className="font-medium text-gray-900 hover:text-purple-700">
//                       <a href="#">{post.title}</a>
//                     </h4>
//                     <p className="text-sm text-gray-500">29 tháng 4, 2025</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6">
//               <a href="#" className="text-purple-700 font-medium hover:text-purple-900">Xem tất cả bài viết →</a>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Brands */}
//       <section className="bg-purple-50 py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Thương hiệu nổi bật</h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {brands.map((brand, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="bg-white px-6 py-3 rounded-full shadow-sm text-gray-800 hover:bg-purple-700 hover:text-white transition-colors"
//               >
//                 {brand}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Newsletter */}
//       <section className="bg-purple-900 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Đăng ký nhận bản tin</h2>
//           <p className="max-w-2xl mx-auto mb-8">Nhận thông tin về các bài viết mới nhất, đánh giá nước hoa và khuyến mãi đặc biệt trực tiếp vào hộp thư của bạn.</p>
//           <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
//             <input 
//               type="email" 
//               placeholder="Email của bạn" 
//               className="flex-grow px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             <button className="bg-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
//               Đăng ký
//             </button>
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Scent Stories</h3>
//               <p className="text-gray-400 mb-4">Khám phá thế giới nước hoa qua những câu chuyện đầy cảm xúc và đánh giá chuyên sâu.</p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-4">Khám phá</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white">Nước hoa nam</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Nước hoa nữ</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Nước hoa unisex</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Thương hiệu nổi bật</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Xu hướng mới nhất</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-4">Hỗ trợ</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white">Về chúng tôi</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Liên hệ</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Điều khoản sử dụng</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Chính sách bảo mật</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
//               <address className="text-gray-400 not-italic">
//                 <p className="mb-2">Tầng 8, Tòa nhà The One</p>
//                 <p className="mb-2">Quận 1, TP. Hồ Chí Minh</p>
//                 <p className="mb-2">Email: info@scentstories.vn</p>
//                 <p>Điện thoại: (028) 1234 5678</p>
//               </address>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 Scent Stories. Tất cả quyền được bảo lưu.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;