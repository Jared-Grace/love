import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
import { js_function_params_all_cases } from "./js_function_params_all_cases.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_function_params_all_cases_gate_run() {
  "QA gate: each written-down file gives up exactly the parameter names the corpus says it binds.";
  "The free-name question is built out of this one, and the pass that canonicalizes every edited file uses that question to decide which imports to add. So a parameter this reading quietly stopped giving up becomes a name that looks bound by nothing - and since the same name may well be a function this repo really has, what gets added is an import for something that was a parameter all along.";
  "The answer is sorted before it is compared, so gathering the same names in another order stays a refactor rather than a red gate.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_function_params_all_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let params = js_function_params_all(ast);
    let sorted = list_sort_text(params);
    return sorted;
  }
  let r = cases_gate_run_generic(cases, answer, "params", "name", "parameters");
  return r;
}
