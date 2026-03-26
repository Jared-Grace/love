import { function_ast_list_type_nodes_object_expression } from "../../../love/public/src/function_ast_list_type_nodes_object_expression.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rule_sets_name_expression_value } from "../../../love/public/src/app_replace_rule_sets_name_expression_value.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function app_replace_rule_set_rename(f_name) {
  let list = await function_ast_list_type_nodes_object_expression(f_name);
  let mapped = list_map(list, app_replace_rule_sets_name_expression_value);
  let filtered = list_filter_null_not_is(mapped);
  let f_name_after = list_single(filtered);
  await function_rename_open(f_name, f_name_after);
  return f_name_after;
}
