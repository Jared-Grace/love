import { app_apps_all_main_fns_generate_generic } from "../../love/js/app_apps_all_main_fns_generate_generic.mjs";
import { function_list_generate_open } from "../../love/js/function_list_generate_open.mjs";
export async function app_apps_all_main_fns_generate_open() {
  let generate_fn = function_list_generate_open;
  await app_apps_all_main_fns_generate_generic(generate_fn);
}
