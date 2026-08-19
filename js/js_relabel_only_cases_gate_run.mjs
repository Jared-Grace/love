import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_relabel_only_cases } from "./js_relabel_only_cases.mjs";
import { js_relabel_only_is } from "./js_relabel_only_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_relabel_only_cases_gate_run() {
  "QA gate: the reading of a function that is only a second name for another one must answer every written-out function the way that function says.";
  "It stands beside the gate for the reading next door, and for the same reason twice over. That one covers a holder whose product is a record; this one covers a holder whose product is one thing, which is the half that had no reading at all until now and let two cuts through that took a body down a level and gained nothing.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_relabel_only_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let declaration = js_parse_statement(code);
    let relabel_only_is = js_relabel_only_is(declaration);
    return relabel_only_is;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "relabel_only_is",
    "why",
    "js relabel only",
  );
  return r;
}
