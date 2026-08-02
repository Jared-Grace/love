import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { memory_pointer_cases } from "./memory_pointer_cases.mjs";
import { memory_pointer_tokens } from "./memory_pointer_tokens.mjs";
import { property_get } from "./property_get.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function memory_pointer_gate_run() {
  "Gate: the written-down index lines must each yield the file names the corpus declares. The sweep built on this reading walks the real index, where a right answer and a broken one both come back empty today, so this is the only place a mistake in it can be seen. Throws so the dispatcher seam exits nonzero.";
  let cases = memory_pointer_cases();
  let failures = [];
  for (let c of cases) {
    let text = property_get(c, "text");
    let expected = property_get(c, "targets");
    let actual = memory_pointer_tokens(text);
    let b = lists_equal_pair(expected, actual);
    let mark = gate_case_mark(b);
    console.log(mark + expected.join(",") + " / " + actual.join(","));
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error("memory pointer gate: " + failures.length + " failed");
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
