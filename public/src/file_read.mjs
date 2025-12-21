import { error } from "../../../love/public/src/error.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { app_api_cache_indexeddb_fn } from "../../../love/public/src/app_api_cache_indexeddb_fn.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_download } from "../../../love/public/src/app_a_download.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read(file_path) {
  if (browser_is()) {
    let file_system = await app_api_cache_indexeddb_fn(
      app_a_download,
      [],
      app_a_indexeddb_initialize,
      "files",
    );
    log({
      file_system,
    });
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
