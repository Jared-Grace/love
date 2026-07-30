import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_declared_names_cases } from "./js_declared_names_cases.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_declared_names_cases_gate_run() {
  "QA gate: each written-down file yields exactly the names the corpus says it declares.";
  "The free-name question is built out of this one, and the pass that canonicalizes every";
  "edited file uses the free-name question to decide which imports to add. So a name this";
  "reading quietly stopped reporting turns into a name that looks bound by nothing, and an";
  "import added for something that was there all along.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_declared_names_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
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
