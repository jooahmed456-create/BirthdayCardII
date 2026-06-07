#!/bin/bash

# Next.js GitHub Deployer for macOS / Linux

echo "==================================================="
echo "🚀 Next.js Retro Project Auto-Deployer"
echo "==================================================="

# 1. Git Check
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "📂 Initializing Git repository..."
    git init
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to initialize Git."
        exit 1
    fi
else
    echo "📂 Git is already initialized."
fi

# 2. Remote Origin Setup
if ! git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 No remote origin found."
    read -p "🔗 Paste your GitHub Repository URL: " repo_url
    if [ -z "$repo_url" ]; then
        echo "❌ Error: Repository URL cannot be empty."
        exit 1
    fi
    git remote add origin "$repo_url"
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to add remote origin."
        exit 1
    fi
    echo "🔗 Remote origin added successfully!"
else
    existing_url=$(git remote get-url origin)
    echo "🔗 Remote origin is already connected: $existing_url"
fi

# 3. Branch Management
echo "🌿 Setting current branch to 'main'..."
git branch -M main

# 4. Staging
echo "📦 Staging all files..."
git add .
if [ $? -ne 0 ]; then
    echo "❌ Error: Staging files failed."
    exit 1
fi

# 5. Smart Committing
read -p "💬 Enter your commit message (Press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="build: pixel perfect layout and retro theme updates"
fi

echo "💾 Committing changes: \"$commit_msg\"..."
git commit -m "$commit_msg"
if [ $? -ne 0 ]; then
    echo "⚠️ Info: Nothing to commit or commit failed."
fi

# 6. Deployment
echo "🚀 Pushing to GitHub (main)..."
git push -u origin main
if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to push to GitHub."
    exit 1
fi

echo ""
echo "==================================================="
echo "🚀 Success! Your project is now live on GitHub!"
echo "==================================================="

# Keep window open / wait for key press
read -n 1 -s -r -p "Press any key to close this terminal..."
echo ""
