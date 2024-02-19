import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NAME: 'Studio Shifty',
    SHORT_NAME: 'Shifty',
    SERVER_URL: 'http://localhost:3001',
  },
  webpack: (config, { isServer }) => {
    const currentDir = new URL(import.meta.url).pathname
    const imagesPath = path.resolve(currentDir, '../public/images')
    const videoPath = path.resolve(currentDir, '../public/video')
    const scssPath = path.resolve(currentDir, '../src/scss')
    const componentPath = path.resolve(currentDir, '../src/component')

    config.resolve.alias['@images'] = imagesPath
    config.resolve.alias['@video'] = videoPath
    config.resolve.alias['@scss'] = scssPath
    config.resolve.alias['@component'] = componentPath

    // Retourner la configuration webpack modifiée
    return config
  },
}

export default nextConfig
