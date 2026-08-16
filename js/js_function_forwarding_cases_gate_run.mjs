import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_function_forwarding_cases } from "./js_function_forwarding_cases.mjs";
import { js_code_forwarding_target } from "./js_code_forwarding_target.mjs";
import { property_get } from "./property_get.mjs";
export async function js_function_forwarding_cases_gate_run() {
  "QA gate: the reading that decides whether a function is only a second name for another one answers the corpus exactly.";
  "What rests on it is a deletion. A function this reading names is a function something else may remove, passing the named one in its place, so a yes given wrongly changes what runs and leaves nothing behind to show it.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_function_forwarding_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let target = js_code_forwarding_target(code);
    return target;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "target",
    "name",
    "function forwarding",
  );
  return r;
}
