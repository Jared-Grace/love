import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { app_a_download } from "../../../love/public/src/app_a_download.mjs";
import { global_function_initialize_lambda_async } from "../../../love/public/src/global_function_initialize_lambda_async.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_file_system_initialize() {
  let value = storage_local_exists(app_a, app_a_file_system_initialize.name);
  if (value) {
    return;
  }
  async function lambda2() {
    let db = await app_a_indexeddb_initialize();
    let db_get = lambda_get(db);
    let r = await app_api_fn(app_a_download, []);
    async function lambda(item) {
      let value_get = lambda_get(item);
      let path = object_property_get(item, "path");
      let n = path_normalize(path);
      let store = app_a_file_system_store();
      let value3 = await indexeddb_put(db_get, store, n, value_get);
    }
    await each_async(r, lambda);
    storage_local_set(app_a, app_a_file_system_initialize.name, true);
    let v = true;
    return v;
  }
  let value2 = await global_function_initialize_lambda_async(
    app_a_file_system_initialize,
    lambda2,
  );
  marker("1");
}
