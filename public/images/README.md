# FMD media folder

Place official company assets here before publishing the portfolio visuals.

## Brand

Copy the official logo into:

- `brand/logo.png` (preferred)
- or `brand/logo.webp` / `brand/logo.jpg`

Then set `brandMedia.logo.src` in `src/data/media.ts` to the matching path.

Do not replace the logo with a recreated wordmark if the official file is available.

## Project photos

Add real project photographs to `work/` and register each file in `src/data/media.ts` (`projectMedia`).

For each photo, record:

- path
- English alt text
- short factual caption
- category (only when visually clear)
- stage: `completed` or `in-progress`
- optional `objectPosition`
- optional `usage`: `hero`, `about`, `services`, `gallery`

## Important

- Do not present in-progress photos as finished projects.
- Do not invent city names, client names, or before/after pairs.
- Do not add stock photos as FMD work.
- Plumbing visible in construction photos does not confirm a standalone plumbing service.
