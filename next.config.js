/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "kindly-kookabura-369.convex.cloud",
      },
      {
        hostname: "silent-eel-513.convex.cloud",
      },
      {
        hostname: "loserleague.com",
      },
    ],
  },
};

module.exports = nextConfig;
