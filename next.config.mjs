/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
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
