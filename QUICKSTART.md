# 🚀 Quick Start Guide

## Get Running in 30 Seconds

```bash
cd portfolio
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Essential Customizations (Do These First)

### 1. Update Your Hero Message
**File**: `components/Hero.tsx` (line 43-54)
```tsx
<h1 className="text-8xl sm:text-7xl lg:text-8xl font-serif font-bold...">
  Your First Line Here    // ← Change this
  <br />
  Your Second Line Here   // ← Change this
</h1>
```

### 2. Update Your Projects
**File**: `components/Work.tsx` (line 11-71)
```tsx
const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Name",
    description: "Short description",
    longDescription: "Longer description with details...",
    tags: ["React", "Node.js", "Tailwind"],
    image: "your-image-reference",
    link: "https://github.com/yourproject",
    github: "https://github.com/yourproject",
    metrics: [
      { label: "Performance", value: "98%" },
      { label: "Speed", value: "<1s" },
      { label: "Rating", value: "5/5" },
    ],
  },
];
```

### 3. Update Your Skills
**File**: `components/Tech.tsx` (line 15-63)
```tsx
const skills: SkillCard[] = [
  {
    id: "your-skill",
    title: "Skill Name",
    description: "What you're skilled at with this...",
    icon: <YourIcon size={32} />,  // Use Lucide icons
    color: "accent-primary",        // or "accent-secondary"
    size: "medium",                 // small, medium, or large
  },
];
```

### 4. Update Your Contact
**File**: `components/Contact.tsx` (line 12-35)
```tsx
const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    icon: <Mail size={24} />,
    href: "mailto:your@email.com",  // ← Change this
  },
  // ... update GitHub, LinkedIn, Twitter URLs
];
```

### 5. Update Page Title
**File**: `app/layout.tsx` (line 15-18)
```tsx
export const metadata: Metadata = {
  title: "Your Name | Portfolio",           // ← Change this
  description: "Your professional tagline", // ← Change this
};
```

---

## Optional: Change Colors

**File**: `app/globals.css` (line 3-8)
```css
:root {
  --background: #0a0a0a;           /* Dark background */
  --foreground: #e5e5e5;           /* Light text */
  --accent-primary: #6b9eff;       /* Main blue accent */
  --accent-secondary: #64b5f6;     /* Light blue accent */
  --border-ghost: #2a2a2a;         /* Subtle divider */
}
```

---

## Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start           # Run production server

# Linting
npm run lint        # Run ESLint
```

---

## Deploy

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel   # One-time setup
vercel                  # Deploy from project directory
```

### Other Platforms
The `npm run build` command generates optimized static files. Most platforms support static site hosting.

---

## File Organization

```
Key files to edit:
├── components/
│   ├── Hero.tsx      ← Your headline & CTA
│   ├── Work.tsx      ← Your projects
│   ├── Tech.tsx      ← Your skills
│   └── Contact.tsx   ← Your contact info
└── app/
    ├── globals.css   ← Colors & effects
    └── layout.tsx    ← Page title & metadata
```

---

## Support

- **Styling issues?** → See `STYLING_REFERENCE.md`
- **Layout questions?** → See `LAYOUT_STRUCTURE.md`
- **Full documentation?** → See `PORTFOLIO_GUIDE.md`
- **Setup help?** → See `SETUP_COMPLETE.md`

---

## What's Already Built

✅ Premium animations (Framer Motion)
✅ Responsive design (mobile-first)
✅ Glassmorphic effects
✅ Grain texture overlay
✅ Custom scrollbar
✅ Custom cursor circle
✅ Spring physics animations
✅ Scroll reveal effects
✅ Bento grid layout
✅ TypeScript support
✅ Accessibility (WCAG AA)
✅ Zero build errors

---

## Quick Tips

1. **Icons**: Use [Lucide React](https://lucide.dev) - just import and use
2. **Colors**: All defined in CSS variables (easy theme switching)
3. **Fonts**: Geist Sans/Mono + Georgia Serif (already loaded)
4. **Spacing**: Use Tailwind classes (px-4, gap-8, py-24, etc.)
5. **Animations**: Add with Framer Motion (already configured)

---

## Next Steps

1. ✅ Customize the 5 essential items above
2. ⬜ Test locally: `npm run dev`
3. ⬜ Build: `npm run build`
4. ⬜ Deploy: `vercel`
5. ⬜ Monitor & iterate

---

**Your portfolio is ready. Make it yours!** 🎨

For detailed guides, see the `.md` files in the project root.
