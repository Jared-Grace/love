import { js_object_expression_named_generic } from "../../../love/public/src/js_object_expression_named_generic.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  async function lambda(ast) {
    let list = js_object_expression_named_generic(
      ast,
      "ArrayExpression",
      search,
    );
    let elements = js_array_expression_single_elements(ast);
    log({
      elements,
    });
  }
  let ast2 = await function_ast(f_name);
  return;
  let output = await function_transform(app_replace_rule_sets.name, lambda);
}
