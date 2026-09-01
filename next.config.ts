import type { NextConfig } from "next"

const isGitHubPages = process.env.GITHUB_ACTIONS === "true"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/Portafolio" : "",
  assetPrefix: isGitHubPages ? "/Portafolio/" : undefined,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
} satisfies NextConfig

export default nextConfig
