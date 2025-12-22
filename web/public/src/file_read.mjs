import { indexeddb_read } from "../../../love/public/src/indexeddb_read.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read(file_path) {
  if (browser_is()) {
    await app_a_file_system_initialize();
    let item = await indexeddb_read(db_get, store, key);
    error();
    return;
    let r = object_property_get(file_system, file_path);
    return r;
  }
  marker("1");
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
}
