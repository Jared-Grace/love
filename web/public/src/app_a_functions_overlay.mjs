import { app_a_functions_overlay_generic } from "../../../love/public/src/app_a_functions_overlay_generic.mjs";
import { app_a_functions_generic_f_names } from "../../../love/public/src/app_a_functions_generic_f_names.mjs";
export async function app_a_functions_overlay(a, lambda$text) {
  let f_names = await app_a_functions_generic_f_names();
  let v = app_a_functions_overlay_generic(a, f_names, lambda$text);
  return v;
}
