import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_binding_names_cases } from "./js_binding_names_cases.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
export function js_binding_names_cases_gate_run() {
  "QA gate: the reading of what a module binds for itself answers the corpus exactly as the corpus says.";
  "Eleven steps read this to drop a file's own names before treating the rest as the repo's, and every one of them fails silently when a name is missing: the local goes on looking like the repo function of that name, and whatever the repo said about that function gets acted on against something else. No other gate can catch it, because the name is whatever the file happens to say.";
  "The answer is sorted before it is compared, so gathering the same names in another order stays a refactor rather than a red gate.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_binding_names_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let names = js_binding_names(ast);
    let sorted = list_sort_text(names);
    return sorted;
  }
  let r = cases_gate_run_generic(cases, answer, "bound", "name", "binding names");
  return r;
}
