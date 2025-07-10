import { ArrowLeft, Mail, Phone, MapPin, Users, Heart, Handshake, CreditCard, Globe, Facebook, Twitter, Instagram, Linkedin, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ContactPage() {
  const ways = [
    {
      icon: CreditCard,
      title: "Donate",
      description: "Support our programs with financial contributions",
      action: "Make a Donation",
      color: "bg-slate-900",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team and contribute your skills",
      action: "Volunteer With Us",
      color: "bg-blue-600",
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us on programs and initiatives",
      action: "Become a Partner",
      color: "bg-slate-900",
    },
    {
      icon: Heart,
      title: "Advocate",
      description: "Help us raise awareness and advocate for change",
      action: "Join Our Advocacy",
      color: "bg-blue-600",
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
              <Link href="/projects" className="hover:text-sky-400 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-sky-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sky-400">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Join Our Mission</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
              Together, we can create lasting change for displaced communities
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ways to Get Involved</h2>
            <p className="text-xl text-muted-foreground">Choose how you'd like to support our mission</p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ways.map((way, index) => (
              <ScrollAnimation key={index} direction="bottom" delay={index * 200}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-card shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25"
                >
                <CardContent className="p-6 text-center">
                  <div
                    className={`${way.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <way.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{way.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{way.description}</p>
                  <Button size="sm" className="bg-sky-400 text-white hover:bg-sky-400/90 w-full">
                    {way.action}
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Community Connection Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Handshake className="w-4 h-4 mr-2" />
                Join Our Community
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Together We{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Create Change
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Every contribution, whether through time, resources, or advocacy, helps us build stronger communities and create lasting impact for displaced families.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-lg">Volunteer opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-lg">Partnership programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg">Advocacy campaigns</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/ad.jpg"
                  alt="Community members working together and building connections"
                  className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="glass-effect rounded-2xl p-3 text-white backdrop-blur-sm">
                    <p className="font-semibold text-sm">Join Our Mission</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation direction="left">
              <Card className="shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Ready to make a difference? Send us a message and we'll get back to you soon.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <select
                      id="interest"
                      className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    >
                      <option value="">Select an option</option>
                      <option value="donate">Making a donation</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partner">Partnership opportunities</option>
                      <option value="advocacy">Advocacy work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about how you'd like to get involved..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Contact Information & Stats */}
            <ScrollAnimation direction="right">
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground">info@beyondborders.org</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Location</h4>
                        <p className="text-muted-foreground">Kenya-Somalia Border Region</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Impact Stats */}
                <Card className="bg-gradient-to-br from-card to-background border shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Our Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                        <div className="text-sm text-muted-foreground">Lives Changed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1">20</div>
                        <div className="text-sm text-muted-foreground">Communities</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1">100+</div>
                        <div className="text-sm text-muted-foreground">Hectares Restored</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1">3,000+</div>
                        <div className="text-sm text-muted-foreground">People Served</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action */}
                <Card className="bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold mb-3">Ready to Make a Difference?</h4>
                    <p className="mb-4 opacity-90">Every contribution, big or small, helps us create lasting change.</p>
                    <Button size="lg" className="bg-card text-card-foreground hover:bg-card/90 w-full">
                      Start Your Journey
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
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
                <Link href="/projects" className="block hover:text-sky-400 transition-colors">
                  Projects
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
