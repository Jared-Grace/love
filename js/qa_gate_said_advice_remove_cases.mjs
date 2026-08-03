export function qa_gate_said_advice_remove_cases() {
  "What a gate said, and what is left of it once the advice is taken out, written down. The taking-out decides deployments, so it is answerable here rather than only where it is used.";
  "The names inside are invented, so that the canonicalizing pass cannot rewrite a case into a reference to a real function and quietly change what the case says. The everyday words in the advice are real, and are the whole point of those cases: they are ordinary English and functions of this repo at once.";
  "The spacing is written down as it really comes out. What is outside the JSON is kept and the JSON is written again, and the three pieces are joined by a space, so a case that named no advice at all still comes back spaced differently from how it went in. That is worth pinning rather than hiding, because a reader comparing the two would otherwise think nothing had happened.";
  let cases = [
    {
      said: '{"list":["gate_named_this"],"json":{"hint":"give the shared run its own name and call it from each, or record it with gate_repair_this","added":["gate_named_this"]}}',
      left: ' {"list":["gate_named_this"],"json":{"added":["gate_named_this"]}} ',
      why: "the whole reason for it: the advice held each and or, which every app ships, and it named the repair function, which is not at fault. The offenders were carried separately and all of them survive",
    },
    {
      said: "gate_named_this is not a function",
      left: "gate_named_this is not a function",
      why: "a gate that never wrote any JSON is left exactly as it was, so nothing is taken from a gate that reports some other way",
    },
    {
      said: "2 files are over the ceiling",
      left: "2 files are over the ceiling",
      why: "a complaint that counted rather than named still carries no JSON, and must come back whole - an empty answer here would read as a gate that named nothing and hold every deploy",
    },
    {
      said: '{"added":["gate_named_this"]}',
      left: ' {"added":["gate_named_this"]} ',
      why: "JSON carrying no advice loses nothing, and comes back spaced because it was written again rather than passed through",
    },
    {
      said: 'two faults found\n{"json":{"hint":"ask gate_repair_this about it","added":["gate_named_this"]}}',
      left: 'two faults found\n {"json":{"added":["gate_named_this"]}} ',
      why: "a gate prints its findings line by line before it throws, so what stands before the JSON is evidence and is kept untouched",
    },
    {
      said: "gate_named_this {not written as JSON} was found",
      left: "gate_named_this {not written as JSON} was found",
      why: "braces that are not JSON are ordinary writing. Answering with nothing here would drop a real offender, so what cannot be parsed is left alone",
    },
    {
      said: '{"deep":{"inner":{"hint":"ask gate_repair_this","added":["gate_named_this"]}}}',
      left: ' {"deep":{"inner":{"added":["gate_named_this"]}}} ',
      why: "advice is taken out wherever it sits, not only at the top, because the shape a gate throws is not fixed",
    },
  ];
  return cases;
}
