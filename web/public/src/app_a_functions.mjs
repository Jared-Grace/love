import { curry_curry_curry_curry_curry } from "../../../love/public/src/curry_curry_curry_curry_curry.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { app_a_button_function_if_exists } from "../../../love/public/src/app_a_button_function_if_exists.mjs";
export async function app_a_functions(context) {
  app_a_button_function_if_exists(context);
  let on_select = curry_curry_curry_curry_curry(context);
  await app_a_functions_generic(context, on_select);
}
