import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Microscope,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNav } from "@/components/mobile-nav"
import { PdfDocumentViewer } from "@/components/pdf-document-viewer"
import { PdfPreview } from "@/components/pdf-preview"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ThemeToggle } from "@/components/theme-toggle"
import { getReport, reports } from "@/lib/reports"

export async function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const report = getReport(slug)

  if (!report) {
    return { title: "Report Not Found" }
  }

  return {
    title: report.title,
    description: report.summary,
    openGraph: {
      title: report.title,
      description: report.summary,
      type: "article",
      images: [{ url: report.image, alt: report.title }],
    },
  }
}

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const report = getReport(slug)

  if (!report) {
    notFound()
  }

  const otherReports = reports.filter((item) => item.slug !== report.slug)

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

      {/* Hero */}
      <section
        className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat sm:min-h-[65vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url("${report.image}")`,
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl px-3 py-10 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center sm:mb-6">
            <Button
              asChild
              variant="ghost"
              className="glass-effect mr-4 rounded-full px-2 py-1 p-0 text-white/80 hover:text-sky-400 sm:px-3 sm:py-1.5"
            >
              <Link href="/reports">
                <ArrowLeft className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Back to Reports</span>
              </Link>
            </Button>
          </div>

          <ScrollAnimation direction="bottom" className="text-center">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:mb-4">
              <Badge className={`${report.categoryColor} border-0 text-white text-xs shadow-lg`}>
                {report.reportNumber}
              </Badge>
              <Badge className="border-white/30 bg-white/20 text-white text-xs backdrop-blur-sm">
                {report.category}
              </Badge>
            </div>

            <h1 className="mx-auto mb-3 max-w-4xl text-2xl font-bold leading-tight text-white drop-shadow-2xl sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {report.title}
            </h1>
            <p className="mx-auto mb-5 max-w-3xl text-sm leading-relaxed text-white/85 sm:mb-6 sm:text-base lg:text-lg">
              {report.subtitle}
            </p>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/80 sm:gap-x-6 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {report.published}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {report.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                {report.pages} pages · {report.fileSize}
              </span>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href={report.file} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-slate-900"
              >
                <a href={report.file} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Browser
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key figures */}
      <section className="border-b border-border bg-card py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
              {report.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border-2 border-border bg-background p-3 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md sm:p-4"
                >
                  <div className="mb-1 text-xl font-bold text-sky-500 dark:text-sky-400 sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-[10px] leading-snug text-muted-foreground sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Content */}
            <div className="order-2 lg:order-1 lg:col-span-2">
              {report.contentWarning && (
                <ScrollAnimation direction="left">
                  <div className="mb-8 flex gap-3 rounded-xl border-l-4 border-amber-500 bg-amber-500/10 p-4 sm:p-5">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                    <div>
                      <h2 className="mb-1 text-sm font-bold text-foreground sm:text-base">
                        {report.slug === "digital-colonialism-asal-corridor"
                          ? "A note on framing"
                          : "Content warning"}
                      </h2>
                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {report.contentWarning}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              )}

              {report.sections.map((section, index) => (
                <ScrollAnimation key={section.heading} direction="left" delay={index * 60}>
                  <div className="mb-9 sm:mb-11">
                    <h2 className="mb-3 text-lg font-bold leading-tight text-foreground sm:mb-4 sm:text-xl lg:text-2xl">
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mb-3 text-sm leading-relaxed text-muted-foreground sm:mb-4 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="mt-4 space-y-3">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                            <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {bullet.label && (
                                <strong className="font-semibold text-foreground">
                                  {bullet.label}:{" "}
                                </strong>
                              )}
                              {bullet.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <blockquote className="mt-5 rounded-r-xl border-l-4 border-sky-400 bg-sky-400/10 p-4 text-sm italic leading-relaxed text-foreground sm:p-5 sm:text-base">
                        {section.callout}
                      </blockquote>
                    )}
                  </div>
                </ScrollAnimation>
              ))}

              {/* Key findings */}
              <ScrollAnimation direction="left">
                <Card className="mb-9 border-2 border-border bg-card shadow-lg sm:mb-11">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="mb-4 flex items-center gap-2 sm:mb-6">
                      <Microscope className="h-5 w-5 text-sky-500 dark:text-sky-400" />
                      <h2 className="text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
                        Key Findings
                      </h2>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {report.keyFindings.map((finding, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500 dark:text-sky-400 sm:h-5 sm:w-5" />
                          <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {finding}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Recommendations */}
              {report.recommendations && (
                <ScrollAnimation direction="left">
                  <div className="mb-9 sm:mb-11">
                    <div className="mb-4 flex items-center gap-2 sm:mb-6">
                      <Lightbulb className="h-5 w-5 text-sky-500 dark:text-sky-400" />
                      <h2 className="text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
                        Recommendations
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                      {report.recommendations.map((recommendation, i) => (
                        <Card
                          key={i}
                          className="border-2 border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                        >
                          <CardContent className="p-4 sm:p-5">
                            <div className="mb-2 flex items-baseline gap-2">
                              <span className="text-xs font-bold text-sky-500 dark:text-sky-400">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <h3 className="text-sm font-bold leading-snug text-foreground sm:text-base">
                                {recommendation.label}
                              </h3>
                            </div>
                            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                              {recommendation.text}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              )}

              {/* Tags */}
              <ScrollAnimation direction="left">
                <div className="border-t border-border pt-6 sm:pt-8">
                  <h3 className="mb-3 text-base font-semibold text-foreground sm:mb-4 sm:text-lg">
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {report.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border-sky-400/20 bg-sky-400/10 text-xs text-sky-600 dark:text-sky-400 sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="order-1 lg:order-2 lg:col-span-1">
              {/* Sticky so the column is not empty space while the article scrolls.
                  It can be taller than the viewport, so it scrolls internally. */}
              <div className="scrollbar-hide space-y-5 sm:space-y-6 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
                <ScrollAnimation direction="right">
                  {/* Document card */}
                  <Card className="mb-5 overflow-hidden border-2 border-border shadow-lg transition-all duration-300 hover:shadow-2xl sm:mb-6">
                    <div className="h-44 overflow-hidden border-b border-border bg-muted sm:h-52">
                      <PdfPreview
                        file={report.file}
                        width={480}
                        label={`Cover page of ${report.title}`}
                      />
                    </div>
                    <CardContent className="p-4 sm:p-5">
                      <h3 className="mb-3 text-base font-bold text-foreground sm:text-lg">
                        The Document
                      </h3>
                      <dl className="mb-4 space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted-foreground">Format</dt>
                          <dd className="font-medium text-foreground">PDF</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted-foreground">Pages</dt>
                          <dd className="font-medium text-foreground">{report.pages}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted-foreground">Size</dt>
                          <dd className="font-medium text-foreground">{report.fileSize}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted-foreground">Published</dt>
                          <dd className="font-medium text-foreground">{report.published}</dd>
                        </div>
                      </dl>
                      <div className="space-y-2">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white transition-all duration-300 hover:shadow-lg"
                        >
                          <a href={report.file} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                          <a href={report.file} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open in Browser
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* About this report */}
                  <Card className="border-2 border-border shadow-lg">
                    <CardContent className="p-4 sm:p-5">
                      <h3 className="mb-4 text-base font-bold text-foreground sm:text-lg">
                        About This Report
                      </h3>
                      <div className="space-y-4 text-xs sm:text-sm">
                        <div className="flex gap-2.5">
                          <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500 dark:text-sky-400" />
                          <div>
                            <div className="font-medium text-foreground">Prepared by</div>
                            <div className="text-muted-foreground">{report.preparedBy}</div>
                          </div>
                        </div>
                        <div className="flex gap-2.5">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500 dark:text-sky-400" />
                          <div>
                            <div className="font-medium text-foreground">Region</div>
                            <div className="text-muted-foreground">{report.region}</div>
                          </div>
                        </div>
                        <div className="flex gap-2.5">
                          <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500 dark:text-sky-400" />
                          <div>
                            <div className="font-medium text-foreground">Period</div>
                            <div className="text-muted-foreground">{report.period}</div>
                          </div>
                        </div>
                        <div className="flex gap-2.5">
                          <Microscope className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500 dark:text-sky-400" />
                          <div>
                            <div className="font-medium text-foreground">Methodology</div>
                            <div className="text-muted-foreground">{report.methodology}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Other reports */}
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline document viewer */}
      <section className="bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom" className="mb-6 text-center sm:mb-8">
            <Badge className="mb-3 border-primary/20 bg-primary/10 text-primary text-xs sm:text-sm">
              Full Document
            </Badge>
            <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
              Read the Original PDF
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
              Page through the full report below, or open it in a new tab and download a copy to
              share offline.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="bottom" delay={150}>
            <PdfDocumentViewer file={report.file} title={report.title} totalPages={report.pages} />
          </ScrollAnimation>
        </div>
      </section>

      {/* More reports */}
      {otherReports.length > 0 && (
        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
            <ScrollAnimation direction="bottom" className="mb-6 sm:mb-8">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                More Reports
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {otherReports.map((item, index) => (
                <ScrollAnimation key={item.slug} direction="bottom" delay={index * 100}>
                  <Card className="group h-full overflow-hidden border-2 border-border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                    <Link href={`/reports/${item.slug}`} className="flex h-full gap-4 p-4 sm:p-5">
                      <div className="h-28 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border sm:h-32 sm:w-24">
                        <PdfPreview
                          file={item.file}
                          width={200}
                          label={`Cover page of ${item.title}`}
                        />
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <Badge
                          className={`mb-2 w-fit ${item.categoryColor} border-0 text-[10px] text-white`}
                        >
                          {item.reportNumber}
                        </Badge>
                        <h3 className="mb-1 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mb-2 line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                          {item.excerpt}
                        </p>
                        <span className="mt-auto text-xs text-muted-foreground">
                          {item.pages} pages · {item.published}
                        </span>
                      </div>
                    </Link>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-4xl px-3 text-center sm:px-6 lg:px-8">
          <ScrollAnimation direction="bottom">
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl lg:text-4xl">
              Use This Research
            </h2>
            <p className="mb-6 text-base leading-relaxed opacity-90 sm:mb-8 sm:text-lg lg:text-xl">
              This report is free to read, cite, and share. If you are a funder, researcher, or
              collective who wants to build on this work, we would like to hear from you.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-900"
              >
                <Link href="/reports">Browse All Reports</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="mb-4 flex items-center space-x-2 sm:mb-6 sm:space-x-3">
                <div className="rounded-xl bg-white p-1 shadow-lg">
                  <img
                    src="/logo_black_bg.jpg"
                    alt="Beyond Borders Logo"
                    className="h-8 w-8 rounded-lg object-cover sm:h-10 sm:w-10"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold sm:text-xl">Beyond Borders</span>
                  <div className="text-xs text-sky-400 sm:text-sm">Nomadic-Led Impact</div>
                </div>
              </div>
              <p className="mb-4 max-w-md text-sm leading-relaxed text-white/80 sm:mb-6 sm:text-base">
                A nomadic community-led nonprofit bridging gaps in aid and advocacy along the
                Kenya-Somalia border.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a
                  href="https://www.instagram.com/beyondborders_synergy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg bg-white/10 p-2 transition-colors duration-300 hover:bg-sky-400"
                >
                  <Instagram className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </a>
                <a
                  href="mailto:info@beyondborders.co.ke"
                  className="group rounded-lg bg-white/10 p-2 transition-colors duration-300 hover:bg-sky-400"
                >
                  <Mail className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold text-sky-400 sm:mb-6 sm:text-lg">Quick Links</h3>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/" className="block text-sm transition-colors hover:text-sky-400 sm:text-base">
                  Home
                </Link>
                <Link href="/about" className="block text-sm transition-colors hover:text-sky-400 sm:text-base">
                  Who We Are
                </Link>
                <Link href="/projects" className="block text-sm transition-colors hover:text-sky-400 sm:text-base">
                  Projects
                </Link>
                <Link href="/blog" className="block text-sm transition-colors hover:text-sky-400 sm:text-base">
                  Blog
                </Link>
                <Link href="/contact" className="block text-sm transition-colors hover:text-sky-400 sm:text-base">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold text-sky-400 sm:mb-6 sm:text-lg">Reports</h3>
              <div className="space-y-2 sm:space-y-3">
                {reports.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/reports/${item.slug}`}
                    className="block text-sm text-white/80 transition-colors duration-200 hover:translate-x-1 hover:text-sky-400 sm:text-base"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <p className="text-xs text-white/60 sm:text-sm">
                &copy; 2024 Beyond Borders. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60 sm:gap-6 sm:text-sm">
                <Link href="/contact" className="transition-colors hover:text-sky-400">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="transition-colors hover:text-sky-400">
                  Terms of Service
                </Link>
                <Link href="/reports" className="transition-colors hover:text-sky-400">
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
