import { app_a_function_select_curry } from "../../../love/public/src/app_a_function_select_curry.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { app_a_button_function_refresh } from "../../../love/public/src/app_a_button_function_refresh.mjs";
export async function app_a_functions(context) {
  app_a_button_function_refresh(context);
  let on_select = app_a_function_select_curry(context);
  await app_a_functions_generic(context, on_select);
}
