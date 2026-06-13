from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from service.llm import client
from profile import PROFILE

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/api/chat")
@app.post("/chat")
async def chat(request: ChatRequest):
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": PROFILE,
            },
            {
                "role": "user",
                "content": request.message,
            },
        ],
        temperature=0.5,
        max_tokens=1024,
    )

    return {
        "reply": response.choices[0].message.content
    }
