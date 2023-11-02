// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'lh3.googleusercontent.com' },
      // Add any other remote patterns you need
    ],
  },
};

module.exports = nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // experimental: {
//     //   appDir: true,
//     // },
//     images: {
//       domains: [
//         'res.cloudinary.com', 
//         'avatars.githubusercontent.com',
//         'lh3.googleusercontent.com'
//       ]
//     }
//   }
  
//   module.exports = nextConfig


  // images: {
  //   domains: [
  //     'res.cloudinary.com', 
  //     'avatars.githubusercontent.com',
  //     'lh3.googleusercontent.com'
  //   ]
  // }