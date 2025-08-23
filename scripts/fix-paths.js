#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const distDir = path.join(__dirname, '../dist')

console.log('🔧 Starting path fixes...')

// Find all HTML files
const htmlFiles = glob.sync(path.join(distDir, '**/*.html'))

let fixedCount = 0

htmlFiles.forEach((htmlFile) => {
  try {
    let content = fs.readFileSync(htmlFile, 'utf8')
    let updated = false

    // Replace absolute asset paths with relative paths
    const replacements = [
      { from: /href="\/assets\//g, to: 'href="./assets/' },
      { from: /src="\/assets\//g, to: 'src="./assets/' },
      { from: /component-url="\/assets\//g, to: 'component-url="./assets/' },
      { from: /renderer-url="\/assets\//g, to: 'renderer-url="./assets/' },
      { from: /href="\/favicon/g, to: 'href="./favicon' },
      { from: /href="\/apple-touch-icon/g, to: 'href="./apple-touch-icon' },
      { from: /href="\/\.\//g, to: 'href="./' }, // Fix double relative paths
      { from: /src="\/\.\//g, to: 'src="./' }, // Fix double relative paths
    ]

    // Remove references to missing favicon files to avoid 404 errors
    const removePatterns = [/<link rel="apple-touch-icon"[^>]*>/g, /<link rel="icon" type="image\/png"[^>]*>/g]

    removePatterns.forEach((pattern) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '')
        updated = true
      }
    })

    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to)
        updated = true
      }
    })

    if (updated) {
      fs.writeFileSync(htmlFile, content)
      const relativePath = path.relative(distDir, htmlFile)
      console.log(`✓ Fixed paths in ${relativePath}`)
      fixedCount++
    }
  } catch (error) {
    const relativePath = path.relative(distDir, htmlFile)
    console.error(`✗ Failed to fix paths in ${relativePath}:`, error.message)
  }
})

console.log(`🎉 Successfully fixed paths in ${fixedCount} HTML files!`)
console.log('✨ Path fixing completed!')
