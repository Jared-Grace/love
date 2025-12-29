import { null_is } from "../../../love/public/src/null_is.mjs";
import { object_property_change_async } from "../../../love/public/src/object_property_change_async.mjs";
import { json_compress } from "../../../love/public/src/json_compress.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
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
    async function value_get(previous) {
      if (null_is(previous)) {
        previous = {
          ["compressed"]: null,
        };
      }
      async function lambda2(compressed_before) {
        let f = await json_decompress(compressed_before);
        let versions = object_property_get(f, "versions");
        list_add(versions, contents);
        let compressed_after = await json_compress(f);
        return compressed_after;
      }
      const p = "compressed";
      $x
       object_property_change_async(previous, p, lambda2);
      return previous;
    }
    let item = await indexeddb_put(
      app_a_indexeddb_initialize,
      store,
      file_path,
      value_get,
    );
    return;
  }
  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
}
