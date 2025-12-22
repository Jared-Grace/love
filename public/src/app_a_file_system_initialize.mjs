import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
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
    let r = await app_api_fn(app_a_download, []);
    let db = await app_a_indexeddb_initialize();
  }
  let value2 = await global_function_initialize_lambda_async(
    app_a_file_system_initialize,
    lambda2,
  );
  marker("1");
}
