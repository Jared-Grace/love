import { js_function_self_call_cases } from "./js_function_self_call_cases.mjs";
import { js_function_self_call_unconditional_is } from "./js_function_self_call_unconditional_is.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_function_self_call_cases_gate_run() {
  "Gate: each written-down function must be judged the way the corpus says. The sweep built on this reading finds nothing in the repo today, so a reader that had gone quiet and a repo that is clean give the same answer, and only this can tell them apart. Throws so the dispatcher seam exits nonzero.";
  let cases = js_function_self_call_cases();
  let failures = [];
  for (let c of cases) {
    let code = property_get(c, "code");
    let expected = property_get(c, "forever");
    let ast = js_parse(code);
    let declaration = js_flo(ast);
    let actual = js_function_self_call_unconditional_is(declaration);
    let b = equal(expected, actual);
    let mark = b ? "pass  " : "FAIL  ";
    console.log(mark + code + "  ->  " + actual);
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
      "js function self call cases gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
