import { js_string } from "./js_string.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
export function js_literal_map(literal, lambda$value) {
  let value = js_literal_value_get(literal);
  let mapped = lambda$value(value);
  let value_after = js_string(mapped);
  return value_after;
}
