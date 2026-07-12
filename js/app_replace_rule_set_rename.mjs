import { app_replace_rule_sets_prefix } from "./app_replace_rule_sets_prefix.mjs";
import { app_shared_name_expression_value_curried_right } from "./app_shared_name_expression_value_curried_right.mjs";
import { equal } from "./equal.mjs";
import { list_filter_null_not_is_single } from "./list_filter_null_not_is_single.mjs";
import { function_ast_list_type_nodes_object_expression } from "./function_ast_list_type_nodes_object_expression.mjs";
import { list_map } from "./list_map.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
export async function app_replace_rule_set_rename(f_name) {
  let prefix = app_replace_rule_sets_prefix();
  let c = app_shared_name_expression_value_curried_right(prefix);
  let list = await function_ast_list_type_nodes_object_expression(f_name);
  let mapped = list_map(list, c);
  let f_name_after = list_filter_null_not_is_single(mapped);
  if (equal(f_name, f_name_after)) {
    return null;
  }
  await function_rename_open(f_name, f_name_after);
  return f_name_after;
}
