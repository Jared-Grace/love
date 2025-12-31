import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_a_indexeddb_path_key } from "../../../love/public/src/app_a_indexeddb_path_key.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
export async function app_a_files_paths() {
  let store = app_a_file_system_store();
  let all = await indexeddb_get_all(app_a_indexeddb_initialize, store);
  let property_name = app_a_indexeddb_path_key();
  let mapped = list_map_property(all, property_name);
  return mapped;
}
