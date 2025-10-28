# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React entry point (`main.tsx`), root layout (`App.tsx`), and feature code. Organize new component folders here alongside existing assets and styles.
- `src/lib/` stores framework-agnostic helpers such as `utils.ts`; keep reusable logic in this folder.
- `public/` holds static files served directly by Vite, while `index.html` bootstraps the application shell.
- Global styles and Tailwind layers live in `src/index.css` and `src/App.css`; co-locate component-specific styles within their component files.

## Build, Test, and Development Commands
- `npm run dev` — Launches the Vite dev server with hot reloading at `http://localhost:5173`.
- `npm run build` — Runs `tsc -b` for type-checking and emits an optimized production build via Vite.
- `npm run preview` — Serves the latest build output to validate production bundles locally.
- `npm run lint` — Executes ESLint across the workspace; resolve all warnings before pushing.

## Coding Style & Naming Conventions
Write modern TypeScript React components using two-space indentation. Use PascalCase for components and file names (e.g., `CarbonChart.tsx`), camelCase for functions and variables, and SCREAMING_SNAKE_CASE for constants. Keep modules focused; shared utilities belong in `src/lib`. Apply Tailwind utility classes inline and avoid custom CSS unless necessary. Rely on the repository ESLint configuration to surface style issues early.

## Testing Guidelines
Automated testing is not yet configured; when adding coverage, prefer Vitest with React Testing Library for component behavior. Place specs under `src/__tests__/` using the `*.test.tsx` suffix and mirror the module structure (`CarbonChart.test.tsx`). Until a test runner is wired in, document manual verification steps in your pull request and ensure `npm run lint` passes.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (e.g., `feat: add emissions calculator card`) to keep history searchable. Scope commits to a single logical change and include context in the body when necessary. Pull requests should describe intent, summarize key changes, and attach screenshots or screencasts for UI updates. Link related issues and confirm that linting and builds have been executed before requesting review.

## Environment & Configuration Tips
Expose client-side environment variables with the `VITE_` prefix inside `.env` files and never commit secrets. Tailwind is integrated through `@tailwindcss/vite`; consolidate base styles in `index.css` and reuse utility classes elsewhere. Do not check in `dist/` outputs or node_modules; ensure `.gitignore` remains intact.
