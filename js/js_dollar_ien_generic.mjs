import { js_statement_if_test_set } from "./js_statement_if_test_set.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
export async function js_dollar_ien_generic(stack_1, fn, ast) {
  js_dollar_i({
    stack_1,
  });
  let expression = await js_call_new_expression(fn.name, ast);
  js_statement_if_test_set(stack_1, expression);
}
