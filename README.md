# FMD Remodeling Inc. — Landing Page

Premium single-page website for FMD Remodeling Inc. (Massachusetts residential & commercial remodeling).

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Bootstrap Icons

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Editable configuration

Central settings live in:

- `src/data/site.ts` — company, phone, optional WhatsApp/social, form endpoint, cities, SEO
- `src/data/media.ts` — logo path and project photo manifesto
- `src/data/services.ts` — service blocks
- `src/data/faq.ts` — FAQ copy

## Media

1. Copy the official logo to `public/images/brand/logo.png`
2. Set `brandMedia.logo.src` in `src/data/media.ts`
3. Add project photos to `public/images/work/`
4. Register each photo in `projectMedia` with stage, caption, alt text, and category

Do not present in-progress photos as completed work. Do not invent locations or before/after pairs.

## Activate the estimate form

The public page currently shows a call panel because no form endpoint is configured.

To enable the form:

1. Create a Formspree / custom API / email service endpoint
2. In `src/data/site.ts`, set:

```ts
form: {
  enabled: true,
  endpoint: 'https://your-endpoint',
  method: 'POST',
}
```

3. Rebuild and redeploy

## Pending items

- Official logo file
- Project photographs
- Confirmed WhatsApp number (optional)
- Social profile URLs (optional)
- Form delivery endpoint
- Live domain (for canonical URL)
