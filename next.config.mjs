/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'media1.giphy.com',
        ]
    },
    
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        return config;
    },
};

export default nextConfig;
