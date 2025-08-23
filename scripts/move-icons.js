#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const distDir = path.join(__dirname, '../dist')
const assetsImagesDir = path.join(distDir, 'assets/images')

console.log('🚀 Starting assets organization...')

// Create assets/images directory if it doesn't exist
if (!fs.existsSync(assetsImagesDir)) {
  fs.mkdirSync(assetsImagesDir, { recursive: true })
  console.log('✓ Created assets/images directory')
}

// Copy all images from src/assets/images to dist/assets/images for production
const srcAssetsImagesDir = path.join(__dirname, '../src/assets/images')
if (fs.existsSync(srcAssetsImagesDir)) {
  const srcImages = glob.sync(path.join(srcAssetsImagesDir, '*'))
  srcImages.forEach((imagePath) => {
    const fileName = path.basename(imagePath)
    const targetPath = path.join(assetsImagesDir, fileName)

    if (!fs.existsSync(targetPath)) {
      fs.copyFileSync(imagePath, targetPath)
      console.log(`✓ Copied ${fileName} to dist/assets/images/`)
    }
  })
}

// Create assets/icons directory for moved SVG files
const assetsIconsDir = path.join(distDir, 'assets/icons')
if (!fs.existsSync(assetsIconsDir)) {
  fs.mkdirSync(assetsIconsDir, { recursive: true })
  console.log('✓ Created assets/icons directory')
}

// Copy static files to dist root
const staticFiles = [
  { src: 'src/assets/sitemap.xml', dest: 'sitemap.xml' },
  { src: 'src/assets/robots.txt', dest: 'robots.txt' },
  { src: 'src/assets/_redirects', dest: '_redirects' },
  { src: 'src/assets/favicon.svg', dest: 'favicon.svg' },
]

staticFiles.forEach(({ src, dest }) => {
  const srcPath = path.join(__dirname, '../', src)
  const destPath = path.join(distDir, dest)

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath)
    console.log(`✓ Copied ${dest} to dist/`)
  } else {
    console.log(`⚠ File ${src} not found`)
  }
})

// List of SVG files to move (excluding favicon.svg as it should stay in root)
const svgFiles = ['file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg']

// Move SVG files from dist root to dist/assets/icons
let movedCount = 0
svgFiles.forEach((file) => {
  const sourcePath = path.join(distDir, file)
  const targetPath = path.join(assetsIconsDir, file)

  if (fs.existsSync(sourcePath)) {
    // Copy file to new location
    fs.copyFileSync(sourcePath, targetPath)
    // Remove from root
    fs.unlinkSync(sourcePath)
    console.log(`✓ Moved ${file} to assets/icons/`)
    movedCount++
  } else {
    console.log(`⚠ File ${file} not found in dist/`)
  }
})

// Update HTML files to use new paths (if any references exist)
const htmlFiles = glob.sync(path.join(distDir, '**/*.html'))
htmlFiles.forEach((htmlFile) => {
  let content = fs.readFileSync(htmlFile, 'utf8')
  let updated = false

  svgFiles.forEach((file) => {
    const oldPath = `/${file}`
    const newPath = `/assets/icons/${file}`
    if (content.includes(oldPath)) {
      content = content.replace(new RegExp(oldPath, 'g'), newPath)
      updated = true
    }
  })

  if (updated) {
    fs.writeFileSync(htmlFile, content)
    console.log(`✓ Updated paths in ${path.relative(distDir, htmlFile)}`)
  }
})

console.log(`🎉 Successfully organized assets!`)
console.log('📁 Build structure optimized!')
