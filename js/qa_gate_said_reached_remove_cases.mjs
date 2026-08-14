export function qa_gate_said_reached_remove_cases() {
  "What a gate said, and what is left of it once the far half of each arrow is taken out, written down. The taking-out decides deployments, so it is answerable here rather than only where it is used.";
  "The names inside are invented, so that the canonicalizing pass cannot rewrite a case into a reference to a real function and quietly change what the case says.";
  let cases = [
    {
      said: '{"list":["gate_named_this -> app_thing_named_that"],"json":{"added":["gate_named_this -> app_thing_named_that"]}}',
      left: '{"list":["gate_named_this"],"json":{"added":["gate_named_this"]}}',
      why: "the whole reason for it: the complaint is about gate_named_this, and app_thing_named_that is what it reached. Read as accused, the app that ships the reached name is held out of a deployment for somebody else's fault",
    },
    {
      said: "gate_named_this -> app_thing_named_that",
      left: "gate_named_this",
      why: "a gate that prints its findings one to a line ends an entry at the end of the line, and there is nothing after it",
    },
    {
      said: "gate_named_this -> app_thing_named_that\ngate_named_other -> app_thing_named_more",
      left: "gate_named_this\ngate_named_other",
      why: "each printed line is its own entry, so the line break survives and the next offender is still read",
    },
    {
      said: '{"list":["gate_named_this -> app_thing_named_that, app_thing_named_more"]}',
      left: '{"list":["gate_named_this"]}',
      why: "several reached names on the right of one arrow are all evidence, and the entry ends at its closing quote rather than at the first comma",
    },
    {
      said: '{"list":["gate_named_this"],"json":{"added":["gate_named_this"]}}',
      left: '{"list":["gate_named_this"],"json":{"added":["gate_named_this"]}}',
      why: "a gate that reports no pairs is left exactly as it was, so nothing is taken from a gate that names its offenders plainly",
    },
    {
      said: "2 files are over the ceiling",
      left: "2 files are over the ceiling",
      why: "a complaint that counted rather than named carries no arrow, and must come back whole - an empty answer here would read as a gate that named nothing and hold every deploy",
    },
    {
      said: '{"list":["a_thing -> b_thing","c_thing -> d_thing"]}',
      left: '{"list":["a_thing","c_thing"]}',
      why: "every entry in a list is cut on its own, so the second offender is not swallowed by the first cut",
    },
  ];
  return cases;
}
