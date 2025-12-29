import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
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
      const p = "compressed";
      let f = null;
      let nn = null_not_is(previous);
      if (nn) {
        let compressed_before = object_property_get(previous, p);
        f = await json_decompress(compressed_before);
      } else {
        f = {
          ["versions"]: [],
        };
        previous = {};
      }
      let list = object_property_get(f, "versions");
      list_add(list, contents);
      let compressed_after = await json_compress(f);
      object_property_set(previous, p, compressed_after);
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
