import React from 'react'

const BackToTopButton: React.FC = () => {
    return (
        <button 
            className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-colors duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    )
}

export default BackToTopButton
