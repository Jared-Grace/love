import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
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
  log({
    f_name,
  });
  let only = list_size_1_assert(vs);
  log(only);
  let mapped = list_map_property(vs, "node");
  let mapped2 = list_map(mapped, js_unparse);
  return;
  let output = await function_transform(f_name, lambda);
}
