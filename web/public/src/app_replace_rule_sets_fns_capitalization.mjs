import { each } from "../../../love/public/src/each.mjs";
import { js_property_value_change } from "../../../love/public/src/js_property_value_change.mjs";
import { text_between_space } from "../../../love/public/src/text_between_space.mjs";
import { js_literal_map_curried_right } from "../../../love/public/src/js_literal_map_curried_right.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_list_nodes_object_expression } from "../../../love/public/src/js_list_nodes_object_expression.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function app_replace_rule_sets_fns_capitalization() {
  async function lambda3(ast) {
    log(app_replace_rule_sets_fns_capitalization.name, {
      name,
    });
    let list = js_list_nodes_object_expression(ast);
    function lambda_each(item) {
      let ps = ["start", "end"];
      function lambda2(p) {
        let s = js_object_expression_properties_find_key_named(item, p);
        let r = js_literal_map_curried_right(text_between_space);
        js_property_value_change(s, r);
      }
      each(ps, lambda2);
    }
    each(list, lambda_each);
  }
  let output = await function_transform(name, lambda3);
}
