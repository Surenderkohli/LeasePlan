/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  
}
// {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@/components/*": ["components/*"],
//       "@/utils/*":["utils/*"],
//       "@proj-components":["pro-components"]
//     }
//   }
// }





module.exports = nextConfig
