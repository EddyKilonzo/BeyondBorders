import React from 'react'

// Blog Post Skeleton Component
export const BlogPostSkeleton = () => {
  return (
    <div className="skeleton-blog-post">
      <div className="skeleton skeleton-blog-image"></div>
      <div className="skeleton skeleton-blog-title"></div>
      <div className="skeleton-blog-excerpt">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
      </div>
      <div className="skeleton-blog-meta">
        <div className="skeleton skeleton-blog-author"></div>
        <div className="skeleton skeleton-blog-date"></div>
        <div className="skeleton skeleton-blog-tag"></div>
      </div>
    </div>
  )
}

// Blog Post Grid Skeleton
export const BlogPostGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="skeleton-grid skeleton-grid-cols-1 md:skeleton-grid-cols-2 lg:skeleton-grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <BlogPostSkeleton key={i} />
      ))}
    </div>
  )
}

// Hero Section Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="skeleton-hero">
      <div className="skeleton skeleton-hero-title"></div>
      <div className="skeleton skeleton-hero-subtitle"></div>
      <div className="skeleton skeleton-hero-button"></div>
    </div>
  )
}

// Navigation Skeleton
export const NavigationSkeleton = () => {
  return (
    <div className="skeleton-nav">
      <div className="skeleton skeleton-nav-logo"></div>
      <div className="skeleton-nav-menu">
        <div className="skeleton skeleton-nav-item"></div>
        <div className="skeleton skeleton-nav-item"></div>
        <div className="skeleton skeleton-nav-item"></div>
        <div className="skeleton skeleton-nav-item"></div>
      </div>
      <div className="skeleton skeleton-nav-button"></div>
    </div>
  )
}

// Sidebar Skeleton
export const SidebarSkeleton = () => {
  return (
    <div className="skeleton-sidebar">
      <div className="skeleton skeleton-sidebar-title"></div>
      <div className="skeleton-sidebar-card">
        <div className="skeleton skeleton-search-bar"></div>
      </div>
      <div className="skeleton-sidebar-card">
        <div className="skeleton skeleton-sidebar-title"></div>
        <div className="skeleton skeleton-category-button"></div>
        <div className="skeleton skeleton-category-button"></div>
        <div className="skeleton skeleton-category-button"></div>
        <div className="skeleton skeleton-category-button"></div>
      </div>
      <div className="skeleton-sidebar-card">
        <div className="skeleton skeleton-sidebar-title"></div>
        <div className="skeleton skeleton-sidebar-item"></div>
        <div className="skeleton skeleton-sidebar-item"></div>
        <div className="skeleton skeleton-sidebar-item"></div>
      </div>
    </div>
  )
}

// Card Skeleton
export const CardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card-header">
        <div className="skeleton skeleton-card-avatar"></div>
        <div className="skeleton skeleton-card-title"></div>
      </div>
      <div className="skeleton-card-content">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text" style={{ width: '70%' }}></div>
      </div>
      <div className="skeleton skeleton-card-button"></div>
    </div>
  )
}

// Stats Section Skeleton
export const StatsSkeleton = () => {
  return (
    <div className="skeleton-grid skeleton-grid-cols-2 lg:skeleton-grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton-text-3xl"></div>
          <div className="skeleton skeleton-text-lg"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      ))}
    </div>
  )
}

// Form Skeleton
export const FormSkeleton = () => {
  return (
    <div className="skeleton-form">
      <div className="skeleton-form-group">
        <div className="skeleton skeleton-form-label"></div>
        <div className="skeleton skeleton-form-input"></div>
      </div>
      <div className="skeleton-form-group">
        <div className="skeleton skeleton-form-label"></div>
        <div className="skeleton skeleton-form-input"></div>
      </div>
      <div className="skeleton-form-group">
        <div className="skeleton skeleton-form-label"></div>
        <div className="skeleton skeleton-form-textarea"></div>
      </div>
      <div className="skeleton skeleton-form-button"></div>
    </div>
  )
}

// Page Loading Skeleton
export const PageLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationSkeleton />
      <div className="skeleton-container">
        <HeroSkeleton />
        <div className="mt-16">
          <div className="skeleton-grid skeleton-grid-cols-1 lg:skeleton-grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogPostGridSkeleton count={6} />
            </div>
            <div className="lg:col-span-1">
              <SidebarSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Featured Post Skeleton
export const FeaturedPostSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-card-image"></div>
      <div className="skeleton-card-content">
        <div className="skeleton skeleton-badge"></div>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-subtitle"></div>
        <div className="skeleton-paragraph">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
        <div className="skeleton-blog-meta">
          <div className="skeleton skeleton-blog-author"></div>
          <div className="skeleton skeleton-blog-date"></div>
        </div>
      </div>
    </div>
  )
}

// Table Skeleton
export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <div className="skeleton-table">
      <div className="skeleton-table-header">
        <div className="skeleton skeleton-table-header-cell"></div>
        <div className="skeleton skeleton-table-header-cell"></div>
        <div className="skeleton skeleton-table-header-cell"></div>
        <div className="skeleton skeleton-table-header-cell"></div>
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="skeleton-table-row">
          <div className="skeleton skeleton-table-cell"></div>
          <div className="skeleton skeleton-table-cell"></div>
          <div className="skeleton skeleton-table-cell"></div>
          <div className="skeleton skeleton-table-cell"></div>
        </div>
      ))}
    </div>
  )
}

// List Skeleton
export const ListSkeleton = ({ items = 5 }: { items?: number }) => {
  return (
    <div className="skeleton-list">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="skeleton-list-item">
          <div className="skeleton skeleton-list-icon"></div>
          <div className="skeleton-list-content">
            <div className="skeleton skeleton-list-title"></div>
            <div className="skeleton skeleton-list-subtitle"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Avatar Skeleton
export const AvatarSkeleton = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  return <div className={`skeleton skeleton-avatar skeleton-avatar-${size}`}></div>
}

// Progress Skeleton
export const ProgressSkeleton = () => {
  return (
    <div className="skeleton-progress">
      <div className="skeleton-progress-bar"></div>
    </div>
  )
}

// Footer Skeleton
export const FooterSkeleton = () => {
  return (
    <div className="skeleton-grid skeleton-grid-cols-1 md:skeleton-grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="skeleton-footer-section">
          <div className="skeleton skeleton-footer-title"></div>
          <div className="skeleton skeleton-footer-link"></div>
          <div className="skeleton skeleton-footer-link"></div>
          <div className="skeleton skeleton-footer-link"></div>
          <div className="skeleton skeleton-footer-link"></div>
        </div>
      ))}
    </div>
  )
}

// Social Media Skeleton
export const SocialMediaSkeleton = () => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="skeleton skeleton-social-icon"></div>
      ))}
    </div>
  )
}

// Loading Screen Component
export const LoadingScreen = () => {
  return (
    <div className="page-loading">
      <div className="page-loading-spinner"></div>
    </div>
  )
}

// Generic Skeleton Wrapper
export const SkeletonWrapper = ({ 
  children, 
  loading, 
  skeleton 
}: { 
  children: React.ReactNode
  loading: boolean
  skeleton: React.ReactNode
}) => {
  if (loading) {
    return <>{skeleton}</>
  }
  
  return <div className="content-loaded">{children}</div>
}
