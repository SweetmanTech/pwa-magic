/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
})

const nextConfig = {
  // pwa: {
  //   dest: "public", // the destination directory for the ServiceWorker
  //   register: true, // set to true to automatically register the SW
  //   skipWaiting: true, // set to true to ask the SW to skip the waiting phase
  // },
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
