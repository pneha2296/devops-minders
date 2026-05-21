# DevOps Minders

A high-performance frontend portfolio built for a Senior DevOps engineer. This project was developed as an interview task using **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

## 🛠 Tech Stack & Tools

* **React 19 & TypeScript**: Component-based architecture with strict type safety.
* **Vite**: Lightning-fast build tool and development server.
* **Tailwind CSS v4**: Utility-first styling utilizing the new CSS-first configuration model.
* **Framer Motion**: Powering high-end orbital animations and scroll reveals.
* **Lucide React**: For consistent, accessible iconography.
* **AI Collaboration**: Built with the strategic assistance of **Gemini** and **ChatGPT** for architectural patterns and logic optimization.
* **Asset Management**: Images extracted from reference designs using **[extract.pics](https://extract.pics/)**.

## 📂 Project Structure

```text
src/
├── assets/             # Images, logos, and static assets
├── components/         # Reusable UI building blocks
│   ├── ui/             # Low-level primitives (Buttons, Cards)
│   ├── contact/        # Contact-page modules (Form, Map)
│   ├── home/           # Landing page sections (Hero, Services)
│   └── layout/         # Persistent wrappers (Navbar, Footer)
├── constants/          # Nav links and service data
├── hooks/              # Custom React hooks
├── lib/                # Shared utilities (utils.ts)
├── pages/              # Main route components (Home, Contact)
├── types/              # TypeScript interfaces
├── App.tsx             # Root component and routing
├── index.css           # Tailwind v4 theme and global styles
└── main.tsx            # React entry point
```

## 🎨 Tailwind v4 Theme Setup

This project leverages the **CSS-first configuration** model. All design tokens (primary, background, border) are defined as CSS variables within `src/index.css`.

## ⚙️ Project Setup

### 1. Install
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build
```bash
npm run build
```