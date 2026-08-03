import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_unreachable_statements_baseline_path } from "./functions_unreachable_statements_baseline_path.mjs";
import { functions_unreachable_statements_names } from "./functions_unreachable_statements_names.mjs";
export async function functions_unreachable_statements_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no new work is written under a line that always leaves it unreached.");
  ("Nothing goes red when this happens, because nothing goes wrong - the lines simply never run, and a return accidentally placed above the work that was meant to follow it looks exactly like a function that finishes early on purpose. This is the only thing that would say so.");
  ("Measured against what the repo already carried rather than against zero, because a dead line is not always a mistake. An old way of doing the job is parked under the new one in several places here, and one function is switched off at its first line deliberately. Deciding which of those to clear needs somebody who knows why it was left, so the record only shrinks.");
  let offenders = await functions_unreachable_statements_names();
  let path = functions_unreachable_statements_baseline_path();
  let name_write = fn_name("functions_unreachable_statements_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these functions hold work written under a line that always leaves, so it never runs - move it above that line, or delete it if the line above it is already the answer",
    name_write,
  );
  return r;
}
