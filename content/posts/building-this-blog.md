---
title: "Building This Site"
date: "2025-01-01"
slug: "building-this-blog"
excerpt: "How I built a HyperCard-style website using Next.js."
---

# Building This Site

I rebuilt my site to look like HyperCard, the 1987 Mac software that was basically a stack of cards you could navigate through. Thick black borders, chunky buttons, diagonal line patterns on the desktop.

## Tech Stack

**Next.js 15** with the App Router. Modern framework, retro aesthetic.

## Key Features

### Desktop Pattern

CSS repeating gradient for those diagonal lines:

```css
background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 1px,
  rgba(0, 0, 0, 0.03) 1px,
  rgba(0, 0, 0, 0.03) 2px
);
```

### Draggable UI

The HyperCard window and desktop icons are draggable. Used React `useState` and global mouse event listeners. Click without dragging navigates, drag moves the icon.

### 3D Buttons

Layered CSS `box-shadow` for that beveled effect:

```css
box-shadow:
  inset 3px 3px 0px #FFFFFF,
  inset 4px 4px 0px #F0F0F0,
  inset -3px -3px 0px #888888,
  inset -4px -4px 0px #666666,
  2px 2px 0px #000000;
```

### GitHub Issues Guestbook

The guestbook uses GitHub Issues as the backend. Each entry creates an issue with the label "guestbook". Fetch them to display, close them to moderate.

### Typography

Courier New everywhere. Enabled font smoothing and set weight to 550 for readability.

## Mobile

Desktop icons hidden on mobile. Window uses relative positioning with proper spacing instead of absolute centering.

That's it. Modern tech, old-school look.
