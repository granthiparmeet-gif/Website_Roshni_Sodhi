# Website Builder

## Local Development

```bash
npm --prefix web install
npm --prefix web run dev
```

Open `http://localhost:3000` in your browser.

## Deploying to Vercel

1. Push the latest commits to GitHub. Vercel will auto-detect this Next.js App Router project inside the `web` folder and run `npm run build` from there.
2. Link the GitHub repository in the Vercel dashboard and point the project root to `/web` so it builds with your `package.json`.
3. Provision the `RESEND_API_KEY` environment variable under Project Settings → Environment to keep `web/src/app/api/contact/route.ts` working.
4. Vercel hosts the built app and API endpoints without extra configuration, so each merge to the production branch redeploys automatically.

## Codex / Restricted Sandboxes

The `dev` script now includes a port permission check. If the requested port is blocked (for example, Codex refuses ports other than `3000`), the script automatically falls back and relaunches on the allowed port.

You can still pass additional flags:

```bash
npm --prefix web run dev -- --turbo
```

If you explicitly demand a blocked port, the script will log the failure and continue on `3000`.

To force a different fallback port or host, set environment variables before running:

```bash
export CODEX_FALLBACK_PORT=3000
export CODEX_FALLBACK_HOST=0.0.0.0
npm --prefix web run dev
```

## Linting

```bash
npm --prefix web run lint
```
