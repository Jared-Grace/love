import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { json_decompress } from "../../../love/public/src/json_decompress.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { file_path_normalize } from "../../../love/public/src/file_path_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {
  marker("1");
  if (browser_is()) {
    file_path = file_path_normalize(file_path);
    await app_a_file_system_initialize();
    let store = app_a_file_system_store();
    function lambda() {}
    let item = await indexeddb_put(
      app_a_indexeddb_initialize,
      store,
      file_path,
      lambda,
    );
    let compressed = object_property_get(item, "compressed");
    let f = json_decompress(compressed);
    let versions = object_property_get(f, "versions");
    let last = list_last(versions);
    return last;
  }
  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
}
