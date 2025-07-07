import { ArrowLeft, Briefcase, Shield, Leaf, Heart, Globe, Users, Droplets, Stethoscope, Facebook, Twitter, Instagram, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

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
    },
    {
      title: "Social Justice",
      icon: Shield,
      description: "Creating safe spaces and community transformation to eliminate gender-based violence and harmful practices. We combine immediate protection with long-term education and cultural change.",
      stats: "300+ survivors supported",
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-blue-600 to-sky-500",
    },
    {
      title: "Climate Resilience",
      icon: Leaf,
      description: "Building environmental sustainability through innovative agriculture and conservation. We help communities adapt to climate change with drought-resistant crops and renewable energy solutions.",
      stats: "1,200+ households reached",
      color: "bg-green-600",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-green-600 to-emerald-500",
    },
    {
      title: "Sexual & Reproductive Health Rights",
      icon: Heart,
      description: "Ensuring health access through mobile clinics and community education. We provide family planning, maternal health support, and comprehensive reproductive health services.",
      stats: "3,000+ people served yearly",
      color: "bg-pink-600",
      bgColor: "bg-gradient-to-br from-card to-background",
      accent: "from-pink-600 to-rose-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-sky-400" />
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-white hover:text-sky-400 p-0 mr-4">
              <Link href="/">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl max-w-4xl leading-relaxed">
            Comprehensive, community-designed programs addressing the root causes of challenges faced by refugee communities. Our holistic approach combines immediate relief with long-term empowerment across four interconnected areas.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${project.accent} w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/20`}>
                        <project.icon className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 drop-shadow-sm">
                          {project.title}
                        </h3>
                        <div className="text-sm font-semibold text-primary bg-primary/20 border border-primary/30 px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                          {project.stats}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">Creating measurable change in refugee communities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Users,
                number: "500+",
                label: "Lives Empowered",
                color: "bg-slate-900",
              },
              {
                icon: Shield,
                number: "20",
                label: "Communities",
                color: "bg-blue-600",
              },
              {
                icon: Droplets,
                number: "1,200",
                label: "Households",
                color: "bg-green-600",
              },
              {
                icon: Stethoscope,
                number: "3,000+",
                label: "Health Services",
                color: "bg-pink-600",
              },
            ].map((metric, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-card shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 backdrop-blur-sm group hover:-translate-y-2"
              >
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-primary/20">
                      <metric.icon className="h-7 w-7 text-primary-foreground drop-shadow-lg" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2 drop-shadow-sm">{metric.number}</div>
                    <div className="text-sm font-semibold text-muted-foreground">{metric.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Projects</h2>
          <p className="text-xl mb-8 opacity-90">
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
                <div className="bg-sky-400 p-3 rounded-xl">
                  <Globe className="h-8 w-8 text-white" />
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
                <a href="#" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Facebook className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Twitter className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Instagram className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Linkedin className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
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
                <Link href="/contact" className="block hover:text-sky-400 transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block hover:text-sky-400 transition-colors">
                  Donate
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-sky-400">Our Focus</h3>
              <div className="space-y-3 text-white/80">
                <p>Economic Justice</p>
                <p>Social Justice</p>
                <p>Climate Resilience</p>
                <p>Sexual & Reproductive Health Rights</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 sm:mb-0">
                &copy; 2024 Beyond Borders. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-white/60">
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-sky-400 transition-colors">
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
