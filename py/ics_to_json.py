import sys
import json
from ics import Calendar

if len(sys.argv) != 3:
    print(f"Usage: {sys.argv[0]} calendar.ics output_path.json")
    sys.exit(1)

ics_path = sys.argv[1]
output_path = sys.argv[1]

with open(ics_path, "r") as f:
    calendar = Calendar(f.read())

events = []

for event in calendar.events:
    events.append({
        "name": event.name,
        "begin": str(event.begin),
        "end": str(event.end),
        "description": event.description,
        "location": event.location,
    })

with open(output_path, "w") as f:
    json.dump(events, f, indent=2)

print(f"Saved {output_path}")