# Serein - Soma Chair

An elegant web experience showcasing the Soma Chair, a unique and functional design piece.

## 🪑 About the Project

**Serein** is a web platform that presents the **Soma Chair**, a design chair characterized by:

- **Organic design** with smooth and natural curves
- **Artisanal craftsmanship** with maximum attention to detail
- **360º rotating mechanism**
- **Multiple options** available in fabric or leather
- **Matching sofas** in two different sizes

## 🚀 Technologies Used

- **Astro** - Web framework for static sites
- **React** - For interactive components
- **Tailwind CSS** - Styling framework
- **Sass** - CSS preprocessor with custom design system
- **Embla Carousel** - For interactive carousels
- **TypeScript** - Static typing
- **Vercel** - Deployment platform

## 📁 Project Structure

```text
serein/
├── public/
│   ├── favicon.svg
│   └── fonts/          # Custom typography
├── src/
│   ├── assets/         # Images and resources
│   │   ├── hero.png
│   │   ├── desing.png
│   │   ├── dimensions.png
│   │   ├── sillon-1.png
│   │   ├── sillon-2.png
│   │   ├── sillon-3.png
│   │   └── icons/
│   ├── components/     # UI components
│   │   ├── Chair/      # Chair showcase with carousel
│   │   │   └── Carousel/
│   │   ├── Design/     # Design section with interactive highlights
│   │   │   └── HighlightImage/
│   │   │       └── HighlightPoint/
│   │   ├── Dimensions/ # Technical specifications
│   │   ├── Hero/       # Main presentation section
│   │   ├── Navbar/     # Navigation component
│   │   ├── Collections.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   ├── pages/          # Application pages
│   └── styles/         # Global styles and design system
│       ├── common.scss # Design tokens and variables
│       ├── fonts.scss  # Typography configuration
│       └── global.scss # Global styles
├── astro.config.mjs    # Astro configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## 🧞 Available Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Design Features

- **Custom typography** with premium fonts
- **Elegant color palette** with warm, natural tones
- **Responsive design** for all devices
- **Smooth animations** and fluid transitions
- **Interactive carousel** to showcase the chair from different angles
- **Fixed navigation** with scroll effects
- **Interactive design highlights** with animated points and labels

## 📱 Main Sections

1. **Hero** - Main presentation of the Soma Chair with call-to-action
2. **Design** - Interactive design showcase with highlight points
3. **Chair** - Interactive carousel showcasing the chair from multiple angles
4. **Dimensions** - Technical specifications with detailed measurements
5. **Collections** - Related products (placeholder implementation)
6. **Footer** - Contact information and navigation (placeholder)

## 🚧 Project Status

### ✅ **Completed**
- **Hero Section**: Main presentation with elegant typography and layout
- **Design Section**: Interactive highlights with animated points showing chair features
- **Chair Section**: Fully functional carousel with autoplay and navigation dots
- **Dimensions Section**: Complete technical specifications with measurements table
- **Navbar**: Fixed navigation with smooth scroll functionality
- **Design System**: Custom color palette, typography, and component architecture

### 🚧 **In Development**
- **Collections Section**: Basic structure implemented, needs content and styling
- **Footer**: Basic layout implemented, needs content and styling

### 📋 **Pending**
- Complete Collections section with product gallery
- Implement full Footer with contact information
- Add e-commerce functionality
- Implement contact forms
- Add SEO optimization
- Performance optimization

## 🎯 Key Features

- **Interactive carousel** with autoplay and manual navigation
- **Design highlights** with animated points and descriptive labels
- **Smooth scroll navigation** with visual feedback
- **Responsive design** that works on all devices
- **Modern animations** and transitions
- **Professional typography** with custom fonts
- **Technical specifications** with detailed measurements
- **Static site generation** for optimal performance

## 🛠️ Technical Implementation

### Components Architecture
- **Modular design** with reusable components
- **TypeScript integration** for type safety
- **React components** for interactive features
- **Astro components** for static content
- **Sass modules** for component-specific styling

### Performance Features
- **Static site generation** with Astro
- **Lazy loading** for images
- **Optimized assets** and fonts
- **Vercel deployment** ready
- **Speed insights** integration

### Interactive Elements
- **Embla Carousel** for smooth image transitions
- **Custom highlight points** with SVG animations
- **Responsive navigation** with scroll effects
- **Accessible design** with proper ARIA labels

## 🎨 Design System

### Colors
- **Primary**: Warm off-white background
- **Secondary**: Warm brown accents
- **Tertiary**: Darker brown for emphasis

### Typography
- **Primary**: Premium heading fonts
- **Secondary**: Clean body text fonts
- **Tertiary**: Accent fonts for special elements

### Spacing & Layout
- **Responsive grid system**
- **Consistent spacing scale**
- **Mobile-first approach**

## 🚀 Deployment

The project is configured for deployment on Vercel with:
- **Static site generation**
- **Automatic builds** on git push
- **Speed insights** for performance monitoring
- **Optimized assets** and caching

## 👀 Next Steps

1. **Complete Collections section** with product gallery and filtering
2. **Implement full Footer** with contact information and social links
3. **Add e-commerce functionality** (product pages, cart, checkout)
4. **Implement contact forms** with form validation
5. **Add SEO optimization** (meta tags, structured data)
6. **Performance optimization** (image optimization, code splitting)
7. **Add analytics** and user tracking
8. **Implement search functionality**

## 🛠️ Development

This project uses modern web technologies to create a premium furniture showcase experience. The codebase is well-structured and follows best practices for maintainability and performance.

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code quality
- **Modular architecture** for maintainability
- **Component-based design** for reusability

---

**Built with ❤️ using Astro, React, TypeScript and Tailwind CSS**
