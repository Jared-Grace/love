import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
import { text_replace_space_underscore_lower } from "../../../love/public/src/text_replace_space_underscore_lower.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  let code = await function_transform_marker_specified(f_name, "rules", lambda);
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    function lambda2(e) {
      let search = "name";
      let found = js_object_expression_properties_find_key_named(e, search);
      let value = js_property_value_get(found);
      let value2 = js_literal_value_get(value);
      let replaced = text_replace_space_underscore_lower(value2);
      log(replaced);
    }
    each(elements, lambda2);
  }
  return;
  let output = await function_transform(app_replace_rule_sets.name, lambda);
}
