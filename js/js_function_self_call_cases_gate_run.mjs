import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_function_self_call_cases } from "./js_function_self_call_cases.mjs";
import { js_function_self_call_unconditional_is } from "./js_function_self_call_unconditional_is.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_self_call_cases_gate_run() {
  "Gate: each written-down function must be judged the way the corpus says. The sweep built on this reading finds nothing in the repo today, so a reader that had gone quiet and a repo that is clean give the same answer, and only this can tell them apart. Throws so the dispatcher seam exits nonzero.";
  let cases = js_function_self_call_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let declaration = js_flo(ast);
    let forever = js_function_self_call_unconditional_is(declaration);
    return forever;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "forever",
    "code",
    "js function self call",
  );
  return r;
}
