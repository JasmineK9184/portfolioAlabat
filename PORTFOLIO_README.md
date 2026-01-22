# Professional Portfolio Website

A modern, responsive, and animated portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Design & UX
- **Clean & Modern Design**: Minimal, polished layout with excellent visual hierarchy
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Intuitive navigation with smooth scrolling between sections
- **Accessibility**: High contrast, readable fonts, and proper semantic HTML
- **Performance Optimized**: Fast loading and optimized rendering

### Animations & Interactions
- **Entrance Animations**: Smooth fade, slide, and scale animations for sections
- **Hover Effects**: Interactive hover states on buttons, cards, and links
- **Micro-interactions**: Subtle animations for better user feedback
- **Elegant Motion**: Refined animations using Framer Motion

### Sections
1. **Home** - Hero section with introduction and call-to-action buttons
2. **About** - Professional summary and organized skills section
3. **Projects** - Showcase of featured projects with images, descriptions, and links
4. **Experience** - Professional journey with timeline and achievements
5. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3 + PostCSS
- **Animations**: Framer Motion 11
- **Code Quality**: ESLint

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.tsx
│   ├── Navigation.tsx
│   ├── SectionTitle.tsx
│   └── index.ts
├── sections/            # Page sections
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── index.ts
├── hooks/              # Custom React hooks
│   └── useInView.ts
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── App.css             # Global styles
├── main.tsx            # Entry point
└── index.css           # Global CSS with Tailwind
```

## 🎨 Color Palette

- **Primary**: `#0f172a` - Dark slate background
- **Secondary**: `#1e293b` - Lighter slate
- **Accent**: `#3b82f6` - Vibrant blue
- **Light**: `#f1f5f9` - Light slate for text

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install additional packages (if not already installed):
```bash
npm install react framer-motion tailwindcss postcss autoprefixer
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Customization

### Update Personal Information
Edit the following files to add your personal details:

- **`src/sections/Hero.tsx`** - Update name and introduction
- **`src/sections/About.tsx`** - Update about text and skills
- **`src/sections/Projects.tsx`** - Add your projects
- **`src/sections/Experience.tsx`** - Add your work experience
- **`src/sections/Contact.tsx`** - Update contact information

### Colors
Modify the color palette in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#3b82f6',
      light: '#f1f5f9',
    },
  },
}
```

### Animations
Customize animations in:
- `tailwind.config.ts` - Tailwind animation definitions
- Individual component files - Framer Motion configurations

## 🔧 ESLint

Run linting:
```bash
npm run lint
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- ARIA labels and roles
- Responsive touch targets

## 🌐 Deployment

This project can be easily deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: `npm run build` + deploy `dist` folder

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 Best Practices Implemented

- ✅ Component-based architecture
- ✅ Modern React patterns (hooks, functional components)
- ✅ TypeScript for type safety
- ✅ Responsive design with mobile-first approach
- ✅ Performance optimization
- ✅ Clean, maintainable code
- ✅ Smooth animations and transitions
- ✅ Accessibility best practices

## 🤝 Contributing

Feel free to fork and customize this template for your portfolio!

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion
