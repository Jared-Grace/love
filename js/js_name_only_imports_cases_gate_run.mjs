import { js_name_only_imports_cases } from "./js_name_only_imports_cases.mjs";
import { js_code_name_only_imports } from "./js_code_name_only_imports.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_name_only_imports_cases_gate_run() {
  "QA gate: each small file written down in the corpus gives the names that corpus says";
  "The sweep this reader feeds answers nothing once the repo is clean, so a reader that stopped finding anything would look exactly like a repo with nothing wrong in it - the most reassuring shape a total failure can wear, and one this repo has already been fooled by once";
  "So the cases must fail in both directions: a reader that says every import is spelling-only breaks the called-as-well-as-spelled cases, and one that says none is breaks the spelled-once case";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_name_only_imports_cases();
  let failures = [];
  for (let c of cases) {
    let code = property_get(c, "code");
    let expected = property_get(c, "only");
    let actual = js_code_name_only_imports(code);
    let told = list_join_comma(actual);
    let wanted = list_join_comma(expected);
    let b = equal(told, wanted);
    let mark = b ? "pass  " : "FAIL  ";
    let name = property_get(c, "name");
    console.log(mark + name + "  -> [" + told + "]");
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  console.log("\npass " + passed + "  fail " + failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "name only imports cases gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
