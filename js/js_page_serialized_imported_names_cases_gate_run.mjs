import { property_js_parse } from "./property_js_parse.mjs";
import { js_page_serialized_imported_names_cases } from "./js_page_serialized_imported_names_cases.mjs";
import { js_page_serialized_imported_names } from "./js_page_serialized_imported_names.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_page_serialized_imported_names_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that";
  "corpus says.";
  "The whole-repo gate reading this same reader passes by finding nothing, so";
  "nothing above it can tell a clean repo from a reader that has stopped looking.";
  "The corpus can, because one of its cases must come back with a name.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_page_serialized_imported_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let names = js_page_serialized_imported_names(ast);
    return names;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "names",
    "why",
    "page serialized imported names",
  );
  return r;
}
