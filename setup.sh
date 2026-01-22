#!/bin/bash
# Portfolio Website Setup Guide

echo "🚀 Portfolio Website Setup"
echo "========================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

echo "📦 Installing dependencies..."
echo "(This may take a few minutes on first run)"
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation successful!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Edit your information in src/sections/"
    echo "2. Run: npm run dev"
    echo "3. Open http://localhost:5173 in your browser"
    echo ""
    echo "📚 For more info, see PORTFOLIO_README.md"
else
    echo "❌ Installation failed. Please try again."
    exit 1
fi
