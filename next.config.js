// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-github-pages',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
