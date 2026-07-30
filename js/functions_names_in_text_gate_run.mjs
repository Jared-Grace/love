import { functions_names_in_text_cases } from "./functions_names_in_text_cases.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function functions_names_in_text_gate_run() {
  "Gate: each written-down piece of writing must give up exactly the functions the corpus says it names. Throws so the dispatcher seam exits nonzero.";
  "The reading this holds is a judgment that feeds a sweep, and the sweep runs over whatever a gate happened to print - so nothing it produces can be checked against a separate account of the same text. A clean sweep therefore proves nothing about the reading, and this corpus is where the reading itself is answerable.";
  "Order is compared as written, not as a set, because the answer is read back by a reader who expects the names in the order the writing put them.";
  let cases = functions_names_in_text_cases();
  let failures = [];
  for (let c of cases) {
    let text = property_get(c, "text");
    let known = property_get(c, "known");
    let expected = property_get(c, "names");
    let actual = functions_names_in_text(text, known);
    let left = expected.join(",");
    let right = actual.join(",");
    let b = equal(left, right);
    let mark = b ? "pass  " : "FAIL  ";
    console.log(mark + text + "  ->  [" + actual.join(", ") + "]");
    if (not(b)) {
      list_add(failures, c);
    }
  }
  console.log(
    "\npass " +
      subtract(cases.length, failures.length) +
      "  fail " +
      failures.length,
  );
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "functions names in text gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
