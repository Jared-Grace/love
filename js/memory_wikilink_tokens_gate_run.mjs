import { memory_wikilink_cases } from "./memory_wikilink_cases.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
import { property_get } from "./property_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function memory_wikilink_tokens_gate_run() {
  "QA gate: each written-down piece of writing yields the double-bracket names the";
  "corpus says it does, and no others.";
  "This is the case for every check over memory links, because all of them ask this";
  "one reader first and none of them can see past it. A reader that found nothing";
  "would not make any of those checks fail - it would make all of them pass, over a";
  "memory folder they had genuinely read and genuinely never looked at.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = memory_wikilink_cases();
  let failures = [];
  for (let c of cases) {
    let text = property_get(c, "text");
    let expected = property_get(c, "links");
    let actual = memory_wikilink_tokens(text);
    let b = json_equal(expected, actual);
    let mark = b ? "pass  " : "FAIL  ";
    let why = property_get(c, "why");
    console.log(mark + JSON.stringify(actual) + "  " + why);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  console.log("\npass " + passed + "  fail " + failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "memory wikilink tokens gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
