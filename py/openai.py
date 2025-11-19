import openai
import sys
import json

# --- Check arguments ---
if len(sys.argv) != 4:
    print("Usage: python script.py API_KEY input.json output.txt")
    sys.exit(1)

api_key_file = sys.argv[1]
input_file = sys.argv[2]
output_file = sys.argv[3]

with open(api_key_file, "r", encoding="utf-8") as f:
    openai.api_key = f.read().strip()

# --- Load JSON ---
try:
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)
except Exception as e:
    print(f"Error reading JSON: {e}")
    sys.exit(1)

# Expect fields: system, prompt
system_msg = data.get("system", "")
user_msg   = data.get("user", "")

# --- API call ---
response = openai.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": system_msg},
        {"role": "user", "content": user_msg}
    ],
    temperature=0.7
)

assistant_text = response.choices[0].message.content

# --- Write output file ---
with open(output_file, "w", encoding="utf-8") as f:
    f.write(assistant_text)
