import { js_array_expression_named } from "../../../love/public/src/js_array_expression_named.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  async function lambda(ast) {
    let search = "rs";
    let list = js_array_expression_named(ast, search);
    let elements = js_array_expression_single_elements(ast);
    log({
      list,
    });
  }
  let ast2 = await function_ast(f_name);
  return;
  let output = await function_transform(app_replace_rule_sets.name, lambda);
}
