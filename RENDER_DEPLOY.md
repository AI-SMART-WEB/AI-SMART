# Render Deployment Guide

## For Static Site (Recommended for React)

1. **Go to Render Dashboard:**
   - https://dashboard.render.com
   - Click "New +" → "Static Site"

2. **Connect Repository:**
   - Connect your GitHub account
   - Select repository: `AI-SMART-WEB/AI-SMART`

3. **Build Settings:**
   - **Name:** ai-smart-website
   - **Branch:** main
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
   - **Node Version:** 18

4. **Deploy:**
   - Click "Create Static Site"
   - Render will automatically build and deploy

## For Web Service (Alternative)

If using Web Service instead:

1. **Go to Render Dashboard:**
   - Click "New +" → "Web Service"

2. **Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npx serve -s build -l 3000`
   - **Environment:** Node
   - **Node Version:** 18

3. **Add Environment Variables (if needed):**
   - NODE_ENV=production

## Troubleshooting

### If "react-scripts: not found" error:

1. Make sure `package.json` has `react-scripts` in dependencies
2. Build command should be: `npm install && npm run build`
3. Check Node version (should be 18 or higher)

### If build fails:

1. Check build logs in Render dashboard
2. Make sure all dependencies are in `package.json`
3. Try clearing cache and redeploying

## Important Notes

- Use **Static Site** for React apps (not Web Service)
- Build command must install dependencies first
- Publish directory must be `build`
- Node version should be 18 or higher

