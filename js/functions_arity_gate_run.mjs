import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { arity_baseline_path } from "./arity_baseline_path.mjs";
import { functions_arity_mismatches } from "./functions_arity_mismatches.mjs";
import { functions_arity_baseline_write } from "./functions_arity_baseline_write.mjs";
export async function functions_arity_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a call hands a repo function exactly what it declares.");
  ("This repo allows no optional, defaulted or variadic parameter, so the declared");
  ("count is the only right one and any other count is a mistake. That rule is what");
  ("makes the question answerable at all - everywhere else a differing count is");
  ("ordinary, and here it never is.");
  ("The check the repo already had for this runs when the call runs, which means a");
  ("path nobody exercised keeps its mistake until a user finds it. This asks the");
  ("same question of every call at once, without running any of them.");
  ("Measured against what the repo already carried rather than against zero,");
  ("because clearing each one is a judgement about what the caller meant - a");
  ("dropped message may have been abandoned on purpose, and a missing argument");
  ("needs somebody to know what belonged there. The list only shrinks.");
  let offenders = await functions_arity_mismatches();
  let path = arity_baseline_path();
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these calls hand a repo function the wrong number of things - give it what it declares, or change what it declares and every call with it",
    functions_arity_baseline_write.name,
  );
  return r;
}
