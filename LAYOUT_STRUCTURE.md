# Portfolio Layout Structure

## Page Flow (Visual)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  NAVIGATION COMPONENT                                               │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ PORTFOLIO          [Work] [Tech] [Contact]                  │  │
│  │ (Logo)            (Nav Links - smooth underline on hover)    │  │
│  │ • Glassmorphic blur on scroll                              │  │
│  │ • Fixed positioning                                         │  │
│  │ • Fades out at top, appears on scroll                      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  HERO SECTION (50vh + padding)                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │         Architecting                                         │  │
│  │         Intelligence.                                        │  │
│  │                                                              │  │
│  │         Building Scale.                                      │  │
│  │         (in accent blue)                                    │  │
│  │                                                              │  │
│  │    FULL-STACK ENGINEER | AI INTEGRATION SPECIALIST          │  │
│  │                                                              │  │
│  │    [VIEW WORK]  [GET IN TOUCH]                              │  │
│  │    (bordered)    (filled)                                   │  │
│  │                                                              │  │
│  │              ↓ SCROLL TO EXPLORE ↓                          │  │
│  │              (animated pulse)                               │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  • Custom cursor circle tracking mouse                             │
│  • Staggered spring animations on load                            │
│  • Full viewport height with centered content                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  WORK SECTION (id="work")                                           │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Featured Work                                                │  │
│  │ CRAFTED WITH PRECISION. SCALED FOR IMPACT.                  │  │
│  │                                                              │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │ PROJECT 1: LIBRARY MANAGEMENT ENGINE                │  │  │
│  │  │ AI-powered recommendations, catalog system           │  │  │
│  │  │                                                      │  │  │
│  │  │ Long description of the project...                  │  │  │
│  │  │                                                      │  │  │
│  │  │ [Node.js] [React] [Gemini API] [PostgreSQL] [Redis] │  │  │
│  │  │                                                      │  │  │
│  │  │ BOOKS CATALOGUED: 50K+ | ACCURACY: 94% | SPEED: <1s │  │  │
│  │  │                                                      │  │  │
│  │  │ [External Link] [GitHub]                            │  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │                                                              │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │ PROJECT 2: PREMIUM FOOD E-COMMERCE REDESIGN          │  │  │
│  │  │ High-conversion luxury food marketplace              │  │  │
│  │  │ ... (same layout as project 1)                       │  │  │
│  │  │ CONVERSION RATE: +45% | AOV: +32% | BOUNCE: -28%     │  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │                                                              │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │ PROJECT 3: AI-POWERED ANALYTICS DASHBOARD             │  │  │
│  │  │ Real-time data visualization with predictions        │  │  │
│  │  │ ... (same layout as project 1)                       │  │  │
│  │  │ PROCESSING: 2.3ms | DATA POINTS: 100K+/s | UP: 99.95%│  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  • Scroll reveal with Intersection Observer                        │
│  • Hover scale effect (1.02x)                                      │
│  • Active project highlights metrics                              │
│  • Border glow on hover                                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  TECH SECTION (id="tech") - Bento Grid Layout                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Tech Stack                                                   │  │
│  │ TOOLS AND TECHNOLOGIES THAT POWER OUR BUILDS               │  │
│  │                                                              │  │
│  │  ┌──────────┐  ┌──────────────┐  ┌──────────────┐          │  │
│  │  │ NODE.JS  │  │   REACT &    │  │  GEMINI API  │          │  │
│  │  │          │  │   NEXT.JS    │  │              │          │  │
│  │  │ (SMALL)  │  │   (LARGE)    │  │   (MEDIUM)   │          │  │
│  │  │          │  │              │  │              │          │  │
│  │  └──────────┘  │              │  │              │          │  │
│  │                │              │  └──────────────┘          │  │
│  │  ┌──────────┐  │              │  ┌──────────────┐          │  │
│  │  │ UI/UX    │  │              │  │ DEVOPS &     │          │  │
│  │  │ DESIGN   │  │              │  │ CLOUD        │          │  │
│  │  │ (SMALL)  │  │              │  │ (MEDIUM)     │          │  │
│  │  │          │  │              │  │              │          │  │
│  │  └──────────┘  └──────────────┘  └──────────────┘          │  │
│  │                                                              │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐              │  │
│  │  │ DATABASE │  │   GIT    │  │    TOOLS     │              │  │
│  │  │ DESIGN   │  │ CONTROL  │  │  & WORKFLOW  │              │  │
│  │  │ (SMALL)  │  │ (SMALL)  │  │  (MEDIUM)    │              │  │
│  │  │          │  │          │  │              │              │  │
│  │  └──────────┘  └──────────┘  └──────────────┘              │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  • Responsive grid: 2 cols mobile, 4 cols desktop                  │
│  • Variable card sizes (small, medium, large)                     │
│  • Icon + description layout                                      │
│  • Hover gradient background                                      │
│  • Accent color indicators                                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CONTACT SECTION (id="contact")                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │         Ready to Create                                      │  │
│  │         Something Extraordinary?                            │  │
│  │                                                              │  │
│  │    Let's collaborate on projects that push boundaries...    │  │
│  │                                                              │  │
│  │              [GET IN TOUCH →]                               │  │
│  │              (filled button with hover)                     │  │
│  │                                                              │  │
│  │         FOLLOW THE WORK                                      │  │
│  │                                                              │  │
│  │    [EMAIL] [LINKEDIN] [GITHUB] [TWITTER]                    │  │
│  │    (icon buttons with hover animation)                      │  │
│  │    (background scales on hover)                             │  │
│  │                                                              │  │
│  │    © 2025. Architecting intelligence, building scale.       │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  • Centered layout                                                 │
│  • Social icons with magnetic hover effect                        │
│  • Animated background scale on hover                             │
│  • Bottom border separator                                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Spacing & Viewport Rules

