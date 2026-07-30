import { js_code_literal_key_only_cases } from "./js_code_literal_key_only_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_literal_key_only } from "./js_code_literal_key_only.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_code_literal_key_only_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that";
  "corpus says.";
  "What this guards against is a reader that quietly stops answering. Its whole";
  "effect is to withhold entries from a report, so a reader that answered true to";
  "everything would empty that report, and an empty report reads exactly like a";
  "repo with nothing left to do. Only a written-down case can tell those apart.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_code_literal_key_only_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let literal = property_get(c, "literal");
    let key_only = js_code_literal_key_only(code, literal);
    return key_only;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "key_only",
    "why",
    "literal key only",
  );
  return r;
}
