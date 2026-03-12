# DMV Organizers Website

Production-ready one-page website for **DMV Organizers LLC**, built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js (TypeScript)
- Tailwind CSS
- Static export (`output: 'export'`) for Cloudflare Pages
- No database
- External booking and contact integrations via environment variables

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_BOOKING_URL="https://calendar.google.com/..."
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT="https://formspree.io/f/..."
```

If either value is missing:

- Booking section shows a configuration notice
- Contact form shows fallback instructions

## Local Development

Prerequisite: Node.js **20.9+** (required by Next.js 16)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

For this project, build output is generated in `out/`.

## Deploy to Cloudflare Pages

### Option A: Git-based deployment (recommended)

1. Push repository to GitHub/GitLab.
2. In Cloudflare Dashboard, create a **Pages** project and connect the repository.
3. Build settings:
   - Framework preset: `None`
   - Build command: `npx next build`
   - Build output directory: `out`
   - Root directory: `/` (repo root)
4. Important: do **not** use OpenNext custom commands such as `npx opennextjs-cloudflare build` for this project.
   This site is configured as static export and should be deployed as static Pages output.
5. Add environment variables in Pages project settings:
   - `NEXT_PUBLIC_BOOKING_URL`
   - `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
6. Deploy.

### Why this works

- `next.config.js` sets `output: 'export'`, so `next build` creates static assets in `out/`.
- The site does not use server-only Next.js features (SSR, API routes, middleware, or server actions).
- Cloudflare Pages should serve the `out/` directory directly.

### Option B: Wrangler CLI direct deploy

Authenticate first:

```bash
npx wrangler whoami
# if needed
npx wrangler login
```

Then deploy static output:

```bash
npm run deploy:pages
```

## Custom Domains

- Primary domain: `www.dmvorganizers.com`
- Apex domain: `dmvorganizers.com` -> redirect to `https://www.dmvorganizers.com` at Cloudflare domain/rules level

In Cloudflare Pages -> Custom domains:

1. Add `www.dmvorganizers.com` as the production domain.
2. Add `dmvorganizers.com`.
3. Create a domain-level forwarding/redirect rule from apex to `https://www.dmvorganizers.com`.

## Editable Content Files

- `src/config/site.ts`
- `src/data/services.ts`
- `src/data/pricing.ts`
- `src/data/projects.ts`
- `src/data/testimonials.ts`

Update these files to change business copy, service cards, pricing tiers, project gallery entries, and testimonials.
