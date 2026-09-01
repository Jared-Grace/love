import { js_statements_function_declared_names_direct_cases } from "./js_statements_function_declared_names_direct_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_statements_function_declared_names_direct } from "./js_statements_function_declared_names_direct.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_statements_function_declared_names_direct_cases_gate_run() {
  "QA gate: each run of lines written down in the corpus declares as functions exactly the names that corpus says it does.";
  "This reading is subtracted from what a run of lines binds before a cut is asked whether it reaches forward into a name nothing has filled yet. Both directions of a mistake are silent. Count a class and a cut is allowed that hands over a name still empty, which stops the page at whatever later moment the reader is reached rather than at the cut. Miss a function and a cut that was never in any danger is refused instead, which stops nothing and shows up only as a body that stays too big and looks un-cuttable.";
  "Neither direction can be caught by any other gate, because both are about a shape the code in front of the reader happens not to have.";
  "The answer is sorted before it is compared, so gathering the same names in another order stays a refactor rather than a red gate.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_statements_function_declared_names_direct_cases();
  function answer(c) {
    let object = property_js_parse(c, "code");
    let statements = property_get(object, "body");
    let names = js_statements_function_declared_names_direct(statements);
    let sorted = list_sort_text(names);
    return sorted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "declared",
    "name",
    "function declared names direct",
  );
  return r;
}
