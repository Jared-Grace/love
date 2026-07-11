import { js_statement_if_test_set } from "../../../love/public/src/js_statement_if_test_set.mjs";
import { js_call_new_expression } from "../../../love/public/src/js_call_new_expression.mjs";
import { js_dollar_i } from "../../../love/public/src/js_dollar_i.mjs";
export async function js_dollar_ien_generic(stack_, fn, ast) {
  js_dollar_i({
    stack_,
  });
  let expression = await js_call_new_expression(fn.name, ast);
  js_statement_if_test_set(stack_, expression);
}
