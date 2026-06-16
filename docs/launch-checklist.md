# NotableBIT.com Launch Checklist

## Redirect decisions

These redirects are implemented in `next.config.ts` because the redesign plan identifies them as old-route candidates:

- `/services` -> `/consulting`
- `/podcast` -> `/media`
- `/swag` -> `/`
- `/tech-education` -> `/consulting`

No redirect is needed for `/contact` because `/contact` remains the canonical route.

## SEO and social preview

- Each route exports page-level metadata through the App Router metadata API.
- Canonical URLs are generated from `https://notablebit.com`.
- `app/sitemap.ts` generates the seven canonical routes.
- `app/robots.ts` allows crawling and points to the sitemap.
- `app/opengraph-image.tsx` and `app/twitter-image.tsx` provide the shared social preview image.

## Accessibility and launch notes

- Shared navigation uses semantic landmarks, visible focus states, and a skip link.
- Pages use semantic sections with one primary `h1` per route.
- The contact form UI is labeled and keyboard-accessible.
- Contact form submission still needs an approved backend, form service, or email destination before the `Send Inquiry` button should be enabled.
