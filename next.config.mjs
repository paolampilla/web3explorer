/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'market-data-images.s3.us-east-1.amazonaws.com',
        },{
          protocol: 'https',
          hostname: 'logo.moralis.io',
        }
      ],
    },
};

export default nextConfig;
