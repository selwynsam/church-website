/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",

  basePath: "/church-website",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
