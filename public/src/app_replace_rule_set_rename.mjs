import { app_replace_rule_sets_name_expression } from "../../../love/public/src/app_replace_rule_sets_name_expression.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
export async function app_replace_rule_set_rename(f_name) {
  let ast = await function_ast(f_name);
  const type = "ObjectExpression";
  let vs = js_list_type_nodes(ast, type);
  let e = list_first(vs);
  let f_name_new = app_replace_rule_sets_name_expression(e);
  return f_name_new;
}
