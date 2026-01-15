from kokoro import KPipeline
from IPython.display import display, Audio
import soundfile as sf
import torch
from pathlib import Path
import sys
sys.stdout.reconfigure(encoding="utf-8")
import json

pipeline = KPipeline(lang_code='a')

def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)

    file_name = sys.argv[1]

    # Open and read the text file
    with open(file_name, "r", encoding="utf-8") as f:
        input = f.read()

    # Parse the file contents as JSON
    try:
        data = json.loads(input)
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        sys.exit(1)

    text = data.get("text")
    print(text)
    path_output = data.get("path_output")
    # Do something with the parsed JSON
    print("Parsed JSON:", data)

    generator = pipeline(text, voice='am_adam')
    for i, (gs, ps, audio) in enumerate(generator):
        print(i, gs, ps)
        display(Audio(data=audio, rate=24000, autoplay=i==0))
        out_dir = Path(path_output)
        out_dir.mkdir(parents=True, exist_ok=True)
        with open(f"{path_output}/{i}.txt", "w", encoding="utf-8") as f:
            f.write(gs)
        sf.write(f'{path_output}/{i}.wav', audio, 24000)

if __name__ == "__main__":
    main()
