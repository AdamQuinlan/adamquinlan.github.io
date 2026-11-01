# adamquinlan.github.io

Personal portfolio site, built with [Astro](https://astro.build) and published on GitHub Pages.

## Editing content

Almost all text lives in `src/data/site.ts`: name, headline, skills, experience, education and projects.
Text wrapped in `[[double brackets]]` is a placeholder and shows with a dashed highlight until replaced.

- Add a project: add an entry to the `projects` list; its page is created at `/projects/<slug>` automatically.
- Add a new page: create a file in `src/pages/`, e.g. `src/pages/writing.astro` becomes `/writing`.
- Add a résumé PDF: put it in `public/resume.pdf` and set `resumePdf: '/resume.pdf'`.

## Publishing

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
https://adamquinlan.github.io. One-time setup: in the repository's Settings → Pages, set Source to **GitHub Actions**.

## Running locally (optional)

```
npm install
npm run dev
```
