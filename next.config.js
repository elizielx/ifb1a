/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
