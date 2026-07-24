import { promise_catch_ignore } from "./promise_catch_ignore.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { property_set } from "./property_set.mjs";
import { json_compress } from "./json_compress.mjs";
import { list_add } from "./list_add.mjs";
import { indexeddb_put } from "./indexeddb_put.mjs";
import { json_decompress } from "./json_decompress.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_indexeddb_initialize } from "./app_a_indexeddb_initialize.mjs";
import { app_a_file_system_store } from "./app_a_file_system_store.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { browser_is } from "./browser_is.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
export async function file_overwrite_uncached(file_path, contents) {
  if (browser_is()) {
    file_path = file_path_normalize(file_path);
    let store = app_a_file_system_store();
    async function value_get(previous) {
      let p = "compressed";
      let f = null;
      let nn = null_is(previous);
      if (nn) {
        f = {
          ["versions"]: [""],
        };
        previous = {
          key: file_path,
        };
      } else {
        let compressed_before = property_get(previous, p);
        f = await json_decompress(compressed_before);
      }
      let e = text_empty_is(contents);
      if (e) {
        property_set(previous, "deleted", true);
      } else {
        property_delete_if_exists(previous, "deleted");
      }
      let list = property_get(f, "versions");
      list_add(list, contents);
      let compressed_after = await json_compress(f);
      property_set(previous, p, compressed_after);
      return previous;
    }
    let item = await indexeddb_put(
      app_a_indexeddb_initialize,
      store,
      file_path,
      value_get,
    );
    return;
  } else {
    await file_parent_exists_ensure(file_path);
    let fs = await import("fs");
    let temp_path = file_path_temp(file_path);
    try {
      await fs.promises.writeFile(temp_path, contents, "utf-8");
      await fs.promises.rename(temp_path, file_path);
    } catch (e) {
      let promise = fs.promises.unlink(temp_path);
      await promise_catch_ignore(promise);
      throw e;
    }
  }
  await data_file_update(file_path);
  return;
}
