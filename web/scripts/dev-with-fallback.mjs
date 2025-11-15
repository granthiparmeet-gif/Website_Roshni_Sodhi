#!/usr/bin/env node
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';

const rawArgs = process.argv.slice(2);

function extractOption(args, name) {
  let value;
  const rest = [];
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === `--${name}`) {
      value = args[i + 1];
      i += 1;
      continue;
    }
    if (arg.startsWith(`--${name}=`)) {
      value = arg.split('=')[1];
      continue;
    }
    rest.push(arg);
  }
  return { value, rest };
}

function parsePort(value, fallback) {
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric > 0) {
    return numeric;
  }
  return fallback;
}

function checkListen(port, host) {
  return new Promise((resolve) => {
    const server = createServer();
    const onError = (error) => {
      server.close();
      resolve({ ok: false, error });
    };
    server.once('error', onError);
    server.listen(port, host, () => {
      server.close(() => resolve({ ok: true }));
    });
  });
}

const portFromEnv = process.env.PORT;
const hostFromEnv = process.env.HOST ?? process.env.HOSTNAME;
const fallbackPort = parsePort(process.env.CODEX_FALLBACK_PORT, 3000);
const fallbackHost = process.env.CODEX_FALLBACK_HOST ?? '0.0.0.0';

const { value: portArg, rest: argsWithoutPort } = extractOption(rawArgs, 'port');
const { value: hostArg, rest: passthroughArgs } = extractOption(argsWithoutPort, 'hostname');

const requestedHost = hostArg ?? hostFromEnv ?? '0.0.0.0';
const requestedPort = parsePort(portArg ?? portFromEnv, fallbackPort);

const { ok, error } = await checkListen(requestedPort, requestedHost);

let finalPort = requestedPort;
let finalHost = requestedHost;

if (!ok) {
  if (requestedPort !== fallbackPort) {
    console.warn(
      `[codex] Port ${requestedPort} is not permitted in this environment (${error?.code ?? error?.message}). Falling back to port ${fallbackPort}.`,
    );
    const retry = await checkListen(fallbackPort, fallbackHost);
    if (!retry.ok) {
      console.error(
        `[codex] Unable to listen on fallback port ${fallbackPort}: ${retry.error?.code ?? retry.error?.message}`,
      );
      process.exit(1);
    }
    finalPort = fallbackPort;
    finalHost = fallbackHost;
  } else {
    console.error(
      `[codex] Unable to listen on port ${requestedPort}: ${error?.code ?? error?.message}`,
    );
    process.exit(1);
  }
}

const nextArgs = ['dev', '--hostname', finalHost, '--port', String(finalPort), ...passthroughArgs];

console.log(`[codex] Launching Next.js on http://${finalHost}:${finalPort}`);

const child = spawn('next', nextArgs, {
  stdio: 'inherit',
  env: process.env,
});

const forwardSignal = (signal) => {
  child.kill(signal);
};

process.on('SIGINT', forwardSignal);
process.on('SIGTERM', forwardSignal);

child.on('exit', (code, signal) => {
  process.off('SIGINT', forwardSignal);
  process.off('SIGTERM', forwardSignal);
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});


