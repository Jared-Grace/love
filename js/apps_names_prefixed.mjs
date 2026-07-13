import { apps_names } from "./apps_names.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
export async function apps_names_prefixed() {
  let names = await apps_names();
  let prefixed = list_map_unique(names, app_shared_name_prefixed);
  return prefixed;
}
