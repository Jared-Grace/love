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
  let failures = [];
  for (let c of cases) {
    let code = property_get(c, "code");
    let literal = property_get(c, "literal");
    let expected = property_get(c, "key_only");
    let actual = js_code_literal_key_only(code, literal);
    let b = equal(expected, actual);
    let mark = b ? "pass  " : "FAIL  ";
    let why = property_get(c, "why");
    console.log(mark + actual + "  " + why);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  console.log("\npass " + passed + "  fail " + failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "literal key only cases gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
