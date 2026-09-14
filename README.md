# Siphiwumusa Nezimangaliso - Construction Company Website

A modern, responsive Next.js website for Siphiwumusa Nezimangaliso PTY LTD, a South African construction and civil engineering company.

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: IBM Carbon Design System
- **Styling**: Sass/SCSS
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Carousel**: Embla Carousel

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.scss       # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections (for rendering)
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── vision-section.tsx
│   │   ├── services-section.tsx
│   │   ├── approach-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── service-card.tsx
│   │   ├── service-carousel.tsx
│   │   └── objective-list.tsx
│   ├── site-header.tsx
│   └── theme-provider.tsx
├── constants/             # All constants and data
│   ├── company.ts         # Company information
│   ├── services.ts        # Services and objectives
│   └── navigation.ts      # Navigation items
├── hooks/                 # Custom React hooks
│   ├── use-theme.ts
│   └── use-carousel.ts
├── lib/                   # Shared utility functions
│   └── utils.ts
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-remote-url>
cd siphiwumusa-nezim
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Mobile Carousel**: Services section displays as a carousel on mobile devices
- **Dark/Light Theme**: Toggle between Carbon's white and g100 themes
- **Smooth Navigation**: Anchor links with smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 📱 Responsive Behavior

- **Mobile (<42rem)**: Services displayed in carousel format
- **Tablet (≥42rem)**: Services displayed in 2-column grid
- **Desktop (≥66rem)**: Services displayed in 3-column grid

## 🎯 Code Architecture

### Components
- **Sections**: Top-level page sections, focused on layout and composition
- **UI Components**: Reusable, presentational components

### Hooks
- `use-theme`: Manages theme state and switching
- `use-carousel`: Handles carousel logic with Embla

### Constants
- All static data centralized in `constants/` directory
- Easy to update company info, services, and navigation

### Lib
- Utility functions for formatting and manipulation
- Pure functions for phone numbers, emails, etc.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Build for Production

```bash
pnpm build
pnpm start
```

## 📝 Customization

### Update Company Information
Edit `constants/company.ts`

### Add/Remove Services
Edit `constants/services.ts`

### Change Navigation
Edit `constants/navigation.ts`

### Modify Styles
Edit `app/globals.scss`

## 📄 License

Private - Siphiwumusa Nezimangaliso PTY LTD

## 👥 Contact

- **Email**: siphiwumusaptyltd@gmail.com
- **Phone**: 067 678 6706 / 068 843 1632
- **Address**: 23 Havelock Street, eShowe, 3815
