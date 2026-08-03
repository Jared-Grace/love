import { fn_name } from "./fn_name.mjs";
import { js_dollar_choice_argument_find } from "./js_dollar_choice_argument_find.mjs";
import { function_transform } from "./function_transform.mjs";
export async function js_dollar_choice_argument() {
  let result = null;
  async function lambda(ast) {
    result = js_dollar_choice_argument_find(ast, result);
  }
  await function_transform(fn_name("js_dollar"), lambda);
  return result;
}
