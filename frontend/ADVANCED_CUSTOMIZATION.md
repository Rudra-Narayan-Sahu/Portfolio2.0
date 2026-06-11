# Advanced Customization & Troubleshooting Guide

## 🎨 Customization Guide

### 1. Updating Hero Section

**File**: `src/components/Hero.jsx`

Change the typewriter roles:
```javascript
<Typewriter
  words={['Your Role 1', 'Your Role 2', 'Your Role 3', 'Your Role 4']}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
```

### 2. Modifying Animation Speed

**File**: `src/utils/animationVariants.js`

```javascript
// Fade-up animation
fadeUpVariants: {
  visible: (custom = 0) => ({
    transition: {
      duration: 0.6,  // Change this value (in seconds)
      delay: custom * 0.1,
    },
  }),
}
```

### 3. Changing Color Scheme

**File**: `tailwind.config.js`

```javascript
colors: {
  'accent-green': '#YOUR_NEW_COLOR',
  'bg-primary': '#YOUR_BG_COLOR',
  'text-secondary': '#YOUR_TEXT_COLOR',
}
```

Then update HTML class names throughout the project.

### 4. Adding New Projects

**File**: `src/constants/data.js`

```javascript
export const projects = [
  // ... existing projects
  {
    id: 4,
    title: 'Your Project Title',
    description: 'Brief description of your project.',
    problem: 'What problem did it solve?',
    solution: 'How did you solve it?',
    tech: ['Technology 1', 'Technology 2'],
    achievements: ['Achievement 1', 'Achievement 2'],
    image: '/images/your-project.jpg',
    github: 'https://github.com/your-username/project',
    demo: 'https://your-project-demo.com',
  },
];
```

### 5. Adding New Skills

**File**: `src/constants/data.js`

```javascript
export const skills = {
  programming: [
    { name: 'Your Skill', icon: 'java' },
    // ... more skills
  ],
  // Add new category
  cloudServices: [
    { name: 'AWS', icon: 'aws' },
    { name: 'GCP', icon: 'gcp' },
  ],
};
```

Then update `src/sections/Skills.jsx` to include the new category.

### 6. Background Animation Customization

**File**: `src/components/Background.jsx`

Modify canvas animation parameters:
```javascript
// Change glow intensity
topRightGradient.addColorStop(0, 'rgba(126, 217, 87, 0.15)'); // 0.15 = intensity

// Change grid size
const gridSize = 60; // Smaller = denser grid

// Change floating shape speed
offset += 1; // Higher = faster animation
```

### 7. Navbar Customization

**File**: `src/components/Navbar.jsx`

Add new navigation links:
```javascript
const navItems = [
  { name: "Home", to: "hero" },
  { name: "Your New Section", to: "new-section" },
  // ... more links
];
```

### 8. Contact Form Customization

**File**: `src/sections/Contact.jsx`

Add new contact fields:
```javascript
<input
  type="text"
  name="subject"
  placeholder="Subject"
  required
  className="..."
/>
```

Update form template in EmailJS accordingly.

## 🐛 Troubleshooting

### Issue: Animations not working

**Solution 1**: Check Framer Motion import
```javascript
import { motion } from 'framer-motion';
```

**Solution 2**: Verify `initial`, `animate`, and `variants` props are correctly set
```javascript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

### Issue: Scroll animations not triggering

**Solution**: Check `useScrollAnimation` hook is properly used
```javascript
const [ref, isInView] = useScrollAnimation(0.2); // 0.2 = 20% of element needs to be in view

// Use in JSX:
<section ref={ref}>
  {/* Content */}
</section>

// Then use isInView to trigger:
<motion.div
  animate={isInView ? "visible" : "hidden"}
