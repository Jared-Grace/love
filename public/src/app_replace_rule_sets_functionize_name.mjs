import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { text_replace_space_underscore_lower } from "../../../love/public/src/text_replace_space_underscore_lower.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
export function app_replace_rule_sets_functionize_name(e) {
  let search = "name";
  let found = js_object_expression_properties_find_key_named(e, search);
  let p = js_property_value_get(found);
  let l = js_literal_value_get(p);
  let f_name_new = text_replace_space_underscore_lower(l);
  let combined = function_name_combine(left, f_name_new);
  return f_name_new;
}
