import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { string_starts_with_not } from "../../../love/public/src/string_starts_with_not.mjs";
import { indexeddb_exists } from "../../../love/public/src/indexeddb_exists.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
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
    file_path = path_normalize(file_path);
    const prefix = "../";
    let n = string_starts_with_not(s, prefix);
    if (n) {
      file_path = prefix + "love/" + file_path;
    }
    await app_a_file_system_initialize();
    let store = app_a_file_system_store();
    let exists = await indexeddb_exists(
      app_a_indexeddb_initialize,
      store,
      file_path,
    );
    return exists;
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
