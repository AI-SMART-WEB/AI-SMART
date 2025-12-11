# Netlify Deployment - Quick Steps

## ✅ Sabse Aasan Tarika (GitHub se)

### Step 1: GitHub Repository Check
- Aapka code already GitHub par hai: `https://github.com/AI-SMART-WEB/AI-SMART.git`
- Sab latest changes push ho chuki hain ✅

### Step 2: Netlify Account
1. https://app.netlify.com par jao
2. Sign up / Login karo (GitHub se login kar sakte ho)

### Step 3: Site Deploy
1. **"Add new site"** button click karo
2. **"Import an existing project"** select karo
3. **"GitHub"** choose karo
4. GitHub authorize karo (agar pehli baar ho)
5. Repository select karo: **`AI-SMART-WEB/AI-SMART`**

### Step 4: Build Settings (Auto-detect ho jayega)
- **Build command:** `npm run build` ✅
- **Publish directory:** `build` ✅
- **Node version:** `18` ✅

*(Ye sab `netlify.toml` file se automatically detect ho jayega)*

### Step 5: Deploy
1. **"Deploy site"** button click karo
2. 2-3 minutes wait karo
3. Website live ho jayegi! 🎉

### Step 6: Site URL
- Netlify automatically ek URL dega: `https://ai-smart-xxxxx.netlify.app`
- Isko client ko de sakte ho

---

## 🔄 Automatic Deployments
- Har baar GitHub par push karoge, Netlify automatically deploy kar dega
- No manual work needed!

---

## 📝 Custom Domain (Optional)
Agar custom domain chahiye:
1. Site settings → Domain management
2. Custom domain add karo
3. DNS settings follow karo

---

## ⚡ Quick Deploy via CLI (Alternative)

Agar CLI se karna ho:

```bash
# Netlify CLI install karo
npm install -g netlify-cli

# Login karo
netlify login

# Build karo
npm run build

# Deploy karo
netlify deploy --prod
```

---

**Note:** `netlify.toml` file already configured hai, isliye sab automatic ho jayega! 🚀

