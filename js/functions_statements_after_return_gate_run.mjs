import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { statements_after_return_baseline_path } from "./statements_after_return_baseline_path.mjs";
import { functions_statements_after_return } from "./functions_statements_after_return.mjs";
import { functions_statements_after_return_baseline_write } from "./functions_statements_after_return_baseline_write.mjs";
export async function functions_statements_after_return_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a function may not newly carry work below the line that already left it.");
  ("A return or a throw standing at the top of a body ends it, so anything written");
  ("under it never runs. The file still parses, every name in it is bound and");
  ("imported, and each statement reads as ordinary code - so a function can look");
  ("like it does the work and do none of it, and no other gate here can tell.");
  ("Measured against what the repo already carried rather than against zero, so the");
  ("rule binds what is written today instead of waiting on a judgement about each");
  ("one already here. Some of those are a body deliberately switched off at the top,");
  ("which is a different decision from an accident and is not this gate's to make.");
  let offenders = await functions_statements_after_return();
  let path = statements_after_return_baseline_path();
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these functions carry statements below a return - delete the dead lines, or move them above the return if they were meant to run",
    functions_statements_after_return_baseline_write.name,
  );
  return r;
}
