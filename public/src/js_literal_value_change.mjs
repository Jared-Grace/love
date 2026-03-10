import { js_property_value_change } from "../../../love/public/src/js_property_value_change.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
export function js_literal_value_change(s, lambda$value) {
  function lambda$previous(literal) {
    let value = js_literal_value_get(literal);
    let after = lambda$value(value);
    let s2 = js_string(after);
    return s2;
  }
  js_property_value_change(s, lambda$previous);
}
