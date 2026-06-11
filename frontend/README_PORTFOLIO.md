# Rudra Sahu - Premium Developer Portfolio

A fully interactive, production-ready developer portfolio website built with modern web technologies. Inspired by the premium aesthetics of ChaiCode, Linear, Vercel, and Apple's smooth interactions.

## 🎨 Design Philosophy

- **Consistency over intensity**: Clean, organized design with purposeful animations
- **Growth through discipline**: Structured content showing learning journey
- **Building through curiosity**: Showcase projects and technical expertise

## 🛠️ Tech Stack

- **React 19** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Professional animations library
- **React Icons** - Comprehensive icon library
- **React Scroll** - Smooth scrolling navigation
- **React Simple Typewriter** - Typewriter effect for hero section
- **EmailJS** - Serverless email service for contact form
- **Lucide React** - Beautiful icon components

## 📦 Installation & Setup

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Steps

1. **Clone/Navigate to the project:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional - for contact form):
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Update keys in `src/sections/Contact.jsx`:
     - Replace `YOUR_EMAILJS_PUBLIC_KEY`
     - Replace `YOUR_SERVICE_ID`
     - Replace `YOUR_TEMPLATE_ID`

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Server will run at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```
   Output: `dist/` folder

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Background.jsx   # Animated background with glows
│   ├── Navbar.jsx       # Sticky navigation with mobile menu
│   ├── Hero.jsx         # Hero section with typewriter effect
│   └── Footer.jsx       # Footer with social links
├── sections/            # Page sections
│   ├── About.jsx        # About section with stats
│   ├── Skills.jsx       # Skills showcase with icons
│   ├── Projects.jsx     # Projects with alternate layouts
│   ├── Experience.jsx   # Timeline of milestones
│   └── Contact.jsx      # Contact form with validation
├── hooks/               # Custom React hooks
│   ├── useScrollAnimation.js  # Detect scroll visibility
│   └── useCounterAnimation.js # Animate numbers
├── utils/               # Utility functions
│   ├── animationVariants.js   # Framer Motion variants
│   └── helpers.js             # Helper functions
├── constants/           # Static data
│   ├── colors.js        # Color palette
│   └── data.js          # Projects, skills, experience data
├── index.css            # Global styles
├── main.jsx             # Entry point
└── App.jsx              # Main app component
```

## 🎨 Color Palette

- **Primary Background**: `#0B0F0D`
- **Secondary Background**: `#111715`
- **Card Background**: `rgba(255,255,255,0.03)`
- **Accent Green**: `#7ED957`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B8C1BC`

## ✨ Key Features

### 🎭 Fixed Animated Background
- Large blurred green radial glow (top-right)
- Smaller glow accents (bottom-left)
- Subtle grid pattern
- Floating geometric shapes
- GPU-optimized animations

### 🧭 Navigation
- Sticky glassmorphism navbar
- Smooth scroll transitions
- Mobile hamburger menu
- Active section highlighting
- Hover underline animations

### 🦸 Hero Section
- Typewriter effect for roles
- Floating achievement cards
- Profile image with animated glow
- Call-to-action buttons
- Badge highlighting

### 📊 About Section
- Two-column layout
- Narrative description
- Animated counter stats:
  - Projects Built
  - DSA Problems Solved
  - Technologies Explored
  - Years of Learning

### 💻 Skills Section
- Categorized skill cards:
  - Programming (Java, Python, JavaScript)
  - Frontend (React, HTML, CSS, Tailwind)
  - Backend (Node.js, Express, FastAPI)
  - Database (MongoDB, MySQL, Firebase)
  - Tools (Git, GitHub, VS Code, Docker, Postman)
- Icon-based display
- Hover animations & border glow

### 📁 Projects Section
- Premium project showcase
- Alternate left-right layout
- Project details:
  - Image/preview
  - Description
  - Problem statement
  - Solution implemented
  - Tech stack badges
  - Key achievements
  - GitHub & Demo links
- Smooth hover interactions

### ⏱️ Experience Timeline
- Vertical timeline layout
- Animated milestones:
  - Started Coding
  - Learned Java
  - Solved 100+ DSA Problems
  - Built First Full Stack Project
  - Started Exploring AI
- Green timeline indicators
- Scroll-triggered animations

### 📮 Contact Section
- Premium contact card
- Contact methods showcase
- Contact form with validation:
  - Name field
  - Email field
  - Message textarea
- EmailJS integration
- Success/error notifications
- Loading states

### 🔗 Footer
- Minimal, clean design
- Quick navigation links
- Social media links
- Copyright information
- Hover animations

## 🎬 Animation Features

- **Fade-up animations** on section entry
- **Staggered reveals** for lists and cards
- **Parallax effects** on scroll
- **Floating elements** in hero
- **Card lift effects** on hover
- **Smooth transitions** between sections
- **Scroll-triggered animations** for timeline
- **Magnetic button interactions**
- **Performance optimized** with Framer Motion

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px - 1536px
  - Ultra-wide: > 1536px
- **No horizontal overflow**
- **Proper spacing & typography**
- **Touch-friendly interactions**

## ♿ Accessibility

- ✓ Semantic HTML structure
- ✓ Keyboard navigation support
- ✓ ARIA labels for interactive elements
- ✓ Proper color contrast (WCAG compliant)
- ✓ Focus states for interactive elements
- ✓ Alt text for images
- ✓ Screen reader friendly

## 🚀 Performance Optimization

- **GPU-accelerated animations** using `will-change`
- **Code splitting** with Vite
- **Lazy loading** of components
- **Optimized images** and assets
- **CSS optimization** with Tailwind
- **Gzip compression** in production
- **Minimal bundle size** (397KB JS, 28KB CSS)

## 📝 Customization

### Update Personal Information

Edit `src/constants/data.js`:
```javascript
// Update projects, skills, experience, achievements
export const projects = [...];
export const skills = {...};
export const experience = [...];
```

### Modify Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'accent-green': '#7ED957', // Change accent color
  'bg-primary': '#0B0F0D',   // Change primary background
}
```

### Setup EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template
4. Update keys in `src/sections/Contact.jsx`:
   ```javascript
   emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
   await emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formRef.current
   );
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔧 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Scroll](https://github.com/fisshy/react-scroll)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rudra Sahu**

- Portfolio: [Your Portfolio URL]
- GitHub: [@rudrasahu](https://github.com/rudrasahu)
- LinkedIn: [Rudra Sahu](https://linkedin.com/in/rudrasahu)
- Twitter: [@rudrasahu](https://twitter.com/rudrasahu)

## 🙏 Acknowledgments

- Inspired by ChaiCode's premium design
- Design principles from Linear, Vercel, and Apple
- Built with React, Vite, and Tailwind CSS community

---

**Built with consistency and curiosity** ✨
