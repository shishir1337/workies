/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'i.pravatar.cc',
         },
         {
           protocol: 'https',
           hostname: 'bulkoid.com',
         },
         {
           protocol: 'https',
           hostname: 'static.vecteezy.com',
         },
         {
           protocol: 'https',
           hostname: 'www.google.com',
         },
         {
           protocol: 'https',
           hostname: 'img-prod-cms-rt-microsoft-com.akamaized.net',
         },
         {
           protocol: 'https',
           hostname: 'images.pexels.com',
         },
         {
           protocol: 'https',
           hostname: 'images.unsplash.com',
         },
       ]
    },
};

export default nextConfig;
