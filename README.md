# My Notebook Blog

A personal blog styled like a composition notebook, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📔 Composition notebook aesthetic with ruled lines and red margin
- ✍️ Handwriting-style fonts for headers
- 📝 Markdown support for blog posts
- 🚀 Static site generation for fast performance
- 📱 Responsive design
- 🎨 Clean, minimalist codebase

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Writing Posts

Create new blog posts in the `content/posts/` directory as Markdown files:

```markdown
---
title: "Your Post Title"
date: "2025-12-25"
slug: "your-post-slug"
excerpt: "A brief description of your post"
---

# Your Post Content

Write your post content here using Markdown...
```

The blog will automatically detect and display new posts.

## Project Structure

```
AU-Site/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles with notebook aesthetic
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (table of contents)
│   └── posts/[slug]/       # Individual post pages
├── components/             # React components
│   ├── NotebookContainer.tsx
│   ├── PostCard.tsx
│   ├── PostContent.tsx
│   └── Navigation.tsx
├── content/posts/          # Markdown blog posts
├── lib/                    # Utility functions
│   ├── posts.ts            # Post fetching logic
│   └── markdown.ts         # Markdown processing
└── types/                  # TypeScript types
```

## Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Vercel will automatically detect Next.js and configure everything

5. Click "Deploy" and wait for the build to complete

6. Your blog will be live at `your-project-name.vercel.app`

### Custom Domain (Optional)

To use a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain and follow the DNS configuration instructions

## Customization

### Change Blog Title

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Blog Title",
  description: "Your blog description",
};
```

### Modify Colors

Edit `tailwind.config.ts` to change the notebook colors:

```typescript
notebook: {
  paper: "#FFFEF0",  // Paper background
  line: "#D1E5F4",   // Ruled lines
  margin: "#E74C3C", // Margin line
  text: "#2C3E50",   // Text color
}
```

### Change Fonts

Edit `app/globals.css` to use different Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## Building for Production

```bash
npm run build
npm run start
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Remark** - Markdown processing
- **Gray Matter** - Frontmatter parsing
- **Date-fns** - Date formatting

## License

MIT

## Acknowledgments

Built with ❤️ using Next.js and inspired by classic composition notebooks.
