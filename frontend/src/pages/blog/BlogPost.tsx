import React from 'react'
// import { useParams } from 'react-router-dom'

const BlogPost: React.FC = () => {
  // const { id } = useParams()

  // Mock data for a blog post
  const post = {
    id: 1,
    title: "Top 10 Nước Hoa Nam Được Yêu Thích Nhất 2024",
    author: "Nguyễn Văn A",
    date: "13 tháng 5, 2024",
    readTime: "8 phút đọc",
    image: "https://images.unsplash.com/photo-1619994403071-5ed8c0f7b3a1?w=1600&auto=format&fit=crop&q=60",
    content: `
      <p class="mb-4">Năm 2024 đã chứng kiến sự xuất hiện của nhiều mùi hương nam tính mới, cùng với những phiên bản cải tiến của các dòng nước hoa kinh điển. Trong bài viết này, chúng ta sẽ cùng khám phá top 10 nước hoa nam được yêu thích nhất trong năm nay.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">1. Dior Sauvage Elixir</h2>
      <p class="mb-4">Phiên bản cô đặc mạnh mẽ nhất của dòng Sauvage mang đến trải nghiệm mới mẻ với hương thơm nam tính, sang trọng. Sự kết hợp hoàn hảo giữa hương thảo mộc và gia vị tạo nên một mùi hương độc đáo, phù hợp cho cả ngày và đêm.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">2. Tom Ford Tobacco Vanille</h2>
      <p class="mb-4">Một kiệt tác của Tom Ford, kết hợp hương thuốc lá ngọt ngào với vani ấm áp. Mùi hương này tạo cảm giác sang trọng, quyến rũ và rất phù hợp cho những dịp đặc biệt.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">3. Creed Aventus</h2>
      <p class="mb-4">Vẫn giữ vị trí top trong lòng người yêu nước hoa, Aventus mang đến hương thơm của sự thành công và quyền lực. Sự kết hợp giữa hương trái cây và gỗ tạo nên một mùi hương độc đáo, khó quên.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Hướng Dẫn Chọn Nước Hoa Theo Mùa",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=60",
        excerpt: "Bí quyết chọn nước hoa phù hợp với từng mùa trong năm."
      },
      {
        id: 3,
        title: "Nước Hoa Nữ Sang Trọng Cho Mùa Hè",
        image: "https://images.unsplash.com/photo-1595425970375-3d8d1d7f9944?w=800&auto=format&fit=crop&q=60",
        excerpt: "Những mùi hương tươi mát, quyến rũ dành cho phái đẹp trong mùa hè."
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" 
           style={{ backgroundImage: `url(${post.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bài Viết Liên Quan</h3>
              <div className="space-y-6">
                {post.relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="flex space-x-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{relatedPost.title}</h4>
                      <p className="text-sm text-gray-600">{relatedPost.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost 