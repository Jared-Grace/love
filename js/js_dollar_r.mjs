import { property_get } from "./property_get.mjs";
import { js_return_argument_set } from "./js_return_argument_set.mjs";
import { js_return_empty } from "./js_return_empty.mjs";
import { list_second } from "./list_second.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_dollar_r({ stack_1, stack_2, stack_3 }) {
  let from = js_return_empty();
  let type_is = js_node_type_is(stack_2, "SequenceExpression");
  let to = null;
  if (type_is) {
    let expressions = property_get(stack_2, "expressions");
    let second = list_second(expressions);
    js_return_argument_set(from, second);
    to = stack_3;
  } else {
    to = stack_1;
  }
  object_replace(to, from);
  return;
}
