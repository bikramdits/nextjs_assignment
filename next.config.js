/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin")
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  images: {
    domains: ["52.90.18.248", "localhost", "m.media-amazon.com"],
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

module.exports = withNextIntl(nextConfig)
