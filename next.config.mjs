/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.thecatapi.com",
      },
      {
        protocol: "https",
        hostname: "**.tumblr.com",
      },
      {
        protocol: "https",
        hostname: "**.flickr.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
