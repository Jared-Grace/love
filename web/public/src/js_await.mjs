import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_await } from "../../../love/public/src/js_code_await.mjs";
export function js_await(expression) {
  let code_expression = js_code_await("a");
  let awaited = js_parse_expression(code_expression);
  property_set(awaited, "argument", expression);
  return awaited;
}
