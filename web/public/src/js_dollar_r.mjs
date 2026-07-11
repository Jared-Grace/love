import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_return_empty } from "../../../love/public/src/js_return_empty.mjs";
import { list_second } from "../../../love/public/src/list_second.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
export function js_dollar_r({ stack_, stack_2, stack_3 }) {
  let from = js_return_empty();
  let type_is = js_node_type_is(stack_2, "SequenceExpression");
  let to = null;
  if (type_is) {
    let expressions = property_get(stack_2, "expressions");
    let second = list_second(expressions);
    js_return_argument_set(from, second);
    to = stack_3;
  } else {
    to = stack_;
  }
  object_replace(to, from);
  return;
}
