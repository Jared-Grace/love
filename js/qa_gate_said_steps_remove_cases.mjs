export function qa_gate_said_steps_remove_cases() {
  "What a gate said, and what is left of it once the chain it printed is taken out, written down. The taking-out decides deployments, so it is answerable here rather than only where it is used.";
  "The names inside are invented, so that the canonicalizing pass cannot rewrite a case into a reference to a real function and quietly change what the case says.";
  let cases = [
    {
      said: '{"f_name":"gate_named_this","app":"app_thing_named_that","steps":["a_thing","b_thing"]}',
      left: '{"f_name":"gate_named_this","app":"app_thing_named_that",}',
      why: "the whole reason for it: the fault is gate_named_this inside app_thing_named_that, and the chain is how it was found. Read as accused, every app shipping a_thing is held out of a deployment for a fault in somebody else's app",
    },
    {
      said: '{"f_name":"gate_named_this","app":"app_thing_named_that"}',
      left: '{"f_name":"gate_named_this","app":"app_thing_named_that"}',
      why: "a gate that names its offenders and no chain is left exactly as it was, so nothing is taken from a plainly written complaint",
    },
    {
      said: 'checked 12 apps\n{"app":"app_thing_named_that","steps":["a_thing"]}',
      left: 'checked 12 apps\n{"app":"app_thing_named_that",}',
      why: "a gate is free to print as it goes and several do, so what it printed before it threw is not touched",
    },
    {
      said: '{"app":"a_thing","steps":["x_thing"]}\n{"app":"b_thing","steps":["y_thing"]}',
      left: '{"app":"a_thing",}\n{"app":"b_thing",}',
      why: "each record is cut on its own, so the second offender's chain is not left behind by the first cut",
    },
    {
      said: '{"steps":[["a_thing"],["b_thing"]],"app":"c_thing"}',
      left: '{,"app":"c_thing"}',
      why: "a chain of chains ends at the bracket that closes the outermost one, so the offender written after it survives",
    },
    {
      said: "the steps are wrong",
      left: "the steps are wrong",
      why: "the word on its own in a sentence is not a field, and a complaint written in English must come back whole - an emptied one would read as a gate that named nothing and hold every deploy",
    },
    {
      said: "2 files are over the ceiling",
      left: "2 files are over the ceiling",
      why: "a complaint that counted rather than named carries no chain and is left alone",
    },
  ];
  return cases;
}
