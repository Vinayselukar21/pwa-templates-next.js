const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], // loader: "imgix", // Uncomment this line for STATIC EXPORT // path: "", // Uncomment this line for STATIC EXPORT

    domains: [
      "localhost",

      "th.bing.com"
    ],
  },

}

module.exports = withPWA(nextConfig)