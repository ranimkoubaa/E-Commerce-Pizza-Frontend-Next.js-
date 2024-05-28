/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com","static.vecteezy.com",'example.com', // existing domains
        'lh3.googleusercontent.com']
    },
    env:{
        API_URL : "http://localhost:3001/api",
        SECRET : "secret"
    }
    }
module.exports = nextConfig