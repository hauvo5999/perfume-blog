import React, { useState } from 'react'

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="relative z-10 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z" />
                    <path d="M8 8c-1.36 1.33-3.15 1.27-4.2.2a2.7 2.7 0 0 1 0-3.81l.38-.4-.4-.4a2.7 2.7 0 0 1 0-3.82C4.85.73 6.64.67 8 2l4 4-4 4z" />
                    </svg>
                    <span className="ml-2 text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    SCENT STORIES
                    </span>
                </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Trang chủ</a>
                <a href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Nước hoa nam</a>
                <a href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Nước hoa nữ</a>
                <a href="#" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Thương hiệu</a>
                <a href="/blog" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Blog</a>
                </nav>

                <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative hidden sm:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    </div>
                    <input
                    type="search"
                    className="py-2 pl-10 pr-4 w-full rounded-full bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-purple-600 focus:bg-white dark:focus:bg-gray-900 text-sm"
                    placeholder="Tìm kiếm..."
                    />
                </div>

                {/* Auth buttons */}
                <div className="hidden sm:flex items-center space-x-3">
                    <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
                    Đăng nhập
                    </a>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-sm">
                    Đăng ký
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="md:hidden flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="sr-only">Mở menu</span>
                    {mobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
            <div className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800">
                    Trang chủ
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Nước hoa nam
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Nước hoa nữ
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Thương hiệu
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Blog
                </a>
                <div className="mt-4 flex flex-col space-y-3 px-3">
                    <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md">
                    Đăng nhập
                    </a>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md">
                    Đăng ký
                    </a>
                </div>
                </div>
            </div>
            )}
        </header>
    )
}

export default Header
