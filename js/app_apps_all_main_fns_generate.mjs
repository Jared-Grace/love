import { apps_names } from "./apps_names.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_exists } from "./property_exists.mjs";
import { function_list_generate } from "./function_list_generate.mjs";
export async function app_apps_all_main_fns_generate() {
  let names = await apps_names();
  let identifiers = await data_identifiers_get();
  let prefixed = list_map(names, app_shared_name_prefixed);
  let unique = list_unique(prefixed);
  function lambda(app_name) {
    let exists = property_exists(identifiers, app_name);
    return exists;
  }
  let apps = list_filter(unique, lambda);
  list_sort_text(apps);
  await function_list_generate(app_apps_all_main_fns_generate, apps);
}
