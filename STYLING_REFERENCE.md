# Styling Reference - "Obsidian Dusk" Theme

## Color Palette

### Primary Colors
```
Background:     #0A0A0A  (Deep Obsidian - `bg-background`)
Foreground:     #E5E5E5  (Liquid Silver - `text-foreground`)
Border Ghost:   #2A2A2A  (Subtle Divider - `border-border-ghost`)
```

### Accent Colors
```
Primary Blue:   #6B9EFF  (Electric - `text-accent-primary`)
Secondary Blue: #64B5F6  (Light - `text-accent-secondary`)
```

### Usage in Tailwind
```tsx
// Background colors
<div className="bg-background">
<div className="bg-black/20">
<div className="bg-border-ghost/50">

// Text colors
<p className="text-foreground">Regular text</p>
<p className="text-foreground/70">Secondary text</p>
<p className="text-accent-primary">Interactive elements</p>

// Border colors
<div className="border border-border-ghost">
<div className="border border-accent-primary hover:border-accent-primary/50">
```

---

## Typography Scale

### Font Families
```
Sans:  Geist Sans (system fallback)
Mono:  Geist Mono (code/metadata)
Serif: Georgia (headers only)
```

### Font Sizes (Tailwind Classes)
```
6xl:  3.75rem  (60px)  - Hero headlines
7xl:  4.5rem   (72px)  - Hero main
8xl:  6rem     (96px)  - Hero accent

3xl:  1.875rem (30px)  - Section titles
4xl:  2.25rem  (36px)  - Subsection titles

sm:   0.875rem (14px)  - Metadata/labels
xs:   0.75rem  (12px)  - Small captions (monospace)
```

### Typography Patterns
```tsx
// Hero Headline
<h1 className="text-8xl font-serif font-bold leading-tight tracking-tight">
  Architecting Intelligence.
</h1>

// Section Title
<h2 className="text-6xl font-serif font-bold">Featured Work</h2>

// Metadata/Label
<p className="text-xs font-mono text-foreground/50 uppercase tracking-widest">
  FEATURED WORK
</p>

// Body Text
<p className="text-base text-foreground/70 leading-relaxed">
  Long description paragraph
</p>
```

---

## Spacing & Layout

### Padding Classes (Used Throughout)
```
Hero Section:     px-4 sm:px-8 lg:px-16  py-24
Card/Box:         p-6 sm:p-8
Content Container: max-w-7xl mx-auto
```

### Gap Classes
```
Between sections:  gap-8
Within cards:      gap-4 sm:gap-6
Social icons:      gap-4 sm:gap-6
```

---

## Border & Divider Styles

### Ghost Borders (1px, subtle)
```tsx
<div className="border border-border-ghost">
<div className="border-t border-border-ghost pt-4">
<div className="border border-border-ghost hover:border-accent-primary/50 transition-colors">

// Opacity variations
border-border-ghost/50   // 50% opacity
border-accent-primary/50 // Hover state
```

---

## Special Effects

### Hover States
```tsx
// Button hover
className="hover:border-accent-primary hover:text-accent-primary transition-all"

// Scale on hover
whileHover={{ scale: 1.02 }}
whileHover={{ scale: 1.1 }}

// Background fade
hover:bg-accent-primary/10
hover:bg-black/[.04]
```

### Transition Classes
```tsx
transition-colors       // Color changes
transition-all          // All properties
duration-300            // 300ms duration
duration-500            // 500ms duration
```

### Glassmorphic Effects
```tsx
// Navigation blur
className="backdrop-filter: blur(20px)"
className="bg-background/80"

// Alternative syntax
className="backdrop-blur-2xl bg-black/20"
```

### Opacity Utilities
```tsx
text-foreground/70      // 70% opacity text
text-foreground/50      // 50% opacity text
text-foreground/40      // 40% opacity text
bg-border-ghost/50      // 50% opacity background
```

---

## Animation Classes

### Framer Motion Variants

#### Staggered Container
```ts
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}
```

