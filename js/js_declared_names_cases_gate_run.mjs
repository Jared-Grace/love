import { property_js_parse } from "./property_js_parse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_declared_names_cases } from "./js_declared_names_cases.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
export function js_declared_names_cases_gate_run() {
  "QA gate: each written-down file yields exactly the names the corpus says it declares.";
  "The free-name question is built out of this one, and the pass that canonicalizes every";
  "edited file uses the free-name question to decide which imports to add. So a name this";
  "reading quietly stopped reporting turns into a name that looks bound by nothing, and an";
  "import added for something that was there all along.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_declared_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let declared = js_declared_names(ast);
    return declared;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "declared",
    "name",
    "declared names",
  );
  return r;
}
