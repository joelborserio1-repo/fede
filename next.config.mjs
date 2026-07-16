/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Workers has no built-in Next image optimization backend, so
    // serve images as-is. Supabase Storage already delivers via CDN.
    unoptimized: true,
    // Hosts allowed for remote images (Supabase Storage public URLs).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
};

export default nextConfig;
