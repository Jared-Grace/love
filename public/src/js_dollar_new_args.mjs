import { js_dollar_choice_arguments } from "./js_dollar_choice_arguments.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  let names = await js_dollar_choice_arguments();
  return names;
  let combined = js_dollar_new_name(code);
  async function lambda2(ast) {}
  await function_transform(combined, lambda2);
  marker("1");
}
