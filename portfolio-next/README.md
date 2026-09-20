# Priyanshu Portfolio

Standalone Next.js (App Router) portfolio with responsive, dependency-free interaction primitives.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production validation, run `npm run build`.

## Content and assets

- Update project data, skills, and journey milestones at the top of `src/app/page.tsx`.
- Portrait: `public/priyanshu-tiwari.png`
- Project previews: `public/projects/`
- CV download: `public/resume.pdf`
- Global design tokens and responsive styles: `src/app/globals.css`

## Notes before deployment

- The live project links and LinkedIn profile use the existing portfolio values.
- The 2025–26 journey copy is intentionally editable in the `milestones` array. Confirm its final wording before publishing.
- The existing resume PDF was recovered into `public/resume.pdf`; replace it whenever an updated CV is available.
