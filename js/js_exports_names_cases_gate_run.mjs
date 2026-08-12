import { js_exports_names_cases } from "./js_exports_names_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_exports_names } from "./js_exports_names.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_exports_names_cases_gate_run() {
  "QA gate: each small file written down in the corpus gives out the names that corpus says it gives out";
  "This is one of the two readings the unexported-import sweep rests on. If it stopped seeing exports, every import in the repo would look like a name its neighbour never wrote, and the sweep would go red everywhere at once - loud, and so not the danger. The danger is the other way: a reading that quietly began calling everything exported would answer no import wrong, and the sweep would report a clean repo it had stopped looking at.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_exports_names_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let names = js_exports_names(ast);
    return names;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "names",
    "name",
    "exported names",
  );
  return r;
}
