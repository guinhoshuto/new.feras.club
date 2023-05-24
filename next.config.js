/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'static-cdn.jtvnw.net'
    ]
  }
}

module.exports = nextConfig
