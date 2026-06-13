# StyleSync Design System

## 🎨 Visual Identity

### Color Palette

```
PRIMARY (Beige)
Hex: #F5F1E8
RGB: (245, 241, 232)
Usage: Main backgrounds, buttons, cards

SECONDARY (Off-white)
Hex: #FDFBF7
RGB: (253, 251, 247)
Usage: Light backgrounds, secondary surfaces

ACCENT (Warm Brown)
Hex: #8B7355
RGB: (139, 115, 85)
Usage: Highlights, accents, CTAs

TEXT (Dark Gray)
Hex: #2C2C2C
RGB: (44, 44, 44)
Usage: Primary text, headings

BACKGROUND (White)
Hex: #FFFFFF
RGB: (255, 255, 255)
Usage: Main surfaces, cards

SUCCESS
Hex: #6BA86B
RGB: (107, 168, 107)
Usage: Success states, positive actions

WARNING
Hex: #D4A574
RGB: (212, 165, 116)
Usage: Warnings, caution states

ERROR
Hex: #C84C3C
RGB: (200, 76, 60)
Usage: Errors, destructive actions
```

### Typography

#### Font Families
- **Display & Headings**: Montserrat (Bold, SemiBold)
- **Body & UI**: Poppins (Regular, Medium, SemiBold)
- **Monospace**: JetBrains Mono (for code/technical content)

#### Font Sizes & Weights

| Use Case | Font | Size | Weight | Line Height |
|----------|------|------|--------|------------|
| Display | Montserrat | 32px | Bold | 40px |
| H1 | Montserrat | 28px | Bold | 36px |
| H2 | Montserrat | 24px | Bold | 32px |
| H3 | Montserrat | 20px | SemiBold | 28px |
| H4 | Montserrat | 18px | SemiBold | 26px |
| Body Large | Poppins | 16px | Regular | 24px |
| Body | Poppins | 14px | Regular | 22px |
| Small | Poppins | 12px | Regular | 18px |
| Caption | Poppins | 11px | Regular | 16px |
| Button | Poppins | 14px | SemiBold | 20px |
| Label | Poppins | 12px | Medium | 18px |

### Spacing System

```
XS:   4px
SM:   8px
MD:   16px
LG:   24px
XL:   32px
2XL:  48px
3XL:  64px
```

### Border Radius

```
None:    0px
SM:      4px
MD:      8px
LG:      12px
XL:      16px
Full:    9999px (pill-shaped)
```

### Shadows

```
Shadow SM:    0 1px 2px rgba(0, 0, 0, 0.05)
Shadow MD:    0 4px 6px rgba(0, 0, 0, 0.1)
Shadow LG:    0 10px 15px rgba(0, 0, 0, 0.1)
Shadow XL:    0 20px 25px rgba(0, 0, 0, 0.15)
```

## 📱 UI Components

### Button Variants

#### Primary Button
- Background: #8B7355 (Warm Brown)
- Text: #FFFFFF (White)
- Padding: 12px 24px
- Border Radius: 8px
- Font: Poppins 14px SemiBold

#### Secondary Button
- Background: #F5F1E8 (Beige)
- Text: #8B7355 (Warm Brown)
- Border: 2px solid #8B7355
- Padding: 12px 24px
- Border Radius: 8px

#### Tertiary Button
- Background: transparent
- Text: #8B7355 (Warm Brown)
- Padding: 12px 24px
- Border Radius: 8px

### Cards

- Background: #FFFFFF (White)
- Border: 1px solid #F5F1E8
- Border Radius: 12px
- Padding: 16px
- Shadow: Shadow MD

### Input Fields

- Background: #FDFBF7 (Off-white)
- Border: 1px solid #E8E4DC
- Border Radius: 8px
- Padding: 12px 16px
- Focus: Border color #8B7355, shadow #8B7355 20%
- Font: Poppins 14px Regular

### Tags/Chips

- Background: #F5F1E8 (Beige)
- Text: #2C2C2C (Dark Gray)
- Padding: 6px 12px
- Border Radius: 16px (pill)
- Font: Poppins 12px Regular

## 🎬 Screen Mockups

### 1. Splash Screen
```
┌─────────────────────────────┐
│                             │
│         StyleSync           │
│         [Logo]              │
│                             │
│   "Style Your Life"         │
│                             │
│        [Get Started]        │
│                             │
└─────────────────────────────┘
```

