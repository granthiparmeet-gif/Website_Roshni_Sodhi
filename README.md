# Website Builder

## Local Development

```bash
npm --prefix web install
npm --prefix web run dev
```

Open `http://localhost:3000` in your browser.

## Deploying to Render

1. Push the latest commits to GitHub; the `render.yaml` at the repository root instructs Render to build from the `web` directory using `npm run build` and `npm run start`.
2. In the Render dashboard tie the service to your GitHub repository, and keep the default branch aligned with your production branch (typically `main`).
3. Add the `RESEND_API_KEY` environment variable under the service's Environment tab so `web/src/app/api/contact/route.ts` can send e-mails.
4. Confirm `nodeVersion: 20` (Render respects the `nodeVersion` key) and let auto deploy push production builds on each GitHub merge.

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
