import { apps_names } from "./apps_names.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { function_list_generate } from "./function_list_generate.mjs";
export async function app_apps_all_main_fns_generate() {
  let names = await apps_names();
  let identifiers = await data_identifiers_get();
  let prefixed = list_map_unique(names, app_shared_name_prefixed);
  let identifier_names = properties_get(identifiers);
  let apps = list_intersect(prefixed, identifier_names);
  list_sort_text(apps);
  await function_list_generate(app_apps_all_main_fns_generate, apps);
}
