import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { indexeddb_put_multiple } from "../../../love/public/src/indexeddb_put_multiple.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_download } from "../../../love/public/src/app_a_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
export async function app_a_file_system_initialize_download() {
  let db = await app_a_indexeddb_initialize();
  let db_get = lambda_get(db);
  let r = await app_api_fn(app_a_download, []);
  function lambda2(item2v) {
    let value_get = lambda_get(item2v);
    return value_get;
  }
  function lambda3(item2k) {
    let key = object_property_get(item2k, "key");
    return key;
  }
  let dictionary = list_to_dictionary_key(r, lambda2, lambda3);
  let store = app_a_file_system_store();
  await indexeddb_put_multiple(db_get, store, dictionary);
  global_function_property_set(indexeddb_put_multiple, dictionary);
  storage_local_set(app_a, app_a_file_system_initialize.name, true);
}
