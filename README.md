## Genetics Institute CMS (Sanity Studio)

This repository contains the Sanity Studio for the **Institut za Genetičke Resurse** website. It is a standalone CMS project, separate from the `genetics-institute-portal` Next.js frontend.

### Structure

- `sanity.config.ts` – Sanity Studio configuration
- `sanity.cli.ts` – Sanity CLI configuration
- `schemas/`
  - `documents/`
    - `news.ts` – News documents
    - `center.ts` – Centers
    - `project.ts` – Projects
    - `galleryAlbum.ts` – Gallery albums
  - `objects/`
    - `blockContent.ts` – Portable text blocks
    - `figure.ts` – Image with caption
    - `seo.ts` – SEO metadata
    - `galleryImage.ts` – Gallery image object
  - `singletons/`
    - `siteSettings.ts` – Global site settings (name, description, social, contact, logo)

### Running the Studio

1. Install dependencies (already done if you ran this via the agent):

   ```bash
   npm install
   ```

2. Set your Sanity project ID in `sanity.config.ts`:

   ```ts
   projectId: 'YOUR_PROJECT_ID',
   dataset: 'production',
   ```

3. Start the Studio:

   ```bash
   npx sanity dev
   ```

### Integration with `genetics-institute-portal`

- The Next.js app in `genetics-institute-portal` should **not** contain Sanity schemas.
- It will query this Sanity project using the `projectId`, `dataset`, and a read token (if needed), via GROQ and `@sanity/client` or `next-sanity`.
- The document shapes here mirror the existing TypeScript models:
  - News, Centers, Projects, Gallery albums/images, and Site settings.
