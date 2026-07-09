import { js_dollar_choice_argument_find } from "../../../love/public/src/js_dollar_choice_argument_find.mjs";
import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function js_dollar_choice_argument() {
  let result = null;
  async function lambda(ast) {
    result = js_dollar_choice_argument_find(ast, result);
  }
  let output = await function_transform(js_dollar.name, lambda);
  return result;
}
