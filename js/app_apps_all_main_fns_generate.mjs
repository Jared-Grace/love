import { function_list_generate } from "./function_list_generate.mjs";
import { apps_all_main_fns_generate_generic } from "./apps_all_main_fns_generate_generic.mjs";
export async function app_apps_all_main_fns_generate() {
  let generate_fn = function_list_generate;
  await apps_all_main_fns_generate_generic(generate_fn);
}
