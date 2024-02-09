/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: '',
        pathname: '/breeds/**',
      },
    ],
  },
}

// https://dog.ceo/api/breed/${breed}/images/random/10
module.exports = nextConfig
