import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { js_object_expression_names_same_is } from "./js_object_expression_names_same_is.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_call_named_arity_other_nodes(ast, f_name, names) {
  arguments_assert(arguments, 3);
  ("$plain ast");
  ("The numbers of things handed over by the calls to this name in this file that neither hand over the whole row of these names nor already hand over one record filing exactly them.");
  ("ASKED BEFORE ANYTHING IS WRITTEN, because the move that gathers a row of arguments into one record can only file them under names when it has exactly as many as there are names. A call with any other number would be passed over silently, and the file would be left calling with a row while the function had begun asking for a record.");
  ("A CALL ALREADY HANDING OVER THE RECORD IS NOT A DIFFERENCE, and saying so is what lets the move be run a second time. The first time it was run it wrote every caller and then failed to change the function, and there was no way back in a working folder several people are writing in - so the way back has to be running it again.");
  let wanted = list_size(names);
  let found = [];
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let held = list_size(args);
    let row = equal(held, wanted);
    if (row) {
      return;
    }
    let one = equal(held, 1);
    if (one) {
      let first = list_first(args);
      let recorded = js_object_expression_names_same_is(first, names);
      if (recorded) {
        return;
      }
    }
    list_add(found, held);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
  return found;
}
