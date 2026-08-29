import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_call_named_arity_other_nodes(ast, f_name, size) {
  arguments_assert(arguments, 3);
  ("$plain ast");
  ("The calls to this name in this file that hand over some number of things other than this one.");
  ("ASKED BEFORE ANYTHING IS WRITTEN, because the move that gathers a row of arguments into one record can only file them under names when it has exactly as many as there are names. A call with any other number would be passed over silently, and the file would be left calling with a row while the function had begun asking for a record.");
  let found = [];
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let held = list_size(args);
    let matched = equal(held, size);
    if (matched) {
      return;
    }
    list_add(found, held);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
  return found;
}
