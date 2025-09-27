import { object_property_set } from "./object_property_set.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
import { null_is } from "./null_is.mjs";
export async function js_dollar_ien({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let fn = null_is;
  js_dollar_i({
    stack1,
  });
  let expression = await js_call_new_expression(null_is.name, ast);
  object_property_set(stack1, "test", expression);
}
