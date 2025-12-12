#!/bin/bash

# Navigate to the backend directory
cd "$(dirname "$0")/backend"

# Activate the virtual environment
source venv/bin/activate

# Run the FastAPI server with uvicorn
uvicorn app:app --reload --host 0.0.0.0 --port 8000

