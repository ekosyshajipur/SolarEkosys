/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: [
    "*.devtunnels.ms",
    "*.inc1.devtunnels.ms",
    "*.ms",
    "*.ngrok-free.app",
    "*.ngrok.io",
    "*.trycloudflare.com",
    "*.loca.lt",
    "localhost",
    "localhost:3000",
    "localhost:5000",
    "127.0.0.1",
    "127.0.0.1:3000",
    "127.0.0.1:5000",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },
  async redirects() {
    return [
      {
        source: "/services/solar-installation",
        destination: "/services/installation-services",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Allow CORS & long-lived caching on all Next.js static scripts, CSS and fonts
        source: "/_next/static/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, HEAD, OPTIONS" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Allow CORS & long-lived caching on static images
        source: "/images/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/((?!api|_next/static|_next/image|images|favicon.ico).*)*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
