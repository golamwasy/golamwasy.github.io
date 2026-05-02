/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/projects/planora/:path*',
        destination: 'https://planora-rose.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
