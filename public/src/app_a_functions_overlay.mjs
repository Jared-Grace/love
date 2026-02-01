import { app_a_functions_overlay_generic } from "../../../love/public/src/app_a_functions_overlay_generic.mjs";
import { app_a_functions_generic_f_names } from "../../../love/public/src/app_a_functions_generic_f_names.mjs";
export async function app_a_functions_overlay(a, lambda$f_name) {
  let f_names = await app_a_functions_generic_f_names();
  let r = app_a_functions_overlay_generic(a, f_names, lambda$f_name);
  return r;
}