>
```

### Issue: Typewriter effect not appearing

**Solution**: Ensure React Simple Typewriter is installed
```bash
npm install react-simple-typewriter
```

Check version compatibility in package.json.

### Issue: Icons not showing

**Solution**: Verify React Icons import
```javascript
import { FaJava, FaPython } from 'react-icons/fa';
import { FiGithub, FiMail } from 'react-icons/fi';
```

Check icon library is installed:
```bash
npm install react-icons
```

### Issue: EmailJS form not sending

**Solution**: 
1. Verify API keys are correctly set
2. Check EmailJS service is enabled
3. Test with EmailJS dashboard first
4. Check browser console for errors
5. Ensure form field names match template

```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Must be called before sendForm
```

### Issue: Build failing

**Solution**: Clear node_modules and reinstall
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

### Issue: Tailwind classes not applying

**Solution**: Ensure content path is correct in tailwind.config.js
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx}", // Must match your file structure
]
```

Rebuild Tailwind:
```bash
npm run dev # Vite will rebuild Tailwind
```

### Issue: Mobile menu not closing after click

**Solution**: Verify state management in Navbar.jsx
```javascript
onClick={() => setOpen(false)} // Add to navigation links
```

### Issue: Layout shift on page load

**Solution**: Add min-height to prevent layout shift
```html
<html style="min-height: 100vh;">
```

### Issue: Performance issues on slow devices

**Solution**: Reduce animation complexity
1. Lower animation duration
2. Disable floating shapes on mobile
3. Use `reduce-motion` media query

```javascript
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

## 🔧 Advanced Customization

### Custom Fonts

Add to `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html {
  font-family: 'Inter', sans-serif;
}
```

### Custom Animations

Add to `tailwind.config.js`:
```javascript
keyframes: {
  'custom-animation': {
    '0%': { /* start state */ },
    '100%': { /* end state */ },
  },
},
animation: {
  'custom-animation': 'custom-animation 2s ease-in-out infinite',
}
```

Use in component:
```html
<div className="animate-custom-animation">Content</div>
```

### Environment Variables

Create `.env.local`:
```
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Update Contact.jsx:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

### Dark/Light Mode Toggle

Add state management:
```javascript
const [isDark, setIsDark] = useState(true);

return (
  <div className={isDark ? 'bg-black' : 'bg-white'}>
    <button onClick={() => setIsDark(!isDark)}>
      Toggle Theme
    </button>
  </div>
);
```

### Analytics Integration

Add Google Analytics to `src/main.jsx`:
```javascript
import gtag from 'ga-gtag';

gtag.pageview({
  page_path: window.location.pathname,
  page_title: document.title,
});
```

## 📊 Performance Monitoring

### Lighthouse Audit
```bash
npm run build
npm run preview
# Open in browser and run Lighthouse in DevTools
```

### Bundle Analysis
```bash
npm install --save-dev rollup-plugin-visualizer
```

Add to `vite.config.js`:
```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [
    visualizer(),
  ],
};
```

### Performance Tips

1. **Optimize Images**: Use WebP format
2. **Code Splitting**: Use React.lazy()
3. **CSS Minification**: Tailwind does this automatically
4. **Async Loading**: Load fonts with `font-display: swap`
5. **Caching**: Use service workers

## 🚀 SEO Optimization

Update `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, portfolio, react">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image-url">
```

### Structured Data

Add to `index.html`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full Stack Developer",
  "url": "https://your-portfolio.com",
  "sameAs": ["github", "linkedin", "twitter"]
}
</script>
```

## 🔒 Security Best Practices

1. **Never commit API keys**: Use environment variables
2. **Validate form input**: Always validate on server
3. **HTTPS only**: Deploy with HTTPS enabled
4. **Content Security Policy**: Add CSP headers
5. **Dependency updates**: Keep packages updated
   ```bash
   npm audit
   npm update
   ```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Configuration](https://vitejs.dev/config/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## 🎯 Common Use Cases

### Add a Blog Section
1. Create `src/sections/Blog.jsx`
2. Create blog data structure in `src/constants/data.js`
3. Add Blog link to navbar
4. Import in App.jsx

### Add Dark Mode Toggle
1. Use React Context for theme state
2. Apply theme classes globally
3. Store preference in localStorage
4. Restore on app load

### Add Google Analytics
1. Install `react-ga4`
2. Initialize in main.jsx
3. Track page views
4. Monitor user behavior

### Add Newsletter Signup
1. Integrate with Mailchimp/ConvertKit
2. Add signup form component
3. Handle submission
4. Show success message

---

**For more help**: Check console errors and verify all imports are correct.
