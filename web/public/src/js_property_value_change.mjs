import { js_property_value_set } from "../../../love/public/src/js_property_value_set.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
export function js_property_value_change(s, lambda$previous) {
  let previous = js_property_value_get(s);
  let value_new = lambda$previous(previous);
  js_property_value_set(s, value_new);
}
