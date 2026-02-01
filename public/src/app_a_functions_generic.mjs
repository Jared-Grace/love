import { app_a_functions_generic_f_names } from "../../../love/public/src/app_a_functions_generic_f_names.mjs";
import { app_a_list_chooser } from "../../../love/public/src/app_a_list_chooser.mjs";
export async function app_a_functions_generic(context, lambda$f_name) {
  let f_names = await app_a_functions_generic_f_names();
  let r = app_a_list_chooser(context, "function", f_names, lambda$f_name);
  return r;
}
