import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_function_forwarding_remove_cases } from "./js_function_forwarding_remove_cases.mjs";
import { js_code_forwarding_removed } from "./js_code_forwarding_removed.mjs";
import { property_get } from "./property_get.mjs";
export async function js_function_forwarding_remove_cases_gate_run() {
  "QA gate: dropping the functions that are only a second name for another one leaves each written-out piece of code exactly as the corpus says.";
  "This one deletes code, so a case is a licence and a case that keeps the code is a refusal to give one. Four of the five keep everything, and each names a way a wrapper is doing work that dropping it would lose.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_function_forwarding_remove_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let after = await js_code_forwarding_removed(code);
    return after;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "after",
    "name",
    "function forwarding remove",
  );
  return r;
}
