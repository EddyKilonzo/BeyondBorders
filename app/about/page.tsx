import { ArrowLeft, Users, Target, Heart, Globe, Award, Briefcase, Shield, BookOpen, Handshake, Facebook, Twitter, Instagram, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
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
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
                  Beyond Borders
                </span>
                <div className="text-xs text-sky-400 font-medium">Refugee-Led Impact</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="relative group py-2 hover:text-sky-400 transition-colors">
                <span>Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-transparent group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="relative group py-2">
                <span className="text-sky-400 font-medium">Who We Are</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-transparent"></div>
              </Link>
              <Link href="/projects" className="relative group py-2 hover:text-sky-400 transition-colors">
                <span>Projects</span>
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

      {/* Dynamic Hero Section */}
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
            <Badge className="mb-6 bg-sky-400/20 text-sky-400 border-sky-400/30 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Who We{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Are</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              A <span className="text-sky-400 font-semibold">refugee-led nonprofit</span> bridging gaps in aid and
              advocacy, transforming lives through community-driven solutions.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Target className="w-4 h-4 mr-2" />
                Our Vision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Reclaiming{" "}
                <span className="bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
                  Rights & Futures
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Displaced communities reclaim their rights and futures through community-designed programs and systemic
                change that addresses root causes while building sustainable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-sky-400/20 text-primary border-sky-400/30 px-4 py-2">Community-Led</Badge>
                <Badge className="bg-blue-600/20 text-muted-foreground border-blue-600/30 px-4 py-2">Sustainable Impact</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">Systemic Change</Badge>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="relative">
                <img
                  src="/3.webp"
                  alt="Community empowerment meeting and leadership"
                  className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-2xl p-4 text-white">
                    <p className="font-semibold">"Every voice matters in building our future"</p>
                    <p className="text-sm opacity-80">- Community Leader</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section 
        className="py-20 bg-cover bg-center bg-fixed bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: 'url("/4.webp")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">Our Methodology</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-sky-400">Approach</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Combining grassroots wisdom with strategic action for maximum impact
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 modern-card-hover shadow-2xl hover:shadow-sky-500/25 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-sky-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Community-Designed Programs</h3>
                  <p className="text-white/80 leading-relaxed">
                    Our programs are designed by and for the communities we serve, ensuring they address real needs and
                    build on existing strengths while fostering local ownership.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 modern-card-hover shadow-2xl hover:shadow-sky-500/25 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-600 to-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Systemic Change</h3>
                  <p className="text-white/80 leading-relaxed">
                    We work to address root causes of displacement and marginalization through advocacy, policy change,
                    and building sustainable systems for long-term impact.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Core Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What{" "}
              <span className="bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
                Drives Us
              </span>
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Dignity First",
                description:
                  "Every person deserves to be treated with dignity and respect, regardless of their status or circumstances. We center human dignity in all our work.",
                color: "from-sky-400 to-blue-500",
              },
              {
                icon: Users,
                title: "Community Leadership",
                description:
                  "Those with lived experience are best positioned to lead solutions for their communities. We amplify voices and support local leadership.",
                color: "from-blue-600 to-sky-500",
              },
              {
                icon: Target,
                title: "Sustainable Impact",
                description:
                  "We focus on long-term solutions that build resilience and self-reliance, creating lasting change that communities can sustain and grow.",
                color: "from-slate-900 to-blue-800",
              },
              {
                icon: Shield,
                title: "Inclusive Approach",
                description:
                  "We work across borders and boundaries to create inclusive solutions for all, recognizing that diversity strengthens our collective impact.",
                color: "from-blue-600 to-slate-900",
              },
            ].map((value, index) => (
              <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                <Card
                  className="modern-card-hover bg-card border-0 shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                >
                <CardContent className="p-8 flex items-start space-x-6">
                  <div
                    className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">Join Our Mission</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a <span className="text-sky-400">Difference?</span>
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Join us in creating lasting change for displaced communities through dignity, justice, and sustainable
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-4 rounded-full modern-btn font-semibold"
            >
              <Link href="/contact">
                <Handshake className="mr-2 h-5 w-5" />
                Get Involved
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 rounded-full text-lg modern-btn glass-effect bg-transparent"
            >
              <Link href="/projects">
                <Target className="mr-2 h-5 w-5" />
                See Our Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
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
                  <span className="text-2xl font-bold">Beyond Borders</span>
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
                <Link href="/" className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200">
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="block hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
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
