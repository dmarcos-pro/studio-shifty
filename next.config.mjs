import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: 'customKey',
  },
  webpack: (config, { isServer }) => {
    const currentDir = new URL(import.meta.url).pathname
    const imagesPath = path.resolve(currentDir, '../public/images')
    const scssPath = path.resolve(currentDir, '../src/scss')
    const componentPath = path.resolve(currentDir, '../src/component')

    config.resolve.alias['@images'] = imagesPath
    config.resolve.alias['@scss'] = scssPath
    config.resolve.alias['@component'] = componentPath

    // Retourner la configuration webpack modifiée
    return config
  },
}

export default nextConfig