@echo off
setlocal enabledelayedexpansion
title Next.js GitHub Deployer

echo ===================================================
echo 🚀 Next.js Retro Project Auto-Deployer (Transparent Mode)
echo ===================================================

echo.
echo [1/6] Checking Git Initialization...
git rev-parse --is-inside-work-tree
if %errorlevel% neq 0 (
    echo.
    echo 📂 No Git repository detected. Initializing...
    git init
) else (
    echo 📂 Git repository already initialized.
)

echo.
echo [2/6] Checking Remote Origin Configuration...
git remote -v
git remote get-url origin
if %errorlevel% neq 0 (
    echo.
    echo 🔗 No remote origin configured.
    set /p repo_url="🔗 Paste your GitHub Repository URL: "
    if "!repo_url!"=="" (
        echo ❌ Error: Repository URL cannot be empty.
        goto end
    )
    git remote add origin !repo_url!
) else (
    echo.
    echo 🔗 Existing remote origin connected.
    echo If this is incorrect, you can change it manually with:
    echo git remote set-url origin ^<new_url^>
)

echo.
echo [3/6] Setting Branch to main...
git branch -M main

echo.
echo [4/6] Staging files...
git add . --verbose

echo.
echo [5/6] Committing changes...
set /p commit_msg="💬 Enter your commit message (Press Enter for default): "
if "!commit_msg!"=="" (
    set commit_msg=build: pixel perfect layout and retro theme updates
)
git commit -v -m "!commit_msg!"

echo.
echo [6/6] Pushing to GitHub (main)...
git push -u origin main --verbose --progress

echo.
echo ===================================================
echo 🚀 Script finished executing. Check outputs above!
echo ===================================================

:end
pause
