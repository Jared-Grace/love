import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_calls_to_each_cases } from "./js_calls_to_each_cases.mjs";
import { js_code_calls_to_each } from "./js_code_calls_to_each.mjs";
import { property_get } from "./property_get.mjs";
export async function js_calls_to_each_cases_gate_run() {
  "QA gate: the step that puts a run of side by side calls into a single walk leaves the corpus exactly as the corpus says.";
  "Collapsing a run that should have been left alone changes what the code does and nothing reports it: a walk stops early where a run of calls does not, and a run of calls on two different names collapsed into one calls the wrong function. So the corpus is what says the conditions are read right.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_calls_to_each_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let names = property_get(c, "names");
    let after = js_code_calls_to_each(code, names);
    return after;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "after",
    "name",
    "calls to each",
  );
  return r;
}
