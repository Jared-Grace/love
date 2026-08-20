import { function_list_generate } from "./function_list_generate.mjs";
import { apps_all_main_fns_generate_generic } from "./apps_all_main_fns_generate_generic.mjs";
export async function apps_all_main_fns_generate() {
  "Writes the list of every app's way in out again from the apps that are actually there, so a newly made app shows up without anybody keeping a list true by hand.";
  let generate_fn = function_list_generate;
  await apps_all_main_fns_generate_generic(generate_fn);
}
