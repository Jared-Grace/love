import { property_js_parse } from "./property_js_parse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_storage_browser_objects_cases } from "./js_storage_browser_objects_cases.mjs";
import { js_storage_browser_objects } from "./js_storage_browser_objects.mjs";
export function js_storage_browser_objects_cases_gate_run() {
  "QA gate: each written-down file names exactly the browser stores the corpus says it speaks to itself.";
  "The gate built on this reading measures against what the repo already carried, so a reading that had stopped answering looks exactly like a repo that had just been cleaned up - and would then let every new file speak straight to the browser with nothing watching the word it keeps.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_storage_browser_objects_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let objects = js_storage_browser_objects(ast);
    return objects;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "objects",
    "why",
    "storage browser objects",
  );
  return r;
}
