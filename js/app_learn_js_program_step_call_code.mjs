import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { not } from "./not.mjs";
export function app_learn_js_program_step_call_code(action) {
  arguments_assert(arguments, 1);
  ('the call a call step runs, as code, so a question about it names the call itself: k.pop() for a pop, and for a push the item it adds, r.push("joy"), since a pop inside its ( ) has been replaced by its value by then. 2026-11-14, at the human\'s asking: a line calling two functions made the function this line calls name neither');
  let name = property_get(action, "name");
  let kind = property_get(action, "kind");
  let into = property_get_or(action, "into", false);
  ("2026-11-14: a push or pop step names the method actually called, so an a.unshift(x) or a.shift() is asked about as itself");
  let method = property_get_or(action, "method", kind);
  ("2026-11-22, for the splice lessons: a splice step names its index and how many it takes out, and the item it puts in when it puts one in");
  if (equal(method, "splice")) {
    let value2 = property_get(action, "index");
    let index = js_value_code(value2);
    if (equal(kind, "pop")) {
      let r3 = name + ".splice(" + index + ", 1)";
      return r3;
    }
    let count = property_get_or(action, "replaces", false) ? "1" : "0";
    let value3 = property_get(action, "value");
    let item = js_value_code(value3);
    let r4 = name + ".splice(" + index + ", " + count + ", " + item + ")";
    return r4;
  }
  if (equal(kind, "push") && not(into)) {
    let value = property_get(action, "value");
    let r = name + "." + method + "(" + js_value_code(value) + ")";
    return r;
  }
  let r2 = name + "." + method + "()";
  return r2;
}
