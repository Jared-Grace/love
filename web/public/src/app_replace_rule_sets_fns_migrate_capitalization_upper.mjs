import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_property_value_change } from "../../../love/public/src/js_property_value_change.mjs";
import { js_literal_map_curried_right } from "../../../love/public/src/js_literal_map_curried_right.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_list_nodes_object_expression } from "../../../love/public/src/js_list_nodes_object_expression.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function app_replace_rule_sets_fns_migrate_capitalization_upper() {
  let result = await app_replace_rule_sets_fns_transform(lambda3);
  async function lambda3(ast) {
    let name = js_flo_name(ast);
    log(app_replace_rule_sets_fns_migrate_capitalization_upper.name, {
      name,
    });
    let list = js_list_nodes_object_expression(ast);
    function lambda_each(item) {
      let p = "name";
      let s = js_object_expression_properties_find_key_named(item, p);
      if (null_is(s)) {
        return;
      }
      on_result(s);
    }
    each(list, lambda_each);
  }
  return result;
  function on_result(s) {
    function lambda2(t) {
      log(app_replace_rule_sets_fns_migrate_capitalization_upper.name, {
        t,
      });
      let split = text_split_space(t);
      let mapped = list_map(split, text_first_upper_to);
      let joined = list_join_space(mapped);
      return joined;
    }
    let r = js_literal_map_curried_right(lambda2);
    js_property_value_change(s, r);
  }
}
