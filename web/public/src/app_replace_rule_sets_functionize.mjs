import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
import { function_new_declaration_to } from "../../../love/public/src/function_new_declaration_to.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
import { text_replace_space_underscore_lower } from "../../../love/public/src/text_replace_space_underscore_lower.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  let search = "name";
  let code = await function_transform_marker_specified(f_name, "rules", lambda);
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    function lambda2(e) {
      let found = js_object_expression_properties_find_key_named(e, search);
      let p = js_property_value_get(found);
      let l = js_literal_value_get(p);
      let replaced = text_replace_space_underscore_lower(l);
      let declaration = function_new_declaration_to(replaced);
      let body_block = js_function_declaration_to_block_body(declaration);
      let r = js_statement_return_empty_add(body_block);
      js_return_argument_set(r, e);
      log_unparse(declaration);
      log_unparse(r);
    }
    each(elements, lambda2);
  }
  return;
}
