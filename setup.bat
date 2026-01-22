@echo off
REM Portfolio Website Setup for Windows

echo.
echo.
echo ========================================
echo   Portfolio Website Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [X] Node.js is not installed.
    echo Please install Node.js v18+ from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js version:
node --version
echo.
echo [OK] npm version:
npm --version
echo.

echo.
echo Installing dependencies...
echo (This may take a few minutes on first run)
echo.

call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [OK] Installation successful!
    echo.
    echo.
    echo Next steps:
    echo 1. Edit your information in src/sections/
    echo 2. Run: npm run dev
    echo 3. Open http://localhost:5173 in your browser
    echo.
    echo For more info, see PORTFOLIO_README.md
    echo.
) else (
    echo.
    echo [X] Installation failed. Please try again.
    echo.
    pause
    exit /b 1
)

pause
