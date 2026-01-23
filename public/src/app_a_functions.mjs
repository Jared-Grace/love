import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { app_a_button_function_refresh } from "../../../love/public/src/app_a_button_function_refresh.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
export async function app_a_functions(context) {
  app_a_button_function_refresh(context);
  await app_a_functions_generic(context, on_select);
  function on_select(f_name) {
    app_a_function_select(context, f_name);
  }
}
