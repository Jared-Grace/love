import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_let_add_cases } from "./js_let_add_cases.mjs";
import { js_code_let_added } from "./js_code_let_added.mjs";
import { property_get } from "./property_get.mjs";
export async function js_let_add_cases_gate_run() {
  "QA gate: the step that gives an assignment the word let leaves the corpus exactly as the corpus says.";
  "The step runs over every file in the repo as part of the pass that tidies them. A word added where a name is already bound makes a second name that hides the first, and every line below it then reads a value nobody wrote there. That has happened, and it shows up as a value read back empty rather than as anything going wrong.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_let_add_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let after = js_code_let_added(code);
    return after;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "after",
    "name",
    "let add",
  );
  return r;
}
