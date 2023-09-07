/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "source.unsplash.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "lh3.googleusercontent.com" }
    ],
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
