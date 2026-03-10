import { js_property_value_change } from "../../../love/public/src/js_property_value_change.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
export function js_literal_value_change(lambda, s) {
  function lambda$previous(literal) {
    let value3 = js_literal_value_get(literal);
    let joined = lambda(value3);
    let s2 = js_string(joined);
    return s2;
  }
  js_property_value_change(s, lambda$previous);
}
