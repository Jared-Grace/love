import { js_object_expression_properties_find_key_named } from "./js_object_expression_properties_find_key_named.mjs";
export function app_shared_name_expression_find(e) {
  let search = "name";
  let found = js_object_expression_properties_find_key_named(e, search);
  return found;
}
