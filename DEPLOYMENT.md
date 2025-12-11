# Netlify Deployment Guide

## Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   - Make sure your code is pushed to GitHub repository
   - Repository URL: https://github.com/AI-SMART-WEB/AI-SMART.git

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository: `AI-SMART-WEB/AI-SMART`

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18` (or latest)

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

## Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build your site:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Method 3: Drag & Drop

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `build` folder

## Environment Variables (if needed)

If you need environment variables:
- Go to Site settings → Environment variables
- Add any required variables

## Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Important Notes

- The `netlify.toml` file is already configured
- Build command: `npm run build`
- Publish directory: `build`
- All routes redirect to `index.html` for React Router

