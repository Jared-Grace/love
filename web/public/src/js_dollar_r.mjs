import { js_return_empty } from "./js_return_empty.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_second } from "./list_second.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_dollar_r({ stack1, stack2, stack3 }) {
  let from = js_return_empty();
  let type_is = js_node_type_is(stack2, "SequenceExpression");
  let to = null;
  if (type_is) {
    let { expressions } = stack2;
    let second = list_second(expressions);
    object_property_set(from, "argument", second);
    to = stack3;
  } else {
    to = stack1;
  }
  object_replace(to, from);
  return;
}
