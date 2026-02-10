import { file_path_normalize } from "../../../love/public/src/file_path_normalize.mjs";
import { indexeddb_exists } from "../../../love/public/src/indexeddb_exists.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { throws_not_async } from "../../../love/public/src/throws_not_async.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { promise_is } from "../../../love/public/src/promise_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function file_exists(file_path) {
  if (browser_is()) {
    file_path = file_path_normalize(file_path);
    await app_a_file_system_initialize();
    let store = app_a_file_system_store();
    let exists = await indexeddb_exists(
      app_a_indexeddb_initialize,
      store,
      file_path,
    );
    return exists;
  }
  if (promise_is(file_path)) {
    error();
  }
  let fs = await import("fs");
  let v = fs.promises;
  let access = property_get(v, "access");
  let constants = property_get(fs, "constants");
  let exists = await throws_not_async(lambda);
  async function lambda() {
    await access(file_path, constants.F_OK);
  }
  return exists;
}
