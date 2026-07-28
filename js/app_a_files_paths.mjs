import { list_filter_property_exclude_if_exists } from "./list_filter_property_exclude_if_exists.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { browser_files_path_key } from "./browser_files_path_key.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
export async function app_a_files_paths() {
  let store = browser_files_store();
  let all = await indexeddb_get_all(browser_files_database_initialize, store);
  let filtered = list_filter_property_exclude_if_exists(all, "deleted", true);
  let property_name = browser_files_path_key();
  let files_paths = list_map_property(filtered, property_name);
  return files_paths;
}
