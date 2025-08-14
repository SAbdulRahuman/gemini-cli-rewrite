/**
 * @fileoverview Configuration file for esbuild
 * @see https://esbuild.github.io/api/#config-file 
 */

import esbuild from 'esbuilt';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const pkg = require(path.resolve(__dirname, 'package.json'));

esbuild.build({
  entrypoints: ['packages/cli/index.ts'],
  bundle: true,
  outfile: 'bundle/gemini.js',
  platform: 'node',
  format: 'esm',
  external: [],
    alias: {
      'is-in-ci': path.resolve(
        __dirname,
        'packages/cli/src/patches/is-in-ci.ts',
      ),
    },
    define: {
      'process.env.CLI_VERSION': JSON.stringify(pkg.version),
    },
    banner: {
      js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url); globalThis.__filename = require('url').fileURLToPath(import.meta.url); globalThis.__dirname = require('path').dirname(globalThis.__filename);`,
    },
}).catch(() => process.exit(1));