#### Item Slide-Up (Spring)
```ts
itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}
```

#### Scale-In (Card Reveal)
```ts
{
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}
```

### Scroll Animations
```tsx
// Fade and slide on scroll
animate={isVisible ? "visible" : "hidden"}

// Intersection Observer threshold
{ threshold: 0.1 }  // Trigger 10% into viewport
```

---

## Responsive Design

### Breakpoints
```
Mobile:         < 640px   (default, `sm:` prefix)
Tablet:         640px+    (`sm:` classes)
Desktop:        1024px+   (`lg:` classes)
```

### Responsive Examples
```tsx
// Text sizing
className="text-4xl sm:text-5xl lg:text-6xl"

// Spacing
className="px-4 sm:px-8 lg:px-16"

// Grid columns
className="grid grid-cols-2 sm:grid-cols-4 gap-4"

// Flex direction
className="flex flex-col sm:flex-row gap-4"

// Display
className="hidden sm:block"
```

---

## CSS Variables (Custom Properties)

### Available Variables
```css
--background
--foreground
--accent-primary
--accent-secondary
--border-ghost
--font-geist-sans
--font-geist-mono
```

### Dynamic Theming Example
```css
/* globals.css */
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
}

/* Usage in components */
<div style={{ color: "var(--foreground)" }}>
```

---

## Icon Styling (Lucide React)

```tsx
import { Mail, Linkedin, Github } from "lucide-react";

// Size variants
<Mail size={16} />      // Small (metadata icons)
<Mail size={24} />      // Medium (button icons)
<Mail size={32} />      // Large (card icons)

// Color
<Mail className="text-accent-primary" />
<Mail className="text-foreground/70" />

// Hover animation
className="group-hover:scale-110 transition-transform"
```

---

## Common Component Patterns

### Bordered Card with Hover
```tsx
<div className="border border-border-ghost hover:border-accent-primary/50 transition-colors duration-300 p-8">
  {/* Content */}
</div>
```

### CTA Button (Outlined)
```tsx
<a className="px-8 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-background transition-all duration-300">
  View Work
</a>
```

### CTA Button (Filled)
```tsx
<a className="px-8 py-3 bg-accent-primary text-background hover:opacity-80 transition-all duration-300">
  Get in Touch
</a>
```

### Metadata Label
```tsx
<p className="text-xs font-mono text-foreground/50 uppercase tracking-widest">
  Featured Work
</p>
```

### Skill Card (Bento)
```tsx
<div className="border border-border-ghost rounded-sm hover:border-accent-primary/50 transition-all duration-300 group p-6">
  <div className="text-accent-primary group-hover:scale-110 transition-transform">
    <IconComponent size={32} />
  </div>
  <h3 className="text-lg font-serif font-bold text-foreground mb-2">Title</h3>
  <p className="text-sm text-foreground/60">Description</p>
</div>
```

---

## Utility Classes Quick Reference

```
text-foreground         → Main text color
text-foreground/70      → Secondary text (70% opacity)
text-foreground/50      → Tertiary text (50% opacity)
text-foreground/40      → Subtle text (40% opacity)

bg-background           → Page background
bg-black/20            → Slight overlay
bg-border-ghost/50     → Subtle background

border border-border-ghost          → Standard border
border border-accent-primary        → Accent border
border hover:border-accent-primary  → Interactive border

gap-4 / gap-8          → Element spacing
px-4 sm:px-8 lg:px-16  → Responsive padding
py-24                  → Vertical padding

rounded-sm             → Minimal rounding (2px)
transition-colors duration-300    → Smooth transitions
uppercase tracking-widest         → Typography enhancement
```

---

## Theme Extension Points

To add custom colors, fonts, or sizes:

Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      'custom-color': '#FFFFFF',
    },
    fontSize: {
      'custom': '1.5rem',
    },
  },
}
```

Then use in components:
```tsx
<div className="text-custom-color text-custom">
```

---

**Last Updated**: February 27, 2025
**Theme**: Obsidian Dusk v1.0
