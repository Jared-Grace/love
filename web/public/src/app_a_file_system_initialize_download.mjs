import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { list_property_exists_not_error } from "../../../love/public/src/list_property_exists_not_error.mjs";
import { list_to_dictionary_property } from "../../../love/public/src/list_to_dictionary_property.mjs";
import { indexeddb_put_multiple } from "../../../love/public/src/indexeddb_put_multiple.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { app_a_download } from "../../../love/public/src/app_a_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
export async function app_a_file_system_initialize_download() {
  let db = await app_a_indexeddb_initialize();
  let db_get = lambda_get(db);
  let r = await app_api_fn(app_a_download, []);
  list_property_exists_not_error(r, "key");
  let dictionary = list_to_dictionary_property(r, "key");
  let store = app_a_file_system_store();
  await indexeddb_put_multiple(db_get, store, dictionary);
  storage_local_set(app_a, app_a_file_system_initialize.name, true);
  let all = await indexeddb_get_all(db_get, store);
  list_property_exists_not_error(all, "key");
}
