import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_return_empty } from "../../../love/public/src/js_return_empty.mjs";
export function js_return_code_replace(code, replace_to) {
  let from = js_return_empty();
  let expression = js_parse_expression(code);
  property_set(from, "argument", expression);
  object_replace(replace_to, from);
}
