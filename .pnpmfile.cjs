/**
 * TypeScript 7 has no programmatic API until 7.1 — only the native `tsc` CLI,
 * which Next.js 16.3 uses for type checking. Tools that import the TS compiler
 * API (typescript-eslint, knip) would crash on TS 7, so this hook removes their
 * `typescript` peer dependency and injects the official @typescript/typescript6
 * compat package as a real dependency instead.
 *
 * Remove once typescript-eslint/knip support TS >= 7.1:
 * https://github.com/typescript-eslint/typescript-eslint/issues/10940
 */
const TS6_COMPAT = 'npm:@typescript/typescript6@^6.0.2';

const NEEDS_TS6_API = new Set([
  'typescript-eslint',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/typescript-estree',
  '@typescript-eslint/type-utils',
  '@typescript-eslint/utils',
  '@typescript-eslint/project-service',
  '@typescript-eslint/tsconfig-utils',
  'ts-api-utils',
  'knip',
]);

function readPackage(pkg) {
  if (NEEDS_TS6_API.has(pkg.name)) {
    if (pkg.peerDependencies) delete pkg.peerDependencies.typescript;
    if (pkg.peerDependenciesMeta) delete pkg.peerDependenciesMeta.typescript;
    pkg.dependencies = { ...pkg.dependencies, typescript: TS6_COMPAT };
  }
  return pkg;
}

module.exports = { hooks: { readPackage } };
