import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_array_expression_elements } from "../../../love/public/src/js_array_expression_elements.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { js_object_expression_properties_find_key_named_curried_right } from "../../../love/public/src/js_object_expression_properties_find_key_named_curried_right.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_ast_list_type_nodes_object_expression } from "../../../love/public/src/function_ast_list_type_nodes_object_expression.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export async function app_replace_rule_sets_fns_migrate_goals_space_add() {
  let f_name = app_replace_rule_sets_fns.name;
  let ast = await function_ast(f_name);
  let elements = js_array_expression_single_elements(ast);
  let mapped = list_map(elements, js_identifier_name);
  let name = "app_replace_rule_set_numbers";
  let list = await function_ast_list_type_nodes_object_expression(name);
  let search = "goals";
  let m = js_object_expression_properties_find_key_named_curried_right(search);
  let mapped2 = list_map(list, m);
  let filtered = list_filter_null_not_is(mapped2);
  let e = list_empty_is(filtered);
  if (e) {
    log({
      name,
    });
  } else {
    let only = list_single(filtered);
    let value = js_property_value_get(only);
    let elements = js_array_expression_elements(value);
    function lambda(item) {}
    each(elements, lambda);
    log_unparse(only);
  }
  return filtered;
}
