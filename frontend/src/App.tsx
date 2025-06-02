import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './styles/global.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTopButton from './components/layout/BackToTopButton'

// Lazy load pages
const HomePage = lazy(() => import('./components/pages/homepage/HomePage'))
const BlogListPage = lazy(() => import('./components/pages/blog/BlogList'))
const BlogPost = lazy(() => import('./components/pages/blog/BlogPost'))
const BlogPostDetail = lazy(() => import('./components/pages/blog/BlogPostDetail'))
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'))

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <Header />

      {/* Page content */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTopButton />
    </div>
  )
}

export default App
