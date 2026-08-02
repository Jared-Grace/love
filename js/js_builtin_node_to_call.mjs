import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_builtin_node_to_call(node, o) {
  "Point one call to a built-in method at the function standing for it, keeping exactly what the call was already being given.";
  "A call handing over a different number of things than that function takes is left standing. A built-in reads as many as it is given and the function beside it takes a fixed few, so a largest-of-three would come out as a largest-of-two, and a writing-out asked for over three lines would come out on one - each reading as if nothing had changed, which is the one outcome here worth spending a check to prevent.";
  "Whether it moved is handed back, because a sweep over many files has to say which ones it changed and a call left standing is indistinguishable from one that was never a candidate once the tree has been written out again.";
  let fn = property_get(o, "fn");
  let args = js_call_arguments_get(node);
  let given = list_size(args);
  let declared = fn.length;
  let same = equal(given, declared);
  if (not(same)) {
    return false;
  }
  let callee = js_identifier_expression(fn.name);
  property_set(node, "callee", callee);
  return true;
}
