import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Ensure standalone mode for Vercel deployment
  reactStrictMode: true, // Best practices
  trailingSlash: false, // Prevents unnecessary 404 errors
  images: {
    domains: ["res.cloudinary.com"], // Allow Cloudinary images
  },
};

export default nextConfig;
