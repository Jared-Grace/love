import { js_calls_to_each_lambda_name } from "./js_calls_to_each_lambda_name.mjs";
import { js_calls_to_each_lambda_array_expression } from "./js_calls_to_each_lambda_array_expression.mjs";
import { js_calls_to_each_lambda_lambda6 } from "./js_calls_to_each_lambda_lambda6.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { js_await_if_unwrap } from "./js_await_if_unwrap.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { equal_by } from "./equal_by.mjs";
import { not } from "./not.mjs";
export async function js_calls_to_each_lambda(v, ast) {
  arguments_assert(arguments, 2);
  let stack = property_get(v, "stack");
  let node = property_get(v, "node");
  let expression = js_statement_expression_get(node);
  let r = js_await_if_unwrap(expression);
  let call = property_get(r, "argument");
  let async_is = property_get(r, "async_is");
  let e = list_get_end_1(stack);
  let next = list_next_try(e, node);
  if (null_is(next)) {
    return;
  }
  let nti = js_node_type_not_is(next, "ExpressionStatement");
  if (nti) {
    return;
  }
  let expression2 = js_statement_expression_get(next);
  let call2 = null;
  if (async_is) {
    let nti2 = js_node_type_not_is(expression2, "AwaitExpression");
    if (nti2) {
      return;
    }
    call2 = property_get(expression2, "argument");
  } else {
    call2 = expression2;
  }
  let r2 = js_calls_to_each_lambda_name(call2);
  let name = property_get(r2, "name");
  let n = property_get(r2, "n");
  if (n) {
    return;
  }
  function lambda6(c) {
    let r3 = js_calls_to_each_lambda_lambda6(c, name);
    return r3;
  }
  let eq = equal_by(call, call2, lambda6);
  if (not(eq)) {
    return;
  }
  let array_expression = await js_calls_to_each_lambda_array_expression(
    ast,
    async_is,
  );
  property_get(array_expression, "elements");
  ("the shape being matched is two awaited calls standing one after the other on the same callee, differing only in their argument");
}
