/** @type {import('next').NextConfig} */
const repoName = "ulda-landing-sanitized"
const isGithubPages = process.env.GITHUB_ACTIONS === "true"
const basePath = isGithubPages ? `/${repoName}` : ""

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
}

export default nextConfig
