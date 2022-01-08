from fastapi import FastAPI, File, UploadFile
from starlette.middleware.cors import CORSMiddleware
from riceQuality import getResults

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get("/")
def read_root():
    return getResults('rice.jpg')

