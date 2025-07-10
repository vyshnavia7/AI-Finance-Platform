/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"randomuser.me",
            }
        ]
    },
    experimental:{
        serverActions:{
            bodySizeLimit:"5mb", // Increase body size limit for file uploads
        }
    }
};

export default nextConfig;
