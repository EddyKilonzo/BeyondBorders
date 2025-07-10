"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BlogPostSkeleton, 
  BlogPostGridSkeleton, 
  HeroSkeleton, 
  NavigationSkeleton, 
  SidebarSkeleton, 
  CardSkeleton, 
  StatsSkeleton, 
  FormSkeleton, 
  FeaturedPostSkeleton, 
  TableSkeleton, 
  ListSkeleton, 
  AvatarSkeleton, 
  ProgressSkeleton, 
  FooterSkeleton, 
  SocialMediaSkeleton, 
  LoadingScreen, 
  SkeletonWrapper 
} from '@/components/skeleton-loading'

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true)
  const [activeDemo, setActiveDemo] = useState<string>('all')

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleToggleLoading = () => {
    setLoading(!loading)
  }

  const demos = [
    { id: 'all', label: 'All Components', component: null },
    { id: 'blog', label: 'Blog Post', component: <BlogPostSkeleton /> },
    { id: 'blog-grid', label: 'Blog Grid', component: <BlogPostGridSkeleton count={6} /> },
    { id: 'hero', label: 'Hero Section', component: <HeroSkeleton /> },
    { id: 'navigation', label: 'Navigation', component: <NavigationSkeleton /> },
    { id: 'sidebar', label: 'Sidebar', component: <SidebarSkeleton /> },
    { id: 'card', label: 'Card', component: <CardSkeleton /> },
    { id: 'stats', label: 'Stats', component: <StatsSkeleton /> },
    { id: 'form', label: 'Form', component: <FormSkeleton /> },
    { id: 'featured', label: 'Featured Post', component: <FeaturedPostSkeleton /> },
    { id: 'table', label: 'Table', component: <TableSkeleton rows={5} /> },
    { id: 'list', label: 'List', component: <ListSkeleton items={5} /> },
    { id: 'avatars', label: 'Avatars', component: (
      <div className="flex space-x-4">
        <AvatarSkeleton size="sm" />
        <AvatarSkeleton size="md" />
        <AvatarSkeleton size="lg" />
        <AvatarSkeleton size="xl" />
      </div>
    )},
    { id: 'progress', label: 'Progress', component: <ProgressSkeleton /> },
    { id: 'footer', label: 'Footer', component: <FooterSkeleton /> },
    { id: 'social', label: 'Social Media', component: <SocialMediaSkeleton /> },
  ]

  const actualContent = (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Skeleton Loading Demo</h1>
        <p className="text-lg">This is the actual content that loads after the skeleton screens.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div>
                  <CardTitle className="text-lg">Real Content {i + 1}</CardTitle>
                  <CardDescription>This is actual loaded content</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This card contains real content that appears after the skeleton loading is complete.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary">Tag 1</Badge>
                <Badge variant="outline">Tag 2</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <div className="h-8 w-8 bg-blue-500 rounded-lg"></div>
              </div>
              <span className="text-xl font-bold">Skeleton Demo</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleToggleLoading}
                variant="secondary"
                size="sm"
              >
                {loading ? 'Show Content' : 'Show Skeleton'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo Controls */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {demos.map((demo) => (
              <Button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                variant={activeDemo === demo.id ? 'default' : 'outline'}
                size="sm"
              >
                {demo.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeDemo === 'all' ? (
          <SkeletonWrapper
            loading={loading}
            skeleton={
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-3">
                    <BlogPostGridSkeleton count={6} />
                  </div>
                  <div className="lg:col-span-1">
                    <SidebarSkeleton />
                  </div>
                </div>
              </div>
            }
          >
            {actualContent}
          </SkeletonWrapper>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {demos.find(d => d.id === activeDemo)?.label} Skeleton
              </h2>
              <p className="text-muted-foreground mb-6">
                This demonstrates the skeleton loading state for the selected component.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
              {demos.find(d => d.id === activeDemo)?.component}
            </div>
          </div>
        )}
      </main>

      {/* Full Page Loading Demo */}
      {loading && activeDemo === 'all' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="page-loading-spinner"></div>
              <span className="text-lg">Loading content...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
