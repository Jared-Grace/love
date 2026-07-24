import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
export function app_shared_name_expression_find(e) {
  let search = "name";
  let found = js_object_expression_property_named_or_null(e, search);
  return found;
}
