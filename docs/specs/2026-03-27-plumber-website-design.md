# Plumber Demo Website - Design Specification

**StoryBrand Framework Edition**

**Date:** March 27, 2026 (Updated: StoryBrand Pivot)  
**Project:** Narrative-Driven Plumber Website with StoryBrand Framework  
**Status:** Approved for Implementation

---

## 1. Project Overview

A narrative-driven plumber website using Donald Miller's **StoryBrand framework** to guide customers through a psychological journey. Instead of listing features, the site tells a story where the customer is the hero, plumbing problems are the obstacle, and FlowRight is the guide.

**Primary Use Case:** Homeowners with urgent plumbing needs discover the company, understand their problem, learn how FlowRight solves it, and take action.

**Target Audience:**

- Homeowners experiencing emergency plumbing issues
- Property managers with maintenance needs
- Small businesses needing reliable solutions

**StoryBrand Arc:** Character (homeowner) → Problem (2 AM crisis) → Guide (FlowRight) → Plan (5-step process) → Call-to-Action (call now) → Success (peace of mind) → Failure (consequences of inaction)

---

## 2. Visual Identity

### Color Palette

| Color          | Hex       | Usage                                   |
| -------------- | --------- | --------------------------------------- |
| Primary Orange | `#E8743B` | CTAs, accents, emergency banner, guides |
| Sage Green     | `#6B9C7A` | Secondary actions, success elements     |
| Warm White     | `#F5F3F0` | Backgrounds, card surfaces              |
| Warm Dark      | `#2D2621` | Text, headings, authority               |
| Warm Gold      | `#D4A574` | Credentials, trust signals              |
| Neutral Gray   | `#8B8680` | Secondary text, borders                 |

**Tone:** Empathetic, action-oriented, reassuring. Like a trusted expert friend during a crisis.

### Typography

- **Display Font:** Poppins (warm, modern, friendly)
- **Body Font:** Inter (clean, readable, professional)

**Type Scale:**

- H1: 56px (hero crisis narrative)
- H2: 40px (section titles)
- H3: 28px (subsections)
- Body: 16px (readable, comfortable)
- Small: 14px (secondary info)

---

## 3. Page Architecture - StoryBrand Structure

### 3.1 Emergency Banner (Fixed Top)

- **Content:** "Pipe burst at 2 AM? We answer."
- **Background:** Primary orange (#E8743B)
- **Purpose:** Immediate problem acknowledgment + solution availability

### 3.2 Navigation Bar (Sticky)

- **Nav Links:** Problem | Solution | Results | Reviews | FAQ
- _Follows hero's psychological journey instead of generic sections_
- **Mobile:** Hamburger menu (responsive)

---

### 3.3 Hero Section - Character + Crisis

- **Headline:** "It's 2 AM. Your Pipes Just Failed. **Now What?**"
- **Subheading:** "A burst pipe. A water heater that quit. A backed-up drain the night before guests arrive. These emergencies don't wait for business hours. Neither do we."
- **Metrics:**
  - 15+ years in business
  - 2-hour emergency response
  - 24/7 availability
- **Narrative Function:** Establish customer as hero; plumbing emergency as the crisis

---

### 3.4 Trust Signals Section

- **Format:** 4 value indicators (responsive grid)
- **Content:** Years of experience, response time, 24/7 availability, licenses & insurance
- **Purpose:** Build credibility before deepening the problem awareness

---

### 3.5 Problem Section _(NEW - StoryBrand)_

- **Format:** 3 problem cards + consequences list
- **Problems Featured:**
  1. **The Burst Pipe:** Water spreads through walls. Mold grows. Cost escalates.
  2. **No Hot Water:** Family discomfort and inconvenience
  3. **Clogged Drain:** Standing water backup issues
- **Failure List:** Mold growth, structural damage, health hazards, insurance complications, lost time, stress
- **Narrative Function:** Validate customer's crisis; emphasize stakes of inaction

---

### 3.6 Guide Section _(NEW - StoryBrand)_

- **Format:** Text (left) + team photo (right, stacked on mobile)
- **Headline:** "You don't need a hero. You need a guide."
- **Company intro with 5 differentiators:**
  1. ✓ 2-Hour Emergency Response
  2. ✓ 24/7 Availability
  3. ✓ Transparent Pricing
  4. ✓ 1-Year Warranty
  5. ✓ Licensed & Insured
- **Narrative Function:** Position company as trustworthy expert guide; reduce customer anxiety

---

### 3.7 Solution Section - The Plan _(NEW - StoryBrand)_

- **Format:** 5 numbered process steps in responsive grid
- **Steps:**
  1. You Call
  2. We Arrive & Diagnose
  3. We Quote (transparent pricing)
  4. We Fix (expert repair)
  5. Warranty + Peace of Mind
- **Narrative Function:** Clear path to resolution; removes overwhelm

---

### 3.8 Results Section _(Renamed from Before & After Gallery)_

- **Title:** "Real Problems, Real Solutions"
- **Format:** 6-8 case studies with before/after images
- **Narrative Function:** Proof that others with similar problems found success

---

### 3.9 Reviews Section _(Renamed from Testimonials)_

- **Format:** 4-6 customer testimonial cards
- **Per Card:** Customer photo, name, 5-star rating, specific outcome quote
- **Narrative Function:** Social proof and customer success stories

---

### 3.10 Objections Handled _(Renamed from FAQ)_

- **Format:** Accordion with 8-10 questions addressing customer concerns
- **Purpose:** Remove final obstacles to action before final CTA
- **Narrative Function:** Address reservations in StoryBrand "objections" phase

---

### 3.11 Final CTA - Call to Action _(Updated)_

- **Headline:** "Your Plumbing Doesn't Wait. Neither Should You."
- **Subheading:** "Call now for emergency help or schedule your free inspection today."
- **Options:** Schedule button + Call link
- **Narrative Function:** Final push to take action; urgency + reassurance

---

### 3.12 Footer

- **Content:** Hours, address, service area, quick links, phone, email, social media
- **Purpose:** Trust signals + alternative contact paths

---

## 4. Interactive Components

- **Contact/Quote Form Modal:** Captures free inspection requests
- **Mobile Menu:** Full StoryBrand navigation on small screens

---

## 5. Responsive Design

- **Mobile:** < 768px (single column)
- **Tablet:** 768px - 1024px (2-column layouts)
- **Desktop:** > 1024px (full multi-column)

---

## 6. Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Flexbox/Grid, custom properties, responsive design
- **JavaScript** - Vanilla (modal, accordion, mobile menu)
- **Fonts:** Google Fonts (Poppins, Inter)
- **Icons:** Font Awesome 6.4.0

---

## 7. Company Details

- **Company Name:** FlowRight Plumbing
- **Phone:** (555) 123-4567
- **Service Area:** 20-mile radius
- **Founded:** 2010 (15+ years)
- **Guarantee:** 1-year workmanship warranty

---

## 8. StoryBrand Success Metrics

✅ Customer sees their problem reflected (2 AM crisis)  
✅ Company positioned as trustworthy guide (credentials, experience)  
✅ Clear 5-step plan to resolution (removes overwhelm)  
✅ Proof others succeeded (before/after + reviews)  
✅ Objections addressed (FAQ/Objections section)  
✅ Multiple paths to action (call, schedule)  
✅ Urgency balanced with reassurance

---

**Design Framework:** Donald Miller's StoryBrand  
**Implementation Status:** ✅ HTML & CSS complete | ⏳ AI images pending | ⏳ Content/testimonials pending  
**Last Updated:** Current session
