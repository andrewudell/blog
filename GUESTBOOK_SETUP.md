# Guestbook Setup Instructions

Your guestbook uses **GitHub Issues** as a database. Each guestbook entry creates a GitHub Issue with the label "guestbook".

## Setup Steps:

### 1. Create a GitHub Personal Access Token

1. Go to https://github.com/settings/tokens/new
2. Give it a name like "Guestbook Token"
3. Set expiration (or "No expiration" for simplicity)
4. Select scopes:
   - ✅ `public_repo` (if your repo is public)
   - ✅ `repo` (if your repo is private - gives full repo access)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### 2. Add Environment Variables

1. Create a `.env.local` file in your project root:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your values:

```env
GITHUB_TOKEN=ghp_your_token_here
GITHUB_REPO=yourusername/your-repo-name
```

Example:
```env
GITHUB_TOKEN=ghp_abc123def456...
GITHUB_REPO=andrewudell/AU-Site
```

### 3. Add .env.local to .gitignore

Make sure `.env.local` is in your `.gitignore` file:

```
.env.local
```

**NEVER commit your token to git!**

### 4. Restart Your Dev Server

```bash
npm run dev
```

### 5. Test the Guestbook

1. Go to http://localhost:3000/guestbook
2. Fill out the form and submit
3. Check your GitHub repo's Issues tab
4. You should see a new issue with the "guestbook" label!

## How It Works:

- **Submit entry** → Creates a GitHub Issue with label "guestbook"
- **View entries** → Fetches open issues with label "guestbook"
- **Moderate** → Close spam issues on GitHub to remove them

## Deployment (Vercel/Netlify):

Add the environment variables in your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add `GITHUB_TOKEN` and `GITHUB_REPO`

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add `GITHUB_TOKEN` and `GITHUB_REPO`

## Moderation:

To remove spam:
1. Go to your repo's Issues tab
2. Find the spam issue
3. Close it (or delete it)
4. Closed issues won't appear in the guestbook

## Benefits of GitHub Issues:

✅ Free forever
✅ No database setup needed
✅ Built-in spam protection (you can close/delete issues)
✅ Version controlled
✅ Easy to moderate
✅ Works with static hosting

## Troubleshooting:

**"GitHub configuration missing" error:**
- Check that `.env.local` exists
- Verify environment variables are set correctly
- Restart dev server after adding variables

**Entries not appearing:**
- Check that issues have the "guestbook" label
- Make sure issues are "open" (not closed)
- Check browser console for API errors

**Can't create entries:**
- Verify token has correct permissions (`public_repo` or `repo`)
- Check token hasn't expired
- Make sure repo name format is correct: `username/repo`
