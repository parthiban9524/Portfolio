# Parthiban M Portfolio

A modern developer portfolio built with React.js, Vite, and Tailwind CSS. The content is stored in `src/data/resumeData.js` so the site can be updated easily before pushing to GitHub or deploying on Vercel.

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- lucide-react icons

## Project Structure

```text
.
├── src
│   ├── assets
│   ├── components
│   ├── data
│   │   └── resumeData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Push to GitHub

Create a new repository on GitHub, then run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your GitHub account and repository name.

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Select **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Vite**.
5. Use these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Select **Deploy**.

## Updating Resume Content

Edit `src/data/resumeData.js` to update your name, title, summary, skills, projects, experience, education, and contact links.

Note: the uploaded resume included a LinkedIn URL, email, phone number, and address. A GitHub URL was not present, so the `github` field is currently empty.
