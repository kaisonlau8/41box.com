# 41box Used Car Website

A premium used car website for "41box", specializing in Chinese imports (VW, Honda, Toyota, Mazda). Built with Vite and Vanilla JavaScript.

## Features

- **Premium Design**: Dark mode aesthetic with high-quality imagery.
- **Inventory Management**: Filterable car list by brand.
- **Responsive**: Works on mobile and desktop.
- **Fast**: Powered by Vite for instant server start and optimized builds.

## Project Structure

- `src/main.js`: Core logic for rendering cars and handling filters.
- `src/data/cars.json`: Data source for vehicle inventory.
- `style.css`: Global styles and variables.
- `index.html`: Landing page.
- `inventory.html`: Inventory listing page.

## Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start local server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages.

### Option 1: Manual Upload (Simplest)
1. Run `npm run build`.
2. This will create a `dist` folder.
3. Upload the contents of the `dist` folder to your GitHub repository.
4. Go to Repo Settings -> Pages -> Select "main" branch (or wherever you uploaded) -> Save.

### Option 2: Git Workflow (Recommended)
1. Initialize a git repository if you haven't:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a repository on GitHub.
3. Link your local repo to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
4. **Configure GitHub Pages**:
   - Go to your repository on GitHub.
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **GitHub Actions**.
   - GitHub will automatically detect the Vite project and suggest a workflow, or you can choose "Static HTML" and configure it to publish the `dist` folder after running `npm run build`.
   - *Alternatively*, you can use the `gh-pages` package to deploy from the command line.

### Configuration Note
The `vite.config.js` is set with `base: './'` to ensure assets load correctly on any path (relative paths).
