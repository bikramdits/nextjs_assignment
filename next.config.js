/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "m.media-amazon.com"]
  },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/movies',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
