import { global_function_property_get } from "./global_function_property_get.mjs";
import { file_read_cached_initialize } from "./file_read_cached_initialize.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { json_decompress } from "./json_decompress.mjs";
import { list_last } from "./list_last.mjs";
import { property_get } from "./property_get.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { app_a_indexeddb_initialize } from "./app_a_indexeddb_initialize.mjs";
import { app_a_file_system_store } from "./app_a_file_system_store.mjs";
import { indexeddb_get } from "./indexeddb_get.mjs";
import { browser_is } from "./browser_is.mjs";
export async function file_read(file_path) {
  let exists = global_function_property_exists(
    file_read_cached_initialize,
    file_path,
  );
  if (exists) {
    let c = await global_function_property_get(
      file_read_cached_initialize,
      file_path,
    );
    return c;
  }
  if (browser_is()) {
    file_path = file_path_normalize(file_path);
    let store = app_a_file_system_store();
    let item = await indexeddb_get(
      app_a_indexeddb_initialize,
      store,
      file_path,
    );
    let compressed = property_get(item, "compressed");
    let f = await json_decompress(compressed);
    let versions = property_get(f, "versions");
    let last = list_last(versions);
    return last;
  }
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
}
