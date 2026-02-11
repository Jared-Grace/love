import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_object_expression_named } from "../../../love/public/src/js_object_expression_named.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function js_dollar_choice_argument() {
  let result = null;
  async function lambda2(ast) {
    let oes = js_object_expression_named(ast, "js_dollar_argument");
    result = list_single(oes);
  }
  let output = await function_transform(js_dollar.name, lambda2);
  return result;
}
