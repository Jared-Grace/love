import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_calls_unawaited_baseline_path } from "./functions_calls_unawaited_baseline_path.mjs";
import { functions_calls_unawaited_names } from "./functions_calls_unawaited_names.mjs";
export async function functions_calls_unawaited_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no new call is written that has to be waited for and is not.");
  ("An unwaited call hands back a promise where the line below expects an answer, and a promise is an object - never null, never empty, never equal to what is being tested for. So the check below it passes, the wrong branch is taken, and nothing throws. This is what a fold that dropped a name looked like the day it destroyed two functions: a carefully built list, and then a promise returned in its place.");
  ("Measured against what the repo already carried rather than against zero. A call handed to something that waits for it - a lambda given to a catcher, a click handler that has nothing to wait for - reads the same way from here and is not a mistake, so the record only shrinks.");
  let offenders = await functions_calls_unawaited_names();
  let path = functions_calls_unawaited_baseline_path();
  let name_write = fn_name("functions_calls_unawaited_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these functions hold a call that has to be waited for and is not - write the wait in, or hand the call to something that waits for it",
    name_write,
  );
  return r;
}
