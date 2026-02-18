import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_object_expression_is_assert } from "../../../love/public/src/js_object_expression_is_assert.mjs";
export function js_object_expression_properties(e) {
  js_object_expression_is_assert(e);
  let properties = property_get(e, "properties");
  return properties;
}
