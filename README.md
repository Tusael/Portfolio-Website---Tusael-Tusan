# Tusael Tusan – Professional IT Portfolio

Personal portfolio website for **Tusael Tusan**, Information Technology Officer based in Malaysia. Built with React, Vite, Tailwind CSS, and TypeScript.

This project is a standalone client-side application designed to be pushed to **GitHub** and deployed directly to **Netlify** (or any static hosting provider) with **zero backend server or database requirements**.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** (comes with Node.js)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally in Development
```bash
npm run dev
```
The development server will start at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized static distribution in the `dist/` directory ready for deployment.

---

## 🌐 Deploying to Netlify

### Option A: Via GitHub (Recommended)
1. Push this repository to your **GitHub** account.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select **GitHub** and authorize access to your portfolio repository.
5. In the build settings, confirm:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**. Netlify will automatically build and publish your site with a free SSL certificate.

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## 📁 Content Architecture & Easy Editing

All content is strictly decoupled from the UI components. To update any information, edit the respective file in `src/data/`:

| Section | Data File to Edit | Description |
| :--- | :--- | :--- |
| **Profile & Hero** | `src/data/profile.ts` | Name, title, intro text, email, LinkedIn, location |
| **Experience** | `src/data/experience.ts` | Roles, organizations, periods, sector, responsibilities |
| **Skills** | `src/data/skills.ts` | Categorized technical & professional skill sets |
| **Projects** | `src/data/projects.ts` | Selected project records, technologies, roles, years |
| **Education** | `src/data/education.ts` | Degrees, institutions, graduation dates, CGPA |
| **Profile Photo** | `public/profile.png` | Primary portrait image (supports PNG, JPG, WebP) |

No layout code or component redesign is needed when updating content.

---

## 🛡️ Privacy & Confidentiality Notice

This portfolio conforms to public information standards:
- Internal government URLs, confidential system blueprints, credentials, and user data are strictly excluded.
- Personal referee details and phone numbers are withheld for official administrative inquiry only.

---

## 📜 License
Personal Portfolio © Tusael Tusan. All rights reserved.
