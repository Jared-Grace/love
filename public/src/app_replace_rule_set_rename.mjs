import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rule_sets_name_expression } from "../../../love/public/src/app_replace_rule_sets_name_expression.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
export async function app_replace_rule_set_rename(f_name) {
  let ast = await function_ast(f_name);
  const type = "ObjectExpression";
  let list = js_list_type_nodes(ast, type);
  let mapped = list_map(list, app_replace_rule_sets_name_expression);
  let filtered = list_filter_null_not_is(mapped);
  let e = list_single(filtered);
  let f_name_new = app_replace_rule_sets_name_expression(e);
  return f_name_new;
}
