import { js_string } from "../../../love/public/src/js_string.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
export function js_literal_map(literal, lambda$value) {
  let value = js_literal_value_get(literal);
  let joined = lambda$value(value);
  let s = js_string(joined);
  return s;
}
