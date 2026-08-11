import { apps_all_main_fns_generate_generic } from "./apps_all_main_fns_generate_generic.mjs";
import { function_list_generate_open } from "./function_list_generate_open.mjs";
export async function apps_all_main_fns_generate_open() {
  let generate_fn = function_list_generate_open;
  await apps_all_main_fns_generate_generic(generate_fn);
}
