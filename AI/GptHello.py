import os
import openai

# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("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")
# openai.api_key = "sk-cvexxxxxxxxgx24A5HS4dKn04HU2L"
response = openai.Completion.create(
    model="text-davinci-003", 
    prompt="Say this is a test", 
    temperature=0, 
    max_tokens=7)
print(response)