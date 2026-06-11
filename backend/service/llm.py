import os
from groq import Groq
from dotenv import load_dotenv
from profile import get_portfolio_context

load_dotenv()

# Initialize the Groq client
api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=api_key)

def get_chat_response(message: str) -> str:
    """Gets a response from the Groq LLM based on the user message and portfolio context."""
    system_prompt = get_portfolio_context()
    
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": message}
            ],
            model="llama-3.3-70b-versatile", # Using a versatile LLaMA 3.3 model from Groq
            temperature=0.7,
            max_tokens=1024,
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        print(f"Error calling Groq API: {e}")
        return "I'm currently unable to connect to my brain. Please try again later!"
