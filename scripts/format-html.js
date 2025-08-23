#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
import pkg from 'js-beautify'
const { html: beautifyHtml } = pkg

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const distDir = path.join(__dirname, '../dist')

console.log('🎨 Starting HTML formatting...')

// HTML beautify options - Optimized for Tailwind CSS
const htmlBeautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 1,
  preserve_newlines: false,
  keep_array_indentation: false,
  break_chained_methods: false,
  indent_scripts: 'keep',
  brace_style: 'collapse',
  space_before_conditional: true,
  unescape_strings: false,
  jslint_happy: false,
  end_with_newline: true,
  wrap_line_length: 120,
  indent_inner_html: true,
  comma_first: false,
  e4x: false,
  indent_empty_lines: false,
  wrap_attributes: 'auto',
  unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
  content_unformatted: ['pre', 'textarea'],
  extra_liners: ['head', 'body', '/html'],
}

// Find all HTML files
const htmlFiles = glob.sync(path.join(distDir, '**/*.html'))

let formattedCount = 0

htmlFiles.forEach((htmlFile) => {
  try {
    const content = fs.readFileSync(htmlFile, 'utf8')

    // Use beautifyHtml to format HTML
    const formattedContent = beautifyHtml(content, htmlBeautifyOptions)

    // Write formatted content back
    fs.writeFileSync(htmlFile, formattedContent)

    const relativePath = path.relative(distDir, htmlFile)
    console.log(`✓ Formatted ${relativePath}`)
    formattedCount++
  } catch (error) {
    const relativePath = path.relative(distDir, htmlFile)
    console.error(`✗ Failed to format ${relativePath}:`, error.message)
  }
})

console.log(`🎉 Successfully formatted ${formattedCount} HTML files!`)
console.log('✨ HTML formatting completed!')
