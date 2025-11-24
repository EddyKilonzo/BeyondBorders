import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">About Beyond Borders</h4>
              <p className="text-sm text-muted-foreground">
                Empowering refugee communities through sustainable development, education, and humanitarian support since 2020.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:text-pink-500" asChild>
                  <a href="https://www.instagram.com/beyondborders_synergy/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-red-500" asChild>
                  <a href="mailto:info@beyondborders.org">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Blog & Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get Involved</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/volunteer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: contact@beyondborders.org</p>
                <p>Tel: +1 (555) 123-4567</p>
                <address className="not-italic">
                  123 Humanitarian Way<br />
                  Global Impact Center<br />
                  Nairobi, Kenya
                </address>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Beyond Borders. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
