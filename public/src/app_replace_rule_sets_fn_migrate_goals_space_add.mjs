import { app_replace_rule_sets_fn_migrate_goals_space_add_elements } from "../../../love/public/src/app_replace_rule_sets_fn_migrate_goals_space_add_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_array_expression_elements } from "../../../love/public/src/js_array_expression_elements.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_object_expression_properties_find_key_named_curried_right } from "../../../love/public/src/js_object_expression_properties_find_key_named_curried_right.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function app_replace_rule_sets_fn_migrate_goals_space_add(name) {
  async function lambda3(ast) {
    log("TODO", {
      name,
    });
    const type = "ObjectExpression";
    let list = js_list_type_nodes(ast, type);
    let search = "goals";
    let m =
      js_object_expression_properties_find_key_named_curried_right(search);
    let mapped2 = list_map(list, m);
    let filtered = list_filter_null_not_is(mapped2);
    let e = list_empty_is(filtered);
    if (e) {
      log("TODO", {
        name,
      });
    } else {
      let only = list_single(filtered);
      let value = js_property_value_get(only);
      let elements = js_array_expression_elements(value);
      app_replace_rule_sets_fn_migrate_goals_space_add_elements(elements);
    }
  }
  let output = await function_transform(name, lambda3);
}
