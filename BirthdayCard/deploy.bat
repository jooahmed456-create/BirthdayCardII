@echo off
setlocal enabledelayedexpansion
title Next.js GitHub Deployer

echo ===================================================
echo 🚀 Next.js Retro Project Auto-Deployer
echo ===================================================

REM 1. Git Check
git rev-parse --is-inside-work-tree >nul 2>&1
if %errorlevel% neq 0 (
    echo 📂 Initializing Git repository...
    git init
    if %errorlevel% neq 0 (
        echo ❌ Error: Failed to initialize Git.
        goto end
    )
) else (
    echo 📂 Git is already initialized.
)

REM 2. Remote Origin Setup
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔗 No remote origin found.
    set /p repo_url="🔗 Paste your GitHub Repository URL: "
    if "!repo_url!"=="" (
        echo ❌ Error: Repository URL cannot be empty.
        goto end
    )
    git remote add origin !repo_url!
    if %errorlevel% neq 0 (
        echo ❌ Error: Failed to add remote origin.
        goto end
    )
    echo 🔗 Remote origin added successfully!
) else (
    for /f "tokens=*" %%i in ('git remote get-url origin') do set existing_url=%%i
    echo 🔗 Remote origin is already connected: !existing_url!
)

REM 3. Branch Management
echo 🌿 Setting current branch to 'main'...
git branch -M main

REM 4. Staging
echo 📦 Staging all files...
git add .
if %errorlevel% neq 0 (
    echo ❌ Error: Staging files failed.
    goto end
)

REM 5. Smart Committing
set /p commit_msg="💬 Enter your commit message (Press Enter for default): "
if "!commit_msg!"=="" (
    set commit_msg=build: pixel perfect layout and retro theme updates
)

echo 💾 Committing changes: "!commit_msg!"...
git commit -m "!commit_msg!"
if %errorlevel% neq 0 (
    echo ⚠️ Info: Nothing to commit or commit failed.
)

REM 6. Deployment
echo 🚀 Pushing to GitHub (main)...
git push -u origin main
if %errorlevel% neq 0 (
    echo ❌ Error: Failed to push to GitHub.
    goto end
)

echo.
echo ===================================================
echo 🚀 Success! Your project is now live on GitHub!
echo ===================================================

:end
pause
