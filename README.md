# Beyond Borders Website 🌍

A modern, responsive website for Beyond Borders - a refugee-led nonprofit organization bridging gaps in aid and advocacy along the Kenya-Somalia border.

## 🚀 Tech Stack

### **Frontend Framework**
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library

### **Theming**
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark/Light mode with system preference detection
- **Custom CSS Variables** - Dynamic theming support

### **Package Manager**
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

### **Development Tools**
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[ESLint](https://eslint.org/)** - Code linting
- **VS Code** - Recommended IDE with custom settings

## 🎨 Features

### **🌓 Dark/Light Mode**
- System preference detection
- Persistent theme selection
- Smooth transitions between themes
- Accessible theme toggle in navigation

### **📱 Responsive Design**
- Mobile-first approach
- Responsive navigation with mobile drawer
- Optimized for all screen sizes
- Touch-friendly interactions

### **✨ Modern UI/UX**
- Floating card effects with colored shadows
- Smooth animations and transitions
- Gradient backgrounds and modern typography
- Professional color scheme

### **♿ Accessibility**
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📁 Project Structure

```
beyond-borders-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── projects/          # Projects page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── theme-provider.tsx # Theme context provider
│   ├── theme-toggle.tsx   # Dark/light mode toggle
│   ├── mobile-nav.tsx     # Mobile navigation
│   └── *.tsx             # Other custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🛠️ Development

### **Prerequisites**
- Node.js 18+ 
- pnpm (recommended) or npm

## 🎯 Pages Overview

### **🏠 Home (`/`)**
- Hero section with organization branding
- Impact statistics with animated counters
- Mission overview cards
- Call-to-action sections

### **👥 About (`/about`)**
- Organization story and mission
- Leadership team profiles
- Our approach and values
- Community impact highlights

### **🚀 Projects (`/projects`)**
- Four main program areas:
  - Economic Empowerment
  - Social Justice
  - Climate Resilience
  - Sexual & Reproductive Health Rights
- Impact metrics and statistics

### **📞 Contact (`/contact`)**
- Multiple ways to get involved
- Contact form with validation
- Organization contact information
- Impact statistics sidebar

## 🎨 Design System

### **Color Palette**
- **Primary**: Sky blue (`sky-400`, `blue-500`)
- **Accent**: Slate (`slate-900`)
- **Background**: Dynamic (light/dark themes)
- **Cards**: Theme-aware with gradients

### **Typography**
- **Headings**: Bold, gradient text effects
- **Body**: Readable, accessible contrast
- **Responsive**: Fluid typography scaling

### **Components**
- **Cards**: Floating shadows with hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Navigation**: Sticky header with backdrop blur
- **Icons**: Consistent Lucide icon library

## 🌐 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

### **Build Output**
- Static generation for optimal performance
- Route optimization and code splitting
- Asset optimization and compression

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS setup
- `components.json` - shadcn/ui configuration

## 📊 Performance

- **Static Generation**: Pre-rendered pages for fast loading
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js built-in optimization
- **CSS Optimization**: Tailwind CSS purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Beyond Borders organization.

---

**Built with ❤️ for refugee-led impact**

*Last updated: January 2025*
