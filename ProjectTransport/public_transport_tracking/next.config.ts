/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enables the new app directory
    serverComponentsExternalPackages: ["mongoose"], // Allows external packages in server components
  },
  images: {
    domains: ['lh3.googleusercontent.com'], // Specifies allowed image domains
  },
  webpack(config: import('webpack').Configuration) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true, // Enables top-level await in your project
    };
    return config;
  },
};

module.exports = nextConfig;
