# Yousef Haddad - Creative Portfolio

A modern, responsive portfolio website showcasing creative excellence, AI-enhanced content creation, and strategic thinking.

## Project Overview

This is a professional portfolio built with cutting-edge web technologies, featuring:

- **Portfolio Section**: Curated selection of creative projects across multiple categories
- **AI Studio**: Showcase of AI-enhanced content creation projects
- **Services**: Comprehensive service offerings including content creation, visual storytelling, and AI-enhanced media
- **Contact Section**: Direct contact options and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd text-to-task

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3010`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   ├── PortfolioSection.tsx
│   ├── AIStudioSection.tsx
│   ├── ServicesSection.tsx
│   ├── ContactSection.tsx
│   └── ...
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── index.css         # Global styles
```

## Deployment

### Deploy to Netlify

1. **Build the project**:
   ```sh
   npm run build
   ```

2. **Connect to Netlify**:
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify dashboard

### Netlify Configuration

The project is configured for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x (recommended)

## Features

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Theme toggle support
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Semantic HTML and meta tags
- **Performance**: Optimized bundle size and lazy loading
- **Accessibility**: WCAG compliant components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For inquiries, please visit the portfolio website or use the contact form.
