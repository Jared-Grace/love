import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_statements_work_size } from "./js_node_statements_work_size.mjs";
import { js_node_loop_walking_largest_or_null } from "./js_node_loop_walking_largest_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export function js_function_declaration_walk_reading(declaration) {
  arguments_assert(arguments, 1);
  ("The two numbers that say whether a function is one walk: how much work its biggest loop holds while pointing an outer name somewhere else, and how much work is left over once that loop is set aside.");
  ("Two numbers rather than a yes, so that whoever reads them can see why an answer came out the way it did, the same as the table reading beside it.");
  ("A body with no such loop in it answers with all of its work left over, which is the right answer: nothing in it is held together by a name being re-pointed, so every line of it is free to be carried away.");
  let block = property_get(declaration, "body");
  let total = js_node_statements_work_size(block);
  let largest = js_node_loop_walking_largest_or_null(block);
  let none_is = null_is(largest);
  if (none_is) {
    let bare = {
      inside: 0,
      outside: total,
    };
    return bare;
  }
  let inside = js_node_statements_work_size(largest);
  let outside = subtract(total, inside);
  let reading = {
    inside,
    outside,
  };
  return reading;
}
