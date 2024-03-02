/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      deviceSizes: [320,480,640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.vistahost.com.br',
              port: '',
              pathname: '/elegan34/vista.imobi/fotos/**',
            },
          ],
        formats:['image/webp','image/avif']
    }
};
export default nextConfig;
