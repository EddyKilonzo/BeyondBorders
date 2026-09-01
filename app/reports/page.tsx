"use client"

import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Instagram,
  Layers,
  Mail,
  MapPin,
  Search,
} from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import { PdfPreview } from "@/components/pdf-preview"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ThemeToggle } from "@/components/theme-toggle"
import { reports } from "@/lib/reports"

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = useMemo(() => {
    const counts = reports.reduce((acc, report) => {
      acc[report.category] = (acc[report.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return [
      { name: "All", count: reports.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count })),
    ]
  }, [])

  const filteredReports = useMemo(() => {
    let list = reports

    if (selectedCategory !== "All") {
      list = list.filter((report) => report.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      list = list.filter(
        (report) =>
          report.title.toLowerCase().includes(query) ||
          report.subtitle.toLowerCase().includes(query) ||
          report.excerpt.toLowerCase().includes(query) ||
          report.region.toLowerCase().includes(query) ||
          report.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    return list
  }, [selectedCategory, searchQuery])

  const totalPages = reports.reduce((sum, report) => sum + report.pages, 0)

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
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="/" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-sky-400 transition-colors">
                Who We Are
              </Link>
              <Link href="/projects" className="hover:text-sky-400 transition-colors">
                Projects
              </Link>
              <Link href="/reports" className="text-sky-400">
                Reports
              </Link>
              <Link href="/blog" className="hover:text-sky-400 transition-colors">
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
          backgroundImage: "url(/3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
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
              Research & <span className="text-sky-400">Reports</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed text-white/90 font-light px-4 sm:px-6 lg:px-0">
              Community-led research, project documentation, and feminist analysis from the Northern
              Kenya ASAL corridor — written, reviewed, and owned by the communities it describes
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { value: reports.length, label: "Published reports" },
                { value: totalPages, label: "Pages of research" },
                { value: "100%", label: "Community-reviewed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-effect rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 text-center"
                >
                  <div className="text-lg sm:text-2xl font-bold text-sky-400">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filters + Report Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3">
                  {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Reports"}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {searchQuery || selectedCategory !== "All"
                    ? `${filteredReports.length} report${filteredReports.length !== 1 ? "s" : ""} found`
                    : "Download or read each report in full — no paywall, no registration"}
                </p>
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-2 sm:py-3 bg-background border-2 border-border focus:border-primary/50 rounded-xl shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </Button>
                )}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={`text-xs sm:text-sm transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </ScrollAnimation>

          {filteredReports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 xl:gap-8">
              {filteredReports.map((report, index) => (
                <ScrollAnimation key={report.slug} direction="bottom" delay={index * 100}>
                  <Card className="group flex h-full flex-col overflow-hidden bg-card border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-lg hover:-translate-y-1">
                    {/* First-page preview */}
                    <Link
                      href={`/reports/${report.slug}`}
                      className="relative block h-56 sm:h-64 overflow-hidden bg-muted"
                    >
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                        <PdfPreview
                          file={report.file}
                          width={520}
                          label={`First page of ${report.title}`}
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge
                        className={`absolute top-3 left-3 ${report.categoryColor} text-white border-0 shadow-lg text-[10px] sm:text-xs`}
                      >
                        {report.reportNumber}
                      </Badge>
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[10px] sm:text-xs text-white/90">
                        <span className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
                          <FileText className="h-3 w-3" />
                          {report.pages} pages
                        </span>
                        <span className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
                          {report.fileSize}
                        </span>
                      </div>
                    </Link>

                    <CardContent className="flex flex-1 flex-col p-4 sm:p-5 xl:p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {report.published}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {report.readTime}
                        </span>
                      </div>

                      <Link href={`/reports/${report.slug}`}>
                        <h3 className="mb-2 text-base sm:text-lg xl:text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                          {report.title}
                        </h3>
                      </Link>

                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {report.excerpt}
                      </p>

                      <div className="mb-4 flex items-start gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                        <span className="line-clamp-1">{report.region}</span>
                      </div>

                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {report.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px] sm:text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-col gap-2 sm:flex-row">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-xs sm:text-sm"
                        >
                          <Link href={`/reports/${report.slug}`}>
                            Read Report <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <div className="flex gap-2">
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1 sm:flex-none text-xs sm:text-sm"
                            title="Open PDF in a new tab"
                          >
                            <a href={report.file} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5" />
                              <span className="ml-1.5 sm:hidden">Open</span>
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1 sm:flex-none text-xs sm:text-sm"
                            title="Download PDF"
                          >
                            <a href={report.file} download>
                              <Download className="h-3.5 w-3.5" />
                              <span className="ml-1.5 sm:hidden">Download</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center sm:py-16">
              <Layers className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="mb-3 text-lg sm:text-xl xl:text-2xl font-bold text-foreground">
                No reports found
              </h3>
              <p className="mb-5 text-sm sm:text-base text-muted-foreground">
                {searchQuery
                  ? `No reports match "${searchQuery}"`
                  : `No reports in the "${selectedCategory}" category`}
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                variant="outline"
                size="sm"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Access statement */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="bottom">
            <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold sm:mb-6">
              Our Research Is Community-Owned
            </h2>
            <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 sm:mb-8">
              Every report on this page was reviewed and validated by community archivists, women’s
              councils, and elder advisors before publication. All data is governed by
              community-controlled access protocols.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Request Collaboration</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-900"
              >
                <a href="mailto:info@beyondborders.co.ke">Contact the Research Team</a>
              </Button>
            </div>
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
                  <div className="text-xs sm:text-sm text-sky-400">Nomadic-Led Impact</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                A nomadic community-led nonprofit bridging gaps in aid and advocacy along the
                Kenya-Somalia border.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a
                  href="https://www.instagram.com/mayhemthreads252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white" />
                </a>
                <a
                  href="mailto:info@beyondborders.co.ke"
                  className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group"
                >
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
                <Link href="/blog" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Blog
                </Link>
                <Link href="/contact" className="block hover:text-sky-400 transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-sky-400">Reports</h3>
              <div className="space-y-2 sm:space-y-3">
                {reports.map((report) => (
                  <Link
                    key={report.slug}
                    href={`/reports/${report.slug}`}
                    className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200 text-sm sm:text-base"
                  >
                    {report.title}
                  </Link>
                ))}
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
                <Link href="/reports" className="hover:text-sky-400 transition-colors">
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
