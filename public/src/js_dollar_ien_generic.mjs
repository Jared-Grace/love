import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_call_new_expression } from "../../../love/public/src/js_call_new_expression.mjs";
import { js_dollar_i } from "../../../love/public/src/js_dollar_i.mjs";
export async function js_dollar_ien_generic(stack1, fn, ast) {
  js_dollar_i({
    stack1,
  });
  let expression = await js_call_new_expression(fn.name, ast);
  property_set(stack1, "test", expression);
}
