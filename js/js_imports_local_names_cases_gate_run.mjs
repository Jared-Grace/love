import { property_js_parse } from "./property_js_parse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_imports_local_names_cases } from "./js_imports_local_names_cases.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
export function js_imports_local_names_cases_gate_run() {
  "QA gate: each written-down file binds exactly the local names the corpus says its import lines bind.";
  "This is the first thing the free-name question subtracts, and that question is how the pass";
  "that canonicalizes every edited file decides which imports to add. A shape this reading";
  "stopped recognising would read as a missing import and be added a second time, in the one";
  "shape the reader can see.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_imports_local_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let local = js_imports_local_names(ast);
    return local;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "local",
    "name",
    "import local names",
  );
  return r;
}
