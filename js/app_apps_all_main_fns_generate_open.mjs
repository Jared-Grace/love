import { apps_names_prefixed } from "../../love/js/apps_names_prefixed.mjs";
import { data_identifiers_get_properties } from "../../love/js/data_identifiers_get_properties.mjs";
import { list_intersect_sort_text } from "../../love/js/list_intersect_sort_text.mjs";
import { function_list_generate_open } from "../../love/js/function_list_generate_open.mjs";
export async function app_apps_all_main_fns_generate_open() {
  let generate_fn = function_list_generate_open;
  let prefixed = await apps_names_prefixed();
  let identifier_names = await data_identifiers_get_properties();
  let apps = list_intersect_sort_text(prefixed, identifier_names);
  await generate_fn(app_apps_all_main_fns_generate_open, apps);
}
