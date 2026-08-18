import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_await_add_cases } from "./js_await_add_cases.mjs";
import { js_code_await_added } from "./js_code_await_added.mjs";
import { property_get } from "./property_get.mjs";
export async function js_await_add_cases_gate_run() {
  "QA gate: the step that puts the word await in front of calls to functions that wait leaves the corpus exactly as the corpus says.";
  "The step runs over every file in the repo as part of the pass that tidies them. A call left without the word hands a promise to a caller expecting an answer, and the caller then reads properties of a promise and finds none. Nothing goes wrong at the point of the mistake, so the corpus is what says the reading is right.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_await_add_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let functions = property_get(c, "functions");
    let after = await js_code_await_added(code, functions);
    return after;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "after",
    "name",
    "await add",
  );
  return r;
}
