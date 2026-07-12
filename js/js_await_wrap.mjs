import { property_set } from "./property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_await } from "./js_code_await.mjs";
export function js_await_wrap(expression) {
  let code_expression = js_code_await("a");
  let awaited = js_parse_expression(code_expression);
  property_set(awaited, "argument", expression);
  return awaited;
}
