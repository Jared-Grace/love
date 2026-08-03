import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_function_declaration_unused_remove } from "./js_function_declaration_unused_remove.mjs";
import { js_function_declaration_unused_remove_cases } from "./js_function_declaration_unused_remove_cases.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_function_declaration_unused_remove_cases_gate_run() {
  "QA gate: a helper nothing calls is taken out of a function, and a helper anything calls is left alone.";
  "This pass is reached from the command that clears unread names, which a sweep runs over the whole repo a few functions at a time. So a fault here is not one wrong file - it is however many files the next sweep touches before somebody notices, and what it takes is gone rather than wrong.";
  "The corpus carries both directions, so neither of the two ways of being broken can pass: a pass that stopped removing anything fails the cases that must lose their helper, and a pass that stopped counting the mentions fails the ones that must keep it.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_function_declaration_unused_remove_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    js_function_declaration_unused_remove(ast);
    let code = js_unparse(ast);
    return code;
  }
  let r = cases_gate_run_generic(cases, answer, "removed", "name", "removed");
  return r;
}
