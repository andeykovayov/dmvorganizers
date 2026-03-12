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

Open [http://localhost:3000](https://localhost:3000).

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
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Add environment variables in Pages project settings:
   - `NEXT_PUBLIC_BOOKING_URL`
   - `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
5. Deploy.

### Option B: Wrangler CLI direct deploy

Authenticate first:

```bash
npx wrangler whoami
# if needed
npx wrangler login
```

Then deploy static output:

```bash
npm run build
npx wrangler pages deploy out --project-name dmv-organizers
```

## Attach Custom Domain (`dmvorganizers.com`)

1. Open Cloudflare Pages project settings.
2. Go to **Custom domains**.
3. Add:
   - `dmvorganizers.com`
   - optionally `www.dmvorganizers.com`
4. Confirm DNS records in Cloudflare.
5. Wait for SSL provisioning.

## Editable Content Files

- `src/config/site.ts`
- `src/data/services.ts`
- `src/data/pricing.ts`
- `src/data/projects.ts`
- `src/data/testimonials.ts`

Update these files to change business copy, service cards, pricing tiers, project gallery entries, and testimonials.
