# 🚀 Deploying to Vercel

Since this is a Next.js application, Vercel is the best place to deploy it. Here are the steps to get your **Research Lab Portfolio** live.

## Option 1: Deploy via GitHub (Recommended)

This method ensures your site automatically updates whenever you push changes to your code.

### 1. Push your code to GitHub
If you haven't already:
1.  Create a new repository on [GitHub](https://github.com/new).
2.  Run these commands in your terminal:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

### 2. Connect to Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find your repository `research-lab` (or whatever you named it) and click **"Import"**.

### 3. Configure & Deploy
1.  **Framework Preset**: It should auto-detect `Next.js`.
2.  **Root Directory**: Ensure it is set to `.` (or `research-lab` if you uploaded the whole folder).
3.  Click **"Deploy"**.

---

## Option 2: Deploy via CLI (Fastest)

If you just want to get it live instantly without setting up a repo immediately.

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```
2.  **Login**:
    ```bash
    vercel login
    ```
3.  **Deploy**:
    Run this command in your project folder:
    ```bash
    vercel
    ```
    - Follow the prompts (Keep pressing `Enter` for defaults).
    - It will give you a "Production" URL.

---

## ✅ Pre-Deployment Checklist

We have already verified these during development:
- [x] **Build Success**: The app compiles correctly (`npm run build` passed).
- [x] **Environment Variables**: We aren't using complex secrets, so no extra config needed.
- [x] **Images**: All images are properly in the `public/` directory.

🎉 **Enjoy your new portfolio!**
