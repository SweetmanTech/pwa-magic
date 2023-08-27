/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
})

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com", "f005.backblazeb2.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
  reactStrictMode: true,
}

module.exports = withPWA(nextConfig)
