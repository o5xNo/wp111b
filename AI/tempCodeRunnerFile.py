# Load your API key from an environment variable or secret management service
# openai.api_key = os.getenv("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")
openai.api_key = "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"
response = openai.Completion.create(
    model="text-davinci-003", 
    prompt="GPT 是甚麼?", 
    temperature=0, 
    max_tokens=7)