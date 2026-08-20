import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_function_expressions_own_names } from "./js_function_expressions_own_names.mjs";
import { js_function_expressions_own_names_cases } from "./js_function_expressions_own_names_cases.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_function_expressions_own_names_cases_gate_run() {
  "QA gate: each written-down file gives up exactly the names the corpus says its functions-written-as-values carry for themselves.";
  "The free-name question is built out of this one, and the pass that canonicalizes every edited file uses that question to decide which imports to add. This name is readable only inside the function wearing it, so nothing else in the file mentions it and no other reading would ever find it; if this one stops giving it up, the name looks bound by nothing and an import gets added for the function that was naming itself.";
  "The answer is sorted before it is compared, so gathering the same names in another order stays a refactor rather than a red gate.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_function_expressions_own_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let own = js_function_expressions_own_names(ast);
    let sorted = list_sort_text(own);
    return sorted;
  }
  let r = cases_gate_run_generic(cases, answer, "own", "name", "own names");
  return r;
}
