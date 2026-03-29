import { list_find_or_null } from "../../../love/public/src/list_find_or_null.mjs";
import { js_property_key_named_is_curried_right } from "../../../love/public/src/js_property_key_named_is_curried_right.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
export function js_object_expression_property_named_or_null(e, search) {
  let properties = js_object_expression_properties(e);
  let r = js_property_key_named_is_curried_right(search);
  let found = list_find_or_null(properties, r);
  return found;
}
