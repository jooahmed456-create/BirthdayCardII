#!/bin/bash

# Next.js GitHub Deployer for macOS / Linux (Transparent Mode)

echo "==================================================="
echo "🚀 Next.js Retro Project Auto-Deployer (Transparent Mode)"
echo "==================================================="

echo ""
echo "[1/6] Checking Git Initialization..."
git rev-parse --is-inside-work-tree
if [ $? -ne 0 ]; then
    echo ""
    echo "📂 No Git repository detected. Initializing..."
    git init
else
    echo "📂 Git repository already initialized."
fi

echo ""
echo "[2/6] Checking Remote Origin Configuration..."
git remote -v
git remote get-url origin
if [ $? -ne 0 ]; then
    echo ""
    echo "🔗 No remote origin configured."
    read -p "🔗 Paste your GitHub Repository URL: " repo_url
    if [ -z "$repo_url" ]; then
        echo "❌ Error: Repository URL cannot be empty."
        exit 1
    fi
    git remote add origin "$repo_url"
else
    echo ""
    echo "🔗 Existing remote origin connected."
    echo "If this is incorrect, change it with: git remote set-url origin <new_url>"
fi

echo ""
echo "[3/6] Setting Branch to main..."
git branch -M main

echo ""
echo "[4/6] Staging files..."
git add . --verbose

echo ""
echo "[5/6] Committing changes..."
read -p "💬 Enter your commit message (Press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="build: pixel perfect layout and retro theme updates"
fi
git commit -v -m "$commit_msg"

echo ""
echo "[6/6] Pushing to GitHub (main)..."
git push -u origin main --verbose --progress

echo ""
echo "==================================================="
echo "🚀 Script finished executing. Check outputs above!"
echo "==================================================="

read -n 1 -s -r -p "Press any key to close this terminal..."
echo ""
