/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.microlink.io' }, // Microlink Image Preview
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' }, // GitHub avatars
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
