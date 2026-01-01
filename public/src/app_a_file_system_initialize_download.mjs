import { list_to_dictionary_property } from "../../../love/public/src/list_to_dictionary_property.mjs";
import { indexeddb_put_multiple } from "../../../love/public/src/indexeddb_put_multiple.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { app_a_download } from "../../../love/public/src/app_a_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
export async function app_a_file_system_initialize_download() {
  let r = await app_api_fn(app_a_download, []);
  let dictionary = list_to_dictionary_property(r, "key");
  let store = app_a_file_system_store();
  await indexeddb_put_multiple(app_a_indexeddb_initialize, store, dictionary);
  storage_local_set(app_a, app_a_file_system_initialize.name, true);
}
