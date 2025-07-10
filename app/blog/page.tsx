"use client"

import { ArrowLeft, Calendar, User, Clock, Tag, Search, ArrowRight, Facebook, Twitter, Instagram, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState, useMemo, useEffect } from "react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side to avoid hydration issues
  useEffect(() => {
    setIsClient(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "Building Economic Resilience: Success Stories from Our Entrepreneurship Program",
      excerpt: "Discover how our vocational training and microfinance programs are transforming lives and creating sustainable livelihoods in refugee communities.",
      author: "Amina Hassan",
      date: "July 5, 2025",
      readTime: "5 min read",
      category: "Economic Justice",
      image: "/2.webp",
      tags: ["Entrepreneurship", "Skills Training", "Microfinance"],
      featured: true,
    },
    {
      id: 2,
      title: "Breaking the Silence: Our Fight Against Gender-Based Violence",
      excerpt: "A deep dive into our comprehensive approach to ending harmful practices and supporting survivors through community-led initiatives.",
      author: "Dr. Fatima Al-Rashid",
      date: "July 2, 2025",
      readTime: "7 min read",
      category: "Social Justice",
      image: "/6.webp",
      tags: ["GBV", "Women's Rights", "Community Healing"],
      featured: false,
    },
    {
      id: 3,
      title: "Climate Adaptation: Innovative Solutions for Water Security",
      excerpt: "How our climate resilience projects are helping communities adapt to changing weather patterns and secure water access.",
      author: "Omar Jama",
      date: "June 28, 2025",
      readTime: "4 min read",
      category: "Climate Resilience",
      image: "/po2.jpg",
      tags: ["Climate Change", "Water Security", "Agriculture"],
      featured: false,
    },
    {
      id: 4,
      title: "Maternal Health Revolution: Mobile Clinics Transform Healthcare Access",
      excerpt: "The impact of our mobile health clinics in providing essential reproductive health services to remote communities.",
      author: "Nurse Khadija Mohamed",
      date: "June 25, 2025",
      readTime: "6 min read",
      category: "Health Rights",
      image: "/5.webp",
      tags: ["Maternal Health", "Mobile Clinics", "Healthcare Access"],
      featured: false,
    },
    {
      id: 5,
      title: "Youth Leadership: The Next Generation of Change-Makers",
      excerpt: "Meet the young leaders who are driving transformation in their communities through education and advocacy.",
      author: "Ahmed Ali",
      date: "June 22, 2025",
      readTime: "5 min read",
      category: "Youth Empowerment",
      image: "/3.webp",
      tags: ["Youth", "Leadership", "Education"],
      featured: false,
    },
    {
      id: 6,
      title: "Sustainable Agriculture: Growing Food Security in Arid Regions",
      excerpt: "Innovative farming techniques and drought-resistant crops are helping communities achieve food security despite climate challenges.",
      author: "Dr. Hassan Abdi",
      date: "June 20, 2025",
      readTime: "8 min read",
      category: "Climate Resilience",
      image: "/po5.jpg",
      tags: ["Agriculture", "Food Security", "Sustainability"],
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  
  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter(post => !post.featured)
    
    if (selectedCategory !== "All") {
      posts = posts.filter(post => post.category === selectedCategory)
    }
    
    if (searchQuery) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    return posts
  }, [blogPosts, selectedCategory, searchQuery])

  // Update categories with dynamic counts
  const categories = useMemo(() => {
    const categoryCount = blogPosts.reduce((acc, post) => {
      if (!post.featured) {
        acc[post.category] = (acc[post.category] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    return [
      { name: "All", count: blogPosts.filter(post => !post.featured).length },
      { name: "Economic Justice", count: categoryCount["Economic Justice"] || 0 },
      { name: "Social Justice", count: categoryCount["Social Justice"] || 0 },
      { name: "Climate Resilience", count: categoryCount["Climate Resilience"] || 0 },
      { name: "Health Rights", count: categoryCount["Health Rights"] || 0 },
      { name: "Youth Empowerment", count: categoryCount["Youth Empowerment"] || 0 },
    ]
  }, [blogPosts])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <img
                  src="/logo_black_bg.jpg"
                  alt="Beyond Borders Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">Beyond Borders</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-sky-400 transition-colors">
                Who We Are
              </Link>
              <Link href="/projects" className="hover:text-sky-400 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-sky-400">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-sky-400 transition-colors">
                Join Us
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Button className="hidden sm:block bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm px-3 py-1.5 sm:text-base sm:px-4 sm:py-2">
                Donate Now
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/2.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-white/80 hover:text-sky-400 p-0 mr-2 sm:mr-4 glass-effect rounded-full px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2"
            >
              <Link href="/">
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm lg:text-base">Back to Home</span>
              </Link>
            </Button>
          </div>

          <ScrollAnimation direction="bottom" className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white leading-tight px-2 sm:px-0">
              Stories of <span className="text-sky-400">Impact</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed text-white/90 font-light px-4 sm:px-6 lg:px-0">
              Insights, updates, and stories from the frontlines of refugee-led change
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-12">
            {/* Sidebar - Shows first on mobile */}
            <div className="xl:col-span-1 order-first xl:order-last">
              <div className="sticky-sidebar space-y-4 sm:space-y-6 xl:space-y-8">
                <ScrollAnimation direction="right">
                  {/* Search */}
                  <Card className="shadow-lg sm:shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300 mb-4 sm:mb-6 xl:mb-8 sticky-card">
                    <CardContent className="p-3 sm:p-4 xl:p-6">
                      <h3 className="text-base sm:text-lg xl:text-xl font-bold text-foreground mb-3 sm:mb-4 xl:mb-6">Search Articles</h3>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        <Input
                          placeholder="Search articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 py-2 sm:py-3 bg-background border-2 border-border focus:border-primary/50 rounded-xl shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base"
                        />
                        {searchQuery && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1 text-muted-foreground hover:text-foreground"
                          >
                            ×
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Categories */}
                  <Card className="shadow-lg sm:shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300 mb-4 sm:mb-6 xl:mb-8 sticky-card">
                    <CardContent className="p-3 sm:p-4 xl:p-6">
                      <h3 className="text-base sm:text-lg xl:text-xl font-bold text-foreground mb-3 sm:mb-4 xl:mb-6">Categories</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-2 xl:gap-3">
                        {categories.map((category) => (
                          <Button
                            key={category.name}
                            variant={selectedCategory === category.name ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setSelectedCategory(category.name)}
                            className={`w-full justify-between text-left transition-all duration-300 py-2 xl:py-3 text-xs sm:text-sm ${
                              selectedCategory === category.name
                                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                                : "hover:bg-primary/10"
                            }`}
                          >
                            <span className="truncate">{category.name}</span>
                            <span className="text-xs bg-muted px-2 py-0.5 rounded-full ml-2 flex-shrink-0">
                              {category.count}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="bg-primary text-primary-foreground shadow-lg sm:shadow-2xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 sticky-card">
                    <CardContent className="p-3 sm:p-4 xl:p-6 text-center">
                      <h4 className="text-base sm:text-lg xl:text-xl font-bold mb-3 xl:mb-4">Stay Updated</h4>
                      <p className="mb-3 sm:mb-4 xl:mb-6 opacity-90 text-xs sm:text-sm leading-relaxed">
                        Get the latest stories of impact delivered to your inbox.
                      </p>
                      <Button size="sm" className="bg-card text-card-foreground hover:bg-card/90 w-full py-2 xl:py-3 text-xs sm:text-sm">
                        Subscribe to Newsletter
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>

            {/* Main Content - Shows second on mobile */}
            <div className="xl:col-span-3 order-last xl:order-first">
              <ScrollAnimation direction="left" className="mb-6 sm:mb-8 xl:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-foreground mb-3 sm:mb-4 xl:mb-6">
                  {searchQuery || selectedCategory !== "All" ? "Search Results" : "Recent Stories"}
                </h2>
                <p className="text-base sm:text-lg xl:text-xl text-muted-foreground">
                  {searchQuery || selectedCategory !== "All" 
                    ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
                    : "Stay updated with our latest impact stories and insights"
                  }
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 xl:gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <ScrollAnimation key={post.id} direction="bottom" delay={index * 100}>
                      <Card className="group overflow-hidden bg-card border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1 h-full">
                        <Link href={`/blog/${post.id}`} className="block h-full">
                          <div className="relative h-40 sm:h-44 md:h-48 lg:h-44 xl:h-48 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-sky-400 text-white text-xs border-0 shadow-lg">
                              {post.category}
                            </Badge>
                            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                              {post.readTime}
                            </div>
                          </div>
                          <CardContent className="p-3 sm:p-4 xl:p-6 flex flex-col h-full">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span className="truncate">{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span className="hidden sm:inline">{post.date}</span>
                                <span className="sm:hidden">{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                              </div>
                            </div>
                            <h3 className="text-base sm:text-lg xl:text-xl font-bold text-foreground mb-2 sm:mb-3 leading-tight group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-1 text-sm sm:text-base line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                              <div className="flex flex-wrap gap-1">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium pointer-events-none flex-shrink-0 text-xs sm:text-sm px-2 sm:px-3"
                              >
                                Read More <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    </ScrollAnimation>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 sm:py-12">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-foreground mb-3 sm:mb-4">No posts found</h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      {searchQuery ? `No posts match "${searchQuery}"` : `No posts in "${selectedCategory}" category`}
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("All")
                      }}
                      variant="outline"
                      size="sm"
                      className="text-sm"
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post - Show only when no search/filter is active */}
      {(!searchQuery && selectedCategory === "All") && featuredPost && (
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <ScrollAnimation direction="bottom" className="text-center mb-8 sm:mb-10">
              <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-sm">Featured Story</Badge>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">Latest Impact</h2>
            </ScrollAnimation>

            <ScrollAnimation direction="bottom" delay={200}>
              <Card className="overflow-hidden bg-card border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-lg group">
                <Link href={`/blog/${featuredPost.id}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-56 sm:h-64 lg:h-80 overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-sky-400 text-white border-0 shadow-lg text-xs">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="truncate">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">{featuredPost.date}</span>
                          <span className="sm:hidden">{featuredPost.date.split(' ')[0]} {featuredPost.date.split(' ')[1]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {featuredPost.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 pointer-events-none text-xs sm:text-sm px-3 sm:px-4"
                        >
                          Read More
                          <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Never Miss a Story</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Get the latest impact stories and updates from Beyond Borders delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-sky-400 focus:ring-sky-400 text-sm sm:text-base py-2 sm:py-3"
              />
              <Button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base px-4 sm:px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-white/60 mt-3 sm:mt-4">
              Join 2,000+ readers who get our monthly newsletter
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="bg-white p-1 rounded-xl shadow-lg">
                  <img
                    src="/logo_black_bg.jpg"
                    alt="Beyond Borders Logo"
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold">Beyond Borders</span>
                  <div className="text-xs sm:text-sm text-sky-400">Refugee-Led Impact</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a href="https://facebook.com/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white" />
                </a>
                <a href="https://twitter.com/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white" />
                </a>
                <a href="https://instagram.com/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white" />
                </a>
                <a href="https://linkedin.com/company/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white" />
                </a>
                <a href="mailto:info@beyondborders.org" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-sky-400">Quick Links</h3>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Home
                </Link>
                <Link href="/about" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Who We Are
                </Link>
                <Link href="/projects" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Projects
                </Link>
                <Link href="/contact" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Contact
                </Link>
                <Link href="/contact" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Donate
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-sky-400">Our Focus</h3>
              <div className="space-y-2 sm:space-y-3">
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200 text-sm sm:text-base"
                >
                  Economic Justice
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200 text-sm sm:text-base"
                >
                  Social Justice
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200 text-sm sm:text-base"
                >
                  Climate Resilience
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200 text-sm sm:text-base"
                >
                  Sexual & Reproductive Health Rights
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white/60 text-xs sm:text-sm">
                &copy; 2024 Beyond Borders. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Impact Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
