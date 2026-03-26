import { null_is } from "../../../love/public/src/null_is.mjs";
import { app_replace_rule_sets_name } from "../../../love/public/src/app_replace_rule_sets_name.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
export function app_replace_rule_sets_name_expression_value(e) {
  let search = "name";
  let found = js_object_expression_properties_find_key_named(e, search);
  if (null_is(found)) {
    return found;
  }
  let f_name_new = app_replace_rule_sets_name(found);
  return f_name_new;
}
