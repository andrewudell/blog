---
title: "How I Built This Blog"
date: "2025-12-23"
slug: "building-this-blog"
excerpt: "A behind-the-scenes look at creating a composition notebook-styled blog with Next.js and Tailwind CSS."
---

# How I Built This Blog

Creating this notebook-styled blog was a fun project that combined my love for nostalgic design with modern web technologies. Here's how I did it.

## The Vision

I wanted a blog that felt personal and handwritten, like a real composition notebook. The key visual elements were:

- Off-white paper background (#FFFEF0)
- Horizontal ruled lines spaced 32px apart
- A vertical red margin line on the left
- Handwriting-style fonts for headers
- Clean serif fonts for body text

## The Technical Stack

I chose **Next.js 15** with the App Router for several reasons:

1. **Static Site Generation** - Perfect for blogs, with fast load times
2. **File-based routing** - Clean and intuitive
3. **Built-in optimization** - Images, fonts, and more
4. **Vercel deployment** - Zero configuration needed

For styling, I used **Tailwind CSS** combined with custom CSS for the notebook aesthetic. Markdown posts are processed with **remark** and **gray-matter**.

## The Notebook Aesthetic

The trickiest part was nailing the notebook look. Here's how I achieved it:

### Ruled Lines

Using CSS repeating gradients:

```css
background: repeating-linear-gradient(
  transparent,
  transparent 31px,
  #D1E5F4 31px,
  #D1E5F4 32px
);
```

### Margin Line

A simple pseudo-element:

```css
.notebook-page::before {
  content: '';
  position: fixed;
  left: 60px;
  width: 2px;
  background: #E74C3C;
}
```

### Typography

I used **Caveat** for headings (that handwriting feel) and **Merriweather** for body text (readable serif). Both are loaded from Google Fonts.

## Content Management

Posts are stored as markdown files in `content/posts/` with frontmatter:

```yaml
---
title: "Post Title"
date: "2025-12-25"
slug: "post-slug"
excerpt: "Brief description"
---
```

The build process reads all markdown files, parses them, and generates static pages. Simple and effective.

## Deployment

Deployed to Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on every push

That's it! No configuration needed—Vercel detects Next.js automatically.

## What's Next?

Possible future enhancements:

- Tags and categories
- Search functionality
- RSS feed
- Comments (maybe with Giscus)
- Dark mode (dark notebook theme?)

But for now, I'm keeping it simple. Just like a real notebook.

## Conclusion

This project reminded me that sometimes the best designs are inspired by the physical world. A composition notebook is a timeless design that translates beautifully to the web.

If you're interested in building something similar, all you need is Next.js, some CSS creativity, and a love for nostalgic design.
