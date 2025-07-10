import { ArrowLeft, Briefcase, Shield, Leaf, Heart, Globe, Users, Droplets, Stethoscope, Facebook, Twitter, Instagram, Mail, Linkedin, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Counter } from "@/components/counter"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Economic Empowerment",
      icon: Briefcase,
      description: "Breaking the cycle of poverty through vocational training and microfinance programs. We provide skills development in high-demand trades and support entrepreneurs with flexible loans and business mentorship.",
      stats: "500+ entrepreneurs trained",
      color: "bg-slate-900",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-slate-900 to-blue-800",
      image: "/2.webp",
    },
    {
      title: "Social Justice",
      icon: Shield,
      description: "Creating safe spaces and community transformation to eliminate gender-based violence and harmful practices. We combine immediate protection with long-term education and cultural change.",
      stats: "300+ survivors supported",
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-blue-600 to-sky-500",
      image: "/6.webp",
    },
    {
      title: "Climate Resilience",
      icon: Leaf,
      description: "Building environmental sustainability through innovative agriculture and conservation. We help communities adapt to climate change with drought-resistant crops and renewable energy solutions.",
      stats: "1,200+ households reached",
      color: "bg-green-600",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-green-600 to-emerald-500",
      image: "/po2.jpg",
    },
    {
      title: "Sexual & Reproductive Health Rights",
      icon: Heart,
      description: "Ensuring health access through mobile clinics and community education. We provide family planning, maternal health support, and comprehensive reproductive health services.",
      stats: "3,000+ people served yearly",
      color: "bg-pink-600",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-pink-600 to-rose-500",
      image: "/5.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <img
                  src="/logo_black_bg.jpg"
                  alt="Beyond Borders Logo"
                  className="h-8 w-8 rounded-lg object-cover"
                />
              </div>
              <span className="text-xl font-bold">Beyond Borders</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-sky-400 transition-colors">
                Who We Are
              </Link>
              <Link href="/projects" className="text-sky-400">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-sky-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-sky-400 transition-colors">
                Join Us
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Button className="hidden md:block bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                Donate Now
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: 'url("/2.webp")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8 animate-slide-in-left">
            <Button
              asChild
              variant="ghost"
              className="text-white/80 hover:text-sky-400 p-0 mr-4 glass-effect rounded-full px-4 py-2"
            >
              <Link href="/">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <ScrollAnimation direction="bottom" className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-white leading-tight">Our Projects</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/95 font-normal px-4">
              Community-led programs that address root causes and create lasting change across four key areas.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                <Card
                  className="bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 backdrop-blur-sm hover:-translate-y-2 h-full"
                >
                  {/* Hero Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${project.accent} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}>
                        <project.icon className="h-6 w-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8 sm:p-10 relative h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 drop-shadow-sm leading-tight">
                          {project.title}
                        </h3>
                        <div className="text-sm font-semibold text-primary bg-primary/20 border border-primary/30 px-4 py-2 rounded-full shadow-md backdrop-blur-sm inline-block">
                          {project.stats}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-loose text-base sm:text-lg flex-1 font-normal tracking-wide">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
            </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Project Success Story */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Award className="w-4 h-4 mr-2" />
                Success Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                From{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Challenge to Change
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our community-led approach has transformed lives and created sustainable solutions that ripple through entire communities, proving that local knowledge combined with strategic support can overcome even the most complex challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-lg">20 communities transformed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-lg">500+ entrepreneurs trained</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg">3,000+ people served yearly</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/ac.jpg"
                  alt="Community members celebrating project success and sustainable development"
                  className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-2xl p-4 text-white backdrop-blur-sm">
                    <p className="font-semibold">"Together we build stronger communities"</p>
                    <p className="text-sm opacity-80">- Project Participant</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Users,
                number: 500,
                suffix: "+",
                label: "Lives Empowered",
                color: "bg-slate-900",
              },
              {
                icon: Shield,
                number: 20,
                suffix: "",
                label: "Communities",
                color: "bg-blue-600",
              },
              {
                icon: Droplets,
                number: 1200,
                suffix: "",
                label: "Households",
                color: "bg-green-600",
              },
              {
                icon: Stethoscope,
                number: 3000,
                suffix: "+",
                label: "Health Services",
                color: "bg-pink-600",
              },
            ].map((metric, index) => (
              <ScrollAnimation key={index} direction="bottom" delay={index * 200}>
                <Card
                  className="text-center hover:shadow-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-card shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 backdrop-blur-sm group hover:-translate-y-2"
                >
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-primary/20">
                      <metric.icon className="h-7 w-7 text-primary-foreground drop-shadow-lg" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-3 drop-shadow-sm leading-tight">
                      <Counter end={metric.number} suffix={metric.suffix} duration={2000 + index * 200} />
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-muted-foreground leading-relaxed">{metric.label}</div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">Support Our Projects</h2>
          <p className="text-lg sm:text-xl mb-10 opacity-95 leading-relaxed font-medium max-w-2xl mx-auto">
            Your support helps us expand these life-changing programs to reach more communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sky-400 text-white hover:bg-sky-400/90 font-semibold px-8 py-3">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-1 rounded-xl shadow-lg">
                  <img
                    src="/logo_black_bg.jpg"
                    alt="Beyond Borders Logo"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">Beyond Borders</span>
                  <div className="text-sm text-sky-400">Refugee-Led Impact</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border.
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
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-sky-400">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block hover:text-sky-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block hover:text-sky-400 transition-colors">
                  Who We Are
                </Link>
                <Link href="/blog" className="block hover:text-sky-400 transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="block hover:text-sky-400 transition-colors">
                  Contact
                </Link>
                <Link href="/contact" className="block hover:text-sky-400 transition-colors">
                  Donate
                </Link>
              </div>
            </div>
            <div>
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
            </div>
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
