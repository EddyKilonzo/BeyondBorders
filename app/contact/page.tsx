"use client"

import { ArrowLeft, Mail, Phone, MapPin, Users, Heart, Handshake, CreditCard, Globe, Facebook, Twitter, Instagram, Linkedin, Award } from "lucide-react"
import Image from "next/image"
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
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          interest: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-background" role="main">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <Image
                  src="/logo_black_bg.jpg"
                  alt="Beyond Borders logo with black background"
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-lg object-cover"
                  priority
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
      </section> {/* Hero Section */}

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-white p-2 rounded-full shadow-lg mb-4">
              <Image
                src="/logo_black_bg.jpg"
                alt="Beyond Borders logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold">Beyond Borders</h2>
            <p className="text-sm text-sky-400 mb-2">Refugee-Led Impact</p>
            <p className="text-base text-foreground max-w-2xl leading-relaxed">
              A refugee-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/beyondborders" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-sky-400 transition">
              <Twitter />
            </a>
            <a href="https://instagram.com/beyondborders" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-pink-500 transition">
              <Instagram />
            </a>
            <a href="https://linkedin.com/company/beyondborders" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-700 transition">
              <Linkedin />
            </a>
            <a href="https://facebook.com/beyondborders" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-600 transition">
              <Facebook />
            </a>
          </div>
        </div>
      </section>
      {/* Info Section */}

      {/* Image & Description Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/po1.jpg"
              alt="Our dedicated team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Dedicated Team</h3>
            <p className="text-base leading-relaxed text-foreground">
              A passionate group of volunteers and staff committed to empowering displaced communities through advocacy, education, and direct support.
            </p>
          </div>
        </div>
      </section>
      {/* Image & Description Section */}

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom">
            <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* Email Card */}
              <div className="flex justify-center">
                <div className="bg-card p-6 rounded-lg shadow-md flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <p className="text-lg font-semibold text-foreground">Email Us</p>
                    <a href="mailto:info@beyondborders.co.ke" className="text-primary hover:text-sky-400 transition-colors duration-200">
                      info@beyondborders.co.ke
                    </a>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex justify-center items-center space-x-8">
                <Link href="https://facebook.com/yourpage" target="_blank" className="text-3xl text-gray-600 hover:text-blue-600 transition">
                  <Facebook />
                </Link>
                <Link href="https://twitter.com/yourpage" target="_blank" className="text-3xl text-gray-600 hover:text-sky-400 transition">
                  <Twitter />
                </Link>
                <Link href="https://instagram.com/yourpage" target="_blank" className="text-3xl text-gray-600 hover:text-pink-500 transition">
                  <Instagram />
                </Link>
                <Link href="https://linkedin.com/company/yourpage" target="_blank" className="text-3xl text-gray-600 hover:text-blue-700 transition">
                  <Linkedin />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-1 rounded-xl shadow-lg">
                  <Image
                    src="/logo_black_bg.jpg"
                    alt="Beyond Borders logo with black background"
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-lg object-cover"
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
