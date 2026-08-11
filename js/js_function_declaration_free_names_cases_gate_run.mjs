import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_free_names } from "./js_function_declaration_free_names.mjs";
import { js_function_declaration_free_names_cases } from "./js_function_declaration_free_names_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_function_declaration_free_names_cases_gate_run() {
  "QA gate: each written-out function reaches for exactly the outside names the corpus says it does";
  "Its callers pass by finding little, so a reading that had quietly started calling every word free would not look broken from outside - it would look like functions that lean on a great deal, which is not a shape anything refuses";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_function_declaration_free_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let declaration = js_flo(ast);
    let free = js_function_declaration_free_names(declaration);
    return free;
  }
  let r = cases_gate_run_generic(cases, answer, "free", "name", "free names");
  return r;
}
