/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tilegallery.co.nz',
      },
    ],
  },
};

export default nextConfig;
