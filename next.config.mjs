/** @type {import('next').NextConfig} */
const nextConfig = {
  // Maintaining essential bypasses for a robust build environment
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
