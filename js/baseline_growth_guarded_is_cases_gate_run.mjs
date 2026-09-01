import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_growth_guarded_is_cases } from "./baseline_growth_guarded_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { baseline_growth_guarded_is } from "./baseline_growth_guarded_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function baseline_growth_guarded_is_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Asks the judgment every set of imports the corpus writes down, and refuses the run when one of them is answered differently from the way it says.");
  ("THIS IS THE ONLY THING THAT CAN GO RED WHEN THAT JUDGMENT BREAKS. The sweep it serves reports the writers that cannot refuse growth, and on a healthy repo that list is empty - so a judgment that has stopped working reports the same empty list as one that is working, and the gate over the sweep stays green while every ratchet in the repo is unguarded.");
  ("What it guards is a guard, which is why it is worth a gate of its own rather than a reading somebody does. A ratchet writer that can grow its own file turns the moment a gate goes red into the moment the record gets rewritten to say the fault was always there, and nothing downstream of that ever finds out.");
  let cases = baseline_growth_guarded_is_cases();
  function answer(one) {
    let imports = property_get(one, "imports");
    let guarded = baseline_growth_guarded_is(imports);
    return guarded;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "guarded",
    "why",
    "baseline growth guarded is",
  );
  return r;
}
