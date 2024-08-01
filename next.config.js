/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"]
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
