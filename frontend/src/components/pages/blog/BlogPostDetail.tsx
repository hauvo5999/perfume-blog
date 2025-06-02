import React, { useState } from 'react';
import { Calendar, Clock, User, MessageCircle, Heart, Share2, Bookmark, ChevronLeft, ChevronRight, Star, ArrowLeft, DollarSign } from 'lucide-react';

const BlogPostDetail: React.FC = () => {
  // States
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showFullNotes, setShowFullNotes] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  // Sample post data
  const post = {
    id: 1,
    title: "Dior Sauvage Elixir - Sự Trở Lại Đầy Mạnh Mẽ",
    image: "/pefume-place-holder.webp",
    brand: "Dior",
    rating: 9.2,
    category: "review",
    date: "14/05/2025",
    readTime: "8 phút",
    author: {
      name: "Trần Minh Tuấn",
      image: "/pefume-place-holder.webp",
      bio: "Chuyên gia nước hoa với hơn 8 năm kinh nghiệm, từng làm việc tại các cửa hàng nước hoa cao cấp. Đam mê khám phá và chia sẻ kiến thức về các mùi hương độc đáo trên khắp thế giới.",
      social: {
        instagram: "#",
        youtube: "#",
        facebook: "#"
      }
    },
    likes: 156,
    comments: 34,
    views: 2389,
    excerpt: "Phiên bản cô đặc mạnh mẽ nhất của dòng Sauvage mang đến sự nam tính và quyến rũ khó cưỡng. Liệu Dior Sauvage Elixir có thực sự xứng đáng với mức giá cao ngất ngưởng của nó?",
    ratings: {
      overall: 9.2,
      longevity: 9.5,
      sillage: 9.0,
      uniqueness: 8.8,
      value: 8.7,
      seasons: {
        spring: 7,
        summer: 6,
        fall: 9,
        winter: 10
      }
    },
    productInfo: {
      releaseYear: "2021 (Phiên bản cập nhật 2025)",
      perfumer: "François Demachy",
      concentration: "Parfum Extrait",
      sizes: ["60ml", "100ml"],
      price: "3.590.000 VNĐ",
      longevity: "12+ giờ",
      sillage: "Mạnh",
      targetGender: "Nam"
    },
    notes: {
      top: ["Quả Quýt", "Lavender", "Bạch Đậu Khấu"],
      mid: ["Nhục Đậu Khấu", "Quế", "Hương thơm Fougère"],
      base: ["Hổ Phách", "Gỗ Đàn Hương", "Hương Licorice", "Nhựa cây Labdanum"]
    },
    tags: ["diorsauvage", "nướchoanam", "luxuryfragrance", "review2025"],
    relatedPosts: [
      { id: 3, title: "Tom Ford Tobacco Vanille - Hương Thuốc Lá Ngọt Ngào Cho Mùa Đông", image: "/pefume-place-holder.webp", date: "05/05/2025", readTime: "6 phút" },
      { id: 7, title: "Parfums de Marly Layton - Quý Ông Lịch Lãm", image: "/pefume-place-holder.webp", date: "15/04/2025", readTime: "9 phút" }
    ]
  };

  // Sample comments
  const comments = [
    {
      id: 1,
      user: { name: "Nguyễn Hoàng", image: "/api/placeholder/50/50" },
      date: "12/05/2025",
      time: "10:45",
      content: "Tôi mua chai này tháng trước và hoàn toàn đồng ý với đánh giá của bạn. Độ lưu hương thực sự ấn tượng, tôi xịt buổi sáng và đến tối vẫn còn mùi. Đáng tiền mặc dù giá khá cao!",
      likes: 18
    },
    {
      id: 2,
      user: { name: "Trần Thị Mai", image: "/api/placeholder/50/50" },
      date: "10/05/2025",
      time: "15:20",
      content: "Mình mua chai này làm quà cho chồng và anh ấy rất thích. Tuy nhiên, mình thấy mùi hơi nồng cho mùa hè, có lẽ phù hợp hơn với thời tiết mát mẻ. Bạn có thể review thêm một số mùi hương phù hợp cho mùa hè không?",
      likes: 9,
      replies: [
        {
          id: 21,
          user: { name: "Trần Minh Tuấn", image: "/api/placeholder/50/50", isAuthor: true },
          date: "11/05/2025",
          time: "09:15",
          content: "Cảm ơn bạn đã phản hồi! Bạn nói đúng, Sauvage Elixir có thể hơi nồng cho mùa hè. Tôi sẽ sớm đăng một bài review về các mùi hương mùa hè. Bạn có thể tham khảo Dior Homme Cologne hoặc Acqua di Gio Profumo cho thời tiết nóng.",
          likes: 5
        }
      ]
    }
  ];

  // Helper function to render rating stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star}
            size={16} 
            className={`${
              star <= Math.round(rating/2) 
                ? "text-yellow-500 fill-yellow-500" 
                : "text-gray-300 dark:text-gray-600"
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            {/* Page Content */}
            <main>
                {/* Breadcrumb */}
                <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Trang chủ</a>
                            <span className="mx-2">/</span>
                            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a>
                            <span className="mx-2">/</span>
                            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Nước hoa nam</a>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
                        </div>
                </div>
                </div>

                {/* Back Button (Mobile) */}
                <div className="md:hidden container mx-auto px-4 sm:px-6 py-3">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Quay lại
                    </a>
                </div>
                
                {/* Article Header */}
                <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Article Header */}
                    <header className="max-w-4xl mx-auto mb-8">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                                Review
                            </span>
                            {post.tags.map((tag, index) => (
                                <a 
                                key={index}
                                href="#" 
                                className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-800 dark:hover:text-purple-200"
                                >
                                #{tag}
                                </a>
                            ))}
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                        {post.title}
                        </h1>
                        
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                        {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mb-6">
                            <div className="flex items-center">
                                <Calendar size={16} className="mr-1" />
                                <time dateTime="2025-05-14">{post.date}</time>
                            </div>
                        <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            <span>{post.readTime} đọc</span>
                        </div>
                        <div className="flex items-center">
                            <User size={16} className="mr-1" />
                            <a href="#author" className="hover:text-purple-600 dark:hover:text-purple-400">{post.author.name}</a>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{post.views.toLocaleString()} lượt xem</span>
                        </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img 
                                src={post.author.image} 
                                alt={post.author.name} 
                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                                <div>
                                <span className="block text-gray-900 dark:text-white font-medium">{post.author.name}</span>
                                <span className="block text-sm text-gray-500 dark:text-gray-400">Chuyên gia nước hoa</span>
                                </div>
                            </div>
                            
                            <div className="flex space-x-2">
                                <button 
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                onClick={() => setLiked(!liked)}
                                >
                                    <Heart size={20} className={liked ? "fill-red-500 text-red-500" : ""} />
                                </button>
                                <button 
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                onClick={() => setBookmarked(!bookmarked)}
                                >
                                    <Bookmark size={20} className={bookmarked ? "fill-purple-500 text-purple-500" : ""} />
                                </button>
                                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 right-0 m-4 bg-white dark:bg-gray-900 py-1 px-3 rounded-full shadow-md text-sm font-bold text-purple-600 dark:text-purple-400 flex items-center">
                            <Star className="fill-yellow-500 text-yellow-500 mr-1" size={16} />
                            <span>{post.rating}/10</span>
                        </div>
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Sidebar - Product Info */}
                        <div className="lg:col-span-1 order-2 lg:order-1">
                        <div className="sticky top-20 space-y-8">
                            {/* Rating Box */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                                <h3 className="text-lg font-bold">Đánh giá tổng quan</h3>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-6">
                                <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">
                                    {post.ratings.overall}
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">/10</span>
                                </div>
                                <div className="flex">
                                    <Star className="h-7 w-7 fill-yellow-500 text-yellow-500" />
                                    <Star className="h-7 w-7 fill-yellow-500 text-yellow-500" />
                                    <Star className="h-7 w-7 fill-yellow-500 text-yellow-500" />
                                    <Star className="h-7 w-7 fill-yellow-500 text-yellow-500" />
                                    <Star className="h-7 w-7 fill-yellow-500 text-yellow-500 opacity-50" />
                                </div>
                                </div>
                                
                                <div className="space-y-3">
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Độ lưu hương</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{post.ratings.longevity}/10</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full" style={{ width: `${post.ratings.longevity * 10}%` }}></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Độ tỏa hương</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{post.ratings.sillage}/10</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full" style={{ width: `${post.ratings.sillage * 10}%` }}></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Độc đáo</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{post.ratings.uniqueness}/10</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full" style={{ width: `${post.ratings.uniqueness * 10}%` }}></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Giá trị</span>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{post.ratings.value}/10</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-purple-600 dark:bg-purple-500 h-1.5 rounded-full" style={{ width: `${post.ratings.value * 10}%` }}></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            {/* Season Recommendation */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                                <h3 className="text-lg font-bold">Phù hợp mùa</h3>
                            </div>
                            <div className="p-5">
                                <div className="grid grid-cols-4 gap-2">
                                <div className="text-center">
                                    <div className="w-full aspect-square rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-1 relative">
                                    <span className="text-lg">🌱</span>
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent" 
                                        style={{ 
                                            borderTopColor: 'rgb(132 204 22)', 
                                            borderRightColor: 'rgb(132 204 22)',
                                            transform: `rotate(${post.ratings.seasons.spring * 36}deg)` 
                                        }}>
                                    </div>
                                    </div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Xuân</span>
                                    <span className="block text-xs font-medium">{post.ratings.seasons.spring}/10</span>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-full aspect-square rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-1 relative">
                                    <span className="text-lg">☀️</span>
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent" 
                                        style={{ 
                                            borderTopColor: 'rgb(234 179 8)', 
                                            borderRightColor: 'rgb(234 179 8)',
                                            transform: `rotate(${post.ratings.seasons.summer * 36}deg)` 
                                        }}>
                                    </div>
                                    </div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Hè</span>
                                    <span className="block text-xs font-medium">{post.ratings.seasons.summer}/10</span>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-full aspect-square rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-1 relative">
                                    <span className="text-lg">🍂</span>
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent" 
                                        style={{ 
                                            borderTopColor: 'rgb(249 115 22)', 
                                            borderRightColor: 'rgb(249 115 22)',
                                            transform: `rotate(${post.ratings.seasons.fall * 36}deg)` 
                                        }}>
                                    </div>
                                    </div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Thu</span>
                                    <span className="block text-xs font-medium">{post.ratings.seasons.fall}/10</span>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-full aspect-square rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-1 relative">
                                    <span className="text-lg">❄️</span>
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent" 
                                        style={{ 
                                            borderTopColor: 'rgb(59 130 246)', 
                                            borderRightColor: 'rgb(59 130 246)',
                                            transform: `rotate(${post.ratings.seasons.winter * 36}deg)` 
                                        }}>
                                    </div>
                                    </div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Đông</span>
                                    <span className="block text-xs font-medium">{post.ratings.seasons.winter}/10</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            {/* Product Info */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                                <h3 className="text-lg font-bold">Thông tin sản phẩm</h3>
                            </div>
                            <div className="p-5">
                                <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Thương hiệu:</span>
                                    <span className="font-medium">{post.brand}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Năm phát hành:</span>
                                    <span className="font-medium">{post.productInfo.releaseYear}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Nhà sáng tạo:</span>
                                    <span className="font-medium">{post.productInfo.perfumer}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Nồng độ:</span>
                                    <span className="font-medium">{post.productInfo.concentration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Dung tích:</span>
                                    <span className="font-medium">{post.productInfo.sizes.join(' / ')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Độ lưu hương:</span>
                                    <span className="font-medium">{post.productInfo.longevity}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Đối tượng:</span>
                                    <span className="font-medium">{post.productInfo.targetGender}</span>
                                </div>
                                
                                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                                    <div className="flex items-center mb-2">
                                    <DollarSign className="text-gray-700 dark:text-gray-300 h-5 w-5 mr-1" />
                                    <span className="font-bold">Giá tham khảo:</span>
                                    </div>
                                    <span className="block text-center text-xl text-purple-600 dark:text-purple-400 font-bold">
                                    {post.productInfo.price}
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-1">(100ml)</span>
                                    </span>
                                </div>
                                
                                <a 
                                    href="#" 
                                    className="block w-full mt-2 py-2 text-center text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-md"
                                >
                                    Mua ngay
                                </a>
                                </div>
                            </div>
                            </div>
                            
                            {/* Fragrance Notes */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                                <h3 className="text-lg font-bold">Các tầng hương</h3>
                            </div>
                            <div className="p-5">
                                <div className="space-y-6">
                                <div>
                                    <div className="flex items-center mb-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-300 to-blue-400 flex items-center justify-center mr-2 shadow-sm">
                                        <span className="text-white font-medium">T</span>
                                    </div>
                                    <h4 className="font-medium">Hương đầu</h4>
                                    </div>
                                    <ul className="flex flex-wrap gap-2">
                                    {post.notes.top.map((note, index) => (
                                        <li 
                                        key={index}
                                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                                        >
                                        {note}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <div className="flex items-center mb-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-300 to-red-400 flex items-center justify-center mr-2 shadow-sm">
                                        <span className="text-white font-medium">M</span>
                                    </div>
                                    <h4 className="font-medium">Hương giữa</h4>
                                    </div>
                                    <ul className="flex flex-wrap gap-2">
                                    {post.notes.mid.map((note, index) => (
                                        <li 
                                        key={index}
                                        className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-full text-sm"
                                        >
                                        {note}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <div className="flex items-center mb-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-purple-400 flex items-center justify-center mr-2 shadow-sm">
                                        <span className="text-white font-medium">B</span>
                                    </div>
                                    <h4 className="font-medium">Hương cuối</h4>
                                    </div>
                                    <ul className="flex flex-wrap gap-2">
                                    {showFullNotes ? (
                                        post.notes.base.map((note, index) => (
                                        <li 
                                            key={index}
                                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                                        >
                                            {note}
                                        </li>
                                        ))
                                    ) : (
                                        <>
                                        {post.notes.base.slice(0, 2).map((note, index) => (
                                            <li 
                                            key={index}
                                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                                            >
                                            {note}
                                            </li>
                                        ))}
                                        {post.notes.base.length > 2 && (
                                            <button 
                                            onClick={() => setShowFullNotes(true)}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30"
                                            >
                                            +{post.notes.base.length - 2} khác
                                            </button>
                                        )}
                                        </>
                                    )}
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        {/* Main Content */}
                        <div className="lg:col-span-2 order-1 lg:order-2">
                        {/* Tab Navigation */}
                        <div className="flex border-b border-gray-200 dark:border-gray-800 mb-6">
                            <button
                            className={`px-4 py-2 font-medium text-sm ${
                                activeTab === 'description'
                                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                                : 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                            }`}
                            onClick={() => setActiveTab('description')}
                            >
                            Bài đánh giá
                            </button>
                            <button
                            className={`px-4 py-2 font-medium text-sm ${
                                activeTab === 'comments'
                                ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                                : 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                            }`}
                            onClick={() => setActiveTab('comments')}
                            >
                            Bình luận
                            <span className="ml-1 text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                                {post.comments}
                            </span>
                            </button>
                        </div>
                        
                        {/* Article Content - Description Tab */}
                        {activeTab === 'description' && (
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2>Giới thiệu</h2>
                            <p>
                                Dior Sauvage đã là một trong những dòng nước hoa nam được yêu thích nhất trên thị trường kể từ khi ra mắt vào năm 2015. Và đến năm 2021, Dior đã cho ra mắt phiên bản mạnh mẽ nhất của dòng sản phẩm này: <strong>Dior Sauvage Elixir</strong>. Phiên bản cô đặc với nồng độ Parfum Extrait cao cấp này đã nhanh chóng trở thành hiện tượng trên thị trường nước hoa cao cấp.
                            </p>
                            
                            <p>
                                Trong bài đánh giá này, chúng ta sẽ cùng khám phá xem liệu phiên bản Elixir 2025 có xứng đáng với mức giá cao ngất ngưởng của nó hay không. Là một người đã sử dụng gần như tất cả các phiên bản của dòng Sauvage, tôi đã dành thời gian trải nghiệm Elixir trong nhiều bối cảnh khác nhau để có thể đưa ra đánh giá khách quan nhất.
                            </p>
                            
                            <figure>
                                <img 
                                src="/pefume-place-holder.webp" 
                                alt="Dior Sauvage Elixir Bottle" 
                                className="rounded-xl"
                                />
                                <figcaption className="text-center text-gray-500 dark:text-gray-400 text-sm">Thiết kế chai Dior Sauvage Elixir 2025</figcaption>
                            </figure>
                            
                            <h2>Thiết kế và trình bày</h2>
                            <p>
                                Chai nước hoa được thiết kế tinh xảo với thân chai màu xanh cobalt đậm đặc trưng của dòng Sauvage, nhưng phiên bản Elixir 2025 được nâng cấp với nắp kim loại mạ vàng 18K và chi tiết khắc laser tinh tế. Điểm nhấn là dải ruy-băng màu đen quấn quanh cổ chai, tạo nên vẻ sang trọng và đẳng cấp.
                            </p>
                            
                            <p>
                                Hộp đựng sản phẩm cũng được thiết kế lại với chất liệu cao cấp hơn, logo dập nổi và các chi tiết hoàn thiện tinh tế. Chỉ riêng việc cầm chai nước hoa trên tay đã mang lại cảm giác sang trọng và xứng đáng với mức giá của nó.
                            </p>
                            
                            <h2>Mùi hương</h2>
                            <h3>Hương đầu</h3>
                            <p>
                                Dior Sauvage Elixir mở đầu với sự bùng nổ của quả quýt tươi mát, kết hợp cùng lavender và bạch đậu khấu tạo nên một khởi đầu sống động và đầy năng lượng. Điều thú vị là dù giữ lại DNA cơ bản của dòng Sauvage, nhưng Elixir mang đến cảm giác sang trọng và phức tạp hơn hẳn ngay từ những nốt hương đầu tiên.
                            </p>
                            
                            <h3>Hương giữa</h3>
                            <p>
                                Khi hương đầu dần dịu đi, trái tim của Elixir lộ diện với sự kết hợp tuyệt vời giữa nhục đậu khấu, quế và hương thơm Fougère đặc trưng. Sự ấm áp của các nốt hương gia vị tạo nên chiều sâu đáng kinh ngạc, mang đến cảm giác nam tính, trưởng thành nhưng không kém phần quyến rũ.
                            </p>
                            
                            <h3>Hương cuối</h3>
                            <p>
                                Hương cuối của Elixir là điểm khiến tôi thực sự ấn tượng. Sự kết hợp giữa hổ phách, gỗ đàn hương, hương licorice và nhựa cây Labdanum tạo nên một hậu vị ấm áp, gỗ thơm và kéo dài đáng kinh ngạc. Đây chính là điểm khác biệt lớn nhất giữa Elixir và các phiên bản Sauvage khác - sự phong phú và chiều sâu của tầng hương cuối.
                            </p>
                            
                            <h2>Độ lưu hương và tỏa hương</h2>
                            <p>
                                Là một Parfum Extrait với nồng độ tinh dầu cao, Dior Sauvage Elixir có độ lưu hương cực kỳ ấn tượng. Trong quá trình test, tôi có thể cảm nhận rõ mùi hương trên da sau hơn 12 giờ, và thậm chí là trên quần áo sau 24 giờ. Đây là một trong những nước hoa có độ lưu hương tốt nhất mà tôi từng trải nghiệm.
                            </p>
                            
                            <p>
                                Về độ tỏa hương, Elixir tỏa hương vừa phải và tập trung. Không quá mạnh mẽ như một số nước hoa Ả Rập, nhưng đủ để người xung quanh cảm nhận được sự hiện diện của bạn trong khoảng cách gần. Điều này làm cho Elixir trở nên lịch sự và phù hợp với môi trường văn phòng hoặc các buổi hẹn hò.
                            </p>
                            
                            <h2>Phù hợp với mùa nào và dịp nào?</h2>
                            <p>
                                Với hương thơm ấm áp và đậm đà, Dior Sauvage Elixir phù hợp nhất với thời tiết mát mẻ của mùa thu và mùa đông. Tuy nhiên, do sự tươi mát từ các nốt hương đầu, nó vẫn có thể được sử dụng trong những ngày xuân mát mẻ hoặc những đêm hè.
                            </p>
                            
                            <p>
                                Về các dịp sử dụng, Elixir khá linh hoạt. Nó đủ sang trọng cho các buổi tiệc tối, đủ lịch sự cho môi trường công sở, và đủ quyến rũ cho các buổi hẹn hò quan trọng. Tuy nhiên, với mức giá cao và mùi hương đậm đà, tôi sẽ không đề xuất nó cho các hoạt động thể thao hoặc những ngày hè nóng bức.
                            </p>
                            
                            <figure>
                                <img 
                                src="/pefume-place-holder.webp" 
                                alt="Dior Sauvage Elixir Occasions" 
                                className="rounded-xl"
                                />
                                <figcaption className="text-center text-gray-500 dark:text-gray-400 text-sm">Sauvage Elixir phù hợp với những dịp quan trọng và thời tiết mát mẻ</figcaption>
                            </figure>
                            
                            <h2>Giá trị so với giá tiền</h2>
                            <p>
                                Không thể phủ nhận rằng Dior Sauvage Elixir là một trong những nước hoa designer đắt nhất trên thị trường, với mức giá khoảng 3.590.000 VNĐ cho 100ml. Tuy nhiên, với chất lượng, độ lưu hương và sự độc đáo của nó, tôi cho rằng đây vẫn là một khoản đầu tư hợp lý.
                            </p>
                            
                            <p>
                                So với nhiều nước hoa niche có mức giá tương tự hoặc cao hơn, Elixir mang lại chất lượng tương đương hoặc thậm chí còn tốt hơn. Hơn nữa, do độ lưu hương cao, bạn sẽ không cần phải xịt nhiều và chai nước hoa sẽ dùng được lâu hơn.
                            </p>
                            
                            <h2>Kết luận</h2>
                            <p>
                                Dior Sauvage Elixir là một kiệt tác trong thế giới nước hoa nam. Nó giữ lại DNA cơ bản của dòng Sauvage nhưng nâng cấp lên một tầm cao mới với sự phức tạp, độ lưu hương và sự sang trọng. Mặc dù có mức giá cao, nhưng chất lượng và trải nghiệm mà nó mang lại hoàn toàn xứng đáng.
                            </p>
                            
                            <p>
                                Nếu bạn đang tìm kiếm một mùi hương nam tính, sang trọng và kéo dài cả ngày, Dior Sauvage Elixir là một lựa chọn tuyệt vời. Nó là minh chứng cho việc Dior vẫn đang không ngừng cải tiến và nâng cao chất lượng của các dòng sản phẩm nước hoa của mình.
                            </p>
                            
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                                <h3 className="text-purple-800 dark:text-purple-300 mb-3">Điểm cộng</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>Độ lưu hương và tỏa hương cực kỳ ấn tượng</li>
                                <li>Mùi hương sang trọng, nam tính và quyến rũ</li>
                                <li>Thiết kế chai và hộp đựng cao cấp</li>
                                <li>Phù hợp với nhiều dịp sử dụng</li>
                                </ul>
                                
                                <h3 className="text-purple-800 dark:text-purple-300 mt-4 mb-3">Điểm trừ</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>Mức giá cao</li>
                                <li>Có thể quá đậm đà cho thời tiết nóng</li>
                                <li>Không thực sự độc đáo nếu bạn đã dùng các phiên bản Sauvage khác</li>
                                </ul>
                            </div>
                            
                            <h2>Về tác giả</h2>
                            <p>
                                Bài đánh giá này được viết bởi Trần Minh Tuấn, chuyên gia nước hoa với hơn 8 năm kinh nghiệm trong ngành. Tôi đã trải nghiệm và đánh giá hơn 500 loại nước hoa khác nhau và luôn cố gắng mang đến những đánh giá khách quan, chi tiết và hữu ích cho độc giả.
                            </p>
                            </div>
                        )}
                        
                        {/* Comments Tab */}
                        {activeTab === 'comments' && (
                            <div>
                            <h2 className="text-2xl font-bold mb-6">Bình luận ({post.comments})</h2>
                            
                            {/* Comment Form */}
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 mb-8">
                                <h3 className="text-lg font-medium mb-4">Để lại bình luận</h3>
                                <div className="mb-4">
                                <textarea 
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    rows={4}
                                    placeholder="Viết bình luận của bạn ở đây..."
                                ></textarea>
                                </div>
                                <div className="flex justify-end">
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md">
                                    Đăng bình luận
                                </button>
                                </div>
                            </div>
                            
                            {/* Comments List */}
                            <div className="space-y-6">
                                {comments.map((comment) => (
                                <div key={comment.id} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                                    <div className="bg-white dark:bg-gray-900 p-4">
                                    <div className="flex items-start">
                                        <img 
                                        src={comment.user.image} 
                                        alt={comment.user.name} 
                                        className="w-10 h-10 rounded-full mr-3"
                                        />
                                        <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-medium">{comment.user.name}</h4>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date} • {comment.time}</span>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                                            {comment.content}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm">
                                            <button className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                                            Trả lời
                                            </button>
                                            <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-500">
                                            <Heart size={14} className="mr-1" />
                                            <span>{comment.likes}</span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    {/* Replies */}
                                    {comment.replies && comment.replies.length > 0 && (
                                    <div className="bg-gray-50 dark:bg-gray-850 border-t border-gray-200 dark:border-gray-800">
                                        {comment.replies.map((reply) => (
                                        <div key={reply.id} className="p-4 pl-12 border-t border-gray-200 dark:border-gray-800 first:border-t-0">
                                            <div className="flex items-start">
                                            <img 
                                                src={reply.user.image} 
                                                alt={reply.user.name} 
                                                className="w-8 h-8 rounded-full mr-3"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-medium">
                                                    {reply.user.name}
                                                    {reply.user.isAuthor && (
                                                    <span className="ml-2 text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                                                        Tác giả
                                                    </span>
                                                    )}
                                                </h4>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">{reply.date} • {reply.time}</span>
                                                </div>
                                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                                {reply.content}
                                                </p>
                                                <div className="flex items-center gap-4 text-sm">
                                                <button className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                                                    Trả lời
                                                </button>
                                                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-500">
                                                    <Heart size={14} className="mr-1" />
                                                    <span>{reply.likes}</span>
                                                </button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    )}
                                </div>
                                ))}
                                
                                <button className="w-full py-3 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors font-medium">
                                Xem thêm bình luận
                                </button>
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                    
                    {/* Author Info */}
                    <div id="author" className="max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 mt-16 pt-12 mb-16">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <img 
                                src={post.author.image} 
                                alt={post.author.name} 
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{post.author.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">Chuyên gia nước hoa</p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {post.author.bio}
                                </p>
                                <div className="flex space-x-3">
                                <a href={post.author.social.instagram} className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
                                    Instagram
                                </a>
                                <a href={post.author.social.youtube} className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
                                    YouTube
                                </a>
                                <a href={post.author.social.facebook} className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium">
                                    Facebook
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </article>
                
                {/* Related Posts */}
                <section className="bg-gray-50 dark:bg-gray-900 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Bài viết liên quan</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {post.relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full group">
                            <div className="relative overflow-hidden">
                            <img 
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                <a href="#">{relatedPost.title}</a>
                            </h3>
                            <div className="mt-auto flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                <span>{relatedPost.date}</span>
                                <span>{relatedPost.readTime} đọc</span>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </section>
                
                {/* Post Navigation */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto flex justify-between border-t border-gray-200 dark:border-gray-800 pt-8">
                        <a href="#" className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                        <ChevronLeft size={20} className="mr-1" />
                        <span className="hidden sm:inline">Bài trước:</span>
                        <span className="sm:ml-1">Chanel No.5</span>
                        </a>
                        <a href="#" className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                        <span className="sm:mr-1">Baccarat Rouge 540</span>
                        <span className="hidden sm:inline">:Bài tiếp theo</span>
                        <ChevronRight size={20} className="ml-1" />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <section className="bg-gradient-to-r from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-950 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Đăng ký nhận bản tin</h2>
                    <p className="text-purple-100 mb-6">
                        Nhận thông báo về các bài đánh giá nước hoa mới nhất và khuyến mãi đặc biệt trực tiếp vào email của bạn.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                        type="email" 
                        placeholder="Email của bạn" 
                        className="flex-1 px-4 py-3 rounded-lg border border-purple-400/30 bg-white/10 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="px-6 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white shadow-md">
                        Đăng ký
                        </button>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </div>
  );
};

export default BlogPostDetail;