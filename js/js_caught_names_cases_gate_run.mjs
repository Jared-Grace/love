import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_caught_names } from "./js_caught_names.mjs";
import { js_caught_names_cases } from "./js_caught_names_cases.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_caught_names_cases_gate_run() {
  "QA gate: each written-down file gives up exactly the names the corpus says its catch clauses bind.";
  "The free-name question is built out of this one, and the pass that canonicalizes every edited file uses that question to decide which imports to add. A caught name that stops being given up looks bound by nothing, so it looks like the repo function of that name, and an import gets added for what was the caught error all along.";
  "The answer is sorted before it is compared, so gathering the same names in another order stays a refactor rather than a red gate.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_caught_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let caught = js_caught_names(ast);
    let sorted = list_sort_text(caught);
    return sorted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "caught",
    "name",
    "caught names",
  );
  return r;
}
