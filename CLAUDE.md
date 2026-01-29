# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Eleventy static site generator** project for a personal blog. The project has a minimal structure with no custom Eleventy configuration (uses defaults).

## Common Commands

### Development
- `npm start` - Start the Eleventy development server with hot reload (serves at localhost:8080 by default)
- `npm run debug` - Start Eleventy with verbose DEBUG output to troubleshoot builds

### Building
- `npm run build` - Build the site (outputs to `_site/`)
- `npm run build-nocolor` - Build without ANSI color codes (useful for piped output)
- `npm run build-ghpages` - Build with GitHub Pages path prefix (`/eleventy-base-blog/`)

### Linting & Formatting
- `npm run lint:eslint` - Lint JavaScript and HTML files (ESLint with HTML support)
- `npm run lint:css` - Lint CSS files (StyleLint)
- `npm run prettier:lint` - Check formatting with Prettier
- `npm run prettier:format` - Auto-format all files with Prettier

All linting/formatting rules are configured and will not pass uncommitted changes with violations.

## Project Structure

```
.
├── index.md              # Main content file (blog homepage)
├── _site/                # Build output directory (auto-generated)
├── eslint.config.js      # ESLint configuration (flat config format)
├── .prettierrc.json      # Prettier formatting rules
├── .stylelintrc.json     # StyleLint CSS rules
├── package.json          # Dependencies and scripts
└── .editorconfig         # Editor settings
```

## Architecture & Key Details

### Eleventy Configuration
- **No custom config file** - Uses Eleventy defaults for templates, input dir, and output dir
- **Input**: `.md` files from root are automatically processed
- **Output**: Built to `_site/` directory
- **Default template formats**: Markdown, HTML, and Nunjucks

### Linting & Code Quality
- **ESLint**: Configured with flat config format, supports JavaScript, HTML, and CSS linting
  - HTML linting enabled via `@html-eslint/eslint-plugin`
  - Baseline CSS properties required via `@html-eslint/use-baseline`
  - `no-console` rule allows `console.info()` and `console.clear()`
  - Prettier integration prevents formatting conflicts
- **StyleLint**: CSS linter with standard config
  - Requires alphabetical property order
  - Enforces baseline CSS usage
  - Uses `stylelint-order` and `stylelint-plugin-use-baseline` plugins
- **Prettier**: Single quotes, 2-space indentation, 120 char print width

### Content
The project currently has one main content file (`index.md`) which is the blog homepage. Additional pages can be added as `.md` or `.html` files in the root or subdirectories.
