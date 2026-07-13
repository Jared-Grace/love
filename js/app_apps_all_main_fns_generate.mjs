import { function_list_generate } from "../../love/js/function_list_generate.mjs";
import { app_apps_all_main_fns_generate_generic } from "../../love/js/app_apps_all_main_fns_generate_generic.mjs";
export async function app_apps_all_main_fns_generate() {
  let generate_fn = function_list_generate;
  await app_apps_all_main_fns_generate_generic(generate_fn);
}
