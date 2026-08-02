import { property_js_parse } from "./property_js_parse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_free_names_cases } from "./js_free_names_cases.mjs";
import { js_free_names } from "./js_free_names.mjs";
export function js_free_names_cases_gate_run() {
  "QA gate: each written-down file yields exactly the unbound names the corpus says it";
  "does.";
  "Nothing else can tell a working reading apart from a silent one here. Both gates built";
  "on this reading pass by finding nothing, and the pass that repairs imports on every";
  "edited file adds nothing when it is told there is nothing to add - so a reading that";
  "had stopped answering would look like a repo in perfect order while quietly letting";
  "every new file be committed without its imports.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_free_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let free = js_free_names(ast);
    return free;
  }
  let r = cases_gate_run_generic(cases, answer, "free", "name", "free names");
  return r;
}
