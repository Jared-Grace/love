import { js_source_bare_token_kind_cases } from "./js_source_bare_token_kind_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_source_bare_token_kind } from "./js_source_bare_token_kind.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_source_bare_token_kind_cases_gate_run() {
  "QA gate: asking a whole file what a bare word on a changed line was standing as answers the corpus exactly, program answers included.";
  "The reading this gate holds is what turned a whole bucket of undecided commits into values, and a bucket that empties itself is the shape a broken reading takes when it can only give one answer. Pinning the program answers here is what makes the emptying evidence rather than a coincidence.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_source_bare_token_kind_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let bare = property_get(c, "bare");
    let told = js_source_bare_token_kind(code, bare);
    return told;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "kind",
    "name",
    "source bare token kind",
  );
  return r;
}
