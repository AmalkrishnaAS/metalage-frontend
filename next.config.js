/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['localhost:3000','metalage.net']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
}
