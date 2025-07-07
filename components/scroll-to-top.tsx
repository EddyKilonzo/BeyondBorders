"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }

  if (!showScrollTop) return null

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-sky-400 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  )
}
