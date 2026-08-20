import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_shadowing_names } from "./js_shadowing_names.mjs";
import { js_shadowing_names_cases } from "./js_shadowing_names_cases.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_shadowing_names_cases_gate_run() {
  "QA gate: each written-down file hides exactly the names the corpus says it hides.";
  "This is the one reading that asks the per-scope binding question and the enclosing-scopes question together, so it is the only place either of them can be caught giving a wrong answer about a whole file. The shadowing gates that ratchet the repo are built on it: were it to stop reporting, they would go green on a repo that had grown new hidings, which is the failure that looks exactly like success.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_shadowing_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let names = js_shadowing_names(ast);
    let sorted = list_sort_text(names);
    return sorted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "shadowing",
    "name",
    "names hidden",
  );
  return r;
}
