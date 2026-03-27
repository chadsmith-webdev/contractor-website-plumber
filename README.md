# FlowRight Plumbing - Demo Website

A warm, friendly, and professional plumber contractor website built with HTML5, CSS3, and vanilla JavaScript.

## 📋 Project Overview

This is a fully-featured demo website for a plumbing contractor business. It showcases:

- **24/7 Emergency Service** - Prominent emergency contact banner
- **Before & After Gallery** - Visual proof of work quality (6 projects)
- **Service Catalog** - 6 main service categories
- **Customer Testimonials** - 4 real-looking reviews with photos
- **FAQ Accordion** - 6 common questions answered
- **Quote Request Form** - Modal form for booking inspections
- **Local SEO Schema** - JSON-LD structured data for search engines
- **Fully Responsive** - Mobile-first design, works on all devices
- **Accessible** - WCAG AA compliant with keyboard navigation

## 🎨 Design System

### Color Palette

| Color          | Hex       | Usage                            |
| -------------- | --------- | -------------------------------- |
| Primary Orange | `#E8743B` | CTAs, accents, emergency banner  |
| Sage Green     | `#6B9C7A` | Trust signals, secondary accents |
| Warm White     | `#F5F3F0` | Backgrounds, surfaces            |
| Warm Dark      | `#2D2621` | Text, headings                   |
| Warm Gold      | `#D4A574` | Badges, credentials              |

### Typography

- **Display Font:** Poppins (warm, friendly, modern)
- **Body Font:** Inter (clean, readable)
- **Fallback:** System fonts for better performance

## 📁 File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling (CSS custom properties, responsive)
├── script.js           # Interactive features (vanilla JS, no dependencies)
├── docs/
│   └── specs/
│       └── 2026-03-27-plumber-website-design.md  # Design specification
└── README.md           # This file
```

## 🚀 Features

### 1. Emergency Banner

- Sticky header with 24/7 phone number
- Always visible for urgent customers
- Clickable to phone (tel: link)

### 2. Navigation

- Sticky navbar with logo
- Links to all main sections
- Mobile hamburger menu (responsive)
- Smooth scroll to sections

### 3. Hero Section

- Large, welcoming headline
- Trust badge ("Trusted by 2,000+ families")
- Call-to-action button
- Key metrics (reviews, response time)

### 4. Trust Signals

- 4 key credentials displayed prominently
- Years in business, licenses, satisfaction rate, 24/7 availability

### 5. Before & After Gallery

- 6 project showcases
- Side-by-side image comparisons
- Hover effect reveals after image
- Service tags (Emergency, Maintenance, Upgrade)
- Responsive grid layout

### 6. Services Section

- 6 service cards with icons
- Brief description per service
- "Get Quote" links

### 7. Testimonials

- 4 customer testimonials with photos
- Star ratings
- Authentic, specific quotes
- Hover effects

### 8. FAQ Accordion

- 6 common questions
- Smooth expand/collapse animation
- One item open at a time
- Icons for each question type

### 9. Final CTA Section

- Large call-to-action section
- Gradient background (sage green)
- Schedule button + phone link

### 10. Quote Request Modal

- Form with fields: Name, Phone, Email, Service Type, Message
- Submit button
- Close on button, overlay click, or Escape key
- Form validation (HTML5)

### 11. Footer

- Hours of operation
- Contact info (phone, email, address)
- Social media links
- Quick links to sections
- Copyright notice

## 🔧 Customization

### Change Company Name

Replace all instances of:

- `FlowRight` → Your company name
- `(555) 123-4567` → Your phone number
- `contact@flowrightplumbing.com` → Your email
- Address and location info

### Change Colors

Edit CSS custom properties in `styles.css`:

```css
:root {
  --color-primary: #e8743b; /* Main color */
  --color-secondary: #6b9c7a; /* Accent color */
  --color-text-dark: #2d2621; /* Text color */
  /* ... etc */
}
```

### Replace Images

Update image URLs in `index.html`:

- Hero background images in gallery items use Unsplash URLs
- Replace with your own before/after photos
- Update testimonial photos

### Add/Remove Services

Edit the services grid in `index.html`:

- Duplicate or remove `.service-card` divs
- Change icon, title, description

### Modify FAQ Questions

Edit FAQ items in `index.html`:

- Update question and answer text
- FAQ automatically works with the JavaScript

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (full-width, single column)
- **Tablet:** 640px - 1024px (2-column layouts where applicable)
- **Desktop:** > 1024px (full multi-column)

## ♿ Accessibility Features

- Semantic HTML5 (`<main>`, `<section>`, `<button>`, etc.)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- Color contrast meets WCAG AA standards
- Form labels properly associated with inputs
- Screen reader friendly

## 📊 Performance

- Lightweight vanilla JavaScript (no frameworks)
- CSS custom properties for maintainability
- Lazy loading ready for images
- Minifiable CSS and JS
- Mobile-first approach
- No external dependencies (except Google Fonts & Font Awesome)

## 🔍 SEO

- Meta description included
- Open Graph tags ready for social sharing
- Local SEO schema (Schema.org JSON-LD)
- Semantic HTML structure
- Accessible navigation and headings

## 🎯 Local SEO Schema

The site includes structured data for:

- Business details (name, phone, address)
- Opening hours (including 24/7 emergency)
- Aggregate rating (5.0 stars)
- Service areas

Update the JSON-LD in `index.html` with your actual business info.

## 🚀 Usage

1. **Open in browser:** Simply open `index.html` in any modern browser
2. **Deploy:** Upload all files to your web server
3. **Customize:** Update company info, colors, images per instructions above
4. **Form handling:** The quote form currently logs to console; set up backend integration as needed

## 📋 Form Integration

The quote request form is currently set up to:

1. Validate fields (HTML5)
2. Log data to console
3. Show success message
4. Reset form

To connect to an actual backend:

```javascript
// In script.js, update the handleSubmit method:
const response = await fetch("/api/quote-requests", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

## 🔗 External Resources

- **Google Fonts:** Poppins, Inter
- **Font Awesome:** Icons (CDN)
- **Unsplash:** Demo images

## 📝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Does NOT support: IE11 (uses CSS custom properties, IntersectionObserver)

## 🎓 What's Included

✅ Fully responsive design  
✅ Mobile hamburger menu  
✅ Modal form with validation  
✅ FAQ accordion with smooth animations  
✅ Before/after image gallery  
✅ Accessible navigation (WCAG AA)  
✅ Local SEO schema  
✅ Production-grade HTML/CSS/JS  
✅ No dependencies (vanilla JS)  
✅ Ready to customize

## 📞 Contact Implementation

The site includes multiple ways to contact:

1. **Emergency banner** - Always-visible phone number
2. **Final CTA section** - Large call-to-action with phone link
3. **Quote form modal** - Multi-field form submission
4. **Footer** - Hours, address, email, phone, social

## 🔄 Next Steps

- Replace demo images with your actual before/after photos
- Update company information and contact details
- Customize colors to match your brand
- Add your testimonials
- Set up form backend subscription
- Add Google Analytics or other tracking
- Deploy to production server

---

**Created:** March 27, 2026  
**Design:** Warm & Human Approach  
**Status:** Ready for customization and deployment
