import { js_statement_move_before_refusals_cases } from "./js_statement_move_before_refusals_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_move_before_refusals } from "./js_statement_move_before_refusals.mjs";
import { list_map } from "./list_map.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_statement_move_before_refusals_cases_gate_run() {
  "QA gate: each move written down in the corpus is refused for exactly the reasons that corpus says, and allowed where it says nothing.";
  "This reading is the whole of what decides whether one line of a body may be lifted above another, and it answers with reasons rather than stopping, so a caller reads an empty list as permission. That makes every one of its four refusals silent when it is wrong: a branch that never runs answers with the same empty list as a body that is genuinely safe to move, and the move is then made on code where the values come out differently afterwards.";
  "Three of the four had never been seen to happen at all before this corpus was written. Nothing else can see them, because whether a refusal fires is decided by the shape of whatever body somebody happens to be cutting that day.";
  "Only what each refusal is about and which name it names are compared. The sentence beside it is written to be read by a person and is meant to be improved, so pinning it here would make improving it a red gate.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_statement_move_before_refusals_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let address = property_get(c, "address");
    let address_before = property_get(c, "address_before");
    let refusals = js_statement_move_before_refusals(
      ast,
      address,
      address_before,
    );
    function refusal_told(refusal) {
      let about = property_get(refusal, "about");
      let name = property_get(refusal, "name");
      let told = {
        about,
        name,
      };
      return told;
    }
    let reasons = list_map(refusals, refusal_told);
    return reasons;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "refused",
    "name",
    "statement move before refusals",
  );
  return r;
}
