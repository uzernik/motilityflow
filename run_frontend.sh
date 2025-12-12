#!/bin/bash

# Navigate to the React frontend directory
cd "$(dirname "$0")/frontend-react"

# Install dependencies if node_modules doesn't exist or package.json is newer
if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Run the development server
npm run dev

