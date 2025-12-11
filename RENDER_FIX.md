# Render Build Error Fix

## Problem
Error: `sh: 1: react-scripts: not found`

## Solution

### Step 1: Go to Render Dashboard Settings

1. Open your Render dashboard: https://dashboard.render.com
2. Click on your service: **AI-SMART**
3. Go to **Settings** (left sidebar)

### Step 2: Update Build Command

In the **Build Command** field, change from:
```
npm run build
```

To:
```
npm install && npm run build
```

This will:
1. First install all dependencies (including react-scripts)
2. Then build the project

### Step 3: Save and Redeploy

1. Click **Save Changes** at the bottom
2. Go to **Events** tab
3. Click **Manual Deploy** → **Deploy latest commit**

## Alternative: Use Static Site (Recommended)

For React apps, **Static Site** is better than Web Service:

1. **Delete current Web Service:**
   - Go to Settings → Danger Zone → Delete Service

2. **Create Static Site:**
   - Click "New +" → "Static Site"
   - Connect GitHub repository
   - Settings:
     - **Build Command:** `npm install && npm run build`
     - **Publish Directory:** `build`
     - **Node Version:** 18

3. **Deploy:**
   - Click "Create Static Site"

## Why This Happens

Render runs `npm run build` directly without installing dependencies first. The build command needs to install dependencies first, then build.

