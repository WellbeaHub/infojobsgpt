/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['multimedia.infojobs.net'],
    remotePatterns: [
      { protocol: 'https', hostname: 'multimedia.infojobs.net', port: '' },
    ],
  },
}

module.exports = nextConfig
