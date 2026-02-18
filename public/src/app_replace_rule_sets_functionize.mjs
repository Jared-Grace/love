import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  async function lambda(ast) {
    return;
    let elements = js_array_expression_single_elements(ast);
    log({
      elements,
    });
  }
  let ast = await function_ast(f_name);
  log({
    ast,
  });
  lambda(ast);
  let node_type = "ArrayExpression";
  let vs = js_list_type(ast, node_type);
  let mapped = list_map_property(list, property_name);
  log(vs);
  return;
  let output = await function_transform(f_name, lambda);
}
