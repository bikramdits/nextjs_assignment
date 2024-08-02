/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["52.90.18.248", "localhost"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
