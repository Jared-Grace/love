import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { data_identifiers_get_properties } from "./data_identifiers_get_properties.mjs";
import { list_intersect_sort_text } from "./list_intersect_sort_text.mjs";
import { function_list_generate } from "./function_list_generate.mjs";
export async function app_apps_all_main_fns_generate() {
  let prefixed = await apps_names_prefixed();
  let identifier_names = await data_identifiers_get_properties();
  let apps = list_intersect_sort_text(prefixed, identifier_names);
  await function_list_generate(app_apps_all_main_fns_generate, apps);
}
