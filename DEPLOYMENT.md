# Deployment Guide - nurassyl.github.io

## 📥 Download Project

In Figma Make, click the **"Export"** or **"Download"** button in the top-right corner to download the project as a ZIP file.

## 🚀 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation Steps

1. **Extract the downloaded ZIP file**
   ```bash
   unzip project.zip
   cd project-folder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or if you prefer pnpm
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   
   Open http://localhost:5173 in your browser

## 🏗️ Build for Production

```bash
npm run build
# or
pnpm build
```

This creates a `dist/` folder with optimized production files.

## 📦 Deploy to GitHub Pages

### Option 1: Manual Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Navigate to dist folder**
   ```bash
   cd dist
   ```

3. **Initialize git and push to gh-pages branch**
   ```bash
   git init
   git add -A
   git commit -m 'Deploy to GitHub Pages'
   git branch -M gh-pages
   git remote add origin https://github.com/nurassyl/nurassyl.github.io.git
   git push -f origin gh-pages
   ```

### Option 2: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`** in your project root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Push to GitHub**
   ```bash
   git init
   git add -A
   git commit -m 'Initial commit'
   git branch -M main
   git remote add origin https://github.com/nurassyl/nurassyl.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

### Option 3: Using vite.config.ts base path

Update `/vite.config.ts`:

```typescript
export default defineConfig({
  base: '/', // For nurassyl.github.io
  // ... rest of config
})
```

## 🔧 Project Structure

```
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main application component
│   │   ├── main.tsx          # Entry point
│   │   └── components/       # React components
│   └── styles/               # CSS styles
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.ts           # Vite configuration
```

## 📝 Environment

- **Framework**: React 18.3
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Theme**: next-themes (light/dark mode)

## 🌐 Live Site

After deployment, your site will be available at:
**https://nurassyl.github.io**

## 💡 Tips

- The site automatically detects system theme preference
- Theme switcher allows toggling between light and dark modes
- Favicon is dynamically generated with rounded corners
- Footer year updates automatically
- Fully responsive design

## 🐛 Troubleshooting

**Issue: Blank page after deploy**
- Check if `base` in `vite.config.ts` is set correctly
- Ensure GitHub Pages is enabled in repository settings

**Issue: 404 on refresh**
- GitHub Pages doesn't support SPA routing by default
- This is a single-page portfolio, so it shouldn't be an issue

**Issue: Favicon not showing**
- Clear browser cache
- Wait a few minutes for GitHub Pages to propagate changes
