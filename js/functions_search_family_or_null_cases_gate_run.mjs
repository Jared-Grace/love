import { functions_search_family_or_null_cases } from "./functions_search_family_or_null_cases.mjs";
import { property_get } from "./property_get.mjs";
import { functions_search_family_or_null } from "./functions_search_family_or_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function functions_search_family_or_null_cases_gate_run() {
  "QA gate: every search written down in the corpus is told that its names share a longer beginning exactly where the corpus says it should be told so, and told nothing where it says nothing";
  "Throws so the dispatcher seam exits nonzero";
  let cases = functions_search_family_or_null_cases();
  function answer(c) {
    let names = property_get(c, "names");
    let search = property_get(c, "search");
    let family = functions_search_family_or_null(names, search);
    return family;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "family",
    "name",
    "search family",
  );
  return r;
}
