/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = ({
  publicRuntimeConfig: {
      APP_NAME: 'OASIS',
      API_DEVELOPMENT: 'http://localhost:5000/api',
      PRODUCTION: false
  },
  reactStrictMode: true,
images: {
  domains: ["i.postimg.cc", "i.ibb.co", "lh3.googleusercontent.com"],
},
});
