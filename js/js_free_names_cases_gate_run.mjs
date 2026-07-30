import { js_free_names_cases } from "./js_free_names_cases.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_free_names_cases_gate_run() {
  "QA gate: each written-down file yields exactly the unbound names the corpus says it";
  "does.";
  "Nothing else can tell a working reading apart from a silent one here. Both gates built";
  "on this reading pass by finding nothing, and the pass that repairs imports on every";
  "edited file adds nothing when it is told there is nothing to add - so a reading that";
  "had stopped answering would look like a repo in perfect order while quietly letting";
  "every new file be committed without its imports.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_free_names_cases();
  let failures = [];
  for (let c of cases) {
    let code = property_get(c, "code");
    let expected = property_get(c, "free");
    let ast = js_parse(code);
    let actual = js_free_names(ast);
    let told = list_join_comma(actual);
    let wanted = list_join_comma(expected);
    let b = equal(told, wanted);
    let mark = b ? "pass  " : "FAIL  ";
    let name = property_get(c, "name");
    console.log(mark + "[" + told + "]  " + name);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  console.log("\npass " + passed + "  fail " + failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error("free names cases gate: " + failures.length + " failed");
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
