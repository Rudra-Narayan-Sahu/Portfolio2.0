from fastapi import FastAPI
from pydantic import BaseModel
from services.llm import client
from profile import PROFILE

app = FastAPI()

class ChatRequest(BaseModel):
    message: str

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
        "response": response.choices[0].message.content
    }