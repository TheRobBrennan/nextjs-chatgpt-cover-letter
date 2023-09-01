/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // https://nextjs.org/docs/app/api-reference/functions/server-actions
  },
};

module.exports = nextConfig;
