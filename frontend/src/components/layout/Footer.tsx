import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z" />
                    <path d="M8 8c-1.36 1.33-3.15 1.27-4.2.2a2.7 2.7 0 0 1 0-3.81l.38-.4-.4-.4a2.7 2.7 0 0 1 0-3.82C4.85.73 6.64.67 8 2l4 4-4 4z" />
                    </svg>
                    <span className="ml-2 text-xl font-bold">SCENT STORIES</span>
                </div>
                <p className="text-gray-400 mb-4">
                    Nơi chia sẻ những câu chuyện đầy cảm xúc về mùi hương và những đánh giá chuyên sâu về nước hoa.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                    </a>
                </div>
                </div>

                {/* Quick Links */}
                <div>
                <h3 className="text-lg font-bold mb-4">Khám phá</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Nước hoa nam</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Nước hoa nữ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Nước hoa unisex</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Thương hiệu</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Hướng dẫn</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
                </ul>
                </div>

                {/* Support */}
                <div>
                <h3 className="text-lg font-bold mb-4">Hỗ trợ</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Về chúng tôi</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Chính sách bảo mật</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Điều khoản sử dụng</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
                </ul>
                </div>

                {/* Contact */}
                <div>
                <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
                <address className="text-gray-400 not-italic space-y-2">
                    <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Tầng 8, Tòa nhà The One, Quận 1, TP. Hồ Chí Minh
                    </p>
                    <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@scentstories.vn
                    </p>
                    <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (028) 1234 5678
                    </p>
                </address>
                </div>
            </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                    &copy; 2025 Scent Stories. Tất cả quyền được bảo lưu.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Chính sách bảo mật
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Điều khoản sử dụng
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Cookie
                    </a>
                </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
