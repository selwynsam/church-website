/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",

  basePath: process.env.NODE_ENV === "production" ? "/church-website" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
