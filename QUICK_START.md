# ⚡ Quick Start Guide

## 📦 Download & Setup

```bash
# 1. Extract the downloaded ZIP file
unzip nurassyl-portfolio.zip
cd nurassyl-portfolio

# 2. Install dependencies (takes 2-3 minutes)
npm install

# 3. Start development server
npm run dev
```

Open http://localhost:5173 🚀

## 🏗️ Build for Production

```bash
npm run build
```

Output: `dist/` folder

## 🌐 Deploy to GitHub Pages

### Quick Deploy (Automatic - Recommended)

```bash
# 1. Initialize git
git init
git add -A
git commit -m "Initial commit"

# 2. Push to GitHub
git branch -M main
git remote add origin https://github.com/nurassyl/nurassyl.github.io.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to: Repository Settings → Pages → Source: GitHub Actions
```

Your site will be live at: **https://nurassyl.github.io** 🎉

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (http://localhost:5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🎨 Features Included

- ✅ Light/Dark theme with system detection
- ✅ Responsive design
- ✅ Rounded favicon (auto-generated)
- ✅ Dynamic footer year
- ✅ Modern tech stack (React + Vite + Tailwind)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main app
│   │   ├── main.tsx             # Entry point
│   │   └── components/          # Components
│   └── styles/                  # CSS files
├── public/                      # Static files
├── index.html                   # HTML template
└── package.json                 # Dependencies
```

## 🔧 Configuration

### Update Personal Info

Edit `/src/app/App.tsx`:
- Bio section
- Contact links
- Tech stack

### Customize Theme

Edit `/src/styles/theme.css`:
- Colors
- Fonts
- Spacing

## 📞 Need Help?

- 📖 Full guide: See `DEPLOYMENT.md`
- 📧 Email: contact@nurassyl.com
- 💬 Telegram: @nurassyl_aldanov

---

⏱️ **Total setup time**: ~10 minutes from download to live site!
