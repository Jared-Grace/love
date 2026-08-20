import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_call_callee_name_try_cases } from "./js_call_callee_name_try_cases.mjs";
import { js_parse_expression_null_kept } from "./js_parse_expression_null_kept.mjs";
import { property_get } from "./property_get.mjs";
export function js_call_callee_name_try_cases_gate_run() {
  "QA gate: the called-name reading names the thing a plain call calls, and answers nothing for everything else, exactly as the corpus says.";
  "Every count of who calls what in the repo rests on this, and it is asked about every node in a file, nearly all of which are not calls. So nothing is an answer here rather than a stop, and a call reached through an object answers nothing too - which is why a search over callers can come back short.";
  "A case whose code is nothing is handed over as nothing; every other case is parsed first.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_call_callee_name_try_cases();
  function answer(c) {
    let given = property_get(c, "code");
    let thing = js_parse_expression_null_kept(given);
    let named = js_call_callee_name_try(thing);
    return named;
  }
  let r = cases_gate_run_generic(cases, answer, "named", "name", "code");
  return r;
}
