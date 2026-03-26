import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
export function app_replace_rule_sets_name_expression(e) {
  let search = "name";
  let found = js_object_expression_properties_find_key_named(e, search);
  return found;
}
