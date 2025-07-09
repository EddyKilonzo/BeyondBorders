'use client'

import * as React from 'react'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

export function MobileNav() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const themeOptions = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'System', value: 'system', icon: Monitor },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link 
            href="/" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Who We Are
          </Link>
          <Link 
            href="/projects" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            href="/blog" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Join Us
          </Link>
          
          <div className="pt-6 border-t">
            <p className="text-sm font-medium text-muted-foreground mb-3">Theme</p>
            <div className="space-y-2">
              {themeOptions.map((option) => {
                const Icon = option.icon
                return (
                  <Button
                    key={option.value}
                    variant={theme === option.value ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setTheme(option.value)}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {option.name}
                  </Button>
                )
              })}
            </div>
          </div>
          
          <div className="pt-6">
            <Button 
              className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg"
              onClick={closeMenu}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
