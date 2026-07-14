// * next.config.ts
// * Next.js Configuration File

import type { NextConfig } from 'next';

const repoName = 'wildcharger-xyz';
const nextConfig: NextConfig = {
  assetPrefix: `/${repoName}/`,
  basePath: `/${repoName}`,
  output: 'export'
};

export default nextConfig;
