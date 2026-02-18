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
  let elements = js_array_expression_single_elements(ast);
  log({
    f_name,
  });
  return;
  let output = await function_transform(f_name, lambda);
}
