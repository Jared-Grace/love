import { app_a_file_system_initialize_download } from "../../../love/public/src/app_a_file_system_initialize_download.mjs";
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
    await app_a_file_system_initialize_download();
    let v = true;
    return v;
  }
  let value2 = await global_function_initialize_lambda_async(
    app_a_file_system_initialize,
    lambda2,
  );
  marker("1");
}
