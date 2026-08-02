import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { js_comment_migratable_cases } from "./js_comment_migratable_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { list_single } from "./list_single.mjs";
import { js_comment_migratable_is } from "./js_comment_migratable_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_comment_migratable_cases_gate_run() {
  "QA gate: each comment written down in the corpus is judged the way that corpus says. Nothing in the repo carries a comment today - two other gates see to that - so the reader this checks has nothing live to work on, and a reader that had quietly stopped answering would look exactly like a clean repo. Only a written-down case can tell those apart. Throws so the dispatcher seam exits nonzero.";
  let cases = js_comment_migratable_cases();
  let failures = [];
  for (let c of cases) {
    let code = property_get(c, "code");
    let expected = property_get(c, "migratable");
    let ast = js_parse(code);
    let comments = js_comments_get(code);
    let comment = list_single(comments);
    let actual = js_comment_migratable_is(code, ast, comment);
    let b = equal(expected, actual);
    let mark = gate_case_mark(b);
    let why = property_get(c, "why");
    console.log(mark + actual + "  " + why);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "comment migratable cases gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
