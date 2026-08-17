import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_functions_overlay } from "./app_a_functions_overlay.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { function_new_js_name } from "./function_new_js_name.mjs";
import { app_a_function_import } from "./app_a_function_import.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
export async function app_a_function_lambda10(a, ast) {
  arguments_assert(arguments, 2);
  let v = await app_a_functions_overlay(a, lambda11);
  let overlay_result = property_get(v, "overlay_result");
  let input_set = property_path_get_2(v, "chooser_result", "input_set");
  let combined = function_new_js_name("");
  input_set(combined);
  async function lambda11(f_name_call) {
    let fn = await app_a_function_import(f_name_call);
    await fn(ast);
    js_unparse(ast);
    await app_a_function_on_change(a, overlay_result);
  }
}
