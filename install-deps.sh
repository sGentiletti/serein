#!/bin/bash

# Clean up any existing node_modules and lock files
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Install dependencies with npm
npm install

# Verify the installation
npm run build

echo "Dependencies installed successfully!" 