/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.pixabay.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com',
      'picsum.photos',
      'cloudflare-ipfs.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig