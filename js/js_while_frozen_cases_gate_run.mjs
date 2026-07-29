import { js_while_frozen_cases } from "./js_while_frozen_cases.mjs";
import { js_code_while_frozen_conditions } from "./js_code_while_frozen_conditions.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_while_frozen_cases_gate_run() {
  "QA gate: each written-out loop in the corpus is called stuck exactly as often as the corpus says";
  "The sweep this reader feeds answers nothing while the repo is well, so a reader that had quietly stopped looking would give the same clean answer as a repo with nothing wrong in it - the most reassuring shape a total failure can wear, and one this repo has already been fooled by once";
  "So the cases fail in both directions: a reader that never names a loop breaks the four that must be named, and one that names every loop breaks the eleven that must be left alone - among them every ordinary way a loop has of ending, which are the ways this could send somebody to read working code";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_while_frozen_cases();
  let failures = [];
  for (let c of cases) {
    let code = property_get(c, "code");
    let expected = property_get(c, "stuck");
    let frozen = js_code_while_frozen_conditions(code);
    let told = frozen.length;
    let b = equal(told, expected);
    let mark = b ? "pass  " : "FAIL  ";
    let name = property_get(c, "name");
    console.log(mark + name + "  -> " + told + " of " + expected);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  console.log("\npass " + passed + "  fail " + failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error("while frozen cases gate: " + failures.length + " failed");
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
