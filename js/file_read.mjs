import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { file_read_cached_initialize } from "./file_read_cached_initialize.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { browser_is } from "./browser_is.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { browser_files_store } from "./browser_files_store.mjs";
import { indexeddb_get } from "./indexeddb_get.mjs";
import { browser_files_database_initialize } from "./browser_files_database_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { indexeddb_put } from "./indexeddb_put.mjs";
import { json_decompress } from "./json_decompress.mjs";
import { list_last } from "./list_last.mjs";
export async function file_read(file_path) {
  "What is in a file, as text - read from the disk when this is a program and out of the browser's own store of files when it is a page, so a caller writes one line either side of that difference.";
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
    let store = browser_files_store();
    let item = await indexeddb_get(
      browser_files_database_initialize,
      store,
      file_path,
    );
    let p = "compressed";
    let fetched = property_exists(item, p);
    if (not(fetched)) {
      ("The code editor's page first learns only the names of the files, and a file it has only the name of is fetched from the serving machine the first time it is read, then kept. No other page stores a name without its contents, so no other page reaches this.");
      let downloaded = await app_shared_api({
        f_name: fn_name("app_a_download_file"),
        args: [file_path],
      });
      let compressed_downloaded = property_get(downloaded, p);
      function value_get(previous) {
        property_set(previous, p, compressed_downloaded);
        return previous;
      }
      item = await indexeddb_put(
        browser_files_database_initialize,
        store,
        file_path,
        value_get,
      );
    }
    let compressed = property_get(item, p);
    let f = await json_decompress(compressed);
    let versions = property_get(f, "versions");
    let last = list_last(versions);
    return last;
  }
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
}