### 2. Home Dashboard
```
┌─────────────────────────────┐
│  ☰  StyleSync        🔔     │
├─────────────────────────────┤
│                             │
│  Today, June 13             │
│  📍 Weather: 72°F, Sunny    │
│                             │
│  How are you feeling?       │
│  😊 😍 😌 😴 😤              │
│                             │
│  ┌────────────────────────┐ │
│  │  Today's Outfit Pick   │ │
│  │  [Outfit Image]        │ │
│  │  Blue Shirt + Jeans    │ │
│  │  Perfect for 72°F      │ │
│  │        [Refresh] [❤️]  │ │
│  └────────────────────────┘ │
│                             │
│  Quick Actions:             │
│  [📸 Scan] [👗 Browse]     │
│                             │
└─────────────────────────────┘
```

### 3. Wardrobe Scanner
```
┌─────────────────────────────┐
│  Back  Scan Clothes    ✓    │
├─────────────────────────────┤
│                             │
│     [Camera Preview]        │
│     [=========]             │
│                             │
│  Align clothing item        │
│  in the frame               │
│                             │
│           ⭕                │
│                             │
│      [Take Photo]           │
│                             │
└─────────────────────────────┘
```

### 4. Item Details & Tagging
```
┌─────────────────────────────┐
│  Back  Add Item        ✓    │
├─────────────────────────────┤
│                             │
│    [Item Preview]           │
│                             │
│  Category:                  │
│  [Shirt ▼]                  │
│                             │
│  Color:                     │
│  ☐ Blue ☐ Red ☐ Green     │
│  ☐ Black ☐ White           │
│                             │
│  Style Tags:                │
│  [Casual] [Formal] [Sport]  │
│                             │
│  Occasions:                 │
│  ☐ Work ☐ Casual            │
│  ☐ Party ☐ Gym              │
│                             │
│         [Save Item]         │
│                             │
└─────────────────────────────┘
```

### 5. Wardrobe Gallery
```
┌─────────────────────────────┐
│  ☰  My Wardrobe       🔍    │
├─────────────────────────────┤
│                             │
│  Filter: [All ▼]            │
│                             │
│  ┌──────┐ ┌──────┐          │
│  │ Shirt│ │Pants │          │
│  │  [1] │ │  [3] │          │
│  └──────┘ └──────┘          │
│  ┌──────┐ ┌──────┐          │
│  │Dress │ │Shoes │          │
│  │  [2] │ │  [5] │          │
│  └──────┘ └──────┘          │
│                             │
│           ➕ Add More       │
│                             │
└─────────────────────────────┘
```

### 6. Outfit Recommendation
```
┌─────────────────────────────┐
│  Today's Picks         ⊕    │
├─────────────────────────────┤
│                             │
│   Weather: 72°F, Sunny      │
│   Mood: Feeling Good 😊     │
│                             │
│  ┌────────────────────────┐ │
│  │   OUTFIT #1            │ │
│  │                        │ │
│  │   [Avatar with fit]    │ │
│  │                        │ │
│  │   Blue Shirt           │ │
│  │   Black Jeans          │ │
│  │   White Sneakers       │ │
│  │                        │ │
│  │   [❤️ Save] [👀 View] │ │
│  └────────────────────────┘ │
│                             │
│  ┌────────────────────────┐ │
│  │   OUTFIT #2            │ │
│  │   [Avatar with fit]    │ │
│  │   ...                  │ │
│  └────────────────────────┘ │
│                             │
│         [← Prev] [Next →]   │
│                             │
└─────────────────────────────┘
```

### 7. Avatar Try-On
```
┌─────────────────────────────┐
│  Back  Virtual Try-On  ✓    │
├─────────────────────────────┤
│                             │
│     [Avatar 3D Model]       │
│     [with outfit]           │
│                             │
│     [360° Rotation]         │
│                             │
│  Outfit Details:            │
│  Blue Shirt • Black Jeans   │
│  • White Sneakers           │
│                             │
│  Size: Medium (Fits Well ✓) │
│                             │
│  [❤️ Save] [More Options]   │
│                             │
└─────────────────────────────┘
```

## 🎯 Interaction Patterns

### Loading States
- Progress indicator with beige color
- Subtle animation (smooth 1.5s loop)

### Error States
- Red (#C84C3C) error message
- Icon + descriptive text
- Retry button

### Success States
- Green (#6BA86B) checkmark
- Brief toast notification (2-3 seconds)

### Transitions
- Page transitions: fade in/out (200ms)
- Button press: opacity change (100ms)
- Swipe navigation: smooth (300ms)

## 📐 Responsive Design

### Mobile First (Primary)
- Base breakpoint: 360px (smallest phones)

### Tablet Considerations
- Adjust padding/margins at 768px+
- Grid layouts adapt to 2-3 columns

### Desktop Web (Future)
- Responsive at 1024px+
- Desktop navigation patterns

## ♿ Accessibility

- Minimum touch target: 48x48px
- Color contrast ratio: 4.5:1 for text
- Alt text for all images
- Clear focus states (outline: 2px solid #8B7355)
- Screen reader support for all interactive elements