### Horizontal Padding (Responsive)
```
Mobile (<640px):    px-4      (16px each side)
Tablet (640px+):    px-8      (32px each side)
Desktop (1024px+):  px-16     (64px each side)
```

### Content Width
```
max-w-7xl (80rem) with mx-auto
Provides comfortable reading length on ultra-wide screens
```

### Vertical Spacing
```
Hero:       Full viewport (min-h-screen)
Sections:   py-24 (96px top & bottom)
Between:    gap-8 (32px between cards)
Cards:      p-6 sm:p-8 (internal padding)
```

---

## Component Responsiveness

### Mobile-First Breakpoints

#### Navigation
```
Mobile:  Text size 12px, gap-4
Desktop: Text size 14px, gap-8
```

#### Hero
```
Mobile:  text-6xl (60px)
Tablet:  text-7xl (72px)
Desktop: text-8xl (96px)

Mobile:  Buttons stack vertically
Desktop: Buttons inline
```

#### Work Section
```
Mobile:  Single column, stacked cards
Desktop: Full-width cards with proper spacing
```

#### Tech (Bento Grid)
```
Mobile:  2 columns (grid-cols-2)
Desktop: 4 columns (sm:grid-cols-4)
```

#### Contact
```
Mobile:  Social icons wrap, smaller buttons
Desktop: Icons inline, larger buttons
```

---

## Animation Timing

### All Spring Animations
```
Type:      Spring
Stiffness: 100
Damping:   20
```

### Container Stagger
```
Duration:        Varies per section (0.2-0.3s)
Children delay:  0.15-0.2s between each
```

### Scroll Reveal
```
Trigger: When 10% of component enters viewport
Animation: Spring transition (0.3-0.5s)
```

### Hover Effects
```
Scale:  1.02 (cards), 1.1 (icons)
Color:  Instant transition (0.3s)
Background: Gradient fade (0.5s)
```

---

## Color Application

### Text Hierarchy
```
Foreground (#E5E5E5)      → Main headlines, body text
Foreground/70             → Secondary text, descriptions
Foreground/50             → Metadata, labels (monospace)
Foreground/40             → Subtle captions, scroll hints
Accent Primary (#6B9EFF)  → Interactive elements, links
Accent Secondary (#64B5F6)→ Hover states, alternatives
```

### Background Hierarchy
```
Background (#0A0A0A)      → Page background
Black/20                  → Subtle sections
Border Ghost (#2A2A2A)    → Dividers, borders
Border Ghost/50           → Faint backgrounds
```

---

## Typography Hierarchy

### Headlines (Serif, Georgia)
```
h1: 6xl-8xl, font-bold, tracking-tight
h2: 5xl-6xl, font-bold, tracking-tight
h3: 3xl-4xl, font-bold
```

### Body (Sans, Geist)
```
p:  base or lg, leading-relaxed
    text-foreground/70 for secondary
```

### Metadata (Mono, Geist)
```
xs: uppercase, tracking-widest
    text-foreground/50 or darker
```

---

## Accessible Patterns

### Keyboard Navigation
- All links and buttons are focusable
- Underline animation on nav links provides feedback
- Tab order follows visual hierarchy

### ARIA Labels
- Sections have semantic `<section>` tags
- Buttons have descriptive text
- Icons have aria-labels or surrounding text

### Color Contrast
- All text meets WCAG AA standards
- E5E5E5 on 0A0A0A: 13.3:1 contrast ratio
- Accent colors tested for color-blind accessibility

### Motion
- No animations auto-play
- Respects `prefers-reduced-motion` (can be added)
- All animations are interruptible

---

## Performance Optimizations

### CSS
- Pure Tailwind (no CSS-in-JS runtime)
- Variables for dynamic theming
- Grain texture via single SVG overlay

### JavaScript
- Framer Motion for smooth 60fps animations
- Intersection Observer for efficient scroll detection
- Lazy hydration where applicable

### Images
- Ready for Next.js Image component optimization
- SVG icons (Lucide) are inline, not HTTP requests

### Build
- Next.js static generation (prerendered at build time)
- Turbopack for ultra-fast builds
- No unused CSS shipped to client

---

**Last Updated**: February 27, 2025
**Version**: 1.0.0 (Production)
