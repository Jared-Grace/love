import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_ast_list_type_nodes_object_expression } from "../../../love/public/src/function_ast_list_type_nodes_object_expression.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export async function app_replace_rule_sets_fns_migrate_goals_space_add() {
  let f_name = app_replace_rule_sets_fns.name;
  let ast = await function_ast(f_name);
  let elements = js_array_expression_single_elements(ast);
  let mapped = list_map(list2, function lambda(item) {});
  return elements;
  let list = await function_ast_list_type_nodes_object_expression(f_name);
}
