from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ENABLE CORS FOR ALL ORIGINS (simple local dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend is running cleanly!"}

@app.get("/motility")
def motility():
    return {
        "day": 3,
        "motility": "very slow",
        "stacking": 7
    }
