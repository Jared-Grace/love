import { json_decompress } from "../../../love/public/src/json_decompress.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_path_normalize } from "../../../love/public/src/file_path_normalize.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { indexeddb_read } from "../../../love/public/src/indexeddb_read.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read(file_path) {
  if (browser_is()) {
    file_path = file_path_normalize(file_path);
    await app_a_file_system_initialize();
    let store = app_a_file_system_store();
    let item = await indexeddb_read(
      app_a_indexeddb_initialize,
      store,
      file_path,
    );
    let compressed = object_property_get(item, "compressed");
    let f = await json_decompress(compressed);
    let versions = object_property_get(f, "versions");
    let last = list_last(versions);
    return last;
  }
  marker("1");
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
}
