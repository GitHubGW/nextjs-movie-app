/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/profile/:id*",
        destination: "/users/:id*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
