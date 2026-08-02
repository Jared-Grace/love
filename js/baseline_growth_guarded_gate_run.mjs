import { baseline_growth_guarded_cases } from "./baseline_growth_guarded_cases.mjs";
import { baseline_growth_guarded_is } from "./baseline_growth_guarded_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function baseline_growth_guarded_gate_run() {
  "Gate: the written-down import sets must each get the answer the corpus declares. The sweep built on this judgment comes back empty on a healthy repo, where a working answer and a broken one look the same, so this is the only place a mistake in it can be seen. Throws so the dispatcher seam exits nonzero.";
  let cases = baseline_growth_guarded_cases();
  function answer(c) {
    let imports = property_get(c, "imports");
    let guarded = baseline_growth_guarded_is(imports);
    return guarded;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "guarded",
    "why",
    "baseline growth guarded",
  );
  return r;
}
