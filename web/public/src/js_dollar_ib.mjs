import { object_property_set } from "./object_property_set.mjs";
import { equal } from "./equal.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
export async function js_dollar_ib({ stack1, ast }) {
  js_dollar_i({
    stack1,
  });
  let expression = await js_call_new_expression(equal.name, ast);
  object_property_set(stack1, "test", expression);
}
