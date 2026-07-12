import { js_return_argument_set } from "./js_return_argument_set.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_return_empty } from "./js_return_empty.mjs";
export function js_return_code_replace(code, replace_to) {
  let from = js_return_empty();
  let expression = js_parse_expression(code);
  js_return_argument_set(from, expression);
  object_replace(replace_to, from);
}
