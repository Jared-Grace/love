import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
  }
  let output = await function_transform(f_name, lambda);
}
