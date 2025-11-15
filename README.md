# Website Builder

## Local Development

```bash
npm --prefix web install
npm --prefix web run dev
```

Open `http://localhost:3000` in your browser.

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


