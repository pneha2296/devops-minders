# DevOps Minders

A frontend interview task built with React, TypeScript, Vite, and Tailwind CSS v4.

The project uses a CSS-first Tailwind v4 setup with design tokens defined in [src/index.css](/Users/neha/Desktop/devops-minders/src/index.css). The typography is powered by Google Fonts `Inter`, and the theme colors are mapped to reusable semantic tokens like `primary`, `secondary`, `background`, `foreground`, and `border`. The current visual direction uses a black site shell with white text and a red highlight bar for brand emphasis.

## Project Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd devops-minders
npm install
```

### 2. Start the development server

```bash
npm run dev
```

This starts the Vite development server with hot module replacement for fast iteration during UI development.

### 3. Build for production

```bash
npm run build
```

This runs TypeScript project checks and creates an optimized production build.

### 4. Preview the production build

```bash
npm run preview
```

### 5. Run lint checks

```bash
npm run lint
```

## Recommended Environment

- Node.js `22.12+` is recommended for the current Vite version in this repo.
- npm is used as the package manager in the current setup.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint
- Google Fonts `Inter`

## What We Used And Why

### React

React is used to build the UI in a component-based way. It makes the code easier to organize, reuse, and extend if this interview task grows into a larger product surface.

### TypeScript

TypeScript adds static typing and improves maintainability. For an interview task, it also makes implementation decisions easier to explain because props, state, and data shapes are more explicit.

### Vite

Vite gives a fast local development experience and a simple production build pipeline. It keeps the setup lightweight while still being production-friendly.

### Tailwind CSS v4

Tailwind is used for utility-first styling, and this repo uses Tailwind v4's CSS-first configuration model.

Why this matters:

- Theme tokens live directly in CSS instead of a separate `tailwind.config.js`.
- Semantic colors like `bg-primary` and `text-foreground` are easier to reuse consistently.
- The design system stays close to the actual styles being used.

### Google Fonts: Inter

`Inter` is used as the primary font because it is clean, readable, and works well for modern product interfaces. A fallback font stack is also defined for better rendering consistency.

## Tailwind Theme Setup

The theme is configured in [src/index.css](/Users/neha/Desktop/devops-minders/src/index.css) using Tailwind v4 features:

- `@import "tailwindcss"` loads Tailwind.
- `@theme inline` exposes custom design tokens as Tailwind utilities.
- `:root` stores the semantic design tokens.
- `@layer base` applies global font, background, foreground, and border styles.

This is why there is no `tailwind.config.js` file in the project. In Tailwind v4, a separate config file is optional, and for this project the CSS-first approach keeps the theme simpler and easier to explain.

## Design Tokens Used

The following semantic tokens are configured:

- `background`: `#000`
- `foreground`: `#fff`
- `card`: `#000`
- `card-foreground`: `#fff`
- `popover`: `#000`
- `popover-foreground`: `#fff`
- `primary`: `#e31e24`
- `primary-foreground`: `#fff`
- `secondary`: `#111`
- `secondary-foreground`: `#fff`
- `muted`: `#111`
- `muted-foreground`: `#a3a3a3`
- `accent`: `#111`
- `accent-foreground`: `#fff`
- `destructive`: `#e31e24`
- `border`: `#262626`
- `input`: `#262626`
- `ring`: `#e31e24`
- `chart-1`: `#e31e24`
- `chart-2`: `#8b0000`
- `chart-3`: `#1a1a1a`
- `chart-4`: `#2d2d2d`
- `chart-5`: `#0a0a0a`

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Interview Discussion Points

These are good topics an interviewer may ask about:

- Why choose Tailwind v4 CSS-first theming instead of a `tailwind.config` file?
- Why use semantic tokens like `primary` and `foreground` instead of hardcoding raw hex values in components?
- Why use Vite for this task instead of a heavier framework?
- What are the benefits of using TypeScript even in a small interview project?
- How would you scale this token system if dark mode or multiple brand themes were added later?
- Why keep font setup global instead of repeating font classes across components?

## Possible Next Improvements

- Replace the starter content in [src/App.tsx](/Users/neha/Desktop/devops-minders/src/App.tsx) with the final product UI for the interview task.
- Break the UI into smaller reusable components.
- Add responsive layout polish and state-driven interactions.
- Add tests once the product behavior is finalized.

## Project Structure

```text
src/
  App.tsx        Main React UI
  index.css      Tailwind import, theme tokens, global styles
  main.tsx       React app entry point
public/
  icons.svg      Static icon sprite
```
