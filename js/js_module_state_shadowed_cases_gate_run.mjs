import { property_js_parse } from "./property_js_parse.mjs";
import { js_module_state_shadowed_cases } from "./js_module_state_shadowed_cases.mjs";
import { js_module_state_shadowed } from "./js_module_state_shadowed.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_module_state_shadowed_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that";
  "corpus says.";
  "The whole-repo gate above this one passes by finding nothing, so nothing there";
  "can tell a clean repo from a reader that has stopped looking. The corpus can,";
  "because one of its cases must come back with a name.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_module_state_shadowed_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let hidden = js_module_state_shadowed(ast);
    return hidden;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "hidden",
    "why",
    "module state shadowed",
  );
  return r;
}
