# GitHub Setup Instructions

## Fix Authentication Issue

The push failed due to authentication. Here are solutions:

### Option 1: Use Personal Access Token (Recommended)

1. **Create Personal Access Token:**
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name: "AI-SMART-Website"
   - Select scopes: `repo` (full control)
   - Copy the token

2. **Update Remote URL:**
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/AI-SMART-WEB/AI-SMART.git
   ```

3. **Push again:**
   ```bash
   git push -u origin main
   ```

### Option 2: Use SSH (More Secure)

1. **Generate SSH Key (if you don't have one):**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH Key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste your key

3. **Change Remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:AI-SMART-WEB/AI-SMART.git
   ```

4. **Push:**
   ```bash
   git push -u origin main
   ```

### Option 3: Use GitHub Desktop

1. Download GitHub Desktop
2. File → Clone repository
3. Enter: `https://github.com/AI-SMART-WEB/AI-SMART.git`
4. Push using the GUI

## Current Status

✅ Git initialized
✅ Remote added
✅ Files committed
❌ Need authentication to push

After fixing authentication, run:
```bash
git push -u origin main
```

