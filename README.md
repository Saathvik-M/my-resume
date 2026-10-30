# Saathvik Varma Mandapati — Online Resume

A dark-themed, responsive personal resume website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for deployment on **GitHub Pages**.

![Made with React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)

## Features

- ✨ Elegant dark-themed design with indigo accent
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible with keyboard focus states and semantic HTML
- 🎭 Scroll-triggered animations
- ⚡ Lightweight, fast-loading
- 📄 Resume download button
- 🚀 GitHub Pages auto-deployment via GitHub Actions

## Project Structure

```
O_RESUME/
├── public/
│   └── favicon.svg              # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky navigation with mobile menu
│   │   ├── Hero.tsx              # Full-screen hero with CTA buttons
│   │   ├── About.tsx             # Professional summary
│   │   ├── Skills.tsx            # Skill categories with chips
│   │   ├── Experience.tsx        # Timeline-style experience cards
│   │   ├── Projects.tsx          # Project showcase cards
│   │   ├── Education.tsx         # Education, certifications, achievements
│   │   ├── Contact.tsx           # Contact details and social links
│   │   └── Footer.tsx            # Minimal footer
│   ├── data/
│   │   └── resume.ts             # ← ALL resume content lives here
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Scroll-triggered animation hook
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   ├── index.css                 # Global styles & Tailwind directives
│   └── vite-env.d.ts             # Vite type declarations
├── .github/workflows/
│   └── deploy.yml                # GitHub Pages deployment workflow
├── index.html                    # HTML entry with SEO meta tags
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saathvik-M/my-resume.git
   cd my-resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

## Updating Your Resume

All resume content is in a single file: **`src/data/resume.ts`**.

Edit the `resumeData` object to update your:
- Name, title, and summary
- Contact information and links
- Education entries
- Work experience
- Projects
- Skills
- Certifications and achievements

The website will automatically reflect your changes.

## Adding Your PDF Resume

1. Replace the included PDF at **`public/resume.pdf`** with your latest resume.
2. The "Download Resume" buttons link to it using the configured Vite base path.
3. Rebuild and redeploy.

## Deploying to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup steps:**

1. Push this project to the `my-resume` GitHub repository.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select **GitHub Actions**.
4. Push a commit to the `main` branch — the site will deploy automatically.

Your site will be live at: `https://saathvik-m.github.io/my-resume/`

### Manual Deployment

```bash
npm run build
# Upload the contents of the `dist/` folder to your hosting provider
```

### Changing the Repository Name

If your repository has a different name, update the `base` path in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/',
})
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  accent: {
    DEFAULT: '#6366F1',  // Change this to your preferred accent
    hover: '#818CF8',
  },
}
```

### Fonts

The site uses **Inter** from Google Fonts. To change fonts, update the `<link>` tag in `index.html` and the `fontFamily` in `tailwind.config.js`.

## License

This project is open source and available for personal use.
