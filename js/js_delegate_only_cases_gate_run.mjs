import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_delegate_only_cases } from "./js_delegate_only_cases.mjs";
import { js_delegate_only_is } from "./js_delegate_only_is.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { property_get } from "./property_get.mjs";
export function js_delegate_only_cases_gate_run() {
  "QA gate: the reading of a function that only makes values and hands them to one call must answer every written-out function the way that function says.";
  "The third of three gates standing together, and the one that covers the holder handing back nothing at all. Its two neighbours cover a holder whose product is a record and a holder whose product is one answer; between them they had no answer for a body of several lines that keeps none of what it makes, which is the commonest thing a cut leaves behind when the run it took was the body.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_delegate_only_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let declaration = js_parse_statement(code);
    let delegate_only_is = js_delegate_only_is(declaration);
    return delegate_only_is;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "delegate_only_is",
    "why",
    "js delegate only",
  );
  return r;
}
