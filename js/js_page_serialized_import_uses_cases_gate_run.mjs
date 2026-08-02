import { js_page_serialized_import_uses_cases } from "./js_page_serialized_import_uses_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_page_serialized_import_uses } from "./js_page_serialized_import_uses.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_page_serialized_import_uses_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that";
  "corpus says.";
  "Two whole-repo gates read this one function and both pass by finding nothing, so";
  "nothing above it can tell a clean repo from a reader that has stopped looking.";
  "The corpus can, because one of its cases must come back with a borrowed name.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_page_serialized_import_uses_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let uses = js_page_serialized_import_uses(ast);
    return uses;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "uses",
    "why",
    "page serialized import uses",
  );
  return r;
}
