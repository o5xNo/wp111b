import os
import openai

# Load your API key from an environment variable or secret management service
# openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = "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"

response = openai.Completion.create(model="text-davinci-003", prompt="GPT 是甚麼?", temperature=0, max_tokens=300)
print(response)