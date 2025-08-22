import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { log_unparse } from "./log_unparse.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
import { equal } from "./equal.mjs";
export async function js_dollar_ie({ stack1, ast }) {
  js_dollar_i({
    stack1,
  });
  let expression = await js_call_new_expression(equal.name, ast);
  object_property_set(stack1, "test", expression);
  await log_unparse(stack1);
}
