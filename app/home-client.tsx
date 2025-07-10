"use client"

import { ArrowRight, Users, Target, Globe, Heart, Play, TrendingUp, Briefcase, Award, BookOpen, Facebook, Twitter, Instagram, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Counter } from "@/components/counter"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { 
  HeroSkeleton, 
  StatsSkeleton, 
  CardSkeleton, 
  SkeletonWrapper 
} from "@/components/skeleton-loading"
import { useEffect, useState } from "react"

export function HomePageClient() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleScrollToSection = () => {
    if (mounted) {
      document.getElementById('stats-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Modern Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <img
                  src="/logo_black_bg.jpg"
                  alt="Beyond Borders Logo"
                  className="h-10 w-10 rounded-lg object-cover"
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
                  Beyond Borders
                </span>
                <div className="text-xs text-sky-400 font-medium">Refugee-Led Impact</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="relative group py-2">
                <span className="text-sky-400 font-medium">Home</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-transparent"></div>
              </Link>
              <Link href="/about" className="relative group py-2 hover:text-sky-400 transition-colors">
                <span>Who We Are</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-transparent group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/projects" className="relative group py-2 hover:text-sky-400 transition-colors">
                <span>Projects</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-transparent group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/blog" className="relative group py-2 hover:text-sky-400 transition-colors">
                <span>Blog</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-transparent group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="relative group py-2 hover:text-sky-400 transition-colors">
                <span>Join Us</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-transparent group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Button className="hidden md:block bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 modern-btn">
                Donate Now
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Revolutionary Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: 'url("/2.webp")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-sky-400 to-white bg-clip-text text-transparent animate-gradient">
                Beyond
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Borders</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white/90 font-light px-4">
              Empowering displaced communities through dignity and justice.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full modern-btn font-semibold"
              >
                <Link href="/projects">
                  <Award className="mr-2 h-5 w-5" />
                  See Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg modern-btn glass-effect bg-transparent"
              >
                <Link href="/about">
                  <Play className="mr-2 h-4 w-4" />
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleScrollToSection}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300 cursor-pointer group"
            aria-label="Scroll to next section"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/80 transition-colors duration-300"></div>
          </button>
        </div>
      </section>

      {/* Counter Stats Section */}
      <section id="stats-section" className="py-16 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Impact</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Making a <span className="text-blue-600">Real Difference</span>
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: 500, label: "Lives Transformed", suffix: "+", direction: "left" as const },
              { number: 20, label: "Communities", suffix: "", direction: "bottom" as const },
              { number: 100, label: "Hectares Restored", suffix: "+", direction: "bottom" as const },
              { number: 3000, label: "People Served", suffix: "+", direction: "right" as const },
            ].map((stat, index) => (
              <ScrollAnimation key={index} direction={stat.direction} delay={index * 200}>
                <Card className="text-center modern-card-hover bg-card border shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      <Counter end={stat.number} suffix={stat.suffix} duration={2000 + index * 200} />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground leading-tight">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Mission Cards */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Creating <span className="text-blue-600">Lasting Change</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We work across borders to address the root causes of displacement and build resilient communities.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Economic Justice",
                description: "Empowering communities through vocational training, microfinance, and sustainable livelihoods.",
                color: "from-sky-400 to-blue-500",
              },
              {
                icon: Heart,
                title: "Social Justice",
                description: "Ending harmful practices and supporting survivors through community-led initiatives.",
                color: "from-sky-400 to-blue-500",
              },
              {
                icon: Globe,
                title: "Climate Resilience",
                description: "Building adaptive capacity through sustainable agriculture and water security projects.",
                color: "from-sky-400 to-blue-500",
              },
              {
                icon: Target,
                title: "Health Rights",
                description: "Ensuring access to reproductive health services and maternal care for all.",
                color: "from-sky-400 to-blue-500",
              },
              {
                icon: Award,
                title: "Youth Empowerment",
                description: "Investing in the next generation through education and leadership development.",
                color: "from-sky-400 to-blue-500",
              },
              {
                icon: BookOpen,
                title: "Community Leadership",
                description: "Amplifying voices and supporting local leadership in refugee communities.",
                color: "from-sky-400 to-blue-500",
              },
            ].map((mission, index) => (
              <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                <Card className="modern-card-hover bg-card border-0 shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8 flex items-start space-x-4">
                    <div
                      className={`bg-gradient-to-br ${mission.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <mission.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{mission.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">Our Impact</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">Creating measurable change in refugee communities</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: TrendingUp,
                number: 500,
                label: "Entrepreneurs Trained",
                year: "2023",
                direction: "left" as const,
              },
              { number: 300, label: "Survivors Supported", year: "Yearly", icon: Heart, direction: "bottom" as const },
              { number: 100, label: "Hectares Reforested", year: "Total", icon: Globe, direction: "bottom" as const },
              { number: 3000, label: "People Served", year: "Yearly", icon: Users, direction: "right" as const },
            ].map((stat, index) => (
              <ScrollAnimation key={index} direction={stat.direction} delay={index * 200}>
                <Card className="text-center modern-card-hover bg-card border shadow-md hover:shadow-lg">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="bg-primary w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8 text-primary-foreground" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      <Counter end={stat.number} suffix="+" duration={2000 + index * 200} />
                    </div>
                    <div className="text-xs sm:text-sm lg:text-lg font-semibold text-muted-foreground mb-1 leading-tight">{stat.label}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground/80">{stat.year}</div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">Join the Movement</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
              Ready to Create <span className="text-sky-400">Lasting Change?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed px-4">
              Together, we can build a world where dignity knows no borders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 sm:px-10 py-4 rounded-full modern-btn font-semibold"
              >
                <Link href="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Get Involved Today
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 sm:px-10 py-4 rounded-full text-lg modern-btn glass-effect bg-transparent"
              >
                <Link href="/projects">
                  <Target className="mr-2 h-5 w-5" />
                  Explore Projects
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ScrollAnimation direction="left" className="sm:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-1 rounded-xl shadow-lg">
                  <img
                    src="/logo_black_bg.jpg"
                    alt="Beyond Borders Logo"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold">Beyond Borders</span>
                  <div className="text-sm text-sky-400">Refugee-Led Impact</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border, creating
                lasting change through community-driven solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Facebook className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="https://twitter.com/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Twitter className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="https://instagram.com/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Instagram className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="https://linkedin.com/company/beyondborders" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Linkedin className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="mailto:info@beyondborders.org" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Mail className="h-5 w-5 text-white group-hover:text-white" />
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="bottom" delay={200}>
              <h3 className="font-bold text-lg mb-6 text-sky-400">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="/about"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Who We Are
                </Link>
                <Link
                  href="/projects"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Donate
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={400}>
              <h3 className="font-bold text-lg mb-6 text-sky-400">Our Focus</h3>
              <div className="space-y-3">
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Economic Justice
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Social Justice
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Climate Resilience
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Sexual & Reproductive Health Rights
                </Link>
              </div>
            </ScrollAnimation>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 sm:mb-0">
                &copy; 2024 Beyond Borders. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-white/60">
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