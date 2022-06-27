/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.swr.de",
      "img.br.de",
      "links.papareact.com",
      "www.wallpaperuse.com",
      "motaen.com",
      "www.corilon.com",
    ],
  },
};

module.exports = nextConfig;
