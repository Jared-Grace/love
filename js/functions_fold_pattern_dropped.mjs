import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_fold_pattern_dropped } from "./js_fold_pattern_dropped.mjs";
export async function functions_fold_pattern_dropped() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that cannot stand as a fold pattern, with the lines of its own work the pattern would leave out.");
  ("It is the coverage of the repo's duplicate finder, asked directly. The fold matches on a body with every line that carries no call filtered away, so a function whose work includes a list being built, a condition, or a loop is a function the fold can never be asked about - not one it declines, one it cannot see. The gate built on the fold is therefore quiet about those, and quiet reads exactly like clean.");
  ("Measured on 2026-08-26 over 13353 functions: 3024 could stand as a pattern and 10329 could not. So the duplicate finder covers roughly a quarter of what is here, and the other three quarters need the run pointed at a name by hand.");
  ("A count rather than a fault, so nothing ratchets on it. A function whose work is a list being built is written correctly; what the list here says is which functions one particular reading cannot reach.");
  let offenders = await functions_ast_offenders_generic(
    js_fold_pattern_dropped,
    "dropped",
  );
  return offenders;
}
