/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects(){
        return [
            {
              source: '/',
              destination: '/jobs/jobsPreview',
              permanent: true, 
            },
          ]
    }
};

export default nextConfig;
