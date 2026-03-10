import { js_string } from "../../../love/public/src/js_string.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
export function js_literal_map(literal, fn) {
  let value3 = js_literal_value_get(literal);
  let joined = fn(value3);
  let s2 = js_string(joined);
  return s2;
}
