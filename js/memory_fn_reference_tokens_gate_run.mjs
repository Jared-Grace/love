import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { memory_fn_reference_cases } from "./memory_fn_reference_cases.mjs";
import { memory_fn_reference_tokens } from "./memory_fn_reference_tokens.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function memory_fn_reference_tokens_gate_run() {
  "Gate: each written-down piece of prose must give up exactly the pointers the corpus declares it holds. The sweep built on this reading walks the real memory folder, where every marked pointer resolves today, so a reader that had quietly stopped collecting anything would leave that sweep reporting a clean folder it never really read. Throws so the dispatcher seam exits nonzero.";
  let cases = memory_fn_reference_cases();
  let failures = [];
  for (let c of cases) {
    let text = property_get(c, "text");
    let expected = property_get(c, "tokens");
    let actual = memory_fn_reference_tokens(text);
    let left = expected.join(",");
    let right = actual.join(",");
    let b = equal(left, right);
    let mark = gate_case_mark(b);
    console.log(mark + text + "  ->  [" + actual.join(", ") + "]");
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "memory fn reference tokens gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
