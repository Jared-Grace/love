import {object_replace} from "./object_replace.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {js_return_empty} from "./js_return_empty.mjs";
export function js_return_code_replace(code, replace_to) {
  let from = js_return_empty();
  let expression = js_parse_expression(code);
  object_property_set(from, "argument", expression);
  object_replace(replace_to, from);
}
