import { log } from "../../../love/public/src/log.mjs";
import { list_find_property_try_or_null } from "../../../love/public/src/list_find_property_try_or_null.mjs";
import { js_property_key_named_curried_right } from "../../../love/public/src/js_property_key_named_curried_right.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
export function js_object_expression_properties_find_key_named(e, search) {
  let properties = js_object_expression_properties(e);
  log({
    properties,
  });
  let r = js_property_key_named_curried_right(search);
  let found = list_find_property_try_or_null(properties, r);
  return found;
}
