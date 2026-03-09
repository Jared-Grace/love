import { function_ast_list_type_nodes_object_expression } from "../../../love/public/src/function_ast_list_type_nodes_object_expression.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export async function app_replace_rule_sets_fns_migrate_goals_space_add() {
  let f_name = app_replace_rule_sets_fns.name;
  let list = await function_ast_list_type_nodes_object_expression(f_name);
}
