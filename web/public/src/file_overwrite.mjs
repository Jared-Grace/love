import { log } from "../../../love/public/src/log.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { app_api_cache_clear } from "../../../love/public/src/app_api_cache_clear.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {
  marker("1");
  if (browser_is()) {
    log(message);
    let r = await app_api_fn(file_overwrite, arguments);
    app_api_cache_clear(file_read, [file_path]);
    return r;
  }
  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
}
