import { js_imports_relative_named_cases } from "./js_imports_relative_named_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_relative_named } from "./js_imports_relative_named.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_imports_relative_named_cases_gate_run() {
  "QA gate: each small file written down in the corpus asks its neighbours for the names that corpus says it asks for";
  "This is the other of the two readings the unexported-import sweep rests on. A reader that had stopped seeing named imports would leave the sweep with nothing to ask about, and the sweep would report every import line answered - a total failure wearing the shape of a clean bill of health.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_imports_relative_named_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let asked = js_imports_relative_named(ast);
    return asked;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "asked",
    "name",
    "named relative imports",
  );
  return r;
}
