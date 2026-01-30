# Works Locally Blog

A personal blog built with [Eleventy](https://www.11ty.dev/), a simple static site generator. The site is automatically deployed to GitHub Pages with every commit to the `main` branch.

## Getting Started

### Prerequisites
- Node.js 22 or later
- npm

### Installation

```bash
npm install
```

## Development

### Start development server
```bash
npm start
```

This runs Eleventy in watch mode with hot reload. The site will be available at `http://localhost:8080`.

### Debug mode
```bash
npm run debug
```

Starts the dev server with verbose DEBUG output to troubleshoot build issues.

## Building

### Production build
```bash
npm run build
```

Generates the site in the `_site/` directory for production deployment.

### No-color build
```bash
npm run build-nocolor
```

Builds without ANSI color codes (useful for CI/CD pipeline output).

## Code Quality

### ESLint
```bash
npm run lint:eslint
```

Lints JavaScript and HTML files. Configured with:
- ESLint flat config format
- HTML linting support
- Baseline CSS properties validation
- Allows `console.info()` and `console.clear()`

### StyleLint
```bash
npm run lint:css
```

Lints CSS files. Enforces:
- Alphabetical property order
- Baseline CSS usage
- Standard style rules

### Prettier
```bash
npm run prettier:lint
```

Check formatting compliance (single quotes, 2-space indentation, 120 char line width).

```bash
npm run prettier:format
```

Auto-format all files to match Prettier rules.

## Release Process

This project uses **continuous deployment**. Any commit to the `main` branch automatically triggers a GitHub Actions workflow that builds and deploys the site.

### Steps to release:

1. **Make your changes**
   - Edit markdown files or HTML in the root directory or subdirectories
   - Add new blog posts as `.md` files

2. **Lint and format**
   ```bash
   npm run lint:eslint
   npm run lint:css
   npm run prettier:format
   ```

3. **Test locally**
   ```bash
   npm start
   ```
   Verify changes at `http://localhost:8080`

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

5. **Automatic deployment**
   - GitHub Actions workflow automatically triggers
   - Site builds and deploys to GitHub Pages
   - Monitor progress in the "Actions" tab on GitHub

### Deployment Status

Check deployment status:
- Go to your repository on GitHub
- Click the "Actions" tab
- View the latest "Deploy to GitHub Pages" workflow run

The workflow runs:
1. Checks out code
2. Sets up Node.js 22
3. Installs dependencies
4. Builds the site
5. Uploads artifacts
6. Deploys to GitHub Pages

## Project Structure

```
.
├── index.md                    # Main content file (blog homepage)
├── _site/                      # Build output directory (auto-generated)
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions deployment workflow
├── eslint.config.js           # ESLint configuration
├── .prettierrc.json           # Prettier formatting rules
├── .stylelintrc.json          # StyleLint CSS rules
├── .editorconfig              # Editor settings
├── package.json               # Dependencies and npm scripts
└── README.md                  # This file
```

## Configuration

### Eleventy
- No custom config file—uses Eleventy defaults
- Input: `.md` and `.html` files from root
- Output: Built to `_site/` directory
- Template formats: Markdown, HTML, Nunjucks

### Deployment
- **Platform**: GitHub Pages
- **Domain**: `workslocally.com`
- **Source**: GitHub Actions (automated builds)
- **HTTPS**: Enabled automatically

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Create production build |
| `npm run debug` | Debug mode with verbose output |
| `npm run lint:eslint` | Lint JavaScript/HTML |
| `npm run lint:css` | Lint CSS |
| `npm run prettier:format` | Auto-format all files |

## Troubleshooting

### Build fails
Run `npm run debug` to see detailed error messages.

### Changes not appearing
- Make sure you ran `npm run prettier:format` and `npm run lint:*` commands
- Check GitHub Actions workflow for build errors

### Local changes not reflecting
- Stop dev server and run `npm start` again
- Clear browser cache

## License

ISC
