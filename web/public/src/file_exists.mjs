import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { indexeddb_read } from "../../../love/public/src/indexeddb_read.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { throws_not_async } from "../../../love/public/src/throws_not_async.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { promise_is } from "../../../love/public/src/promise_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function file_exists(file_path) {
  if (browser_is()) {
    await app_a_file_system_initialize();
    let store = app_a_file_system_store();
    let item = await indexeddb_read(
      app_a_indexeddb_initialize,
      store,
      file_path,
    );
    return item;
  }
  marker("1");
  if (promise_is(file_path)) {
    error();
  }
  let fs = await import("fs");
  let v = fs.promises;
  let access = object_property_get(v, "access");
  let constants = object_property_get(fs, "constants");
  let exists = await throws_not_async(lambda);
  async function lambda() {
    await access(file_path, constants.F_OK);
  }
  return exists;
}
